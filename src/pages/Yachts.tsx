import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import SearchSection from '../components/SearchSection';

const YachtsContainer = styled.div`
  min-height: 100vh;
  background-color: white;
  font-family: 'Inter', sans-serif;
`;

const MainContent = styled.main`
  padding: 1rem 2rem 2rem 2rem;
  
  @media (max-width: 768px) {
    padding: 0.5rem 1rem 1rem 1rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const FiltersSection = styled.div`
  width: 280px;
  flex-shrink: 0;
  
  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileButtonsContainer = styled.div`
  display: none;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileButton = styled.button`
  background: white;
  color: #333;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  padding: 0.5rem 1.2rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f5f5f5;
    border-color: #ccc;
  }
`;

const FilterPopup = styled.div<{ isOpen: boolean }>`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  padding: 1rem;
`;

const FilterPopupContent = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  max-width: 400px;
  margin: 2rem auto;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
`;

const PopupCloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #333;
  }
`;

const FilterCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;

const FilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: 1rem;
`;

const FilterTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const FilterToggle = styled.span<{ isOpen: boolean }>`
  font-size: 0.8rem;
  color: #666;
  transition: transform 0.2s ease;
  transform: ${props => props.isOpen ? 'rotate(90deg)' : 'rotate(0deg)'};
  
  &::before {
    content: '>';
  }
`;

const FilterContent = styled.div<{ isOpen: boolean }>`
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

const FilterOption = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #666;
  
  &:hover {
    color: #333;
  }
`;

const FilterCheckbox = styled.input`
  width: 16px;
  height: 16px;
  accent-color: #2196f3;
`;

const PriceRange = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const PriceInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  
  &::placeholder {
    color: #999;
  }
`;

const YachtsGrid = styled.div<{ viewMode: string }>`
  flex: 1;
  display: ${props => {
    if (props.viewMode === 'list') {
      return 'flex';
    } else if (props.viewMode === 'compact') {
      return 'grid';
    } else {
      return 'grid';
    }
  }};
  flex-direction: ${props => props.viewMode === 'list' ? 'column' : 'row'};
  grid-template-columns: ${props => {
    if (props.viewMode === 'compact') {
      return 'repeat(2, 1fr)';
    } else if (props.viewMode === 'list') {
      return 'none';
    } else {
      return 'repeat(3, 1fr)';
    }
  }};
  gap: ${props => props.viewMode === 'list' ? '0.5rem' : '1.5rem'};
  
  @media (max-width: 1200px) {
    grid-template-columns: ${props => {
      if (props.viewMode === 'compact') {
        return 'repeat(2, 1fr)';
      } else if (props.viewMode === 'list') {
        return 'none';
      } else {
        return 'repeat(2, 1fr)';
      }
    }};
  }
  
  @media (max-width: 768px) {
    grid-template-columns: ${props => {
      if (props.viewMode === 'compact') {
        return 'repeat(2, 1fr)';
      } else if (props.viewMode === 'list') {
        return 'none';
      } else {
        return '1fr';
      }
    }};
    gap: ${props => props.viewMode === 'list' ? '0.5rem' : '1rem'};
  }
`;

const YachtCard = styled.div<{ viewMode: string }>`
  background: white;
  border-radius: ${props => props.viewMode === 'list' ? '10px' : '15px'};
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: ${props => props.viewMode === 'list' ? 'flex' : 'block'};
  align-items: ${props => props.viewMode === 'list' ? 'center' : 'stretch'};
  gap: ${props => props.viewMode === 'list' ? '1rem' : '0'};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }
`;

const YachtImage = styled.div<{ viewMode: string }>`
  width: ${props => props.viewMode === 'list' ? '120px' : '100%'};
  height: ${props => props.viewMode === 'list' ? '80px' : '160px'};
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  font-size: ${props => props.viewMode === 'list' ? '0.8rem' : '0.9rem'};
  color: #1976d2;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='texture'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23texture)' opacity='0.1'/%3E%3C/svg%3E");
    pointer-events: none;
  }
`;

const YachtInfo = styled.div`
  padding: 0.8rem;
`;

const YachtTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 0.4rem 0;
`;

const YachtLocation = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  color: #666;
  margin: 0 0 0.4rem 0;
`;

const YachtFeatures = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const FeatureTag = styled.span`
  background: #e3f2fd;
  color: #1976d2;
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
`;

const YachtPrice = styled.div`
  font-family: 'GT Walsheim', 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #2196f3;
  margin-top: 0.4rem;
`;

const Yachts: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    location: [],
    yachtType: [],
    priceRange: { min: '', max: '' }
  });

  const [filterSections, setFilterSections] = useState({
    location: true,
    yachtType: true,
    priceRange: true,
    features: true
  });

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid', 'list', 'compact'
  const [isSortOpen, setIsSortOpen] = useState(false);

  const toggleFilterSection = (section: string) => {
    setFilterSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }));
  };

  const toggleMobileFilter = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen);
  };

  const toggleSort = () => {
    setIsSortOpen(!isSortOpen);
  };

  const toggleViewMode = () => {
    if (viewMode === 'grid') {
      setViewMode('list');
    } else if (viewMode === 'list') {
      setViewMode('compact');
    } else {
      setViewMode('grid');
    }
  };

  const yachts = [
    {
      id: 1,
      title: "Lüks Yat Kiralama",
      location: "İstanbul - Beşiktaş",
      price: "₺15,000/gün",
      features: ["12 Kişi", "4 Kabin", "Kaptan"]
    },
    {
      id: 2,
      title: "Bodrum Tekne Turu",
      location: "Muğla - Bodrum",
      price: "₺8,500/gün",
      features: ["8 Kişi", "3 Kabin", "Kaptan"]
    },
    {
      id: 3,
      title: "Marmaris Yat Charter",
      location: "Muğla - Marmaris",
      price: "₺12,000/gün",
      features: ["10 Kişi", "4 Kabin", "Kaptan"]
    },
    {
      id: 4,
      title: "Fethiye Tekne Kiralama",
      location: "Muğla - Fethiye",
      price: "₺6,500/gün",
      features: ["6 Kişi", "2 Kabin", "Kaptan"]
    },
    {
      id: 5,
      title: "Antalya Yat Turu",
      location: "Antalya - Kemer",
      price: "₺18,000/gün",
      features: ["15 Kişi", "6 Kabin", "Kaptan"]
    },
    {
      id: 6,
      title: "İzmir Tekne Kiralama",
      location: "İzmir - Çeşme",
      price: "₺9,500/gün",
      features: ["8 Kişi", "3 Kabin", "Kaptan"]
    }
  ];

  return (
    <YachtsContainer>
      <Header />
      <div style={{ paddingTop: '1rem' }}>
        <SearchSection />
      </div>
      <MainContent>
        <MobileButtonsContainer>
          <MobileButton onClick={toggleMobileFilter}>Filtrele</MobileButton>
          <MobileButton onClick={toggleSort}>Sırala</MobileButton>
          <MobileButton onClick={toggleViewMode}>Görünüm</MobileButton>
        </MobileButtonsContainer>
        
        {/* Sort Dropdown */}
        {isSortOpen && (
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'white',
            borderRadius: '15px',
            padding: '1.5rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            zIndex: 1001,
            minWidth: '250px'
          }}>
            <div style={{ marginBottom: '1rem', fontWeight: '600', color: '#333' }}>Sıralama</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <button style={{
                background: 'none',
                border: 'none',
                padding: '0.5rem',
                textAlign: 'left',
                cursor: 'pointer',
                borderRadius: '8px',
                fontSize: '0.9rem'
              }}>Fiyat (Düşükten Yükseğe)</button>
              <button style={{
                background: 'none',
                border: 'none',
                padding: '0.5rem',
                textAlign: 'left',
                cursor: 'pointer',
                borderRadius: '8px',
                fontSize: '0.9rem'
              }}>Fiyat (Yüksekten Düşüğe)</button>
              <button style={{
                background: 'none',
                border: 'none',
                padding: '0.5rem',
                textAlign: 'left',
                cursor: 'pointer',
                borderRadius: '8px',
                fontSize: '0.9rem'
              }}>Kapasite</button>
              <button style={{
                background: 'none',
                border: 'none',
                padding: '0.5rem',
                textAlign: 'left',
                cursor: 'pointer',
                borderRadius: '8px',
                fontSize: '0.9rem'
              }}>Puan</button>
            </div>
            <button onClick={toggleSort} style={{
              position: 'absolute',
              top: '0.5rem',
              right: '0.5rem',
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: '#666'
            }}>×</button>
          </div>
        )}
        
        {isSortOpen && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 1000
          }} onClick={toggleSort}></div>
        )}
        
        <FilterPopup isOpen={isMobileFilterOpen}>
          <FilterPopupContent>
            <PopupCloseButton onClick={toggleMobileFilter}>×</PopupCloseButton>
            <FilterCard>
              <FilterHeader onClick={() => toggleFilterSection('location')}>
                <FilterTitle>Lokasyon</FilterTitle>
                <FilterToggle isOpen={filterSections.location} />
              </FilterHeader>
              <FilterContent isOpen={filterSections.location}>
                <FilterOption>
                  <FilterCheckbox type="checkbox" />
                  İstanbul
                </FilterOption>
                <FilterOption>
                  <FilterCheckbox type="checkbox" />
                  Muğla
                </FilterOption>
                <FilterOption>
                  <FilterCheckbox type="checkbox" />
                  Antalya
                </FilterOption>
                <FilterOption>
                  <FilterCheckbox type="checkbox" />
                  İzmir
                </FilterOption>
              </FilterContent>
            </FilterCard>

            <FilterCard>
              <FilterHeader onClick={() => toggleFilterSection('yachtType')}>
                <FilterTitle>Tekne Türü</FilterTitle>
                <FilterToggle isOpen={filterSections.yachtType} />
              </FilterHeader>
              <FilterContent isOpen={filterSections.yachtType}>
                <FilterOption>
                  <FilterCheckbox type="checkbox" />
                  Yat
                </FilterOption>
                <FilterOption>
                  <FilterCheckbox type="checkbox" />
                  Tekne
                </FilterOption>
                <FilterOption>
                  <FilterCheckbox type="checkbox" />
                  Katamaran
                </FilterOption>
                <FilterOption>
                  <FilterCheckbox type="checkbox" />
                  Gulet
                </FilterOption>
              </FilterContent>
            </FilterCard>

            <FilterCard>
              <FilterHeader onClick={() => toggleFilterSection('priceRange')}>
                <FilterTitle>Fiyat Aralığı</FilterTitle>
                <FilterToggle isOpen={filterSections.priceRange} />
              </FilterHeader>
              <FilterContent isOpen={filterSections.priceRange}>
                <PriceRange>
                  <PriceInput 
                    type="number" 
                    placeholder="Min Fiyat"
                  />
                  <PriceInput 
                    type="number" 
                    placeholder="Max Fiyat"
                  />
                </PriceRange>
              </FilterContent>
            </FilterCard>

            <FilterCard>
              <FilterHeader onClick={() => toggleFilterSection('features')}>
                <FilterTitle>Özellikler</FilterTitle>
                <FilterToggle isOpen={filterSections.features} />
              </FilterHeader>
              <FilterContent isOpen={filterSections.features}>
                <FilterOption>
                  <FilterCheckbox type="checkbox" />
                  Kaptan Dahil
                </FilterOption>
                <FilterOption>
                  <FilterCheckbox type="checkbox" />
                  WiFi
                </FilterOption>
                <FilterOption>
                  <FilterCheckbox type="checkbox" />
                  Klima
                </FilterOption>
                <FilterOption>
                  <FilterCheckbox type="checkbox" />
                  Barbekü
                </FilterOption>
              </FilterContent>
            </FilterCard>
          </FilterPopupContent>
        </FilterPopup>

        <ContentWrapper>
          <FiltersSection>
            <FilterCard>
              <FilterHeader onClick={() => toggleFilterSection('location')}>
                <FilterTitle>Lokasyon</FilterTitle>
                <FilterToggle isOpen={filterSections.location} />
              </FilterHeader>
              <FilterContent isOpen={filterSections.location}>
                <FilterOption>
                  <FilterCheckbox type="checkbox" />
                  İstanbul
                </FilterOption>
                <FilterOption>
                  <FilterCheckbox type="checkbox" />
                  Muğla
                </FilterOption>
                <FilterOption>
                  <FilterCheckbox type="checkbox" />
                  Antalya
                </FilterOption>
                <FilterOption>
                  <FilterCheckbox type="checkbox" />
                  İzmir
                </FilterOption>
              </FilterContent>
            </FilterCard>

            <FilterCard>
              <FilterHeader onClick={() => toggleFilterSection('yachtType')}>
                <FilterTitle>Tekne Türü</FilterTitle>
                <FilterToggle isOpen={filterSections.yachtType} />
              </FilterHeader>
              <FilterContent isOpen={filterSections.yachtType}>
                <FilterOption>
                  <FilterCheckbox type="checkbox" />
                  Yat
                </FilterOption>
                <FilterOption>
                  <FilterCheckbox type="checkbox" />
                  Tekne
                </FilterOption>
                <FilterOption>
                  <FilterCheckbox type="checkbox" />
                  Katamaran
                </FilterOption>
                <FilterOption>
                  <FilterCheckbox type="checkbox" />
                  Gulet
                </FilterOption>
              </FilterContent>
            </FilterCard>

            <FilterCard>
              <FilterHeader onClick={() => toggleFilterSection('priceRange')}>
                <FilterTitle>Fiyat Aralığı</FilterTitle>
                <FilterToggle isOpen={filterSections.priceRange} />
              </FilterHeader>
              <FilterContent isOpen={filterSections.priceRange}>
                <PriceRange>
                  <PriceInput 
                    type="number" 
                    placeholder="Min Fiyat"
                  />
                  <PriceInput 
                    type="number" 
                    placeholder="Max Fiyat"
                  />
                </PriceRange>
              </FilterContent>
            </FilterCard>

            <FilterCard>
              <FilterHeader onClick={() => toggleFilterSection('features')}>
                <FilterTitle>Özellikler</FilterTitle>
                <FilterToggle isOpen={filterSections.features} />
              </FilterHeader>
              <FilterContent isOpen={filterSections.features}>
                <FilterOption>
                  <FilterCheckbox type="checkbox" />
                  Kaptan Dahil
                </FilterOption>
                <FilterOption>
                  <FilterCheckbox type="checkbox" />
                  WiFi
                </FilterOption>
                <FilterOption>
                  <FilterCheckbox type="checkbox" />
                  Klima
                </FilterOption>
                <FilterOption>
                  <FilterCheckbox type="checkbox" />
                  Barbekü
                </FilterOption>
              </FilterContent>
            </FilterCard>
          </FiltersSection>

          <YachtsGrid viewMode={viewMode}>
            {yachts.map((yacht) => (
              <YachtCard key={yacht.id} viewMode={viewMode}>
                <YachtImage viewMode={viewMode}>
                  Tekne Görseli
                </YachtImage>
                <YachtInfo>
                  <YachtTitle>{yacht.title}</YachtTitle>
                  <YachtLocation>{yacht.location}</YachtLocation>
                  <YachtFeatures>
                    {yacht.features.map((feature, index) => (
                      <FeatureTag key={index}>{feature}</FeatureTag>
                    ))}
                  </YachtFeatures>
                  <YachtPrice>{yacht.price}</YachtPrice>
                </YachtInfo>
              </YachtCard>
            ))}
          </YachtsGrid>
        </ContentWrapper>
      </MainContent>
    </YachtsContainer>
  );
};

export default Yachts; 
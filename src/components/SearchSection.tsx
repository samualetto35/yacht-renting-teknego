import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  background-color: white;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    gap: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem 1rem;
    gap: 0.8rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'GT Walsheim', 'Inter', sans-serif;
  font-size: 3rem;
  font-weight: 800;
  color: #333;
  text-align: center;
  margin: 0;
  line-height: 1.2;
  padding-top: 4rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    padding-top: 3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    padding-top: 2rem;
  }
`;

const FirstLine = styled.div`
  margin-bottom: 0.5rem;
`;

const SecondLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const GradientSpan = styled.span`
  background: linear-gradient(45deg, #87ceeb 0%, #2196f3 50%, #1976d2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SearchBar = styled.div`
  background-color: white;
  border-radius: 50px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 0.6rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  max-width: 800px;
  width: 100%;
  
  @media (max-width: 768px) {
    border-radius: 40px;
    padding: 0.5rem;
    gap: 0.5rem;
  }
  
  @media (max-width: 480px) {
    border-radius: 30px;
    padding: 0.4rem;
    gap: 0.4rem;
  }
`;

const SearchField = styled.div`
  position: relative;
  flex: 1;
`;

const FieldButton = styled.button<{ isOpen: boolean }>`
  width: 100%;
  padding: 0.6rem 1rem;
  border: none;
  background-color: ${props => props.isOpen ? '#e3f2fd' : 'transparent'};
  border-radius: 20px;
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  
  &:hover {
    background-color: #f5f5f5;
  }
  
  @media (max-width: 768px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.75rem;
    border-radius: 15px;
  }
  
  @media (max-width: 480px) {
    padding: 0.4rem 0.7rem;
    font-size: 0.7rem;
    border-radius: 12px;
  }
`;

const FieldLabel = styled.div`
  font-size: 0.65rem;
  font-weight: 600;
  color: #666;
  margin-bottom: 0.15rem;
  
  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.55rem;
  }
`;

const FieldValue = styled.div`
  font-weight: 500;
  color: #333;
  
  @media (max-width: 480px) {
    font-size: 0.65rem;
  }
`;

const Dropdown = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  padding: 0.6rem;
  z-index: 1000;
  display: ${props => props.isOpen ? 'block' : 'none'};
  margin-top: 0.3rem;
  
  @media (max-width: 768px) {
    border-radius: 12px;
    padding: 0.5rem;
  }
  
  @media (max-width: 480px) {
    border-radius: 10px;
    padding: 0.4rem;
  }
`;

const DropdownItem = styled.div`
  padding: 0.5rem 0.7rem;
  border-radius: 10px;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  color: #333;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #e3f2fd;
  }
  
  @media (max-width: 768px) {
    padding: 0.4rem 0.6rem;
    font-size: 0.75rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.3rem 0.5rem;
    font-size: 0.7rem;
  }
`;

const PersonCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const PersonInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const PersonLabel = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  color: #333;
`;

const PersonSubtext = styled.div`
  font-size: 0.7rem;
  color: #666;
`;

const CounterControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CounterButton = styled.button`
  width: 24px;
  height: 24px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.8rem;
  color: #333;
  
  &:hover {
    background-color: #f5f5f5;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const CounterValue = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: #333;
  min-width: 20px;
  text-align: center;
`;

const SearchButton = styled.button`
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 0.6rem 1.2rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #1976d2;
  }
  
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
    border-radius: 15px;
  }
  
  @media (max-width: 480px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.7rem;
    border-radius: 12px;
  }
`;

const SearchSection: React.FC = () => {
  const [openField, setOpenField] = useState<string | null>(null);
  const [selectedValues, setSelectedValues] = useState({
    tur: '',
    lokasyon: '',
    tarih: '',
    kisiSayisi: ''
  });
  const [personCounts, setPersonCounts] = useState({
    yetiskin: 0,
    cocuk7: 0,
    cocuk14: 0,
    bebek: 0
  });

  const turOptions = ['Haftalık', 'Günlük', 'Saatlik'];
  const lokasyonOptions = [
    'İstanbul - Beşiktaş',
    'İstanbul - Kadıköy', 
    'İstanbul - Sarıyer',
    'Muğla - Bodrum',
    'Muğla - Marmaris',
    'Muğla - Fethiye'
  ];

  const handleFieldClick = (field: string) => {
    setOpenField(openField === field ? null : field);
  };

  const handleOptionSelect = (field: string, value: string) => {
    setSelectedValues(prev => ({ ...prev, [field]: value }));
    setOpenField(null);
    
    // Auto-advance to next field
    const fields = ['tur', 'lokasyon', 'tarih', 'kisiSayisi'];
    const currentIndex = fields.indexOf(field);
    if (currentIndex < fields.length - 1) {
      setTimeout(() => {
        setOpenField(fields[currentIndex + 1]);
      }, 300);
    }
  };

  const handlePersonCount = (type: string, action: 'increment' | 'decrement') => {
    setPersonCounts(prev => ({
      ...prev,
      [type]: action === 'increment' ? prev[type as keyof typeof prev] + 1 : Math.max(0, prev[type as keyof typeof prev] - 1)
    }));
  };

  const getTotalPeople = () => {
    return Object.values(personCounts).reduce((sum, count) => sum + count, 0);
  };

  const getPersonDisplayText = () => {
    const total = getTotalPeople();
    if (total === 0) return 'Seçiniz';
    return `${total} Kişi`;
  };

  return (
    <SearchContainer>
      <SectionTitle>
        <FirstLine>Hızlıca Arayın</FirstLine>
        <SecondLine>
          <GradientSpan>Güvenle</GradientSpan> kiralayın
        </SecondLine>
      </SectionTitle>
      <SearchBar>
        <SearchField>
          <FieldButton 
            isOpen={openField === 'tur'} 
            onClick={() => handleFieldClick('tur')}
          >
            <FieldLabel>Tür</FieldLabel>
            <FieldValue>{selectedValues.tur || 'Seçiniz'}</FieldValue>
          </FieldButton>
          <Dropdown isOpen={openField === 'tur'}>
            {turOptions.map((option) => (
              <DropdownItem 
                key={option}
                onClick={() => handleOptionSelect('tur', option)}
              >
                {option}
              </DropdownItem>
            ))}
          </Dropdown>
        </SearchField>

        <SearchField>
          <FieldButton 
            isOpen={openField === 'lokasyon'} 
            onClick={() => handleFieldClick('lokasyon')}
          >
            <FieldLabel>Lokasyon</FieldLabel>
            <FieldValue>{selectedValues.lokasyon || 'Seçiniz'}</FieldValue>
          </FieldButton>
          <Dropdown isOpen={openField === 'lokasyon'}>
            {lokasyonOptions.map((option) => (
              <DropdownItem 
                key={option}
                onClick={() => handleOptionSelect('lokasyon', option)}
              >
                {option}
              </DropdownItem>
            ))}
          </Dropdown>
        </SearchField>

        <SearchField>
          <FieldButton 
            isOpen={openField === 'tarih'} 
            onClick={() => handleFieldClick('tarih')}
          >
            <FieldLabel>Tarih</FieldLabel>
            <FieldValue>{selectedValues.tarih || 'Seçiniz'}</FieldValue>
          </FieldButton>
          <Dropdown isOpen={openField === 'tarih'}>
            <DropdownItem onClick={() => handleOptionSelect('tarih', 'Bu Hafta')}>
              Bu Hafta
            </DropdownItem>
            <DropdownItem onClick={() => handleOptionSelect('tarih', 'Gelecek Hafta')}>
              Gelecek Hafta
            </DropdownItem>
            <DropdownItem onClick={() => handleOptionSelect('tarih', 'Bu Ay')}>
              Bu Ay
            </DropdownItem>
            <DropdownItem onClick={() => handleOptionSelect('tarih', 'Özel Tarih')}>
              Özel Tarih
            </DropdownItem>
          </Dropdown>
        </SearchField>

        <SearchField>
          <FieldButton 
            isOpen={openField === 'kisiSayisi'} 
            onClick={() => handleFieldClick('kisiSayisi')}
          >
            <FieldLabel>Kişi Sayısı</FieldLabel>
            <FieldValue>{getPersonDisplayText()}</FieldValue>
          </FieldButton>
          <Dropdown isOpen={openField === 'kisiSayisi'}>
            <PersonCounter>
              <PersonInfo>
                <PersonLabel>Yetişkin</PersonLabel>
                <PersonSubtext>13+ yaş</PersonSubtext>
              </PersonInfo>
              <CounterControls>
                <CounterButton 
                  onClick={() => handlePersonCount('yetiskin', 'decrement')}
                  disabled={personCounts.yetiskin === 0}
                >
                  -
                </CounterButton>
                <CounterValue>{personCounts.yetiskin}</CounterValue>
                <CounterButton onClick={() => handlePersonCount('yetiskin', 'increment')}>
                  +
                </CounterButton>
              </CounterControls>
            </PersonCounter>
            
            <PersonCounter>
              <PersonInfo>
                <PersonLabel>Çocuk</PersonLabel>
                <PersonSubtext>7-13 yaş</PersonSubtext>
              </PersonInfo>
              <CounterControls>
                <CounterButton 
                  onClick={() => handlePersonCount('cocuk7', 'decrement')}
                  disabled={personCounts.cocuk7 === 0}
                >
                  -
                </CounterButton>
                <CounterValue>{personCounts.cocuk7}</CounterValue>
                <CounterButton onClick={() => handlePersonCount('cocuk7', 'increment')}>
                  +
                </CounterButton>
              </CounterControls>
            </PersonCounter>
            
            <PersonCounter>
              <PersonInfo>
                <PersonLabel>Çocuk</PersonLabel>
                <PersonSubtext>0-7 yaş</PersonSubtext>
              </PersonInfo>
              <CounterControls>
                <CounterButton 
                  onClick={() => handlePersonCount('cocuk14', 'decrement')}
                  disabled={personCounts.cocuk14 === 0}
                >
                  -
                </CounterButton>
                <CounterValue>{personCounts.cocuk14}</CounterValue>
                <CounterButton onClick={() => handlePersonCount('cocuk14', 'increment')}>
                  +
                </CounterButton>
              </CounterControls>
            </PersonCounter>
            
            <PersonCounter>
              <PersonInfo>
                <PersonLabel>Bebek</PersonLabel>
                <PersonSubtext>0-2 yaş</PersonSubtext>
              </PersonInfo>
              <CounterControls>
                <CounterButton 
                  onClick={() => handlePersonCount('bebek', 'decrement')}
                  disabled={personCounts.bebek === 0}
                >
                  -
                </CounterButton>
                <CounterValue>{personCounts.bebek}</CounterValue>
                <CounterButton onClick={() => handlePersonCount('bebek', 'increment')}>
                  +
                </CounterButton>
              </CounterControls>
            </PersonCounter>
          </Dropdown>
        </SearchField>

        <SearchButton>
          Ara
        </SearchButton>
      </SearchBar>
    </SearchContainer>
  );
};

export default SearchSection; 
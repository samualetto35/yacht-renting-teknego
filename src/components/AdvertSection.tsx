import React from 'react';
import styled from 'styled-components';

const AdvertContainer = styled.div`
  background-color: white;
  padding: 3rem 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'GT Walsheim', 'Inter', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin: 0 0 2rem 0;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const AdvertScrollContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const AdvertList = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1rem 0;
  min-width: max-content;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const AdvertCard = styled.div`
  min-width: 320px;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    border-color: #e0e0e0;
  }

  @media (max-width: 768px) {
    min-width: 280px;
  }

  @media (max-width: 480px) {
    min-width: 200px;
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  position: relative;
  overflow: hidden;
  
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

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 140px;
  }
`;

const PlaceholderText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #1976d2;
  font-weight: 500;
  text-align: center;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const AdvertInfo = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media (max-width: 768px) {
    padding: 1.2rem;
    gap: 0.6rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 0.5rem;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
`;

const CardTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin: 0;
  line-height: 1.3;
  flex: 1;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const PriceTag = styled.div`
  background: linear-gradient(135deg, #2196f3 0%, #1976d2 100%);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-family: 'GT Walsheim', 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  white-space: nowrap;
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding: 0.25rem 0.5rem;
  }
`;

const AdvertDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #666;
  margin: 0;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const FeatureTag = styled.span`
  background: #f5f5f5;
  color: #555;
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid #e0e0e0;

  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 0.25rem 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.65rem;
    padding: 0.2rem 0.4rem;
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #f0f0f0;
`;

const LocationInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  font-size: 0.85rem;
  font-family: 'Inter', sans-serif;

  &::before {
    content: '📍';
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const ViewButton = styled.button`
  background: none;
  border: 1px solid #2196f3;
  color: #2196f3;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #2196f3;
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 0.3rem 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding: 0.25rem 0.6rem;
  }
`;

const ViewAllButton = styled.button`
  background-color: white;
  color: #2196f3;
  border: 2px solid #e3f2fd;
  border-radius: 25px;
  padding: 1rem 2rem;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 2rem;

  &:hover {
    background-color: #f8fbff;
    border-color: #2196f3;
    box-shadow: 0 4px 12px rgba(33, 150, 243, 0.15);
  }

  &:active {
    background-color: #e3f2fd;
    box-shadow: 0 2px 8px rgba(33, 150, 243, 0.2);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
    margin-top: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.85rem;
    margin-top: 1rem;
  }
`;

const AdvertSection: React.FC = () => {
  const adverts = [
    {
      id: 1,
      title: "Lüks Yat Kiralama",
      description: "İstanbul Boğazı'nda unutulmaz deneyim yaşayın",
      price: "₺15,000",
      location: "İstanbul - Beşiktaş",
      features: ["12 Kişi", "4 Kabin", "Kaptan", "WiFi"]
    },
    {
      id: 2,
      title: "Bodrum Tekne Turu",
      description: "Masmavi sularında keyifli seyahat",
      price: "₺8,500",
      location: "Muğla - Bodrum",
      features: ["8 Kişi", "3 Kabin", "Kaptan"]
    },
    {
      id: 3,
      title: "Marmaris Yat Charter",
      description: "Profesyonel kaptan eşliğinde lüks deneyim",
      price: "₺12,000",
      location: "Muğla - Marmaris",
      features: ["10 Kişi", "4 Kabin", "Kaptan", "Barbekü"]
    },
    {
      id: 4,
      title: "Fethiye Tekne Kiralama",
      description: "Doğal güzellikler arasında unutulmaz anlar",
      price: "₺6,500",
      location: "Muğla - Fethiye",
      features: ["6 Kişi", "2 Kabin", "Kaptan"]
    },
    {
      id: 5,
      title: "Antalya Yat Turu",
      description: "Lüks ve konfor bir arada, muhteşem deneyim",
      price: "₺18,000",
      location: "Antalya - Kemer",
      features: ["15 Kişi", "6 Kabin", "Kaptan", "Klima"]
    }
  ];

  return (
    <AdvertContainer>
      <SectionTitle>Öne Çıkan Tekneler</SectionTitle>
      <AdvertScrollContainer>
        <AdvertList>
          {adverts.map((advert) => (
            <AdvertCard key={advert.id}>
              <ImagePlaceholder>
                <PlaceholderText>Tekne Görseli</PlaceholderText>
              </ImagePlaceholder>
              <AdvertInfo>
                <CardHeader>
                  <CardTitle>{advert.title}</CardTitle>
                  <PriceTag>{advert.price}/gün</PriceTag>
                </CardHeader>
                <AdvertDescription>{advert.description}</AdvertDescription>
                <FeaturesContainer>
                  {advert.features.map((feature, index) => (
                    <FeatureTag key={index}>{feature}</FeatureTag>
                  ))}
                </FeaturesContainer>
                <CardFooter>
                  <LocationInfo>{advert.location}</LocationInfo>
                  <ViewButton>İncele</ViewButton>
                </CardFooter>
              </AdvertInfo>
            </AdvertCard>
          ))}
        </AdvertList>
      </AdvertScrollContainer>
      <div style={{ textAlign: 'center' }}>
        <ViewAllButton>Tümünü Gör</ViewAllButton>
      </div>
    </AdvertContainer>
  );
};

export default AdvertSection; 
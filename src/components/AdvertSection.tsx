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
  min-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (max-width: 768px) {
    min-width: 240px;
  }
  
  @media (max-width: 480px) {
    min-width: 160px;
  }
`;

const ImagePlaceholder = styled.div`
  width: 280px;
  height: 373px;
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  border-radius: 20px;
  border: 2px solid #2196f3;
  display: flex;
  align-items: center;
  justify-content: center;
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
    width: 240px;
    height: 320px;
    border-radius: 15px;
  }
  
  @media (max-width: 480px) {
    width: 160px;
    height: 213px;
    border-radius: 12px;
  }
`;

const PlaceholderText = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: #1976d2;
  font-weight: 500;
  text-align: center;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const AdvertInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 280px;
  
  @media (max-width: 768px) {
    max-width: 240px;
  }
  
  @media (max-width: 480px) {
    max-width: 160px;
  }
`;

const CardTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const AdvertDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #666;
  margin: 0;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const AdvertPrice = styled.div`
  font-family: 'GT Walsheim', 'Inter', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: #2196f3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const ViewAllButton = styled.button`
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 1rem 2rem;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 2rem;
  
  &:hover {
    background-color: #1976d2;
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
      description: "İstanbul Boğazı'nda unutulmaz deneyim",
      price: "₺15,000/gün"
    },
    {
      id: 2,
      title: "Bodrum Tekne Turu",
      description: "Masmavi sularında keyifli seyahat",
      price: "₺8,500/gün"
    },
    {
      id: 3,
      title: "Marmaris Yat Charter",
      description: "Profesyonel kaptan eşliğinde",
      price: "₺12,000/gün"
    },
    {
      id: 4,
      title: "Fethiye Tekne Kiralama",
      description: "Doğal güzellikler arasında",
      price: "₺6,500/gün"
    },
    {
      id: 5,
      title: "Antalya Yat Turu",
      description: "Lüks ve konfor bir arada",
      price: "₺18,000/gün"
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
                <CardTitle>{advert.title}</CardTitle>
                <AdvertDescription>{advert.description}</AdvertDescription>
                <AdvertPrice>{advert.price}</AdvertPrice>
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
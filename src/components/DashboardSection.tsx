import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  background-color: white;
  padding: 4rem 2rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const DashboardGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    gap: 1rem;
  }
`;

const DashboardCard = styled.div<{ gradient: string; textColor: string }>`
  background: ${props => props.gradient};
  border-radius: 20px;
  padding: 2rem;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--noise-pattern, url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='texture'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23texture)' opacity='0.15'/%3E%3C/svg%3E"));
    pointer-events: none;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    min-height: 250px;
    border-radius: 15px;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    min-height: 200px;
    border-radius: 12px;
  }
`;

const CardTitle = styled.h3<{ textColor: string }>`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${props => props.textColor};
  margin: 0 0 1rem 0;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const CardNumber = styled.div<{ textColor: string }>`
  font-family: 'GT Walsheim', 'Inter', sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  color: ${props => props.textColor};
  text-align: center;
  margin: 1rem 0;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const CardDivider = styled.div<{ textColor: string }>`
  width: 50px;
  height: 2px;
  background-color: ${props => props.textColor};
  margin: 1rem auto;
  opacity: 0.6;
  position: relative;
  z-index: 1;
`;

const CardDescription = styled.p<{ textColor: string }>`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  line-height: 1.5;
  color: ${props => props.textColor};
  margin: 0;
  text-align: center;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const ImageCard = styled.div`
  background: linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%);
  border-radius: 20px;
  padding: 2rem;
  min-height: 300px;
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
    background: var(--noise-pattern, url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='texture'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23texture)' opacity='0.12'/%3E%3C/svg%3E"));
    pointer-events: none;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    min-height: 250px;
    border-radius: 15px;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    min-height: 200px;
    border-radius: 12px;
  }
`;

const PlaceholderImage = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #e3f2fd 0%, #bbdefb 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
  color: #1976d2;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const DashboardSection: React.FC = () => {
  return (
    <DashboardContainer>
      <DashboardGrid>
        {/* Card 1 - Top Left */}
        <DashboardCard 
          gradient="linear-gradient(135deg, #e8eaf6 0%, #f3e5f5 100%)"
          textColor="#333"
          style={{
            '--noise-pattern': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise1'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise1)' opacity='0.18'/%3E%3C/svg%3E\")"
          } as any}
        >
          <CardTitle textColor="#333">
            <span style={{ color: '#333' }}>TekneGo</span>
            <span style={{ color: '#666' }}>, müşterilerinin ihtiyaçlarına göre tekneleri bulmasını, karşılaştırmasını ve rezerve etmesini sağlar.</span>
          </CardTitle>
          <CardDivider textColor="#333" />
          <CardDescription textColor="#333">
            2,000'den fazla insan TekneGo aracılığıyla tekne kiralayarak tatilini konforlu hale getirdi
          </CardDescription>
        </DashboardCard>

        {/* Card 2 - Middle Left */}
        <DashboardCard 
          gradient="linear-gradient(135deg, #e8eaf6 0%, #f3e5f5 100%)"
          textColor="#333"
          style={{
            '--noise-pattern': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise2)' opacity='0.16'/%3E%3C/svg%3E\")"
          } as any}
        >
          <CardNumber textColor="#333">256 Lokasyon</CardNumber>
          <CardDivider textColor="#333" />
          <CardDescription textColor="#333">
            İstanbul'dan Muğla'ya İzmir'den Anltalya'ya Türkiye'nin en güzel kıyılarını, koylarını ve mavi güzellliklerini keşfedin.
          </CardDescription>
        </DashboardCard>

        {/* Card 3 - Top Middle - Image */}
        <ImageCard
          style={{
            '--noise-pattern': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise3'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise3)' opacity='0.14'/%3E%3C/svg%3E\")"
          } as any}
        >
          <PlaceholderImage>
            Image Placeholder
          </PlaceholderImage>
        </ImageCard>

        {/* Card 4 - Bottom Middle */}
        <DashboardCard 
          gradient="linear-gradient(135deg, #ff9800 0%, #f57c00 100%)"
          textColor="white"
          style={{
            '--noise-pattern': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise4'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise4)' opacity='0.12'/%3E%3C/svg%3E\")"
          } as any}
        >
          <CardTitle textColor="white">Toplam Tekne</CardTitle>
          <CardNumber textColor="white">120+</CardNumber>
          <CardDivider textColor="white" />
          <CardDescription textColor="white">
            120den fazla tekne ilan sayesinde aradığınız tekneyi kolayca bulun, hızlıca rezerve edin. 
          </CardDescription>
        </DashboardCard>

        {/* Card 5 - Top Right - Image */}
        <ImageCard
          style={{
            '--noise-pattern': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise5'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise5)' opacity='0.13'/%3E%3C/svg%3E\")"
          } as any}
        >
          <PlaceholderImage>
            Image Placeholder
          </PlaceholderImage>
        </ImageCard>

        {/* Card 6 - Bottom Right */}
        <DashboardCard 
          gradient="linear-gradient(135deg, #e3f2fd 0%, #c8e6c9 100%)"
          textColor="#333"
          style={{
            '--noise-pattern': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise6'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise6)' opacity='0.15'/%3E%3C/svg%3E\")"
          } as any}
        >
          <CardTitle textColor="#333">Mutlu ayrılan müşteri</CardTitle>
          <CardNumber textColor="#1976d2">98%</CardNumber>
          <CardDivider textColor="#1976d2" />
          <CardDescription textColor="#333">
            Müşterilerimizin mutluluğu en büyük önceliğimiz, aynı zamanda da en büyük motivasyonumuz. 
          </CardDescription>
        </DashboardCard>
      </DashboardGrid>
    </DashboardContainer>
  );
};

export default DashboardSection; 
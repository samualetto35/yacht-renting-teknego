import React from 'react';
import styled from 'styled-components';
import SearchSection from '../components/SearchSection';
import AdvertSection from '../components/AdvertSection';
import DashboardSection from '../components/DashboardSection';

const HomeContainer = styled.div`
  width: 100%;
  height: calc(100vh - 110px);
  padding: 0 3rem;
  border-radius: 30px;
  background-color: white;
  
  @media (max-width: 768px) {
    height: calc(70vh - 85px);
    padding: 0 1.5rem;
    border-radius: 25px;
  }
  
  @media (max-width: 480px) {
    height: calc(60vh - 80px);
    padding: 0 1rem;
    border-radius: 20px;
  }
  
  @media (max-width: 360px) {
    height: calc(50vh - 70px);
    padding: 0 0.8rem;
    border-radius: 15px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.4'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 1;
    border-radius: 25px;
    
    @media (max-width: 768px) {
      border-radius: 20px;
    }
    
    @media (max-width: 480px) {
      border-radius: 15px;
    }
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
  filter: contrast(1.3) brightness(0.85) saturate(1.4) sepia(0.15);
  position: relative;
  z-index: 0;
  
  @media (max-width: 768px) {
    border-radius: 20px;
  }
  
  @media (max-width: 480px) {
    border-radius: 15px;
  }
`;

const TekneGoText = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 3rem;
  font-family: 'GT Walsheim', 'Inter', sans-serif;
  font-size: 12rem;
  font-weight: 900;
  color: white;
  z-index: 2;
  line-height: 0.7;
  filter: contrast(1.5) brightness(1.1) saturate(1.2) url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='textGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23textGrain)' opacity='0.3'/%3E%3C/svg%3E");
  -webkit-text-stroke: 2px white;
  text-stroke: 2px white;
  -webkit-text-fill-color: white;
  
  @media (max-width: 768px) {
    font-size: 6rem;
    bottom: 2rem;
    left: 2rem;
    -webkit-text-stroke: 1px white;
    text-stroke: 1px white;
  }
  
  @media (max-width: 480px) {
    font-size: 4rem;
    bottom: 1.5rem;
    left: 1.5rem;
    -webkit-text-stroke: 0.5px white;
    text-stroke: 0.5px white;
  }
`;

const Home: React.FC = () => {
  return (
    <>
      <HomeContainer>
        <ImageContainer>
          <HeroImage 
            src="/ultra-realistic_gradients_of_turquoise_light_blue_and_sea-green_a_pristine_white_yacht_positioned_p_t0avbn3ss8kdxo6c9bmq_0.png" 
            alt="Pristine White Yacht" 
          />
          <TekneGoText>TekneGo</TekneGoText>
        </ImageContainer>
      </HomeContainer>
      <SearchSection />
      <AdvertSection />
      <DashboardSection />
    </>
  );
};

export default Home; 
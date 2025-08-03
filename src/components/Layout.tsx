import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const LayoutContainer = styled.div`
  min-height: 100vh;
  background-color: white;
  font-family: 'Inter', sans-serif;
`;

const MainContent = styled.main`
  min-height: calc(100vh - 80px);
  padding: 0;
  
  @media (max-width: 768px) {
    min-height: calc(100vh - 70px);
  }
  
  @media (max-width: 480px) {
    min-height: calc(100vh - 60px);
  }
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <MainContent>
        {children}
      </MainContent>
    </LayoutContainer>
  );
};

export default Layout; 
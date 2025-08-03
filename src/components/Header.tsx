import React, { useState } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: white;
  padding: 0 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: none;
  border-bottom: none;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 0 40px;
    height: 70px;
  }
  
  @media (max-width: 480px) {
    padding: 0 25px;
    height: 60px;
  }
`;

const Logo = styled.div`
  font-family: 'GT Walsheim', 'Inter', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const Navigation = styled.nav<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 40px;
  
  @media (max-width: 768px) {
    gap: 25px;
  }
  
  @media (max-width: 480px) {
    display: none;
  }
`;

const MobileNavigation = styled.nav<{ isOpen: boolean }>`
  display: none;
  
  @media (max-width: 480px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    flex-direction: column;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }
`;

const NavLink = styled.a`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  color: #333;
  text-decoration: none;
  transition: color 0.2s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: #333;
    transition: width 0.2s ease;
  }
  
  &:hover::after {
    width: 60%;
  }
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 15px 0;
    width: 100%;
    text-align: center;
    
    &::after {
      display: none;
    }
  }
`;

const LoginButton = styled.button`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: #333;
  background-color: #e3f2fd;
  border: 2px solid #e3f2fd;
  border-radius: 25px;
  padding: 8px 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #bbdefb;
    border-color: #bbdefb;
  }
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 6px 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 8px 18px;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

const HamburgerLine = styled.span<{ isOpen: boolean }>`
  width: 25px;
  height: 3px;
  background-color: #333;
  transition: all 0.3s ease;
  
  &:nth-child(1) {
    transform: ${props => props.isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'};
  }
  
  &:nth-child(2) {
    opacity: ${props => props.isOpen ? '0' : '1'};
  }
  
  &:nth-child(3) {
    transform: ${props => props.isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'};
  }
`;

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderContainer>
      <Logo>TekneGo</Logo>
      
      {/* Desktop Navigation */}
      <Navigation isOpen={isMobileMenuOpen}>
        <NavLink href="#yachts">Yatlar</NavLink>
        <NavLink href="#pricing">Fiyatlandırma</NavLink>
        <NavLink href="#how-it-works">Nasıl Çalışır?</NavLink>
        <NavLink href="#contact">İletişim</NavLink>
        <LoginButton>Oturum Aç</LoginButton>
      </Navigation>
      
      {/* Mobile Hamburger Button */}
      <HamburgerButton onClick={toggleMobileMenu}>
        <HamburgerLine isOpen={isMobileMenuOpen} />
        <HamburgerLine isOpen={isMobileMenuOpen} />
        <HamburgerLine isOpen={isMobileMenuOpen} />
      </HamburgerButton>
      
      {/* Mobile Navigation Menu */}
      <MobileNavigation isOpen={isMobileMenuOpen}>
        <NavLink href="#yachts">Yatlar</NavLink>
        <NavLink href="#pricing">Fiyatlandırma</NavLink>
        <NavLink href="#how-it-works">Nasıl Çalışır?</NavLink>
        <NavLink href="#contact">İletişim</NavLink>
        <LoginButton>Oturum Aç</LoginButton>
      </MobileNavigation>
    </HeaderContainer>
  );
};

export default Header; 
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: linear-gradient(180deg, #ffeef8 0%, #e3f2fd 100%);
  padding: 4rem 2rem 2rem 2rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem 1.5rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem 1rem 1rem;
  }
`;

const MainSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const WhiteBox = styled.div`
  background: white;
  border-radius: 25px;
  padding: 3rem 4rem;
  text-align: center;
  max-width: 800px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 2rem 2.5rem;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 2rem;
    border-radius: 15px;
  }
`;

const BrandTitle = styled.h2`
  font-family: 'GT Walsheim', 'Inter', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin: 0 0 1rem 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const BrandSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const BottomSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.3);

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 1rem;
    align-items: flex-start;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    align-items: center;
  }
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 768px) {
    flex: 1;
  }
`;

const BrandName = styled.div`
  font-family: 'GT Walsheim', 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const BrandTagline = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #666;
  max-width: 300px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    max-width: 200px;
  }
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;

  @media (max-width: 768px) {
    flex: 1;
    align-items: flex-end;
  }

  @media (max-width: 480px) {
    align-items: center;
  }
`;

const SubscribeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-end;

  @media (max-width: 768px) {
    align-items: flex-end;
  }

  @media (max-width: 480px) {
    align-items: center;
  }
`;

const SubscribeTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SubscribeForm = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.3rem;
    align-items: flex-end;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
  }
`;

const EmailInput = styled.input`
  padding: 0.6rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #333;
  background: white;
  min-width: 200px;

  &::placeholder {
    color: #999;
  }

  @media (max-width: 768px) {
    min-width: 150px;
    font-size: 0.8rem;
    padding: 0.5rem 0.8rem;
  }

  @media (max-width: 480px) {
    min-width: 180px;
  }
`;

const SubscribeButton = styled.button`
  padding: 0.6rem 1.2rem;
  background: #2196f3;
  color: white;
  border: none;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #1976d2;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }
`;

const PrivacyText = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  color: #666;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.7rem;
    text-align: right;
  }

  @media (max-width: 480px) {
    text-align: center;
  }
`;

const PrivacyLink = styled.span`
  color: #2196f3;
  text-decoration: underline;
  cursor: pointer;
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  color: #666;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const FooterLink = styled.a`
  color: #666;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #333;
  }
`;

const Copyright = styled.div`
  @media (max-width: 768px) {
    order: -1;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <MainSection>
        <WhiteBox>
          <BrandTitle>TekneGo</BrandTitle>
          <BrandSubtitle>
            Türkiye'nin en güvenilir tekne kiralama platformu. Binlerce tekne arasından size en uygun olanını bulun, 
            güvenle rezerve edin ve unutulmaz deniz deneyimleri yaşayın.
          </BrandSubtitle>
        </WhiteBox>

        <BottomSection>
          <LeftContent>
            <BrandName>TekneGo</BrandName>
            <BrandTagline>
              İlk olarak yeni teknelerimiz ve özel fırsatlarımızdan haberdar olun!
            </BrandTagline>
          </LeftContent>

          <RightContent>
            <SubscribeSection>
              <SubscribeTitle>Abone Ol</SubscribeTitle>
              <SubscribeForm>
                <EmailInput 
                  type="email" 
                  placeholder="E-posta adresinizi girin"
                />
                <SubscribeButton>Abone Ol</SubscribeButton>
              </SubscribeForm>
              <PrivacyText>
                Abone olarak <PrivacyLink>Gizlilik Politikamızı</PrivacyLink> kabul etmiş olursunuz.
              </PrivacyText>
            </SubscribeSection>
          </RightContent>
        </BottomSection>
      </MainSection>

      <FooterBottom>
        <FooterLinks>
          <FooterLink href="#privacy">Gizlilik Politikası</FooterLink>
          <span>•</span>
          <FooterLink href="#terms">Kullanım Şartları</FooterLink>
        </FooterLinks>
        <Copyright>
          © 2025 TekneGo. Tüm hakları saklıdır.
        </Copyright>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer; 
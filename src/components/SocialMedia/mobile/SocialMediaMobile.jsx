import { Email, Instagram, WhatsApp } from '@assets';
import {
  LogoMobile,
  SocialMediaMobileContainer,
} from './SocialMediaMobile.style';

export default function SocialMediaMobile() {
  return (
    <>
      <SocialMediaMobileContainer>
        <a
          href="https://wa.me/5511985914817"
          target="_blank"
          rel="noreferrer noopener"
        >
          <LogoMobile src={WhatsApp} alt="WhatsApp" />
        </a>

        <a href="mailto:saudedarua@gmail.com">
          <LogoMobile src={Email} alt="E-mail" />
        </a>

        <a
          href="https://instagram.com/saudedarua?utm_medium=copy_link"
          target="_blank"
          rel="noreferrer noopener"
        >
          <LogoMobile src={Instagram} alt="Instagram" />
        </a>
      </SocialMediaMobileContainer>
    </>
  );
}

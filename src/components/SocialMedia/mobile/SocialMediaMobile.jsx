import { Email, Instagram } from '@assets';
import {
  LogoMobile,
  SocialMediaMobileContainer,
} from './SocialMediaMobile.style';

export default function SocialMediaMobile() {
  return (
    <>
      <SocialMediaMobileContainer>
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

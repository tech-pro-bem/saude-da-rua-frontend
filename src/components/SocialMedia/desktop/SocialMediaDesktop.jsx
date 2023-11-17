import { Email, Instagram } from '@assets';

import { Logo, SocialMediaDesktopContainer } from './SocialMediaDesktop.style';

export default function SocialMediaDesktop() {
  return (
    <>
      <SocialMediaDesktopContainer>
        <li>
          <a href="mailto:saudedarua@gmail.com">
            <Logo src={Email} alt="E-mail" />
            saudedarua@gmail.com
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/saudedarua/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Logo src={Instagram} alt="Instagram" />
            Instagram
          </a>
        </li>
      </SocialMediaDesktopContainer>
    </>
  );
}

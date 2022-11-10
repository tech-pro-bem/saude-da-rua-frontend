import { ShowcaseItemContainer } from './ShowcaseItemMobile.style';
import { OutlinedImageLink } from '@components';

const ShowcaseItemMobile = ({ src, identifier, target, href, rel }) => (
  <ShowcaseItemContainer>
    <OutlinedImageLink
      src={src}
      target={target}
      href={href}
      rel={rel}
      imgBorderRadius="12px"
      topOffset="-8px"
      bottomOffset="12px"
      rightOffset="-8px"
      leftOffset="12px"
      width="80%"
      height="100%"
      imgWidth="100%"
      imgHeight="100%"
    />
    <p>{identifier}</p>
  </ShowcaseItemContainer>
);

export default ShowcaseItemMobile;

import { ShowcaseItemContainer } from './ShowcaseItemMobile.style';
import { OutlinedImage } from '@components';

const ShowcaseItemMobile = ({ src, identifier }) => (
  <ShowcaseItemContainer>
    <OutlinedImage
      src={src}
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

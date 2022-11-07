import { ShowcaseItemContainer } from './ShowcaseItem.style';
import { OutlinedImageLink } from '@components';

const ShowcaseItem = ({ src, identifier, target, href, rel }) => (
  <ShowcaseItemContainer>
    <OutlinedImageLink
      src={src}
      target={target}
      href={href}
      rel={rel}
      imgBorderRadius="8px"
      leftOffset="-8px"
      topOffset="-8px"
      bottomOffset="12px"
      rightOffset="8px"
      width="162px"
      height="170px"
    />
    <p className="big">{identifier}</p>
  </ShowcaseItemContainer>
);

export default ShowcaseItem;

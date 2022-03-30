import { ShowcaseItemContainer } from './ShowcaseItem.style';
import { OutlinedImage } from '../../../../../shared/components';

const ShowcaseItem = ({ src, identifier }) => (
  <ShowcaseItemContainer>
    <OutlinedImage
      src={src}
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

import Gallery from './Gallery';
import QuantationComponents from './Quantation';
import { Structure } from '@components';
import { useMedia } from '../../../../hooks';

const GalleryAndQuantation = () => {
  const mobile = useMedia('(max-width:640px)');
  return (
    <Structure>
      {!mobile ? (
        <>
          <QuantationComponents />
          <Gallery mobile={mobile} />
        </>
      ) : (
        <>
          <Gallery mobile={mobile} />
          <QuantationComponents />
        </>
      )}
    </Structure>
  );
};

export default GalleryAndQuantation;

import StoreDesktop from './Desktop/StoreDesktop';
import StoreMobile from './Mobile/StoreMobile';
import { useMedia } from '../../../../hooks';

const Store = () => {
  const mobile = useMedia('(max-width:960px)');
  return <>{mobile ? <StoreMobile /> : <StoreDesktop />}</>;
};

export default Store;

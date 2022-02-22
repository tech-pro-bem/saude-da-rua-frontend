import { WrapperTextWhere } from './components';
import PhotoMap from './components/PhotoMap/PhotoMap';
import { ContainerWhereAreWe } from './WhereAreWe.style';

const WhereAreWe = () => {
  return (
    <ContainerWhereAreWe>
      <WrapperTextWhere />
      <PhotoMap />
    </ContainerWhereAreWe>
  );
};

export default WhereAreWe;

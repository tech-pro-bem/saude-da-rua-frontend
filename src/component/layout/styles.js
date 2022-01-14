import styled from 'styled-components';

/*DSC_0182 */
export const Img1 = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 609px;

  position: absolute;
  width: 617px;
  height: 374px;
  left: 136px;
  top: 388px;
`;

/*Frame the photo DSC_0182  */
export const FrameImg1 = styled.img`
  position: absolute;
  width: 609px;
  height: 366px;
  left: 125px; /*136px*/
  top: 404px; /*396px */

  /* Cores primárias/Principal */

  border: 2px solid #0095f6;
  box-sizing: border-box;
  border-radius: 12px;
`;

/*H21 */
export const Img2 = styled.img`
  display: block;
  margin-right: auto;
  width: 100%;
  max-width: 189px;

  position: absolute;
  width: 197px;
  height: 280px;
  left: 136px;
  top: 100px;
`;
/*Frame the photo H21 */
export const FrameImg2 = styled.img`
  position: absolute;
  width: 189px;
  height: 272px;
  left: 125px; /* 136px*/
  top: 90px;

  /* Cores primárias/Principal */

  border: 2px solid #0095f6;
  box-sizing: border-box;
  border-radius: 12px;
`;

/*H61 */
export const Img3 = styled.img`
  display: block;
  margin-right: 100vh;
  width: 100%;
  max-width: 420px;
  top: 100px;

  position: absolute;
  height: 280px;
  left: 330px;
  top: 100px;
`;
/*Frame the photo H61 */
export const FrameImg3 = styled.img`
  position: absolute;
  width: 412px;
  height: 272px;
  left: 349px;
  top: 90px;

  /* Cores primárias/Principal */

  border: 2px solid #0095f6;
  box-sizing: border-box;
  border-radius: 12px;
`;

/*componente Quem somos*/
export const QuemSomosTitle = styled.text`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;
  color: #e9e9e9;

  position: absolute;
  width: 100%;
  max-width: 479px;
  min-height: 60px;
  left: 833px;
  top: 127px;
`;
export const AboutText = styled.text`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 21.328px;
  line-height: 32px;
  font-feature-settings: 'pnum' on, 'onum' on;
  color: #e9e9e9;

  margin-top: 5px;

  position: absolute;
  width: 100%;
  max-width: 477px;
  height: 530px;
  left: 835px;
  top: 232px;
`;

export const Div = styled.menu`
  position: absolute;
  width: 1176px;
  height: 662px;
  left: 136px;
  top: 100px;
`;

/* ----------------------------PAGINA ONDE ESTAMOS----------------------------------------------- */
/*Onde estamos */
export const DivWhere = styled.menu`
  position: absolute;
  width: 1213px;
  height: 546.27px;
  left: 132px;
  top: 100.55px;
`;

export const MapImag = styled.img`
  margin-top: 5px;

  position: absolute;
  width: 100%;
  max-width: 477px;
  height: 530px;
  left: 835px;
  top: 1000px; /*232px */
`;

export const OndeEstamosTitle = styled.p`
  position: absolute;
  width: 298px;
  height: 60px;
  left: 132px;
  top: 1000px;

  /* Headers/H2 */

  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;
  /* identical to box height */

  /* Cores secundárias/Principal */

  color: #e9e9e9;
`;

export const OndeEstamosSubTitle1 = styled.p`
  position: absolute;
  width: 61px;
  height: 36px;
  left: 132px;
  top: 1100px;

  /* Font families/Medium */

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */

  /* Cores secundárias/Principal */

  color: #e9e9e9;
`;
export const OndeEstamosSubTitle2 = styled.p`
  position: absolute;
  width: 223px;
  height: 36px;
  left: 132px;
  top: 1150px;

  /* Font families/Regular */

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */
  /* Cores primárias/Principal */

  color: #0095f6;
`;

export const TextWhere = styled.p`
  position: absolute;
  width: 485px;
  height: 35px;
  left: 132px;
  top: 1230px;

  /* Font families/Medium */
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */
  /* Cores secundárias/Principal */

  color: #e9e9e9;
`;
/*------------------------------EMPRESAS QUE NOS APOIAM ------------------------ */

/*Empreas que nos apoaiam */
export const DivPartners = styled.menu`
  position: static;
  width: 1439px;
  height: 458px;
  left: 0px;
  top: 3400px; /*3400px */
  /* Inside auto layout */
  flex: none;
  order: 5;
  flex-grow: 0;
  margin: 16px 0px;
`;

export const PartnersText = styled.p`
  position: absolute;
  width: 379px;
  height: 42px;
  left: 530px;
  top: 1800px;
  /* Headers/H3 */
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 42px;
  /* identical to box height */
  color: #e9e9e9;
`;
export const SpanColor = styled.text`
  color: #0095f6;
`;

export const PartnersPhoto = styled.img`
  position: absolute;
  width: 367px;
  height: 147.3px;
  left: 536px;
  top: 1900px;

  background: url(image.png);
`;

export const ButtonPartnersStyle = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  position: absolute;
  width: 280px;
  height: 57px;
  left: 560px;
  top: 2100px;

  color: #0095f6;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 9px;

  border: 2px solid #0095f6;
  box-sizing: border-box;
  border-radius: 40px;
`;

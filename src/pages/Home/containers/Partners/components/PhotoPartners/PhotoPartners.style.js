import styled from 'styled-components';

export const ContainerPhotoPartners = styled.div`
  position: relative;
  width: 100vw;
  height: 200px;

  .swiper {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    height: calc((100% - 60px) / 2) !important;

    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;

    img {
      width: 180px;
      height: 72px;
    }
  }

  .swiper-pagination {
    bottom: -5px;
  }
`;

export const PartnersPhoto = styled.img`
  margin-bottom: 80px;
  background: url(image.png);

  @media screen and (max-width: 768px) {
    margin: 20px 0;
    width: 180px;
    height: 72px;
  }
`;

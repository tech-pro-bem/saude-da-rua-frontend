import { Swiper, SwiperSlide } from 'swiper/react';

import { partnersLogo } from '@assets';

import { ContainerPhotoPartners, PartnersPhoto } from './PhotoPartners.style';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import { Grid, Pagination } from 'swiper';

// adicionar os futuros parceiros nesse array.
const partners = [
  partnersLogo,
  // partnersLogo,
  // partnersLogo,
  // partnersLogo,
  // partnersLogo,
  // partnersLogo,
  // partnersLogo,
];

const PhotoPartners = () => {
  return (
    <>
      {partners.length > 1 ? (
        <ContainerPhotoPartners>
          <Swiper
            slidesPerView={1}
            grid={{
              rows: 2,
            }}
            spaceBetween={24}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
            className="mySwiper"
          >
            {partners.map((partner, idx) => (
              <SwiperSlide key={idx}>
                <img src={partner} alt="logo da empresa parceira" />
              </SwiperSlide>
            ))}
          </Swiper>
        </ContainerPhotoPartners>
      ) : (
        <>
          <PartnersPhoto
            src={partnersLogo}
            alt="Nossos parceiros: MD e Spirit"
          />
        </>
      )}
    </>
  );
};

export default PhotoPartners;

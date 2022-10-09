import styled from 'styled-components';
import { galleryImg3 } from '@assets/donationPage';

export const HelpNowHeroContainer = styled.section`
  margin: 0;
  padding: 0px;
  margin-bottom: 2rem;
  display: grid;
  position: relative;

  div.content {
    position: absolute;
    top: 6rem;
    left: 0;
    padding: 3rem 15px;
    p {
      font-size: 18px;
      strong {
        color: #0095f6;
      }
    }
    @media (max-width: 450px) {
      top: 2rem;
    }
    @media (max-width: 320px) {
      top: -1rem;
    }
  }
  .background {
    background: url(${galleryImg3}) no-repeat center center;
    filter: blur(2px);
    opacity: 0.3;
    height: 322px;
    background-size: cover;
  }
`;
export const HelpContainer = styled.section`
  div {
    margin-bottom: 2rem;
  }
`;
export const HelpHaveImg = styled.div`
  padding-top: 2rem;
  margin-bottom: 0;
  display: grid;
  img {
    display: block;
    width: 100%;
  }
`;
export const HaveborderBottom = styled.div`
  border-bottom: 1px solid #0095f6;

  ol,
  ul {
    padding: 0 1rem;
    li {
      margin: 1rem 0;
      font-size: 1rem;
      color: white;
      line-height: 24px;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;
export const TitleHelp = styled.h2`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 1.1rem;
  line-height: 24px;
  color: #0095f6;
`;
export const ClipBoardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px;
  border: 1px solid #0095f6;
  padding: none;
  margin: none;
  border-radius: 4px;
  margin-top: 1rem;

  input {
    border: none;
    background: transparent;
    color: white;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 21px;
    display: block;
    padding: 1rem;
    width: 100%;
  }
  button {
    border-radius: 0 4px 4px 0;
    color: white;
    height: 60px;
    cursor: pointer;
    border: none;
    background: #0095f6;
    outline: none;
  }
`;

export const HelpMobileDivision = styled.section`
  padding: 0 15px;
`;

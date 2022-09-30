import styled from 'styled-components';

export const ContainerInstagram = styled.div`
  display: flex;
  flex-direction: column;
  margin: 116px 0;
  align-items: stretch;

  @media screen and (max-width: 768px) {
    margin: 64px 0;
  }
`;

export const InstagramText = styled.h3`
  text-align: center;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.primary_light};

  @media screen and (max-width: 768px) {
    text-align: start;
    font-size: 26px;
    font-weight: 700;
    line-height: 39px;
  }
`;

export const InstagramItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 24px 0;

  @media screen and (max-width: 768px) {
    a + a {
      display: none;
    }
  }
`;

export const IgPictureCard = styled.div`
  width: 100%;
  max-width: 320px;
  margin: 12px;

  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }

  > p {
    font-size: 22px;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const LinkInstagram = styled.a`
  align-self: flex-end;

  @media screen and (max-width: 520px) {
    align-self: center;
  }
`;

export const ButtonLinkInstagram = styled.button`
  padding: 8px 32px;
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 314px;
  height: 59px;
  font-size: 18px;
  font-weight: 500;

  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 40px;
  background-color: ${(props) => props.theme.colors.blackUI};

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary_light};
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.3;
    font-weight: 600;
    gap: 1rem;
    padding: 0.3rem 1.5rem;
    width: auto;
    max-width: 100%;
    margin: 0 auto;
  }
`;

import styled from 'styled-components';

export const ContainerInstagram = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px 0;
  align-items: stretch;
`;

export const InstagramText = styled.h3`
  text-align: center;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.primary_light};
`;

export const InstagramItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 24px 0;
`;

export const IgPictureCard = styled.div`
  max-width: 320px;
  margin: 12px;

  > p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

export const ButtonLinkInstagram = styled.button`
  padding: 8px 16px;
  color: ${(props) => props.theme.colors.primary};

  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 40px;
  background-color: ${(props) => props.theme.colors.blackUI};

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary_light};
  }
`;

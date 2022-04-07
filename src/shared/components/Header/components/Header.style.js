import styled from 'styled-components';
import LinkButton from '../../LinkButton/LinkButton';

export const Container = styled.div`
  padding: 0 8.375rem;
  height: 93px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 8px;

  a {
    color: ${({ theme }) => theme.colors.primary_light};
    font-weight: 600;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
  }
`;

export const DonationButton = styled(LinkButton)`
  padding: 13px 29px;
`;

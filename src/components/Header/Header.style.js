import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import LinkButton from '../LinkButton/LinkButton';

export const HeaderWrapper = styled.header``;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  z-index: 999;
  width: 100%;
  top: 0;
  background-color: ${(props) => props.theme.colors.blackUI};
`;

export const Content = styled.div`
  height: 93px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLinkContent = styled(NavLink)`
  color: ${({ theme }) => theme.colors.primary_light};
  font-weight: 600;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  gap: 8px;

  &.active {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.primary};
    text-decoration-thickness: 2px;
    text-underline-offset: 7px;
  }

  @media (max-width: 873px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 1.7rem;
  }
  @media (max-width: 520px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: white;
    font-size: 1rem;
  }
`;

export const NavMenu = styled.div`
  display: flex;

  padding: 8px;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media (max-width: 873px) {
    display: none;
  }
`;

export const DonationButton = styled(LinkButton)`
  padding: 13px 29px;
  @media (max-width: 873px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 7.125rem;
    margin-bottom: 7.813rem;
    width: 90%;
    position: absolute;
    bottom: 0;
    right: 50%;

    transform: translateX(50%);
  }
`;

export const ToggleMenu = styled.button`
  display: none;

  @media (max-width: 873px) {
    display: flex;

    font-size: 25px;
    margin: 0 1.5rem;
    width: 30px;
    height: 30px;

    color: ${(props) => props.theme.colors.primary_light};
    background: 0;
  }
`;

export const ContainerMobile = styled.div`
  display: none;

  @media (max-width: 873px) {
    display: flex;
    flex-direction: column;
  }
`;

export const NavMenuMobile = styled.nav`
  display: flex;
  flex-direction: column;

  position: ${(props) => (props.isOpened ? 'fixed' : 'static')};
  top: 0;

  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.blackUI};
  z-index: 999;
  & div {
    @media (max-width: 873px) {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      transform: translateY(60%);
    }

    @media (max-width: 520px) {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      transform: translateY(0);
    }
  }

  @media (max-width: 873px) {
    margin-top: 90px;
  }
`;

export const NavLinkMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;

  color: white;
`;

export const ListNavMenu = styled.li`
  list-style: none;
`;

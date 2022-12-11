import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import LinkButton from '../LinkButton/LinkButton';

export const Container = styled.div`
  padding: 0 30px;
  position: fixed;
  z-index: 999;
  width: 100%;
  top: 0;
  background-color: ${(props) => props.theme.colors.blackUI};

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1167px;
    margin: 0 auto;
  }

  @media (max-width: 640px) {
    padding: 0 15px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  height: 93px;
  justify-content: space-between;
`;

export const NavLinkContent = styled(NavLink)`
  color: ${({ theme }) => theme.colors.primary_light};
  font-weight: 600;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;

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
  }

  @media (min-height: 873px) {
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
  padding: 4px;
  align-items: center;
  gap: 25px;

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
    margin-bottom: 7.813rem;
    width: 40%;
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
  }
  @media (max-width: 520px) {
    width: 90%;
  }
  @media (max-height: 390px) {
    margin-bottom: 6.3rem;
  }
`;

export const ToggleMenu = styled.button`
  display: none;

  @media (max-width: 873px) {
    display: flex;

    font-size: 25px;
    color: ${(props) => props.theme.colors.primary_light};
    background: 0;
  }
`;

export const ContainerMobile = styled.div`
  display: none;
  z-index: 999;
  @media (max-width: 873px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-height: 520px) {
    max-height: calc(100vh - 80px);
    overflow-y: scroll;
    position: sticky;
    top: 93px;
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
      gap: 1rem;

      //transform: translateY(60%);
    }

    /*    @media (max-width: 520px) {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      transform: translateY(0);
    } */
  }

  @media (max-width: 873px) {
    margin-top: 90px;
  }
`;

export const NavLinkMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-left: 1rem;
  color: #fff;
`;

export const ListNavMenu = styled.li`
  list-style: none;
`;

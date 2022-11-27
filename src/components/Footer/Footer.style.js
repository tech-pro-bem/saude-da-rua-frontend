import styled from 'styled-components';

export const FooterContainer = styled.footer`
  * {
    color: ${(props) => props.theme.colors.primary_light};
  }
  display: flex;
  flex-direction: column;
  justify-content: center;

  ul {
    list-style: none;
  }
`;

export const Divider = styled.hr`
  width: 100%;
  border: #e9e9e9 solid 0.0625rem;
  opacity: 50%;
  margin: 0 auto;
`;

export const MainFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 5.625rem;
  margin-top: 3.688rem;
  margin-bottom: 4.625rem;

  @media (max-width: 1024px) {
    display: grid;
  }

  @media (max-width: 894px) {
    display: grid;
  }

  @media (max-width: 873px) {
    margin: 0;
    display: flex;
    direction: flex;
    flex-direction: column;
    padding: 1.456rem 0;
  }
`;

export const HeadersFooter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 2.25rem;

  @media (max-width: 873px) {
    margin-bottom: 0.75rem;
  }
`;

export const Text = styled.p`
  display: inline-block;
  padding-right: 18px;
  color: white;
`;

export const Locations = styled.div`
  @media (max-width: 873px) {
    display: none;
  }
`;

export const Contact = styled.div`
  @media (max-width: 873px) {
    display: none;
  }
`;

export const ContactMobile = styled.ul`
  display: none;
  @media (max-width: 873px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1.625rem 0;

    gap: 1rem;
  }
`;

export const Copyright = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  text-align: center;
  font-size: 14px;
  list-style: none;
  padding-bottom: 3.688rem;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
  @media (max-width: 873px) {
    display: none;
  }
`;

export const CopyrightMobile = styled.div`
  display: none;
  @media (max-width: 873px) {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 1.456rem 0 3.125rem 0;
    gap: 10px;
  }
`;

export const Link = styled.a`
  text-decoration: underline;
`;

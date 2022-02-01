import styled from 'styled-components';

export const Container = styled.div`
  .carousel {
    overflow: hidden;
  }

  .inner {
    white-space: nowrap;
    transition: transform 0.3s;
  }

  .carousel-item {
    display: inline-flex;
    height: 500px;
    background: ${(props) => props.theme.colors.black};
  }

  .indicators {
    display: flex;
    justify-content: center;
  }

  .indicators > button {
    margin: 5px;
  }

  .indicators > button.active {
    background: ${(props) => props.theme.colors.dark};
  }

  img {
    display: block;
    margin-top: -170px;
    width: 403px;
    height: 397px;
    margin-left: 600px;
  }

  span {
    color: ${(props) => props.theme.colors.dark};
  }

  h2 {
    color: ${(props) => props.theme.colors.primary_light};
    padding: 5px;
    margin-left: 140px;
  }

  #content {
    margin-left: 150px;
    text-align: justify;
    margin-top: -170px;
    color: ${(props) => props.theme.colors.primary_light};
  }

  #year {
    color: ${(props) => props.theme.colors.light};
    font-size: 24px;
    weight: 700px;
    margin-top: 62px;
    margin-left: 150px;
  }

  .text {
    display: flex;
    flex-direction: column;
    align-itens: center;
    margin-left: 50px;
  }
`;

export const FrameImg1 = styled.div`
  width: 402px;
  height: 397px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 12px;
`;

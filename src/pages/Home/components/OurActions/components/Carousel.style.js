import styled from 'styled-components';

export const Container = styled.div`
  .carousel {
    overflow: hidden;
  }

  .inner {
    white-space: nowrap;
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
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin: 6px;
    // border-radius: 16px;
    // padding: 1px 5px;
    background: #8e8e8e;
  }

  .indicators > button.active {
    background: ${(props) => props.theme.colors.dark};
  }

  img {
    // position: relative;
    // margin-top: -1px;
    width: 403px;
    height: 397px;
    // margin-left: 600px;
    margin-right: -100px;
    // border: 2px solid ${(props) => props.theme.colors.primary};
    // border-radius: 12px;
    // border-left: 500px;
  }

  .arrow {
    width: 18px;
    height: 36px;
  }

  #slide {
    position: absolute;
    margin-left: 1050px;
    top: 1750px;
  }

  span {
    color: ${(props) => props.theme.colors.dark};
  }

  h2 {
    position: absolute;
    color: ${(props) => props.theme.colors.primary_light};
    padding: 5px;
    margin-left: 80px;
    margin-top: 10px;
    font-size: 40px;
  }

  #content {
    margin-left: 90px;
    text-align: justify;
    margin-top: -180px;
    color: ${(props) => props.theme.colors.primary_light};
  }

  #year {
    position: absolute;
    display: inline -block;
    color: ${(props) => props.theme.colors.light};
    font-size: 24px;
    line-height: 36px;
    font-weight: 700px;
    margin-top: 160px;
    margin-left: 100px;
  }

  .text {
    display: flex;
    flex-direction: column;
    align-itens: center;
    margin-left: 50px;
  }
`;

export const FrameImg1 = styled.div`
  width: 403px;
  height: 397px;
  border: 3px solid ${(props) => props.theme.colors.primary};
  border-radius: 12px;
  z-index: 1;
  margin-left: 600px;
  padding-left: -10px;
  padding-top: 8px;
`;

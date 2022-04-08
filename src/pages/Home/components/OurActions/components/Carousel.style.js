import styled from 'styled-components';

export const Container = styled.div`
  .carousel {
    overflow: hidden;
    position: relative;
    padding: 16px 0;
    margin: 100px 0;
  }

  .inner {
    white-space: nowrap;
  }

  .carousel-item {
    display: inline-flex;
    height: 500px;
    background: ${(props) => props.theme.colors.black};
    gap: 32px;
    padding: 0 60px;
  }

  .indicators {
    display: flex;
    justify-content: center;
  }

  .indicators > button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin: 0 6px;
    background: #8e8e8e;
  }

  .indicators > button.active {
    background: ${(props) => props.theme.colors.dark};
  }

  img {
    width: 403px;
    height: 397px;
    margin-right: -100px;
  }

  .arrow {
    width: 18px;
    height: 36px;
  }

  .slide {
    position: absolute;
    top: 180px;
    z-index: 2;
  }

  .slide-right {
    right: 70px;
  }

  .slide-left {
    left: 70px;
    transform: rotate(180deg);
  }

  span {
    color: ${(props) => props.theme.colors.dark};
  }
`;

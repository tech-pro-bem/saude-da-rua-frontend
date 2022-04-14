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
    gap: 82px;
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
    margin-right: 16px;
    background: #8e8e8e;
    margin-bottom: 66px;
  }

  .indicators > button.active {
    background: ${(props) => props.theme.colors.primary};
  }

  img {
    width: 403px;
    height: 397px;
    margin-right: -100px;
  }

  .arrow {
    width: 18px;
    height: 36.43px;
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
`;

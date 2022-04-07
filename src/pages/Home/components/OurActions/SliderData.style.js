import styled from 'styled-components';

export const Container = styled.div`
  .text {
    display: flex;
    flex-direction: row;
    margin-left: 50px;
    h2 {
      color: ${(props) => props.theme.colors.primary_light};
      padding: 5px;
      margin-top: 10px;
      font-size: 40px;
    }
    #year {
      color: ${(props) => props.theme.colors.light};
      font-size: 24px;
      line-height: 36px;
      font-weight: 700px;
      margin-left: 100px;
    }
  }

  #content {
    margin-left: 90px;
    text-align: justify;
    color: ${(props) => props.theme.colors.primary_light};
  }
`;

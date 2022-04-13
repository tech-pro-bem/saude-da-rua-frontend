import styled from 'styled-components';

export const ContainerStyle = styled.div`
  .text {
    display: flex;
    flex-direction: column;
    h2 {
      color: ${(props) => props.theme.colors.primary_light};
      padding: 5px;
      margin-top: 10px;
      font-size: 40px;
      margin-bottom: 62px;
    }
    #year {
      color: ${(props) => props.theme.colors.light};
      font-size: 24px;
      font-weight: bold;
      line-height: 36px;
      font-weight: 700px;
      margin-bottom: 22px;
    }
  }

  #content {
    text-align: justify;
    color: ${(props) => props.theme.colors.primary_light};
  }
`;

import styled from 'styled-components';

export const ContainerContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  // height: 361px;
  //width: 570px;

  #inputFullName {
    margin-left: 0em;
    margin-right: 60.76%;
    margin-top: 16px;

    display: flex;
    align-items: flex-start;
    padding: 12px 24px;

    width: 570px;
    height: 45px;
  }

  #inputDate {
    margin-left: 0em;
    // margin-right: 60.76%;
    margin-top: 16px;

    display: flex;
    align-items: flex-start;
    padding: 12px 24px;

    width: 270px;
    height: 45px;
  }

  #inputPhone {
    margin-left: 18.8rem;
    //margin-right: 100%;
    margin-top: -45px;

    display: flex;
    align-items: flex-start;
    padding: 12px 24px;

    width: 270px;
    height: 45px;
  }
`;

export const SubTitleName = styled.div`
  //margin-left: 130px;
  //margin-right: 60.76%;
  margin-top: 1rem;
  //margin-bottom: 81.6%;
`;
export const SubTitleDate = styled.div`
  margin-top: 2rem;
`;
export const SubTitlePhone = styled.div`
  position: fixed;
  left: 51.1%;
  right: 44.93%;
  margin-top: -84px;
`;
export const SubTitleEmail = styled.div`
  //margin-left: 130px;
  //margin-right: 60.76%;
  margin-top: 1rem;
  //margin-bottom: 81.6%;
`;

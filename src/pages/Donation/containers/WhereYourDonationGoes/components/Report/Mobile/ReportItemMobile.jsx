import { Title, LoadP, ReportBox, LoadA } from './ReportMobile.style';

const ReportItem = ({ name, url }) => {
  const [filename] = name.split(/\.(?=[^.]+$)/);
  return (
    <ReportBox>
      <Title>{filename},</Title>
      <LoadP>
        <LoadA download={name} href={url} target="_blank">
          baixe aqui
        </LoadA>
      </LoadP>
    </ReportBox>
  );
};

export default ReportItem;

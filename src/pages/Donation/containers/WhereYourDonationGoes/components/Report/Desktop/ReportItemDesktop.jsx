import { Title, LoadP, LoadA } from './ReportDesktop.style';

const ReportItem = ({ name, url }) => {
  const [filename] = name.split(/\.(?=[^.]+$)/);
  return (
    <>
      <Title>{filename}</Title>
      <LoadP>
        <LoadA download={name} href={url} target="_blank">
          baixe aqui
        </LoadA>
      </LoadP>
    </>
  );
};

export default ReportItem;

import { useEffect } from 'react';

const Head = (props) => {
  const pathname = window.location.pathname.replace('/', '');
  const title = props.title ? props.title : pathname;
  useEffect(() => {
    document.title = title + ' | Saúde da Rua';
    document
      .querySelector("meta[name='description']")
      .setAttribute('content', props.description || '');
  }, [props.description, title]);

  return <></>;
};

export default Head;

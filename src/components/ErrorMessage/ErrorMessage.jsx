import { WarningCircle } from 'phosphor-react';

import { Message } from './ErrorMessage.style';

const ErrorMessage = ({ message }) => {
  return (
    <Message>
      <WarningCircle />
      {message}
    </Message>
  );
};

export default ErrorMessage;

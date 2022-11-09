import { Structure } from '@components';
import { useForm } from 'react-hook-form';

import { ContactInfo, Headline } from './containers';

const SignUp = () => {
  const { register } = useForm();

  return (
    <Structure>
      <Headline />

      <ContactInfo register={register} />
    </Structure>
  );
};

export default SignUp;

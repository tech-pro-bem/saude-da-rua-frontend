import { Structure } from '@components';
import { useForm, Controller } from 'react-hook-form';

import { ContactInfo, Headline } from './containers';

const SignUp = () => {
  const { register, control } = useForm();

  return (
    <Structure>
      <Headline />

      <ContactInfo
        register={register}
        Controller={Controller}
        control={control}
      />
    </Structure>
  );
};

export default SignUp;

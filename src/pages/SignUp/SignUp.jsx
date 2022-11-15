import { Structure } from '@components';
import { useForm, Controller } from 'react-hook-form';

import {
  ContactInfo,
  Headline,
  Availability,
  Agree,
  HowDidYouFindUs,
} from './containers';
import { SubmitStyle } from './style';

const SignUp = () => {
  const { register, control, handleSubmit, getValues, watch, setValue } =
    useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Structure>
      <Headline />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ContactInfo
          register={register}
          Controller={Controller}
          control={control}
        />

        <Availability register={register} getValues={getValues} />

        <HowDidYouFindUs
          register={register}
          watch={watch}
          control={control}
          setValue={setValue}
        />

        <Agree register={register} />

        <SubmitStyle type="submit" value="Finalizar meu cadastro" />
      </form>
    </Structure>
  );
};

export default SignUp;

import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Structure } from '@components';

import {
  ContactInfo,
  Headline,
  Availability,
  Agree,
  HowDidYouFindUs,
} from './containers';
import { SubmitStyle } from './style';

const types = {
  Site: 'SITE',
  Instagram: 'INSTAGRAM',
  'Posts de amigos': 'POSTS',
  'Instituições de ensino': 'EDUCATIONAL_INSTITUTIONS',
  Outros: 'OTHER',
};

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    getValues,
    watch,
    setValue,
    formState: { errors, isDirty },
  } = useForm();

  const onSubmit = (data) => {
    data.howDidKnowOfSDR = types[data.howDidKnowOfSDR];
    data.birthdate = new Date(data.birthdate).toLocaleDateString('pt-BR');
    console.log(data);
    navigate('/inscreva-se/sucesso');
  };

  return (
    <Structure>
      <Headline />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ContactInfo
          register={register}
          Controller={Controller}
          control={control}
          errors={errors}
        />

        <Availability
          register={register}
          getValues={getValues}
          errors={errors}
        />

        <HowDidYouFindUs
          register={register}
          watch={watch}
          control={control}
          setValue={setValue}
          errors={errors}
        />

        <Agree register={register} errors={errors} />

        <SubmitStyle
          disabled={!isDirty}
          type="submit"
          value="Finalizar meu cadastro"
        />
      </form>
    </Structure>
  );
};

export default SignUp;

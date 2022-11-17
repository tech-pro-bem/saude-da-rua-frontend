import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Structure } from '@components';

import {
  ContactInfo,
  Headline,
  Availability,
  Agree,
  HowDidYouFindUs,
  Experience,
} from './containers';
import { SubmitStyle } from './style';

const typesParticipation = {
  'Não, nunca participei': 'NOT_PARTICIPATED',
  'Sim, em uma ação': 'ONE_PARTICIPATION',
  'Sim, de 2 a 5 ações': 'BETWEEN_TWO_AND_FIVE_PARTICIPATION',
  'Sim, em mais de 5 ações': 'MORE_THAN_FIVE_PARTICIPATION',
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
    if (data.howDidKnowOfSDR === 'Outros') {
      data.howDidKnowOfSDR = data.other;
    }

    data.howMuchParticipate = typesParticipation[data.howMuchParticipate];
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

        <Experience
          register={register}
          Controller={Controller}
          control={control}
          watch={watch}
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

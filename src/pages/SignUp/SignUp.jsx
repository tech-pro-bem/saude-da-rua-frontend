import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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

const typesOccupation = {
  'Médico (a)': 'MEDICO',
  'Enfermeiro (a)': 'ENFERMEIRO',
  'Farmacêutico (a)': 'FARMACEUTICO',
  Estudante: 'ESTUDANTE',
  'Técnico (a) de enfermagem': 'TECNICO_DE_ENFERMAGEM',
  'Psicólogo (a)': 'PSICOLOGO',
  Nutricionista: 'NUTRICIONISTA',
  'Assistente social': 'ASSISTENTE_SOCIAL',
  Dentista: 'DENTISTA',
  'Veterinário (a)': 'VETERINARIO',
};

const typesSemester = {
  Primeiro: 'FIRST',
  Segundo: 'SECOND',
  Terceiro: 'THIRD',
  Quarto: 'FOURTH',
  Quinto: 'FIFTH',
  Sexto: 'SIXTH',
  Sétimo: 'SEVENTH',
  Oitavo: 'EIGHTH',
  Nono: 'NINTH',
  Décimo: 'TENTH',
  'Décimo Primeiro': 'ELEVENTH',
  'Décimo Segundo': 'TWELFTH',
  Mais: 'MORE',
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

  const onSubmit = async (data) => {
    if (data.howDidKnowOfSDR === 'Outros') {
      data.howDidKnowOfSDR = data.other;
    }

    data.howMuchParticipate = typesParticipation[data.howMuchParticipate];
    data.occupation = typesOccupation[data.occupation];
    data.semester = typesSemester[data.semester];
    data.birthdate = new Date(data.birthdate).toLocaleDateString('en-US');
    delete data.other;
    delete data.agree;
    try {
      const response = await axios.post(
        `https://saude.thalles.me/create/volunteer`,
        data
      );
      response.data.message === 'Successfully create volunteer' &&
        navigate('/inscreva-se/sucesso');
    } catch (e) {
      console.log(e);
      navigate('/inscreva-se/falha');
    }
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

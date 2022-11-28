import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Structure } from '@components';

import { ContactInfo, Headline, Agree, Medicines } from './containers';
import { SubmitStyle } from './style';

const MedicineDonationForm = () => {
  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/formulario-doacao/sucesso');
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

        <Medicines
          register={register}
          Controller={Controller}
          control={control}
          watch={watch}
          errors={errors}
        />

        <Agree register={register} errors={errors} />

        <SubmitStyle
          disabled={!isDirty || !isValid}
          type="submit"
          value="Finalizar minha doação"
        />
      </form>
    </Structure>
  );
};

export default MedicineDonationForm;

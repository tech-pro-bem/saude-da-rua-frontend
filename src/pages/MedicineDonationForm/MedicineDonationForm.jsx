import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import { Structure } from '@components';

import { ContactInfo, Headline, Agree, Medicines } from './containers';
import { AddMedicineButton, SubmitStyle } from './style';
import { useState } from 'react';

const MedicineDonationForm = () => {
  const [medicines, setMedicines] = useState([]);
  console.log(medicines);

  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: { errors, isDirty, isValid },
  } = useForm();

  const handleAddMedicine = () => {
    const data = getValues();
    const medicine = {
      drugId: uuid(),
      drugName: data.medicineName,
      drugForm: data.drugForm,
      drugExpirationDate: data.expirationDate,
      drugQuantity: data.availableQuantity,
      drugConcentration: data.drugConcentration,
    };

    setMedicines([...medicines, medicine]);

    setValue('medicineName', '');
    setValue('drugForm', '');
    setValue('expirationDate', '');
    setValue('availableQuantity', '');
    setValue('drugConcentration', '');
  };

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
          getValues={getValues}
          setValue={setValue}
          isValid={isValid}
          medicines={medicines}
          setMedicines={setMedicines}
        />

        <Agree register={register} errors={errors} />

        {isValid && (
          <AddMedicineButton type="button" onClick={handleAddMedicine}>
            Salvar e adicionar outro
          </AddMedicineButton>
        )}

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

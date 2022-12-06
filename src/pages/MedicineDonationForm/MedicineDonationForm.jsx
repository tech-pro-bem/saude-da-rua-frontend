import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { DevTool } from '@hookform/devtools';

import { Structure } from '@components';

import { ContactInfo, Headline, Agree, Medicines } from './containers';
import { AddMedicineButton, SubmitStyle } from './style';
import { useState } from 'react';

const MedicineDonationForm = () => {
  const [medicines, setMedicines] = useState([]);

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
      medicineName: data.medicineName,
      pharmaceuticalForm: data.pharmaceuticalForm,
      expirationDate: data.expirationDate,
      quantity: Number(data.quantity),
      milligrams: data.milligrams,
    };

    setMedicines([...medicines, medicine]);

    setValue('medicineName', '');
    setValue('pharmaceuticalForm', '');
    setValue('expirationDate', '');
    setValue('quantity', '');
    setValue('milligrams', '');
    setValue('agree', '');
  };

  const onSubmit = (data) => {
    const formContactInfo = {
      fullName: data.fullName,
      CEP: data.zipCode,
      state: data.address,
      cellPhoneWithDDD: data.cellphoneNumberWithDDD,
      email: data.email,
    };

    const medicine = {
      drugId: uuid(),
      medicineName: data.medicineName,
      pharmaceuticalForm: data.pharmaceuticalForm,
      expirationDate: data.expirationDate,
      quantity: Number(data.quantity),
      milligrams: data.milligrams,
    };

    const formMedicines = [...medicines, medicine];

    const newData = { ...formContactInfo, medicines: formMedicines };

    console.log('newData', newData);
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

      <DevTool control={control} />
    </Structure>
  );
};

export default MedicineDonationForm;

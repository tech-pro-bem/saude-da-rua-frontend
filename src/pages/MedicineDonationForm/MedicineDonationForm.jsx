import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { DevTool } from '@hookform/devtools';

import api from '../../services/api';
import { Structure } from '@components';
import { ContactInfo, Headline, Agree, Medicines } from './containers';
import { AddMedicineButton, SubmitStyle } from './style';

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
    formState: { errors, isValid },
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
  };

  const onSubmit = async (data) => {
    const formContactInfo = {
      fullName: data.fullName,
      CEP: data.zipCode,
      address: data.address,
      city: data.city ?? 'Não informado',
      state: data.state ?? 'Não informado',
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
    const formMedicinesWithoutDrugId = formMedicines.map((medicine) => {
      const { drugId, ...rest } = medicine;
      return rest;
    });

    const newData = {
      ...formContactInfo,
      medicines: formMedicinesWithoutDrugId,
    };
    console.log(newData);

    try {
      const response = await api.post('/medicines', newData);
      console.log(response);
      response.status === 201 && navigate('/formulario-doacao/sucesso');
    } catch (error) {
      console.log(error);
      navigate('/formulario-doacao/falha');
    }
  };

  const watchContactFields = watch([
    'fullName',
    'zipCode',
    'address',
    'cellphoneNumberWithDDD',
    'email',
  ]);

  const watchMedicineFields = watch([
    'medicineName',
    'pharmaceuticalForm',
    'expirationDate',
    'quantity',
    'milligrams',
  ]);

  const isDisabledAddMedicineButton = watchMedicineFields.some(
    (field) => field === ''
  );

  const watchContact = watchContactFields.some(
    (field) => field === '' || field === undefined
  );

  const watchMedicines = () => {
    if (medicines.length === 0) {
      return watchMedicineFields.some(
        (field) => field === '' || field === undefined
      );
    }
  };

  const watchAgree = watch('agree');

  const isDisabledSubmitButton =
    watchContact || watchMedicines() || !watchAgree;

  return (
    <Structure>
      <Headline />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ContactInfo
          register={register}
          Controller={Controller}
          control={control}
          watch={watch}
          errors={errors}
          setValue={setValue}
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
          <AddMedicineButton
            disabled={isDisabledAddMedicineButton}
            type="button"
            onClick={handleAddMedicine}
          >
            Salvar e adicionar outro
          </AddMedicineButton>
        )}

        <SubmitStyle
          disabled={isDisabledSubmitButton}
          type="submit"
          value="Finalizar minha doação"
        />
      </form>

      <DevTool control={control} />
    </Structure>
  );
};

export default MedicineDonationForm;

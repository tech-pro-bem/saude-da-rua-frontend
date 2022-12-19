import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { DevTool } from '@hookform/devtools';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import api from '../../services/api';
import { Structure } from '@components';
import { ContactInfo, Headline, Agree, Medicines } from './containers';
import {
  AddMedicineButton,
  ButtonCancelNewMedicine,
  SubmitStyle,
} from './style';

const cellphoneRegExp = /^\([1-9]{2}\) [9]{1}[0-9]{4}-[0-9]{4}$/;
const zipcodeRegExp = /^[0-9]{5}-[0-9]{3}$/;

const schema = z.object({
  fullName: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres'),
  email: z.string().email('Email inválido'),
  address: z.string().min(3, 'Endereço deve ter no mínimo 3 caracteres'),
  cellphoneNumberWithDDD: z
    .string()
    .regex(cellphoneRegExp, 'Telefone inválido'),
  zipCode: z.string().regex(zipcodeRegExp, 'CEP inválido'),
  medicineName: z
    .string()
    .min(3, 'Nome do medicamento deve ter no mínimo 3 caracteres'),
  pharmaceuticalForm: z.string(),
  expirationDate: z
    .date()
    .min(new Date(), 'Data de validade deve ser maior que a data atual'),
  quantity: z.string().min(1, 'Quantidade deve ser maior que 0'),
  milligrams: z.string(),
  agree: z
    .boolean()
    .refine(
      (value) => value === true,
      'Você deve concordar com os termos de uso'
    ),
});

const MedicineDonationForm = () => {
  const [medicines, setMedicines] = useState([]);
  const [userGaveUpAddingMedicines, setUserGaveUpAddingMedicines] =
    useState(false);

  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleAddMedicine = () => {
    const data = getValues();
    const medicine = {
      drugId: uuid(),
      medicineName: data.medicineName ? data.medicineName : 'Não informado',
      pharmaceuticalForm: data.pharmaceuticalForm
        ? data.pharmaceuticalForm
        : 'Não informado',
      expirationDate: data.expirationDate
        ? data.expirationDate
        : 'Não informado',
      quantity: Number(data.quantity) ? Number(data.quantity) : 'Não informado',
      milligrams: data.milligrams ? data.milligrams : 'Não informado',
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
      medicineName: data.medicineName ? data.medicineName : 'Não informado',
      pharmaceuticalForm: data.pharmaceuticalForm
        ? data.pharmaceuticalForm
        : 'Não informado',
      expirationDate: data.expirationDate
        ? data.expirationDate
        : 'Não informado',
      quantity: Number(data.quantity) ? Number(data.quantity) : Number(0),
      milligrams: data.milligrams ? data.milligrams : 'Não informado',
    };

    const formMedicines = [...medicines, medicine];
    const formMedicinesWithoutDrugId = formMedicines.map((medicine) => {
      const { drugId, ...rest } = medicine;
      return rest;
    });

    const newData = {
      ...formContactInfo,
      medicines: userGaveUpAddingMedicines
        ? formMedicinesWithoutDrugId.splice(
            0,
            formMedicinesWithoutDrugId.length - 1
          )
        : formMedicinesWithoutDrugId,
    };

    try {
      const response = await api.post('/medicines', newData);
      response.status === 201 && navigate('/formulario-doacao/sucesso');
    } catch (error) {
      console.log(error);
      navigate('/formulario-doacao/falha');
    }
  };

  const handleCancel = () => {
    setValue('medicineName', 'Não informado');
    setValue('pharmaceuticalForm', 'Não informado');
    setValue('expirationDate', new Date());
    setValue('quantity', 'Não informado');
    setValue('milligrams', 'Não informado');

    setUserGaveUpAddingMedicines(true);
  };

  const watchMedicineFields = watch([
    'medicineName',
    'expirationDate',
    'quantity',
  ]);

  const isDisabledAddMedicineButton =
    watchMedicineFields.some((field) => field === '') || medicines.length >= 19;

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
          errors={errors}
          getValues={getValues}
          setValue={setValue}
          medicines={medicines}
          setMedicines={setMedicines}
          userGaveUpAddingMedicines={userGaveUpAddingMedicines}
        />

        {medicines.length && (
          <ButtonCancelNewMedicine type="button" onClick={handleCancel}>
            Cancelar novo medicamento
          </ButtonCancelNewMedicine>
        )}

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
          // disabled={!isDirty || !isValid}
          type="submit"
          value="Confirmar minha doação"
        />
      </form>

      <DevTool control={control} />
    </Structure>
  );
};

export default MedicineDonationForm;

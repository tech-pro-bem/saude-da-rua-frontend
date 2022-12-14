/* eslint-disable react-hooks/exhaustive-deps */
import { Disclosure } from '@headlessui/react';
import { getYear, getMonth } from 'date-fns';
import { useEffect } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

import { ErrorMessage, Select } from '@components';
import { DeleteIcon, SaveIcon, SeparatorIcon } from '@assets/MedicinePage';
import {
  BoxInput,
  Buttons,
  DatePickerHeader,
  DatePickerStyle,
  DisclosureEditStyle,
  Divider,
  FormStyle,
  Input,
} from './style';

export const EditMedicines = ({
  editMedicine,
  setEditMedicine,
  register,
  Controller,
  errors,
  control,
  years,
  months,
  drugForm,
  setValue,
  medicines,
  setMedicines,
  getValues,
}) => {
  useEffect(() => {
    setValue('editDrugName', editMedicine.medicineName);
    setValue('editDrugConcentration', editMedicine.milligrams);
    setValue('editDrugForm', editMedicine.pharmaceuticalForm);
    setValue('editDrugExpiration', editMedicine.expirationDate);
    setValue('editDrugQuantity', editMedicine.quantity);
  }, []);

  const handleSaveEditMedicine = () => {
    const data = getValues();

    const editedMedicine = {
      drugId: editMedicine.drugId,
      medicineName: data.editDrugName,
      milligrams: data.editDrugConcentration,
      pharmaceuticalForm: data.editDrugForm,
      expirationDate: data.editDrugExpiration,
      quantity: Number(data.editDrugQuantity),
    };

    setMedicines([...medicines, editedMedicine]);
    setEditMedicine({});
  };

  const handleDeleteEditMedicine = () => {
    setEditMedicine({});
  };

  return (
    <Disclosure defaultOpen={true}>
      {({ open }) => (
        <DisclosureEditStyle>
          <Disclosure.Button>
            <span>{editMedicine.medicineName}</span>
            {open ? <ChevronUpIcon size={24} /> : <ChevronDownIcon size={24} />}
          </Disclosure.Button>
          <Disclosure.Panel>
            <FormStyle>
              <BoxInput>
                <label htmlFor="editDrugName">Nome do medicamento*</label>
                <Input
                  type="text"
                  id="editDrugName"
                  {...register('editDrugName', { required: true })}
                  placeholder="Nome comercial ou princípio ativo"
                  iserror={errors.editDrugName ? 'erro' : ''}
                />
                {errors.editDrugName && (
                  <ErrorMessage message="Esse campo deve ser preenchido." />
                )}
              </BoxInput>

              <Divider>
                <BoxInput>
                  <label htmlFor="editDrugConcentration">
                    Concentração do medicamento*
                  </label>
                  <Input
                    type="text"
                    id="editDrugConcentration"
                    {...register('editDrugConcentration', { required: true })}
                    placeholder="Dosagem em mg ou g"
                    iserror={errors.editDrugConcentration ? 'erro' : ''}
                  />
                  {errors.editDrugConcentration && (
                    <ErrorMessage message="Esse campo deve ser preenchido." />
                  )}
                </BoxInput>

                <BoxInput>
                  <label>Forma farmacêutica*</label>
                  <Controller
                    rules={{ required: true }}
                    defaultValue=""
                    control={control}
                    name="editDrugForm"
                    render={({ field }) => (
                      <Select
                        name="editDrugForm"
                        value={field.value}
                        onChange={field.onChange}
                        errors={errors}
                        options={drugForm}
                      />
                    )}
                  />
                  {errors.editDrugForm && (
                    <ErrorMessage message="Esse campo deve ser preenchido." />
                  )}
                </BoxInput>
              </Divider>

              <Divider>
                <BoxInput>
                  <label htmlFor="editDrugQuantity">
                    Quantidade disponível*
                  </label>
                  <Input
                    type="number"
                    id="editDrugQuantity"
                    min={1}
                    {...register('editDrugQuantity', { required: true })}
                    placeholder="N° de comprimidos ou frascos"
                    iserror={errors.editDrugQuantity ? 'erro' : ''}
                  />
                  {errors.editDrugQuantity && (
                    <ErrorMessage message="Esse campo deve ser preenchido." />
                  )}
                </BoxInput>

                <BoxInput>
                  <label htmlFor="editDrugExpiration">Prazo de validade*</label>
                  <Controller
                    control={control}
                    name="editDrugExpiration"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <DatePickerStyle
                        onChange={onChange}
                        onBlur={onBlur}
                        selected={value}
                        dateFormat={'MM/yy'}
                        placeholderText="mm/aa"
                        iserror={errors.editDrugExpiration ? 'erro' : ''}
                        renderCustomHeader={({
                          date,
                          changeYear,
                          changeMonth,
                          decreaseMonth,
                          increaseMonth,
                          prevMonthButtonDisabled,
                          nextMonthButtonDisabled,
                        }) => (
                          <DatePickerHeader>
                            <button
                              onClick={decreaseMonth}
                              disabled={prevMonthButtonDisabled}
                            >
                              {'<'}
                            </button>
                            <select
                              value={getYear(date)}
                              onChange={({ target: { value } }) =>
                                changeYear(value)
                              }
                            >
                              {years.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>
                            <select
                              value={months[getMonth(date)]}
                              onChange={({ target: { value } }) =>
                                changeMonth(months.indexOf(value))
                              }
                            >
                              {months.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>
                            <button
                              onClick={increaseMonth}
                              disabled={nextMonthButtonDisabled}
                            >
                              {'>'}
                            </button>
                          </DatePickerHeader>
                        )}
                      />
                    )}
                    rules={{ required: true }}
                  />
                  {errors.editDrugExpiration && (
                    <ErrorMessage message="Esse campo deve ser preenchido." />
                  )}
                </BoxInput>
              </Divider>
            </FormStyle>

            <Buttons>
              <button onClick={handleDeleteEditMedicine}>
                <img src={DeleteIcon} alt="" />
                Excluir
              </button>
              <img src={SeparatorIcon} alt="" />
              <button onClick={handleSaveEditMedicine}>
                <img src={SaveIcon} alt="" />
                Salvar
              </button>
            </Buttons>
          </Disclosure.Panel>
        </DisclosureEditStyle>
      )}
    </Disclosure>
  );
};

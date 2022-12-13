import { getYear, getMonth, format } from 'date-fns';
import range from 'lodash/range';
import { Disclosure } from '@headlessui/react';
import { useState } from 'react';
import { WarningCircle } from 'phosphor-react';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

import { EditMedicines } from './EditMedicines';
import { ErrorMessage, Select } from '@components';
import { DeleteIcon, EditIcon, SeparatorIcon } from '@assets/MedicinePage';
import {
  BoxInput,
  Container,
  DatePickerHeader,
  DatePickerStyle,
  DisclosureStyle,
  Divider,
  FormStyle,
  Input,
  Step,
  Tooltip,
} from './style';

const drugForm = [
  'Cápsula',
  'Comprimido',
  'Pastilha',
  'Supositório',
  'Solução',
  'Xarope',
  'Creme',
  'Pomada',
  'Outros',
];

export const Medicines = ({
  register,
  Controller,
  watch,
  control,
  errors,
  getValues,
  setValue,
  isValid,
  medicines,
  setMedicines,
}) => {
  const [infoMedicine, setInfoMedicine] = useState(false);
  const [editMedicine, setEditMedicine] = useState({});

  const years = range(getYear(new Date()), getYear(new Date()) + 15, 1);
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  const handleDeleteMedicine = (id) => {
    const newMedicines = medicines.filter((drug) => drug.drugId !== id);
    setMedicines(newMedicines);
  };

  const handleEditMedicine = (id) => {
    const newMedicines = medicines.filter((drug) => drug.drugId !== id);
    const editMedicines = medicines.find((drug) => drug.drugId === id);
    setEditMedicine(editMedicines);
    setMedicines([...newMedicines]);
  };

  return (
    <Container>
      <Step>
        <span>Etapa 2 de 2</span>
        <h2>
          Medicamentos
          <button type="button" onClick={() => setInfoMedicine(!infoMedicine)}>
            {infoMedicine ? (
              <WarningCircle size={22} weight="fill" />
            ) : (
              <WarningCircle size={22} weight="regular" />
            )}
          </button>
        </h2>
        <p>
          Tenha os remédios em mãos para informar os dados corretamente.
          <br />
          Registre até 20 medicamentos por formulário.
        </p>

        {infoMedicine && (
          <Tooltip>
            <p>Onde você pode encontrar essas informações?</p>
            <p>
              Você consegue encontrar as informações dos medicamentos na caixa
              ou blister dos medicamentos.
            </p>
          </Tooltip>
        )}
      </Step>

      {medicines.length > 0 &&
        medicines.map((medicine) => (
          <Disclosure key={medicine.drugId}>
            {({ open }) => (
              <DisclosureStyle>
                <Disclosure.Button>
                  <span>{medicine.medicineName}</span>
                  {open ? (
                    <ChevronUpIcon size={24} />
                  ) : (
                    <ChevronDownIcon size={24} />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel>
                  <div className="disclosure-content">
                    <span>
                      {medicine.milligrams
                        ? medicine.milligrams
                        : 'Não informado'}
                    </span>
                    <span>
                      {format(new Date(medicine.expirationDate), 'MM/yyyy')}
                    </span>
                    <span>{medicine.quantity} unidades</span>
                    <span>
                      {medicine.pharmaceuticalForm
                        ? medicine.pharmaceuticalForm
                        : 'Não informado'}
                    </span>
                  </div>
                  <div className="disclosure-buttons-actions">
                    <button
                      onClick={() => handleDeleteMedicine(medicine.drugId)}
                    >
                      <img src={DeleteIcon} alt="" />
                      Excluir
                    </button>
                    <img src={SeparatorIcon} alt="" />
                    <button onClick={() => handleEditMedicine(medicine.drugId)}>
                      <img src={EditIcon} alt="" />
                      Editar
                    </button>
                  </div>
                </Disclosure.Panel>
              </DisclosureStyle>
            )}
          </Disclosure>
        ))}

      {Object.keys(editMedicine).length > 0 && (
        <EditMedicines
          editMedicine={editMedicine}
          register={register}
          Controller={Controller}
          errors={errors}
          control={control}
          years={years}
          months={months}
          drugForm={drugForm}
          setValue={setValue}
          medicines={medicines}
          setMedicines={setMedicines}
          getValues={getValues}
          setEditMedicine={setEditMedicine}
        />
      )}

      <FormStyle>
        <BoxInput>
          <label htmlFor="medicineName">Nome do medicamento*</label>
          <Input
            type="text"
            id="medicineName"
            autoComplete="off"
            {...register('medicineName', { required: true })}
            placeholder="Nome comercial ou princípio ativo"
            iserror={errors.medicineName ? 'erro' : ''}
          />
          {errors.medicineName?.message && (
            <ErrorMessage message={errors.medicineName.message} />
          )}
        </BoxInput>

        <Divider>
          <BoxInput>
            <label htmlFor="milligrams">Concentração do medicamento</label>
            <Input
              type="text"
              id="milligrams"
              {...register('milligrams')}
              placeholder="Dosagem em mg ou g"
              iserror={errors.milligrams ? 'erro' : ''}
            />
            {errors.milligrams?.message && (
              <ErrorMessage message={errors.milligrams.message} />
            )}
          </BoxInput>

          <BoxInput>
            <label>Forma farmacêutica</label>
            <Controller
              defaultValue=""
              control={control}
              name="pharmaceuticalForm"
              render={({ field }) => (
                <Select
                  name="pharmaceuticalForm"
                  value={field.value}
                  onChange={field.onChange}
                  errors={errors}
                  options={drugForm}
                />
              )}
            />
            {errors.pharmaceuticalForm?.message && (
              <ErrorMessage message={errors.pharmaceuticalForm.message} />
            )}
          </BoxInput>
        </Divider>

        <Divider>
          <BoxInput>
            <label htmlFor="quantity">Quantidade disponível*</label>
            <Input
              type="number"
              id="quantity"
              min={1}
              {...register('quantity', { required: true })}
              placeholder="N° de unidades"
              iserror={errors.quantity ? 'erro' : ''}
            />
            {errors.quantity?.message && (
              <ErrorMessage message={errors.quantity.message} />
            )}
          </BoxInput>

          <BoxInput>
            <label htmlFor="expirationDate">Prazo de validade*</label>
            <Controller
              control={control}
              name="expirationDate"
              render={({ field: { onChange, onBlur, value } }) => (
                <DatePickerStyle
                  onChange={onChange}
                  onBlur={onBlur}
                  selected={value}
                  dateFormat={'MM/yy'}
                  placeholderText="mm/aa"
                  iserror={errors.expirationDate ? 'erro' : ''}
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
                        onChange={({ target: { value } }) => changeYear(value)}
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
            {errors.expirationDate?.message && (
              <ErrorMessage message={errors.expirationDate.message} />
            )}
          </BoxInput>
        </Divider>
      </FormStyle>
    </Container>
  );
};

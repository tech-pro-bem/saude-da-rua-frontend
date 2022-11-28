import { getYear, getMonth } from 'date-fns';
import range from 'lodash/range';

import { ErrorMessage, Select } from '@components';

import {
  BoxInput,
  Container,
  DatePickerHeader,
  DatePickerStyle,
  FormStyle,
  Input,
  Step,
  Tooltip,
} from './style';
import { useState } from 'react';
import { WarningCircle } from 'phosphor-react';

const drugForm = [
  'Cápsula',
  'Comprimido',
  'Pastilha',
  'Supositório',
  'Solução',
  'Xarope',
  'Creme',
  'Pomada',
];

export const Medicines = ({ register, Controller, control, errors }) => {
  const [infoMedicine, setInfoMedicine] = useState(false);

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
        <p>Tenha os remédios em mãos para informar os dados corretamente.</p>

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

      <FormStyle>
        <BoxInput>
          <label htmlFor="medicineName">Nome do medicamento*</label>
          <Input
            type="text"
            id="medicineName"
            {...register('medicineName', { required: true })}
            placeholder="Nome comercial ou princípio ativo"
            iserror={errors.medicineName ? 'erro' : ''}
          />
          {errors.medicineName && (
            <ErrorMessage message="Esse campo deve ser preenchido." />
          )}
        </BoxInput>

        <BoxInput>
          <label htmlFor="drugConcentration">
            Concentração do medicamento*
          </label>
          <Input
            type="text"
            id="drugConcentration"
            {...register('drugConcentration', { required: true })}
            placeholder="Dosagem em mg ou g"
            iserror={errors.drugConcentration ? 'erro' : ''}
          />
          {errors.drugConcentration && (
            <ErrorMessage message="Esse campo deve ser preenchido." />
          )}
        </BoxInput>

        <BoxInput>
          <label>Forma farmacêutica*</label>
          <Controller
            rules={{ required: true }}
            defaultValue=""
            control={control}
            name="drugForm"
            render={({ field }) => (
              <Select
                name="drugForm"
                value={field.value}
                onChange={field.onChange}
                errors={errors}
                options={drugForm}
              />
            )}
          />
          {errors.drugForm && (
            <ErrorMessage message="Esse campo deve ser preenchido." />
          )}
        </BoxInput>

        <BoxInput>
          <label htmlFor="availableQuantity">Quantidade disponível*</label>
          <Input
            type="number"
            id="availableQuantity"
            min={1}
            {...register('availableQuantity', { required: true })}
            placeholder="N° de comprimidos ou frascos"
            iserror={errors.availableQuantity ? 'erro' : ''}
          />
          {errors.availableQuantity && (
            <ErrorMessage message="Esse campo deve ser preenchido." />
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
          {errors.expirationDate && (
            <ErrorMessage message="Esse campo deve ser preenchido." />
          )}
        </BoxInput>
      </FormStyle>
    </Container>
  );
};

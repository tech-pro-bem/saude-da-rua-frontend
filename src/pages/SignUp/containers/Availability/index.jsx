import { ErrorMessage } from '@components';

import { Container, InputsBox, Step } from './style';

const daysOfWeek = [
  { id: 1, name: 'Segunda-feira', value: 'SEGUNDA' },
  { id: 2, name: 'Terça-feira', value: 'TERCA' },
  { id: 3, name: 'Quarta-feira', value: 'QUARTA' },
  { id: 4, name: 'Quinta-feira', value: 'QUINTA' },
  { id: 5, name: 'Sexta-feira', value: 'SEXTA' },
  { id: 6, name: 'Sábado', value: 'SABADO' },
  { id: 7, name: 'Domingo', value: 'DOMINGO' },
];

export const Availability = ({ register, getValues, errors }) => {
  const atLeastOne = () => (getValues('listFreeDaysOfWeek').length ? true : '');

  return (
    <Container>
      <Step>
        <span>Etapa 3 de 3</span>
        <h2>Disponibilidade</h2>
      </Step>

      <p>
        Informe em quais dias da semana, nos próximos 4 meses, você poderá
        integrar nossas ações:
      </p>

      <InputsBox>
        {daysOfWeek.map((day) => (
          <div key={day.id}>
            <input
              type="checkbox"
              id={day.value}
              name={day.value}
              value={day.value}
              {...register('listFreeDaysOfWeek', { validate: atLeastOne })}
            />

            <label htmlFor={day.value}>{day.name}</label>
          </div>
        ))}
        {errors.listFreeDaysOfWeek && (
          <ErrorMessage message="Esse campo deve ser preenchido." />
        )}
      </InputsBox>
    </Container>
  );
};

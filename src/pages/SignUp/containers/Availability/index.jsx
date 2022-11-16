import { Container, InputsBox, Step } from './style';

const daysOfWeek = [
  { id: 1, name: 'Segunda-feira', value: 'monday' },
  { id: 2, name: 'Terça-feira', value: 'tuesday' },
  { id: 3, name: 'Quarta-feira', value: 'wednesday' },
  { id: 4, name: 'Quinta-feira', value: 'thursday' },
  { id: 5, name: 'Sexta-feira', value: 'friday' },
  { id: 6, name: 'Sábado', value: 'saturday' },
  { id: 7, name: 'Domingo', value: 'sunday' },
];

export const Availability = ({ register, getValues, errors }) => {
  const atLeastOne = () =>
    getValues('available').length
      ? true
      : 'Por favor, selecione ao menos uma opção.';

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
              {...register('available', { validate: atLeastOne })}
            />

            <label htmlFor={day.value}>{day.name}</label>
          </div>
        ))}
      </InputsBox>
    </Container>
  );
};

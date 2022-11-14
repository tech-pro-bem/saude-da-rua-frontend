import {
  BoxInput,
  Container,
  Step,
  Tooltip,
  DatePickerStyle,
  Divider,
  FormStyle,
} from './style';
import { InputText } from '@components';
import { Question } from 'phosphor-react';
import { useState } from 'react';

import 'react-datepicker/dist/react-datepicker.css';

export const ContactInfo = ({ register, Controller, control }) => {
  const [name, setName] = useState(false);
  const [birthday, setBirthday] = useState(false);
  const [phone, setPhone] = useState(false);
  const [email, setEmail] = useState(false);

  return (
    <Container>
      <Step>
        <span>Etapa 1 de 3</span>
        <h2>Informações de contato</h2>
      </Step>

      <FormStyle>
        <BoxInput>
          <label htmlFor="name">
            Nome completo
            <button type="button" onClick={() => setName(!name)}>
              {name ? (
                <Question size={20} weight="fill" />
              ) : (
                <Question size={20} weight="regular" />
              )}
            </button>
          </label>
          {name && (
            <Tooltip>
              <p>Por que pedimos essa informação?</p>
              <p>
                Esta informação servirá para melhor identificarmos os usuários
                cadastrados em nosso banco de dados.
              </p>
            </Tooltip>
          )}
          <input
            type="text"
            id="name"
            {...register('name')}
            placeholder="Digite seu nome completo"
          />
        </BoxInput>

        <Divider>
          <BoxInput>
            <label htmlFor="birthday">
              Data de nascimento
              <button type="button" onClick={() => setBirthday(!birthday)}>
                {birthday ? (
                  <Question size={20} weight="fill" />
                ) : (
                  <Question size={20} weight="regular" />
                )}
              </button>
            </label>
            {birthday && (
              <Tooltip>
                <p>Por que pedimos essa informação?</p>
                <p>
                  Esta informação servirá para melhor identificarmos os usuários
                  cadastrados em nosso banco de dados.
                </p>
              </Tooltip>
            )}
            <Controller
              control={control}
              name="birthday"
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <DatePickerStyle
                  onChange={onChange}
                  onBlur={onBlur}
                  selected={value}
                  dateFormat={'dd/MM/yyyy'}
                  placeholderText="dd/mm/aaaa"
                />
              )}
            />
          </BoxInput>

          <BoxInput>
            <label htmlFor="phone">
              Celular
              <button type="button" onClick={(e) => setPhone(!phone)}>
                {phone ? (
                  <Question size={20} weight="fill" />
                ) : (
                  <Question size={20} weight="regular" />
                )}
              </button>
            </label>
            {phone && (
              <Tooltip>
                <p>Por que pedimos essa informação?</p>
                <p>
                  Com esta informação poderemos contatar nossos usuários
                  cadastrados, caso seja necessário.
                </p>
              </Tooltip>
            )}
            <InputText
              type="text"
              register={register}
              registerValue="phone"
              id="phone"
              mask="(99) 99999-9999"
              placeholder="(81) 98888-8888"
            />
          </BoxInput>
        </Divider>

        <BoxInput>
          <label htmlFor="email">
            E-mail
            <button type="button" onClick={(e) => setEmail(!email)}>
              {email ? (
                <Question size={20} weight="fill" />
              ) : (
                <Question size={20} weight="regular" />
              )}
            </button>
          </label>
          {email && (
            <Tooltip>
              <p>Por que pedimos essa informação?</p>
              <p>
                Com esta informação poderemos contatar nossos usuários
                cadastrados, caso seja necessário.
              </p>
            </Tooltip>
          )}
          <input
            type="email"
            id="email"
            {...register('email')}
            placeholder="Informe o seu e-mail principal"
          />
        </BoxInput>
      </FormStyle>
    </Container>
  );
};

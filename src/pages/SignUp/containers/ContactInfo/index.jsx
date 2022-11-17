import { Question } from 'phosphor-react';
import { useState } from 'react';
import InputMask from 'react-input-mask';

import { ErrorMessage } from '@components';

import {
  BoxInput,
  Container,
  Step,
  Tooltip,
  DatePickerStyle,
  Divider,
  FormStyle,
  Input,
  InputWithMask,
} from './style';

import 'react-datepicker/dist/react-datepicker.css';

export const ContactInfo = ({ register, Controller, control, errors }) => {
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
          <label htmlFor="fullName">
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
          <Input
            type="text"
            id="fullName"
            {...register('fullName', { required: true })}
            placeholder="Digite seu nome completo"
            iserror={errors.fullName ? 'erro' : ''}
          />
          {errors.fullName && <ErrorMessage message="Esse campo deve ser preenchido." />}
        </BoxInput>

        <Divider>
          <BoxInput>
            <label htmlFor="birthdate">
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
              name="birthdate"
              render={({ field: { onChange, onBlur, value } }) => (
                <DatePickerStyle
                  onChange={onChange}
                  onBlur={onBlur}
                  selected={value}
                  dateFormat={'dd/MM/yyyy'}
                  placeholderText="dd/mm/aaaa"
                  iserror={errors.birthdate ? 'erro' : ''}
                  required
                />
              )}
              rules={{ required: true }}
            />
            {errors.birthdate && <ErrorMessage message="Esse campo deve ser preenchido." />}
          </BoxInput>

          <BoxInput>
            <label htmlFor="cellphoneNumberWithDDD">
              Celular
              <button type="button" onClick={() => setPhone(!phone)}>
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
            <InputWithMask
              type="text"
              id="cellphoneNumberWithDDD"
              mask="(99) 99999-9999"
              placeholder="(81) 98888-8888"
              {...register('cellphoneNumberWithDDD', { required: true })}
              iserror={errors.cellphoneNumberWithDDD ? 'erro' : ''}
            />
            {errors.cellphoneNumberWithDDD && <ErrorMessage message="Esse campo deve ser preenchido." />}
          </BoxInput>
        </Divider>

        <BoxInput>
          <label htmlFor="email">
            E-mail
            <button type="button" onClick={() => setEmail(!email)}>
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
          <Input
            type="email"
            id="email"
            {...register('email', { required: true })}
            placeholder="Informe o seu e-mail principal"
            iserror={errors.email ? 'erro' : ''}
          />
          {errors.email && <ErrorMessage message="Esse campo deve ser preenchido." />}
        </BoxInput>
      </FormStyle>
    </Container>
  );
};

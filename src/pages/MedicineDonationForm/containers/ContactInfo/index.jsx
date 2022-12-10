import { Question } from 'phosphor-react';
import { useEffect, useState } from 'react';
import cep from 'cep-promise';

import { ErrorMessage } from '@components';

import {
  BoxInput,
  Container,
  Step,
  Tooltip,
  Divider,
  FormStyle,
  Input,
  InputWithMask,
} from './style';

import 'react-datepicker/dist/react-datepicker.css';

export const ContactInfo = ({ register, errors, watch, setValue }) => {
  const [name, setName] = useState(false);
  const [phone, setPhone] = useState(false);
  const [zipCode, setZipCode] = useState(false);
  const [address, setAddress] = useState(false);
  const [email, setEmail] = useState(false);

  const code = watch('zipCode');

  useEffect(() => {
    if (code) {
      cep(code).then((response) => {
        setValue('address', `${response.street}`);
      });
    }
  }, [code, setValue]);

  return (
    <Container>
      <Step>
        <span>Etapa 1 de 2</span>
        <h2>Informações para contato</h2>
        <p>*Todos os campos devem ser preenchidos.</p>
      </Step>

      <FormStyle>
        <BoxInput>
          <label htmlFor="fullName">
            Nome completo*
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
            placeholder="Seu nome completo"
            iserror={errors.fullName ? 'erro' : ''}
          />
          {errors.fullName && (
            <ErrorMessage message="Esse campo deve ser preenchido." />
          )}
        </BoxInput>

        <Divider>
          <BoxInput>
            <label htmlFor="cellphoneNumberWithDDD">
              Celular*
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
                  Esta informação servirá para contatarmos as pessoas usuárias
                  cadastradas, caso seja necessário.
                </p>
              </Tooltip>
            )}
            <InputWithMask
              type="text"
              id="cellphoneNumberWithDDD"
              mask="(99) 99999-9999"
              placeholder="(00) 00000-0000"
              {...register('cellphoneNumberWithDDD', { required: true })}
              iserror={errors.cellphoneNumberWithDDD ? 'erro' : ''}
            />
            {errors.cellphoneNumberWithDDD && (
              <ErrorMessage message="Esse campo deve ser preenchido." />
            )}
          </BoxInput>

          <BoxInput>
            <label htmlFor="zip-code">
              CEP*
              <button type="button" onClick={() => setZipCode(!zipCode)}>
                {zipCode ? (
                  <Question size={20} weight="fill" />
                ) : (
                  <Question size={20} weight="regular" />
                )}
              </button>
            </label>
            {zipCode && (
              <Tooltip>
                <p>Por que pedimos essa informação?</p>
                <p>
                  Esta informação servirá para escolhermos a melhor forma de
                  coleta dos medicamentos que serão doados.
                </p>
              </Tooltip>
            )}
            <InputWithMask
              type="text"
              id="zip-code"
              mask="99999-999"
              placeholder="00000-000"
              {...register('zipCode', { required: true })}
              iserror={errors.zipCode ? 'erro' : ''}
            />
            {errors.zipCode && (
              <ErrorMessage message="Esse campo deve ser preenchido." />
            )}
          </BoxInput>
        </Divider>

        <BoxInput>
          <label htmlFor="address">
            Endereço completo*
            <button type="button" onClick={() => setAddress(!address)}>
              {address ? (
                <Question size={20} weight="fill" />
              ) : (
                <Question size={20} weight="regular" />
              )}
            </button>
          </label>
          {address && (
            <Tooltip>
              <p>Por que pedimos essa informação?</p>
              <p>
                Esta informação servirá para escolhermos a melhor forma de
                coleta dos medicamentos que serão doados.
              </p>
            </Tooltip>
          )}
          <Input
            type="text"
            id="address"
            {...register('address', { required: true })}
            placeholder="Seu endereço"
            iserror={errors.address ? 'erro' : ''}
          />
          {errors.address && (
            <ErrorMessage message="Esse campo deve ser preenchido." />
          )}
        </BoxInput>

        <BoxInput>
          <label htmlFor="email">
            E-mail*
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
                Esta informação servirá para contatarmos as pessoas usuárias
                cadastradas, caso seja necessário.
              </p>
            </Tooltip>
          )}
          <Input
            type="email"
            id="email"
            {...register('email', { required: true })}
            placeholder="Seu e-mail principal"
            iserror={errors.email ? 'erro' : ''}
          />
          {errors.email && (
            <ErrorMessage message="Esse campo deve ser preenchido." />
          )}
        </BoxInput>
      </FormStyle>
    </Container>
  );
};

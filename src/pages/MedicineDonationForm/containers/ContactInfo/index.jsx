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
    if (code && code.match(/^[0-9]{5}-[0-9]{3}$/)) {
      cep(code).then((response) => {
        setValue('address', `${response.street}`);
        setValue('city', `${response.city}`);
        setValue('state', `${response.state}`);
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
            {...register('fullName')}
            placeholder="Seu nome completo"
            iserror={errors.fullName ? 'erro' : ''}
          />
          {errors.fullName?.message && (
            <ErrorMessage message={errors.fullName.message} />
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
              {...register('cellphoneNumberWithDDD')}
              iserror={errors.cellphoneNumberWithDDD ? 'erro' : ''}
            />
            {errors.cellphoneNumberWithDDD?.message && (
              <ErrorMessage message={errors.cellphoneNumberWithDDD.message} />
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
              {...register('zipCode')}
              iserror={errors.zipCode ? 'erro' : ''}
            />
            {errors.zipCode?.message && (
              <ErrorMessage message={errors.zipCode.message} />
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
            {...register('address')}
            placeholder="Seu endereço"
            iserror={errors.address ? 'erro' : ''}
          />
          {errors.address?.message && (
            <ErrorMessage message={errors.address.message} />
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
            {...register('email')}
            placeholder="Seu e-mail principal"
            iserror={errors.email ? 'erro' : ''}
          />
          {errors.email?.message && (
            <ErrorMessage message={errors.email.message} />
          )}
        </BoxInput>
      </FormStyle>
    </Container>
  );
};

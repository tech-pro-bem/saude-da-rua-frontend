import { BoxInput, Container, Step, Tooltip } from './style';
import { InputText } from '@components';
import { Question } from 'phosphor-react';
import { useState } from 'react';

export const ContactInfo = ({ register }) => {
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

      <form>
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
          <InputText
            type="text"
            register={register}
            registerValue="name"
            id="name"
            placeholder="Digite seu nome completo"
          />
        </BoxInput>

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
          <InputText
            type="text"
            register={register}
            registerValue="birthday"
            id="birthday"
            placeholder="dd/mm/aa"
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
            placeholder="(81) 98888-8888"
          />
        </BoxInput>

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
          <InputText
            type="email"
            register={register}
            registerValue="email"
            id="email"
            placeholder="Informe o seu e-mail principal"
          />
        </BoxInput>
      </form>
    </Container>
  );
};

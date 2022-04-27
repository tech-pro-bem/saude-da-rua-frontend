import {
  ContainerContact,
  SubTitleName,
  SubTitleDate,
  SubTitlePhone,
  SubTitleEmail,
} from './InformationContact.style';

import { useForm } from 'react-hook-form';

const InformationContact = () => {
  const { register } = useForm();

  return (
    <ContainerContact>
      <h5> Informações de contato </h5>
      <form>
        <label>
          <SubTitleName>
            <p>Nome completo</p>
          </SubTitleName>
          <input
            id="inputFullName"
            {...register('nomeCompleto')}
            placeholder="Digite o seu nome completo"
          />
        </label>
        <label>
          <SubTitleDate>
            <p>Data de Nascimento</p>
          </SubTitleDate>
          <input
            id="inputDate"
            type="date"
            {...register('dataNascimento')}
            placeholder="dd/mm/aaaa"
          />
        </label>
        <label>
          <SubTitlePhone>
            <p>Celular</p>
          </SubTitlePhone>
          <input
            id="inputPhone"
            type="tel"
            {...register('telefone')}
            placeholder="(81) 98888-8888"
          />
        </label>
        <label>
          <SubTitleEmail>
            <p>E-mail</p>
          </SubTitleEmail>
          <input
            id="inputFullName"
            type="email"
            {...register('email')}
            placeholder="Infome o seu melhor e-mail"
          />
        </label>
      </form>
    </ContainerContact>
  );
};
export default InformationContact;

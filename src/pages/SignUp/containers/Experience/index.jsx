import { ErrorMessage, Select } from '@components';

import { BoxInput, Container, FormStyle, Input, Step } from './style';

const occupations = [
  'Estudante',
  'Médico (a)',
  'Enfermeiro (a)',
  'Técnico (a) de enfermagem',
  'Psicólogo (a)',
  'Nutricionista',
  'Assistente social',
  'Farmacêutico (a)',
  'Dentista',
  'Veterinário (a)',
];

const semester = [
  'Primeiro',
  'Segundo',
  'Terceiro',
  'Quarto',
  'Quinto',
  'Sexto',
  'Sétimo',
  'Oitavo',
  'Nono',
  'Décimo',
  'Décimo Primeiro',
  'Décimo Segundo',
  'Mais',
];

const specialities = [
  'Especialista em Acupuntura',
  'Especialista em Alergia e Imunologia',
  'Especialista em Anestesiologista',
  'Especialista em Angiologia',
  'Especialista em Cardiologia',
  'Especialista em Cirurgia Cardiovascular',
  'Especialista em Cirurgia de Mão',
  'Especialista em Cirurgia de Cabeça e Pescoço',
  'Especialista em Cirurgia do Aparelho Digestivo',
  'Especialista em Cirurgia Geral',
  'Especialista em Cirurgia Oncológica',
  'Especialista em Cirurgia Pediátrica',
  'Especialista em Cirurgia Plástica',
  'Especialista em Cirurgia Torácica',
  'Especialista em Cirurgia Vascular',
  'Especialista em Clínica Médica',
  'Especialista em Coloproctologia',
  'Especialista em Dermatologia',
  'Especialista em Endocrinologia e Metabologia',
  'Especialista em Endoscopia',
  'Especialista em Gastroenterologia',
  'Especialista em Genética Médica',
  'Especialista em Geriatria',
  'Especialista em Ginecologia e Obstetrícia',
  'Especialista em Hematologia e Hemoterapia',
  'Especialista em Homeopatia',
  'Especialista em Infectologia',
  'Especialista em Mastologia',
  'Especialista em Medicina de Emergência',
  'Especialista em Medicina de Família e Comunidade',
  'Especialista em Medicina do Trabalho',
  'Especialista em Medicina de Tráfego',
  'Especialista em Medicina Esportiva',
  'Especialista em Medicina Física e Reabilitação',
  'Especialista em Medicina Intensiva',
  'Especialista em Medicina Legal e Perícia Médica',
  'Especialista em Medicina Nuclear',
  'Especialista em Medicina Preventiva e Social',
  'Especialista em Nefrologia',
  'Especialista em Neurocirurgia',
  'Especialista em Neurologia',
  'Especialista em Nutrologia',
  'Especialista em Oftalmologia',
  'Especialista em Oncologia Clínica',
  'Especialista em Ortopedia e Traumatologia',
  'Especialista em Otorrinolaringologia',
  'Especialista em Patologia',
  'Especialista em Patologia Clínica / Medicina Laboratorial',
  'Especialista em Pediatria',
  'Especialista em Pneumologia',
  'Especialista em Psiquiatria',
  'Especialista em Radiologia e Diagnóstico por Imagem',
  'Especialista em Radioterapia',
  'Especialista em Reumatologia',
  'Especialista em Urologia',
  'Cirurgia Crânio - Maxilo - Facial',
  'Cirurgia do Trauma',
  'Cirurgia Videolaparoscópica',
  'Citopatologia',
  'Densitometria óssea',
  'Dor',
  'Ecocardiografia',
  'Ecografia Vascular com Doppler',
  'Eletrofisiologia Clínica Invasiva',
  'Emergência Pediátrica',
  'Endocrinologia Pediátrica',
  'Endoscopia Ginecológica',
  'Endoscopia Respiratória',
  'Ergometria',
  'Estimulação Cardíaca Eletrônica Implantável',
  'Foniatria',
  'Gastroenterologia Pediátrica',
  'Hansenologia',
  'Hematologia e Hemoterapia Pediátrica',
  'Hemodinâmica e Cardiologia Intervencionista',
  'Hepatologia',
  'Infectologia Hospitalar',
  'Infectologia Pediátrica',
  'Mamografia',
  'Medicina Aeroespacial',
  'Medicina do Adolescente',
  'Medicina do Sono',
  'Medicina Paliativa',
  'Medicina Tropical',
  'Nefrologia Pediátrica',
  'Neonatologia',
  'Neurologia Pediátrica',
  'Nutrição Parenteral e Enteral',
  'Nutrição Parenteral e Enteral Pediátrica',
  'Nutrologia Pediátrica',
  'Oncologia Pediátrica',
  'Pneumologia Pediátrica',
  'Psicogeriatria',
  'Psicoterapia',
  'Psiquiatria da Infância e Adolescência',
];

const timeOfExperience = [
  'Não, não tenho experiência',
  'Sim, menos de 1 ano de experiência',
  'Tenho conhecimento, mas nunca atuei',
  'Outros',
];

const howMuchParticipate = [
  'Não, nunca participei',
  'Sim, em uma ação',
  'Sim, de 2 a 5 ações',
  'Sim, em mais de 5 ações',
];

const courses = [
  'Medicina',
  'Enfermagem',
  'Técnico de Enfermagem',
  'Psicologia',
  'Nutrição',
  'Assistência Social',
  'Farmácia',
  'Odontologia',
  'Veterinária',
];

export const Experience = ({
  register,
  Controller,
  control,
  watch,
  errors,
}) => {
  return (
    <Container>
      <Step>
        <span>Etapa 2 de 3</span>
        <h2>Experiência profissional</h2>
      </Step>

      <FormStyle>
        <BoxInput>
          <label>Qual é a sua profissão?</label>
          <Controller
            rules={{ required: true }}
            defaultValue=""
            control={control}
            name="occupation"
            render={({ field }) => (
              <Select
                name="occupation"
                value={field.value}
                onChange={field.onChange}
                errors={errors}
                options={occupations}
              />
            )}
          />
          {errors.occupation && (
            <ErrorMessage message="Esse campo deve ser preenchido." />
          )}
        </BoxInput>

        {watch('occupation') === 'Médico (a)' && (
          <BoxInput>
            <label>Qual é a sua especialidade?</label>
            <Controller
              rules={{ required: true }}
              defaultValue=""
              control={control}
              name="speciality"
              render={({ field }) => (
                <Select
                  name="speciality"
                  value={field.value}
                  onChange={field.onChange}
                  errors={errors}
                  options={specialities}
                />
              )}
            />
            {errors.speciality && (
              <ErrorMessage message="Esse campo deve ser preenchido." />
            )}
          </BoxInput>
        )}

        {watch('occupation') === 'Estudante' && (
          <>
            <BoxInput>
              <label htmlFor="university">Instituição de ensino</label>
              <Input
                type="text"
                name="university"
                id="university"
                placeholder="Informe a sua instituição de ensino"
                {...register('university', { required: false })}
              />
            </BoxInput>
            <BoxInput>
              <label htmlFor="course">Curso</label>
              <Controller
                rules={{ required: true }}
                defaultValue=""
                control={control}
                name="course"
                render={({ field }) => (
                  <Select
                    name="course"
                    value={field.value}
                    onChange={field.onChange}
                    errors={errors}
                    options={courses}
                  />
                )}
              />
              {errors.semester && (
                <ErrorMessage message="Esse campo deve ser preenchido." />
              )}
            </BoxInput>
            <BoxInput>
              <label htmlFor="semester">Semestre que está cursando</label>
              <Controller
                rules={{ required: true }}
                defaultValue=""
                control={control}
                name="semester"
                render={({ field }) => (
                  <Select
                    name="semester"
                    value={field.value}
                    onChange={field.onChange}
                    errors={errors}
                    options={semester}
                  />
                )}
              />
              {errors.semester && (
                <ErrorMessage message="Esse campo deve ser preenchido." />
              )}
            </BoxInput>
          </>
        )}

        <BoxInput>
          <label>
            Possui experiência em temas da saúde da mulher - como contracepção,
            sexologia, atendimento a vítimas de violência e outros?
          </label>
          <Controller
            rules={{ required: true }}
            defaultValue=""
            control={control}
            name="timeOfExperience"
            render={({ field }) => (
              <Select
                name="timeOfExperience"
                value={field.value}
                onChange={field.onChange}
                errors={errors}
                options={timeOfExperience}
              />
            )}
          />
          {errors.timeOfExperience && (
            <ErrorMessage message="Esse campo deve ser preenchido." />
          )}
        </BoxInput>

        {watch('timeOfExperience') === 'Outros' && (
          <BoxInput>
            <Input
              type="text"
              name="experienceLevel"
              placeholder="Qual o seu nível de experiência?"
              {...register('experienceLevel', { required: true })}
            />
            {errors.experienceLevel && (
              <ErrorMessage message="Esse campo deve ser preenchido." />
            )}
          </BoxInput>
        )}

        <BoxInput>
          <label>
            Já participou como pessoa voluntária de ações do Saúde da Rua?
          </label>
          <Controller
            rules={{ required: true }}
            defaultValue=""
            control={control}
            name="howMuchParticipate"
            render={({ field }) => (
              <Select
                name="howMuchParticipate"
                value={field.value}
                onChange={field.onChange}
                errors={errors}
                options={howMuchParticipate}
              />
            )}
          />
          {errors.howMuchParticipate && (
            <ErrorMessage message="Esse campo deve ser preenchido." />
          )}
        </BoxInput>
      </FormStyle>
    </Container>
  );
};

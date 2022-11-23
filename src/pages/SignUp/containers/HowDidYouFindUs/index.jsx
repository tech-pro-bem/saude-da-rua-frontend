import { Controller } from 'react-hook-form';

import { ErrorMessage, Select } from '@components';

import { Container, Input } from './style';

const options = [
  'Site',
  'Instagram',
  'Posts de amigos',
  'Instituições de ensino',
  'Outros',
];

export const HowDidYouFindUs = ({
  register,
  watch,
  control,
  setValue,
  errors,
}) => {
  const howDidYouFindUs = watch('howDidKnowOfSDR');

  return (
    <Container>
      <p>Para finalizar, como ficou sabendo do Saúde da Rua?</p>

      <Controller
        rules={{ required: true }}
        defaultValue=""
        control={control}
        name="howDidKnowOfSDR"
        render={({ field }) => (
          <Select
            name="howDidKnowOfSDR"
            value={field.value}
            onChange={field.onChange}
            errors={errors}
            options={options}
          />
        )}
      />
      {errors.howDidKnowOfSDR && (
        <ErrorMessage message="Esse campo deve ser preenchido." />
      )}

      {howDidYouFindUs === 'Outros' ? (
        <>
          <label htmlFor="other" />
          <Input
            type="text"
            name="other"
            id="other"
            placeholder="Informe como ficou sabendo do Saúde da Rua"
            {...register('other', { required: true })}
          />
          {errors.other && (
            <ErrorMessage message="Esse campo deve ser preenchido." />
          )}
        </>
      ) : (
        setValue('other', '')
      )}
    </Container>
  );
};

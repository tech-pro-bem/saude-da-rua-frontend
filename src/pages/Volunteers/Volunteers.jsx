import { Structure } from '../../shared/components';
import { Headline } from './components';
import Select from '../../shared/components/Select/Select';

const Volunteers = () => {
  const options = [
    {
      label: 'Apple',
      value: 'apple',
    },
    {
      label: 'Mango',
      value: 'mango',
    },
    {
      label: 'Banana',
      value: 'banana',
    },
    {
      label: 'Pineapple',
      value: 'pineapple',
    },
  ];

  return (
    <>
      <Headline />
      <Structure>
        <Select name="Médico" options={options}></Select>
      </Structure>
    </>
  );
};

export default Volunteers;

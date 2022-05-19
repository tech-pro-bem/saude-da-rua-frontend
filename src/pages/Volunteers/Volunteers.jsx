import { Structure } from '../../shared/components';
import { Headline } from './components';
import Select from '../../shared/components/Select/Select';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Volunteers = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://api.github.com/users');
      const result = response.data;
      setData(result);
    };
    fetchData();
  }, []);

  const options = data.map((item) => {
    return { value: item.id, label: item.login };
  });
  console.log(options);

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

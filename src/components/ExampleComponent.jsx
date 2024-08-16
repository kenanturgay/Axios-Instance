import { useEffect, useState } from 'react';
import axiosInstance from '../axiosInstance';

const ExampleComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/users');
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };
  }, []);
  if (error) {
    return <div> Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loaiding...</div>;
  }

  return <div>Data: {JSON.stringify(data)}</div>;
};

export default ExampleComponent;

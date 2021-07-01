import React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../store/rootReducer';

// import { Container } from './styles';

const Teste: React.FC = () => {
  const exampleState = useSelector((state: ApplicationState) => state.example);
  console.log(exampleState);
  return (
    <div>
      <h1>AOBA</h1>
    </div>
  );
};

export default Teste;

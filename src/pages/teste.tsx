import React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../store/rootReducer';

// import { Container } from './styles';

const Teste: React.FC = () => {
  const exampleState = useSelector((state: ApplicationState) => state.example);
  return (
    <div>
      {exampleState.data.map((example) => <h1>{example.example}</h1>)}
    </div>
  );
};

export default Teste;

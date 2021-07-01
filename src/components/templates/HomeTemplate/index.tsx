import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import storeWrapper from '../../../store';
import { insertExample } from '../../../store/exampleRedux/actions';
import { ApplicationState } from '../../../store/rootReducer';

import styles from './HomeTemplate.module.scss';

const HomeTemplate: React.FC = () => {
  const [state, setState] = useState();
  const router = useRouter();
  const dispatch = useDispatch();

  const exampleState = useSelector((state: ApplicationState) => state.example);
  const pegarReducer = () => {
    dispatch(insertExample({
      data: [{
        id: 1,
        example: 'Action',
      }],
      error: false,
      loading: false,
    }));
    // router.push('/teste');
    console.log(exampleState);
  };

  return (
    <div className={styles.Container}>
      <button type="button" onClick={() => pegarReducer()}>OI</button>
    </div>
  );
};

export default HomeTemplate;

import React from 'react';
import { useRouter } from 'next/dist/client/router';
import { useDispatch } from 'react-redux';
import { insertExample } from '../../../store/exampleRedux/actions';

import styles from './HomeTemplate.module.scss';

const HomeTemplate: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const pegarReducer = () => {
    dispatch(insertExample({
      data: [{
        id: 1,
        example: 'Action',
      }],
      error: false,
      loading: false,
    }));
    router.push('/teste');
  };

  return (
    <div className={styles.Container}>
      <button type="button" onClick={() => pegarReducer()}>OI</button>
    </div>
  );
};

export default HomeTemplate;

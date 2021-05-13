import React from 'react';
import Layout from '@theme/Layout';
import Services from '../components/Services';
import styles from './styles.module.css';

function Service() {
  return (
    <Layout title="Үйлчилгээнүүд" description="E-Mongolia систем дээрх үйлчилгээнүүд">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20px'
        }}
      >
        <h1 style={{marginTop: '1rem'}}>Үйлчилгээнүүд</h1>
      </div>
      <div className={styles.serviceContainer}>
        <div className={styles.serviceContent}>
          <Services />
        </div>
      </div>
    </Layout>
  );
}

export default Service;

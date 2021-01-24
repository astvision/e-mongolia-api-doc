import React from 'react';
import Layout from '@theme/Layout';
import Services from '../components/Services';

function Service() {
  return (
    <Layout title="Үйлчилгээнүүд">
      <div className="container">
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
        <Services />
      </div>
    </Layout>
  );
}

export default Service;

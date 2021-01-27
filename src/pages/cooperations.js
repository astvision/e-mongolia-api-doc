import React from 'react';
import Layout from '@theme/Layout';
import Organizations from '../components/Organizations';

function Cooperations() {
  return (
    <Layout title="Хамтрагч байгууллагууд" description="E-mongolia систем дээрх хамтрагч байгууллагууд">
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '20px'
          }}
        >
          <h1 style={{marginTop: '1rem'}}>Хамтрагч байгууллагууд</h1>
        </div>
        <Organizations />
      </div>
    </Layout>
  );
}

export default Cooperations;

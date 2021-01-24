import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function Services() {
  return (
    <div className="row">
      <div className="col col--12">
        <Tabs
          defaultValue="mobile"
          values={[
            {label: 'Мобайл систем', value: 'mobile'},
            {label: 'Портал систем', value: 'portal'},
            {label: 'Оператор систем', value: 'operator'}
          ]}
          block
        >
          <TabItem value="mobile">Мобайл систем</TabItem>
          <TabItem value="portal">Портал систем</TabItem>
          <TabItem value="operator">Оператор систем</TabItem>
        </Tabs>
      </div>
    </div>
  );
}

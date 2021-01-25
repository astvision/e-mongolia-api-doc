import React from 'react';
import clsx from 'clsx';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {usePluginData} from '@docusaurus/useGlobalData';

function RenderService({data}) {
  return (
    <div className="container">
      <div className="row">
        {data &&
          data.map(({id, idKey, name}) => (
            <div key={id} className={clsx('col', 'col--6')}>
              <div className="card-demo" style={{margin: '5px 0'}}>
                <div className="card">
                  <div className="card__header">
                    <a href={`https://e-mongolia.mn/service/${idKey}`} rel="noreferrer noopener" target="_blank">
                      <b>{name}</b>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

function RenderServices({data}) {
  const wordList = Object.keys(data);
  const firstWord = wordList[0];
  const tabValues = Array.from(wordList, (v, k) => ({label: v, value: v}));
  return (
    <Tabs defaultValue={firstWord} values={tabValues} block>
      {wordList.map((word) => (
        <TabItem value={word}>
          <RenderService data={data[word]} />
        </TabItem>
      ))}
    </Tabs>
  );
}

export default function Services() {
  const {mobileData, operatorData, portalData} = usePluginData('data-loader');
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
          <TabItem value="mobile">
            <RenderServices data={mobileData} />
          </TabItem>
          <TabItem value="portal">
            <RenderServices data={portalData} />
          </TabItem>
          <TabItem value="operator">
            <RenderServices data={operatorData} />
          </TabItem>
        </Tabs>
      </div>
    </div>
  );
}

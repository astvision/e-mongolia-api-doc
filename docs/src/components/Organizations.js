import React from 'react';
import {usePluginData} from '@docusaurus/useGlobalData';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Organizations() {
  const {orgData} = usePluginData('data-loader');
  console.log(orgData);
  return (
    <div className="row">
      {orgData.map(({id, name, count, icon}) => {
        return (
          <div className="col col--6">
            <div class="avatar" style={{margin: '.7rem 0 .7rem 0'}}>
              <img class="avatar__photo avatar__photo--lg" style={{borderRadius: 0}} src={icon ? icon : useBaseUrl('img/logo-new.png')} />
              <div class="avatar__intro">
                <h4 class="avatar__name">{name}</h4>
                {/* <h4 class="avatar__name">Үйлчилгээний тоо: {count}</h4> */}
                <small class="avatar__subtitle">Үйлчилгээний тоо: {count}</small>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

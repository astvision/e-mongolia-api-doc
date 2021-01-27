import React, {useState} from 'react';
import {usePluginData} from '@docusaurus/useGlobalData';
import useBaseUrl from '@docusaurus/useBaseUrl';

function SubOrganizations({icon, name, count}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col col--12">
          {/* boxShadow: '1px 3px 15px 1px rgba(0,0,0,0.08)' */}
          <div className="avatar" style={{margin: '.5rem 0 .5rem 0', padding: '5px'}}>
            <img className="avatar__photo avatar__photo--sm" style={{borderRadius: 0}} src={icon ? icon : useBaseUrl('img/logo-new.png')} />
            <div className="avatar__intro">
              <h4 className="avatar__name">{name}</h4>
              <small className="avatar__subtitle" style={{fontWeight: 600}}>
                Үйлчилгээний тоо: {count}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Organizations() {
  const {orgData} = usePluginData('data-loader');
  const [data, setData] = useState(orgData);

  const onClick = (id) => {
    setData((data) =>
      data.map((d) => {
        if (d.id === id) {
          d.open = !d.open;
        }
        return d;
      })
    );
  };

  return (
    <div className="row">
      {data.map(({id, name, count, icon, subCats, open}) => {
        return (
          <div className="col col--6" key={id} onClick={() => onClick(id)}>
            <div
              className="avatar"
              style={{
                margin: '.5rem 0 .5rem 0',
                padding: 10,
                borderRadius: 10,
                // boxShadow: '1px 2px 10px 0px rgba(0,0,0,0.05)',
                //`1px solid ${open ? 'rgba(0, 77, 217, 0.5)' : 'rgba(0,0,0,0.08)'}`
                border: '1px solid rgba(0,0,0,0.08)',
                cursor: open ? 'default' : 'pointer'
              }}
            >
              <img className="avatar__photo avatar__photo--lg" style={{borderRadius: 0}} src={icon ? icon : useBaseUrl('img/logo-new.png')} />
              <div className="avatar__intro">
                <h4 className="avatar__name" style={{fontSize: '1rem'}}>
                  {name}
                </h4>
                <small className="avatar__subtitle" style={{fontWeight: 600}}>
                  Үйлчилгээний тоо: {count}
                </small>
                {subCats && subCats.length > 0 && (
                  <small className="avatar__subtitle" style={{fontWeight: 600}}>
                    Салбар байгууллагын тоо: {subCats.length}
                  </small>
                )}
                {open ? subCats && subCats.map((cat) => <SubOrganizations key={cat.id} {...cat} />) : null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

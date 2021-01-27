const axios = require('axios').default;
const qs = require('qs');
const {baseUrl} = require('./config');

const request = async (params) => {
  try {
    return await axios.get(baseUrl, {params, paramsSerializer: (params) => qs.stringify(params)});
  } catch (e) {
    console.error(e);
  }
};

const dataRequest = async (params) => {
  const res = await request(params);
  const {
    data: {data}
  } = res;
  return data;
};

const modifyServiceData = (data) => {
  const {list} = data;
  const {services} = list[0];
  return services
    .filter((d) => d.enabled)
    .reduce((acc, curr, i) => {
      const {id, name, idKey} = curr;
      const firstChar = name.substring(0, 1);
      if (acc[firstChar] && acc.hasOwnProperty(firstChar)) {
        acc[firstChar].push({id, name, idKey});
      } else {
        acc[firstChar] = [];
        acc[firstChar].push({id, name, idKey});
      }
      return acc;
    }, {});
};

const modifyOrgData = (data) => {
  return (
    data &&
    data.list
      .map(({id, name, icon, count, subCategories}) => {
        const subCats = subCategories ? subCategories.map(({id, name, parentId, icon, count}) => ({id, name, parentId, icon, count})) : [];
        return {id, name, icon, count, subCats, open: false};
      })
      .filter((d) => d.id !== 'all')
  );
};

module.exports = {dataRequest, modifyOrgData, modifyServiceData};

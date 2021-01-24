const axios = require('axios').default;
const qs = require('qs');

const baseUrl = 'https://e-mongolia.mn/shared-api/api/service/filter';

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
const modifyOrgData = (data) => {
  return (
    data &&
    data.list
      .map(({id, name, icon, count, subCategories}) => {
        let subCats = [];
        if (subCategories) {
          subCats = subCategories.map(({id, name, parentId, icon, count}) => ({id, name, parentId, icon, count}));
        }
        return {id, name, icon, count, subCats, open: false};
      })
      .filter((d) => d.id !== 'all')
  );
};

module.exports = {dataRequest, modifyOrgData};

const path = require('path');
const axios = require('axios');
module.exports = function (context, options) {
  const {siteConfig} = context; // Siteconfig is the content of docusaurus.config.js
  const {customFields} = siteConfig;

  if (!customFields.apiUrl) {
    throw new Error('Api хаяг олдсонгүй!');
  }

  return {
    name: 'data-loader',
    async loadContent() {
      const res = await axios.get(customFields.apiUrl);
      const {
        data: {data}
      } = res;

      const returnData =
        data.list &&
        data.list
          .map(({id, name, icon, count, subCategories}) => {
            let subCats = [];
            if (subCategories) {
              subCats = subCategories.map(({id, name, parentId, icon, count}) => ({id, name, parentId, icon, count}));
            }
            return {id, name, icon, count, subCats};
          })
          .filter((d) => d.id !== 'all');

      return returnData;
    },
    async contentLoaded({content, actions}) {
      const {createData, setGlobalData, addRoute} = actions;
      // Create friends.json
      // const orgDataJsonPath = await createData('orgData.json', JSON.stringify(content));
      setGlobalData({orgData: content});

      addRoute({
        path: '/orgData',
        component: '@site/src/components/Organizations.js',
        // modules: {
        //   // propName -> JSON file path
        //   orgData: orgDataJsonPath
        // },
        exact: true
      });
    }
  };
};

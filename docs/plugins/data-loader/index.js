const {dataRequest, modifyOrgData} = require('./api');
const {orgRoute} = require('./config');

module.exports = function (context, options) {
  const {siteConfig} = context; // Siteconfig is the content of docusaurus.config.js
  const {customFields} = siteConfig;

  return {
    name: 'data-loader',
    async loadContent() {
      const {orgParams} = customFields;
      const orgData = await dataRequest(orgParams);
      return {orgData: modifyOrgData(orgData)};
    },
    async contentLoaded({content, actions}) {
      const {orgData} = content;
      actions.setGlobalData({orgData});
      actions.addRoute(orgRoute);
    }
  };
};

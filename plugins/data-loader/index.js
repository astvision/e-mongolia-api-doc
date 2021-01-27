const {dataRequest, modifyOrgData, modifyServiceData} = require('./api');

module.exports = function (context, options) {
  const {siteConfig} = context; // Siteconfig is the content of docusaurus.config.js
  const {customFields} = siteConfig;

  return {
    name: 'data-loader',
    async loadContent() {
      const {orgParams, mobileParams, operatorParams, portalParams} = customFields;
      const orgData = await dataRequest(orgParams);
      const mobileData = await dataRequest(mobileParams);
      const operatorData = await dataRequest(operatorParams);
      const portalData = await dataRequest(portalParams);
      return {
        orgData: modifyOrgData(orgData),
        mobileData: modifyServiceData(mobileData),
        operatorData: modifyServiceData(operatorData),
        portalData: modifyServiceData(portalData)
      };
    },
    async contentLoaded({content, actions}) {
      const {orgData, mobileData, operatorData, portalData} = content;
      actions.setGlobalData({orgData, mobileData, operatorData, portalData});
    }
  };
};

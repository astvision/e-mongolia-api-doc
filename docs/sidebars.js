module.exports = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Мобайл систем',
      collapsed: false,
      items: [
        'mobile/intro',
        {
          type: 'category',
          label: 'Үйлчилгээний хүсэлт',
          items: ['mobile/service-request/list', 'mobile/service-request/create', 'mobile/service-request/detail']
        }
      ]
    },
    {
      type: 'category',
      label: 'Портал систэм',
      collapsed: false,
      items: [
        'portal/intro',
        {
          type: 'category',
          label: 'Үйлчилгээний хүсэлт',
          items: ['portal/service-request/list', 'portal/service-request/create', 'portal/service-request/detail']
        }
      ]
    },
    {
      type: 'category',
      label: 'Оператор систэм',
      collapsed: true,
      items: ['operator/intro']
    },
    {
      type: 'category',
      label: 'Систем холбох',
      collapsed: true,
      items: ['system']
    }
  ]
  // service: [
  //   'service1',
  //   'service2'
  // ]
};

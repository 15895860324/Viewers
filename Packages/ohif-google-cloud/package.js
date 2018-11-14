Package.describe({
  name: 'ohif:google-cloud',
  summary: 'DICOM Services: Google Cloud Healthcare API integration',
  version: '0.0.1',
  documentation: 'README.md',
});

Package.onUse(function(api) {
  api.versionsFrom('1.4');

  api.use('http');
  api.use('ecmascript');

  api.use(['templating', 'stylus'], 'client');

  // Main module
  api.mainModule('main.js', ['client']);

  // Client imports and routes
  api.addFiles('client/index.js', 'client');

  var assets = [
    'healthcare-api-adapter/dist/demo.html',
    'healthcare-api-adapter/dist/gcp.0.js',
    'healthcare-api-adapter/dist/gcp.1.js',
    'healthcare-api-adapter/dist/gcp.2.js',
    'healthcare-api-adapter/dist/gcp.3.js',
    'healthcare-api-adapter/dist/gcp.js',
    'healthcare-api-adapter/dist/vue.js',
    'healthcare-api-adapter/dist/img/arrow_right.d8a5b209.svg',
    'healthcare-api-adapter/dist/img/Button_Folder.271da60b.svg',
    'healthcare-api-adapter/dist/img/Button_File.473e74a7.svg',
    'healthcare-api-adapter/dist/img/Icon-24px-Close.d1a4d6d2.svg',
    'healthcare-api-adapter/dist/img/Icon-Arrow.e493b444.svg',
    'healthcare-api-adapter/dist/img/Icon-Warn.f3b4b640.svg',
  ];

  api.addAssets(assets, 'client');
});

// Package.onTest(function(api) {
//   api.use('ecmascript');
//   api.use('tinytest');
//   api.use('ohif-google-cloud');
//   api.mainModule('ohif-google-cloud-tests.js');
// });

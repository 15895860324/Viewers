const GCloudAdapter = {};

const GCP_HEALTHCARE_CONFIG = 'GCP_HEALTHCARE_CONFIG';

GCloudAdapter.getConfig = function() {
  const configStr = sessionStorage.getItem(GCP_HEALTHCARE_CONFIG);
  if (configStr) return JSON.parse(configStr);
  return null;
};

GCloudAdapter.setConfig = function(config) {
  if (config) sessionStorage.setItem(GCP_HEALTHCARE_CONFIG, JSON.stringify(config));
  else sessionStorage.removeItem(GCP_HEALTHCARE_CONFIG);
};

GCloudAdapter.showDicomStorePicker = function() {
  return OHIF.ui.showDialog('dicomStorePicker').then(config => {
    //if (config) OHIF.gcloud.setConfig(config);
    console.log(config);
    return config;
  });
};

export default GCloudAdapter;

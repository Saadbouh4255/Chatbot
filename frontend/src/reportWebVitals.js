const rapporterVitauxWeb = (surEntreePerf) => {
  if (surEntreePerf && surEntreePerf instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(surEntreePerf);
      getFID(surEntreePerf);
      getFCP(surEntreePerf);
      getLCP(surEntreePerf);
      getTTFB(surEntreePerf);
    });
  }
};

export default rapporterVitauxWeb;

module.exports = (phase, { defaultConfig }) => {
  // if (phase === PHASE_DEVELOPMENT_SERVER) {
  //   return {
  //     /* development only config options here */
  //   }
  // }

  return {
    /* config options for all phases except development here */
    env: {
      customKey: 'my-value',
    },
    trailingSlash: true,
  }
}

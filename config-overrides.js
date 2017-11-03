const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env){
    config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
     //config = rewireLess(config, env, { 
       // modifyVars: { '@primary-color': '#1DA57A', },
     //});
     config = rewireLess.withLoaderOptions({
        modifyVars: { "@primary-color": "#1DA57A" },
      })(config, env);
    return config;
};
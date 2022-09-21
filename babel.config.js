module.exports = function (api) {
  api.cache(true)

  const presets = ['next/babel']
  const plugins = [
    [
      'babel-plugin-import',
      {
        libraryName: '@moss/editor',
        libraryDirectory: 'lib',
        style: false,
      },
      '@moss/editor',
    ],
    // [
    //   'babel-plugin-import',
    //   {
    //     libraryName: '@moss/ui',
    //     style: (name) => `${name}/style.css`,
    //   },
    // ],

    [
      'babel-plugin-import',
      {
        libraryName: '@moss/tool',
        libraryDirectory: 'lib',
        camel2DashComponentName: false,
      },
      '@moss/tool',
    ],
    [
      '@emotion',
      {
        // sourceMap is on by default but source maps are dead code eliminated in production
        sourceMap: false,
        autoLabel: 'never',
        labelFormat: '[dirname]',
        cssPropOptimization: true,
      },
    ],
  ]

  return {
    presets,
    plugins,
  }
}

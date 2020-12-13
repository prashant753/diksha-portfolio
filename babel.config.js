module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          targets: {
            node: 'current',
          },
        },
      ],
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: [
      ['@babel/plugin-proposal-class-properties', { loose: true }],
    ],
    env: {
      production: {
        only: ['app'],
        plugins: [
          'transform-react-remove-prop-types',
          '@babel/plugin-transform-react-inline-elements',
          '@babel/plugin-transform-react-constant-elements',
        ],
      },
      test: {
        plugins: [
          '@babel/plugin-transform-modules-commonjs',
          'dynamic-import-node',
        ],
      },
    },
  };
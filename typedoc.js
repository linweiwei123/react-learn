module.exports = {
  out: './docs_components/',
  includes: './src',
  exclude: [
    'src/Footer.tsx',
    'src/bootstrap/**',
    'src/containers/**'
  ],
  mode: 'file',
  target: 'ES6',
  excludeExternals: true,
  excludeNotExported: true,
  excludePrivate: true
};
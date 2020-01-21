import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
    },
    {
      file: 'es/index.js',
      format: 'esm',
    },
  ],
  plugins: [typescript()],
};

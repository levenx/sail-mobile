import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import less from 'rollup-plugin-less';

export default {
  input: './src/index.tsx',
  output: [
    {
      file: './lib/umd/sail-ui.js',
      name: 'SailUI',
      format: 'umd',
      banner: '// welcome to levenx guard',
    },
    {
      file: './lib/esm/sail-ui.js',
      format: 'es',
      banner: '// welcome to levenx guard',
    },
  ],
  plugins: [
    typescript(), // 会自动读取 文件tsconfig.json配置
    babel(),
    less({ output: 'index.css' }),
  ],
  external: ['react', 'react-dom'],
};

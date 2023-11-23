import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import requireTransform from 'vite-plugin-require-transform';
//import commonjs from 'vite-plugin-commonjs';
//import vitePluginRequire from 'vite-plugin-require';
//import { nodePolyfills } from 'vite-plugin-node-polyfills';
//import nodePolyfills from 'rollup-plugin-polyfill-node';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), requireTransform({})],
  resolve: {
    alias: {
      web3: 'web3/dist/web3.min.js',
      ethers: 'ethers/dist/ethers.esm.min.js',
      
    }}
})

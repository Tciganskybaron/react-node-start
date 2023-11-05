/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import reactRefresh from '@vitejs/plugin-react-refresh';
import Inspect from 'vite-plugin-inspect';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
	envPrefix: 'APP_',
	server: {
		port: 3000,
		strictPort: true,
		host: true,
		headers: {}
	},
	preview: {
		port: 3000,
		strictPort: true,
		headers: {}
	},
	plugins: [
		react(),
		reactRefresh(),
		Inspect(),
		checker({
			typescript: true
		})
	]
});

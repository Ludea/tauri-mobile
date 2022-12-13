import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { internalIpV4 } from 'internal-ip'

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const host = await internalIpV4();
  
  plugins: [react(), tsconfigPaths()]
 
  server: {
    host: '0.0.0.0', // listen on all addresses
    port: 5173,
    strictPort: true,
    hmr: {
      protocol: 'ws',
      host,
      port: 5183,
    },
  },
})

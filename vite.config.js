import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     "/api": {
  //       target:
  //         "https://chatiov2-grh8d4hghbb5edbc.uaenorth-01.azurewebsites.net"
  //     }
  //   }
  // },
  plugins: [react()]
});

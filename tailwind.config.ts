import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bg-wave":
          "url('data:image/svg+xml,%3Csvg viewBox='0 0 500 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 0 50 C 150 150 300 0 500 80 L 500 0 L 0 0' fill='rgb(57, 27, 112)'/%3E%3Cpath d='M 0 50 C 150 150 330 -30 500 50 L 500 0 L 0 0' fill='%230E7452' opacity='0.8'/%3E%3Cpath d='M 0 50 C 215 150 250 0 500 100 L 500 0 L 0 0' fill='%230E7452' opacity='0.5'/%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [nextui()],
};
export default config;

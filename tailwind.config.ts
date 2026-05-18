import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          primary: "#EF233C",
          deep: "#B00020",
          black: "#0B0B0F",
          charcoal: "#17171F",
          light: "#F8F7F4",
          muted: "#E5E7EB",
          pink: "#FF4D6D",
          violet: "#7F1DFF",
        },
      },
      boxShadow: {
        soft: "0 12px 30px rgba(239, 35, 60, 0.12)",
        premium: "0 22px 55px rgba(11, 11, 15, 0.40), 0 8px 22px rgba(239, 35, 60, 0.15)",
        glow: "0 18px 42px rgba(239, 35, 60, 0.28)",
      },
      backgroundImage: {
        "gradient-1": "linear-gradient(135deg, #EF233C 0%, #7F1DFF 100%)",
        "gradient-2": "linear-gradient(135deg, #0B0B0F 0%, #EF233C 100%)",
      },
    },
  },
  plugins: [],
};

export default config;

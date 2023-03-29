/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#99ffa4",
        
"secondary": "#ebfcae",
        
"accent": "#2832ba",
        
"neutral": "#1F1E24",
        
"base-100": "#362D43",
        
"info": "#708BE6",
        
"success": "#107E40",
        
"warning": "#EB8219",
        
"error": "#E77973",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}


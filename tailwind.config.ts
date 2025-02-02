import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			dark: '#0f0f0f',
  			ferrariYellow: '#E0B920'
  		},
  		fontSize: {
  			text: '1rem',
  			h3: '1.75rem',
  			h2: '2.75rem',
  			h1: '5rem',
  			ph1: '4rem'
  		},
  		clipPath: {
  			customDesktop: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
  			customMobile: 'polygon(0 0, 100% 0, 100% 95%, 0 100%)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) {
      addUtilities({
        '.no-scrollbar': {
          /* Hide scrollbar for IE, Edge and Firefox */
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.no-scrollbar::-webkit-scrollbar': {
          /* Hide scrollbar for Chrome, Safari and Opera */
          display: 'none',
        }
      });
    },
      require("tailwindcss-animate")
],
} satisfies Config;

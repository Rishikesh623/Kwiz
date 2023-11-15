/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        mediumorchid: "#cb6be6",
        black: "#000",
        whitesmoke: "#f2f2f2",
        gray: {
          "100": "#1c0505",
          "200": "rgba(5, 5, 5, 0.48)",
        },
        lightgreen: "#9ee68c",
        forestgreen: "#65af4b",
        gainsboro: {
          "100": "#d9d9d9",
          "200": "rgba(217, 217, 217, 0)",
        },
        darkblue: "#351fb9",
        plum: "#e893e4",
        limegreen: "#32a50a",
        darkkhaki: "#b4c879",
        lightcyan: "#dcf9ff",
        silver: "#c2c1c6",
        red: "#fd2121",
        dimgray: "#504f4f",
      },
      spacing: {},
      fontFamily: {
        rubik: "Rubik",
        roboto: "Roboto",
        "ruslan-display": "'Ruslan Display'",
        sarpanch: "Sarpanch",
        "secular-one": "'Secular One'",
        "sawarabi-gothic": "'Sawarabi Gothic'",
        "alumni-sans": "'Alumni Sans'",
        inherit: "inherit",
        inter: "Inter",
      },
      borderRadius: {
        "21xl-5": "40.5px",
        "24xl-5": "43.5px",
        "32xl": "51px",
        "31xl": "50px",
      },
    },
    fontSize: {
      "31xl": "50px",
      xl: "20px",
      "81xl": "100px",
      "16xl": "35px",
      "13xl": "32px",
      "6xl": "25px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

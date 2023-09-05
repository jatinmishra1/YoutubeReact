/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [],
}

// so see to install or use tailwind  steps are as follows
// 1-npm i - D tailwindcss
// 2-npx tailwindcss init 
// 3-go to tailwind.Config.js file and write  inside content to which files you want to impplement this CSS
// // so write  "./src/**/*.js"
//  4-now go to App.CSS
//  add three line there 
//            1-@tailwind base 
//            2-@tailwind components 
//            3-@tailwind utilities


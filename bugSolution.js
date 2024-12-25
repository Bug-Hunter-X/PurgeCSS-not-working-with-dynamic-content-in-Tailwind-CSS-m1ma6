```javascript
// tailwind.config.js
module.exports = {
  content: [ 
    // Add paths to your dynamic content here, if using a framework:
    './src/**/*.{html,js,jsx,ts,tsx}',
    // Or, use a function to scan for classes dynamically at build time (more advanced)
    function ({contentPath, defaultExtractor}) {
       return contentPath.includes('.html') ? [] : defaultExtractor(contentPath)
    }
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
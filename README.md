# PurgeCSS Issue with Dynamic Content in Tailwind CSS

This repository demonstrates an uncommon bug encountered when using PurgeCSS with Tailwind CSS and dynamic content. The problem is that PurgeCSS might not correctly identify and preserve styles used in dynamically rendered components, leading to missing styles in the production build.

## Bug Description

The `tailwind.config.js` file is configured to use PurgeCSS.  However, if the application dynamically renders HTML elements with Tailwind classes that aren't present in the initial HTML, these styles will be removed by PurgeCSS, causing visual glitches.

## Reproduction

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Observe the dynamic content.  Styles should be applied correctly.
5. Build the production version: `npm run build`
6. Serve the production build.  Note that the dynamic content will now lack styles because PurgeCSS has removed them.

## Solution

The solution involves configuring PurgeCSS to correctly identify and include the dynamic content.  This might involve adding more sophisticated content scanning options or using a different purging strategy.
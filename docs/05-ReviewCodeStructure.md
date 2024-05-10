# Review of Code Structure

## Summary

The code structure is based on a combination of a standard [Next.js](https://nextjs.org/) application and a [Faust.js](https://faustjs.org/) application. In addition to the basics structure for these frameworks, additional code has been added to support the creation and management of a WordPress plugin.

## Description of Key Files and Directories

- rainflyadventures-plugin.php
  - WordPress plugin file
  - Update this file to register custom types, blocks, and other WordPress customizations
  - renamed as part of your setup steps as noted in [04-CodeConfiguration.md](./04-CodeConfiguration.md)
- possibleTypes.json
  - JSON file that is part of the Faust.js structure
  - It is a generated file, that provides type names available through the GraphQL schema
  - As new types are added to WordPress via you custom plugin or ACF this file will require regeneration
  - Regeneration is handled by the command ```faust generatePossibleTypes```, initated through NPM as ```npm run sync-types```
- src/components
  - folder structure for each unique component built
  - each component added should be exported from index.tsx, to ease referencing throughout the application
- src/models
  - folder structure to handle typescript interfaces (models)
  - each model should contain corresponding GraphQL fragement defintions that can be easily referecned when building queries
- wp-blocks
  - structural folder for custom Gutenberg blocks
  - rendering details need to be registered in the corresponding index.tsx for GraphQL parsing
- wp-templates
  - structural folder for rendering HTML as they correspond to different page types, page templates and posts types
  - each rendering HTML needs to be mapped to one or more page types, page templates, or post types in the index.tsx
- pages
  - standard routing directory for Next.js

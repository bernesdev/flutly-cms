import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './plugins/structure'

export default defineConfig({
  name: 'default',
  title: 'flutly-store',

  projectId: 'veushuon',
  dataset: 'production',

  plugins: [
    structureTool({ structure }), 
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter((t) => t.schemaType !== 'home'),
  },
})

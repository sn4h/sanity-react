import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {useStructure} from './sanity.deskStructure'

export default defineConfig({
  name: 'default',
  title: 'studio',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,

  plugins: [deskTool({
    structure: useStructure
  }), visionTool()],

  schema: {
    types: schemaTypes
  }
})

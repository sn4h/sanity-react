import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text'
    }),
    defineField({
      title: 'Opening Hours',
      name: 'openingHours',
      type: 'array',
      of: [{
        type: 'dayAndTime'
      }]
    })
  ]
})
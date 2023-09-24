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
      name: 'organizationName',
      title: 'Company/Organization name',
      type: 'string'
    }),
    defineField({
      name: 'organizationNumber',
      title: 'Organization number',
      type: 'string'
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string'
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string'
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'address'
    }),
    defineField({
      name: 'socialUri',
      title: 'Social pages',
      type: 'socialUri'
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
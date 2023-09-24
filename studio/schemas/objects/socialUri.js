import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'socialUri',
  title: 'Social pages',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    defineField({
      name: 'facebookUri',
      title: 'Facebook',
      type: 'string'
    }),
    defineField({
      name: 'twitterUri',
      title: 'Twitter',
      type: 'string'
    }),
    defineField({
      name: 'linkedinUri',
      title: 'LinkedIn',
      type: 'string'
    }),
    defineField({
      name: 'instagramUri',
      title: 'Instagram',
      type: 'string'
    })
  ]
})
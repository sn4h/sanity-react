import {defineField, defineType} from 'sanity'
import countryList from '../data/countryList'

export default defineType({
  name: 'address',
  title: 'Address',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true
  },
  fields: [
    defineField({
      name: 'address',
      title: 'Street address',
      type: 'string'
    }),
    defineField({
      name: 'zipCode',
      title: 'Zip',
      type: 'string'
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string'
    }),
    defineField({
      title: 'Select Country',
      name: 'country',
      type: 'string',
      options: {
        list: [
          ...countryList]
      }
    })
  ]
})
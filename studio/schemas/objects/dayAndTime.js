import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dayAndTime',
  title: 'Day and Time',
  type: 'object',

  fields: [
    defineField({
      name: 'day',
      title: 'Day',
      type: 'string'
    }),
    defineField({
      name: 'opensAt',
      title: 'Open',
      type: 'string',
      initialValue: '10:00'
    }),
    defineField({
      name: 'closesAt',
      title: 'Close',
      type: 'string',
      initialValue: '17:00'
    })
  ],
  preview: {
    select: {
      day: 'day',
      opensAt: 'opensAt',
      closesAt: 'closesAt'
    },
    prepare({day, opensAt, closesAt}) {
      return {
        title: day,
        subtitle: `${opensAt} - ${closesAt}`
      }
    }
  }
})
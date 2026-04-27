import {defineField, defineType} from 'sanity'

let product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      type: 'number',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'price',
      type: 'number',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'image',
      type: 'string',
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: {title: 'title', imageUrl: 'image'},
    prepare({title, imageUrl}) {
      return {
        title: title ?? 'Untitled Product',
        imageUrl: imageUrl,
      }
    },
  },
});

export {product};
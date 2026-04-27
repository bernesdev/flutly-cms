import highlight from '../assets/icons/highlight.png'
import normal from '../assets/icons/normal.png'

import { defineArrayMember, defineField, defineType } from 'sanity'

let home = defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'sections',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'productRail',
          title: 'Product rail',
          type: 'object',
          fields: [
            defineField({
              name: 'heading',
              type: 'string',
              validation: (r) => r.required()
            }),
            defineField({
              name: 'variant',
              title: 'Variant',
              type: 'string',
              options: {
                list: [
                  { title: 'Highlight', value: 'highlight' },
                  { title: 'Normal', value: 'normal' },
                ],
              },
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'items',
              title: 'Products (drag to reorder)',
              type: 'array',
              of: [
                defineArrayMember({
                  name: 'productItem',
                  title: 'Product item',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'product',
                      title: 'Product',
                      type: 'reference',
                      to: [{ type: 'product' }],
                      validation: (r) => r.required(),
                    }),
                  ],
                  preview: {
                    select: { title: 'product.title', image: 'product.image' },
                    prepare({ title, image }) {
                      return {
                        title: title ?? 'Untitled product',
                        imageUrl: image,
                      }
                    },
                  },
                }),
              ],
            }),
          ],
          preview: {
            select: { title: 'heading', variant: 'variant' },
            prepare({ title, variant }) {
              return {
                title: title ?? 'Untitled Section',
                media: <img src={variant === 'highlight' ? highlight : normal} alt="" />
              }
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Home' })
  },
});

export { home };
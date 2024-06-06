import { defineType, defineField, defineArrayMember } from 'sanity'

export const product = defineType({
  type: "document",
  name: "product",
  fields: [
    defineField({
      type: "string",
      name: "name",
    }),
    defineField({
      type: "slug",
      name: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      type: "string",
      name: "productSKU",
    }),
    defineField({
      type: "text",
      name: "description",
    }),
   
    defineField({
      type: "number",
      name: "price",
    }),
    defineField({
      type: "number",
      name: "amountInStock",
    }),
    defineField({
      type: "image",
      name: "image",
      options: { hotspot: true },
    }),
    defineField({
      type: "reference",
      name: "category",
      to: [{ type: "category" }],
    }),
    defineField({
      type: "array",
      name: "tags",
      of: [
        defineArrayMember({
          type: "string",
        }),
      ],
    }),
    defineField({
      type: "array",
      name: "features",
      of: [
        defineArrayMember({
          type: "string",
        }),
      ],
    }),
  ],
});


//This first line import "sanity helper function for intellisess"

import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "post",
  type: "document",
  title: "post",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "post title",
      description: "Title of the post ",
      validation: (Rule) => Rule.required(),
    }),

    //slug field

    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rlue) => Rlue.required(),
    }),
    defineField({
      name: "summary",
      type: "text",
      title: "summary",
      validation: (Rlue) => Rlue.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "content",
      type: "array",
      title: "Content",
      of: [
        defineArrayMember({
          type: "block",
        })
      ]
    }),
    defineField({
      name: "author",
      type: "reference",
      title: "Author",
      to: [
        {
          type: "author",
        }
      ]
    }),

    // {
    //   name: "gender",
    //   type: "string",
    //   title: "Gender",
    //   options: {
    //     list: [
    //       { title: "Male", value: "male"},
    //       { title: "Female", value: "female"},
    //     ],
    //     layout: "radio",
    //     direction: "horizontal",
    //   },
    // },
  ],
});

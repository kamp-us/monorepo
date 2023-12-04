import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const Lesson = defineDocumentType(() => ({
  name: 'Lesson',
  filePathPattern: '**/*.md',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the Lesson',
      required: true,
    },
  },
  computedFields: {
    id: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath,
    },
    html: {
      type: 'string',
      resolve: ({ body }) => body.raw,
    },
  },
}))

export default makeSource({
  contentDirPath: 'curriculum',
  documentTypes: [Lesson],
})

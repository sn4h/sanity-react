import imageUrlBuilder from '@sanity/image-url'

export default imageUrlBuilder({
  projectId: import.meta.env.VITE_SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_STUDIO_DATASET,
  useCdn: true,
  apiVersion: '2021-08-05'
})
import {createClient} from '@sanity/client'
export default createClient({
  projectId: "...",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-08-05",
})
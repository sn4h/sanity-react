import client from "@sanity/client"
export default client({
  projectId: "g9s5bxn2",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-08-05",
})
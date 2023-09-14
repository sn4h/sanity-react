import client from '../client.js'
import {useLoaderData} from 'react-router-dom'
import {PortableText} from '@portabletext/react'

export function loader({params}) {
  return client.fetch(
    `*[slug.current == "${params.slug}"][0] {
    title,
        slug,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
    }`
  )
}

function BlogPage() {
  const post = useLoaderData()
  return (
    <article className="Article">
      <h1>{post.title}</h1>
      <PortableText value={post.body} />
    </article>
  )
}

export default BlogPage
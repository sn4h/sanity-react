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
        },
      author -> {
        name
      },
      categories[] -> {
        title,
        _id
      }
    }`
  )
}

function BlogPage() {
  const post = useLoaderData()

  return (
    <article className='Article'>
      <h1>{post.title}</h1>
      {post.author && <p><small>Written by {post.author.name}</small></p>}
      {post.mainImage && post.mainImage.asset &&
        <img src={post.mainImage.asset.url} alt={post.title} />
      }
      <PortableText value={post.body} />
      <p>
        {post.categories && post.categories.map(category => (
          <small key={category._id}>{category.title}</small>
        ))}
      </p>
    </article>
  )
}

export default BlogPage
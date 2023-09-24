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
      },
      gallery {
        images[] {
          asset -> {
          _id,
          url
        },
        alt,
        description
        }
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
      <figure className='Gallery'>
        {post.gallery.images && post.gallery.images.map(image => (
          <>
            <img
              key={image.asset._id}
              src={image.asset.url}
              alt={image.alt}
            />
            <p>{image.description}</p>
          </>
        ))}
      </figure>
      <p>
        {post.categories && post.categories.map(category => (
          <small key={category._id}>{category.title}</small>
        ))}
      </p>
    </article>
  )
}

export default BlogPage
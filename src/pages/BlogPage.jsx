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
      {post.mainImage && post.mainImage.asset &&
        <figure className='MainImage--Item'>
          <img src={post.mainImage.asset.url} alt={post.title} />
        </figure>
      }
      <h1>{post.title}</h1>
      <PortableText value={post.body} />
      <div className='Gallery'>
        {post.gallery.images && post.gallery.images.map(image => (
          <figure className='Gallery--Item'>
            <img
              key={image.asset._id}
              src={image.asset.url}
              alt={image.alt}
            />
            <figcaption>
              <small>{image.description}</small>
            </figcaption>
          </figure>
        ))}
      </div>
      {post.author &&
        <p><small>Written by {post.author.name}</small></p>
      }
      {post.categories && post.categories.map(category => (
        <span key={category._id} className='Category--Item'>
          <small>{category.title}</small>
        </span>
      ))}
    </article>
  )
}

export default BlogPage
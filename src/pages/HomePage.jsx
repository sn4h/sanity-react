import {NavLink, useLoaderData} from 'react-router-dom'
import client from '../client.js'

export function loader() {
  return client
    .fetch(
      `*[_type == "post"] {
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

function HomePage() {
  const posts = useLoaderData()

  return (
    <section className='Section'>
      {posts.map((post) => (
        <article key={post.slug.current}>
          <NavLink to={post.slug.current}>
            {post.title}
          </NavLink>
        </article>
      ))}
    </section>
  )
}

export default HomePage
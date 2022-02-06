import Head from "next/head"
import Image from "next/image"
import { PostListItem } from "../components/PostListItem"
import PostsData from "../components/PostsData"
import { getAllFilesMetadata } from "../lib/mdx"

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Simplifying Web Development</h1>
      <div>
        <p>
          Dedicated to simplifying the web developer experience. DuckBoost is a
          simple and minimalist collection of projects and articles for
          developers and students.
        </p>
        <br />
        <br />

        <Image
          src={`/images/illustrations/home.svg`}
          alt="Logo"
          width={200}
          height={200}
        />
      </div>

      <h1>Lastest Articles</h1>
      <hr />
      <PostsData posts={posts} />
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata()
  //console.log(posts)
  return {
    props: { posts },
  }
}

import Head from "next/head"
import Image from "next/image"
import { PostListItem } from "../components/PostListItem"
import PostsData from "../components/PostsData"
import { getAllFilesMetadata } from "../lib/mdx"
import styled from 'styled-components';


const SVGDiv = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: start;
  @media (max-width: 540px) {
    justify-content: center;
  }
`

const SVGP = styled.p`
  width: 60%;
  @media (max-width: 540px) {
    width: 100%;
  }
  `




export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Simplifying Web Development</h1>
      <SVGDiv>
        <SVGP>
          Dedicated to simplifying the web developer experience. <br /><br />
          DuckBoost is a simple and minimalist collection of projects and articles for
          developers and students.
        </SVGP>
        <br />
        <br />

        {/* añadir forma ovalada */}
        <Image src={"/images/illustrations/final-rocket.svg"} alt='Logo' width={200} height={200}/>
      </SVGDiv>

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

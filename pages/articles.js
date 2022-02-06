import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components';

import { getAllFilesMetadata } from '../lib/mdx'
import { PostListItem } from '../components/PostListItem'


const ListDiv = styled.div`
  display:grid;
  width: 100%;
  justify-content: center;
`


export default function Articles({ posts }) {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta name="description" content="..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ListDiv>
        {posts.map((post) => (
          <Link href={`/${post.slug}`} key={post.slug}>
            <a>
              <PostListItem
                title={post.title}
                date={post.date}
                languaje={post.languaje}
              />
            </a>
          </Link>
        ))}
      </ListDiv>
    </div>
  )
}



export async function getStaticProps(){
  const posts = await getAllFilesMetadata()
  //console.log(posts)
  return{
    props: {posts}
  }
}

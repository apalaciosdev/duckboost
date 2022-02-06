import React from 'react';
import { PostListItem } from './PostListItem'
import Link from "next/link"

const PostsData = ({posts}) => {
  return(
    <div>

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
    </div>
  )

}


export default PostsData;

export async function getStaticProps() {
  const posts = await getAllFilesMetadata()
  //console.log(posts)
  return {
    props: { posts },
  }
}
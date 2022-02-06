
export async function getStaticProps() {
  const posts = await getAllFilesMetadata()
  //console.log(posts)
  return {
    { posts }
  }
}
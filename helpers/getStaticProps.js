
export async function getStaticProps() {
  const posts = await getAllFilesMetadata()

  return {
    { posts }
  }
}
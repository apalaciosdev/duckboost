import Head from "next/head";
import Image from "next/image";
import { PostListItem } from "../components/PostListItem";
import PostsData from "../components/PostsData";
import { getAllFilesMetadata } from "../lib/mdx";
import styled from 'styled-components';
import classNames from 'classnames';

const Container = styled.div`
  min-height: 75vh;
  /* Estilos para el contenedor principal si es necesario */
`;

const Header = styled.h1`
  /* Estilos para el título principal si es necesario */
`;

const IntroSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;

  @media (max-width: 540px) {
    justify-content: center;
  }
`;

const IntroText = styled.p`
  width: 60%;

  @media (max-width: 540px) {
    width: 100%;
  }
`;

export default function Home({ posts }) {
  // Define la variable someCondition según tus necesidades
  const someCondition = true;

  const rocketImageClasses = classNames({
    'your-default-image-class': true,
    'your-custom-class-if-condition-true': someCondition,
    // ... cualquier otra clase dinámica basada en condiciones
  });

  return (
    <Container>
      <Head>
        <title>Home</title>
        <meta name="description" content="..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>Simplifying Web Development</Header>

      <IntroSection>
        <IntroText>
          Dedicated to simplifying the web developer experience.
          DuckBoost is a simple and minimalist collection of projects and articles for developers and students.
        </IntroText>

        {/* añadir forma ovalada */}
        <Image
          src={"/images/illustrations/final-rocket.svg"}
          alt='Logo'
          width={200}
          height={200}
          className={rocketImageClasses}
        />
      </IntroSection>

      <h1>Lastest Articles</h1>
      <hr />
      <PostsData posts={posts} />
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();
  return {
    props: { posts },
  };
}

import Head from 'next/head';
import ArticleList from '../components/ArticalList';
import { server } from '../config';
import styles from '../styles/Home.module.css';

// export const getStaticProps = async() => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
//   const articles = await res.json();

//   return {
//     props : {
//       articles
//     }
//   }
// }

export const getStaticProps = async() => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props : {
      articles
    }
  }
}

export default function Home({ articles }) {
  return (
    <div>
      {/* <Head>
        <title>My Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <ArticleList articles={articles} />

    </div>
  )
}

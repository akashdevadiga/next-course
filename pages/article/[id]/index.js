import Link from 'next/link';
import { useRouter } from 'next/router';
import Meta from '../../../components/Meta';
import { server } from '../../../config';

const article = ({ article }) => {
    //one of method to get id
    // const router = useRouter();
    // const { id } = router.query;

    return ( 
        <div style={{textAlign: "center"}}>
            <Meta title={article.title} description={article.excerpt} />
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <br />
            <Link href='/'>Go Back</Link>
        </div>
     );
}

//first method getServerSideProps
// export const getServerSideProps = async(context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const article = await res.json();

//     return {
//         props: {
//             article
//         }
//     }
// }


//another method getStaticPaths & getStaticProps
// export const getStaticProps = async(context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const article = await res.json();

//     return {
//         props: {
//             article
//         }
//     }
// }


// export const getStaticPaths = async() => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
//     const articles = await res.json();

//     const paths = articles.map((article) => {
//         return {
//             params: { id: article.id.toString() }
//         }
//     })

//     return {
//         paths,
//         fallback: false
//     }
// }
 

export const getStaticProps = async(context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`);
    const article = await res.json();

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async() => {
    const res = await fetch(`${server}/api/articles`);
    const articles = await res.json();

    const paths = articles.map((article) => {
        return {
            params: { id: article.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export default article;
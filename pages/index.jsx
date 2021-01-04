import Head from 'next/head';
import Link from 'next/link';

import Button from '@material-ui/core/Button';

import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout';

import utilStyles from '../styles/utils.module.css';

import { getSortedPostsData } from '../lib/posts';


export const getStaticProps = async() => {
  const allPostsData = await getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const Home = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}p</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Kwen and I'm giving Next.js a try</p>
        <p>I want to add material-ui to my project</p>
        <Button variant="contained" color="primary">
          Click Me
        </Button>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, title, date }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default Home;
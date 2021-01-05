import Head from 'next/head';
import Link from 'next/link';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout';

import utilStyles from '../styles/utils.module.css';

import { getSortedPostsData } from '../lib/posts';


export const getStaticProps = async () => {
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
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Kwen and I'm giving Next.js a try</p>
        <p>I'm also adding material-ui to this project.  
          <Link href={`/material-ui/buttons`}>
            <a>Click here</a>
          </Link>
        </p>
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
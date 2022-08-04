import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm <b>Simas</b>. I'm a web developer and a translator (<i>English/Lithuanian</i>). 
        You can contact me on <a href="https://twitter.com/CiulisM">Twitter</a></p>

        <p>
          Now that I have built my first Next.js website it's time to build the <a href="https://prachirai.medium.com/making-a-pwa-app-with-next-js-a5009331f833">PWA (Progressive Web App){' '}</a> 
          with Next.js
        </p>
        <p> Please visit my other web  apps that I have made using EJS and MongoDb. They are
        deployed to <b>Heroku</b>: </p>
        <ul>
        <li><a href="https://zurnalas-app.herokuapp.com/">Daily Journal</a></li>
        <li><a href="https://secret-bank-app.herokuapp.com//">Secrets Storage</a></li>
        <li><a href="https://fierce-sierra-68401.herokuapp.com/">To-Do List App</a></li>
        </ul>
      </section>
    </Layout>
  );
}
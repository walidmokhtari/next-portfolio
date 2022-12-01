import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header/header'
import Section from '../components/section/section'
import bgImage from '../../public/background.png'
import Styles from './index.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>PORTFOLIO</title>
        <meta name="portfolio" content="This is Walid MOKHTARI portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header></Header>
        <div className={Styles.div__container1}>
          <div className={Styles.div__container1__image}>
            <img src={bgImage.src}></img>
            <div className={Styles.div__container1__text}>
              <p>Hello i'm a</p>
              <h1>WEB DEVELOPER</h1>
              <p>I'm Walid Mokhtari, a passionate web developement based in Franch,<br></br> Welcome to my portfolio</p>
              <button type='submit'>VIEW MORE</button>
            </div>
          </div>
        </div>
        <Section title="Projets" />
        <Section title="Parcours" />
        <Section title="Services" />
      </main>
    </div>
  )
}

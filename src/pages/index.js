import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header/header'
import Section from '../components/section/section'
import bgImage from '../../public/background.png'
import Styles from './index.module.scss'
import Link from 'next/link'
import Footer from '../components/footer/footer'

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
              <Link href="https://profile-api-prod.s3.us-west-2.amazonaws.com/537857878_79d56cf3-1af9-4e8d-90cd-8e2d43394b16?response-content-disposition=attachment%3Bfilename%3DCV_Walid_MOKHTARI.pdf&response-content-type=application%2Fpdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221201T143846Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=AKIAZKXXDXTXZMVZABWM%2F20221201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=6a587a2dfed058dd6267b25ea6fef197607bde37d6ba3cac18e9633d54955123" type='submit'>Télécharger mon CV</Link>
            </div>
          </div>
        </div>
        <Section title="Projets" id="projets"/>
        <Section title="Services" id="services"/>
        <Section title="Parcours" id="parcours" />
        <Footer />
      </main>
    </div>
  )
}

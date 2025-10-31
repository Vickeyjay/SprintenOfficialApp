import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './component/Navbar/navbar'
import HeroPage from './component/HeroPage/hero'
import About from './component/About/about'
import Services from './component/Services/services'
import CaseStudy from './component/CaseStudy/case'
import Client from './component/Client/client'
import Banner from './component/Banner/banner'
import IdealProcess from './component/IdealProcess/ideal'
import Faq from './component/FAQ/faq'
import SmarterUx from './component/SmarterUx/smarter'
import Footer from './component/Footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <HeroPage />
      <About />
      <Services />
      <Banner />
      <CaseStudy />
      <Client />
      <Banner />
      <IdealProcess />
      <Faq />
      <SmarterUx />
      <Footer />
    </>
  )
}

export default App

import React, { useState} from 'react'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import HeroSection from '../../components/HeroSection';
import DemoSection from '../../components/DemoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../../components/DemoSection/Data';
import Services from '../../components/Services';
import Footer from '../../components/Footer';
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Services />
      <DemoSection {...homeObjTwo}/>
      <DemoSection {...homeObjThree}/>
      <DemoSection {...homeObjOne}/>
      <Footer />
      
    </>
  )
}

export default Home;
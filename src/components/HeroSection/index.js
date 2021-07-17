import React, {useState} from 'react'

import Video from '../../assests/videos/video.mp4';
import  {FilterTextbox}  from '../Searchbar/searchbar.tsx';
import { Button } from '../Button/ButtonElements';
import { 
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowFoward,
  ArrowRight
 } from './HeroElements';


const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  }
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={ Video } type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1> Stay Healthy!</HeroH1>
        <HeroP>
          Why travel when you can have access to 
          a doctor within the twinkle of an eye. You are never out of reach
        </HeroP>
        <FilterTextbox />
        <HeroBtnWrapper>
          <Button to='search' onMouseEnter={onHover}
            onMouseLeave={onHover}>
            Find Medical Centers {hover ? <ArrowFoward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
        
      </HeroContent>
      
    </HeroContainer>
  )
}

export default HeroSection

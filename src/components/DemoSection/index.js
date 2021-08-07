import React from 'react'
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from '../Button/ButtonElements'
import { BtnLink, BtnWrap,
  Column1,
  Column2,
  DemoContainer,
  DemoRow,
  DemoWrapper,
  Heading, 
  Img, 
  ImgWrap,
  Subtitle,
  TextWrapper,
  TopLine
} from './demoElements'

const DemoSection = ({
  lightBg, id, imgStart, topLine, lightText, headLine, darkText,
  description, desc1, desc2, buttonLabel, img, alt, primary, dark, dark2
}) => {

  return (
    
    <>
      <DemoContainer lightBg={lightBg} id={id}>
        <DemoWrapper>
          <DemoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{id ==='partner' ? <FontAwesomeIcon icon={faCircle} color='#000026' /> : null } {description}</Subtitle>
                <Subtitle darkText={darkText}>{id ==='partner' ? <FontAwesomeIcon icon={faCircle} color='#000026' /> : null } {desc1}</Subtitle>
                <Subtitle darkText={darkText}>{id ==='partner' ? <FontAwesomeIcon icon={faCircle} color='#000026' /> : null } {desc2}</Subtitle>
                <BtnWrap> {
                  id !== 'signup' ? 
                  <Button
                    smooth={true}
                    spy={true}
                    duration={500}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 0 : 1}
                    dark2={dark2 ? 1 : 0}
                    to='home'
                  >{buttonLabel}</Button> : 
                  <BtnLink
                    smooth={true}
                    spy={true}
                    duration={500}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 0 : 1}
                    dark2={dark2 ? 1 : 0}
                    to='/signup'
                  >{buttonLabel}</BtnLink>}
                  
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
          </DemoRow>
        </DemoWrapper>
      </DemoContainer>
    </>
  )
}

export default DemoSection;
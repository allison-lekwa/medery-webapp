import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesHeaderContainer, ServicesIcon, ServicesIconNum, ServicesP, ServicesP1, ServicesWrapper, VerticalMargin } from './ServicesElements';
import Icon1 from '../../assests/icons/img-one.svg';
import Icon3 from '../../assests/icons/img-two.svg';
import Icon2 from '../../assests/icons/img-three.svg';
import Icon01 from '../../assests/icons/img-01.svg';
import Icon02 from '../../assests/icons/img-02.svg';
import Icon03 from '../../assests/icons/img-03.svg';



const Services= () => {
  return (
    <ServicesContainer id="about">
      <ServicesHeaderContainer>
        <ServicesH1>See how it works</ServicesH1>
        <ServicesP1>Medery offers an opportunity 
          for patients to access medical services 
          whereever, whenever!</ServicesP1>
      </ServicesHeaderContainer>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIconNum src={Icon01} /> 
          <ServicesH2>Search for Medical Centers</ServicesH2>
          <ServicesP>Creat an account</ServicesP>        
          <ServicesIcon src={Icon1} />          
        </ServicesCard>
        <ServicesCard>
        <VerticalMargin margin={350} />
          <ServicesIconNum src={Icon02} /> 
           <ServicesH2>Make Quick Payment</ServicesH2>
          <ServicesP>Select preferred medical centers </ServicesP>        
          <ServicesIcon src={Icon2} />
        </ServicesCard>
        <ServicesCard>
          <ServicesIconNum src={Icon03} /> 
          <ServicesH2>Get a Doctor!</ServicesH2>
          <ServicesP>Now you can get paired with
             a medical doctor </ServicesP>
          <ServicesIcon src={Icon3} />          
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>

  )
}

export default Services;

import styled from 'styled-components';


export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
  margin-bottom:40px;
  /* align-items: center; */
  background: #fff;

  @media screen and (max-width: 1000px) {
    height: 1000px;
  }

  @media screen and (max-width: 768px) {
    height: 1300px;
  }
`;

export const ServicesHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  padding-left: 100px;

  @media screen and (max-width: 680px) {
    padding-left: 40px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
  
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  max-height: 700px;
  padding: 10px;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 1000px) {
    justify-content: center;
    align-items: center;

  }


  }
`

export const ServicesIcon = styled.img`
  height: 100%;
  width: 100%;
  margin-bottom: 10px;


  @media screen and (max-width: 1000px) {
    
    width: 70%;
    height: 70%;
  }

  @media screen and (max-width: 768px) {
    width: 60%;
    height: 60%;
  }
`;
export const ServicesIconNum = styled.img`
  height: 35%;
  width: 35%;
  margin-bottom: 10px;

  @media screen and (max-width: 1000px) {
    width: 20%;
    height: 20%;
  }

`;

export const ServicesH1 = styled.h1`
  font-size: 2rem;
  color: #1167B1;
  margin-bottom: 20px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 0.8rem;
  text-align: start;
  margin-bottom: 5px;
`;

export const ServicesP1 = styled.p`
  font-size: 1.3rem;
  
  max-width: 600px;
`;

export const VerticalMargin = styled.span`
  display: flex;
  height: ${({ margin }) => 
  typeof margin === 'string' ? margin : `${margin}px`
  };
   @media screen and (max-width: 1000px) {
    height: 0px;
  }
`;
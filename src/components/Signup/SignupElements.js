import styled from "styled-components";
import { Link as LinkR} from "react-router-dom";


export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

`;
export const ImgBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(LinkR)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  z-index: 2;
  color: #1167B1;
  font-weight: 700;
  font-size: 32px;
  
  @media screen and (max-width: 480px) {
    margin-top: 8px;
    margin-left: 16px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #1167B1;
  max-width: 600px;
  height: auto;
  width: 100%;
  z-index: 2;
  display: grid;
  margin: 0 auto;
  padding: 40px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 680px) {
    padding: 32px 32px;
    width: 80%;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 30px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 5px 5px;
  margin-bottom: 18px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: #010101;
  padding: 8px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px; 
`;
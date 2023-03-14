import React,{useState} from 'react'
import './Register.css';
import styled from 'styled-components';
import Input from "./Components/input"
import Button from './Components/Button';
import { useDispatch } from 'react-redux'
import {FaFacebookF,FaInstagram, FaTwitter} from "react-icons/fa"
import Icon from "./Components/icon"
import { register } from '../../Actions/UserAction';

function RegisterScreen() {
  const FaceBookBackground = "linear-gradient(to right, #0546A0 0%, #663FB6 100%)";
  const InstagramBackground = "linear-gradient(to right, #A12AC4 0%, #ED586C 40% , #F0A853 100%)";
  const TwitterBackground = "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";

  const dispatch = useDispatch()

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [re_password, setre_password] = useState("");


  
  const handleRegister = (e) => {
    e.preventDefault()

    if (password !== re_password){
        console.log("password does not match")
    }else{
        console.log(username,email,password,re_password)
        dispatch(register(username,email, password,re_password))
    }
}




  return (
     <MainContainer>
      <form onSubmit={handleRegister}>
      <WelcomeText>Welcome</WelcomeText>
      <InputContainer>
      <Input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input type="text" placeholder="Username" value={username}   onChange={(e) => setUsername(e.target.value)} />
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Input type="password" placeholder="Confirm Password" value={re_password} onChange={(e) => setre_password(e.target.value)} />
      </InputContainer>
      <ButtonContainer>
      <Button content="Register" type="submit" />
      </ButtonContainer>
      
      <LoginWith> or Register With</LoginWith>
      <HorizontalRul />
      <IconsContainer>
        <Icon color={FaceBookBackground} >
          <FaFacebookF/>
        </Icon>
        <Icon color={InstagramBackground} >
          <FaInstagram/>
        </Icon>
        <Icon color={TwitterBackground} >
          <FaTwitter/>
        </Icon>
      </IconsContainer>
      <FogotPasword> Have an account</FogotPasword>
      </form>
     </MainContainer>
  )
}

const MainContainer = styled.div`
  display : flex;
  align-items :center;
  flex-direction :column;
  height: 80vh;
  width :30vw;
  background: rgba(255, 255,255,0.15);
  box-shadow : 0 8px 32px 0 rgba(31, 38,135, 0.37);
  backdrop-filter : blur(8.5px);
  bordr-radius: 10px ;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing :0.4rem;

  @media only screen and (max-width:320px) {
    width : 80vw;
    height: 90vh;

    hr{
      margin-bottom : 0.3rem;
    }
    
    h4{
      font-size : small;
    }
  }

  @media only screen and (min-width:360px) {
    width : 80vw;
    height: 90vh;

    
    h4{
      font-size : small;
    }
  }

  @media only screen and (min-width:411px) {
    width : 80vw;
    height: 90vh;

  }

  @media only screen and (min-width: 768px) {
    width : 80vw;
    height: 80vh;

  }

  @media only screen and (min-width: 1024px) {
    width : 70vw;
    height: 50vh;

  }

  @media only screen and (min-width: 768px) {
    width : 40vw;
    height: 90vh;

  }

`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;

`;

const InputContainer=styled.div`
  display:flex;
  flex-direction: column;
  justify-content : space-around;
  align-items :center;
  height: 40%;
  width:100;

`;

const ButtonContainer= styled.div`
  margin : 1rem 0 2rem 0;
  width : 100%
  display : flex;
  align-items : center;
  justify-content: center;
`;

const LoginWith = styled.h5`
cursor : pointer;


`;

const HorizontalRul = styled.hr`
  width : 90%;
  height : 0.3rem;
  border-radius : 0.8rem;
  border: none;
  margin: 1.5em 0 1rem 0;
  background : linear-gradient(to right, #14163c 0% , #03217b 79%);
  backdrop-filter: blur(25px);

`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin : 2rem 0 3rem 0;
  width: 80%;

`;

const FogotPasword = styled.h5`
  cursor : pointer;


`;

export default RegisterScreen
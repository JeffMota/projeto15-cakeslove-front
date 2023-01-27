// import logo from "../assets/logo.png"
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"



export default function SignUpPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("")
  const navigate = useNavigate()




  function addUser(e) {
    e.preventDefault()
    const body = {
      name, email, password, confirmPassword
    }

    const promise = axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, body)
    console.log(promise)

    promise.then(res => {
      console.log(res)
      navigate("/")
    })
    promise.catch(err => {
      alert(err.response.data.message)
      setName("")
      setPassword("")
      setconfirmPassword("")
      setEmail("")
    })

  }


  return (
    <Container>
    
      <StyledForm onSubmit={addUser}>
        <StyledInput
          data-test="name"
          name="name"
          placeholder="Nome"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <StyledInput
          data-test="email"
          name="email"
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <StyledInput
          data-test="password"
          name="password"
          placeholder="Senha"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <StyledInput
          data-test="conf-password"
          name="confirmpassword"
          placeholder="Confirmar senha"
          type="password"
          value={confirmPassword}
          onChange={e => setconfirmPassword(e.target.value)}
          required
        />
        <StyledButton data-test="sign-up-submit" type="submit">
          Cadastrar
        </StyledButton>
      </StyledForm>

      <StyledLink to="/">
        Já tem uma conta? Entre agora!
      </StyledLink>
    </Container>
  )
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color:  #FA9D9D;
  height: 100vh;
  img {
    margin-top: 65px;
  }
  @media screen and (min-width: 800px) {
    img {
      margin-top: 100px;
    }
  }
`
const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0 25px;
  padding-left: 25px;
  padding-right: 25px;
`
const StyledInput = styled.input`
  width: 100%;
  height: 58px;
  margin-bottom: 31px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  line-height: 25px;
  pointer-events: "all";
  background-color:  #F7F3D2;
  color: #666666;
  &::placeholder{
    color:  rgba(0, 0, 0, 0.4);
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
  }
`

const StyledButton = styled.button`
  border-radius: 24px;
  /* transform: matrix(1, 0, 0, -1, 0, 0); */
  width: 111px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  pointer-events:  "all";
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  background: #D9D9D9;
  color: #18191A;
`
const StyledLink = styled(Link)`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  color:  rgba(0, 0, 0, 0.7);
`


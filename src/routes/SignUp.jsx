import logo from "../assets/img/Logo.png"
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useContext, useState } from "react"
import { PagesContext } from "../contexts/PagesContext"



export default function SignUpPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const{ name, setName} = useContext(PagesContext)
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
      alert(res.data)
      console.log('cadastrar deu certo')
      navigate("/")
    })
    promise.catch(err => {
      alert(err.response.data)
      setName("")
      setPassword("")
      setconfirmPassword("")
      setEmail("")
    })

  }


  return (
    <Container>
      <img src={logo} alt="Logotipo" />
      <StyledForm onSubmit={addUser}>
        <StyledInput
          name="name"
          placeholder="Nome"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <StyledInput
          name="email"
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <StyledInput
          name="password"
          placeholder="Senha"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <StyledInput
          name="confirmpassword"
          placeholder="Confirme a senha"
          type="password"
          value={confirmPassword}
          onChange={e => setconfirmPassword(e.target.value)}
          required
        />
        <StyledButton type="submit">
          Cadastrar
        </StyledButton>
      </StyledForm>

      <StyledLink to="/">
        Já possui uma conta? <b>Entre</b>
      </StyledLink>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #F8C1C1;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
  height: 100vh;
  img {
    margin-bottom: 47px;
    width: 240px;
    height: 239px;
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
  padding-left: 25px;
  padding-right: 25px;
`
const StyledInput = styled.input`
  width: 100%;
  height: 58px;
  margin-bottom: 37px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  line-height: 25px;
  pointer-events: "all";
  background-color:  #F7F3D2;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
  color: #666666;
  &::placeholder{
    color:  rgba(0, 0, 0, 0.4);
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
  }
`

const StyledButton = styled.button`
  background: #89E0E0;
  border-radius: 20px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
  width: 111px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  pointer-events:  "all";
  font-weight: 800;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #FFFFFF;
`
const StyledLink = styled(Link)`
  margin-top: 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  color: #605343;
  text-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
  font-family: 'Space Grotesk';
`

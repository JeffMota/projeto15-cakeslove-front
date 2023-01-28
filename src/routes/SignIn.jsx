import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import logo from "../assets/img/Logo.png"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { setInfosUser } = useContext(AuthContext)
  const navigate = useNavigate()

  //Persistência de login
  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/home')
    }
  }, [])


  function handleLogin(e) {
    e.preventDefault()

    const body = { email, password }

    const promise = axios.post(`${process.env.REACT_APP_API_URL}/sign-in`, body)

    promise.then(res => {
      localStorage.setItem('token', res.data)
      setInfosUser(res.data)
      navigate("/home")
    })
    promise.catch(err => {
      alert(err.response.data)
      setPassword("")
      setEmail("")
    })

  }


  return (
    <Container>
      <img src={logo} alt="Logo" />
      <StyledForm onSubmit={handleLogin}>
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
        <StyledButton type="submit">
          Entrar
        </StyledButton>
      </StyledForm>

      <StyledLink to="/cadastro">
        Não tem uma conta? <b>Cadastre-se</b>
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
    width: 259px;
    height: 259px;
    margin-top: 10px;
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
  margin-top: 49px;
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
  margin-top: 40px;
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
  margin-top: 37px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  color: #605343;
  text-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
  font-family: 'Space Grotesk';
`

import styled from "styled-components"
import Logo from '../assets/img/Logo.png'
import TitlePage from "../components/TitlePage"
import { IconContext } from "react-icons"
import { TbLogout } from "react-icons/tb"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import CardProduCarrinho from "../components/CardProduCarrinho"

export default function AdmPage() {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    const [allProducts, setAllProducts] = useState([])

    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [quantity, setQuantity] = useState()
    const [price, setPrice] = useState()
    const [imgURL, setImgURL] = useState()

    function getLista() {
        const token = localStorage.getItem('token')

        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        const promise = axios.get(`${process.env.REACT_APP_API_URL}/produtos`, config)
        promise.then(res => {
            setAllProducts(res.data)
        })
        promise.catch(err => {
            alert(err.response.data)
            navigate('/')
        })
    }

    useEffect(() => {
        if (localStorage.getItem('admin') !== 'true') {
            localStorage.removeItem('token')
            localStorage.removeItem('admin')
            navigate('/')
            return
        }
        getLista()
    }, [])

    //Deletar Item
    function delItem(product) {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Deseja deletar esse produto?')) {
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }

            const promise = axios.delete(`${process.env.REACT_APP_API_URL}/produtos/${product._id}`, config)
            promise.then(res => {
                console.log('Produto deletado')
                getLista()
            })
            promise.catch(err => alert('Infelizmente ocorreu um erro!'))

        }
    }

    function newItem(e) {
        e.preventDefault()

        const body = {
            name,
            description,
            price,
            quantity,
            imgURL
        }

        const token = localStorage.getItem('token')

        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        const promise = axios.post(`${process.env.REACT_APP_API_URL}/produtos`, body, config)
        promise.then(res => {
            alert('Produto Cadastrado!')
            getLista()
        })
        promise.catch(err => {
            alert('Infelizmente ocorreu um erro!')
            setImgURL('')
        })

    }

    function logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('admin')
        navigate('/')
    }

    return (
        <AdmPageContainer>
            <NavContainer>
                <LogoContainer>
                    <img src={Logo} alt='Logo' />
                    <h1>Cake's Love</h1>
                </LogoContainer>
                <UserIcon onClick={logout}>
                    <IconContext.Provider value={{ size: '3.5em', color: '#FFFFFF' }}>
                        <TbLogout />
                    </IconContext.Provider>
                </UserIcon>
            </NavContainer>

            <ContainerCarrinhoBox onSubmit={e => newItem(e)}>
                <input onChange={(e) => setName(e.target.value)} placeholder="Nome do Produto" type='text' />
                <div>
                    <input
                        onChange={
                            e => {
                                let aux = e.target.value
                                aux = String(aux)
                                setPrice(aux)
                            }
                        }
                        placeholder="Pre??o" type='number' step="0.01" />
                    <input onChange={(e) => setQuantity(e.target.value)} placeholder="Quantidade" type='number' />
                </div>
                <input onChange={e => setDescription(e.target.value)} placeholder="Descri????o" type='text' />
                <input value={imgURL} onChange={e => setImgURL(e.target.value)} placeholder="URL da imagem" type='text' />
                <button type="submit">Adicionar</button>
            </ContainerCarrinhoBox>

            <ListContainer>
                {(allProducts) && allProducts.map(p =>
                    <CardProduCarrinho
                        key={p._id}
                        product={p}
                        func={() => delItem(p)}
                    />)}
            </ListContainer>
            <TitlePage title="Cadastrar Produto" />
        </AdmPageContainer>
    )
}

const AdmPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F7F3D2;
    width: 100vw;
    min-height: 100vh;

    padding: 150px 0;
    align-items: center;

    overflow-y: scroll;

    >h2{
        margin: 20px 0;
        color: #FA9D9D;

        width: 90%;
    }

    >button{
        margin-top: 20px;

        height: 50px;
        width: 200px;

        font-size: 16px;
        color: #513724;

        border: none;
        border-radius: 20px;

        background-color: #F8C1C1;
    }
`
//NavBar
const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #FFFF;
    font-size: 12px;
    padding: 0 20px;

    position: fixed;
    left: 0;
    top: 0;

    z-index: 1;

    border-radius: 0 0 10px 10px;

    font-family: 'IM Fell English SC', serif;

    background-color: #F8C1C1;
    height: 85px;
    width: 100vw;
`
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 240px;
    height: 100%;
    >img{
            height: 80%;
        }
`
const UserIcon = styled.div`
    border-radius: 50%;
    height: 70%;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ListContainer = styled.div`
    display: flex;
    flex-direction: column;

    -webkit-scrollbar:hidden;

    align-items: center;
    width: 100%;

    margin-top: 50px;
`
const ContainerCarrinhoBox = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    height: 250px;

    background-color: #89E0E0;

    border-radius: 10px;
    justify-content: space-around;

    overflow-y: scroll;

    >input{
        padding: 0 5px;
        background-color: #F8C1C1;
        border: none;
        border-radius: 10px;

        width: 250px;
        height: 30px;
    }
    >div{
        width: 250px;
        display: flex;
        justify-content: space-between;
        >input{
            padding: 0 5px;
            background-color: #F8C1C1;
            width: 45%;
            height: 30px;
            border: none;
            border-radius: 10px;
        }
    }

    >:nth-child(3){
        height: 70px;
    }

    >button{
        background-color: #F8C1C1;
        border: none;
        border-radius: 20px;
        font-weight: 700;
        color: #FFFF;
        font-size: 16px;

        width: 100px;
        height: 30px;
    }
`
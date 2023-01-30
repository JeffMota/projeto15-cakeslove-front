import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/Button'
import CardMaisVendido from '../components/CardMaisVendido'
import Cart from '../components/Cart'
import NavBar from '../components/NavBar'
import PopUp from '../components/PopUp'
import { PagesContext } from '../contexts/PagesContext.js'
import PopAdicionar from '../components/PopAdicionar'

export default function Home() {
    const { carrinho, selecting, setSelecting } = useContext(PagesContext)
    const [bestSellers, setBestSellers] = useState([])
    const [product, setProduct] = useState('')

    const token = localStorage.getItem('token')

    const navigate = useNavigate()

    function selectItem(item) {
        setSelecting(true)
        setProduct(item)
    }

    useEffect(() => {
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        const promise = axios.get(`${process.env.REACT_APP_API_URL}/produtos/mais-vendidos`, config)
        promise.then(res => {
            let aux = res.data
            setBestSellers(aux)
        })
        promise.catch(err => {
            navigate('/')
        })
    }, [])

    return (
        <HomeContainer selecting={selecting}>
            <NavBar />
            {(carrinho.length > 0) && <Cart num={carrinho.length} />}
            <BestsContainer>
                <h2>Mais vendidos</h2>
                <BestSellers >
                    {(bestSellers.length > 0) && bestSellers.map(bs =>
                        <CardMaisVendido
                            key={bs._id}
                            name={bs.name}
                            imgURL={bs.imgURL}
                            func={() => selectItem(bs)}
                        />
                    )}
                </BestSellers>
            </BestsContainer>
            <ButtonsContainer>
                <Button func={() => navigate('/catalogo')} text='Catálogo' />
                <Button text='Encomenda' />
            </ButtonsContainer>

            {(selecting) &&
                <PopUp setSelecting={setSelecting} >
                    <PopAdicionar product={product} setSelecting={setSelecting} />
                </PopUp>}
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F7F3D2;
    width: 100vw;
    height: 100vh;

    padding-top: 50px;

    justify-content: center;
    align-items: center;

`
const BestsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 210px;
    margin-bottom: 70px;
    >h2{
        padding-left: 20px;
        font-size: 22px;
        color: #FA9D9D;
    }
`
const BestSellers = styled.div`
    display: flex;
    overflow-x: scroll;
    -webkit-scrollbar: none;
    width: 100vw;
`
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 130px;
`
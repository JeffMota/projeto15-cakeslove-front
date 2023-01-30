import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import CardProduct from '../components/CardProduct'
import Cart from '../components/Cart'
import NavBar from '../components/NavBar'
import PopAdicionar from '../components/PopAdicionar'
import PopUp from '../components/PopUp'
import TitlePage from '../components/TitlePage'
import { PagesContext } from '../contexts/PagesContext.js'

export default function Catalogo() {
    const { carrinho } = useContext(PagesContext)
    const [selecting, setSelecting] = useState(false)
    const [allProducts, setAllProducts] = useState([])
    const [product, setProduct] = useState('')

    const token = localStorage.getItem('token')

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

        const promise = axios.get(`${process.env.REACT_APP_API_URL}/produtos`, config)
        promise.then(res => {
            let aux = res.data
            setAllProducts(aux)
        })
    }, [])

    return (
        <CatalogoContainer selecting={selecting}>
            <NavBar />
            <TitlePage title={'Catálogo'} />
            {(carrinho.length > 0) && <Cart num={carrinho.length} />}
            <ListContainer>
                {(allProducts) && allProducts.map(p =>
                    <CardProduct
                        key={p._id}
                        product={p}
                        func={() => selectItem(p)}
                    />)}
            </ListContainer>
            {(selecting) &&
                <PopUp setSelecting={setSelecting} >
                    <PopAdicionar product={product} setSelecting={setSelecting} />
                </PopUp>}

        </CatalogoContainer>
    )
}

const CatalogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F7F3D2;
    width: 100vw;
    height: 100vh;

    padding-top: 30px;

    justify-content: center;
    align-items: center;

`
const ListContainer = styled.div`
    display: flex;
    flex-direction: column;

    -webkit-scrollbar:hidden;

    align-items: center;
    width: 85%;
    height: 500px;

    margin-top: 100px;

    overflow-y: scroll;
`
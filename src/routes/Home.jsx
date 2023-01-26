import styled from 'styled-components'
import Button from '../components/Button'
import CardMaisVendido from '../components/CardMaisVendido'
import NavBar from '../components/NavBar'

export default function Home() {
    return (
        <HomeContainer>
            <NavBar />
            <BestsContainer>
                <h2>Mais vendidos</h2>
                <BestSellers >
                    <CardMaisVendido name='Bolo de Milho' imgURL='https://img.cybercook.com.br/receitas/641/bolo-de-milho-4.jpeg' />
                    <CardMaisVendido name='Pudim' imgURL='https://img.itdg.com.br/tdg/images/recipes/000/031/593/318825/318825_original.jpg?mode=crop&width=710&height=400' />
                    <CardMaisVendido name='Bolo de Milho' imgURL='https://img.cybercook.com.br/receitas/641/bolo-de-milho-4.jpeg' />
                    <CardMaisVendido name='Bolo de Milho' imgURL='https://img.cybercook.com.br/receitas/641/bolo-de-milho-4.jpeg' />
                    <CardMaisVendido name='Bolo de Milho' imgURL='https://img.cybercook.com.br/receitas/641/bolo-de-milho-4.jpeg' />
                </BestSellers>
            </BestsContainer>
            <ButtonsContainer>
                <Button text='Catálogo' />
                <Button text='Encomenda' />
            </ButtonsContainer>
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F7F3D2;
    width: 100vw;
    height: 100vh;

    margin-top: 50px;

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
    width: 100vw;
`
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 130px;
`
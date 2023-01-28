import { TbShoppingCart } from 'react-icons/tb'
import { IconContext } from "react-icons";
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

export default function Cart({ num }) {

    const navigate = useNavigate()

    return (
        <CartContainer onClick={() => navigate('/confirme-pedido')}>
            <NumBox>{num}</NumBox>
            <IconContext.Provider value={{ color: "#89E0E0", className: "global-class-name", size: "3em" }}>
                <div>
                    <TbShoppingCart />
                </div>
            </IconContext.Provider>
        </CartContainer>
    )
}



const CartContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #FFFF;
    border: 5px solid #FA9D9D;
    border-radius: 50%;
    width: 88px;
    height: 88px;

    position: fixed;
    bottom: 20px;
    left: 20px;
`
const NumBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    background-color: #89E0E0;
    width: 30px;
    height: 30px;

    position: absolute;
    right: -5px;
    top:-5px;

    color: #FFFFFF;
`
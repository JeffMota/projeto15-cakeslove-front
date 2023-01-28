import styled from "styled-components"
import PopAdicionar from "./PopAdicionar"

export default function PopUp({ product, setSelecting }) {
    return (
        <>
            <PopAdicionar product={product} setSelecting={setSelecting} />
            <PopUpContainer onClick={() => setSelecting(false)} />
        </>
    )
}

const PopUpContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;

    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;

    background-color: black;
    opacity: 0.4;

`
import styled from "styled-components"

export default function PopUp(props) {
    const { setSelecting } = props
    return (
        <>
            {props.children}
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

    z-index: 1;

    background-color: rgba(0,0,0,0.4);

`
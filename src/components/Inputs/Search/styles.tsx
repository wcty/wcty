import styled from 'styled-components/macro'

export const Container = styled.div`
    height: 29px;
    width: 100%;
    position: relative;
    transition: transform 0.2s;
    transform: translate(0px,0px);
    >div:nth-child(2){
    position: absolute;
    top:0px;
    left:0px;
    height: 100%;
    width: 2rem;
    display: flex;
    align-items: center;
    pointer-events: none;
    >svg{
        margin-left: 0.5rem;
    }
    }
    >div:last-child{
    position: absolute;
    top:0px;
    right:0px;
    height: 100%;
    width: 29px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    display: flex;
    >button{
        width: 16px;
        height: 16px;
        background: none;
        outline: none;
        border: none;
        border-radius: 8px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        >svg{
        margin: 0;
        position: absolute;
        left: 0px;
        circle{
            transition: fill 0.2s;
        }
        :hover{
            circle {
            fill: #e0e8f0;
            } 
        }
        :active{
            circle {
            fill: #b8c6d4;
            } 
        }
        }
    }
    }
    
   
`,

SearchInput = styled.input`
    height: 100%;
    width: 100%;
    /* padding-left: 5px;
    padding-right: 5px; */
    background-color: white;
    border-radius: 3px;
    border: none;
    box-shadow: 3px 3px 3px rgba(0,0,0,0.1);
    transition: box-shadow 0.5s, border-radius 0.2s;
    outline: none;
    :hover{
        background-color: #F7F9FB;
    }
    &:focus {
        :hover{
        background-color: #ffffff;
        }
        box-shadow: 3px 3px 3px rgba(23, 74, 255,0.3);
    }
`
    
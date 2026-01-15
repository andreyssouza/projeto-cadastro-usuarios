import styled from 'styled-components';
import Background from '../../assets/background.jpg'


export const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    background: url("${Background}");
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding-bottom: 20px;
   
    
    
    
    
    
`

export const Image = styled.img`
    width: 300px;
    margin-top: 20px;
    ;
`



export const ArrowImage = styled.img`
    width: 25px;
    height: auto;
    border: 2px solid white;
    transform: translateX(10px);
    
   
`

export const User = styled.li`
    display: flex;  
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;

    width: 342px;
    height: 58px;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;    
    border: none;

    p {
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;}

    button {
        background: none;
        border: none;
        cursor: pointer;}

    img {
        width: 20px;}

    
`

import styled from 'styled-components';
import Background from '../../assets/background.jpg'


export const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    background: url("${Background}");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-top: 0px;
    padding-bottom: 40px;
    
    
    
    
    
`

export const Image = styled.img`
        
    width: 250px;
    margin-top: 10px;
    ;
`

  

export const InputLabel = styled.label`
    letter-spacing: -0.408px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;

    color: #eeeeee;
    padding-left: 25px;
    margin-bottom: 10px;
`

export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;

    width: 342px;
    height: 58px;
    padding-left: 25px;

    border: none;
    outline: 20px;

    color: #ffffff;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 34px;
`



export const ArrowImage = styled.img`
    width: 25px;
    height: auto;
    border: 2px solid white;
    transform: translateX(10px);
    
   
`


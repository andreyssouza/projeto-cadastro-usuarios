import styled, {css} from 'styled-components';

export const Button = styled.button`
    width: 342px;
    height: 74px;
    margin-top: ${props => props.$isBack? `100px`: `30px`};

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: ${props => props.$isBack ? 'row-reverse' : 'row'};

   

    background: ${props => props.$isBack? `transparent`: `rgba(0 , 0, 0, 0.8 )`};
    border-radius: 14px;
    border: ${props => props.$isBack? `1px solid #ffffff`: `none`};

    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 28px;

    color: #ffffff;

    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }

    img {
        ${props => props.$isBack && css `
            transform: rotate(180deg);
            margin-right: 10px;
        `};
            
     };

        
`

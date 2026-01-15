import styled from 'styled-components';

export const ContainerItens = styled.div`
    background: linear-gradient(
    157.44deg,
     rgba(255, 255, 255, 0.6) 0.84%,
     rgba(255, 255, 255, 0.6) 0.85%,
     rgba(255, 255, 255, 0.19) 100%);

    border-radius: 61px 61px 61px 61px;

    padding: 50px 36px;
    margin-bottom: 30px;

    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 200px);

    ${props => props.$isBlur && `
        backdrop-filter: blur(45px);
        min-height: calc(100vh - 200px);`
    };
`
import styled from 'styled-components';

export const LocationWrapper = styled.div`
    position:relative;
`;

export const LocationTag = styled.div`
    position: absolute;
    bottom: 0px;
    width: 100%;
    
    div {
        background: #2c2c2c;
        color: #ffffff;
        text-transform: uppercase;
        width: 220px;
        margin: 0 auto;
        font-size: 29px;
        padding: 15px 20px;
        text-align: center;
    }
    
    @media (max-width: 880px) {
        div {
            width: 110px;
            font-size: 15px;
        }
    }
`;
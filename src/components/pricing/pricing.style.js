import styled from 'styled-components';

export const PricingSection = styled.div`
    width: 900px;
    margin:0 auto;
    padding: 70px 0px;
    
    h2 {
        color: #ffffff;
        text-transform: uppercase;
        text-align: center;
        font-size: 50px;
        margin: 0;
    }
    
    @media (max-width: 880px) {
        width: 100%;
        padding: 35px 0px;
        
        h2 {
            font-szie: 25px;
        }
    }
`;

export const PricingWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    
`;

export const PricingItem = styled.div`
    flex-grow: 1;
    width: 33%;
    padding: 20px;
    box-sizing: border-box;
`;


export const PricingInnerWrapper = styled.div`
    border:2px solid #4D2773;
    padding: 50px 20px;
    
    @media (max-width: 880px) {
        padding: 25px 20px;
    }
`;

export const PricingTitle = styled.div`
    color: #ffffff;
    text-align: center;
    border-bottom: 1px solid #ffa800;
    padding-bottom: 20px;
    
    span:nth-child(1) {
        font-size: 50px;
        display: block;
    }
    
    span:nth-child(2) {
        text-transform: uppercase;
        font-size: 28px;
        font-weight: 300;
    }
    
    @media (max-width: 880px) {
        padding-bottom: 10px;
        
        span:nth-child(1) {
            font-size: 30px;
        }
    
        span:nth-child(2) {
            font-size: 17px;
        }
    }
`;

export const PricingDesc = styled.div`
    color: #b8b8b8;
    font-weight: 300;
    font-size: 14px;
    text-align: center;
    padding: 20px 0px;
    min-height: 70px;
    
    @media (max-width: 880px) {
        min-height: 50px;
    }
`;

export const PricingButton = styled.div`
     text-align: center;
`;
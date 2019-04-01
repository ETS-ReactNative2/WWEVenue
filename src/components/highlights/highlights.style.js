import styled from 'styled-components';

export const HighlightH2 = styled.h2`
    text-align: center;
    text-transform: uppercase;
    color:#2c2c2c;
    font-size: 52px;
    
    @media (max-width: 880px) {
       font-size: 26px;
    }
`;

export const CenterWrapper = styled.div`
    width: 900px;
    margin:0 auto;
    
    @media (max-width: 880px) {
        width: 100%
    }
`;

export const HighlightDesc = styled.div`
    line-height: 30px;
    font-size: 18px;
    font-weight: 300;
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
    padding: 30px 0px;
    
    @media (max-width: 880px) {
        padding: 20px 0px;
        font-size: 16px;
        text-align: center;
    }
`;

export const DiscountWrapper = styled.div`
    display: flex;
    padding: 70px 0px;
    
    @media (max-width: 880px) {
        flex-direction: column;
        padding: 35px 0px;
    }
`;

export const DiscountPercent = styled.div`
    padding-right: 100px;
    
    span:nth-child(1) {
        color: #ff4800;
        font-size: 125px;
        font-weight: 400;
        display: block;
        line-height: 120px;
    }
    
    span:nth-child(2) {
        color: #2c2c2c;
        font-size: 50px;
        font-weight: 400;
        display: block;
    }
    
    @media (max-width: 880px) {
       padding-right: 0px;
       margin-bottom: 10px;
       display: flex;
       flex-direction: row;
       justify-content: center;
       
       span:nth-child(1) {
            padding: 0px 10px
            font-size: 65px;
            font-weight: 400;
            display: block;
            line-height: 60px;
        }
        
        span:nth-child(2) {
            color: #2c2c2c;
            font-size: 50px;
            font-weight: 400;
            display: block;
        }
    }
`;

export const DiscountDesc = styled.div`
    h3 {
        font-size: 34px;
        font-weight: 100;
        margin: 0px;
        color: #2c2c2c;
    }
    
    p {
      line-height: 30px;
      font-size: 18px;
      font-weight: 300;  
    }
    
    @media (max-width: 880px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        h3 {
            text-align: center;
            font-size: 25px;
            font-weight: bold,
        }
        
        p {
            text-align: center;
            font-szie: 16px
        }
    }
`;


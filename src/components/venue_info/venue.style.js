import styled from 'styled-components';

export const BckDark = styled.div`
    background: #141A26;
    position: relative;
`;

export const VenueWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 130px 0;
    
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        padding: 50px 0;
    }
`;

export const VenueItem = styled.div`
    width:50%;
    color:#ffffff;
    text-align: center;
    padding: 0 50px;
    
    @media (max-width: 880px) {
        padding: 50px 50px;
        
    }
`;

export const VenueOuter = styled.div`
    width: 300px;
    border: 2px solid #828282;
    margin: auto;
    padding: 5px;
    
    @media (max-width: 880px) {
        width: 200px;
        
    }
`;

export const VenueInner = styled.div`
    border: 2px solid #828282;
    position: relative;
    padding: 0px 20px;
    transition: all 500ms ease;
    
    :hover {
        background: #3e3e3e;
    }
`;

export const IconSquare = styled.div`
    width: 100px;
    height: 100px;
    position: absolute;
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    top: -54px;
    left: 100px;
    background: #361D59;
    
    @media (max-width: 880px) {
        width: 50px;
        height: 50px;
        left: 75px; 
        top: -27px
    }
`;

export const VenueIcon = styled.div`
    width: 50px;
    height: 50px;
    background-size: contain !important;
    background-repeat: no-repeat !important;
    position: absolute;
    top: -30px;
    left: 124px;
    
    @media (max-width: 880px) {
        width: 25px;
        height: 25px;
        top: -15px;
        left: 88px;
    }
`;

export const VenueTitle = styled.div`
    font-size: 28px;
    margin: 90px 0px 20px 0px;
    border-bottom: 1px solid #5d5d5d;
    padding-bottom: 10px;
    
    @media (max-width: 880px) {
        font-size: 16px;
        margin: 50px 0px 20px 0px;
        padding-bottom: 5px;
    }
`;

export const VenueDesc = styled.div`
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 90px;
    
    @media (max-width: 880px) {
        font-size: 18px;
        margin-bottom: 45px
    }
`;
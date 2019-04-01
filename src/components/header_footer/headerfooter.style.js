import styled from 'styled-components';

export const VenueFooter = styled.div`
    background: #361D59;
    padding:50px 0px;
    text-align: center;
    color:#ffffff;
    font-size: 40px
    
    @media (max-width: 880px) {
        padding: 20px 0px;
        font-size: 25px
    }
`;

export const VenueDetail = styled.span`
    font-size: 20px;
    font-family: 'Righteous', cursive;
    
    @media (max-width: 880px) {
        font-size: 16px
    }
`;

export const FooterCopyright = styled.div`
    font-size: 18px;
    
    @media (max-width: 880px) {
        font-size: 12px;
    }
`;

export const HeaderLogo = styled.div`
    flex-grow: 1;
    
    @media (max-width: 880px) {
         display: flex;
         align-items: center;
         flex-direction: coloumn;
    }
`;

export const HeaderLogoVenue = styled.div`
    font-size: 30px;
    font-family: 'Righteous', cursive;
    
    @media (max-width: 880px) {
        font-size: 16px
    }
`;

export const HeaderLogoTitle = styled.div`
    text-transform: uppercase;
    font-family: 'KoolBean';
    
    @media (max-width: 880px) {
        font-size: 16px;
        margin: 0 auto;
    }
`;
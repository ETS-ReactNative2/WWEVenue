import styled from 'styled-components';

export const Hero = styled.div`
    @media (max-width: 880px) {
        {
            max-height: 600px;
        
        }
    }
`;

export const Artist = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    height: 160px;
    -webkit-transform: translate(-50%, -50%);  
    transform: translate(-50%, -50%);   
    border: 6px solid #d7dadb;
    @media (max-width: 880px) {
       {
            width: 200px;
            height: 100px;
        
        }
    }
`;

export const Wrapper = styled.div`
    border: 4px solid #013589;
    height: 121px;
    margin: 6px;
    text-align: center;
    padding: 21px 70px 0px 70px;
    text-transform: uppercase;
    background: url(https://i.pinimg.com/originals/21/97/19/219719fab5f81c9ec03f43a31e05ab05.png);
    background-repeat: no-repeat;
    background-position: center;
    
    @media (max-width: 880px) {
       {
            height: 60px;
            background-size: 180px;
        }
    }
`;



export const CarrouselWrapper = styled.div`
    max-height: 100vh;
    overflow: hidden;
    width: 100%;
`;

export const Styles = styled.div`
    @media (max-width: 790px) {
        div {
           background-position: center !important;
        }
    }
    @media (max-width: 376px) {
       div {
           background: url(${require('../../resources/images/Styles.png')}) !important;
           background-repeat: no-repeat !important;
           background-position: center !important;
       }
    }
`;

export const Lynch = styled.div`
    @media (max-width: 790px) {
        div {
           background-position: center !important;
        }
    }

    @media (max-width: 376px) {
       div {
           background: url(${require('../../resources/images/Lynch.png')}) !important;
           background-repeat: no-repeat !important;
           background-position: center !important;
       }
    }
`;

export const NewDay = styled.div`
    @media (max-width: 790px) {
        div {
           background-position: center !important;
        }
    }

    @media (max-width: 376px) {
       div {
           background: url(${require('../../resources/images/NewDay.png')}) !important;
           background-repeat: no-repeat !important;
           background-position: center !important;
       }
    }
`;

export const Shinsuke = styled.div`
    @media (max-width: 790px) {
        div {
           background-position: center !important;
        }
    }

    @media (max-width: 376px) {
       div {
           background: url(${require('../../resources/images/Shinsuke.png')}) !important;
           background-repeat: no-repeat !important;
           background-position: center !important;
       }
    }
`;

export const CarrouselImg = styled.div`
    background-size: cover !important;
`;

export const CountdownWrapper = styled.div`
    position:absolute;
    bottom: 0px;
    color:#ffffff;
`;

export const CountdownTop = styled.div`
    background: #4D2773;
    font-size: 19px;
    padding: 10px;
    display: inline-block;
    text-transform: uppercase;
    
    @media (max-width: 880px) {
       {
            font-size: 10px;
            padding: 5px;
        }
    }
`;

export const CountdownBottom = styled.div`
    display: flex;
    background: #241D48;
    padding: 10px 20px;
`;

export const CountdownItem = styled.div`
    border:none;
`;

export const CountdownTime = styled.div`
    font-size: 70px;
    border-right: 1px solid #DADCE3;
    margin-right: 14px;
    padding-right: 49px;
    
    @media (max-width: 880px) {
       {
            font-size: 30px;
            margin-right: 10px
            padding-right: 24px
        }
    }
`;

export const CountdownTag = styled.div`
    text-transform: uppercase;
    font-size: 20px;
    padding-left: 7px;
    
    @media (max-width: 880px) {
       {
            font-size: 10px;
            padding-left: 2px
        }
    }
`;
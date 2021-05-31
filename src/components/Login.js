import React from 'react';
import styled from 'styled-components';

const Login = () => {
    return (
        <Container>
              <CTA>
                  <CTALogoOne>
                      <img src="/images/cta-logo-one.svg" alt="logo1"/>
                  </CTALogoOne>
                  <Signup>
                      GET ALL THERE
                  </Signup>
                  <Description>
                  <p>
                
                  </p>Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
                  </Description>
                  <CTALogoTwo src="/images/cta-logo-two.png"/>
              </CTA>
        </Container>
    );
}

export default Login;

const Container = styled.div
`
display: flex;
align-items: center;
position: relative;
height: calc(100vh - 70px);
justify-content: center;


&:before {
    background-position: top;
    background-size: cover;
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background-image: url("/images/login-background.jpg");
}


`

const CTA = styled.div
`
    max-width: 650px;
    padding: 80px 40px; 
    width: 80%;
    display: flex;
    flex-direction: column;
    
`
const CTALogoOne = styled.div
`
    
`

const CTALogoTwo = styled.img
`
    width: 90%;
`

const Signup = styled.a
`
    width: 100%;
    background-color: #0063e5;
    font-weight: 800;
    padding: 17px 0;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 10px;

    &:hover{
        background: #0483ee;
    }

`

const Description = styled.p 
`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`



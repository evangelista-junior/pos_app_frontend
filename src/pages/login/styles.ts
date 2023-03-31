import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Banner = styled.img`
  width: 100%;
  height: 100vh;
  position: absolute;
`

export const Mask = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  left: 0px;
  top: 0px;

  background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.25) 0%, rgba(0, 0, 0, 0.1275) 20%);
`

export const LoginForm = styled.form`
  padding: 8px;
  text-align:center;
  width: 343px;
  height: 425px;

  background: linear-gradient(162.46deg, rgba(255, 255, 255, 0.42) 2.89%, rgba(255, 255, 255, 0.11) 93.59%);
  box-shadow: 0px 0px 70px #bbb;
  backdrop-filter: blur(17.5px);

  border-radius: 30px;
`

export const Logo = styled.img`
  width: 205px;
  height: 205px;
  border-radius: 100%;
  border: 5px solid #6D2F2F;
  margin-bottom: 8px;
`

export const Wrapper = styled.div<{marginBottom?: number}>`
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : 8}px;
`

export const Info = styled.p`
margin-bottom: 8px;

font-family: 'Shadows Into Light';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 32px;

color: #6D2F2F;
`

export const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;

  width: 327px;
  height: 34px;

  background: #FFFFFF;
  border: 1px solid #CCCCCC;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`

export const SubmitInput = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;

  width: 327px;
  height: 34px;

  background: #6D2F2F;
  color: #FFF;
  border: 1px solid #776262;
  border-radius: 10px;
`

export const Label = styled.label`
  color: #6D2F2F;
`

export const CompanyLogo = styled.img`
  position: absolute;
  z-index:99;
  left: 16px;
  bottom: 32px;
`
import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/Auth/AuthContext'
import CustomerLogo from './../../store/images/customer_logo.jpg'
import BannerImage from '../../store/images/banner-order-page-menu.jpg'
import SoftilLogo from '../../store/images/SoftilLogo.png'
import * as C from './styles'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const auth = useContext(AuthContext)

  const handleLogin = async ()=>{
    if(email && password){
      const isLoggedIn = await auth.signin(email, password);
      if(isLoggedIn){
      }else{
        alert('Login incorreto !')
      }
    }
  }

  return(
    <C.Container>
      <C.Banner src={BannerImage}></C.Banner>
      <C.Mask />
      <C.LoginForm onSubmit={handleLogin}>
        <C.Logo src={CustomerLogo}/>
        <C.Info>Log in to receive the best deals !</C.Info>
        <C.Wrapper>
          <C.Input 
            placeholder='e-mail'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </C.Wrapper>
        <C.Wrapper>
          <C.Input 
            type='password' 
            placeholder='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </C.Wrapper>
        <C.Wrapper marginBottom={16}>
          <C.SubmitInput 
            type='submit' 
            value='login'
          />
        </C.Wrapper>
        <C.Label><b>sign up</b> or <b>forget password</b></C.Label>
      </C.LoginForm>
      <C.Wrapper>
      <C.CompanyLogo src={SoftilLogo} />
      </C.Wrapper>
    </C.Container>
  )
}
import React from 'react'
import logo from '../../assets/logo.png'
import {
    BuscarInputContainer,
    Column,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles'
import { Button } from '../Button'

const Header= ({autenticado}) => {
  return (
      <Wrapper>
          <Container>
              <Row>
                  <img src={logo} alt='Logo da dio'></img>
                  {autenticado ? (<>
                      <BuscarInputContainer>
                      
                      <Input placeholder='Buscar... '></Input>                     </BuscarInputContainer>
                     <Menu>Live Code</Menu>
                      <Menu>Global</Menu>
                  </>) : null}               
                  
              </Row>
              <Row>
                  
                  {autenticado ? (
                      <UserPicture src='https://avatars.githubusercontent.com/u/146994872?v=4'></UserPicture>
                    ) : (
                        <>
                        <MenuRight href='#'>Home</MenuRight>                  
                        <Button title="Entrar"></Button>
                        <Button title="Cadastrar"></Button>
                      </>
                  )} 
                  
              </Row>
          </Container>
      </Wrapper>
  )
}


export { Header }
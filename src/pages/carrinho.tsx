import styled from "styled-components"

const Div =  styled.header`
  display: flex;
  flex-direction:column;
  height: 100vh;
  
  margin: 0px 20px;
`
const Header =  styled.header`
  display: flex;
  justify-content: start;
  align-items: center;
  height:30vh;
`
const Main =  styled.main`
  display: flex;
  height:50vh;
  box-sizing: border-box; 
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
`
const Footer =  styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height:20vh;
`
const A = styled.a`
  text-decoration: none;
  color: black;
  :hover{
    color: gray;
  }
`
function Carrinho (){
    return(
      <Div>
        <Header>
          <A href="/">Voltar</A>
        </Header>
        <Main>
          <h1>Carrinho</h1>
        </Main>
        <Footer>
          SAC Carrinho Telefone/Whats: (31) 9999-9999
        </Footer>
      </Div>
    )
  }

export default Carrinho
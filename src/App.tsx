import styled from "styled-components";

const Container = styled.div`
background-color:${(props) => props.theme.bgColor};
display: flex;
justify-content: center;
align-items: center;
width:100%;
height:100vh;
`;

const H1 = styled.h1`
color:${(props) => props.theme.textColor};
`

function App() {
  return (
    <Container>
      <H1>Hello</H1>
    </Container>
  );
}

export default App;

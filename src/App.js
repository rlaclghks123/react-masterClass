
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
display:flex;
justify-content: center;
align-items:center;
width:100vh;
height:100vh;
background-color : ${(props) => props.theme.backgroundColor}`;


const Box = styled.div`
color:${(props) => props.theme.textColor};
`;



function App() {
  return (
    <Wrapper>
      <Box>Hello</Box>
    </Wrapper>
  );
}

export default App;

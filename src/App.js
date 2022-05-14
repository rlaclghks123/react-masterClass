
import styled from "styled-components";

const Wrapper = styled.div`
display:flex;`;

const Emoji = styled.div`
font-size: 50px;
&:hover{
  opacity: 0;
}
`;

const Box = styled.div`
width: 100px;
height: 100px;
background-color: teal;
display: flex;
justify-content: center;
align-items: center;

${Emoji}{
  font-size: 10px;
  cursor: pointer;
}

span{
  font-size: 50px;
  
}
`;



function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji as="span">😊</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;

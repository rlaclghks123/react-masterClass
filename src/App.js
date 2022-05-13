import styled from "styled-components";

const Father = styled.div`
display:flex;`;

const BoxOne = styled.span`
background-color:teal;
width:100px;
height:100px;`

const BoxTwo = styled.span`
background-color:tomato;
width:100px;
height:100px;`


function App() {
  return (
    <Father>
      <BoxOne></BoxOne>
      <BoxTwo></BoxTwo>
    </Father >
  );
}

export default App;

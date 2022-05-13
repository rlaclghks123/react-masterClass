import styled from "styled-components";

const Father = styled.div`
display:flex;`;

const Input = styled.input.attrs({ required: true, minLength: 30 })
  `background-color: teal`;


function App() {
  return (
    <Father>
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;

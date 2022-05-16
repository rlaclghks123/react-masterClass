import styled from "styled-components";

interface ContainerProps {
    bgColor: string;
}

const Container = styled.div<ContainerProps>`
width:100px;
height:100px;
border-radius:50%;
background-color: ${(props) => props.bgColor};
`;



function Circle({ bgColor }: ContainerProps) {
    return (
        <Container bgColor={bgColor} />
    )
}

export default Circle;
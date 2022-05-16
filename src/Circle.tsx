import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
    bgColor: string;
    borderColor: string;
}

const Container = styled.div<ContainerProps>`
width:100px;
height:100px;
border-radius:50%;
background-color: ${(props) => props.bgColor};
border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
    bgColor: string;
    borderColor?: string;
    text?: string;
}


function Circle({ bgColor, borderColor, text = "default" }: CircleProps) {
    const [value, setValue] = useState<number | string>("");
    setValue(1);
    setValue("1");
    // setValue(true);  에러발생.
    return (
        <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
            {text}
        </Container>
    )
}

export default Circle;
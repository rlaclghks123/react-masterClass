 ## React-Master 

<hr>

## Style-components
- [x] Style-Components  

      - Css- in Js의 대표적인 라이브러리이다.
      사용방법  
      1. import 한다. import styled from "styled-components"
      2. Style Component를 생성한다.  기본형태 : const A  = styled.HTML테그`Css코드` ex) cosnt Box = styled.div`width:100px`;

    
- [x] Style-Components-props  

      - prop로 인자를 받아서 사용할 수 도 있다.
      사용방법  
      1. prpos를 전달해준다. ex) <Box bgColor="yellow" /> 
      2. 컴포넌트에서 인자를 사용해준다.. ex) const Box = styled `background-color: ${(props)=>props.bgColor}`;
      이때 주의할점은 props를 줄때 이름과, 사용할때 이름이 같아야 한다.

- [x] Style-Components-override  

      - 부모 style컴포넌트 에서 override해서 사용할 수 도 있다. 
      사용방법  
      1. 부모 style컴포넌트를 받아와서 추가 style 해준다.. ex) (부모컴포넌트)const Parents = styled.div`width:100px`;  const child = style(Parents)`height:100px`;  


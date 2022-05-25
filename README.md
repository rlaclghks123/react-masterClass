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

- [x] Style-Components-As  

      - style은 유지하되, html 테그를 변경할때 사용한다.
      사용방법  
      1. 컴포넌트에 as="html 테그" 를 통해 설정해준다.. 
      ex) 기존 style 컴포넌트 const Box = styled.div`width:100px;`;   
      as사용 => <Box as="span">  ==> div가 아닌 span으로 작동된다.

- [x] Style-Components-Attrs  

      - 여러 컴포넌트에 공통의 attribute를 작성해줄 수 있다.
      사용방법  
      1. 컴포넌트에 styled.html요소.attrs({atrribute})`css코드`;를 통해 컴포넌트를 만들어준뒤, 원하는곳에  필요한만큼 사용한다.
      ex) const Input = styled.input.attrs({required:true})`background-color:teal;`    생성한뒤, => <Input / ><Input / ><Input / >  와 같이 필요한만큼 사용해준다.

- [x] Style-Components-animation 

      - style-component를 통해 animation을 사용할수있다.
      사용방법  
      1. keyframes를 Import 한다. ex) import {keyframes} from "styled-components";
      2. animation style component를 만들어준다. 기본형태 : const A = keyframes`css코드`; ex) const rotation = keyframes`from{...} to{...}`;
      3. animation을 사용해준다. 기본형태 : ${animation이름}  ex) animation : ${rotation} 1s linear 

- [x] Style-Components-Theme 

      - 모든색상을 가지고 있는 오브젝트 이다.
      사용방법  
      1. ThemeProvider를 import 한다. ex) import {ThemeProvider} from "style-components";
      2. 사용할 컴포넌트를 ThemeProvider컴포넌트로 감싸준다. ex) <ThemeProvider><App /><ThemeProvider>
      3. ThemeProvider에 theme={} 을 통해 사용해준다. ex) <ThemeProvider theme={}>
      4. 사용하길 원하는 style component를 만들어 사용해준다 theme={} 넣어서 사용해준다. . ex) <ThemeProvider theme={Box}>
<hr>
<br>

## Typescript

- [x] Typescript
 
      - Typescript란 자바스크립트를 기반으로 한 Strongly-typed 언어로 프로그래밍 언어가 작동하기 전에 type을 확인하여 미리 오류를 방지한다. 
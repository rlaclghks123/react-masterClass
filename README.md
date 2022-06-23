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

- [x] Typescript란
 
      - Typescript란 자바스크립트를 기반으로 한 Strongly-typed 언어로 프로그래밍 언어가 작동하기 전에 type을 확인하여 미리 오류를 방지한다. 즉 개발자 입장에서 좀 더 안전하게 코딩을 할 수 있다.

      - propTypes와 TypeScript의 차이점 :  오류가 있을경우 propTypes는 코드 실행 후에 알려주고,  TypeScript는 코드 실행 전에 알려준다.

- [x] interface

      - interface : Object Shape(객체모양)을 TypeScript에게 설명해주는 TypeScript의 개념. 즉 Type을 지정한다.

      - 사용방법  
      기본형태:  interface interface이름 {object shape을 설명}. interface의 이름은 주로 Props를 붙혀서 이름 짓는다. Ex) CircleProps  
      Ex) interface CircleProps{bgColor:string;}

- [x] Default props vs Optional props 차이점 

      -  Default props는 모든 요소를 required 하고 있는 반면, Optional props는 required요소를 없애줄 수 있다.
      
      - Optionanl props 사용방법 : interface요소에 ? 만 붙혀주면 된다. Ex) interface CircleProps{bgColor?:string;}

      - 만약 기존 컴포넌트에서 Optional props를 통해 required가 아닌 props를 style 컴포넌트에서 받는경우 경고가 발생한다. Why? 1개의 props만 받기 때문이다.(required가 아니라서).  이경우 style컴포넌트에선 ??를 통해 props를 지정해준다. ex) return <Container bgColor="teal" borderColor={borderColor ?? "white" }/>

- [x] State

      - TypeScript에서는 초기값을 통해 type을 알고, 초기값과 다른 Type일 경우 Error가 발생한다. 
      대부분의 경우, 초기값과 같은 Type을 유지하며 사용하지만, 만약 Type이 달라질 경우를 대비하여 알아두면 좋다.

      -Type이 초기값과 달라질경우 :  const [value, setValue] = useState<number | string>() 이런식으로 사용 하면된다.  
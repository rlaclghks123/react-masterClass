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

      -일반 컴포넌트 interface 사용방법  
      기본형태:  interface interface이름 {object shape을 설명}. 
      interface의 이름은 주로 Props를 붙혀서 이름 생성하거나 , I를 붙혀서 생성한다.. Ex) CircleProps, ICircle  Ex) interface CircleProps{bgColor:string;}

      - style 컴포넌트 interface 사용방법  
      기본형태:  const style컴포넌트이름  = styled.HTML tag <interface이름>`css코드`;
      Ex)  const A = styled.div<AProps>`css코드`;



- [x] Default props vs Optional props 차이점 

      -  Default props는 모든 요소를 required 하고 있는 반면, Optional props는 required요소를 없애줄 수 있다.
      
      - Optionanl props 사용방법 : interface요소에 ? 만 붙혀주면 된다. Ex) interface CircleProps{bgColor?:string;}

      - 만약 기존 컴포넌트에서 Optional props를 통해 required가 아닌 props를 style 컴포넌트에서 받는경우 경고가 발생한다. Why? 1개의 props만 받기 때문이다.(required가 아니라서).  이경우 style컴포넌트에선 ??를 통해 props를 지정해준다. ex) return <Container bgColor="teal" borderColor={borderColor ?? "white" }/>

- [x] State

      - TypeScript에서는 초기값을 통해 type을 알고, 초기값과 다른 Type일 경우 Error가 발생한다. 
      대부분의 경우, 초기값과 같은 Type을 유지하며 사용하지만, 만약 Type이 달라질 경우를 대비하여 알아두면 좋다.

      -Type이 초기값과 달라질경우 :  const [value, setValue] = useState<number | string>() 이런식으로 사용 하면된다.  

- [x] 웹사이트 구성 방식

      1. SPA : Single Page Application의 약자로서 호출된 HTML상에서 필요한 데이터를 호출하여 화면을 새로 구성해 주는 것으로 실제로 페이지의 이동이 일어나지 않는다. 처음 웹사이트 접속시 한번만 요청되고 페이지 이동시는 실제로 페이지를 이동하지 않고 웹사이트의 view 부분만 데이터를 받아서 render하기 때문에 속도가 빨라진다. 

      2. SSR : Server Side Rendering의 약자로 서버로부터 완전하게 만들어진 html파일을 받아와 페이지 전체를 렌더링 하는 방식이다.
      검색엔진 최적화에 유리하며, 초기로딩 시간이 빠르다(사용자가 기다리는 시간이 적어짐)
      그러나 TTV(Time To View) 와 TTI(Time To Interact)간 시간차가 발생할 수 있으며, 서버측에 부하가 증가한다.
  
- [x] React Router

      - Router
            - 라우팅이란 사용자가 요청한 URL에 따라 해당 URL에 맞는 페이지를 보여주는것.
            - React는 SPA방식으로  신규 페이지를 불러오지 않는 상황에서 각각의 url에 따라 선택된 데이터를 하나의 페이지에서 렌더링 해주는 라이브러리 라고 볼 수 있다.
            - 사용자가 입력한 주소를 감지하는 역할을 하며 여러 환경에서 동작할 수 있도록 여러 종유의 라우터 컴포넌트를 제공하며 가장 많이 사용되는 라우터 컴포넌트는 BrowserRouter와 HashRouter이다.
            - BrowerRouter : HTML5를 지원하는 주소를 감지하고, github pages에서 설정하기 복잡하다 (배포가 복잡)
            - HashRouter : URL의 해시를 활용한 라우터 이며, 주소에 #이 붙기때문에 검색엔진으로 읽지 못한다. github pages에서 설정하기 간편하다(배포가 간편)

      - switch, Route
            - switch컴포넌트는 여러 Route를 감싸서 그 중 규칙이 일치하는 라우트 단 하나만을 렌더링 시켜주는 역할을 한다.  
            - Route는 path속성에 경로, element속성에는 컴포넌트를 넣어 준다.
      
      - Link
            - 웹 페이지에서는 원래 링크를 보여줄 때 a태그를 사용한다. 하지만 a태그는 클릭시 페이지를 새로 불러오기 때문에 사용하지 않는다.  - Link 컴포넌트를 사용하는데, 생김새는 a태그를 사용하지만, History API를 통해 브라우저 주소의 경로만 바꾸는 기능이 내장되어 있다.
      
      - 사용방법
            - <BrowserRouter>
                  <Switch>
                  <Route path="/:coinId">
                        <Coin />
                  </Route>
                  <Route path="">
                        <Coins />
                  </Route>
                  </Switch>
             </BrowserRouter>
     
            - <Link to={{
                        pathname: `/${coin.id}`,
                        state: { name: coin.name }}}>
    

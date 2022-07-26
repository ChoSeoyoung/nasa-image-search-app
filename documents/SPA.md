# SPA(Single Page Application)

강의 번호: React
유형: 개인공부
작성일시: 2022년 7월 23일 오후 9:20

※출처: 실리콘밸리 개발 방법으로 배우는 리액트 프로그래밍 정석

# SPA(Single Page Application)

## 📖일반 웹 사이트의 동작 과정

일반 웹 사이트의 동작 과정을 설명하기 위해 http://easyspub.co.kr/doit.html이라는 주소를 주소창에 입력했다고 가정해 보자. 주소창에 입력한 주소 중 http://easyspub.co.kr은 DNS등록된 값이다. DNS 서버는 이 값과 웹 서버를 1:1로 연결하고 있다.

DNS 서버를 통해 웹 서버를 찾으면 나머지 주소값에 해당하는 doit.html 파일을 웹 서버에서 찾는다. 그리고 웹 서버는 doit.html 파일을 웹 브라우저로 보내준다. 이런 과정을 통해 우리는 웹 사이트의 화면을 볼 수 있다. 이처럼 일반 웹 사이트는 웹 서버에 파일을 요청하고, 웹 서버는 파일을 웹 브라우저로 보내주는 구조이다.

## 📖웹 사이트의 화면 일부를 수정하기 위해 노력한 과정

초창기의 일반 웹 사이트들은 화면 일부를 다른 내용으로 변환하는 등의 작업을 할 수 없었다.. 조금이라도 다른 화면을 보여주고 싶다면 각 화면에 해당하는 웹 문서를 일일이 제작해야 했다. 그래서 개발자들은 서버에 저장된 값을 화면에 반영할 수 있도록 ASP(액티브 서버 페이지), JSP(자바 서버 페이지)와 같은 동적인 웹 문서 생성 도구를 개발했다. 이런 화면 출력 방식을 서버 사이브 렌더링(Server Side Rendering)이라고 한다. 여기서 조금 더 발전하여 웹 서버가 아닌 자바스크립트 코드로 웹 문서를 생성하도록 만든 것이 싱글 페이지 애플리케이션이다.

## 📖SPA란?

create-react-app을 사용해서 만든 리액트 프로젝트가 SPA다. SPA는 다음과 같은 과정으로 화면을 출력한다.

노드 서버가 웹 브라우저로 index.html 파일과 bundle.js를 보낸다. 웹 브라우저는 bundle.js 파일에 적힌 리액트 코드를 해석하여 index.html 문서에 반영한다. 쉽게 말해 index.html은 아무것도 적혀있지 않은 종이이고, bundle.js는 화면을 그려넣는 도장인 셈이다.

SPA의 큰 장점은 페이지 전환 속도가 빠르다는 점이다. SPA는 서버에서 받은 index.html과 자바스크립트 코드만 사용한다. 따라서 주소를 이동하더라고 서버에 추가로 웹 문서를 요청하는 등의 작업을 필요로 하지 않는다. 이와 같은 이유로 인해 화면 전환 속도가 빠른 것이다.

# 리액트 라우터 구성하기: 리액트에서 SPA 화면을 구성하는 방법

리액트 라우터는 사용자가 입력한 주소를 감지하는 역할을 하며, 여러 기기(또는 환경)에서 동작할 수 있도록 5종류의 라우터 컴포넌트가 준비되어 있다. 라우터는 컨텍스트 공급자와 같은 역할로 브라우저의 환경에 맞게 하나만 골라서 사용하면 된다.

| 라우터 컴포넌트 종류 | 설명 |
| --- | --- |
| BrowserRouter | HTML5를 지원하는 브라우저의 주소를 감지한다. |
| HashRouter | 해시 주소를 감지한다. |
| MemoryRouter | 메모리에 저장된 이전, 이후 주소로 이동시키는 라우터이다. |
| NativeRouter | 리액트 네이티브를 지원하는 라우터이다. |
| StaticRouter | 브라우저의 주소가 아닌 프로퍼티로 전달된 주소를 사용하는 라우터이다. |

웹 개발에서 가장 많이 사용되는 라우터 컴포넌트는 BrowserRouter와 HashRouter이다. 브라우저의 주소창과 연동해서 작동하기 때문이다.

라우터가 주소를 감지하는 역할을 한다면, 주소에 맞는 화면은 라우터 컴포넌트 아래에 Route, Switch 컴포넌트를 배치하여 주소에 맞는 화면을 출력하거나, Link, Redirect 컴포넌트로 주소 이동을 구현할 수 있다.

## 📖리액트 라우터 설치 방법

1. **리액트 라우터 설치하기**

터미널에 다음 명령어를 입력하여 리액트 라우터를 설치한다.

```bash
yarn add react-router-dom
```

1. **App.js에 BroswerRouter 적용하기**

BrowserRouter에서 리덕스를 사용할 수도 있으므로 BrowserRouter를 리덕스 공급자(Provider) 아래에 위치시켰다. BrowserRoter의 이름을 Router로 바꾼 이유는 다른 라우터 컴포넌트들(HashRouter…)를 적용해도 동일한 구조의 코드를 사용하기 위해서이다.

1. **MainPage 컴포넌트 작성하기**

기존에는 최상단 컴포넌트에서 Header, CardList 등의 컴포넌트를 출력했다면 이제는 BrowserRouter에서 감지한 주소에 맞게 이런 컴포넌트들이 출력될 수 있도록 MainPage 컴포넌트에 이 컴포넌트들을 포함시킨다.

```jsx
import React from 'react';

import Header from '../Header.js'
import CardList from '../CardList.js'
import Button from '../Button.js'

function MainPage(props){
    return(
        <React.Fragment>
            <Header></Header>
	        <section className="App-Section">
                <CardList></CardList>
                <Button></Button>
            </section>
        </React.Fragment>
    )
}

export default MainPage;
```

1. **주소가 /인 경우 MainPage 컴포넌트 출력하기**

path 프로퍼티에 주소를 지정하여 앞으로 이 주소에 접속할 경우 render 프로퍼지에 지정한 MainPage를 출력한다. exact 프로퍼티를 추가하면 사용하자가 입력한 주소가 path와 정확히 일치해야만 render 프로퍼티에 지정한 컴포넌트를 출력한다.

```jsx
...
import { BrowserRouter as Router } from 'react-router-dom';
...

const store=createStore(reducer);

function App(){
	return(
	<Provider store={store}>
	<Router>
	<div className="App">
		<Route path="/" exact render={()=><MainPage/>}/>
	</div>
	</Router>
	</Provider>
	)
}

export default App;
```

1. **Switch 컴포넌트를 사용해 지정된 주소가 아닌경우 NotFound 출력하기**

많은 사이트들은 사용자가 올바르지 않은 주소에 접속하면 오류를 출력해준다. 이런 기능을 구현하려면 Switch 컴포넌트와 Route 컴포넌트를 함께 사용하면 된다. **Switch 컴포넌트는 하위에 배치한 여러 Route 컴포넌트 중 가장 먼저 path가 일치하는 컴포넌트 하나를 출력하도록 만들어 준다.**

**5-1. NotFound 컴포넌트 작성하기**

```jsx
import React from 'react';
import {Link} from 'react-router-dom';

function NotFound(props){
    const {url} = props.match || {};

    return(
        <React.Fragment>
            <div>{url} 페이지를 찾을 수 없습니다.</div>
            <Link to="/">메인 페이지로 이동</Link>   
        </React.Fragment> 
    )
}

export default NotFound;
```

Link 컴포넌트는 새로고침 현상 없이 지정한 주소로 돌아갈 수 있도록 만들어 준다. 

5-2. **주소가 /가 아니면 NotFound 컴포넌트 출력하기** 

```jsx

...
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
...

const store=createStore(reducer);

function App(){
	return(
	<Provider store={store}>
	<Router>
	<div className="App">
		<Switch>
			<Route path="/" exact render={()=><MainPage/>}/>
			<Route path="*" component={NotFound}/>
		</Switch>
	</div>
	</Router>
	</Provider>
	)
}

export default App;
```

component 프로퍼티로 출력한 컴포넌트에 match 프로퍼티를 전달할 수 있다. match 프로퍼티에는 사용자가 입력한 주소값이 전달되는데, 이 값을 NotFound 컴포넌트에 출력한 것이다. render를 사용할 경우 다음과 같이 코드를 수정할 수 있다.

```jsx
<Route path="*" render={({match})=><NotFound match={match}/>}/>
```
# 클래스형 컴포넌트와 함수형 컴포넌트

작성일시: 2022년 7월 23일 오후 4:11

※출처: [https://velog.io/@seong-dodo/React-클래스형-컴포넌트-vs-함수형-컴포넌트#:~:text=클래스형 컴포넌트는 상태,가질 수 있느냐 없느냐이다](https://velog.io/@seong-dodo/React-%ED%81%B4%EB%9E%98%EC%8A%A4%ED%98%95-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-vs-%ED%95%A8%EC%88%98%ED%98%95-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8#:~:text=%ED%81%B4%EB%9E%98%EC%8A%A4%ED%98%95%20%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EB%8A%94%20%EC%83%81%ED%83%9C,%EA%B0%80%EC%A7%88%20%EC%88%98%20%EC%9E%88%EB%8A%90%EB%83%90%20%EC%97%86%EB%8A%90%EB%83%90%EC%9D%B4%EB%8B%A4).

# ✍🏻클래스형 컴포넌트와 함수형 컴포넌트

리액트 컴포넌트는 클래스형 컴포넌트와 함수형 컴포넌트로 작성될 수 있다.

클래스형 컴포넌트는 상태값을 가질 수 있고, 리액트 컴포넌트의 생명 주기 함수를 작성할 수 있다. 그러나 함수형 컴포넌트는 상태값과 생명 주기 함수를 가질 수 없다.

## 📖함수형 컴포넌트

- JSX를 return을 통해서 반환
- state, 생명 주기 함수 작성 불가

```jsx
import React from 'react';

function Hello({color}) {
  return (
    <div style={{color}}>
      Hello World!
    </div>
  );
}

export default Hello;
```

## 📖클래스형 컴포넌트

- class 키워드로 시작
- component를 상속받음
- JSX를 render()을 통해서 반환
- props 조회시 this 키워드 사용

```jsx
import React, { Component } from 'react';

class Hello extends Component {
  render() {
    const { color } = this.props;
    return (
      <div style={{ color }}>
        Hello World!
      </div>
    );
  }
}

export default Hello;
```

### 📎커스텀 메서드 만들기

- 클래스의 생성자 메서드 **constructor에서 bind 작업**

```jsx
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }

  handleIncrease() {
    console.log('increase');
    console.log(this);
  }

  handleDecrease() {
    console.log('decrease');
  }

  render() {
    return (
      <div>
        <h1>0</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
      </div>
    );
  }
}

export default Counter;
```

### 📎상태 선언하기

- 클래스형 컴포넌트에서 state로 상태를 관리
- state를 선언할 때는 constructor 내부에서 this.state 설정
- 클래스형 컴포넌트의 state는 무조건 객체형태여야 함
- render 메서드에서 state를 조회하려면 this.state를 조회하면 된다.

```jsx
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    counter: 0
  };
  handleIncrease = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  handleDecrease = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
      </div>
    );
  }
}

export default Counter;
```

### 📎상태 업데이트 하기

- 상태를 업데이트해야 할 때에는 **this.setState** 함수를 사용한다.

### 📎생명 주기 메서드

※출처: [https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

![image](https://user-images.githubusercontent.com/74875490/180597071-c1288420-902b-49ff-bbb2-699662086d8f.png)<br>

생명주기함수란 컴포넌트가 브라우저상에 나타나고, 업데이트되고, 사라지게 될 때 호출되는 메서드들이다. 추가적으로 컴포넌트에서 에러가 났을 때 호출되는 메서드도 있다. 생명주기 메서드는 **클래스형 컴포넌트**에서만 사용될 수 있다. 컴포넌트 라이프 사이클은 크게 **마운트-업데이트-언마운트** 단계로 나뉜다.

1. **마운트 단계(초기화 단계)**

마운트 단계(초기화 단계)는 최초에 컴포넌트 객체가 생성될 때 한 번 수행된다. 마운트될 때 발생하는 생명주기들은 다음과 같다.

- ***constructor***
    
    consturctor는 컴포넌트의 생성자 메서드, 컴포넌트가 만들어지면 가장 먼저 실행되는 메서드이다. 컴포넌트가 브라우저에 나타나기 전, 즉, render()전에 호출이되는 라이프 사이클 함수이다.
    
- ***getDerivedStateFromProps***
    
    getDerivedStateFromProps 메소드는 속성값을 이용해서 새로운 상태값을 만들 때 즉, props로 받아온 것을 state에 넣어주고 싶을 때 사용한다.
    
    이 메소드는 render 메서드가 호출되기 직전에 호출되는 라이프 사이클 함수이다.
    
    다른 생명주기 메서드와 달리 앞에 static을 필요로 하고, 정적 메서드이기 때문에 함수 내부에서 this 객체에 접근할 수 없다.
    
- ***render***
    
    컴포넌트를 렌더링하는 메서드로 컴포넌트를 정의할 때 반드시 작성해야 한다.
    
    render 메서드에서는 부수 효과를 발생시키면 안된다. 서버와 통신하기, 브라우저의 쿠키에 저장하기 등은 부수 효과이므로 render 메서드 내부에서는 피해야 한다. 만약 부수 효과가 필요하다면 다른 생명 주기 메서드에서 하면 된다.
    
- ***componentDidMount***
    
    componentDidMount 메서드는 render 메서드의 첫 번째 반환값이 실제 돔에 반영된 직후 호출된다. 따라서 render 메서드에서 반환한 리액트 요소가 돔에 반영되어야 알 수 있는 값을 얻을 수 있기 때문에 해당 컴포넌트에서 필요로 하는 데이터를 요청하기 위해 axios, fetch 등을 이용해 외부 api를 호출하는 작업을 진행한다.
    

1. **업데이트 단계**

업데이트 단계는 초기화 단계와 소멸 단계 사이에서 반복해서 수행된다. 컴포넌트의 속성값 또는 상태값이 변경되면 업데이트 단계가 수행된다. 이 단계에서 실행되는 생명주기함수의 호출순서는 다음과 같다.

- ***getDerivedStateFromProps***
    
    컴포넌트의 props나 state가 바뀌었을때도 이 메서드가 호출된다.
    
- ***shouldComponentUpdate***
    
    컴포넌트 최적화를 할 때 많이 사용된다. 이 메서드는 컴포넌트가 리렌더링될지 말지를 결정하는 함수이다.
    
- ***render***
    
    컴포넌트를 렌더링하는 메서드이다.
    
- ***getSnapshotBeforeUpdate***
    
    렌더링 결과가 실제 돔에 반영되기 직전체 호출된다. 따라서 getSnapshotBeforeUpdate 메서드가 호출되는 시점에 이전에 돔 요소의 상태값을 가져오기 좋다.
    
- ***componentDidUpdate***
    
    업데이트 단계에서 마지막으로 호출되는 생명주기함수이다. 이 메서드는 가상 돔이 실제 돔에 반영된 후 호출된다. 따라서 componentDidUpdate는 새로 반영된 돔의 상태값을 가장 빠르게 가져올 수 있는 메서드이다.
    
1. **언마운트 단계(소멸 단계)**
- ***componentWillUnmount***
    
    컴포넌트가 화면에서 사라지기 직전에 호출된다.
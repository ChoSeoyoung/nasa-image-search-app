import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../components/Btn';

storiesOf('Button',module)
    .add('기본 설정', ()=><Button>전송하기</Button>)
    .add('large 예제', () => <Button large>전송하기</Button>)
    .add('xlarge 예제', () => <Button xlarge>전송하기</Button>)
    .add('small 예제', () => <Button small>전송하기</Button>)
    .add('xsmall 예제', () => <Button xsmall>전송하기</Button>)
    .add('primary 예제', () => <Button primary>전송하기</Button>)
    .add('secondary 예제', () => <Button secondary>전송하기</Button>)
    .add('primary와 large 함께 쓰는 예제', () => (
        <Button primary large>
            전송하기
        </Button>
    ));
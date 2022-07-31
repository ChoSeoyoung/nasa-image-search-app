import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from '../components/Text';

storiesOf('Text',module)
    .add('기본 설정', ()=><Text>안녕하세요.</Text>);
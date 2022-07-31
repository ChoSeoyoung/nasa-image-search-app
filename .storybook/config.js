import { configure } from "@storybook/react";
import interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault';

function loadStories(){
    const context = require.context('../src/stories',true,/Story\.js$/);
    context.keys().forEach((srcFile)=>{
        interopRequireDefault(context(srcFile));
    })
    require('../src/stories/InputStory');
}

configure(loadStories, module);
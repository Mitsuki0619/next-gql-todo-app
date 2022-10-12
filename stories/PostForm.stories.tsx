import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { PostForm } from '../components/PostForm/PostForm'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Common/PostForm',
    component: PostForm,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof PostForm>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PostForm> = (args) => (
    <PostForm {...args} />
)

export const Normal = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Normal.args = {
  
}

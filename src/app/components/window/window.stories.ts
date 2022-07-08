import { WindowComponent } from './window.component';
// Button.stories.ts

import { Meta, Story } from '@storybook/angular';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Window',
    component: WindowComponent,
} as Meta;

export const Primary: Story = () => ({
});
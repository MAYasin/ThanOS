import { Meta, Story } from '@storybook/angular/';
import { PopupComponent } from './popup.component';

export default {
    title: 'Components/Button',
    component: PopupComponent,
    argTypes: {
        // Assigns the argType to the Style category
        styling: {
            options: ['raised', 'flat', 'stroked'],
            defaultValue: 'raised',
            control: 'select',
        },
        // Assigns the argType to the Color category
        color: {
            options: [
                'primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'default',
            ],
            defaultValue: 'primary',
            control: 'select',
        },
        // Assigns the argType to the Sizes category
        size: {
            options: ['extra-small', 'small', 'medium', 'large', 'extra-large'],
            defaultValue: 'small',
            control: 'select',
        },
        type: {
            options: ['button', 'submit'],
            defaultValue: 'button',
            control: 'select',
        },
        // Assigns the argType to the Events category
        onClick: {
            table: {
                category: 'Events',
            },
        },
    },
} as Meta;
const Template: Story<PopupComponent> = (args: PopupComponent) => ({
    props: args,
    template: `<app-popup [styling]='styling' [color]='color' [size]='size' [type]='type' [disabled]='disabled'>Example</app-popup>`,
});
export const Colors = () => ({
    template: `
    <app-popup color='primary'>Primary</app-popup>
    <app-popup color='secondary'>Secondary</app-popup>
    <app-popup color='success'>Success</app-popup>
    <app-popup color='danger'>Danger</app-popup>
    <app-popup color='warning'>Warning</app-popup>
    <app-popup color='default'>Default</app-popup>`,
});
export const Styles = () => ({
    template: `
    <app-popup size='small' styling='raised'>Raised</app-popup>
    <app-popup styling='flat'>Flat</app-popup>
    <app-popup styling='stroked'>Stroked</app-popup>`,
});
export const Sizes = () => ({
    template: `
    <app-popup size="extra-small">Extra Small</app-popup>
    <app-popup size="small">Small</app-popup>
    <app-popup size="medium">Medium</app-popup>
    <app-popup size="large">Large</app-popup>
    <app-popup size="extra-large">Extra Large</app-popup>`,
});
export const Disabled = () => ({
    template: `<app-popup [disabled]='true'>Disabled</app-popup>`,
});
export const Configurable = Template.bind({});
Configurable.args = {
    /* styling: 'raised', */
    /* color: 'default', */
    /* size: 'small', */
    /* type: 'button', */
   /*  disabled: false, */
};
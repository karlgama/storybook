import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';


import Table from './index'

const customViewports = {
    kindleFire2: {
        name: 'Kindle Fire 2',
        styles: {
            width: '600px',
            height: '963px',
        },
    },
}

export default {
    title: 'Datadisplay/Table',
    component: Table,
    argTypes: {
        primary: {
            control: 'boolean',
        },
        size: {
            options: ['medium', 'large'],
            control: { type: 'radio' }
        }
    },
    parameters: {
        viewport: {
            viewports: { ...INITIAL_VIEWPORTS, ...MINIMAL_VIEWPORTS, ...customViewports },
            defaultViewport: 'Tablet'
        }
    }
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    primary: true,
};

export const Secondary = Template.bind({});

Secondary.args = {
    primary: false,
    size: 'large'
}


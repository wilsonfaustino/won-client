import { Story, Meta } from '@storybook/react/types-6-0'
import { Email } from '@styled-icons/material-outlined'
import TextField, { TextFieldProps } from '.'

export default {
  title: 'TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'Email',
    id: 'Email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com'
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: '' }
  }
} as Meta

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

export const withIcon: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

withIcon.args = {
  icon: <Email />
}
export const withIconAndError: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

withIconAndError.args = {
  placeholder: 'dot@home.com',
  icon: <Email />,
  error: 'Ops.. I did it again'
}

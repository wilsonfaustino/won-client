import { Story, Meta } from '@storybook/react/types-6-0'
import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'checked' }
  },
  args: {
    label: 'Checkbox Text',
    labelFor: 'check'
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const WhiteOnDark: Story<CheckboxProps> = (args) => (
  <Checkbox {...args} isChecked />
)
export const ManyCheckboxes: Story<CheckboxProps> = (args) => (
  <>
    <Checkbox {...args} isChecked />
    <Checkbox {...args} label="Another" labelFor="Another" />
    <Checkbox {...args} label="Third" labelFor="Third" />
  </>
)
export const BlackOnLight: Story<CheckboxProps> = (args) => (
  <Checkbox {...args} labelColor="black" />
)

BlackOnLight.parameters = {
  backgrounds: {
    default: 'won-light'
  }
}

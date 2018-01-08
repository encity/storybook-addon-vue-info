import { storiesOf } from '@storybook/vue'

import VueInfoAddon from 'storybook-addon-vue-info'

import BaseBlank from '../src/components/BaseBlank.vue'
import BaseButton from '../src/components/BaseButton.vue'

storiesOf('BaseButton', module)
  .addDecorator(VueInfoAddon)
  .add('global component', () => ({
    template: '<base-button type="primary" label="global"/>',
    propsDesc: {
      disabled: 'disabled prop description',
      type: 'type prop description',
      label: 'label prop description'
    },
    events: {
      click : {
        name: 'click',
        desc: "click event description"
      }
    }
  }))
  .add('local component', () => ({
    components: {
      LocalButton: BaseButton
    },
    propsDesc: {
      disabled: 'disabled prop description',
      type: 'type prop description',
      label: 'label prop description'
    },
    template: '<local-button :disabled="true" label="local"/>'
  }))
  .add('long long template', () => ({
    template: '<base-button type="primary" disabled label="Storybook is a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components."/>'
  }))

storiesOf('BaseBlank', module)
  .addDecorator(VueInfoAddon)
  .add('blank', () => ({
    components: { BaseBlank },
    template: '<base-blank/>'
  }))

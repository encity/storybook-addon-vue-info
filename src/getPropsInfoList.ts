import constructorToString from './utils/constructorToString'

import { RuntimeComponentOptions } from './types/VueRuntime'
import PropInfo from './types/PropInfo'

/**
 * Get properties informations from component instance.
 * @param {RuntimeComponentOptions} component
 * @param story
 * @returns {PropInfo[]}
 */
function getPropsInfoList(component: RuntimeComponentOptions, story: any): PropInfo[] {
  const { props } = component
  const propsDesc = story.propsDesc ? story.propsDesc : {}

  if (!props) {
    return []
  }

  return Object.keys(props).map(name => {
    const prop = (props as any)[name]
    const desc = propsDesc[name] ? propsDesc[name] : ''

    // If there are no props defined in Object sytle,
    // Vue does not convert "prop: Constructor" into Object style (See #3).
    if (typeof prop === 'function') {
      return {
        name,
        type: constructorToString(prop),
        required: false,
        default: undefined,
        desc: desc

      }
    }

    return {
      name,
      type: constructorToString(prop.type),
      required: !!prop.required,
      default: prop.default,
      desc: desc
    }
  })
}

export default getPropsInfoList

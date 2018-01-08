import { RuntimeComponentOptions } from './types/VueRuntime';
import ComponentInfo from './types/ComponentInfo';
declare function parseStoryComponent(story: RuntimeComponentOptions): ComponentInfo;
export default parseStoryComponent;

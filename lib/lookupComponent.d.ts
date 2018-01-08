import { RuntimeComponents } from './types/VueRuntime';
import ComponentInfo from './types/ComponentInfo';
declare function lookupComponent(name: string, components?: RuntimeComponents): ComponentInfo | null;
export default lookupComponent;

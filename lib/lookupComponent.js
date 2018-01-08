import hyphenate from './utils/hyphenate';
function lookupComponent(name, components) {
    if (!components) {
        return null;
    }
    for (var componentName in components) {
        if (hyphenate(componentName) === name) {
            var component = components[componentName];
            return {
                name: componentName,
                component: component.options ? component.options : component
            };
        }
    }
    return null;
}
export default lookupComponent;

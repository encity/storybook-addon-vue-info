import constructorToString from './utils/constructorToString';
function getMethodsInfoList(component) {
    var methods = component.methods;
    if (!methods) {
        return [];
    }
    return Object.keys(methods).map(function (name) {
        var event = methods[name];
        if (typeof event === 'function') {
            return {
                name: name,
                type: constructorToString(event),
                desc: undefined
            };
        }
        return {
            name: name,
            type: constructorToString(event.type),
            desc: event.desc
        };
    });
}
export default getMethodsInfoList;

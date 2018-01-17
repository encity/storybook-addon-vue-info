import constructorToString from './utils/constructorToString';
function getPropsInfoList(component, story) {
    var props = component.props;
    var propsDesc = story.propsDesc ? story.propsDesc : {};
    if (!props) {
        return [];
    }
    return Object.keys(props).map(function (name) {
        var prop = props[name];
        var desc = propsDesc[name] ? propsDesc[name] : '';
        if (typeof prop === 'function') {
            return {
                name: name,
                type: constructorToString(prop),
                required: false,
                default: undefined,
                desc: desc
            };
        }
        return {
            name: name,
            type: constructorToString(prop.type),
            required: !!prop.required,
            default: typeof prop.default === 'function' ? prop.default() : prop.default,
            desc: desc
        };
    });
}
export default getPropsInfoList;

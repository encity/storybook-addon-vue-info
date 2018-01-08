import getPropsInfoList from './getPropsInfoList';
import parseStoryComponent from './parseStoryComponent';
var InfoView = require('./components/InfoView');
var VueInfoAddon = function (storyFn) {
    var story = storyFn();
    var componentInfo = parseStoryComponent(story);
    var propsList = getPropsInfoList(componentInfo.component, story);
    return {
        render: function (h) {
            return h(InfoView, {
                props: {
                    name: componentInfo.name,
                    template: story.template,
                    propsList: propsList,
                    story: story
                },
                scopedSlots: {
                    default: function () { return [h(story)]; }
                }
            });
        }
    };
};
export default VueInfoAddon;

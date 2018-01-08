import Vue from 'vue';
import hyphenate from './utils/hyphenate';
import getOutermostTagName from './utils/getOutermostTagName';
import lookupComponent from './lookupComponent';
function parseStoryComponent(story) {
    if (!story.template) {
        throw new Error('`template` must be on component options, but got undefined.');
    }
    var outermostTagName = hyphenate(getOutermostTagName(story.template));
    var localComponents = story.components;
    var globalComponents = Vue.options.components;
    var component = lookupComponent(outermostTagName, localComponents) ||
        lookupComponent(outermostTagName, globalComponents);
    if (!component) {
        throw new Error("No match components registered: " + outermostTagName);
    }
    return component;
}
export default parseStoryComponent;

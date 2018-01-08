function getOutermostTagName(xmlString) {
    return xmlString.replace(/<([^\s>\/]+)[\s\S]+$/, '$1');
}
export default getOutermostTagName;

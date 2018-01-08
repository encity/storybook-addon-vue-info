function hyphenate(input) {
    return input.replace(/\B([A-Z])/g, '-$1').toLowerCase();
}
export default hyphenate;

function solutionToNodejs(nodejsCode) {
    // Replace JavaScript code with Node.js syntax
    let modifiedCode = nodejsCode.replace(/console.log/gi, 'console.log(').replace(/module.exports/, 'module.exports: function() {');
    return modifiedCode;
}

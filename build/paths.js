var appRoot = 'src/',
    outputRoot = 'dist/';

module.exports = {
    root: appRoot,
    js: appRoot + 'js/*.js',
    sassVar: appRoot + 'scss/variables.scss',
    sassSrc: appRoot + 'scss/menu-animate.scss',
    lessVar: appRoot + 'less/variables.less',
    lessSrc: appRoot + 'less/menu-animate.less',
    css: appRoot + 'css/*.css',
    html: appRoot + 'html/*.html',

    output: outputRoot,
    outputJs:outputRoot + 'js/',
    outputScss: outputRoot + 'scss/',
    outputLess: outputRoot + 'less/',
    outputSrcCss: appRoot + 'css/',
    outputCss: outputRoot + 'css/',
    outputHtml: outputRoot + 'html/'
};

var appRoot = 'src/',
    outputRoot = 'dist/';

module.exports = {
    root: appRoot,
    js: appRoot + 'js/*.js',
    sassVar: appRoot + 'scss/variables.scss',
    sassSrc: appRoot + 'scss/menu-animate.scss',
    css: appRoot + 'css/*.css',
    html: appRoot + 'html/*.html',

    output: outputRoot,
    outputJs:outputRoot + 'js/',
    outputScss: outputRoot + 'scss/',
    outputSrcCss: appRoot + 'css/',
    outputCss: outputRoot + 'css/',
    outputHtml: outputRoot + 'html/'
};

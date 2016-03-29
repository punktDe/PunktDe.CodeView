module.exports = {
    prism: {
        src: [
            'node_modules/prismjs/prism.js',

            'node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js',
            'node_modules/prismjs/plugins/line-highlight/prism-line-highlight.js',

            'node_modules/prismjs/components/prism-bash.js',
            'node_modules/prismjs/components/prism-javascript.js',
            'node_modules/prismjs/components/prism-html.js',
            'node_modules/prismjs/components/prism-php.js',
            'node_modules/prismjs/components/prism-ruby.js',
            'node_modules/prismjs/components/prism-yaml.js'
        ],
        dest: '../Public/JavaScript/Prism.min.js'
    }
}
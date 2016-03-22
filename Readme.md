[![Latest Stable Version](https://poser.pugx.org/punktde/codeview/v/stable)](https://packagist.org/packages/punktde/codeview) [![Total Downloads](https://poser.pugx.org/punktde/codeview/downloads)](https://packagist.org/packages/punktde/codeview) [![Latest Unstable Version](https://poser.pugx.org/punktde/codeview/v/unstable)](https://packagist.org/packages/punktde/codeview) [![License](https://poser.pugx.org/punktde/codeview/license)](https://packagist.org/packages/punktde/codeview)

# CodeView
This package provides a node type to display code using the code highlighter prism (http://prismjs.com/).

# Installation and integration

The installation is done with composer: 

	composer require punktde/codeview

### (De)activate CSS / Javascript autoloading

By default, the galleries CSS and JavaScript files are added to the header and footer includes of your page automatically on pages, where an instance of the gallery plugin is added. If you want to compile the JS / CSS into your pages main files you can deactivate this behavior via settings:

	PunktDe:
	  CodeView:
	    loadCSS: false
	    loadJS: false

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/vaadin/vaadin-core-elements?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
![Bower version](https://img.shields.io/bower/v/vaadin-icons.svg)

# vaadin-icons

`vaadin-icons` is a set of 500+ icons which can be used together with Polymer's `<iron-icon>` component.
`vaadin-icons` is a part of the [vaadin-core-elements](https://github.com/vaadin/vaadin-core-elements) element bundle.

<img src="screenshot.png" width="434" alt="Screenshot of vaadin-icons" />

## Features
- Compatible with [`<iron-icon>`](https://elements.polymer-project.org/elements/iron-icon) and [`<iron-iconset>`](https://elements.polymer-project.org/elements/iron-iconset)
- Evolving set of over 500 icons.
- In addition to SVG, also PNG and font formats are available separately.

See more information at https://vaadin.com/font-icons.

## Getting started
- [Demos](https://cdn.vaadin.com/vaadin-core-elements/master/vaadin-icons/demo/)
- [API Documentation](https://cdn.vaadin.com/vaadin-core-elements/master/vaadin-icons/)

## Developing
Install required dependencies by running following lines in the project root.

```sh
$ npm install -g polyserve
$ npm install
$ bower install
```

### Running the demos
Start a local server in the project root.
```sh
$ polyserve
```

After `polyserve` is running, open http://localhost:8080/components/vaadin-icons/demo/ in your browser.

### Updating the iconset

Updating the icon set in ```vaadin-icons.html```.
```sh
$ npm install -g gulp
$ gulp
```

## License
`vaadin-icons` is licensed under the Apache License 2.0.

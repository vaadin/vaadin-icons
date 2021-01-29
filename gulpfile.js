
'use strict';

const gulp = require('gulp');
const modify = require('gulp-modify');
const cheerio = require('cheerio');
const path = require('path');

gulp.task('icons', function() {
  return gulp.src(['assets/svg/*.svg'], {base: '.'})
    .pipe(modify({
      fileModifier: function(file, contents) {
        var id = file.path.replace(/.*\/(.*).svg/, '$1');
        var svg = cheerio.load(contents, {xmlMode: true})('svg');
        // Remove fill attributes.
        svg.children('[fill]').removeAttr('fill');
        // Output the "meat" of the SVG as group element.
        return '<g id="' + id + '">' + svg.children() + '</g>';
      }
    }))
    .pipe(modify({
      fileModifier: function(file, contents) {
        /* eslint-disable max-len */
        // Enclose all icons in an iron-iconset-svg
        file.path = path.join('.', path.basename(file.path, path.extname(file.path))) + '.js';
        return `import { html } from 'lit-html';

export default html\`
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
    ${contents}
  </svg>
\`;
`
      }
    }))
    .pipe(gulp.dest('./icons'));
});

// Generates an AsciiDoc table of all icons from the JSON metadata.
/* eslint-disable no-console */
gulp.task('docs:table', () => {
  const iconData = require('./assets/vaadin-font-icons.json');

  console.log('[width="100%", options="header"]');
  console.log('|======================');
  console.log('| Icon | Name | Ligature | Unicode | Categories | Tags');
  iconData.forEach((icon) => {
    const {name, code} = icon;
    const categories = icon.categories.join(', ');
    const meta = icon.meta.join(', ');
    console.log(`| image:../assets/png/${name}.png[] | [propertyname]#${name}# | ${name} | ${code} | ${categories} | ${meta}`);
  });
  console.log('|======================');
});
/* eslint-enable no-console */

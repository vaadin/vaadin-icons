import { LitElement, html, css } from 'lit-element';
import { render, nothing, TemplateResult } from 'lit-html';
import { getIcon } from './vaadin-iconset.js';

/**
 * Custom element for rendering SVG icons.
 */
export class VaadinIcon extends LitElement {
  static get properties() {
    return {
      /**
       * The SVG icon wrapped in a lit-html template literal.
       */
      svg: {
        attribute: false
      },

      /**
       * The name of the icon to use. The name should be of the form:
       * `iconset_name:icon_name`.
       */
      icon: {
        type: String
      }
    };
  }

  static get styles() {
    return [
      css`
        :host {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          vertical-align: middle;
          width: 24px;
          height: 24px;
        }

        :host([hidden]) {
          display: none;
        }

        ::slotted(svg) {
          display: block;
          width: 100%;
          height: 100%;
        }
      `
    ];
  }

  constructor() {
    super();
    this.__svg = nothing;
  }

  render() {
    return html`<slot></slot>`;
  }

  updated(props) {
    if (props.has('icon')) {
      const icon = this.icon;
      if (typeof icon !== 'string' || icon === '') {
        console.error('Invalid icon passed to vaadin-icon, please use a string.')
        return;
      }

      const [namespace, name] = icon.split(':');
      this.svg = getIcon(namespace, name);
    }
  }

  set svg(svg) {
    this.__svg = svg;

    let result = svg == null ? nothing : svg;

    if (!(result === nothing || result instanceof TemplateResult)) {
      console.error('Invalid svg passed to vaadin-icon, please use lit-html template.');
      result = nothing;
    }

    render(result, this);
  }

  get svg() {
    return this.__svg;
  }
}

customElements.define('vaadin-icon', VaadinIcon);

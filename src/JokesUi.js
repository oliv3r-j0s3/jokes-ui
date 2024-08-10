import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import { BbvaCoreIntlMixin } from '@bbva-web-components/bbva-core-intl-mixin';
import '@bbva-web-components/bbva-text/bbva-text.js';
import styles from './jokes-ui.css.js';

/**
 * ![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)
 *
 * This component ...
 *
 * Example:
 *
 * ```html
 *   <jokes-ui></jokes-ui>
 * ```
 */
export class JokesUi extends BbvaCoreIntlMixin(LitElement) {
  static get properties() {
    return {
      /**
       * Description for property
       */
      // Joke category
      category: { type: String },
      // Joke id (identifier)
      id: { type: Number },
      // Joke setup  content the joke
      setup: { type: String },
      // Joke type (single or twopart)
      type: { type: String },
    };
  }

  constructor() {
    super();
    this.category = '';
    this.id = 0;
    this.setup = '';
    this.type = '';
  }

  static get styles() {
    return [styles, getComponentSharedStyles('jokes-ui-shared-styles')];
  }

  render() {
    return html`
      <div class="card-container">
        <div class="${this.type === 'single' ? 'card-single' : 'card-twopart'}">
          <div class="card-header">
            <bbva-text size="L" tag="h3" text="${this.id}"></bbva-text>
          </div>
          <div class="card-content">
            <bbva-text
              size="M"
              tag="h4"
              text="${this.t('jokes-content-category')}${this.category}"
            ></bbva-text>
            <bbva-text
              size="M"
              tag="h4"
              text="${this.t('jokes-content-type')}${this.type}"
            ></bbva-text>
            <bbva-text size="M" tag="p" text="${this.setup}"></bbva-text>
          </div>
        </div>
      </div>
    `;
  }
}

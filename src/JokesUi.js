import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import { BbvaCoreIntlMixin } from '@bbva-web-components/bbva-core-intl-mixin';
import '@bbva-web-components/bbva-text/bbva-text';
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
      jokes: {
        type: Array,
      },
    };
  }

  constructor() {
    super();
    this.jokes = [];
  }

  static get styles() {
    return [styles, getComponentSharedStyles('jokes-ui-shared-styles')];
  }

  render() {
    return html`
      <div class="card-container">
        ${this.jokes.map(
          joke => html`
            <div class="${joke.type === "single" ? "card-single" : "card-twopart"}">
              <div class="card-header">
                <bbva-text
                  size="L"
                  tag="h3"
                  text="${joke.id}"
                ></bbva-text>
              </div>
              <div class="card-content">
                <bbva-text
                  size="M"
                  tag="h4"
                  text="${this.t('jokes-content-category')}${joke.category}"
                ></bbva-text>
                <bbva-text
                  size="M"
                  tag="h4"
                  text="${this.t('jokes-content-type')}${joke.type}"
                ></bbva-text>
                <bbva-text
                  size="M"
                  tag="p"
                  text="${joke.setup}"
                ></bbva-text>
              </div>
            </div>
          `
        )}
        </div>
    `;
  }
}

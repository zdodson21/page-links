import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('page-links')
export class PageLinks extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more'

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0

  render() {
    return html`
      <div class="page-links-wrapper">
        <p>Hello World</p>
      </div>
    `
  }

  static styles = css`
    :host {
      display: block;
    }
    .page-links-wrapper {
      width: 100%;
      height: 100%;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'page-links': PageLinks
  }
}

import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './link-block';
import './profile-picture';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('page-links')
export class PageLinks extends LitElement {
  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0

  static styles = css`
    :host {
      display: block;
    }

    .page-links-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .link-slot {
      display: flex;
      flex-direction: column;
    }
  `

  render() {
    return html`
      <div class="page-links-wrapper">
        <div class="profile-info">
          <slot name="profile"></slot>
        </div>

        <div class="link-slot">
          <slot name="links"></slot>
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'page-links': PageLinks
  }
}

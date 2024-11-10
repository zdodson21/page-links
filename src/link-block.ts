import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('link-block')
export class LinkBlock extends LitElement {
  
  // TODO may need to make this into an array, and figure out which is being used, if none then default style. Look into RPG Character hats for something similar.
  @property({ type: String, attribute: 'href', reflect: true }) href = '';
  @property({ type: Boolean, attribute: 'new-tab', reflect: true }) newTab = false;
  
  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`
      <div class="link-block-wrapper">
        <a href="${this.href}" target="${this.newTab ? '_blank' : '_self'}">
          <slot></slot>
        </a>  
      </div>
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'link-block': LinkBlock
  }
}
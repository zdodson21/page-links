import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('profile-picture')
export class ProfilePicture extends LitElement {
  @property({ type: String, attribute: 'src', reflect: true }) src = '';
  @property({ type: String, attribute: 'alt', reflect: true }) alt = 'Profile picture';

  static styles = css`
    :host {
      display: block;
    }
  `
  render() {
    return html`
      <div class="profile-picture">
        <img src="${this.src}" alt="${this.alt}"/>
        <slot></slot>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'profile-picture': ProfilePicture
  }
}
import { LitElement, html } from 'lit-element'
import styles from './my-button.scss'

class MyElement extends LitElement {
  render(){
    return html`
      <style>${styles}</style>
      <button class="my-button">Custom Button</button>
    `
  }
}

// Register the new element with the browser.
customElements.define('my-button', MyElement)

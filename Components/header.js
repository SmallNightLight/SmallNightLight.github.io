const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
<link rel="stylesheet" href="/CSS/style.css">
<header>
    <h1>Matthias Kruis</h1>
</header>
`;

class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: 'closed' });
  
      shadowRoot.appendChild(headerTemplate.content);
    }
}
  
customElements.define('portfolio-header', Header);
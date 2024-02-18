const menuTemplate = document.createElement('template');
menuTemplate.innerHTML = `
<link rel="stylesheet" href="/CSS/style.css">
<aside class="Menu" id="Menu">
            <a href="/index.html" class="Logo">
                <strong>Portfolio</strong>
            </a>
            <input type="search" id="SearchField" placeholder="Search">
            <section class="MenuItems">
            <a href="/index.html">Home</a>
                <a href="#">About me!</a>
                <a href="#">All Projects</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
            </section>
            <section class="SocialMedia">
                <a href="https://github.com/SmallNightLight" target="_blank">
                    <img src="/Images/Social Media/Github.svg" title="Github">
                </a>
                <a href="https://www.linkedin.com/in/matthias-kruis" target="_blank">
                    <img src="/Images/Social Media/LinkedIn.svg" title="LinkedIn">
                </a>
                <a href="https://nightmatthias.itch.io/" target="_blank">
                    <img src="/Images/Social Media/Itch2.svg" title="Itch.io">
                </a>
            </section>
        </aside>
`;

class Menu extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: 'closed' });
  
      shadowRoot.appendChild(menuTemplate.content);
    }
}
  
customElements.define('portfolio-menu', Menu);
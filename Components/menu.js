const menuTemplate = document.createElement('template');
menuTemplate.innerHTML = `
<link rel="stylesheet" href="../CSS/style.css">
<aside class="Menu" id="Menu">
            <a href="index.html" class="Logo">
                <strong>Portfolio</strong>
            </a>
            <input type="search" id="SearchField" placeholder="Search">
            <section class="MenuItems">
                <a onclick="OpenMenu('Page1')">Home</a>
                <a href="#">About me!</a>
                <a href="#">All Projects</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
            </section>
            <section class="SocialMedia">
                <a href="index.html">
                    <img src="Images/Social Media/Facebook.svg" title="Facebook">
                </a>
                <a href="index.html">
                    <img src="Images/Social Media/Insta.svg" title="Instagram">
                </a>
                <a href="index.html">
                    <img src="Images/Social Media/Twitter.svg" title="Twitter">
                </a>
                <a href="index.html">
                    <img src="Images/Social Media/Youtube.svg" title="Youtube">
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
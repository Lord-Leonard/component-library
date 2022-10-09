const template = document.createElement('template');
template.innerHTML = `
    <style>
      button {
        background-color: #023047;
        color: white;
        border: none;
        cursor: pointer;
        border-radius: 5px;
        text-align: center;
      }
    </style>

    <button>Test</button>
`

class LButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({'mode': 'open'});
    }

    attributeChangedCallback(attrName: string, oldValue: any, newValue: any) {
        if (oldValue !== newValue) {
            // @ts-ignore
            this[attrName] = this.hasAttribute(attrName);
        }
    }

    connectedCallback() {
        this.render();
    }
    
    render() {
        const templateContent = document.importNode(template.content, true);
        // @ts-ignore
        this.shadowRoot.appendChild(templateContent);
    }
}

window.customElements.define('l-button', LButton);
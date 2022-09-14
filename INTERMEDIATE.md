# Web Components
## Intermediate/Advanced Topics

### Review: Web Component Lifecycle Callbacks
* `connectedCallback()`
* `disconnectedCallback()`
* `adoptedCallback()`
* `attributeChangedCallback(attr, oldVal, newVal)`
  * `static get observedAttributes() { return ['first','second']; }`

### Nuance: Bigger View of the WC Lifecycle
* [Given This Code](https://codepen.io/kamiquasi/pen/VwXNvqw)
* ```html
  <wc-timeline first="first" second="second"></wc-timeline>
  <wc-ext-timeline first="first"></wc-ext-timeline>
  ```
* 
    1. Code **before** WC class declared
    2. WC-TIMELINE **Constructor**
    3. WC-TIMELINE **Attribute Changed**: first
    4. WC-TIMELINE **Attribute Changed**: second
    5. WC-TIMELINE **ConnectedCallback**
    6. WC-TIMELINE **Attribute Changed**: third
    7. Code **after** WC Element Defined on Window
    8. WC-EXT-TIMELINE **Constructor**
    9. WC-EXT-TIMELINE **Attribute Changed**: first
    10. WC-EXT-TIMELINE **ConnectedCallback**
    11. WC-EXT-TIMELINE **Attribute Changed**: third
    12. Code **after** WC-Ext Element Defined on Window

### Assessing Component Developer Experience
* Quick Tests:
    * Property or Behavior Changes
    * Extension
    * Multiple Instances
    * Interaction via code (or not)
* Things to Watch for:
    * Hoisting ( functions: **YES** | classes: **NO** )
    * Class-level v. Instance-level properties and functions
    * Magic Values/Behaviors (e.g. - tag name)
    * Repeated Hard-coded Values ("light","dark")
    * Extra/Redundant/Inefficient/Confusing Code
* Fixes
    * Reduce
    * Reuse
    * Recycle

### Fun
* ```js  
  static get tag() { 
    return this.name
        .replace(/([a-z](?=[A-Z])|[A-Z]+(?=[A-Z][a-z]))/g, 
            (m, g) => `${m}-`)
        .toLowerCase(); 
  }
  ```
* ```js
  function* toggle(modes) { 
      let idx = 0; 
      while(true) { 
          yield modes[idx]; 
          idx = idx+1 < modes.length ? idx+1 : 0;
      } 
  }
  ```
* ```js
  camelCase(str: String, to: boolean = true) {
      return to ? 
        str.replace(/-([a-z])/g, (m, g) => g.toUpperCase()) : 
        str.replace(/([a-z][A-Z])/g, (m, g) => `${g[0]}-${g[1].toLowerCase()}`);
  }
  ```

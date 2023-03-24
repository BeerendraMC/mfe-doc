# Creating MFE in Angular using Web Components

Angular is a popular framework for building web applications. It provides a powerful set of tools for building complex, interactive applications. Angular can also be used to create micro frontends using the web components architecture.

To create a web component in Angular, we can use the @angular/elements package. This package provides a way of converting Angular components into web components that can be used in any web application.

Here's a step-by-step guide to creating a micro frontend in Angular using web components:

### Step 1: Create an Angular application

First, we need to create an Angular application that will contain our web component. You can create a new Angular application using the Angular CLI:

`ng new mfe-app`

### Step 2: Create an Angular Component

Now we need to create an Angular component that we want to convert into a web component. For this example, we will create a simple component that displays a greeting:

```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-greeting',
  template: `Hello, {{ name }}! <br />
    <button (click)="onGetGreetingsClick()">Get greetings</button>`,
})
export class GreetingComponent {
  @Input() name!: string;
  @Output() getGreetingClick = new EventEmitter<string>();

  onGetGreetingsClick(): void {
    this.getGreetingClick.emit(`Hello, ${this.name}!`);
  }
}
```

This component takes a name input, displays a greeting and emits an event on button click.

### Step 3: Convert the Angular Component into a Web Component

The `@angular/elements` package provides a way to convert Angular components into custom elements that can be used outside of Angular. It does this by exposing the `createCustomElement` function, which takes an Angular component and converts it into a custom element that can be used with vanilla JavaScript, React, Vue, and other frameworks.

Let's first install the package `@angular/elements`:

`npm install @angular/elements --save`

Next, we need to convert the Angular component into a web component. We can do this using the **createCustomElement** function from the **@angular/elements** package. Here's how we do it in the root module:

```typescript
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { GreetingComponent } from './greeting.component';

@NgModule({
  declarations: [GreetingComponent],
  imports: [BrowserModule],
  entryComponents: [GreetingComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const el = createCustomElement(GreetingComponent, {
      injector: this.injector,
    });
    customElements.define('my-greeting', el);
  }
}
```

This code converts our GreetingComponent into a web component with the name my-greeting.

### Step 4: Build the component

When we build an angular application we get 3 javascript files **main.js**, **polyfill.js** and **runtime.js**. For mfe we need to merge these three files using the below script. Create a file called **build-elements.js** and add below code in it and install `fs-extra` and `concat` npm packages as dev dependencies: `npm i -D fs-extra concat`

```javascript
const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  try {
    const project = process.argv.slice(2)[0];
    const srcPath = `./dist/${project}`;
    const dstPath = `./elements/${project}`;
    const files_es_2015 = [
      `${srcPath}/runtime.js`,
      `${srcPath}/polyfills.js`,
      `${srcPath}/main.js`,
    ];

    await fs.ensureDir(dstPath);
    await concat(files_es_2015, `${dstPath}/${project}-element.js`);
    await fs.copyFile(
      `${srcPath}/styles.css`,
      `${dstPath}/${project}-styles.css`
    );

    await fs.ensureDir(`${srcPath}/assets`);
    await fs.copy(`${srcPath}/assets`, `${dstPath}/assets`);
    console.info('Elements built successfully');
  } catch (e) {
    console.error('Error while building elements', e);
  }
})();
```

Add below script in `package.json`

```json
"build:element": "ng build --configuration prod --output-hashing none && node build-elements.js mfe-app"
```

Then run `npm run build:element` command to get the mfe files (`mfe-app-element.js` and `mfe-app-styles.css` in our case) in the **elements** directory which needs to be deployed.

### Step 5: Use the web component

Reference the `js` and `css` files of the mfe in the host application and use the custom element (`my-greeting` in our case) as a normal html tag:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <script src="./mfe-app-element.js" type="text/javascript"></script>
    <link href="./mfe-app-styles.css" rel="stylesheet" />
  </head>
  <body>
    <my-greeting name="Beerendra"></my-greeting>
    <script>
      const mfeEl = document.querySelector('my-greeting');
      mfeEl.addEventListener('getGreetingClick', (event) => {
        console.log(event.detail);
      });
    </script>
  </body>
</html>
```

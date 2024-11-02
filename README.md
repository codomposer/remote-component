# Remote Component Starter Kit

Starter Kit for quickly creating a Remote React Component that can be Remotely Loaded by `@paciolan/remote-component`.

## Getting Started

Clone the repository and initialize your project

```bash
# create new repo
mkdir my-component
cd my-component
git init

# pull the remote component starter kit
git pull https://github.com/hivenetwork-ai/hive-agent-widget-template.git --depth=1
git commit --amend -m "chore: 🛠️ pull remote-component-starter"

# install dependencies
npm ci
```

Modify `package.json` and replace the starter kit values with your own.

- set `name` to the name of your project.
- set `description` to describe your project.
- set `repository` to point to your repository.
- set `license` to reflect the license of your project.

## Files

There are a few important files, one set is used for the bundle, another set for local development.

- `src/index.js` - Entrypoint of the Remote Component. The component needs to be the `default` export.
- `src/webpack-dev-server.js` - Entrypoint for `webpack-dev-server`. This is only used for development and will not be included in the final bundle.
- `src/index.html` - HTML for `webpack-dev-server`. This is only used for development and will not be included in the final bundle.

## Building

The bundle will be output to the `dist/main.js`.

```bash
npm run build
```

Create a development build for easier debugging.

```bash
npm run build:dev
```

## Debugging

The component can be debugged locally by first starting `webpack-dev-server`.

```bash
npm run start
```

Now (using VSCODE), go to the Debug tab, select "Launch Chrome" and start the debugger (F5).

You should now be able to set breakpoints and step through the code.

## Changing the Output

The bundle as a default will be output to the `dist/main.js`. This can be updated by changing the following two files:

1. `entry` in `webpack-main.config.js`. Update the `main` property to a desired output name.

```javascript
module.exports = {
  ...
  entry: {
    main: "./src/index.js"
  },
  ...
};
```

2.  `url` variable in `src/webpac-dev-server.js`

```javascript
// different paths for localhost vs s3
const url =
  global.location.hostname === "localhost" ? "/dist/main.js" : "main.js";
```

## External Dependencies

The Remote Component is self contained with all of it's dependencies bundled with webpack. Any dependencies that will be provided by the app should be marked as `external` in the `webpack.config.js`.

In this example, `react` and `prop-types` are added to `externals`. They will not be included in the bundle. The web application is expected to provide these dependencies.

```javascript
module.exports = {
  output: {
    libraryTarget: "commonjs"
  },
  externals: {
    react: "react",
    "prop-types": "prop-types"
  }
};
```

## Making remote components

Please create the remote component in the `./src/components` directoty that you are going to create.

The component is normal functional react component.

The props should be data object that involves sub props like below.

```tsx
interface Props {
  data: {
    title: string;
  };
}

const Hello: React.FC<Props> = ({ data }) => {
  return <div>Hello {data.title}</div>;
};

export default Hello;
```

### Component Styling

`Note:` Don't use external css files `(e.g., styles.css)`

1. Using CSS-in-JS Libraries (e.g., `styled-components`)

   - Install style-components
     ```bash
     npm install styled-components
     ```
   - Define styles using styled-components:

     ```tsx
     import React from "react";
     import styled from "styled-components";

     const Container = styled.div`
       background-color: #f0f0f0;
       padding: 20px;
     `;

     const Title = styled.h1`
       font-size: 24px;
       color: #333;
     `;

     const MyComponent = () => {
       return (
         <Container>
           <Title>Hello, World!</Title>
         </Container>
       );
     };

     export default MyComponent;
     ```

2. Using Inline Styles

   - Define styles as an object and use them in JSX:

     ```tsx
     import React from "react";

     const styles = {
       container: {
         backgroundColor: "#f0f0f0",
         padding: "20px"
       },
       title: {
         fontSize: "24px",
         color: "#333"
       }
     };

     const MyComponent = () => {
       return (
         <div style={styles.container}>
           <h1 style={styles.title}>Hello, World!</h1>
         </div>
       );
     };

     export default MyComponent;
     ```

## Commiting

Commits are added to the repository with commitizen compatible `git-cz`.

```bash
# stage all changes
git add .

# run commitizen
npm run cz
```

## Contributors

(Initialized) Joel Thoms (https://github.com/joelnet)

(Updated for current version) Codomposer (https://github.com/codomposer/)

Icon made by [Freepik](https://www.flaticon.com/authors/freepik) from [www.flaticon.com](www.flaticon.com)

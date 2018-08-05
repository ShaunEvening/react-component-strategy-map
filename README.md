# react-componet-strategy-map

A react component for rendering the correct component from a strategy map based on the given key.

## How to use

Add to your `package.json`:

```bash
yarn add react-component-strategy-map
```

Import and use:

```ts
import { RenderComponentStrategy } from 'react-component-strategy-map';

const componentStrategyMap = {
  someKey: SomeComponent,
  someOtherKey: SomeOtherComponent,
};

const MainComponent = () => (
  <RenderComponentStrategy
    componentStrategy={componentStrategyMap}
    componentKey="someKey"
    renderDefault={() => <div>Rendered default</div>}
  />
);
```

### Available Props:

|       Prop        | Optional |                   Type                    | Default |                                                                 Description                                                                 |
| :---------------: | :------: | :---------------------------------------: | :-----: | :-----------------------------------------------------------------------------------------------------------------------------------------: |
| componentStrategy |  false   | {[key: string]: React.ComponentType<any>} |   {}    |                                     Map of components used to render based on the given "componentKey"                                      |
|   componentKey    |  false   |                  string                   |   ""    |                                       key to the desired component to render from "componentStrategy"                                       |
|  componentProps   |   true   |                  object                   |   {}    |                                          And object of props to spread onto the rendered component                                          |
|   renderDefault   |   true   |         React.ComponentType<any>          |  null   | React component to render if "componentKey" does not match a key in "componentStrategy". If no default is given, component will return null |

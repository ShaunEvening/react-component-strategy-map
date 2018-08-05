import * as React from 'react';
import { shallow, mount } from 'enzyme';

import { RenderComponentStrategy } from './render-component-strategy';

interface HeaderWithCopyProps {
  copy: string;
}

const componentMap = {
  headerOne: () => <h1>This is a test</h1>,
  headerWithCopy: ({ copy }: HeaderWithCopyProps) => <h1>{copy}</h1>,
};

const SomeDefault = () => <div>I'm a default</div>;

describe('<RenderComponentStrategy />', () => {
  it('DOES NOT CRASH: It renders without crashing', () => {
    shallow(<RenderComponentStrategy componentStrategy={componentMap} componentKey="" />);
  });

  it('RENDER COMPONENT: It should render the component from the componentStrategy map matching from the given componentKey', () => {
    const rendered = mount(<RenderComponentStrategy componentStrategy={componentMap} componentKey="headerOne" />);
    const expected = rendered.contains(<h1>This is a test</h1>);
    expect(expected).toBeTruthy();
  });

  it('PASS PROPS: It should pass props to the rendered component from componentProps', () => {
    const componentKey = 'headerWithCopy';
    const headerProps = { copy: 'I passed props' };
    const rendered = mount(
      <RenderComponentStrategy
        componentStrategy={componentMap}
        componentKey={componentKey}
        componentProps={headerProps}
      />,
    );

    const ExpectedComponent = componentMap[componentKey];
    const expected = rendered.contains(<ExpectedComponent {...headerProps} />);
    expect(expected).toBeTruthy();
  });

  it('RENDERS GIVEN DEFAULT: when "componentKey" does not match a key in the "componentMap" it should render the "renderDefault" prop', () => {
    const rendered = mount(
      <RenderComponentStrategy componentStrategy={componentMap} componentKey="foo" renderDefault={SomeDefault} />,
    );
    const expected = rendered.contains(<SomeDefault />);
    expect(expected).toBeTruthy();
  });

  it('RENDERS NULL: when no "renderDefault" is given and component should render default, render nothing', () => {
    const rendered = mount(<RenderComponentStrategy componentStrategy={componentMap} componentKey="foo" />);
    const expected = rendered.isEmpty();
    expect(expected).toBeFalsy();
  });
});

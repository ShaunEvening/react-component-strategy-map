import * as React from 'react';

interface RenderComponentStrategyProps {
  componentStrategy: { [key: string]: React.ComponentType<any> };
  componentKey: string;
  componentProps?: object;
  renderDefault?: React.ComponentType<any>;
}

export const RenderComponentStrategy: React.ComponentType<RenderComponentStrategyProps> = ({
  componentStrategy = {},
  componentKey = '',
  componentProps = {},
  renderDefault = null,
}) => {
  const Component = componentStrategy[componentKey] || renderDefault;
  return Component ? <Component {...componentProps} /> : null;
};

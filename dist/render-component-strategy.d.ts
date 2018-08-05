import * as React from 'react';
interface RenderComponentStrategyProps {
  componentStrategy: {
    [key: string]: React.ComponentType<any>;
  };
  componentKey: string;
  componentProps?: object;
  renderDefault?: React.ComponentType<any>;
}
export declare const RenderComponentStrategy: React.ComponentType<RenderComponentStrategyProps>;
export {};

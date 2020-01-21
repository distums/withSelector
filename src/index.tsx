import React from "react";

const identity = arg => arg;

export default function withSelector(Component) {
  return function(selector: Function) {
    const selectorForProps =
      typeof selector === "function" ? selector : identity;
    return React.forwardRef((props, ref) => {
      const nextProps = selectorForProps(props);
      return <Component ref={ref} {...nextProps} />;
    });
  };
}

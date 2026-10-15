// Manual mock of mobx-react for jest: the package's published main build
// requires react-dom (a web-only package), which the real app never loads
// thanks to the package's react-native field that Metro honors and jest
// does not. The app only uses Provider to pass the root store, and no
// screen consumes it via mobx-react, so a passthrough is enough for tests.
const React = require('react');

const Provider = ({children}) =>
  React.createElement(React.Fragment, null, children);

module.exports = {
  Provider,
  observer: component => component,
  inject: () => component => component,
};

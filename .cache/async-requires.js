// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": require("gatsby-module-loader?name=component---node-modules-gatsby-plugin-offline-app-shell-js!/app/my-react-app/www/node_modules/gatsby-plugin-offline/app-shell.js"),
  "component---src-templates-doc-jsx": require("gatsby-module-loader?name=component---src-templates-doc-jsx!/app/my-react-app/www/src/templates/doc.jsx"),
  "component---src-pages-index-jsx": require("gatsby-module-loader?name=component---src-pages-index-jsx!/app/my-react-app/www/src/pages/index.jsx")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/app/my-react-app/www/.cache/json/layout-index.json"),
  "offline-plugin-app-shell-fallback.json": require("gatsby-module-loader?name=path---offline-plugin-app-shell-fallback!/app/my-react-app/www/.cache/json/offline-plugin-app-shell-fallback.json"),
  "configuration.json": require("gatsby-module-loader?name=path---configuration!/app/my-react-app/www/.cache/json/configuration.json"),
  "docs.json": require("gatsby-module-loader?name=path---docs!/app/my-react-app/www/.cache/json/docs.json"),
  "getting-started.json": require("gatsby-module-loader?name=path---getting-started!/app/my-react-app/www/.cache/json/getting-started.json"),
  "react.json": require("gatsby-module-loader?name=path---react!/app/my-react-app/www/.cache/json/react.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/app/my-react-app/www/.cache/json/index.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-jsx!/app/my-react-app/www/.cache/layouts/index.js")
}
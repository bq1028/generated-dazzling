// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/app/my-react-app/www/.cache/layouts/index.js"))
}

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": preferDefault(require("/app/my-react-app/www/node_modules/gatsby-plugin-offline/app-shell.js")),
  "component---src-templates-doc-jsx": preferDefault(require("/app/my-react-app/www/src/templates/doc.jsx")),
  "component---src-pages-index-jsx": preferDefault(require("/app/my-react-app/www/src/pages/index.jsx"))
}

exports.json = {
  "layout-index.json": require("/app/my-react-app/www/.cache/json/layout-index.json"),
  "offline-plugin-app-shell-fallback.json": require("/app/my-react-app/www/.cache/json/offline-plugin-app-shell-fallback.json"),
  "configuration.json": require("/app/my-react-app/www/.cache/json/configuration.json"),
  "docs.json": require("/app/my-react-app/www/.cache/json/docs.json"),
  "getting-started.json": require("/app/my-react-app/www/.cache/json/getting-started.json"),
  "react.json": require("/app/my-react-app/www/.cache/json/react.json"),
  "index.json": require("/app/my-react-app/www/.cache/json/index.json")
}
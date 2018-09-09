// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/app/my-react-app/www/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-doc-jsx": preferDefault(require("/app/my-react-app/www/src/templates/doc.jsx")),
  "component---cache-dev-404-page-js": preferDefault(require("/app/my-react-app/www/.cache/dev-404-page.js")),
  "component---src-pages-index-jsx": preferDefault(require("/app/my-react-app/www/src/pages/index.jsx"))
}

exports.json = {
  "layout-index.json": require("/app/my-react-app/www/.cache/json/layout-index.json"),
  "configuration.json": require("/app/my-react-app/www/.cache/json/configuration.json"),
  "docs.json": require("/app/my-react-app/www/.cache/json/docs.json"),
  "getting-started.json": require("/app/my-react-app/www/.cache/json/getting-started.json"),
  "react.json": require("/app/my-react-app/www/.cache/json/react.json"),
  "dev-404-page.json": require("/app/my-react-app/www/.cache/json/dev-404-page.json"),
  "index.json": require("/app/my-react-app/www/.cache/json/index.json")
}
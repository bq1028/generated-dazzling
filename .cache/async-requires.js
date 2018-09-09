// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-doc-jsx": require("gatsby-module-loader?name=component---src-templates-doc-jsx!/app/my-react-app/www/src/templates/doc.jsx"),
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/app/my-react-app/www/.cache/dev-404-page.js"),
  "component---src-pages-index-jsx": require("gatsby-module-loader?name=component---src-pages-index-jsx!/app/my-react-app/www/src/pages/index.jsx")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/app/my-react-app/www/.cache/json/layout-index.json"),
  "configuration.json": require("gatsby-module-loader?name=path---configuration!/app/my-react-app/www/.cache/json/configuration.json"),
  "docs.json": require("gatsby-module-loader?name=path---docs!/app/my-react-app/www/.cache/json/docs.json"),
  "getting-started.json": require("gatsby-module-loader?name=path---getting-started!/app/my-react-app/www/.cache/json/getting-started.json"),
  "react.json": require("gatsby-module-loader?name=path---react!/app/my-react-app/www/.cache/json/react.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/app/my-react-app/www/.cache/json/dev-404-page.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/app/my-react-app/www/.cache/json/index.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-jsx!/app/my-react-app/www/.cache/layouts/index.js")
}
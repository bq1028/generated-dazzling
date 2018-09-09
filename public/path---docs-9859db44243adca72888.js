webpackJsonp([0x7733ec7aff49],{398:function(e,t){e.exports={data:{allPostTitles:{edges:[{node:{frontmatter:{title:"Configuration",doc:2,section:1,type:"doc"},fields:{slug:"/configuration"}}},{node:{frontmatter:{title:"Docs",doc:4,section:1,type:"doc"},fields:{slug:"/docs"}}},{node:{frontmatter:{title:"Getting Started",doc:1,section:1,type:"doc"},fields:{slug:"/getting-started"}}},{node:{frontmatter:{title:"React",doc:3,section:1,type:"doc"},fields:{slug:"/react"}}}]},postBySlug:{html:'<p>Dazzling has a seamless Docs feature (will be generated by default) so that can keep your docs in your project\'s root while having it pulled, formatted, and generated as a clean documentation website for your users.</p>\n<h2 id="editing-content"><a href="#editing-content" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Editing Content</h2>\n<p>Here\'s how Dazzling treats your project layout:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">my-project/\n  src/      &lt;--- your code\n  content/\n    docs/   &lt;--- Markdown content\n  www/      &lt;--- Dazzling</code></pre>\n      </div>\n<p>Here\'s a sample document, in markdown (you get default docs to play with):</p>\n<div class="gatsby-highlight">\n      <pre class="language-markdown"><code class="language-markdown"><span class="token hr punctuation">---</span>\ntitle: Configuration\ndoc: 2\nsection: 1\ncategory: "tech"\n<span class="token title important">type: "doc"\n<span class="token punctuation">---</span></span>\n\nDazzling places your website configuration in <span class="token code keyword">`site-config.js`</span>. This is where you personalize all asprects of the Dazzling website, without taking advantage of building new features in React (we\'ll get to that!).</code></pre>\n      </div>\n<p><code class="language-text">title</code> is both a title and a slug, so that if you choose "Getting Started" it will be converted to a <code class="language-text">getting-started</code> slug that you can use to hotlink other documentation areas.</p>\n<p><code class="language-text">section</code> and <code class="language-text">doc</code> are numeric index values for the number of section and the document in the hirarchy of sections and documents, all starting from the index <code class="language-text">1</code> (<em>not</em> zero based).</p>\n<p>As you\'ll see the menu will be generated automatically based on how you decide to order your docs and sections.</p>\n<p>The <code class="language-text">category</code> and <code class="language-text">type</code> fields are reserved for later use.</p>\n<h2 id="naming-sections"><a href="#naming-sections" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Naming Sections</h2>\n<p>Edit <code class="language-text">content/docs/sections.json</code> to name your various sections.</p>\n<h2 id="search"><a href="#search" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Search</h2>\n<p>If you want full-text search, you got it. <a href="https://www.algolia.com/">Algolia</a> offers a free acount to open source projects, and Dazzling supports only that provider (pull requests for more providers are welcome!).</p>\n<p>After you create a new account it\'s just a matter of plugging the Algolia configuration into your <code class="language-text">site-config.js</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">docSearch<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    apiKey<span class="token punctuation">:</span> <span class="token string">\'xxxxxx\'</span><span class="token punctuation">,</span>\n    indexName<span class="token punctuation">:</span> <span class="token string">\'fixme\'</span><span class="token punctuation">,</span>\n    inputSelector<span class="token punctuation">:</span> <span class="token string">\'#algolia-doc-search\'</span><span class="token punctuation">,</span>\n    debug<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token comment">// Set debug to true if you want to inspect the dropdown</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span></code></pre>\n      </div>',timeToRead:1,excerpt:"Dazzling has a seamless Docs feature (will be generated by default) so that can keep your docs in your project's root while having it pulled…",frontmatter:{title:"Docs"},fields:{slug:"/docs"}}},pathContext:{slug:"/docs"}}}});
//# sourceMappingURL=path---docs-9859db44243adca72888.js.map
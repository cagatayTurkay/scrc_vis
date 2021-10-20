// https://observablehq.com/@mootari/environment@363
export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Environment

Find out what environment your notebook is running in.

### Usage

Available imports:
~~~js
import {ui, page, env} from '@mootari/environment'
~~~

Checking the UI context:
~~~js
ui === 'embed'
~~~

Checking the Observable page:
~~~js
page === 'editor'
~~~
Explicit checks:
~~~js
env('classic') || env('next')
~~~

`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## Feature overview`
)});
  main.variable(observer("summaryTable")).define("summaryTable", ["html","env","DOM"], function(html,env,DOM)
{
  const table = keys => html`<table style="width:auto;margin-right:3em">
    ${Object.entries(keys).map(([key, desc]) => html`<tr>
      <td>${!env(key) ? '' : `✔`}</td>
      <td><pre>${DOM.text(`"${key}"`)}</pre><p>${DOM.text(desc)}</p></td>
  `)}`;
  const ns = DOM.uid().id, __ns__ = `.${ns}`;

  return html`<div class="${ns}">
    <div><h4><code>ui =</code></h4>
    ${table({
      'classic': 'Observable\'s classic editor UI.',
      'next': 'Observable\'s new editor UI.',
      'embed': 'Observable\'s iframe embed.',
      'preview': 'Observable\'s Runtime embed preview.',
      'custom': 'Unknown embed/execution context.',
    })}
    </div>
    <div><h4><code>page =</code></h4>
    ${table({
      'editor': 'Default editor view.',
      'version': 'A specific version is viewed.',
      'compare': 'Comparison view.',
    })}
    </div>

    <style>
${__ns__} {
  ---s: 20px;
  display: flex;
  align-items: start;
}
${__ns__} > div {
  margin-right: 20px;
  flex: 1;
}
${__ns__} h4 {
  font-family: var(--sans-serif);
  font-size: inherit;
  font-weight: normal;
  border-bottom: 1px solid #aaa;
  padding-bottom: 10px;
  line-height: 23px;
}
${__ns__} tr {
  border: none;
}
${__ns__} td:nth-child(1) {
  padding-right: 10px;
  min-width: var(---s);
  height: calc(1.25 * var(---s));
  line-height: var(---s);
  text-align: right;
  color: green;
  font-size: var(---s);
}
${__ns__} td:nth-child(2) pre {
  font: var(--monospace-font);
  margin: 0;
  margin-bottom: .5em;
}
${__ns__} td:nth-child(2) p {
  margin: 0;
  margin-bottom: 1em;
}
  `;
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`---
## API`
)});
  main.variable(observer("env")).define("env", ["isHosted","matchesPath","hasMinimalEmbedHead","details","isObservable","matchesBasePath"], function(isHosted,matchesPath,hasMinimalEmbedHead,details,isObservable,matchesBasePath){return(
function env(key) {
  switch(key) {
    case 'classic':
      return isHosted && matchesPath('/worker/worker.');
    case 'next':
      return isHosted && matchesPath('/next/worker-');
    case 'embed':
      return isHosted && matchesPath('/worker/embedworker.') && !hasMinimalEmbedHead();
    case 'preview':
      return isHosted && matchesPath('/worker/embedworker.') && hasMinimalEmbedHead();
    case 'custom':
      return !isHosted;
    case 'editor':
      return details.path != null && details.version == null;
    case 'version':
      return details.version != null;
    case 'compare':
      return isObservable && matchesBasePath('/compare/');
    default:
      throw Error(`Invalid key "${key}".`);
  }
}
)});
  main.variable(observer("ui")).define("ui", ["env"], function(env){return(
['classic', 'next', 'embed', 'custom', 'preview'].find(env)
)});
  main.variable(observer("page")).define("page", ["env"], function(env){return(
['editor', 'version', 'compare'].find(env)
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## Data`
)});
  main.variable(observer("isHosted")).define("isHosted", function(){return(
document.location.hostname.endsWith('.observableusercontent.com')
)});
  main.variable(observer("isObservable")).define("isObservable", ["baseURL"], function(baseURL){return(
baseURL.hostname === 'observablehq.com'
)});
  main.variable(observer("baseURL")).define("baseURL", function(){return(
new URL(document.baseURI)
)});
  main.variable(observer("details")).define("details", function(){return(
(document.baseURI.match(new RegExp(
  '^https:\/\/observablehq.com\/'
  + '(?<path>'
  + 'd\/[a-f0-9]{16}'
  + '|'
  + '@[0-9a-z-_]{2,}\/[0-9a-z-_]{1,}(?:\/\\d+)?'
  + ')'
  + '(?:@(?<version>\\d+))?'
  + '(?:[?#]|$)'
)) || {}).groups || {}
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## Helpers`
)});
  main.variable(observer("hasMinimalEmbedHead")).define("hasMinimalEmbedHead", function(){return(
function hasMinimalEmbedHead() {
  const c = document.head.children;
  // Observable's Javascript Embed Preview lacks all default styles.
  // Here the <base> element is the second child element in <head>.
  return c.length > 1 && c[1].tagName === 'BASE';
}
)});
  main.variable(observer("matchesPath")).define("matchesPath", function(){return(
function matchesPath(pattern) {
  return typeof pattern === 'object' && pattern.constructor.name === 'RegExp'
    ? pattern.test(document.location.pathname)
    : document.location.pathname.startsWith(pattern);    
}
)});
  main.variable(observer("matchesBasePath")).define("matchesBasePath", ["baseURL"], function(baseURL){return(
function matchesBasePath(pattern) {
  return typeof pattern === 'object' && pattern.constructor.name === 'RegExp'
    ? pattern.test(baseURL.pathname)
    : baseURL.pathname.startsWith(pattern);    
}
)});
  return main;
}

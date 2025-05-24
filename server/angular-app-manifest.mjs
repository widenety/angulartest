
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angulartest/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angulartest"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 511, hash: 'b81ef71f6c27df30f2febb1b75642b9dc039ea84694a683734b52507860b700e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1028, hash: '7df73f699225ba0eb3c18aa1db2fd1f80db9dafd3742c3ef27daeba5af313748', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20854, hash: '639bb89f56ba3d3383c1e51e3cf980afb51a8db1860ad8cc74e228add683d4d7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};

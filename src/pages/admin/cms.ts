import CMS from 'netlify-cms-app';
import GlobalStyles from '../../styles/base/base.css?inline';
import collections from '../../collections';
import { ArticlePreview } from '../../components/page'

CMS.init({
  config: {
    locale: 'ru',
    backend: {
      name: 'git-gateway',
      branch: 'latest',
    },
    local_backend: true,
    media_folder: 'public/assets/blog',
    public_folder: 'assets/blog',
    collections: collections.map(({ collection }) => collection),
  },
})

/**
 * Another drawback of using Netlify CMS is that it registers all preview
 * styles globally — not scoped to a specific collection.
 * You’ve lost Astro component’s scoped styling anyway by being forced
 * to use React, but just be extra careful.
 *
 * The (undocumented?) `raw: true` setting treats the first argument as
 * a raw CSS string to inject instead of as a URL to load a stylesheet from.
 */
CMS.registerPreviewStyle(GlobalStyles, { raw: true });
// CMS.registerWidget("page", PageControl, ArticlePreview);
CMS.registerPreviewTemplate("pages", ArticlePreview);
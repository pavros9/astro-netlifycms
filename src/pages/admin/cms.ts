import CMS from 'netlify-cms-app';
import GlobalStyles from '../../styles/base/base.css?inline';
import collections from '../../collections';
import { PagePreview } from '../../components/Preview/Page'
import { NavigationPreview } from '../../components/Preview/Navigation'

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


CMS.registerPreviewStyle(GlobalStyles, { raw: true });

CMS.registerPreviewTemplate("pages", PagePreview);
CMS.registerPreviewTemplate("site", NavigationPreview);

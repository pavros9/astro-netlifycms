import CMS   from 'netlify-cms-app';
import GlobalStyles from '../../styles/base/base.css?inline';
import collections from '../../collections';
import { PagePreview } from '../../components/Preview/Page'
import { NavigationPreview } from '../../components/Preview/Navigation'
import { useEffect} from 'react'


const Admin = () => {
    useEffect(() => {
        CMS.init({
            config: {
                locale: 'ru',
                backend: {
                    name: 'github',
                    repo: 'pavros9/astro-netlifycms',
                    branch: 'master',
                    base_url: 'https://auth-xi8z.onrender.com'
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
    }, [])
    return <></>
}

export default Admin;
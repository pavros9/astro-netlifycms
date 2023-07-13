import CMS   from 'netlify-cms-app';
import GlobalStyles from '@app/styles/global.css?inline';
import HeaderStyle from '@shared/ui/Header/Header.module.css?inline'
import DropDownMenuStyle from '@shared/ui/Header/DropDownMenu/DropDownMenu.css?inline';
import { collections } from '@collections/index';
import { PagePreview } from '@shared/ui/PreviewNetlify/Page'
import { NavigationPreview } from '@shared/ui/PreviewNetlify/Navigation'
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
                collections: collections
            },
        })
            
            
        CMS.registerPreviewStyle(GlobalStyles, { raw: true });
        CMS.registerPreviewStyle(HeaderStyle, { raw: true });  
        CMS.registerPreviewStyle(DropDownMenuStyle, { raw: true }); 


        CMS.registerPreviewTemplate("pages", PagePreview);
        CMS.registerPreviewTemplate("site", NavigationPreview);
    }, [])
    return <></>
}

export default Admin;
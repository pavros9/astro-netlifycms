import { removeIndex } from '@utils/removeIndex';
import './DropDownMenuTemplate.css'

export interface MenuItem {
    uri: string,
    label: string,
    dropdown: Dropdown[]
}

interface Dropdown {
    uri_dropdown: string,
    link_dropdown: string
}

interface DropDownMenuTemplateProps {
    menu_item: MenuItem
}

export const DropDownMenuTemplate = (props: DropDownMenuTemplateProps) => {
    const {
        menu_item :{
            uri,
            label,
            dropdown
        }
    } = props;

    const uriFormat = removeIndex(uri);

    return <>
        <li className="dropdown">
            <a href={`/` + (uriFormat === 'home' ? "" : uriFormat)}
                className="dropbtn text-sm text-gray-400 hover:text-gray-500"
            >{label}</a>
            <div className="dropdown-content">
                {dropdown?.map((item, index) => (
                    <a href={item.uri_dropdown} key={index}>{item.link_dropdown}</a>))
                }
            </div>
        </li>
    </>
}
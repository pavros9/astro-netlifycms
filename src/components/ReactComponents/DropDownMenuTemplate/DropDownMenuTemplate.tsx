import { removeIndex } from '@utils/removeIndex';
import './DropDownMenuTemplate.css'

export const DropDownMenuTemplate = ({menu_item}) => {
    const uri = removeIndex(menu_item.uri);

    return <>
        <li className="dropdown">
            <a href={`/` + (menu_item.uri === 'home' ? "" : uri)}
                className="dropbtn text-sm text-gray-400 hover:text-gray-500"
            >{menu_item.label}</a>
            <div className="dropdown-content">
                {menu_item.dropdown?.map((item) => (
                <a href={item.uri_dropdown}>{item.link_dropdown}</a>))
                }
            </div>
        </li>
    </>
}
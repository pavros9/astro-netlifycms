import { HeaderTemplate } from "../ReactComponents/HeaderTemplate/HeaderTemplate";

export const NavigationPreview = ({entry}) => {
    const data = entry.getIn([ 'data'] ).toJS();

    return <div>
        <h2 className="pageTitle">{data.domain}</h2>
         <HeaderTemplate navigation={data.primaryNav}/>
    </div>
}
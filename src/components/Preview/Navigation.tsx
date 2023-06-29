import { HeaderTemplate } from "../ReactComponents/HeaderTemplate/HeaderTemplate";

interface NavigationPreviewProps {
    entry: any
}

export const NavigationPreview = (props: NavigationPreviewProps) => {
    const { entry } = props;
    const data = entry.getIn([ 'data'] ).toJS();

    return <div>
        <h2 className="pageTitle">{data.domain}</h2>
        <HeaderTemplate navigation={data.primaryNav}/>
    </div>
}
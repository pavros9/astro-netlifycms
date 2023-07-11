import { Header } from "@shared/ui/Header/Header"

interface NavigationPreviewProps {
    entry: any
}

export const NavigationPreview = (props: NavigationPreviewProps) => {
    const { entry } = props;
    const data = entry.getIn([ 'data'] ).toJS();

    return <div>
        <h2 className="page-title">{data.domain}</h2>
        <Header navigation={data.primaryNav}/>
    </div>
}
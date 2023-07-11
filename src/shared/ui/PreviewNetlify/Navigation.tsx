import { Header } from "@shared/ui/Header/Header"

interface NavigationPreviewProps {
    entry: any
}

export const NavigationPreview = (props: NavigationPreviewProps) => {
    const { entry } = props;
    const data = entry.getIn([ 'data'] ).toJS();

    return <div>
        <Header navigation={data.primaryNav}/>
    </div>
}
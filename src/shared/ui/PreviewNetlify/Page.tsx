import { Mapper } from 'src/pages/Mapper/Mapper'

interface PagePreviewProps {
    entry: any
}

export const PagePreview = (props: PagePreviewProps) => {
    const { entry } = props

    const data = entry.getIn(['data']).toJS()

    return (
        <>
            <div className="page">{data.title}</div>
            <Mapper items={data.page} />
        </>
    )
}

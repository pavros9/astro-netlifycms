import { Mapper } from "src/pages/Mapper/Mapper";

export const PagePreview = ({entry, widgetsFor }) => {
    const data = entry.getIn([ 'data'] ).toJS();
    console.log(data)
    return (<>
        <div className="page">
            {data.title}
        </div>
        <Mapper pages={data.page}/>
    </>)
}
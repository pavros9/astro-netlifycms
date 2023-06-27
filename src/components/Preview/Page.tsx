
export const PagePreview = ({entry, widgetsFor }) => {
    const data = entry.getIn([ 'data'] ).toJS();
    console.log(data)
    return (<>
        <div className="page">
            {data.title}
        </div>
       <ul>
            <li>{data.page[0]?.type}</li>
            {data.page.map((page, index) => <li key={index}>{page.firstName}</li>)}
       </ul>
    </>)
}
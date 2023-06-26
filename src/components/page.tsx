
export const ArticlePreview = ({entry, widgetsFor }) => {
    const data = entry.getIn([ 'data'] ).toJS();
    console.log(data)
    return (<>
        <div className="page">
            {data.title}
        </div>
       <ul>
            <li>{data.page[0].type}</li>
            {data.page.map((page) => <li>{page.firstName}</li>)}
       </ul>
    </>)
}


export const PageControl = (props) => {

    const {className, children} = props;
    
    return <div className={className}>
        {children}
    </div>
}
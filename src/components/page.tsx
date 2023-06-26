
export const ArticlePreview = ({entry, widgetsFor }) => {
    const data = entry.getIn([ 'data'] ).toJS();

    return (<>
        <div className="page">
            {data.title}
        </div>
       <ul>
            <li>{data.page[0].type}</li>
            <li>{data.page[0].firstName}</li>
       </ul>
    </>)
}


export const PageControl = (props) => {

    const {className, children} = props;
    
    return <div className={className}>
        {children}
    </div>
}
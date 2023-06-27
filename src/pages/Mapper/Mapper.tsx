export const Mapper = ({pages}) => {

    return <>
        {pages?.map((item) => {
            if(item.type === 'firstName'){
                return <div className="firstName">{item.firstName}</div>
            }
        })}
    </>
}
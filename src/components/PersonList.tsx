type PersonListProps ={
    names:{
        first:string,
        last:string 
    }[]
}


export const  PersonList = (props:PersonListProps) =>{
    return(
        <div>
             {props.names.map(names => {
                    return (
                        <>
                        <h1 key={names.first}>{names.first} {names.last}</h1>
                         </>
                    )
                }
             )}
        </div>
    )
}
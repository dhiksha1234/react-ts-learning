type StatusProps = {
    status: 'loading'|'success'|'error'
}

export const Status = (props:StatusProps) =>{
    let message 
    if(props.status === 'loading'){
        message = "Loading.."
    }
    else if(props.status ==='success'){
        message = "Data Fetched "
    }
    else if(props.status ==='error'){
        message = "Error "
    }
    else{
        message="Eruma"
    }
    return (
        <div>
            <h2>{message}</h2>
            
        </div>
    )
}// display the tag based on the prop passed
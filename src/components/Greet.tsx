type GreetProps={
    name:string;
    num:number;
    isLoggedIn:boolean;
}

export const Greet = (props:GreetProps) => {
    return (
        <div>
            {props.isLoggedIn ? `Welcome ${props.name}! You are the biggest fan of NCT ${props.num}`:"Welcome Stranger"}
        </div>
    )
}
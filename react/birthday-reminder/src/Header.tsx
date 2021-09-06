export interface Props {
    name: string,
    color?: string
}
const Header = (props:Props) => {
    return (
        <div>
            <h1 style={{color:props.color?props.color:"red"}}>Hello</h1>
            
        </div>
    )
}

export default Header

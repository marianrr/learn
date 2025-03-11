
function DjGuga(props) {
    return (<p>This is the child component! {JSON.stringify(props)}...
        <br /> {props.user.name}...{props.user.age}</p>)
}

export default DjGuga
function Coconitos({ soto }) {
    const { name, age } = soto
    console.log(soto)
    return (
        <>
            <p>I am {name} and I have {age} years.</p>
        </>
    )
}

export default Coconitos
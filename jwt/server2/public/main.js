

const submit1 = event => {

    fetch('http://localhost:3000/jiji', {
        method: 'post',
        headers: {
            'Content-type': "application/json"
        },
        body: JSON.stringify({ name1: window.name1.value, password1: window.password1.value })
    })

}
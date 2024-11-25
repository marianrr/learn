
// sa testez doar o functie 
//  npx jest -t "getAllDogs" 

export function getAllDogs() {
    const url = "/dogs"
    return fetch(url)
}

export function getDogNumberTwo() {

    const url = "/dogs/2"
    return fetch(url)

}


export function postNewDog() {
    const url = "/dogs"
    const headers = { "Content-Type": "application/x-www-form-urlencoded" }
// sa fiu atent la URLSearchParams, o da vsc in balarii
    const body = new URLSearchParams({ name: "coco", age: 44 })

    const options = {
        method: "POST",
        headers: headers,
        body: body
    }
    return fetch(url, options)
}

export function postNewDogV2(name, age) {

    const url = "/dogs"
    const headers = { "Content-Type": "application/x-www-form-urlencoded" }
    const body = new URLSearchParams({
        name: name, age: age
    })

    const options = {
        method: "POST",
        headers: headers,
        body: body
    }
    return fetch(url, options)

}

export function deleteDog(id) {

    const url = `/dogs/${id}/delete`

    const headers = {
        "AUTH": "ckyut5wau0000jyv5bsrud90y"
    }
    const options = {
        method: "POST",
        headers: headers
    }

    return fetch(url, options)


}
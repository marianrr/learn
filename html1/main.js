

const { fakerRO: fake } = await import('https://esm.sh/@faker-js/faker')


let soto = ''
for (let i = 0; i < 10; i++) {
    soto += fake.person.firstName() + " " + fake.person.lastName() + " " + fake.location.city() + " " + fake.location.street() + `**`

}

console.log(soto)

window.lol.innerHTML = soto.replaceAll('**', '<br>')




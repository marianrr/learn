export async function signup(state, formData) {
    // 1. Validate form fields
    // ...

    // 2. Prepare data for insertion into database
    const name = formData.get("name")
    const email = formData.get("email")
    const password = formData.get("password")
    const hashedPassword = await bcrypt.hash(password, 10)

    let i = 0
    // 3. Insert the user into the database or call an Library API
    const user = {
        name: name,
        email: email,
        password: hashedPassword,
        id: i++
    }



    if (!user) {
        return {
            message: 'An error occurred while creating your account.',
        }
    }

    // TODO:
    // 4. Create user session
    // 5. Redirect user
}
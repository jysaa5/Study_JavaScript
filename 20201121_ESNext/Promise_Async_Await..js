async function get() {
    let values = []
    values.push(await Promise.resolve(1))
    values.push(await Promise.resolve(2))
    values.push(await Promise.resolve(3))
    return values
}

get().then(values => console.log(values))
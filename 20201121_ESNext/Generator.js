function* gen() {
    yield*[1, 2]
}

for (let value of gen()) {
    console.log(value);
}
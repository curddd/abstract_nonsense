function ul(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout((function() {
            throw n
        }
        ))
    }
}
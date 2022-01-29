export {}

const ctx : Worker = self as any

ctx.addEventListener('message', (event)=> {
    let newString, string = event.data
    for (let i = string.length; i >= 0; i--) {
        newString = newString + string[i]
    }
    ctx.postMessage(newString)
})

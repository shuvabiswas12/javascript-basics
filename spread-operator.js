
function add(a, b, c) {
    console.log(a + b + c)
}

add(10, 20, 30)

add(...[10, 20, 30])  // ... is called spared operator


let arr = [20, 30, 40]
add(...arr)

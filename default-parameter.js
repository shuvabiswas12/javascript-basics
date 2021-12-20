function getSomething(value, value_2="This is a second demo text!") {

    value = value || "This is a second text!"

    console.log(value + "  " + value_2)
}

getSomething(value_2="smaple text as a arg!")
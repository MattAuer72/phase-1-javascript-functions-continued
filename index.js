function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun("bathe my dog")

mondayWork = function (activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}
mondayWork("work from home")

function wrapAdjective (string = "*" ){ 
    return function (value = "special"){
        return `You are ${string}${value}${string}!`
}
}

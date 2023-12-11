var elInp1 = document.querySelector(".inp1")
var elInp2 = document.querySelector(".inp2")
var elInp3 = document.querySelector(".inp3")
var elInp4 = document.querySelector(".inp4")
var elList = document.querySelector(".list")
function fnBtn() {
    var car = [
        {
            name : elInp1.value,
            modeli: elInp2.value,
            yili: elInp3.value,
            narxi: elInp4.value
        }
    ]
    for (var i of car) {
        var newLi = document.createElement("li")
        newLi.innerHTML = `
            <h2>${i.name}
            <h2>${i.modeli}</h2>
            <p>${i.yili}-yil</p> 
            <p>$${i.narxi}</p> 
            `
        elList.appendChild(newLi)
    }
    elInp1.value = ""
    elInp2.value = ""
    elInp3.value = ""
}
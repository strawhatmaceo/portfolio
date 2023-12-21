$(document).ready(function () {
    const name = 'Maceo Beltman';

    for (let i = 0; i < name.length; i++) {
        if(i < 5){
            $("#my-name p:first-child").append(`<span>${name[i]}</span>`)
        }
        else if(name[i] !== ' '){
            $("#my-name p:nth-child(2)").append(`<span>${name[i]}</span>`)
        }
    }
});
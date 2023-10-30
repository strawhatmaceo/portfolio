$(document).ready(function () {
    const name = 'Maceo Beltman';
    // let beingScrolled = false;
    // let next = 1;

    // $('#container').on('scroll', () => {
    //     $('.containers')[1].scrollIntoView({behavior: 'smooth'});
    //     beingScrolled = true;
    // });

    // // setInterval(function(){
    // //     if(beingScrolled){
    // //         beingScrolled = false;

    // //         $('.containers')[next++].scrollIntoView({behavior: 'smooth'});

    // //         console.log('ended')
    // //     }

    // //     if(next > 3){
    // //         next = 0;
    // //     }
    // // }, 1000);

    // // $('#container')[0].onscrollend = () => {
    // //     
    // // }


    for (let i = 0; i < name.length; i++) {
        if(i < 5){
            $("#my-name p:first-child").append(`<span>${name[i]}</span>`)
        }
        else if(name[i] !== ' '){
            $("#my-name p:nth-child(2)").append(`<span>${name[i]}</span>`)
        }
    }
});
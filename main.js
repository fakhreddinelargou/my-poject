
const container = document.querySelector('.container')
const ProjectHtml =document.querySelector('.Project-html')
const ProjectCss =document.querySelector('.Project-html-css')
const ProjectJs =document.querySelector('.Project-html-css-js')
function htmls(){
    container.classList.add('hidden')
    ProjectJs.classList.add('hidden')
ProjectHtml.classList.remove('hidden')
ProjectCss.classList.add('hidden')
}
function css(){
    ProjectJs.classList.add('hidden')
    ProjectCss.classList.remove('hidden')
    ProjectHtml.classList.add('hidden')
    container.classList.add('hidden')
}

function javascript(){
    ProjectCss.classList.add('hidden')
    ProjectHtml.classList.add('hidden')
    container.classList.add('hidden')
ProjectJs.classList.remove('hidden')
}


// function highlight(num){

//     for(let i = 0 ; i < num.length ; i++)
// num[i].addEventListener('click' , function(){
//     console.log(num)
// })
// }



// const langs = document.querySelectorAll('.langs');

// for (let index = 0; index < langs.length; index++) {
//     langs[index].addEventListener('click', function(){
//         this.classList.toggle('active');
//     });
// }


const leave = document.querySelectorAll('.arrow')
for(i = 0 ; i < leave.length ; i++)
leave[i].addEventListener('click', ()=>{

    ProjectCss.classList.add('hidden')
    ProjectHtml.classList.add('hidden')
    container.classList.remove('hidden')
    ProjectJs.classList.add('hidden')
} )
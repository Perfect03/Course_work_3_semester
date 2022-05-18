
let n=4; // кол-во переменных
/*
//ЗАПИСЬ ЧИСЛА ПЕРЕМЕННЫХ ИЗ INPUT В n
let inp = document.querySelector('input');
n=inp.value;
console.log(n);



*/
let r2=2; // выбранное кол-во переменных
let isDraft = 0;
let right_elem=[];
let right_tr=[];
let stolb; 
const xs=[];
const result=document.querySelector('.result');
xs[0]=document.getElementById('x1');
xs[1]=document.getElementById('x2');
xs[2]=document.getElementById('x3');
xs[3]=document.getElementById('x4');
xs[4]=document.getElementById('x5');
xs[5]=document.getElementById('x6');
const table=document.querySelector('.table');
const TR = document.querySelector('.table_right > tbody');
const TRR = document.querySelector('.table_right');
//TRR.oncontextmenu="return false;";
const right_rows = document.querySelectorAll('tr');
FormDraft(r2);
const Form = document.forms[0];
const r1=document.querySelectorAll('option');
const FormSelect = Form.Select;


    FormSelect.addEventListener("click", changeVar);
function changeVar(event)
{
    event.target.selected=true;
    let temp=FormSelect.value;
    if (temp != r2) {
        r2 = FormSelect.value;
        FormDraft(r2);
        let fn = Math.floor(getRandomArbitrary(0,2));
        function_text.src=`${f[r2][fn][0]}`;
    }
}
//n=r2;

//FormSelect.addEventListener()

/*
const r1=document.querySelectorAll('option');
for(let k = 0; k<4; k++)
{
r1[k].addEventListener("click", function(){
r2=document.getElementsByTagName("select")[0].value;
})}*/
   // var r1=document.getElementsByTagName("select")[0].value;
   // console.log(r2);


//БАЗА ФУНКЦИЙ
const f= [];
for(let d=2;d<6;d++)
{f[d]=[];
for(let j=0;j<6;j++)
f[d][j]=[];}
/*f[2][0][0] =`{(x}_1${'\\'}rightarrow x_2)${'\\'}uparrow(x_1x_2${'\\'}cap x_2)`; // 2 переменные
f[2][0][1] ="0110";
f[2][1][0] =`{(x}_1${'\\'}rightarrow x_2)~(x_1${'\\'}cap x_2)`; // 2 переменные
f[2][1][1] ="0000";*/

f[2][0][0] ='../img/functions/2/1.png'; // 2 переменные
f[2][0][1] ="1111";
f[2][1][0] ="../img/functions/2/2.png"; // 2 переменные
f[2][1][1] ="0010";
f[2][2][0] ='../img/functions/2/3.png'; // 2 переменные
f[2][2][1] ="1111";
f[2][3][0] ="../img/functions/2/4.png"; // 2 переменные
f[2][3][1] ="0011";
f[2][4][0] ='../img/functions/2/5.png'; // 2 переменные
f[2][4][1] ="1001";
f[2][5][0] ="../img/functions/2/6.png"; // 2 переменные
f[2][5][1] ="1001";


f[3][0][0] ='../img/functions/3/1.png'; // 3 переменные
f[3][0][1] ="11111010";
f[3][1][0] ='../img/functions/3/2.png'; // 3 переменные
f[3][1][1] ="00101111";

f[3][2][0] ='../img/functions/3/3.png'; // 3 переменные
f[3][2][1] ="11111111";
f[3][3][0] ="../img/functions/3/4.png"; // 3 переменные
f[3][3][1] ="00000010";
f[3][4][0] ='../img/functions/3/5.png'; // 3 переменные
f[3][4][1] ="00111110";
f[3][5][0] ="../img/functions/3/6.png"; // 3 переменные
f[3][5][1] ="00101010";

f[4][0][0] ='../img/functions/4/1.png'; // 4 переменные
f[4][0][1] ="0000100011000000";
f[4][1][0] ='../img/functions/4/2.png'; // 4 переменные
f[4][1][1] ="1111111111111111";

f[4][2][0] ='../img/functions/4/3.png'; // 4 переменные
f[4][2][1] ="1100111011011101";
f[4][3][0] ="../img/functions/4/4.png"; // 4 переменные
f[4][3][1] ="0000111111111111";
f[4][4][0] ='../img/functions/4/5.png'; // 4 переменные
f[4][4][1] ="0000000011001100";
f[4][5][0] ="../img/functions/4/6.png"; // 4 переменные
f[4][5][1] ="0000111011101111";

f[5][0][0] ='../img/functions/5/1.png'; // 5 переменных
f[5][0][1] ="00100100001011000000010000100100";
f[5][1][0] ='../img/functions/5/2.png'; // 5 переменных
f[5][1][1] ="10011001100111011001100110011001";

f[5][2][0] ='../img/functions/5/3.png'; // 5 переменных
f[5][2][1] ="00100011000000110000001100000011";
f[5][3][0] ="../img/functions/5/4.png"; // 5 переменных
f[5][3][1] ="00000110000001110000011000000110";
f[5][4][0] ='../img/functions/5/5.png'; // 5 переменных
f[5][4][1] ="00000000000000000000000000000000";
f[5][5][0] ="../img/functions/5/6.png"; // 5 переменных
f[5][5][1] ="01100000011111000110000001100000";

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

let fn = Math.floor(getRandomArbitrary(0,6));
const function_text = document.getElementById('function');
function_text.src=`${f[r2][fn][0]}`;

/*window.addEventListener("load", function () {
 
    // находим элемент, в который будем рендерить формулу
    var el = document.getElementById("function");
    
    // вызываем метод библиотеки для отображения формулы
    katex.render(`f = ${f[r2][fn][0]}`, el);

  });*/


// ФОРМИРОВАНИЕ ТАБЛиЦЫ
//console.log(stolb);

function FormKarno(r2){
for(let i = 0; i<Math.pow(2, r2); i++)
{
    let table_section = [Math.pow(2, n)];
let table_sectt = [Math.pow(2, n)];
    table_section[i] = document.createElement('div');
    table_section[i].classList.add("section");
    table_section[i].id=i;
    table.appendChild(table_section[i]);
    let table_sect=document.getElementById(i);
    table_sectt = document.createElement('div');
    table_sectt.classList.add("circle");
    table_sect.appendChild(table_sectt);

    stolb=Math.pow(2, (Math.floor(r2/2)+(r2%2)));
    table.style.gridTemplateColumns="repeat( " + stolb + ", 1fr)";
     //console.log(table_sect);
};
}
//window.onload = FormKarno(2);
//console.log(element.stylegridTemplateColumns);
function FormDraft(r2){
    //let m= right_rows.length;
    if(isDraft===r2) {}
    else 
    for( let elem = 0; elem < right_rows.length; elem++) {
        if (isDraft !=0) right_rows[elem].removeChild(right_rows[elem].lastElementChild);
        let i=0;
           for(;i<(r2-isDraft);i++)
        {
           console.log(r2);
        if( elem ===0 )
        {
            right_elem[i]=document.createElement('th');
            right_elem[i].classList.add("table_right_fx");
            if(right_rows[elem].children.length===0)
            {
                right_elem[i].textContent="x₁";
            }
            if(right_rows[elem].children.length===1)
            {
                right_elem[i].textContent="x₂";
            }
            if(right_rows[elem].children.length===2)
            {
                right_elem[i].textContent="x₃";
            }
            if(right_rows[elem].children.length===3)
            {
                right_elem[i].textContent="x₄";
            }
            if(right_rows[elem].children.length===4)
            {
                right_elem[i].textContent="x₅";
            }
            /*else{
                right_elem[i].textContent="ffff";
            }*/
        }
        else{
            right_elem[i]=document.createElement('td');
        }
        right_rows[elem].appendChild(right_elem[i]);
        
    }
    if(i===0)
        for(let t=0;t<(isDraft-r2);t++)
        {
            right_rows[elem].removeChild(right_rows[elem].lastElementChild);
        }
    i++;
    if (elem ===0) 
    {
        right_elem[i]=document.createElement('th');
    right_elem[i].classList.add("table_right_fx");
    right_elem[i].textContent="f(x)";
    }
    else right_elem[i]=document.createElement('td');
    right_rows[elem].appendChild(right_elem[i]);
    }
    isDraft=r2;
  //  let e=5;
    while(TR.children.length > 5)
{TR.removeChild(TR.lastChild);
}
DraftRead();
while (table.firstChild) {
    table.removeChild(table.firstChild);
}
FormKarno(r2);
let button=document.querySelectorAll('.section');
let circle=document.querySelectorAll('.circle');
for(let i = 0; i<Math.pow(2, r2); i++)
{
    //console.log(circle[i]);

    button[i].addEventListener("click", function(){
    circle[i].style.opacity="1";
    circle[i].style.transitionDuration="0.4s";
});
}
FormIntervals(r2);
}
function DraftRead(){
let elements = document.querySelectorAll('tr > td');
for (let elem of elements) {
   elem.addEventListener("click", function(){
       elem.textContent ="1";
       elem.style.color="tomato";
   });
   elem.addEventListener("contextmenu", function(){
    elem.textContent ="0";
    elem.style.color="#33DBFF";
});
  }
}
  const button1=document.querySelector('.button');

button1.addEventListener("click", function(){
    let section = [];
//    var TR = document.querySelector('.table_right > tbody');
var line = document.createElement('tr');
TR.appendChild(line);
for(let i = 0; i<=r2; i++)
{
   /* section[i].style.display="flex";
section[i].style.justifyContent="center";
section[i].style.alignItems="center";*/
section[i]=document.createElement('td');
line.appendChild(section[i]);

section[i].addEventListener("click", function(){
    section[i].textContent ="1";
    section[i].style.color="tomato";
    /*elem.style.display="flex";
    elem.style.justifyContent="center";
    elem.style.alignItems="center";*/
});
section[i].addEventListener("contextmenu", function(){
    section[i].textContent ="0";
    section[i].style.color="#33DBFF";
 /*elem.style.display="flex";
 elem.style.justifyContent="center";
 elem.style.alignItems="center";*/

}
);
   // button1.style.backgroundColor="white";
}
});

// Кнопка "Сброс"

const reset = document.getElementById('reset');
function reset_function(){
    let circle=document.querySelectorAll('.circle');
    circle.forEach(element => {
        element.style.opacity="0";
    });
    result.backgroundPosition="0 100%";
}
reset.addEventListener("click", reset_function
    );

function FormIntervals(r2){
    for(let i=r2;i<6;i++)
    {
        xs[i].style.opacity="0";
    }
    for(let i=0;i<r2;i++)
    {
        xs[i].style.opacity="1";
    }
}





// СЧИТЫВАНИЕ ВВЕДЁННЫХ ДАННЫХ

let enter=document.getElementById('enter');

enter.addEventListener("click", function(){
    if(enter.textContent=="Готово")
    {
    let sections=document.querySelectorAll('.circle');
    let a = [];
    let count=0;
    for(let i=0;i<sections.length;i++)
    {
        if(Number(sections[i].style.opacity) == f[r2][fn][1][i]) count++;
        console.log(Number(sections[i].style.opacity));
        console.log(f[r2][fn][1][i]);
    }
    let m=Math.floor(count/(sections.length)*100);
result.innerHTML=`Таблица заполнена правильно на ${m}%.`;
result.style.backgroundPosition="0 0";
result.style.backgroundSize='100% 200%';
enter.textContent="OK";
}
else{
    result.innerHTML="";
result.style.backgroundPosition="0% 100%";
result.style.backgroundSize='0% 200%';
enter.textContent="Готово";
reset_function();
let fn = Math.floor(getRandomArbitrary(0,6));
        function_text.src=`${f[r2][fn][0]}`;
}
});


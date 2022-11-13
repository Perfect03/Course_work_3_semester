const enter = document.getElementById('enter');
const result = document.querySelector('.result') as HTMLElement;
import { functions } from '../BooleanFunctions/functions';
import { setFunction } from '../CurrentFunction/CurrentFunction';
import { resetFunction } from '../Reset/Reset';

enter?.addEventListener('click', function () {
    if (enter?.textContent == 'Готово') {
        const circles = document.querySelectorAll('.circle');
        const sections = document.querySelectorAll('.section');
        let count = 0;
        let m = 0;
        for (let i = 0; i < circles.length; i++) {
            if (
                Number((circles[i] as HTMLElement).style.opacity) ==
                Number(functions[count][Number(localStorage.getItem('currentFunction'))][1][i])
            ) {
                count++;
                (sections[i] as HTMLElement).style.border = '8px solid rgb(0, 255, 0)';
            } else {
                (sections[i] as HTMLElement).style.border = '8px solid rgb(255, 0, 0)';
            }
        }
        m = Math.floor((count / circles.length) * 100);
        (result as HTMLElement).innerHTML = `Таблица заполнена правильно на ${m}%.`;
        (result as HTMLElement).style.backgroundPosition = '0 0';
        (result as HTMLElement).style.backgroundSize = '100% 200%';
        enter.textContent = 'OK';
    } else {
        (result as HTMLElement).innerHTML = '';
        (result as HTMLElement).style.backgroundPosition = '0% 100%';
        (result as HTMLElement).style.backgroundSize = '0% 200%';
        (enter as HTMLElement).textContent = 'Готово';
        resetFunction();
        setFunction();
    }
});

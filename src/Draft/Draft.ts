import { FormKarno, FormIntervals, table } from '../Karno/Karno';

let isDraft = 0;
const right_rows = document.querySelectorAll('tr');
const right_elem: HTMLElement[] = [];
const draftNewLine = document.querySelector('.button');
const TR = document.querySelector('.table_right > tbody');

export function FormDraft(count: number) {
    if (isDraft !== count)
        for (let elem = 0; elem < right_rows.length; elem++) {
            if (isDraft != 0) right_rows[elem].removeChild(right_rows[elem].lastElementChild as Element);
            let i = 0;
            for (; i < count - isDraft; i++) {
                if (elem === 0) {
                    right_elem[i] = document.createElement('th');
                    right_elem[i].classList.add('table_right_fx');
                    if (right_rows[elem].children.length === 0) {
                        right_elem[i].textContent = 'x₁';
                    }
                    if (right_rows[elem].children.length === 1) {
                        right_elem[i].textContent = 'x₂';
                    }
                    if (right_rows[elem].children.length === 2) {
                        right_elem[i].textContent = 'x₃';
                    }
                    if (right_rows[elem].children.length === 3) {
                        right_elem[i].textContent = 'x₄';
                    }
                    if (right_rows[elem].children.length === 4) {
                        right_elem[i].textContent = 'x₅';
                    }
                } else {
                    right_elem[i] = document.createElement('td');
                }
                right_rows[elem].appendChild(right_elem[i]);
            }
            if (i === 0)
                for (let t = 0; t < isDraft - count; t++) {
                    right_rows[elem].removeChild(right_rows[elem].lastElementChild as HTMLElement);
                }
            i++;
            if (elem === 0) {
                right_elem[i] = document.createElement('th') as HTMLElement;
                right_elem[i].classList.add('table_right_fx');
                right_elem[i].textContent = 'f(x)';
            } else right_elem[i] = document.createElement('td');
            right_rows[elem].appendChild(right_elem[i]);
        }
    isDraft = count;
    while ((TR as HTMLElement).children.length > 5) {
        (TR as HTMLElement).removeChild((TR as HTMLElement).lastChild as HTMLElement);
    }
    DraftRead();
    while (table?.firstChild) {
        table.removeChild(table.firstChild);
    }
    FormKarno(count);
    const button = document.querySelectorAll('.section');
    const circle = document.querySelectorAll('.circle');
    for (let i = 0; i < Math.pow(2, count); i++) {
        button[i].addEventListener('click', function () {
            if ((circle[i] as HTMLElement).style.opacity == '1') (circle[i] as HTMLElement).style.opacity = '0';
            else (circle[i] as HTMLElement).style.opacity = '1';
        });
    }
    FormIntervals(count);
}

export function DraftRead() {
    const elements = Array.from(document.querySelectorAll('tr > td'));
    for (const elem of elements) {
        elem.addEventListener('click', function () {
            elem.textContent = '1';
            (elem as HTMLElement).style.color = 'tomato';
        });
        elem.addEventListener('contextmenu', function () {
            elem.textContent = '0';
            (elem as HTMLElement).style.color = '#33DBFF';
        });
    }
}

(draftNewLine as HTMLElement).addEventListener('click', function () {
    const section: HTMLElement[] = [];
    const line = document.createElement('tr');
    (TR as HTMLElement).appendChild(line);
    for (let i = 0; i <= Number(localStorage.getItem('var')); i++) {
        section[i] = document.createElement('td');
        line.appendChild(section[i]);

        section[i].addEventListener('click', function () {
            section[i].textContent = '1';
            section[i].style.color = 'tomato';
        });
        section[i].addEventListener('contextmenu', function () {
            section[i].textContent = '0';
            section[i].style.color = '#33DBFF';
        });
    }
});

FormDraft(Number(localStorage.getItem('var')));

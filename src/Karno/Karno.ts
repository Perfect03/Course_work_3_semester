export const table = document.querySelector('.table');
const xs: HTMLElement[] = [];
for (let i = 0; i < 6; i++) {
    xs[i] = document.getElementById(`x${i + 1}`) as HTMLElement;
}

export function FormKarno(count: number) {
    for (let i = 0; i < Math.pow(2, count); i++) {
        const table_section: HTMLElement[] = [];
        table_section[i] = document.createElement('div');
        table_section[i].classList.add('section');
        table_section[i].id = `${i}`;
        table?.appendChild(table_section[i]);
        const table_sect = document.getElementById(`${i}`);
        const table_sectt = document.createElement('div');
        table_sectt.classList.add('circle');
        table_sect?.appendChild(table_sectt);

        const stolb = Math.pow(2, Math.floor(count / 2) + (count % 2));
        (table as HTMLElement).style.gridTemplateColumns = 'repeat( ' + stolb + ', 1fr)';
    }
}

export function FormIntervals(count: number) {
    for (let i = count; i < 6; i++) {
        xs[i].style.opacity = '0';
    }
    for (let i = 0; i < count; i++) {
        xs[i].style.opacity = '1';
    }
}

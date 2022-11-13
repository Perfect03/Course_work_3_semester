const reset = document.getElementById('reset');

reset?.addEventListener('click', resetFunction);

export function resetFunction() {
    const circles = document.querySelectorAll('.circle');
    circles.forEach((element) => {
        (element as HTMLElement).style.opacity = '0';
    });
    const sections = document.querySelectorAll('.section');
    sections.forEach((element) => {
        (element as HTMLElement).style.transition = '0.5s';
        (element as HTMLElement).style.border = '1px solid #000';
    });
    (document.querySelector('.result') as HTMLElement).style.backgroundPosition = '0 100%';
}

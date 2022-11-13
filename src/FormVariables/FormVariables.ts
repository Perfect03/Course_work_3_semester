import { FormDraft } from '../Draft/Draft';
import { setFunction } from '../CurrentFunction/CurrentFunction';

const FormSelect = document.forms[0].Select;

FormSelect.value = Number(localStorage.getItem('var')) || 2;

FormSelect.addEventListener('change', () => {
    const newCount = FormSelect.value;
    localStorage.setItem('var', `${newCount}`);
    FormDraft(newCount);
    setFunction();
});

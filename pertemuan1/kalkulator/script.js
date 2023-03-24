let angka1 = document.getElementById('angka1');
let angka2 = document.getElementById('angka2');
let hasil = document.getElementById('hasil');
let operator = document.getElementById('operator');

function cekOperator(cekOperator){
    switch (cekOperator) {
        case '+':
            return parseInt(angka1.value) + parseInt(angka2.value);
            break;
        case '-':
            return angka1.value - angka2.value;
            break;
        case '*':
            return angka1.value * angka2.value;
            break;
        default:
            return angka1.value / angka2.value;
            break;
    }
}

const angka1_func = angka1.addEventListener('input', ()=>{
    hasil.value = cekOperator(operator.value);
})

const angka2_func = angka2.addEventListener('input', ()=>{
    hasil.value = cekOperator(operator.value);
})

const operator_func = operator.addEventListener('change', ()=>{
    hasil.value = cekOperator(operator.value);
})
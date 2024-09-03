let inputCount = 2;
function addInput() {
    inputCount++;
    const numberInputs = document.getElementById('numberInputs');
    
    const label = document.createElement('label');
    label.setAttribute('for', `num${inputCount}`);
    label.textContent = `Number ${inputCount}:`;

    const input = document.createElement('input');
    input.type = 'number';
    input.id = `num${inputCount}`;
    input.name = `num${inputCount}`;
    input.required = true;

    numberInputs.appendChild(label);
    numberInputs.appendChild(input);
}

function calculateSum() {
    const inputs = document.querySelectorAll('#numberInputs input');
    let sum = 0;
    
    inputs.forEach(input => {
        sum += parseFloat(input.value) || 0;
    });
    
    document.getElementById('result').textContent = `Sum: ${sum}`;
}
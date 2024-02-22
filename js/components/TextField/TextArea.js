

const TextArea = ({
    id = 'TextArea',
    className = '',
    name = 'TextArea',
    placeholder = '',
    required = false,
    value = '',
    maxLength = null,
    readOnly = false,
    onChange,
    onInput
}) => {

    let elInput = document.createElement('textarea');
    elInput.id = id;
    elInput.className = className;
    elInput.name = name;
    elInput.placeholder = placeholder;
    elInput.required = required;
    elInput.innerText = value;
    if (maxLength) {
        elInput.maxLength = maxLength;
    }
    elInput.readOnly = readOnly;
    if (onChange) {
        elInput.addEventListener('change', onChange);
    }
    if (onInput) {
        elInput.addEventListener('input', onInput);
    }
    return elInput;
}



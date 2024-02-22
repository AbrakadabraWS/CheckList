

const TextField = ({
    id = 'TextField',
    className = '',
    name = 'TextField',
    type = 'text',
    placeholder = '',
    required = false,
    value = '',
    maxLength = null,
    minLength = null,
    pattern = null,
    readOnly = false,
    onChange,
    onInput
}) => {

    let elInput = document.createElement('input');
    elInput.id = id;
    elInput.className = className;
    elInput.name = name;
    elInput.type = type;
    elInput.placeholder = placeholder;
    elInput.required = required;
    elInput.value = value;
    if (maxLength) {
        elInput.maxLength = maxLength;
    }
    if (minLength) {
        elInput.minLength = minLength;
    }
    elInput.pattern = pattern;
    elInput.readOnly = readOnly;
    if (onChange) {
        elInput.addEventListener('change', onChange);
    }
    if (onInput) {
        elInput.addEventListener('input', onInput);
    }
    return elInput;
}



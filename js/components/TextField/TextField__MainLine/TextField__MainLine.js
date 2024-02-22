
const TextField__MainLine = ({
    id,
    LableText = '',
    TextFieldPlaceholder = '',
    TextFieldValue = '',
    onChange = () => { },
    onInput = () => { },
}) => {
    let elTextField__MainLine__LineBox = document.createElement('div');
    elTextField__MainLine__LineBox.id = `${id}__TextField__MainLine__LineBox`;
    elTextField__MainLine__LineBox.className = 'LineBox';

    // Подпись
    let elTextField__MainLine__LineBox__Lable = document.createElement('label');
    elTextField__MainLine__LineBox__Lable.id = `${id}__TextField__MainLine__LineBox__Lable`;
    elTextField__MainLine__LineBox__Lable.className = 'LineBox__Lable roboto-regular';
    elTextField__MainLine__LineBox__Lable.setAttribute('for', `${id}__TextField__MainLine__LineBox__TextField`);
    elTextField__MainLine__LineBox__Lable.innerText = LableText;
    elTextField__MainLine__LineBox.appendChild(elTextField__MainLine__LineBox__Lable);

    // Поле ввода
    let elTextField__MainLine__LineBox__TextField = TextField({
        id: `${id}__TextField__MainLine__LineBox__TextField`,
        className: 'LineBox__TextField roboto-regular',
        name: `${id}__TextField__MainLine__LineBox__TextField`,
        placeholder: TextFieldPlaceholder,
        required: true,
        value: TextFieldValue,
        // maxLength = null,
        // minLength = null,
        // pattern = null,
        // readOnly = false,
        onChange: onChange,
        onInput: onInput,
    });

    elTextField__MainLine__LineBox.appendChild(elTextField__MainLine__LineBox__TextField);

    return elTextField__MainLine__LineBox;
}

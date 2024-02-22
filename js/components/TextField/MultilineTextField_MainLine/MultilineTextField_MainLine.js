
const MultilineTextField_MainLine = ({
    id,
    TextFieldPlaceholder = '',
    TextFieldValue = '',
    onChange = () => { },
    onInput = () => { },
}) => {
    // Поле ввода
    let elMultilineTextField__MainLine = TextArea({
        id: `${id}__MultilineTextField__MainLine`,
        className: 'MultilineTextField_MainLine roboto-regular',
        name: `${id}__MultilineTextField__MainLine`,
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

    return elMultilineTextField__MainLine;
}

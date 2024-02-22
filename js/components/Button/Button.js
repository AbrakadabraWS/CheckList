
const Button = ({
    id = 'button',
    className = '',
    text = '',
    disabled = false,
    onClick = () => { },
}) => {
    let elButton = document.createElement('button');
    elButton.id = id;
    elButton.className = className;
    elButton.innerText = text;
    elButton.disabled = disabled;
    elButton.addEventListener('click', onClick);
    return elButton;
}

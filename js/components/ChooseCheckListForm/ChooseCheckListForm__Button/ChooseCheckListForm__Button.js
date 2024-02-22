
const ChooseCheckListForm__Button = ({
    onClick = () => { },
}) => {
    let elChooseCheckListForm__Button = document.createElement('div');
    elChooseCheckListForm__Button.id = 'ChooseCheckListForm__Button';
    elChooseCheckListForm__Button.className = 'ChooseCheckListForm__Button';


    let elChooseCheckListForm__Button__Text = document.createElement('span');
    elChooseCheckListForm__Button__Text.id = 'ChooseCheckListForm__Button__Text';
    elChooseCheckListForm__Button__Text.className = 'ChooseCheckListForm__Button__Text roboto-regular';
    elChooseCheckListForm__Button__Text.textContent = 'Создать чек-лист';
    elChooseCheckListForm__Button.appendChild(elChooseCheckListForm__Button__Text);

    let elChooseCheckListForm__Button__Plus = document.createElement('span');
    elChooseCheckListForm__Button__Plus.id = 'ChooseCheckListForm__Button__Plus';
    elChooseCheckListForm__Button__Plus.className = 'ChooseCheckListForm__Button__Plus roboto-black';
    elChooseCheckListForm__Button__Plus.textContent = '+';
    elChooseCheckListForm__Button.appendChild(elChooseCheckListForm__Button__Plus);

    elChooseCheckListForm__Button.addEventListener('click', onClick);

    return elChooseCheckListForm__Button;
}

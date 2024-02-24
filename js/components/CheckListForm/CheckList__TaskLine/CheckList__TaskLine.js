

const CheckList__TaskLine = (
    name,
    Checked = false,
    onClickCheckCircle = (name, Checked) => { },
    onClickNewTask = (name, Checked) => { },
    onClickDeleteTask = (name, Checked) => { }
) => {

    let elCheckList__TaskLine = document.createElement('div');
    elCheckList__TaskLine.id = 'CheckList__TaskLine';
    elCheckList__TaskLine.className = 'LineBox CheckList__TaskLine';

    let cbOnClickCheckButton = () => {
        var elCheckList__TaskLine__CheckButton = document.getElementById(`CheckList__TaskLine__CheckButton__${name}`);
        Checked = !Checked;
        elCheckList__TaskLine__CheckButton.className = `CheckList__TaskLine__CheckButton--${Checked ? 'Checked' : 'Cleared'}`;

        onClickCheckCircle(name, Checked);
    }

    let elCheckList__TaskLine__CheckButton = document.createElement('div');
    elCheckList__TaskLine__CheckButton.id = `CheckList__TaskLine__CheckButton__${name}`;
    elCheckList__TaskLine__CheckButton.className = `CheckList__TaskLine__CheckButton--${Checked ? 'Checked' : 'Cleared'}`;
    elCheckList__TaskLine__CheckButton.addEventListener('click', cbOnClickCheckButton);
    elCheckList__TaskLine.appendChild(elCheckList__TaskLine__CheckButton);

    let elCheckList__TaskLine__NameText = document.createElement('span');
    elCheckList__TaskLine__NameText.id = `CheckList__TaskLine__NameText__${name}`;
    elCheckList__TaskLine__NameText.className = 'CheckList__TaskLine__NameText roboto-regular';
    elCheckList__TaskLine__NameText.innerText = `${name}`;
    elCheckList__TaskLine.appendChild(elCheckList__TaskLine__NameText);

    let elCheckList__TaskLine__LineButtons = document.createElement('div');
    elCheckList__TaskLine__LineButtons.id = 'CheckList__TaskLine__LineButtons';
    elCheckList__TaskLine__LineButtons.className = 'CheckList__TaskLine__LineButtons';


    elCheckList__TaskLine__LineButtons.appendChild(Button({
        text: 'Изменить',
        id: 'CheckList__TaskLine__LineButtons__NewTaskButton',
        className: 'LineBox__Button--Success roboto-regular',
        onClick: () => { onClickNewTask(name, Checked) },
    }));

    elCheckList__TaskLine__LineButtons.appendChild(Button({
        text: 'Удалить',
        id: 'CheckList__TaskLine__LineButtons__NewTaskButton',
        className: 'LineBox__Button--Error roboto-regular',
        onClick: () => { onClickDeleteTask(name, Checked) },
    }));


    elCheckList__TaskLine.appendChild(elCheckList__TaskLine__LineButtons);

    return elCheckList__TaskLine;
}



const CheckList__NameLine = (name, onClickNewTask = () => { }) => {

    let elCheckList__NameLine = document.createElement('div');
    elCheckList__NameLine.id = 'CheckList__NameLine';
    elCheckList__NameLine.className = 'LineBox';

    let elCheckList__NameLine__NameText = document.createElement('span');
    elCheckList__NameLine__NameText.id = `CheckList__NameLine__NameText__${name}`;
    elCheckList__NameLine__NameText.className = 'CheckList__NameLine__NameText roboto-black';
    elCheckList__NameLine__NameText.innerText = `Название: ${name}`;
    elCheckList__NameLine.appendChild(elCheckList__NameLine__NameText);

    let elCheckList__NameLine__LineButtons = document.createElement('div');
    elCheckList__NameLine__LineButtons.id = 'CheckList__NameLine__LineButtons';
    elCheckList__NameLine__LineButtons.className = 'CheckList__NameLine__LineButtons';

    elCheckList__NameLine__LineButtons.appendChild(Button({
        text: 'Новая задача',
        id: 'CheckList__NameLine__LineButtons__NewTaskButton',
        className: 'LineBox__Button--Success roboto-regular',
        onClick: onClickNewTask,
    }));

    elCheckList__NameLine.appendChild(elCheckList__NameLine__LineButtons);

    return elCheckList__NameLine;
}

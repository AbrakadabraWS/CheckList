
const ChooseCheckListForm = (elMain) => {
    let checkLists = JSON.parse(localStorage.getItem('checkLists'));

    elMain.appendChild(MainHeader(checkLists ? `Чек-листы` : `У вас пока нет чек-листов`));

    const cbOpenCreateOrUpdateCheckListForm = () => {   // Callback для нажатия кнопки создать новый чек лист
        updateMain('OpenCreateOrUpdateCheckListForm')   // Вызываем функцию обновления зоны Main
    }

    let elChooseCheckListForm__Button = ChooseCheckListForm__Button({ onClick: cbOpenCreateOrUpdateCheckListForm });   // вызовем компоент создания кнопки создания чек листа
    elMain.appendChild(elChooseCheckListForm__Button); // добавляем кнопку создания чек листа в зону Main

}


const ChooseCheckListForm = (elMain) => {
    let checkLists = getCheckLisits();
    let activeCheckList = getActiveCheckList();

    elMain.appendChild(MainHeader(checkLists ? `Чек-листы` : `У вас пока нет чек-листов`));

    const cbOpenCreateOrUpdateCheckListForm = () => {   // Callback для нажатия кнопки создать новый чек лист
        updateMain('OpenCreateOrUpdateCheckListForm')   // Вызываем функцию обновления зоны Main
    }


    let elChooseCheckListForm__ButtonsArea = document.createElement('div');
    elChooseCheckListForm__ButtonsArea.id = 'ChooseCheckListForm__ButtonsArea';
    elChooseCheckListForm__ButtonsArea.className = 'ChooseCheckListForm__ButtonsArea';

    let elChooseCheckListForm__Button = ChooseCheckListForm__Button({ onClick: cbOpenCreateOrUpdateCheckListForm });   // вызовем компоент создания кнопки создания чек листа
    elChooseCheckListForm__ButtonsArea.appendChild(elChooseCheckListForm__Button); // добавляем кнопку создания чек листа в зону Main

    if (checkLists) {
        const cbSetActiveCheckLst = (checkListName) => {
            setactiveCheckList(checkListName);
            updateButtonsStyles('AllTasks');
            updateMain('AllTasks');
        }
        checkLists.forEach((listName) => {

            let elChooseCheckListForm__CheckListButton = ChooseCheckListForm__Button({
                checkListName: listName,
                active: Boolean(listName === activeCheckList),
                onClick: () => cbSetActiveCheckLst(listName)
            });   // вызовем компоент создания кнопки создания чек листа
            elChooseCheckListForm__ButtonsArea.appendChild(elChooseCheckListForm__CheckListButton); // добавляем кнопку создания чек листа в зону Main                      
        });
    }
    elMain.appendChild(elChooseCheckListForm__ButtonsArea);
}

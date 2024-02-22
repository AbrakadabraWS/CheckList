
const updateMain = (event, elMain = document.getElementById('Main')) => {
    console.log(`update Main, event: ${event}`);

    elMain.innerHTML = '';

    let activeCheckList = localStorage.getItem('activeCheckList');

    if (
        (
            event !== 'AllTasks' ||
            event !== 'ActiveTasks' ||
            event !== 'ClosedTasks'
        ) &&
        !activeCheckList &&
        event !== 'OpenCreateOrUpdateCheckListForm'
    ) {  // Если в local Storage нет информации о активном чек-листе значит личтов незе нет и нужно предложить создать новый
        event = 'ChooseCheckListForm';
    }

    switch (event) {
        case 'AllTasks':
        case 'ActiveTasks':
        case 'ClosedTasks':// основная форма main двлее внутри CheckList(...) в зависимост от event будет выполняться фильтрация
            CheckListForm(elMain, activeCheckList, event);
            break;
        case 'ChooseCheckListForm':
            ChooseCheckListForm(elMain);
            break;
        case 'OpenCreateOrUpdateTaskForm': // форма для создания новой задачи
            CreateOrUpdateTaskForm(elMain)
            break;
        case 'OpenCreateOrUpdateCheckListForm': // форма для создания нового чек листа
            CreateOrUpdateCheckListForm(elMain, activeCheckList);
            break;
        default:    // на случай если обновление зоны Main вызвано с несуществующем событием
            let elMain__updateError = document.createElement('div');
            elMain__updateError.id = 'Main_updateError';
            elMain__updateError.className = 'Main_updateError roboto-regular';
            elMain__updateError.innerText = `Во время обновления Main зоны произошла ошибка!!!\n\nUpdate event: ${event}`;
            elMain.appendChild(elMain__updateError);
            break;
    }
}

const Main = () => {
    let elMain = document.createElement('main');
    elMain.id = 'Main';
    elMain.className = 'Main';

    updateMain('AllTasks', elMain);

    return elMain;
}



const CheckListForm = (elMain, activeCheckList, event) => {
    let checkListData = JSON.parse(localStorage.getItem(activeCheckList));

    const cbOpenCreateOrUpdateTaskForm = () => {
        updateMain('OpenCreateOrUpdateTaskForm');   // Вызываем функцию обновления зоны Main
    }

    elMain.appendChild(CheckList__NameLine(checkListData.CheckListName, cbOpenCreateOrUpdateTaskForm));

    const cbOnClick__TaskLine__Edit = (taskName, Checked) => {
        // CreateOrUpdateTaskForm(elMain, taskName, checkListData, Checked);   // Вызываем функцию обновления зоны Main
        let taskindex = checkListData[Checked ? 'ClosedTasks' : 'ActiveTasks'].findIndex(task => task.taskName === taskName);
        if (taskindex !== -1) {
            elMain.innerHTML = '';
            CreateOrUpdateTaskForm(elMain, taskName, checkListData, Checked);   // Вызываем функцию обновления зоны Main
        }
        else {
            console.log(`Ошибка в коде! Задача ${taskName} не найдена в LocalStorage`)
        }
    };

    const cbCheck__TaskLine = (taskName, Checked) => {
        CheckOrUncheckTask(checkListData, taskName, Checked);
    };

    const cbDelete__TaskLine = (taskName, Checked) => {
        console.log('delete task')
        DeleteTask(checkListData, taskName, Checked);
        updateMain('AllTasks', elMain);
    }
    if (checkListData.ActiveTasks && checkListData.ClosedTasks) { //Есть активные или завершенные задачи
        if (event === 'AllTasks') {//Есть активные или завершенные задачи и нужно показать их все
            if (checkListData.ActiveTasks) {
                checkListData.ActiveTasks.forEach((task) => {
                    elMain.appendChild(
                        CheckList__TaskLine(
                            task.taskName,
                            false,
                            cbCheck__TaskLine,
                            cbOnClick__TaskLine__Edit,
                            cbDelete__TaskLine
                        ));
                });
            }


            if (checkListData.ClosedTasks) {
                checkListData.ClosedTasks.forEach((task) => {
                    elMain.appendChild(
                        CheckList__TaskLine(
                            task.taskName,
                            true,
                            cbCheck__TaskLine,
                            cbOnClick__TaskLine__Edit,
                            cbDelete__TaskLine
                        ));
                });
            }
        }
        if (event === 'ActiveTasks') {//Есть активные или завершенные задачи и нужно показать только активные
            if (checkListData.ActiveTasks) {
                checkListData.ActiveTasks.forEach((task) => {
                    elMain.appendChild(
                        CheckList__TaskLine(
                            task.taskName,
                            false,
                            cbCheck__TaskLine,
                            cbOnClick__TaskLine__Edit,
                            cbDelete__TaskLine
                        ));
                });
            }
        }

        if (event === 'ClosedTasks') {//Есть активные или завершенные задачи и нужно показать только завершенные
            if (checkListData.ClosedTasks) {
                checkListData.ClosedTasks.forEach((task) => {
                    elMain.appendChild(
                        CheckList__TaskLine(
                            task.taskName,
                            true,
                            cbCheck__TaskLine,
                            cbOnClick__TaskLine__Edit,
                            cbDelete__TaskLine
                        ));
                });
            }
        }
    }
    else {  // задач нет

    }


}

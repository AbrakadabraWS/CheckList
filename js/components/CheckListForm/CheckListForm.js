

const CheckListForm = (elMain, activeCheckList, event) => {
    let checkListData = getCheckLisitData(activeCheckList);

    const cbOpenCreateOrUpdateTaskForm = () => {
        updateMain('OpenCreateOrUpdateTaskForm');   // Вызываем функцию обновления зоны Main
    };

    const cbOpenCreateOrUpdateCheckListForm = () => {
        console.log(activeCheckList)
        elMain.innerHTML = '';
        CreateOrUpdateCheckListForm(elMain, activeCheckList);
    };

    elMain.appendChild(
        CheckList__NameLine(
            checkListData.CheckListName,
            cbOpenCreateOrUpdateCheckListForm,
            cbOpenCreateOrUpdateTaskForm
        )
    );

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
    };
    console.log(checkListData.ActiveTasks.length !== 0)
    console.log(checkListData.ClosedTasks.length !== 0)
    console.log(checkListData.ActiveTasks.length !== 0 || checkListData.ClosedTasks.length !== 0)
    if (checkListData.ActiveTasks.length !== 0 || checkListData.ClosedTasks.length !== 0) { //Есть активные или завершенные задачи
        let elCheckListForm__TasksArea = document.createElement('div');
        elCheckListForm__TasksArea.id = 'CheckListForm__TasksArea';
        elCheckListForm__TasksArea.className = 'CheckListForm__TasksArea';

        if (event === 'AllTasks') {//Есть активные или завершенные задачи и нужно показать их все
            if (checkListData.ActiveTasks) {
                checkListData.ActiveTasks.forEach((task) => {
                    elCheckListForm__TasksArea.appendChild(
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
                    elCheckListForm__TasksArea.appendChild(
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
                    elCheckListForm__TasksArea.appendChild(
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
                    elCheckListForm__TasksArea.appendChild(
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
        elMain.appendChild(elCheckListForm__TasksArea);
    }
    else {  // задач нет
        elMain.appendChild(
            Button({
                id: 'CheckListForm__ButtonCreateFirstTask',
                className: 'CheckListForm__ButtonCreateFirstTask roboto-black',
                text: '+ Создать первую задачу',
                onClick: cbOpenCreateOrUpdateTaskForm,
            })
        );
    }


}

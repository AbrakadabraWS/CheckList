

let localStorage = window.localStorage;
// localStorage.clear();


const setNewCheckList = (CheckListName) => {
    let checkLists = JSON.parse(localStorage.getItem('checkLists'));

    if (checkLists) {
        checkLists.push(CheckListName);
    }
    else {
        checkLists = [CheckListName];

    }
    localStorage.setItem('checkLists', JSON.stringify(checkLists));

}

const getActiveCheckList = () => {
    return localStorage.getItem('activeCheckList');
}

const getCheckLisitData = (activeCheckList) => {
    return JSON.parse(localStorage.getItem(activeCheckList));
}

const getCheckLisits = () => {
    return JSON.parse(localStorage.getItem('checkLists'));
}
const setactiveCheckList = (checkListName) => {
    localStorage.setItem('activeCheckList', checkListName);
}

const deleteCheckList = (CheckListName) => {
    let checkLists = JSON.parse(localStorage.getItem('checkLists'));

    if (checkLists) {

        let indexOfCheckListByCheckListName = checkLists.indexOf(CheckListName);
        if (indexOfCheckListByCheckListName === -1) {
            console.log(`Чек-лист ${CheckListName} не существует!`);
            return;
        }
        else {
            localStorage.removeItem(CheckListName);
            checkLists.splice(indexOfCheckListByCheckListName, 1);
            localStorage.setItem('activeCheckList', '');
            localStorage.setItem('checkLists', JSON.stringify(checkLists));
            console.log(`Чек-лист ${CheckListName} успешно удален!`);
        }
    }
}

const CreateNewCheckList = (CheckListName) => {
    let testCheckList = localStorage.getItem(CheckListName);

    if (testCheckList) {
        console.error(`Чек-лист ${CheckListName} уже существует!`);
        return 'The checklist exists!';
    }
    else {
        const baseCheckListStructure = {
            CheckListName: CheckListName,
            CreateDate: new Date(),
            ActiveTasks: [],
            ClosedTasks: [],
        }

        setNewCheckList(CheckListName);
        localStorage.setItem(CheckListName, JSON.stringify(baseCheckListStructure));
        localStorage.setItem('activeCheckList', CheckListName);
        console.log(`Создан новый чек-лист: ${CheckListName}`)
        return 'The checklist has been created';
    }
}

const EditCheckListName = (oldCheckListName, newCheckListName) => {
    let checkListData = JSON.parse(localStorage.getItem(oldCheckListName));
    let checkListsArray = JSON.parse(localStorage.getItem('checkLists'));
    let checkListIndex = checkListsArray.indexOf(oldCheckListName);

    checkListsArray[checkListIndex] = newCheckListName;
    checkListData.CheckListName = newCheckListName;
    localStorage.setItem('activeCheckList', newCheckListName);
    localStorage.setItem('checkLists', JSON.stringify(checkListsArray));
    localStorage.setItem(newCheckListName, JSON.stringify(checkListData));
    localStorage.removeItem(oldCheckListName);
}

/**
 * Создает новую задачу в localStorage внутри карточки чек-листа
 * @param {string} taskName - имя задачи
 * @param {string} taskDescription - имя чек листа
 * @returns {string} Вернет однин из трех вариантов выполнения функции
 * * 'The checklist exists in ActiveTasks!' - задача с таким именем существует в списке активных задач
 * * 'The checklist exists in ClosedTasks!' - Задача с таким имененм существует в списке выполненных задач
 * * 'The task has been created' - задача успешно создана
 */
const CreateNewTask = (taskName, taskDescription) => {
    let activeCheckList = localStorage.getItem('activeCheckList');
    let checkListData = JSON.parse(localStorage.getItem(activeCheckList));

    const testTaskName = (task) => {
        return task.taskName === taskName ? true : false;
    };

    let testTaskNameOnActiveTasks = checkListData.ActiveTasks.find((task) => testTaskName(task));
    let testTaskNameOnClosedTasks = checkListData.ClosedTasks.find((task) => testTaskName(task));

    if (testTaskNameOnActiveTasks) {
        return 'The checklist exists in ActiveTasks!';
    }
    else if (testTaskNameOnClosedTasks) {
        return 'The checklist exists in ClosedTasks!';
    }
    else {
        let taskData = {
            CreateDate: new Date(),
            taskName: taskName,
            taskDescription: taskDescription,
        };

        checkListData.ActiveTasks.push(taskData);
        localStorage.setItem(activeCheckList, JSON.stringify(checkListData));
        return 'The task has been created';
    }
}

const UpdateTask = (
    checkListData,
    task,
    taskindex,
    newTaskName,
    newTaskDescription,
    Checked
) => {
    let errFlag = false;
    const errMessages = ['checkListData', 'task', 'taskindex', 'newTaskName', 'newTaskDescription', 'Checked'];
    const testArray = [checkListData, task, taskindex, newTaskName, newTaskDescription, Checked];

    testArray.forEach((variable, indexVariable) => {
        if (variable === undefined) { //сравниваем все с undefined так как Checked булевое
            errFlag = true;
            console.error(`UpdateTask error: ${errMessages[indexVariable]} is undefined`);
        }
    });

    if (errFlag) {
        return 'UpdateTask error';
    }
    else {
        task.taskName = newTaskName;                                                   // обновляем поле имени задачи 
        task.taskDescription = newTaskDescription;                                     // обновляем поле описания задачи
        checkListData[Checked ? 'ClosedTasks' : 'ActiveTasks'][taskindex] = task;   // перезаписываем задачу в массив поверх старых данных
        localStorage.setItem(localStorage.getItem('activeCheckList'), JSON.stringify(checkListData))    // записываем все это в localStorage
        return 'UpdateTask is ok';
    }
}

const CheckOrUncheckTask = (checkListData, taskName, Checked) => {
    let errFlag = false;
    const errMessages = ['checkListData', 'taskName', 'Checked'];
    const testArray = [checkListData, taskName, Checked];

    testArray.forEach((variable, indexVariable) => {
        if (variable === undefined) { //сравниваем все с undefined так как Checked булевое
            errFlag = true;
            console.error(`CheckOrUncheckTask error: ${errMessages[indexVariable]} is undefined`);
        }
    });

    if (errFlag) {
        return 'CheckOrUncheckTask error';
    }
    else {
        let taskindex = checkListData[Checked ? 'ActiveTasks' : 'ClosedTasks'].findIndex(task => task.taskName === taskName);

        checkListData[Checked ? 'ClosedTasks' : 'ActiveTasks'].push(
            checkListData[Checked ? 'ActiveTasks' : 'ClosedTasks'][taskindex]
        );
        checkListData[Checked ? 'ActiveTasks' : 'ClosedTasks'].splice(taskindex, 1);
        localStorage.setItem(localStorage.getItem('activeCheckList'), JSON.stringify(checkListData));   // записываем все это в localStorage
        return 'CheckOrUncheckTask is ok';
    }
}

const DeleteTask = (checkListData, taskName, Checked) => {
    let errFlag = false;
    const errMessages = ['checkListData', 'taskName', 'Checked'];
    const testArray = [checkListData, taskName, Checked];

    testArray.forEach((variable, indexVariable) => {
        if (variable === undefined) { //сравниваем все с undefined так как Checked булевое
            errFlag = true;
            console.error(`CheckOrUncheckTask error: ${errMessages[indexVariable]} is undefined`);
        }
    });

    if (errFlag) {
        return 'CheckOrUncheckTask error';
    }
    else {
        let taskindex = checkListData[Checked ? 'ClosedTasks' : 'ActiveTasks'].findIndex(task => task.taskName === taskName);
        checkListData[Checked ? 'ClosedTasks' : 'ActiveTasks'].splice(taskindex, 1);
        localStorage.setItem(localStorage.getItem('activeCheckList'), JSON.stringify(checkListData));   // записываем все это в localStorage
        return 'CheckOrUncheckTask is ok';
    }
}
console.log(localStorage)

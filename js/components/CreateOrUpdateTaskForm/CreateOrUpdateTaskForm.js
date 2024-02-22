

const CreateOrUpdateTaskForm = (elMain, taskName = '', checkListData, Checked) => {
    let task;
    let taskDescription = '';
    let taskindex;

    if (taskName && checkListData && Checked !== undefined) { //Если изменение задачи то нужно прописать данные изизадачи в соответствующие поля
        taskindex = checkListData[Checked ? 'ClosedTasks' : 'ActiveTasks'].findIndex(taskItem => taskItem.taskName === taskName);
        if (taskindex !== -1) {
            task = checkListData[Checked ? 'ClosedTasks' : 'ActiveTasks'][taskindex];
            taskName = task.taskName;
            taskDescription = task.taskDescription;
        }
        else {
            console.log(`Ошибка в коде! Задача ${taskName} не найдена в LocalStorage`);
        }
    }

    elMain.appendChild(MainHeader(taskName ? `Задача: ${taskName}` : `Создание новой задачи`)); // Заголовок



    const inputValueIsUpdate = (event, ValueSecondTextField) => {
        if (event.target.value && ValueSecondTextField !== '') { // если поле ввода имени задачи и поле описания задачи не пустые
            var elCreateOrUpdateTaskForm__ApplyButton__Buttons__MainLine = document.getElementById('CreateOrUpdateTaskForm__ApplyButton__Buttons__MainLine');
            elCreateOrUpdateTaskForm__ApplyButton__Buttons__MainLine.disabled = false; // то делаем кнопку Готово активной

        }

        if (event.target.value.length === 0) { // Если поле ввода пустое
            var elCreateOrUpdateTaskForm__ApplyButton__Buttons__MainLine = document.getElementById('CreateOrUpdateTaskForm__ApplyButton__Buttons__MainLine');
            elCreateOrUpdateTaskForm__ApplyButton__Buttons__MainLine.disabled = true; // блокируем кнопку готово
        }

        let elCreateOrUpdateTaskForm__ErrorMessage = document.getElementById('CreateOrUpdateTaskForm__ErrorMessage');
        if (elCreateOrUpdateTaskForm__ErrorMessage) {// если было сообщение об ошибке
            elCreateOrUpdateTaskForm__ErrorMessage.remove(); // то его нужно убрать так как было изменено содержимое поля ввода имени задачи
        }
    };

    const cbChangeValueLineName__TextField = (event) => { // Callback изменения текста в имени задачи
        taskName = event.target.value;
    };

    const cbInputValueLineName__TextField = (event) => { // Callback на каждое нажатие клавиши в поле имени задачи
        inputValueIsUpdate(event, taskDescription);
    };

    const cbChangeValueLineDescription__TextField = (event) => {// Callback изменения текста в описании задачи
        taskDescription = event.target.value;
    };

    const cbInputValueLineDescription__TextField = (event) => {// Callback на каждое нажатие клавиши в поле имени задачи
        inputValueIsUpdate(event, taskName);
    };

    const cbOnClickButton__Cancel = () => { // если нажали кнопку отмены
        updateMain('AllTasks', elMain); // вернемся к меню всех задач
    };

    const cbOnClickButton__Apply = () => { // если нажали кнопку готово
        if (taskName && checkListData && Checked !== undefined) { // проверим новая задача или CreateOrUpdateTaskForm было вызвано со всеми аргументами а занчит для изменения существующей задачи

            if (task.taskName !== taskName || task.taskDescription !== taskDescription) {   // если какое то из полей было изменено
                UpdateTask(checkListData, task, taskindex, taskName, taskDescription, Checked);
            }
            else {
                console.log('Задача не изменилась.')
            }
            updateMain('AllTasks', elMain);
        }
        else {
            let CreateTaskResult = CreateNewTask(taskName, taskDescription);
            if (CreateTaskResult === 'The task has been created') {
                updateMain('AllTasks', elMain);
            }
            else {
                let elCreateOrUpdateTaskForm__Buttons__MainLine__LineButtons = document.getElementById('CreateOrUpdateTaskForm__Buttons__MainLine__LineButtons');
                if (elCreateOrUpdateTaskForm__Buttons__MainLine__LineButtons) {
                    let elCreateOrUpdateTaskForm__ErrorMessage = document.getElementById('CreateOrUpdateTaskForm__ErrorMessage');
                    if (!elCreateOrUpdateTaskForm__ErrorMessage) {
                        elCreateOrUpdateTaskForm__ErrorMessage = document.createElement('div');
                        elCreateOrUpdateTaskForm__ErrorMessage.id = 'CreateOrUpdateTaskForm__ErrorMessage';
                        elCreateOrUpdateTaskForm__ErrorMessage.className = 'EndLineBox__ErrorMessage roboto-regular';
                    }
                    if (CreateTaskResult === 'The checklist exists in ActiveTasks!') {
                        elCreateOrUpdateTaskForm__ErrorMessage.innerText = 'Задача с таким именем уже существует и активна!';
                    }
                    else {   // 'The checklist exists in ClosedTasks!'
                        elCreateOrUpdateTaskForm__ErrorMessage.innerText = 'Задача с таким именем уже существует и уже завершена!';
                    }
                    elCreateOrUpdateTaskForm__Buttons__MainLine__LineButtons.prepend(elCreateOrUpdateTaskForm__ErrorMessage);
                }
            }
        }
    }

    elMain.appendChild(
        TextField__MainLine({
            id: 'CreateOrUpdateTaskForm__TextField',
            LableText: 'Название Задачи:',
            TextFieldPlaceholder: 'Введите название задачи...',
            TextFieldValue: taskName,
            onChange: cbChangeValueLineName__TextField,
            onInput: cbInputValueLineName__TextField,
        })
    );

    elMain.appendChild(
        MultilineTextField_MainLine({
            id: 'CreateOrUpdateTaskForm__MultilineTextField',
            TextFieldPlaceholder: 'Опишите что нужно сделать...',
            TextFieldValue: taskDescription,
            onChange: cbChangeValueLineDescription__TextField,
            onInput: cbInputValueLineDescription__TextField,
        })
    );

    elMain.appendChild(
        Buttons__MainLine({ //`${LineId}__Buttons__MainLine__LineButtons` => CreateOrUpdateTaskForm__Buttons__MainLine__LineButtons
            LineId: 'CreateOrUpdateTaskForm',
            Buttons: {
                CreateOrUpdateTaskForm__CancelButton: { // id `${Button_id}__Buttons__MainLine` => CreateOrUpdateTaskForm__CancelButton__Buttons__MainLine
                    text: 'Отмена',
                    variant: 'Error',
                    onClick: cbOnClickButton__Cancel,
                },
                CreateOrUpdateTaskForm__ApplyButton: {  // id `${Button_id}__Buttons__MainLine` => CreateOrUpdateTaskForm__ApplyButton__Buttons__MainLine
                    text: 'Готово',
                    variant: 'Success',
                    disabled: !Boolean(taskName),
                    onClick: cbOnClickButton__Apply,
                }
            }
        })
    );

}

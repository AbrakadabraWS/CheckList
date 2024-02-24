
const CreateOrUpdateCheckListForm = (elMain, activeCheckList) => {
    console.log(activeCheckList)
    let checkListName = activeCheckList || '';
    // *** Заголовок ***
    elMain.appendChild(MainHeader(activeCheckList ? 'Редактирование чек-листа' : `Создание чек-листа`));

    const cbChangeValueLineName__TextField = (event) => {
        checkListName = event.target.value;

    }

    const cbInputValueLineName__TextField = (event) => {
        if (event.target.value) {
            var elCreateOrUpdateCheckListForm__ApplyButton__Buttons__MainLine = document.getElementById('CreateOrUpdateCheckListForm__ApplyButton__Buttons__MainLine');
            elCreateOrUpdateCheckListForm__ApplyButton__Buttons__MainLine.disabled = false;
        }

        if (event.target.value.length === 0) {
            var elCreateOrUpdateCheckListForm__ApplyButton__Buttons__MainLine = document.getElementById('CreateOrUpdateCheckListForm__ApplyButton__Buttons__MainLine');
            elCreateOrUpdateCheckListForm__ApplyButton__Buttons__MainLine.disabled = true;
        }

        let elCreateOrUpdateCheckListForm__LineButtons__ErrorMessage = document.getElementById('CreateOrUpdateCheckListForm__LineButtons__ErrorMessage');
        if (elCreateOrUpdateCheckListForm__LineButtons__ErrorMessage) {
            elCreateOrUpdateCheckListForm__LineButtons__ErrorMessage.remove();
        }
    }

    elMain.appendChild(
        TextField__MainLine({
            id: 'CreateOrUpdateCheckListForm',
            LableText: 'Название чек-листа:',
            TextFieldPlaceholder: 'Введите название чек-листа (не более 25 символов)...',
            TextFieldValue: checkListName,
            MaxLength: 25,
            onChange: cbChangeValueLineName__TextField,
            onInput: cbInputValueLineName__TextField,
        })
    );


    // *** Последняя строка: Кнопка подтверждения создания/рерактирования чек-листа ***
    // +++ Кнопка: Отмена
    const cbCreateOrUpdateCheckListForm__LineButtons__CancelButton = () => {
        updateMain('AllTasks', elMain);
    }

    // +++ Кнопка: Готово
    const cbCreateOrUpdateCheckListForm__LineButtons__ApplyButton = () => {
        if (activeCheckList) {
            if (activeCheckList !== checkListName) {
                EditCheckListName(activeCheckList, checkListName);
            }
            updateMain('AllTasks', elMain);
        }
        else {
            if (CreateNewCheckList(checkListName) === 'The checklist has been created') {
                updateButtonsStyles('AllTasks');
                updateMain('AllTasks', elMain);
            }
            else {
                let elCreateOrUpdateCheckListForm__Buttons__MainLine__LineButtons = document.getElementById('CreateOrUpdateCheckListForm__Buttons__MainLine__LineButtons');
                if (elCreateOrUpdateCheckListForm__Buttons__MainLine__LineButtons) {
                    let elCreateOrUpdateCheckListForm__LineButtons__ErrorMessage = document.getElementById('CreateOrUpdateCheckListForm__LineButtons__ErrorMessage');
                    if (!elCreateOrUpdateCheckListForm__LineButtons__ErrorMessage) {
                        elCreateOrUpdateCheckListForm__LineButtons__ErrorMessage = document.createElement('div');
                        elCreateOrUpdateCheckListForm__LineButtons__ErrorMessage.id = 'CreateOrUpdateCheckListForm__LineButtons__ErrorMessage';
                        elCreateOrUpdateCheckListForm__LineButtons__ErrorMessage.className = 'EndLineBox__ErrorMessage roboto-regular';
                    }
                    elCreateOrUpdateCheckListForm__LineButtons__ErrorMessage.innerText = 'Чек-лист с таким именем уже существует!';
                    elCreateOrUpdateCheckListForm__Buttons__MainLine__LineButtons.prepend(elCreateOrUpdateCheckListForm__LineButtons__ErrorMessage);
                }

            }
        }
    }

    elMain.appendChild(Buttons__MainLine({ //`${LineId}__Buttons__MainLine__LineButtons` => CreateOrUpdateCheckListForm__Buttons__MainLine__LineButtons
        LineId: 'CreateOrUpdateCheckListForm',
        Buttons: {
            CreateOrUpdateCheckListForm__CancelButton: {// id `${Button_id}__Buttons__MainLine` => CreateOrUpdateCheckListForm__CancelButton__Buttons__MainLine
                text: 'Отмена',
                variant: 'Error',
                onClick: cbCreateOrUpdateCheckListForm__LineButtons__CancelButton,
            },
            CreateOrUpdateCheckListForm__ApplyButton: { // id `${Button_id}__Buttons__MainLine` => CreateOrUpdateCheckListForm__ApplyButton__Buttons__MainLine
                text: 'Готово',
                variant: 'Success',
                disabled: !Boolean(checkListName),
                onClick: cbCreateOrUpdateCheckListForm__LineButtons__ApplyButton,
            }
        }
    }))



}

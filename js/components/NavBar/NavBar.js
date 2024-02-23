

const updateButtonsStyles = (buttonName, baseStyle) => {
    var elNavBar__ButtonAllCheckLists = document.getElementById('NavBar__Button--AllСheckLists');
    var elNavBar__ButtonAllTasks = document.getElementById('NavBar__Button--AllTasks');
    var elNavBar__ButtonActiveTask = document.getElementById('NavBar__Button--ActiveTasks');
    var elNavBar__ButtonClosedTasc = document.getElementById('NavBar__Button--ClosedTasks');
    elNavBar__ButtonAllCheckLists.className = buttonName === 'AllСheckLists' ? `${baseStyle} NavBar__Button--colorActive` : `${baseStyle} NavBar__Button--colorDefault`;
    elNavBar__ButtonAllTasks.className = buttonName === 'AllTasks' ? `${baseStyle} NavBar__Button--colorActive` : `${baseStyle} NavBar__Button--colorDefault`;
    elNavBar__ButtonActiveTask.className = buttonName === 'ActiveTasks' ? `${baseStyle} NavBar__Button--colorActive` : `${baseStyle} NavBar__Button--colorDefault`;
    elNavBar__ButtonClosedTasc.className = buttonName === 'ClosedTasks' ? `${baseStyle} NavBar__Button--colorActive` : `${baseStyle} NavBar__Button--colorDefault`;

}


const NavBar = () => {
    let elNavBar = document.createElement('div');
    elNavBar.id = 'NavBar';
    elNavBar.className = 'NavBar';
    const BUTTONS_CLASS_NAME = 'NavBar__Button roboto-regular';


    let elNavBar__SiteName = document.createElement('span');
    elNavBar__SiteName.className = 'NavBar__SiteName roboto-black-italic';
    elNavBar__SiteName.innerText = 'Чек-лист';

    const cbAllСheckLists = () => {
        console.log('Button AllTask click');
        updateButtonsStyles('AllСheckLists', BUTTONS_CLASS_NAME);
        updateMain('ChooseCheckListForm');
    };

    const cbAllTask = () => {
        console.log('Button AllTask click');
        updateButtonsStyles('AllTasks', BUTTONS_CLASS_NAME);
        updateMain('AllTasks');
    };

    const cbActiveTasks = () => {
        console.log('Button ActiveTasks click');
        updateButtonsStyles('ActiveTasks', BUTTONS_CLASS_NAME);
        updateMain('ActiveTasks');
    };

    const cbClosedTasks = () => {
        console.log('Button ClosedTasks click');
        updateButtonsStyles('ClosedTasks', BUTTONS_CLASS_NAME);
        updateMain('ClosedTasks');
    };

    elNavBar.appendChild(elNavBar__SiteName);
    elNavBar.appendChild(
        Button({
            text: 'Чек-листы',
            id: 'NavBar__Button--AllСheckLists',
            className: `${BUTTONS_CLASS_NAME} NavBar__Button--colorDefault`,
            onClick: cbAllСheckLists,
        })
    );
    elNavBar.appendChild(
        Button({
            text: 'Все задачи',
            id: 'NavBar__Button--AllTasks',
            className: `${BUTTONS_CLASS_NAME} NavBar__Button--colorActive`,
            onClick: cbAllTask,
        })
    );
    elNavBar.appendChild(
        Button({
            text: 'Активные задачи',
            id: 'NavBar__Button--ActiveTasks',
            className: `${BUTTONS_CLASS_NAME} NavBar__Button--colorDefault`,
            onClick: cbActiveTasks,
        })
    );
    elNavBar.appendChild(
        Button({
            text: 'Завершенные задачи',
            id: 'NavBar__Button--ClosedTasks',
            className: `${BUTTONS_CLASS_NAME} NavBar__Button--colorDefault`,
            onClick: cbClosedTasks,
        })
    );

    return elNavBar;
}




//     return (`
//         <nav id="NavBar" class="NavBar">
//         <span class="NavBar__SiteName roboto-black-italic">Чек-лист</span>
//         ${Button({
//         text: 'Все задачи',
//         id: 'NavBar__Button--AllTasks',
//         className: 'NavBar__Button roboto-regular',
//         onClick: cbAllTask,
//     })}
//     ${Button({
//         text: 'Активные задачи',
//         id: 'NavBar__Button--ActiveTasks',
//         className: 'NavBar__Button roboto-regular',
//     })}
//     ${Button({
//         text: 'Завершенные задачи',
//         id: 'NavBar__Button--ClosedTasks',
//         className: 'NavBar__Button roboto-regular',
//     })}
//         </nav>
//     `);
// }

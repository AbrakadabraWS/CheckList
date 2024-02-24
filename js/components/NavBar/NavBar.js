



const NavBar = () => {
    let elNavBar = document.createElement('div');
    elNavBar.id = 'NavBar';
    elNavBar.className = 'NavBar';
    const NAV_BAR_BUTTONS_CLASS_NAME = 'NavBar__Button roboto-regular';


    let elNavBar__SiteName = document.createElement('span');
    elNavBar__SiteName.className = 'NavBar__SiteName roboto-black-italic';
    elNavBar__SiteName.innerText = 'Чек-лист';

    const cbAllСheckLists = () => {
        console.log('Button AllTask click');
        updateButtonsStyles('AllСheckLists');
        updateMain('ChooseCheckListForm');
    };

    const cbAllTask = () => {
        console.log('Button AllTask click');
        updateButtonsStyles('AllTasks');
        updateMain('AllTasks');
    };

    const cbActiveTasks = () => {
        console.log('Button ActiveTasks click');
        updateButtonsStyles('ActiveTasks');
        updateMain('ActiveTasks');
    };

    const cbClosedTasks = () => {
        console.log('Button ClosedTasks click');
        updateButtonsStyles('ClosedTasks');
        updateMain('ClosedTasks');
    };

    elNavBar.appendChild(elNavBar__SiteName);
    elNavBar.appendChild(
        Button({
            text: 'Чек-листы',
            id: 'NavBar__Button--AllСheckLists',
            className: `${NAV_BAR_BUTTONS_CLASS_NAME} NavBar__Button--colorDefault`,
            onClick: cbAllСheckLists,
        })
    );
    elNavBar.appendChild(
        Button({
            text: 'Все задачи',
            id: 'NavBar__Button--AllTasks',
            className: `${NAV_BAR_BUTTONS_CLASS_NAME} NavBar__Button--colorActive`,
            onClick: cbAllTask,
        })
    );
    elNavBar.appendChild(
        Button({
            text: 'Активные задачи',
            id: 'NavBar__Button--ActiveTasks',
            className: `${NAV_BAR_BUTTONS_CLASS_NAME} NavBar__Button--colorDefault`,
            onClick: cbActiveTasks,
        })
    );
    elNavBar.appendChild(
        Button({
            text: 'Завершенные задачи',
            id: 'NavBar__Button--ClosedTasks',
            className: `${NAV_BAR_BUTTONS_CLASS_NAME} NavBar__Button--colorDefault`,
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

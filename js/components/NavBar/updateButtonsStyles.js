const updateButtonsStyles = (buttonName) => {
    var elNavBar__ButtonAllCheckLists = document.getElementById('NavBar__Button--AllСheckLists');
    var elNavBar__ButtonAllTasks = document.getElementById('NavBar__Button--AllTasks');
    var elNavBar__ButtonActiveTask = document.getElementById('NavBar__Button--ActiveTasks');
    var elNavBar__ButtonClosedTasc = document.getElementById('NavBar__Button--ClosedTasks');

    elNavBar__ButtonAllCheckLists.className = buttonName === 'AllСheckLists' ?
        `${NAV_BAR_BUTTONS_CLASS_NAME} NavBar__Button--colorActive` :
        `${NAV_BAR_BUTTONS_CLASS_NAME} NavBar__Button--colorDefault`;
    elNavBar__ButtonAllTasks.className = buttonName === 'AllTasks' ?
        `${NAV_BAR_BUTTONS_CLASS_NAME} NavBar__Button--colorActive` :
        `${NAV_BAR_BUTTONS_CLASS_NAME} NavBar__Button--colorDefault`;
    elNavBar__ButtonActiveTask.className = buttonName === 'ActiveTasks' ?
        `${NAV_BAR_BUTTONS_CLASS_NAME} NavBar__Button--colorActive` :
        `${NAV_BAR_BUTTONS_CLASS_NAME} NavBar__Button--colorDefault`;
    elNavBar__ButtonClosedTasc.className = buttonName === 'ClosedTasks' ?
        `${NAV_BAR_BUTTONS_CLASS_NAME} NavBar__Button--colorActive` :
        `${NAV_BAR_BUTTONS_CLASS_NAME} NavBar__Button--colorDefault`;

}

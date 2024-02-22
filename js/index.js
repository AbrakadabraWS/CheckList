
const root = () => {
    let root = document.getElementById('root');
    root.appendChild(NavBar());
    root.appendChild(Main());
    root.appendChild(Footer());
};

window.onload = () => {
    root();
};

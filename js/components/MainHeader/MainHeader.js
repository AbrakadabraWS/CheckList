

const MainHeader = (headerText) => {

    let elMainHeader = document.createElement('div');
    elMainHeader.id = `MainHeader--${headerText}`;
    elMainHeader.className = 'MainHeader roboto-regular';
    elMainHeader.innerText = headerText;

    return elMainHeader;
} 

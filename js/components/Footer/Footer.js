
const Footer = () => {
    let year = new Date().getFullYear();
    let elFooter = document.createElement('footer');
    elFooter.id = 'Footer';
    elFooter.className = 'Footer roboto-light';
    elFooter.innerText = `By Abrakadabra worckshop ${year}`;

    return elFooter;
}

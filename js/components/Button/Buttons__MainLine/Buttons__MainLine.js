
const Buttons__MainLine = ({
    LineId = '',
    Buttons = {}
}) => {
    let elButtons__MainLine__LineButtons = document.createElement('div');
    elButtons__MainLine__LineButtons.id = `${LineId}__Buttons__MainLine__LineButtons`;
    elButtons__MainLine__LineButtons.className = 'EndLineBox';

    let Buttons_id = Object.keys(Buttons);

    Buttons_id.forEach((Button_id) => {
        elButtons__MainLine__LineButtons.appendChild(
            Button({
                text: Buttons[Button_id].text,
                id: `${Button_id}__Buttons__MainLine`,
                className: `EndLineBox__Button--${Buttons[Button_id].variant || 'Success'}`,
                disabled: Buttons[Button_id].disabled || false,
                onClick: Buttons[Button_id].onClick,
            })
        );

    });

    return elButtons__MainLine__LineButtons;

}

import React from 'react';
import s from '../Dialogs.module.css';

const Message = (props) => {
    // debugger
    return (
        <div className={s.dialog}>
            { props.message }
        </div>
    )
}
export default Message;
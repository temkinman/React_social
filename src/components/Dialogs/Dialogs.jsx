import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';

const Dialogs = (props) => {

  let dialogsData = props.dialogsPage.dialogs
    .map(d => <DialogItem userName={d.userName} id={d.id} src={d.src} key={d.id} />);

  let messagesElements = props.dialogsPage.messages
    .map(m => <Message message={m.message} key={m.id} />);

  let text = props.dialogsPage.newTextMessage;

  let addMessage = () => {
    props.sendMessage();
  }

  let updateTextMessage = (e) => {
    let newtext = e.target.value;
    props.updateTextMessage(newtext);
  }

  return (
    <div className={s.dialogs}>
      <div>
        {dialogsData}
      </div>
      <div>
        {messagesElements}
      </div>
      <div>
      </div>
      <div>
        <textarea className={s.addMessage}
          //ref={newMessageElement} belons to my version
          placeholder="Enter your message"
          onChange={updateTextMessage}
          value={text}  ></textarea>
        <div>
          <button className={s.btn + " " + s.mybtn}
            onClick={addMessage}
          >send</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
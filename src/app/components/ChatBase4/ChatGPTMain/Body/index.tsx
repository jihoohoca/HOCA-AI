import React, { useState } from 'react';
import style from './style.css';
import refresh from '../../../../images/refresh-ccw.svg';
import ArrowDown from '../../../../images/arrow down.svg';
import Trash from '../../../../images/trash.svg';
export const Body = () => {
  const [changeSource, setChangeSource] = useState({
    isChatBot: true,
    isSettings: false,
    isDashboard: false,
    isSources: false,
    isDelete: false
  });

  const [changeConversation, setChangeConversation] = useState({
    isConversation : true,
    isLeads :false
  })

  const handleClickChatBot = () => {
    setChangeSource({
      ...changeSource,
      isChatBot: true,
      isSettings: false,
      isDashboard: false,
      isSources: false,
      isDelete: false
    });
  };

  const handleClickSetting = () => {
    setChangeSource({
      ...changeSource,
      isChatBot: false,
      isSettings: true,
      isDashboard: false,
      isSources: false,
      isDelete: false
    });
  };

  const handleClickDashBoard = () => {
    setChangeSource({
      ...changeSource,
      isChatBot: false,
      isSettings: false,
      isDashboard: true,
      isSources: false,
      isDelete: false
    });
  };

  const handleClickSources = () => {
    setChangeSource({
      ...changeSource,
      isChatBot: false,
      isSettings: false,
      isDashboard: false,
      isSources: true,
      isDelete: false
    });
  };

  const handleClickDelete = () => {
    setChangeSource({
      ...changeSource,
      isChatBot: false,
      isSettings: false,
      isDashboard: false,
      isSources: false,
      isDelete: true
    });
  };

  const handleClickConversation = () => {
    setChangeConversation({
      ...changeConversation, isConversation:true,isLeads:false
    })
  }

  const handleClickLeads = () => {
    setChangeConversation({
      ...changeConversation, isConversation:false,isLeads:true
    })
  }
  return (
    <div>
      <div className={style.container}>
        <div onClick={handleClickChatBot}>
          Chatbot
          {changeSource.isChatBot && <div className={style.horizontal}></div>}
        </div>
        <div onClick={handleClickSetting}>
          Settings
          {changeSource.isSettings && <div className={style.horizontal}></div>}
        </div>
        <div onClick={handleClickDashBoard}>
          Dashboard
          {changeSource.isDashboard && <div className={style.horizontal}></div>}
        </div>
        <div onClick={handleClickSources}>
          Sources
          {changeSource.isSources && <div className={style.horizontal}></div>}
        </div>
        <div onClick={handleClickDelete}>
          Delete
          {changeSource.isDelete && <div className={style.horizontal}></div>}
        </div>
      </div>

      {changeSource.isChatBot && (
        <div className={style.chatbot}>
          <div className={style.refresh}>
            <img src={refresh}></img>{' '}
          </div>
          <div className={style.horizontal_chatgpt}></div>
          <div className={style.chatgpt_answer}>Hi! What can I help you with?Hi! What can I help you with?</div>
          <div className={style.send_message}>
            <div>28 message credits left</div>
            <div className={style.button_input}>
              <input className={style.input_message} placeholder="Send a message"></input>
            </div>
          </div>
        </div>
      )}

      {changeSource.isDashboard && (
        <div>
          <div className={style.container_chatbase6}>
            <div onClick={handleClickConversation}>Conversations 
            {
              changeConversation.isConversation && (<div className={style.horizontal}></div>)
            }
            </div>
            <div onClick={handleClickLeads}>Leads 
            {
              changeConversation.isLeads && ( <div className={style.horizontal}></div>)
            }
            </div>
          </div>
          {
            changeConversation.isConversation && (<div> 

          <div className={style.pick_date}>
            <input className={style.input_date} placeholder="Pick date range"></input>
          </div>
          <div className={style.container_source}>
            <div>Source</div>
            <div>
              <img src={ArrowDown}></img>{' '}
            </div>
          </div>

          <div>
            <button type="button" className={style.new_chat}>
              Export filtered conversations (JSON)
            </button>
            <button type="button" className={style.new_chat}>
              Export filtered conversations (PDF)
            </button>
          </div>
            </div>)
          }
        {
          changeConversation.isLeads && ( <div className={style.container_button_file}>
            <button type="button" className={style.button_file}>
             Export customer (CSV)
            </button>
            <button type="button" className={style.button_file}>
            Export customer (PDF)
            </button>
          </div>)
        }

          <div className={style.text_footer}> No conversations found</div>
        </div>
      )}

      {changeSource.isSources && (
        <div>
          <div className={style.upload_file}>Upload Files</div>
          <div className={style.upload_area}>
            <div className={style.upload_btn_wrapper}>
              <button className={style.btn}></button>
              <input type="file" name="myfile" />
            </div>
            <div className={style.text_file_upload}>
              Drag & drop files here, or click to select files Supported File Types: .pdf, .doc, .docx, .txt
            </div>
          </div>
          <div className={style.note}>
            NOTE: Uploading a PDF using safari doesn't work, we're looking into the issue. Make sure the text is OCR'd,
            i.e. you can copy it.
          </div>
          <div className={style.container_delete}>
            <div>
              <div>Already Included Files (2,097 chars) </div>
              <div>Senior Graphic/UI Designer.pdf </div>
            </div>
            <div>
              <img src={Trash}></img>{' '}
            </div>
          </div>
          <div className={style.text_include_source}>Included sources:</div>
          <div>
            <div className={style.button_create}>
              <button className={style.button_create_chatbox}>Create Chatbox</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

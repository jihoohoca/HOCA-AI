import React, { useState } from 'react';
import style from './style.css';

export const Body = () => {
  const [changeSource, setChangeSource] = useState({
    isFile: true,
    isData: false,
    isQA: false
  });

  const handleClickFile = () => {
    setChangeSource({ ...changeSource, isData: false, isQA: false, isFile: true });
  };

  const handleClickData = () => {
    setChangeSource({ ...changeSource, isData: true, isFile: false, isQA: false });
  };

  const handleClickQA = () => {
    setChangeSource({ ...changeSource, isQA: true, isFile: false, isData: false });
  };

  return (
    <>
      <div className={style.container}>
        <div onClick={handleClickFile} className={style.text_file}>
          Files
          {changeSource.isFile && <div className={style.horizontal}></div>}
        </div>
        <div onClick={handleClickData} className={style.text_text}>
          Text
          {changeSource.isData && <div className={style.horizontal}></div>}
        </div>
        <div onClick={handleClickQA} className={style.text_qa}>
          Q&A
          {changeSource.isQA && <div className={style.horizontal}></div>}
        </div>
      </div>

      {changeSource.isFile && (
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
        </div>
      )}

      {changeSource.isData && <textarea className={style.input_data} placeholder="Data"></textarea>}

      {changeSource.isQA && (
        <div>
          <button className={style.button_qa}>Add</button>
        </div>
      )}
      <div className={style.text_include_source}>Included sources:</div>
    </>
  );
};

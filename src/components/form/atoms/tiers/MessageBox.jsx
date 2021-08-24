import React, {useEffect} from 'react';
import 'tinymce/tinymce';
import 'tinymce/icons/default';
import 'tinymce/themes/silver';
import 'tinymce/plugins/autoresize';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/table';
import 'tinymce/skins/ui/oxide-dark/skin.min.css';
import 'tinymce/skins/ui/oxide-dark/content.css';
import 'tinymce/skins/ui/oxide-dark/content.min.css';
import { Editor } from '@tinymce/tinymce-react';
import tinymce from 'tinymce/tinymce';

const MessageBox = ({nextTier, previousTier, values}) => {

  const updateMessageField = () => {
    /*TinyMCE editor wants to be fancy and hijack the onChange event with their own onEditorChange event. We lose reference to the synthetic event
    'e'. Therefore, we need seperate function to set values["message"] equal to "tinymce.activeEditor.getContent({format: "text"})"
    */
    let content =  tinymce.activeEditor.getContent({format: "text"});
    let contentHtml =  tinymce.activeEditor.getContent();
  
    values.current["message"] = content;
    values.current["messageHtml"] = contentHtml;
  }
  

  useEffect(() => {
    const {messageHtml} = values.current;
    tinymce.activeEditor.setContent(messageHtml);
  }, [values]);

  
  useEffect(() => {
    //iframe inner document implementation varies by browser. Check which one it is 
    function iframeRef( frameRef ) {
      return frameRef.contentWindow
        ? frameRef.contentWindow.document
        : frameRef.contentDocument
    }
  
    const inside = iframeRef( document.getElementById('message_ifr') );//get document root mounted in tinymce's iframe
    inside.body.setAttribute("style", "color: white!important"); //enjoy yet another hack around tinymce's horrible customization/integration capabilitites
  }, [])
  
  return (
    <>
      <Editor
        id="message"
        apiKey= {process.env.REACT_APP_TINYMCEKEY}
        init={{
          skin: false,
          content_css: false,
          height: 500,
          theme: 'silver',
          menubar: "edit view insert format table tools help",
          mobile: {
            selector: "message",
            menubar: true,
            autoresize_min_height: 400,
            autoresize_max_height: 1000,
            toolbar: [ 'undo | bold italic underline | alignleft aligncenter alignright' ]
          },
          toolbar: 'undo redo | formatselect | bold italic underline | alignleft aligncenter alignright alignjustify |bullist numlist outdent indent | spellchecker | removeformat | help'
        }}
        onEditorChange={updateMessageField}
        type="text/html"
      />

      <div className="form__item">
        <button className="formBtn" onClick={(e) => previousTier(e)}>
          <span>Back</span>
        </button>
        <button type="submit" className="formBtn" onClick={(e) => nextTier(e)}>
          <span>Send E-mail</span>
        </button>
      </div>
    </>   
    );
}

export default MessageBox;
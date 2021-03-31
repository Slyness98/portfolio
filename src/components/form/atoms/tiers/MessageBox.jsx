import React, {useEffect} from 'react';
import 'tinymce/tinymce';
import 'tinymce/icons/default';
import 'tinymce/themes/silver';
import 'tinymce/plugins/autoresize';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/table';
import 'tinymce/skins/ui/oxide/skin.min.css';
import 'tinymce/skins/ui/oxide/content.min.css';
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
    console.log("current values up to messageBox: ", values)
    const {messageHtml} = values.current;
    tinymce.activeEditor.setContent(messageHtml);
  }, [values]);
  
  return (
    <>
      <Editor
        id="message"
        apiKey= {process.env.REACT_APP_TINYMCEKEY}
        init={{
          // plugins: ['autoresize'],
          skin: false,
          content_css: false,
          height: 500,
          theme: 'silver',
          menubar: "edit view insert format table tools help",
          mobile: {
            selector: "message",
            menubar: true,
            // plugins: ['autoresize'],
            autoresize_min_height: 400,
            autoresize_max_height: 1000,
            toolbar: [ 'undo | bold italic underline | alignleft aligncenter alignright' ]
          },
          // plugins: [
          //   'advlist autolink autosave autoresize link image lists charmap hr anchor',
          //   'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime nonbreaking',
          //   'table template paste textcolor importcss textpattern spellchecker help'
          // ],
          toolbar:
            'undo redo | formatselect | bold italic underline | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | spellchecker | removeformat | help'
        }}
        onEditorChange={updateMessageField}
        type="text/html"
      />

      <div className="form__item">
        <button className="backBtn" onClick={(e) => previousTier(e)}>Back</button>
        <button type="submit" className="submitBtn" onClick={(e) => nextTier(e)}>Send E-mail</button>
      </div>
    </>   
    );
}

export default MessageBox;
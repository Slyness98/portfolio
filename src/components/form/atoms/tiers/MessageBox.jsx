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

const MessageBox = ({nextTier, previousTier, updateFieldValue, values}) => {
  
  const handleEditorChange = () => {
    let content =  tinymce.activeEditor.getContent({format: "text"});
    let contentHtml =  tinymce.activeEditor.getContent();
    updateFieldValue(content, contentHtml)
  }

  useEffect(() => {
    const {messageHtml} = values.current;
    tinymce.activeEditor.setContent(messageHtml);
  }, [values])

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
            menubar: true,
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
        onEditorChange={handleEditorChange}
        type="text/html"
      />

    <div className="form__item">
      <button className="backBtn" onClick={(e) => previousTier(e)}>Back</button>
      <button type="submit" className="submitBtn" onClick={(e) => nextTier(e)}>Send E-mail </button>
    </div>
    </>   
    );
}

export default MessageBox;
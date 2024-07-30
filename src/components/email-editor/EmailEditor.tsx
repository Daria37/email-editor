import styles from './EmailEditor.module.scss';
import { useRef, useState} from 'react';
import parse from 'html-react-parser';
import { Bold, Eraser, Italic, Underline } from 'lucide-react';
import { applyStyle, TStyle } from './apply-styles.ts';

export function EmailEditor() {
  const [text, setText] = useState(`Hey!
  Lorem ipsum dolor sit amet consectetur, adipisicing 
  elit. Beatae voluptatibus, <b>ipsum</b> modi facere, minus 
  provident culpa corrupti eum, quos aliquid quasi soluta 
  repudiandae. Inventore, cumque tempora perferendis minus quae saepe?`);

  const [selectionStart, setSelectionStart] = useState(0);
  const [selectionEnd, setSelectionEnd] = useState(0);

  const updateSelection = () => {
    if (!textRef.current) return
    setSelectionStart(textRef.current.selectionStart);
    setSelectionEnd(textRef.current.selectionEnd);
  }

  const textRef = useRef<HTMLTextAreaElement | null>(null);

  const applyFormat = (type: TStyle) => {
    const selectedText = text.substring(selectionStart, selectionEnd); // выделенный текст

    if (!selectedText) return

    const before = text.substring(0, selectionStart); // текст до выделенного фрагмента
    
    const after = text.substring(selectionEnd); // текст после выделенного фрагмента

    setText(before + applyStyle(type, selectedText) + after);
  }

  return (
  <div>
  <h1>Email Editor</h1>
  <div className={styles.preview}>{parse(text)}</div>
  <div className={styles.card}>
    <textarea 
    ref = {textRef}
    className={styles.editor} 
    spellCheck='false'
    onSelect={updateSelection}
    value={text}
    onChange={e => setText(e.target.value)}
    >
    {text}
    </textarea>
    <div className={styles.actions}>
      <div className={styles.tools}>
      <button onClick={() => setText('')}>
        <Eraser size={17} />
        </button>
      <button onClick={() => applyFormat('bold')}>
        <Bold size={17} />
        </button>
      <button onClick={() => applyFormat('italic')}>
        <Italic size={17} />
        </button>
      <button onClick={() => applyFormat('underline')}>
        <Underline size={17} />
        </button>
      </div>
      <button>Send now</button>
    </div>
  </div>
  </div>
  )
}
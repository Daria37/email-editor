import styles from './EmailEditor.module.scss'
import { Eraser } from 'lucide-react';
import { Bold } from 'lucide-react';
import { Italic } from 'lucide-react';
import { Underline } from 'lucide-react';

export function EmailEditor() {
  return (
  <div>
  <h1>Email Editor</h1>
  <div className={styles.card}>
    <textarea className={styles.editor}>
    Hey!
    Lorem ipsum dolor sit amet consectetur, adipisicing 
    elit. Beatae voluptatibus, ipsum modi facere, minus 
    provident culpa corrupti eum, quos aliquid quasi soluta 
    repudiandae. Inventore, cumque tempora perferendis minus quae saepe?
    </textarea>
    <div className={styles.actions}>
      <div className={styles.tools}>
      <button>
        <Eraser size={17} />
        </button>
      <button>
        <Bold size={17} />
        </button>
      <button>
        <Italic size={17} />
        </button>
      <button>
        <Underline size={17} />
        </button>
      </div>
      <button>Send now</button>
    </div>
  </div>

  </div>
  )
}
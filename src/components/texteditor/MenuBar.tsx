import type { Editor } from '@tiptap/core'

type MenuBarProps = {
  editor: Editor | null
}

const MenuBar = ({ editor }: MenuBarProps) => {
  if (!editor) return null

  return (
    <div className="editor-toolbar">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'active' : ''}
      >
        B
      </button>

      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'active' : ''}
      >
        I
      </button>
    </div>
  )
}

export default MenuBar

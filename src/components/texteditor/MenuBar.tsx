import type { Editor } from '@tiptap/core'

type MenuBarProps = {
  editor: Editor | null
}

const MenuBar = ({ editor }: MenuBarProps) => {
  if (!editor) return null

  return (
    <div className="editor-toolbar">
      <button
        onClick={() => editor?.chain().focus().toggleBold().run()}
        className="rounded-md border border-gray-300 bg-white px-3 py-1 hover:bg-gray-100"
      >
        B
      </button>

      <button
        onClick={() => editor?.chain().focus().toggleItalic().run()}
        className="rounded-md border border-gray-300 bg-white px-3 py-1 hover:bg-gray-100"
      >
        I
      </button>
    </div>
  )
}

export default MenuBar

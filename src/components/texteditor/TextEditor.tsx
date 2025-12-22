import { EditorContent } from '@tiptap/react'
import type { Editor } from '@tiptap/core'

type TextEditorProps = {
  editor: Editor | null
}

const TextEditor = ({ editor }: TextEditorProps) => {
  if (!editor) return null

  return (
    <div className="h-full">
      <EditorContent editor={editor} />
    </div>
  )
}

export default TextEditor

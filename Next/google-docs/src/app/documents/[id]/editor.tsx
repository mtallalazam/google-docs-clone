"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export function Editor() {
    const editor = useEditor({
        editorProps: {
            attributes: {
                class: "focus:outline-none print:border-0 bg-white border border-gray-300 flex flex-col min-h-[1054px] w-[816px] cursor-text",
                style: "padding-right: 56px; padding-left: 56px; padding-top: 62px; padding-bottom: 62px;"
            }
        },
        extensions: [StarterKit],
        content: "<p>Hello World! 🌎️</p>",
        // Don't render immediately on the server to avoid SSR issues
        immediatelyRender: false,
    });

    return (
        <div className="size-full overflow-x-auto bg-stone-100 px-4 print:bg-white print:overflow-visible">
            <div className="min-w-max fles justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
                <EditorContent editor={editor} />
            </div>
        </div>
    );
}

import { Table, TableHeader, TableRow, TableCell } from "@tiptap/extension-table";
import type { Editor } from "@tiptap/core";
import { defineTool } from "../../lib";
import customMessages from "../../i18n/custom-messages";
import ToolButton from "./ToolButton.vue";

export default defineTool({
    key: "table",
    name: customMessages.tools.table,
    icon: "table",
    extension: [Table, TableHeader, TableRow, TableCell],
    toolbarButton: ToolButton,
    action: (editor: Editor) => editor.chain().focus().insertTable().run(),
    disabled: (editor: Editor) =>
        !editor.can().chain().focus().insertTable().run(),
    disabledInSingleLineMode: true,
    active: (editor: Editor) => editor.isActive("table"),
});

<template>
  <div class="code-mirror" ref="codeMirrorRef" />
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import { EditorView, minimalSetup } from "codemirror";
import { ViewUpdate } from "@codemirror/view";
import { markdown } from "@codemirror/lang-markdown";
import { EditorState } from "@codemirror/state";
import { autocompletion } from "@codemirror/autocomplete";

export default defineComponent({
  name: "CodeMirror",
  props: {
    markDownSource: {
      type: String,
      default: "",
    },
  },
  emits: ["change"],
  setup(props, { emit }) {
    const codeMirrorRef = ref<HTMLDivElement>();
    let editorView = {} as EditorView;
    const createEditorView = (markDownSource: string) => {
      const state = EditorState.create({
        doc: markDownSource,
        extensions: [
          // basicSetup 是一套插件集合，包含了很多常用插件
          minimalSetup,
          EditorView.lineWrapping,
          // 这里只使用 css 解析器
          markdown(),
          autocompletion(),
          // 新版本一切皆插件，所以实时侦听数据变化也要通过写插件实现
          EditorView.updateListener.of((v: ViewUpdate) => {
            emit("change", v.state.doc.toString());
          }),
          EditorView.editable.of(true),
        ],
      });
      if (Object.keys(editorView).length !== 0) {
        editorView.setState(state);
      } else {
        editorView = new EditorView({
          state,
          parent: codeMirrorRef.value as HTMLDivElement,
        });
      }
      return editorView;
    };
    onMounted(() => {
      console.log(codeMirrorRef.value);
      createEditorView(props.markDownSource);
      editorView.focus();
    });
    return {
      codeMirrorRef,
    };
  },
});
</script>

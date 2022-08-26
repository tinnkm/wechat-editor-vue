<template>
  <section>
    <div class="hint">
      全选复制或<a href="#" @click="copy" class="copy-button">点此复制</a
      >，然后在公众号编辑器粘贴
    </div>
    <div class="preview" contenteditable="true">
      <div ref="wechatBoxRef" v-html="output"></div>
    </div>
  </section>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  onUpdated,
  nextTick,
  onMounted,
  ref,
  PropType,
  watch,
} from "vue";
import { ElMessage } from "element-plus";

import { parserMarkdown, solveHtml } from "@/utils/Converter";

import { replaceStyle } from "@/utils/Utils";
import { defaultThemeHelper, ThemeHelper } from "@/themes/default/DefaultTheme";
export default defineComponent({
  props: {
    source: {
      type: String,
      default: "",
    },
    themeHelper: {
      type: Object as PropType<ThemeHelper>,
      default: () => defaultThemeHelper,
    },
  },
  // directives: {
  //   highlight: (el) => {
  //     const blocks = el.querySelectorAll("pre code");
  //     console.log(blocks);
  //     blocks.forEach((block: any) => {
  //       hljs.highlightElement(block);
  //     });
  //   },
  // },
  setup(props) {
    const wechatBoxRef = ref<HTMLElement>();
    const output = computed(() =>
      parserMarkdown(props.source, props.themeHelper)
    );
    watch(
      () => props.themeHelper.reRender && props.themeHelper.rendered,
      (nv) => {
        if (nv) {
          parserMarkdown(props.source, props.themeHelper);
        }
      }
    );
    // onUpdated(async () => {
    //   await nextTick();
    //   console.log(prettify);
    //   prettify.prettyPrint();
    // });
    const method = {
      copy: async () => {
        try {
          // navigator clipboard 需要https等安全上下文
          if (navigator.clipboard && window.isSecureContext) {
            // navigator clipboard 向剪贴板写文本
            const result = solveHtml(wechatBoxRef.value!);
            const data = new Blob([result], { type: "text/html" });
            // eslint-disable-next-line no-undef
            const item = new ClipboardItem({ "text/html": data });
            navigator.clipboard.write([item]).then(
              () => {
                ElMessage({
                  message: "复制成功",
                  type: "success",
                });
              },
              (e) => {
                ElMessage({
                  message: "复制失败" + e,
                  type: "error",
                });
              }
            );
          }
        } catch (err) {
          ElMessage({
            message: "当前浏览器不支持",
            type: "warning",
          });
        }
      },
    };
    return {
      output,
      wechatBoxRef,
      ...method,
    };
  },
});
</script>

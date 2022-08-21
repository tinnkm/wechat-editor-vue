<template>
  <section>
    <div class="hint">
      全选复制或<a href="#" @click="copy" class="copy-button">点此复制</a
      >，然后在公众号编辑器粘贴
    </div>
    <div class="preview" contenteditable="true">
      <div v-html="output"></div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { ElMessage } from "element-plus";
import { marked } from "marked";
import { WxRender } from "./render/render";
import { defaultThemeHelper } from "@/themes/default/DefaultTheme";

export default defineComponent({
  props: {
    source: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const output = computed(() =>
      marked(props.source, {
        renderer: new WxRender({
          themeHelper: defaultThemeHelper,
        }),
      })
    );

    const method = {
      copy: () => {
        try {
          // navigator clipboard 需要https等安全上下文
          if (navigator.clipboard && window.isSecureContext) {
            // navigator clipboard 向剪贴板写文本
            navigator.clipboard.writeText(output.value).then(
              () => {
                ElMessage({
                  message: "复制成功",
                  type: "success",
                });
              },
              () => {
                ElMessage({
                  message: "复制失败",
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
      ...method,
    };
  },
});
</script>

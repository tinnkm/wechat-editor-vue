<template>
  <el-container>
    <el-header class="top">
      <div>
        <img src="favicon.png" class="web-icon" alt="icon" />
        <span class="web-title">公众号 Markdown 编辑器 </span>
      </div>
      <el-form class="ctrl" :inline="true">
        <el-form-item label="Fonts">
          <el-select
            v-model="state.currentFonts"
            placeholder="选择字体"
            @change="fontChanged"
          >
            <el-option
              v-for="font in Object.keys(state.builtinFonts)"
              :style="{ fontFamily: font }"
              :key="font"
              :label="font"
              :value="state.builtinFonts[font]"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Font Size">
          <el-select
            v-model="state.currentSize"
            placeholder="选择段落字体大小"
            @change="sizeChanged"
          >
            <el-option
              v-for="size in Object.keys(state.builtinSize)"
              :key="size"
              :label="size"
              :value="state.builtinSize[size]"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Code Themes">
          <el-select
            v-model="state.currentCodeTheme"
            size="mini"
            placeholder="选择主题样式"
            @change="codeThemeChanged"
          >
            <el-option
              v-for="theme in Object.keys(state.builtinCodeTheme)"
              :key="theme"
              :label="theme"
              :value="state.builtinCodeTheme[theme]"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-header>
    <el-main class="main-body">
      <el-row :gutter="10" class="main-section">
        <el-col :span="12">
          <code-mirror
            :markDownSource="state.source"
            class="editor"
            @change="change"
          />
        </el-col>
        <el-col :span="12" class="preview-wrapper">
          <wechat-editor
            :source="state.output"
            :themeHelper="state.themeHelper"
          />
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import CodeMirror from "@/components/CodeMirror.vue";
import WechatEditor from "@/components/wechat-editor/WechatEditor.vue";
import { addStyleLabel, changeTheme, replaceStyle } from "@/utils/Utils";
import {
  BuiltinFonts,
  BuiltinSize,
  BuintinCodeTheme,
  STYLE_LABELS,
} from "@/utils/Constant";
import { defaultThemeHelper } from "@/themes/default/DefaultTheme";

export default defineComponent({
  components: { CodeMirror, WechatEditor },
  setup() {
    addStyleLabel(STYLE_LABELS);
    changeTheme("code-theme", "monokai-sublime");
    changeTheme("basic-theme", "app");
    const state = reactive({
      source: "",
      output: "",
      currentFonts: "",
      builtinFonts: BuiltinFonts,
      currentSize: "",
      builtinSize: BuiltinSize,
      currentCodeTheme: "",
      builtinCodeTheme: BuintinCodeTheme,
      themeHelper: defaultThemeHelper,
    });

    const method = {
      change: (source: string) => {
        state.output = source;
      },
      fontChanged: (fonts: string) => {
        state.themeHelper.getTheme().common["font-family"] = fonts;
      },
      sizeChanged: (size: string) => {
        state.themeHelper.getTheme().common["font-size"] = size;
      },
      codeThemeChanged: (codeTheme: string) => {
        replaceStyle("code-theme", codeTheme);
        state.themeHelper.reRender = true;
      },
    };

    return {
      state,
      ...method,
    };
  },
});
</script>

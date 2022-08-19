<template>
  <el-container>
    <el-header class="top">
      <!-- <div>
        <img src="favicon.png" class="web-icon" alt="icon" />
        <span class="web-title">公众号 Markdown 编辑器 </span>
      </div>
      <el-form size="mini" class="ctrl" :inline="true">
        <el-form-item label="Editor Themes">
          <el-select
            v-model="currentEditorTheme"
            size="mini"
            placeholder="选择字体"
            @change="editorThemeChanged"
          >
            <el-option
              v-for="editorTheme in editorThemes"
              :key="editorTheme.value"
              :label="editorTheme.label"
              :value="editorTheme.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Fonts">
          <el-select
            v-model="currentFont"
            size="mini"
            placeholder="选择字体"
            @change="fontChanged"
          >
            <el-option
              v-for="font in builtinFonts"
              :style="{ fontFamily: font.value }"
              :key="font.value"
              :label="font.label"
              :value="font.value"
            >
              <span class="select-item-left">{{ font.label }}</span>
              <span class="select-item-right">Abc</span>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Font Size">
          <el-select
            v-model="currentSize"
            size="mini"
            placeholder="选择段落字体大小"
            @change="sizeChanged"
          >
            <el-option
              v-for="size in sizeOption"
              :key="size.value"
              :label="size.label"
              :value="size.value"
            >
              <span class="select-item-left">{{ size.label }}</span>
              <span class="select-item-right">{{ size.desc }}</span>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Themes">
          <el-select
            v-model="currentTheme"
            size="mini"
            placeholder="选择主题样式"
            @change="themeChanged"
          >
            <el-option
              v-for="theme in themeOption"
              :key="theme.value"
              :label="theme.label"
              :value="theme.value"
            >
              <span class="select-item-left">{{ theme.label }}</span>
              <span class="select-item-right">{{ theme.author }}</span>
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-button class="about" @click="aboutDialogVisible = true"
        >关于</el-button
      > -->
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
          <wechat-editor :source="state.output" />
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import CodeMirror from "@/components/CodeMirror.vue";
import WechatEditor from "@/components/wechat-editor/WechatEditor.vue";

export default defineComponent({
  components: { CodeMirror, WechatEditor },
  setup() {
    const state = reactive({
      source: "",
      output: "",
    });

    const method = {
      change: (source: string) => {
        state.output = source;
      },
    };

    return {
      state,
      ...method,
    };
  },
});
</script>

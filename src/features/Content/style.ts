import { createStyles } from 'antd-style';

const TEXT2IMG_PROMPT_HEIGHT = 74;
const IMG2IMG_PROMPT_HEIGHT = 98;
const LONG_PRESS_PROGRESS_HEIGHT = 2;
export const useStyles = createStyles(
  (
    { css, token, stylish, isDarkMode, responsive },
    {
      isPromptResizable,
      layoutSplitPreview,
    }: { isPromptResizable: boolean; layoutSplitPreview: boolean },
  ) => {
    return {
      container: css`
        position: relative;
        flex: 1;
        min-width: ${layoutSplitPreview ? '200px' : '0'};

        .app {
          padding: 0 !important;
        }

        .gap:has(#quicksettings):first-child {
          gap: 0;
        }

        .float {
          ${stylish.blur};
          border: none;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          border-bottom-left-radius: 0;
        }

        [id^='html_info_']:has(div.prose) {
          p {
            color: ${token.colorTextSecondary} !important;
          }
        }

        [id^='html_info_']:has(div.prose),
        [id^='html_log_']:has(div.prose) {
          .pending {
            opacity: 1;
          }
        }

        #extras_generate {
          border-radius: ${token.borderRadius}px !important;
        }

        [id$='img_styles_dialog'] {
          label {
            white-space: normal;
          }

          .gradio-row:not(:first-child) {
            margin-top: 1em;
          }
        }

        .block.border_focus {
          border-color: ${token.colorPrimary} !important;
        }

        #txt2img_results,
        #img2img_results,
        #extras_results {
          padding: 0 !important;
          background: transparent !important;
        }

        #txt2img_render,
        #img2img_render {
          display: block !important;
          margin-top: 16px;
          padding: 0 !important;
          background: transparent;
        }

        .block.gradio-html:has(div.prose) {
          display: block;

          p {
            color: ${isDarkMode ? token.colorPrimaryText : token.colorPrimaryTextHover};

            b {
              color: ${isDarkMode ? token.colorPrimaryText : token.colorPrimaryTextHover};
            }
          }
        }

        #tab_pnginfo {
          #pnginfo_image {
            height: auto !important;
          }

          .block.gradio-html:has(div.prose) p {
            color: ${token.colorText};
          }
        }

        [id$='_override_settings_row']:has(div.hidden) {
          display: none;
        }

        .gradio-group:has(.gradio-group:has(div:empty)) {
          display: none;
        }

        ${responsive.mobile} {
          .gradio-row:has([id$='2img_results'], [id$='2img_results']) {
            flex-direction: column-reverse;
          }
        }

        .extra-networks {
          .tab-nav {
            [id*='_extra_'] {
              margin: 0;
            }
          }

          .gradio-button {
            &[id$='_extra_sortorder'],
            &[id$='_extra_refresh'] {
              align-self: center;
            }

            &.secondary.lg[id$='_extra_refresh'] {
              max-width: fit-content;
              height: var(--button-lg-tool-height) !important;
              min-height: var(--button-lg-tool-height) !important;
              max-height: var(--button-lg-tool-height) !important;

              font-size: var(--text-md);
            }
          }

          .extra-network-cards {
            .card {
              box-shadow: 0 0 0 3px ${token.colorFillSecondary};
              transition: var(--button-transition);

              &:hover {
                box-shadow: 0 0 0 3px ${token.colorPrimary};
              }

              .actions {
                background: rgb(0 0 0 / 30%);
                backdrop-filter: saturate(120%) blur(4px);
                box-shadow: none;

                .description {
                  line-height: 1.3;

                  a {
                    display: inline-block;
                    width: 100%;
                    padding-top: 4px;
                    font-weight: 400;
                  }
                }

                .name {
                  font-size: var(--text-lg);
                  line-height: 1.1;
                  word-break: break-word;
                  line-break: auto;
                }

                &:hover {
                  .description {
                    max-height: none;
                  }
                }
              }
            }
          }

          .extra-network-controls {
            margin-bottom: 0;

            .extra-network-control--search {
              align-self: stretch;
              margin: 0 4px;
              border: var(--input-border-width) solid var(--input-border-color);
              outline: none;

              &:focus-within {
                border-color: var(--input-border-color-focus);
              }

              .extra-network-control--search-icon {
                display: none;
              }

              .extra-network-control--search-text {
                height: 100% !important;
                padding: 4px 8px;
              }
            }

            .extra-network-control--refresh {
              &:hover .extra-network-control--icon {
                animation: none;
              }
            }

            .extra-network-controls--container {
              margin: 0 6px;

              .extra-network-controls--header {
                display: none;
              }

              .extra-network-controls--buttons {
                gap: 4px;
              }
            }
          }

          .extra-network-pane {
            .extra-network-content--cards {
              border: 1px solid var(--block-border-color);
              border-radius: ${token.borderRadius}px;
            }

            .extra-network-tree {
              border: none;

              .clusterize-content {
                padding: 8px;
              }

              .tree-list-item {
                cursor: pointer;

                padding: 2px 0;
                padding-left: 4px;

                border-radius: ${token.borderRadiusSM}px;

                transition: var(--button-transition);

                &::after {
                  top: unset;
                  bottom: 0;
                  height: ${LONG_PRESS_PROGRESS_HEIGHT}px;
                  transition: width 0.6s cubic-bezier(0.85, 0, 0.4, 0.8) 0.2s;
                }

                &:hover .tree-list-item-action--trailing {
                  padding-left: 30px;
                  background: transparent;
                }

                &:not(.pressed):hover {
                  background: var(--button-secondary-background-fill-hover);
                  transition: var(--button-transition);
                }

                &[data-selected] {
                  background: var(--button-secondary-background-fill);
                }

                &.pressed:hover {
                  background: var(--button-secondary-background-fill);
                  transition: var(--button-transition);
                }

                &:not([data-recurse])::after {
                  background: var(--color-accent);
                }

                &[data-recurse]::after {
                  height: 100%;
                  background: var(--button-secondary-background-fill);
                }

                &.pressed::after {
                  transition: width 0.6s cubic-bezier(0.85, 0, 0.4, 0.8) 0.2s;
                }

                &[data-recurse] {
                  padding-bottom: calc(2px - ${LONG_PRESS_PROGRESS_HEIGHT}px);
                  border-bottom: ${LONG_PRESS_PROGRESS_HEIGHT}px solid var(--color-accent);

                  .tree-list-item-action--chevron .chevron-icon-single {
                    stroke: var(--color-accent);
                  }
                }

                .tree-list-item-action--chevron {
                  width: 14px;
                  height: 14px;

                  &.pressed .chevron-icon-double {
                    stroke: var(--color-accent);
                  }
                }
              }

              .tree-list-item-indent {
                > * {
                  width: 1em;

                  &::after {
                    transform: translateY(50%);
                    height: 50%;
                    border-left: 1px solid var(--border-color-accent);
                  }

                  &[data-selected]::after {
                    border-left: 1px solid var(--color-accent);
                  }
                }
              }

              .tree-list-item--dir .tree-list-item-action--leading {
                margin-right: 4px;
              }
            }

            .extra-network-cards {
              border: none;
            }

            .styled-scrollbar {
              scrollbar-width: thin;
            }

            .extra-network-content--dirs-view {
              gap: 4px;
              padding: 0;
              border: none;

              .extra-network-dirs-view-button {
                transition: var(--button-transition);

                &::after {
                  top: unset;
                  bottom: 0;
                  height: ${LONG_PRESS_PROGRESS_HEIGHT}px;
                  transition: none;
                }

                &[data-selected] {
                  background: var(--button-secondary-background-fill-hover);
                  outline: none;
                }

                &[data-recurse] {
                  margin-bottom: -${LONG_PRESS_PROGRESS_HEIGHT}px;
                  padding-bottom: calc(6px - ${LONG_PRESS_PROGRESS_HEIGHT}px);
                  border-bottom: ${LONG_PRESS_PROGRESS_HEIGHT}px solid var(--color-accent);
                  outline: none;
                }

                &:not([data-recurse])::after {
                  background: var(--color-accent);
                }

                &[data-recurse]::after {
                  height: 100%;
                  background: var(--button-secondary-background-fill);
                }

                &.pressed::after {
                  transition: width 0.6s cubic-bezier(0.85, 0, 0.4, 0.8) 0.2s;
                }
              }
            }

            .card-button {
              display: flex;
              justify-content: center;
            }
          }
        }
      `,
      splitView: css`
        #txt2img_toprow,
        #img2img_toprow {
          flex-direction: column !important;
          padding: 0 !important;
          background: transparent !important;
        }
      `,
      textares: css`
        [id$='2img_prompt'],
        [id$='2img_neg_prompt'] {
          textarea {
            resize: ${isPromptResizable ? 'vertical' : 'none'};

            overflow-y: auto;

            padding: 8px !important;

            font-family: var(--font) !important;
            line-height: 1.5 !important;
            word-wrap: break-word !important;
            white-space: pre-wrap !important;

            transition:
              all 0.3s,
              height 0s;
          }
        }

        [id$='2img_prompt'] textarea {
          font-size: var(--text-lg) !important;
        }

        [id$='2img_neg_prompt'] textarea {
          font-size: 14px !important;
        }

        [id$='2img_prompt'] > label > textarea {
          color: var(--body-text-color);

          &:focus {
            color: var(--body-text-color);
          }
        }

        [id$='2img_neg_prompt'] > label > textarea {
          color: ${token.colorWarningTextHover};

          &:focus {
            color: ${token.colorWarning};
          }
        }

        .block.token-counter {
          z-index: 10 !important;
          top: -14px;
          right: 4px;
          scale: 0.8;

          background: ${token.colorBgContainer} !important;
          border-radius: 0.4em !important;

          > .translucent {
            display: none;
          }

          span {
            display: inline-block;
            font-family: var(--font-mono);
            border: 2px solid ${token.colorFillSecondary} !important;
          }

          span,
          &.error span {
            box-shadow: none;
          }
        }

        #lobe_txt2img_prompt .prompt_editor {
          min-height: ${TEXT2IMG_PROMPT_HEIGHT}px;
          max-height: ${isPromptResizable ? 'unset' : `${TEXT2IMG_PROMPT_HEIGHT}px`};
        }

        #lobe_img2img_prompt .prompt_editor {
          min-height: ${IMG2IMG_PROMPT_HEIGHT}px;
          max-height: ${isPromptResizable ? 'unset' : `${IMG2IMG_PROMPT_HEIGHT}px`};
        }

        #txt2img_prompt,
        #txt2img_neg_prompt {
          textarea {
            min-height: ${TEXT2IMG_PROMPT_HEIGHT}px;
            max-height: ${isPromptResizable ? 'unset' : `${TEXT2IMG_PROMPT_HEIGHT}px`};
          }
        }

        #img2img_prompt,
        #img2img_neg_prompt {
          textarea {
            min-height: ${IMG2IMG_PROMPT_HEIGHT}px;
            max-height: ${isPromptResizable ? 'unset' : `${IMG2IMG_PROMPT_HEIGHT}px`};
          }
        }
      `,
      txt2img: css`
        button[id$='_generate'] {
          height: var(--button-lg-height) !important;
          min-height: var(--button-lg-height) !important;
          max-height: var(--button-lg-height) !important;
        }

        [id$='img_settings'],
        .gradio-column.compact {
          display: flex !important;
          flex-direction: column !important;
          gap: 12px !important;

          .gradio-column:has(#img2img_res_switch_btn, #txt2img_res_switch_btn) {
            min-width: min(36px, 100%) !important;
          }

          > div:not([id$='_script_container'], .gradio-tabs):has(div),
          > fieldset {
            gap: 12px;

            margin: 0 !important;
            padding: 16px !important;

            background-color: ${token.colorBgContainer};
            border-radius: ${token.borderRadius}px;
          }

          .gradio-tabitem:has(.gradio-image) {
            background: ${token.colorFillQuaternary};
          }

          [id$='_script_container'] {
            display: flex;
            flex-direction: column;
            gap: 12px;

            * {
              --layout-gap: 12px !important;
            }

            > div {
              display: flex;
              flex-direction: column;
              gap: 12px;

              > div.gr-group.gradio-group:has(.label-wrap) {
                gap: 12px !important;

                margin: 0 !important;
                padding: 16px !important;

                background-color: ${token.colorBgContainer}!important;
                border: 1px solid ${token.colorBorderSecondary} !important;
                border-radius: ${token.borderRadius}px !important;
              }
            }

            .gradio-accordion:not(.hidden):has(div) {
              padding: 0 !important;
              border: none !important;
            }

            #script_list,
            > .gradio-group:not(.hidden):has(div) {
              display: flex;
              flex-direction: column;

              margin: 0;
              padding: 16px;

              background-color: ${token.colorBgContainer} !important;
              border: 1px solid ${token.colorBorderSecondary} !important;
              border-radius: ${token.borderRadius}px !important;
              box-shadow: none;

              > .gradio-accordion {
                padding: 0 !important;
                border: none !important;
              }
            }

            #script_list {
              padding: 8px 16px 12px !important;
            }

            #axis_options {
              margin: 16px 0;
            }
          }
        }

        #txt2img_accordions,
        #img2img_accordions {
          flex-direction: column;
          padding: 0 !important;
          background: transparent !important;

          > div {
            background-color: ${token.colorBgContainer};
            border-radius: ${token.borderRadius}px !important;
          }

          span.icon {
            margin-right: 0;
          }
        }

        #img2img_toprow .interrogate-col {
          flex-direction: row !important;
          min-width: 100% !important;
        }

        #img2img_column_batch {
          min-width: 100% !important;
        }

        #tab_txt2img,
        #tab_img2img {
          [id$='_settings'] {
            min-width: 0 !important;

            [id^='img2img_tab_resize_'].tabitem.gradio-tabitem {
              padding: 16px 0 !important;
            }

            [id$='img_seed_extras'],
            #inpaint_controls {
              div {
                flex: 1;
              }
            }
          }

          #txt2img_gallery {
            overflow: hidden !important;
          }

          [id$='2img_tools'] > div {
            display: flex;
            justify-content: center;

            button {
              max-width: unset !important;
            }
          }

          [id$='2img_styles_edit_button'] {
            align-self: start !important;
          }

          .gradio-html[id^='img2img_label_copy_to'] {
            display: none;
          }

          .gradio-row[id^='img2img_copy_to'],
          .gap.compact,
          .image-buttons,
          .image_buttons_extras {
            gap: 8px !important;
          }

          [id^='download_files_'] {
            .hide {
              display: none;
            }

            .file-preview-holder table.file-preview {
              margin-top: 0;
            }
          }
        }

        #npw {
          padding: 16px !important;

          background-color: ${token.colorBgContainer} !important;
          border: 1px solid ${token.colorBorderSecondary} !important;
          border-radius: ${token.borderRadius}px !important;
          box-shadow: none;
        }
      `,
    };
  },
);

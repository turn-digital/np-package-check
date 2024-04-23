import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _decorate from "@babel/runtime/helpers/esm/decorate";
let _ = t => t,
  _t;
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { prefix } from '../../globals/settings';
import styles from "././text-editor.css.js";
import { property } from 'lit/decorators.js';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import './tinymce-webcomponent.js';

/**
 * Related documents.
 *
 * @element cds-text-editor
 */
let TextEditor = _decorate([customElement(`${prefix}-text-editor`)], function (_initialize, _LitElement) {
  class TextEditor extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: TextEditor,
    d: [{
      kind: "field",
      decorators: [property({
        type: Boolean
      })],
      key: "readonly",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "editorId",
      value() {
        return 'editor';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "textEditorData",
      value() {
        return ``;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Object
      })],
      key: "editorConfig",
      value() {
        return {};
      }
    }, {
      kind: "get",
      key: "combinedEditorConfig",
      value: function combinedEditorConfig() {
        const defaultConfig = {
          language: 'lv',
          language_url: 'https://demo.turn.lv/cfla_dist/assets/tinymce/langs/lv.js',
          branding: false,
          menubar: false,
          highlight_on_focus: true,
          promotion: true,
          min_height: 200,
          max_height: 500,
          external_plugins: {
            pluginId1: 'https://demo.turn.lv/cfla_dist/assets/tinymce/plugins/length_validation/plugin.min.js',
            pluginId2: 'https://demo.turn.lv/cfla_dist/assets/tinymce/plugins/server_request/plugin.min.js'
          }
        };

        // Merge defaultConfig with this.editorConfig, prioritizing properties from editorConfig

        return _objectSpread(_objectSpread({}, defaultConfig), this.editorConfig);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        //@ts-ignore
        const configKey = `config_${this.editorId}`;
        window[configKey] = this.combinedEditorConfig;
        window.localStorage.setItem(`${this.editorId}_content`, this.textEditorData);
        return html(_t || (_t = _`
      <tinymce-editor
        id="${0}"
        config="${0}"
        statusbar: false
        autoresize_bottom_margin: 5
        ?readonly="${0}"
        toolbar="blocks | bold italic underline | numlist bullist | outdent indent | alignleft aligncenter alignright alignjustify | link removeformat fullscreen"
        plugins="length_validation server_request autosave save autolink lists link image charmap preview anchor pagebreak code visualchars wordcount fullscreen autoresize"
        content_css="//www.tiny.cloud/css/codepen.min.css"
        promotion="false">
        ${0}
      </tinymce-editor>
    `), this.editorId, 'config_' + this.editorId, this.readonly, this.textEditorData);
      }
    }, {
      kind: "field",
      static: true,
      key: "styles",
      value() {
        return styles;
      }
    }]
  };
}, LitElement);
export default TextEditor;
//# sourceMappingURL=text-editor.js.map

/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement } from 'lit';
import './tinymce-webcomponent.js';
/**
 * Related documents.
 *
 * @element cds-text-editor
 */
declare class TextEditor extends LitElement {
    readonly: boolean;
    editorId: string;
    textEditorData: string;
    editorConfig: {};
    get combinedEditorConfig(): {
        language: string;
        language_url: string;
        branding: boolean;
        menubar: boolean;
        highlight_on_focus: boolean;
        promotion: boolean;
        min_height: number;
        max_height: number;
        external_plugins: {
            pluginId1: string;
            pluginId2: string;
        };
    };
    render(): import("lit-html").TemplateResult<1>;
    static styles: any;
}
export default TextEditor;

//# sourceMappingURL=text-editor.d.ts.map

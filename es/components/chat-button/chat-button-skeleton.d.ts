/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement } from 'lit';
import { CHAT_BUTTON_SIZE } from './defs';
export { CHAT_BUTTON_SIZE };
/**
 * Chat button skeleton.
 *
 * @element cds-chat-button-skeleton
 */
declare class CDSChatButtonSkeleton extends LitElement {
    /**
     * Specify the size of the `ChatButtonSkeleton`, from the following list of sizes: 'sm', 'md', 'lg'
     */
    size: CHAT_BUTTON_SIZE;
    render(): import("lit-html").TemplateResult<1>;
    static styles: any;
}
export default CDSChatButtonSkeleton;

//# sourceMappingURL=chat-button-skeleton.d.ts.map

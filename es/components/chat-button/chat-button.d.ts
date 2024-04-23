/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement } from 'lit';
import '../button/button';
import { CHAT_BUTTON_SIZE, CHAT_BUTTON_KIND } from './defs';
export { CHAT_BUTTON_SIZE, CHAT_BUTTON_KIND };
/**
 * Icon Button
 *
 */
declare class CDSChatButton extends LitElement {
    /**
     * `true` if the button should be disabled.
     */
    disabled: boolean;
    /**
     *  Specify whether the `ChatButton` should be disabled
     */
    kind: CHAT_BUTTON_KIND;
    /**
     * Chat button size.
     */
    size: CHAT_BUTTON_SIZE;
    /**
     * Specify whether the `ChatButton` should be rendered as a quick action button
     */
    isQuickAction: boolean;
    /**
     * Specify whether the quick action `ChatButton` should be rendered as selected. This disables the input
     */
    isSelected: boolean;
    render(): import("lit-html").TemplateResult<1>;
    static styles: any;
}
export default CDSChatButton;

//# sourceMappingURL=chat-button.d.ts.map

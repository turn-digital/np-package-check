/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { FORM_ELEMENT_COLOR_SCHEME as DROPDOWN_COLOR_SCHEME } from '../../globals/shared-enums';
/**
 * Navigation direction, associated with key symbols.
 */
export declare const NAVIGATION_DIRECTION: {
    Up: number;
    ArrowUp: number;
    Down: number;
    ArrowDown: number;
};
/**
 * The keyboard action categories for dropdown.
 */
export declare enum DROPDOWN_KEYBOARD_ACTION {
    /**
     * Not doing any action.
     */
    NONE = "none",
    /**
     * Keyboard action to close menu.
     */
    CLOSING = "closing",
    /**
     * Keyboard action to navigate back/forward.
     */
    NAVIGATING = "navigating",
    /**
     * Keyboard action to open/close menu on the trigger button or select/deselect a menu item.
     */
    TRIGGERING = "triggering"
}
/**
 * Dropdown size.
 */
export declare enum DROPDOWN_SIZE {
    /**
     * Small size.
     */
    SMALL = "sm",
    /**
     * Medium size.
     */
    MEDIUM = "md",
    /**
     * Large size.
     */
    LARGE = "lg"
}
/**
 * Dropdown types.
 */
export declare enum DROPDOWN_TYPE {
    /**
     * Default type.
     */
    DEFAULT = "",
    /**
     * Inline type.
     */
    INLINE = "inline"
}
/**
 * Dropdown direction.
 */
export declare enum DROPDOWN_DIRECTION {
    /**
     * Top.
     */
    TOP = "top",
    /**
     * Bottom.
     */
    BOTTOM = "bottom"
}

//# sourceMappingURL=defs.d.ts.map

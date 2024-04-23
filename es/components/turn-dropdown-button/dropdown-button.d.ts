/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement } from 'lit';
/**
 * Related documents.
 *
 * @element cds-dropdown-button
 */
declare class CDSDropdownButtonTest extends LitElement {
    statusArray: {
        value: StringConstructor;
        text: StringConstructor;
    }[];
    dropdownHandler: () => void;
    selectedStatus: string;
    static styles: any;
    render(): import("lit-html").TemplateResult<1>;
}
export default CDSDropdownButtonTest;

//# sourceMappingURL=dropdown-button.d.ts.map

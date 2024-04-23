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
 * @element cds-status-change-panel
 */
declare class CDSStatusChangePanel extends LitElement {
    projectId: string;
    saveButtonText: string;
    saveButtonType: string;
    dropdownButtonText: string;
    statusItems: {
        value: string;
        text: string;
    }[];
    selectedStatus: string;
    itemSelectedHandler: (event: any) => void;
    saveButtonHandler: () => void;
    render(): import("lit-html").TemplateResult<1>;
    static styles: any;
}
export default CDSStatusChangePanel;

//# sourceMappingURL=status-change-panel.d.ts.map

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
 * @element cds-status-history
 */
declare class CDSStatusHistory extends LitElement {
    currenStatusColor: string;
    currenStatusTitle: string;
    currenStatusDate: string;
    statusHistoryItems: {
        date: string;
        status: string;
        author: string;
        pamatojums: string;
        id: string;
    }[];
    modalContent: {
        date: string;
        status: string;
        author: string;
        pamatojums: string;
        id: string;
    };
    statusHistoryInfoModalOpen: (item: any) => void;
    render(): import("lit-html").TemplateResult<1>;
    static styles: any;
}
export default CDSStatusHistory;

//# sourceMappingURL=status-history.d.ts.map

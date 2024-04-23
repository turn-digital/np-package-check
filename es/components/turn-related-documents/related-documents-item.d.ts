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
 * Related documents item.
 *
 * @element cds-related-documents-item
 */
declare class CDSRelatedDocumentsItem extends LitElement {
    linkTitle: string;
    linkUrl: string;
    /**
     * Can be one of: _blank, _self
     */
    target: string;
    sanitizeIcon(icon: any): string;
    render(): import("lit-html").TemplateResult<1>;
    static styles: any;
}
export default CDSRelatedDocumentsItem;

//# sourceMappingURL=related-documents-item.d.ts.map

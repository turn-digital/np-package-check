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
 * @element cds-project-card
 */
declare class ProjectCard extends LitElement {
    projectId: string;
    tagTitle: string;
    supervisorAuthority: string;
    cardTitle: string;
    tagType: string;
    projectDateTitle: string;
    projectDateInfo: string;
    projectCostTitle: string;
    projectCostInfo: string;
    render(): import("lit-html").TemplateResult<1>;
    static styles: any;
}
export default ProjectCard;

//# sourceMappingURL=project-card.d.ts.map

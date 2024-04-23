/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license
 * 
 * This bundle contains the following third-party dependencies:
 * 
 * flatpickr:
 * 
 flatpickr v4.6.1, @license MIT
 * 
 * @carbon/motion:
 * 
 * Copyright IBM Corp. 2018, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * @carbon/colors:
 * 
 * Copyright IBM Corp. 2018, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * dompurify:
 * 
 @license DOMPurify 2.4.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.7/LICENSE
 * 
 * lit-element:
 * 
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 * 
 * lit-html:
 * 
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 * 
 * @lit/reactive-element:
 * 
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 * 
 * @carbon/layout:
 * 
 * Copyright IBM Corp. 2018, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * Also refer to the following links for the license of other third-party dependencies:
 * 
 * https://www.npmjs.com/package/lit
 * https://www.npmjs.com/package/@carbon/icons
 * https://www.npmjs.com/package/lodash-es
 */

import{_ as t,s as e,p as s,x as n}from"./settings-387c0fa4.js";import{_ as o,a}from"./get-d229c408.js";import{e as i}from"./custom-element-975be15f.js";import"./query-assigned-elements-8e88277c.js";import{B as c,b as r}from"./button-29752877.js";let l,u=t=>t,d=t([i(`${s}-button-set`)],(function(t,e){class i extends e{constructor(...e){super(...e),t(this)}}return{F:i,d:[{kind:"method",key:"_handleSlotChange",value:function(t){t.target.assignedNodes().filter((t=>void 0!==t.matches&&t.matches(this.constructor.selectorItem))).forEach(((t,e)=>{t.setAttribute("kind",0===e?c.SECONDARY:c.PRIMARY)}));const e=new CustomEvent(`${s}-btn-set-update`,{bubbles:!0,cancelable:!0,composed:!0});this.dispatchEvent(e)}},{kind:"method",key:"render",value:function(){return n(l||(l=u` <slot @slotchange="${0}"></slot> `),this._handleSlotChange)}},{kind:"method",key:"connectedCallback",value:function(){o(a(i.prototype),"connectedCallback",this).call(this),this.setAttribute("role","list")}},{kind:"get",static:!0,key:"selectorItem",value:function(){return`${s}-button`}},{kind:"field",static:!0,key:"styles",value:()=>r}]}}),e);export{d as C};

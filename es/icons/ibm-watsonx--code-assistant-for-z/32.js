/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit';
import spread from '../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M29.17 25L26.59 27.58 28 29 32 25 28 21 26.58 22.41 29.17 25zM23 30L21.0851 29.4229 24 20 25.9149 20.5771 23 30zM17.83 25L20.41 22.42 19 21 15 25 19 29 20.42 27.59 17.83 25zM18 19h-2V5c0-1.1028.8972-2 2-2h9c1.1028 0 2 .8972 2 2v11h-2V5h-9v14zM12 3H3c-1.1028 0-2 .8975-2 2v22c0 1.1025.8972 2 2 2h9c1.1028 0 2-.8975 2-2V5c0-1.1025-.8972-2-2-2zm.0002 7.0366l-6.925-5.0366h6.9248l.0002 5.0366zm-.7004 1.9634l-8.2998 6.0361V5.9639l8.2998 6.0361zm.7007 1.9634l.0007 11.8169-8.2795-5.7959 8.2788-6.021zm-9.0005 7.9575l7.2563 5.0791H3v-5.0791zm9 5.0791l.0012-.002v.002h-.0012z"></path></svg>`;
export default svgResultCarbonIcon;

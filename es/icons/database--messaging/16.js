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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="m23,32l-1.755-1,2.755-4h4v-7h-12v7h4v2h-4c-1.1025,0-2-.8975-2-2v-7c0-1.1025.8975-2,2-2h12c1.1025,0,2,.8975,2,2v7c0,1.1025-.8975,2-2,2h-3l-2,3Z"></path><path d="m13,2C7.7021,2,2,3.252,2,6v18c0,2.4033,4.3618,3.6626,9,3.9404v-2.0015c-4.5337-.2803-6.8674-1.4644-7-1.939v-3.5723c1.7065.856,4.3062,1.3442,7,1.5063v-1.9951c-4.5337-.2803-6.8674-1.4644-7-1.939v-3.5723c2.1279,1.0674,5.6426,1.5723,9,1.5723,5.2979,0,11-1.252,11-4v-6.0005c-.0007-2.748-5.7024-3.9995-11-3.9995ZM3.9985,6.0151c.1523-.5552,3.1514-2.0151,9.0015-2.0151,5.7976,0,8.7949,1.4341,8.9968,2-.2019.5659-3.1992,2-8.9968,2-5.8501,0-8.8491-1.46-9.0015-1.9849Zm18.0015,5.9722c-.1606.5571-3.1587,2.0127-9,2.0127-5.8501,0-8.8491-1.46-9-2v-3.5723c2.1279,1.0674,5.6426,1.5723,9,1.5723s6.8721-.5049,9-1.5723v3.5596Z"></path></svg>`;
export default svgResultCarbonIcon;

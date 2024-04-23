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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="m13,8l-5,5,1.4102,1.4102,2.5898-2.5801v16.1699h-3v2h3c1.104-.0015,1.9988-.896,2-2V11.8301l2.5898,2.5801,1.4102-1.4102-5-5Z"></path><path d="m22,30h-3c-1.104-.0013-1.9987-.896-2-2v-11h6c2.2096-.0001,4.0007-1.7915,4.0006-4.001,0-.1319-.0065-.2637-.0196-.395-.277-2.0943-2.0835-3.6461-4.1957-3.604h-1.5837l-.1766-.779c-.573-2.5249-2.9942-4.221-6.025-4.221-2.3366.0074-4.4579,1.3664-5.4415,3.4859l-.3085.6672-.863-.1143c-.1279-.022-.2573-.0349-.387-.0388-2.2091,0-4,1.7909-4,4s1.7909,4,4,4v2c-3.3137,0-6-2.6863-6-6s2.6863-6,6-6c.0264,0,.0525,0,.0786.001,1.4317-2.4694,4.067-3.9928,6.9214-4.001,3.6788,0,6.6923,1.9776,7.7516,5h.0337c3.1405-.0351,5.8053,2.2967,6.1872,5.4141.323,3.2985-2.0892,6.2344-5.3877,6.5573-.1943.019-.3895.0286-.5848.0286h-4v9h3v2Z"></path></svg>`;
export default svgResultCarbonIcon;

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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M20,13H12c-.5522,0-1,.4478-1,1,0,.1973,.0508,.3833,.168,.5547l4,6c.1855,.2783,.4978,.4453,.832,.4453s.6465-.167,.832-.4453l4-6c.1172-.1714,.168-.3574,.168-.5547,0-.5522-.4478-1-1-1Zm-4,5.1973l-2.1316-3.1973h4.2632l-2.1316,3.1973Z"></path><path d="M16,23c-1.6115,0-3.1763-.5632-4.4205-1.5796l-1.4196,1.4197c.0306,.0261,.057,.0559,.0881,.0818,1.6104,1.3403,3.6523,2.0781,5.752,2.0781,4.9629,0,9-4.0376,9-9h-2c0,3.8599-3.1406,7-7,7Z"></path><circle cx="23" cy="12" r="1"></circle><circle cx="9" cy="20" r="1"></circle><path d="M16,9c1.6097,0,3.1772,.5619,4.4224,1.5776l1.4171-1.4171c-.0385-.0328-.0718-.0702-.111-.1024-1.6074-1.3271-3.6416-2.0581-5.7285-2.0581-4.9629,0-9,4.0376-9,9h2c0-3.8599,3.1406-7,7-7Z"></path><path d="M16,30c-7.7197,0-14-6.2804-14-14S8.2803,2,16,2s14,6.2804,14,14-6.2803,14-14,14Zm0-26c-6.6167,0-12,5.3832-12,12s5.3833,12,12,12,12-5.3832,12-12-5.3833-12-12-12Z"></path></svg>`;
export default svgResultCarbonIcon;

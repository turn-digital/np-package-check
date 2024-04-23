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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M28,2V8.0439c-1.9634.1968-6.3162,1.2325-10.5637,6.2764-.198-.2768-.3982-.5464-.5882-.8506C11.9736,5.6714,6.3191,4.2759,4,4.042V2H2V30H4V26.0464a14.8661,14.8661,0,0,0,9.9185-3.96C18.47,27.46,25.2363,28.0381,27.9341,28.0381c.0244,0,.0422-.001.0659-.001V30h2V2Zm0,8.0552v9.99a12.8834,12.8834,0,0,1-9.2756-4.1328C22.5032,11.2666,26.2915,10.26,28,10.0552ZM15.1519,14.53c.3242.5185.663.9907,1.0078,1.4409-.3384.4741-.6753.9707-1.0078,1.5029a16.1346,16.1346,0,0,1-1.0313,1.4531c-.0825-.1372-.1675-.27-.2466-.4126C9.3279,10.3315,5.7871,8.4438,4,8.0684V6.0508C5.9932,6.2905,10.8228,7.6035,15.1519,14.53ZM4,24.0488V10.1406c1.3254.4644,4.2034,2.2847,8.126,9.3448.1894.3413.396.6523.6.9667A12.8784,12.8784,0,0,1,4,24.0488Zm11.3179-3.4209a18.0563,18.0563,0,0,0,1.53-2.0937c.2212-.354.4454-.67.6687-.9951A14.8686,14.8686,0,0,0,28,22.0425v3.9863C25.67,26.019,19.374,25.5088,15.3179,20.6279Z"></path></svg>`;
export default svgResultCarbonIcon;

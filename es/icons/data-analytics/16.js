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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M12 11H14V17H12zM7 13H9V17H7zM2 7H4V17H2z"></path><path d="m30,28.5859l-7.5522-7.5522c1.5918-1.9082,2.5522-4.3604,2.5522-7.0337,0-6.0654-4.9346-11-11-11-2.4026,0-4.6853.7607-6.6013,2.2002l1.2012,1.5991c1.5669-1.1772,3.4343-1.7993,5.4001-1.7993,4.9626,0,9,4.0371,9,9s-4.0374,9-9,9c-2.8574,0-5.4819-1.312-7.2007-3.6001l-1.5991,1.2017c2.1001,2.7949,5.3076,4.3984,8.7998,4.3984,2.6733,0,5.1255-.9604,7.0337-2.5522l7.5522,7.5522,1.4141-1.4141Z"></path></svg>`;
export default svgResultCarbonIcon;

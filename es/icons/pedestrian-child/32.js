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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M26,16H17.4683l-5-6H5a3.0033,3.0033,0,0,0-3,3v6a2.0023,2.0023,0,0,0,2,2v7a2.0023,2.0023,0,0,0,2,2h4a2.0023,2.0023,0,0,0,2-2V21H10v7H6V19H4V13a1.0009,1.0009,0,0,1,1-1h6.5317l5,6H26a1.0009,1.0009,0,0,1,1,1v3H25v6H22V22H20v6a2.0023,2.0023,0,0,0,2,2h3a2.0023,2.0023,0,0,0,2-2V24a2.0023,2.0023,0,0,0,2-2V19A3.0033,3.0033,0,0,0,26,16Z"></path><path d="M23.5 15A3.5 3.5 0 1127 11.5 3.5042 3.5042 0 0123.5 15zm0-5A1.5 1.5 0 1025 11.5 1.5017 1.5017 0 0023.5 10zM8 9a4 4 0 114-4A4.0042 4.0042 0 018 9zM8 3a2 2 0 102 2A2.0023 2.0023 0 008 3z"></path></svg>`;
export default svgResultCarbonIcon;

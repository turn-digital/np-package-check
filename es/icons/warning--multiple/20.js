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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="m29,23h-4v-2h2.3821l-7.8821-15.7639-1.1055,2.2112-1.7891-.8945,2-4c.1694-.3387.532-.5527.8945-.5527s.7251.214.8945.5527l9.5,19c.1548.3101.1384.6782-.0439.973-.1821.2948-.5039.4742-.8506.4742Z"></path><circle cx="14" cy="25" r="1.25"></circle><path d="M13 15H15V22H13z"></path><path d="m25,30H3c-.3499,0-.6743-.1829-.8555-.4823s-.1926-.6718-.0303-.9817L13.1143,7.536c.1726-.3296.5292-.536.8857-.536s.7131.2064.8857.536l11,21c.1624.3099.1509.6823-.0303.9817s-.5056.4823-.8555.4823Zm-20.3474-2h18.6948L14,10.1552,4.6526,28Z"></path></svg>`;
export default svgResultCarbonIcon;

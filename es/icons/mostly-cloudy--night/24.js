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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M29.8438,15.0347a1.5169,1.5169,0,0,0-1.23-.8658,5.3547,5.3547,0,0,1-3.4094-1.7158A6.4653,6.4653,0,0,1,23.918,6.0605a1.6025,1.6025,0,0,0-.2989-1.5459,1.4543,1.4543,0,0,0-1.36-.4931l-.0191.0039a7.927,7.927,0,0,0-6.22,7.4307A7.3638,7.3638,0,0,0,13.5,11a7.5511,7.5511,0,0,0-7.1494,5.2441A5.9926,5.9926,0,0,0,8,28H19a5.9771,5.9771,0,0,0,5.6147-8.0884,7.5054,7.5054,0,0,0,5.1324-3.3569A1.5372,1.5372,0,0,0,29.8438,15.0347ZM19,26H8a3.9926,3.9926,0,0,1-.6733-7.9292l.663-.1128.1456-.6562a5.496,5.496,0,0,1,10.7294,0l.1456.6562.6626.1128A3.9925,3.9925,0,0,1,19,26Zm4.4653-8.001h-.0217a5.9581,5.9581,0,0,0-2.7942-1.7549,7.5068,7.5068,0,0,0-2.6008-3.6767c-.01-.1016-.0361-.1978-.041-.3008a6.078,6.078,0,0,1,3.7907-6.05,8.4577,8.4577,0,0,0,1.94,7.5967A7.4007,7.4007,0,0,0,27.64,16.041,5.4286,5.4286,0,0,1,23.4653,17.999Z"></path></svg>`;
export default svgResultCarbonIcon;

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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M16 32c-5.0793 0-9.7449-2.3319-12.7998-6.3979l1.5991-1.2014c2.6736 3.5585 6.7561 5.5994 11.2007 5.5994s8.5281-2.0413 11.2014-5.6005l1.5991 1.2012c-3.0547 4.0668-7.7202 6.3993-12.8005 6.3993zM30 22h-5v-2h5v-3h-3c-1.1028 0-2-.8972-2-2v-3c0-1.1028.8972-2 2-2h5v2h-5v3h3c1.1028 0 2 .8972 2 2v3c0 1.1028-.8972 2-2 2zM21 22h-4c-1.1028 0-2-.8972-2-2v-8c0-1.1028.8972-2 2-2h4c1.1028 0 2 .8972 2 2v8c0 1.1028-.8972 2-2 2zm-4-10v8h4v-8h-4zM11.4458 10L7.4458 22 9.5542 22 13.5542 10 11.4458 10zM6 22L0 22 0 19.6973 3.7981 14 0 14 0 12 6 12 6 14.3027 2.2019 20 6 20 6 22zM16.0001 0C10.9207 0 6.2552 2.3319 3.2003 6.3979l1.5991 1.2014c2.6736-3.5585 6.7561-5.5994 11.2007-5.5994s8.5281 2.0413 11.2014 5.6005l1.5991-1.2012C25.7459 2.3325 21.0804 0 16.0001 0z"></path></svg>`;
export default svgResultCarbonIcon;

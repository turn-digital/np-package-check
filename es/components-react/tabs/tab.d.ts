/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component } from 'react';
import { ComponentProps as ParentComponentProps } from '../content-switcher/content-switcher-item';
export interface ComponentProps extends ParentComponentProps {}
declare class CDSTab extends Component<ComponentProps> {}
export default CDSTab;

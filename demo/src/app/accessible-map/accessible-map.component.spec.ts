/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AccessibleMapComponent } from './accessible-map.component';

describe('Component: AccessibleMap', () => {
  it('should create an instance', () => {
    let component = new AccessibleMapComponent();
    expect(component).toBeTruthy();
  });
});

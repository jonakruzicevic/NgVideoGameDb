// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import { async, getTestBed, TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DetailsComponent } from './app/components/details/details.component';

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    <T>(id: string): T;
    keys(): string[];
  };
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);

beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations:  [ DetailsComponent ],
    schemas:  [NO_ERRORS_SCHEMA]
  })
  .compileComponents();
}));


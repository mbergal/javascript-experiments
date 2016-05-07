// @flow
// dasdasdasdasdasdas
"use strict";

import { f } from './module1'
import { install } from 'source-map-support';

install();

type A = { a: number };
var c : A = { a: 1, b: 2 };

async function a() {
    f();
  ///throw new Error( "!!!!"); // this should point to original file
 }

async function b() {
 return a();
}


(async function() {
    await b();
    console.log("Yey, story successfully loaded!");
}());

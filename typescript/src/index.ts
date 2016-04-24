// @flow
///aaaaaaaaaa
import { f } from './module1'
//import { install } from 'source-map-support';

var c = { a: 1, b: 2 }


async function a() {
  throw new Error( "!!!!"); // this should point to original file
}

async function b() {
 return a();
}

// install();

var ra  = f();
b();


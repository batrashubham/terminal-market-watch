#!/usr/bin/env node

import Options from './options'
import {WelcomeMessage} from "./welcome";

const options = Options.getOptions();

console.log(WelcomeMessage);

function getRandomArbitrary(min: number , max: number): number {
    return Math.random() * (max - min) + min;
}
let a = Math.floor(getRandomArbitrary(25,28));
let b = Math.floor(getRandomArbitrary(10,99));

console.log(`${options.stock}: ${a}.${b}`);

#!/usr/bin/env node

import Options from './options'
import {WelcomeMessage} from "./welcome";

const options = Options.getOptions();

console.log(WelcomeMessage);

console.log(`${options.stock}: 28.95`);

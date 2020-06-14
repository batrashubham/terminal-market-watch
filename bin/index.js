#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var options_1 = __importDefault(require("./options"));
var welcome_1 = require("./welcome");
var options = options_1.default.getOptions();
console.log(welcome_1.WelcomeMessage);
console.log(options.stock + ": 28.95");

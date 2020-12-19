#!/usr/bin/env node
import logic from '../src/index.js';
import * as calc from '../games/calc.js';

logic(calc.question, calc.game);

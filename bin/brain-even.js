#!/usr/bin/env node
import logic from '../src/index.js';
import * as even from '../games/even.js';

logic(even.question, even.game);

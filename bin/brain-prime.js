#!/usr/bin/env node
import logic from '../src/index.js';
import * as prime from '../games/prime.js';

logic(prime.question, prime.game);

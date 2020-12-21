#!/usr/bin/env node
import logic from '../src/index.js';
import * as progression from '../games/progression.js';

logic(progression.question, progression.game);

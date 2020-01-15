import { benchSettings } from 'karma-webpack-bundle';
import { powerset } from '../index.js';

suite('powerset', () => {
	let sandbox = '';

	benchmark('main', () => {
		sandbox = powerset([1, 2, 3, 4]);
	}, benchSettings);
});

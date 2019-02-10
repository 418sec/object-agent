import { assert } from 'chai';
import { set } from '../src/';

describe('set', () => {
	it('should set the value of a first level key if a string is provided', () => {
		const object = {
			level1: 'something'
		};
		const compare = {
			level1: 'meh'
		};

		set(object, 'level1', 'meh');

		assert.deepEqual(object, compare);
	});

	it('should set the value of a first level key', () => {
		const object = {
			level1: 'something'
		};
		const compare = {
			level1: 'meh'
		};

		set(object, ['level1'], 'meh');

		assert.deepEqual(object, compare);
	});

	it('should set the value of a second level key', () => {
		const object = {
			level1: {
				level2: 'something'
			}
		};
		const compare = {
			level1: {
				level2: 'meh'
			}
		};

		set(object, ['level1', 'level2'], 'meh');

		assert.deepEqual(object, compare);
	});

	it('should set the value of a second level key in an array', () => {
		const object = {
			level1: [{
				level2: 'something'
			}]
		};
		const compare = {
			level1: [{
				level2: 'meh'
			}]
		};

		set(object, ['level1', '0', 'level2'], 'meh');

		assert.deepEqual(object, compare);
	});

	it('should set the value of a second level key in an array with multiple items', () => {
		const object = {
			level1: [{
				level2: 'test 0'
			}, {
				level2: 'test 1'
			}, {
				level2: 'test 2'
			}, {
				level2: 'test 3'
			}, {
				level2: 'test 4'
			}]
		};
		const compare = {
			level1: [{
				level2: 'test 0'
			}, {
				level2: 'test 1'
			}, {
				level2: 'meh'
			}, {
				level2: 'test 3'
			}, {
				level2: 'test 4'
			}]
		};

		set(object, ['level1', 2, 'level2'], 'meh');

		assert.deepEqual(object, compare);
	});

	it('should set the value of a second level key in an array with multiple items', () => {
		const object = {
			level1: [{
				level2: 'test 0'
			}, {
				level2: 'test 1'
			}, {
				level2: {
					level3: 'test 2'
				}
			}, {
				level2: 'test 3'
			}, {
				level2: 'test 4'
			}]
		};
		const compare = {
			level1: [{
				level2: 'test 0'
			}, {
				level2: 'test 1'
			}, {
				level2: {
					level3: 'meh'
				}
			}, {
				level2: 'test 3'
			}, {
				level2: 'test 4'
			}]
		};

		set(object, ['level1', 2, 'level2', 'level3'], 'meh');

		assert.deepEqual(object, compare);
	});

	it('should create objects and arrays then set the value', () => {
		const object = {};
		const compare = {
			level1: [, , {
				level2: {
					level3: 'meh'
				}
			}]
		};

		set(object, ['level1', 2, 'level2', 'level3'], 'meh');

		assert.deepEqual(object, compare);
	});

});
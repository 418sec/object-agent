import { assert } from 'chai';
import { clone } from '../src/';
import { testValues } from './testValues';

describe('clone', () => {
	testValues.forEach((value, index) => {
		it(`should clone ${value} [${index}]`, () => {
			assert.deepEqual(clone(value), value);
		});
	});

	it('should clone a circular reference', () => {
		const object = {};
		object.key1 = object;

		assert.deepEqual(clone(object), object);
	});

	it('should clone a nested circular reference', () => {
		const object = {
			key1: 'something',
			key2: {
				key3: 'another'
			}
		};
		object.key2.key4 = [object.key2];

		assert.deepEqual(clone(object), object);
	});

	it('should clone a reference to an instance of a class', () => {
		class Thing {
			doSomething() {

			}
		}

		const object = {
			key1: 'something',
			key2: {
				key3: new Thing()
			}
		};

		const cloned = clone(object);

		assert.deepEqual(cloned, object);
		assert.isTrue(cloned.key2.key3 === object.key2.key3);
	});
});
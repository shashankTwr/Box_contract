//test for Box contraact
// Load dependencies 

const {expect} = require('chai');

//Load compiled artifacts
// artifacts saves the ABI, binary of contract and other info related to the contract saved in builds contracts folder as a json file

const Box = artifacts.require('Box');

//Start test block

contract('Box', function(){
	beforeEach(async function(){
		this.box = await Box.new();
	});

	//a simple test case checking if the value returned is the same as value passed in store
	it('retrieve returns a value previously stored', async function(){
		await this.box.store(42);
		value = await this.box.retrieve();
		assert(value == '42');
	});
});
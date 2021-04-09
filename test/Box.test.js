//test for Box contraact
// Load dependencies 

const {expect} = require('chai');

const { BN, expectEvent, expectRevert } = require('@openzeppelin/test-helpers')

//Load compiled artifacts
// artifacts saves the ABI, binary of contract and other info related to the contract saved in builds contracts folder as a json file

const Box = artifacts.require('Box');

//Start test block

contract('Box', function([ owner, other]){
	//Big number 
	const value = new BN('42');

	beforeEach(async function(){
		this.box = await Box.new({from:owner});
	});

	//a simple test case checking if the value returned is the same as value passed in store
	it('retrieve returns a value previously stored', async function(){
		await this.box.store(value, {from: owner});
		expect(await this.box.retrieve()).to.be.bignumber.equal(value);
	});

	//a simple test case checking if the value returned is the same as value passed in store
	it('stores emits an event ', async function(){
		const reciept = await this.box.store(value, {from: owner});
		expectEvent(reciept, 'ValueChanged',{newValue : value});
	});

	//a simple test case checking if the value returned is the same as value passed in store
	it('Non owner cannot store a value', async function(){
		await expectRevert(this.box.store(value, {from: other}), 'Ownable: caller is not the owner');
	});
});
pragma solidity >=0.5.0;

//import openzeppelin ownable contract
import "@openzeppelin/contracts/access/Ownable.sol";

contract Box is Ownable{
  uint256 private value;

  //emitted when value is changed
  event ValueChanged(uint256 newValue);

  //add onlyOwner  modifier to restrict value of box being changed only by the owner
  function store(uint256 _value) public onlyOwner{
  	value =  _value;
  	emit ValueChanged(value);
  }

  function retrieve() public view returns (uint256) {
  	return value;
  }
}

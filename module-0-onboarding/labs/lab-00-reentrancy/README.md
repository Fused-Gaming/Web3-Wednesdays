# Lab 00: Reentrancy Vulnerability

**Difficulty:** ⭐ Beginner  
**Duration:** 20 minutes  
**Learning Goal:** Understand the reentrancy vulnerability and how to exploit it

---

## ⚠️ SECURITY WARNING

**These contracts are INTENTIONALLY VULNERABLE for educational purposes only.**

- ❌ DO NOT deploy these contracts to mainnet
- ❌ DO NOT send real funds to these contracts
- ✅ Use on test networks (Foundry, Hardhat) only
- ✅ These labs teach common vulnerabilities to help you recognize and prevent them

For more information, see [Responsible Disclosure Policy](https://www.openzeppelin.com/security).

---

## 🎯 Learning Objectives

By the end of this lab, you will:

1. **Understand reentrancy** — What it is and why it's dangerous
2. **Recognize vulnerable patterns** — Code that allows reentrancy
3. **Execute an exploit** — Use Foundry to demonstrate the attack
4. **Apply fixes** — Understand how to prevent reentrancy

---

## 📚 Background: What is Reentrancy?

### Simple Explanation

Reentrancy happens when a contract calls another contract while its own state hasn't been updated yet.

**Visual example:**

```
1. Bank calls attacker.withdraw()
2. Bank sends ETH to attacker (external call)
3. While ETH is being sent, attacker's receive() function runs
4. receive() calls withdraw() AGAIN before first withdraw finished
5. Cycle repeats = attacker steals more than they had!
```

### Why It Matters

In 2016, the **DAO hack** exploited reentrancy to steal $50M worth of ETH. Today, it remains one of the top smart contract vulnerabilities.

### The Vulnerable Pattern

```solidity
function withdraw() public {
    uint256 amount = balances[msg.sender];
    
    // DANGEROUS: External call before state update
    (bool success, ) = msg.sender.call{value: amount}("");
    
    // By the time we get here, attacker has already reentered!
    balances[msg.sender] = 0;
}
```

### The Safe Pattern

```solidity
function withdraw() public {
    uint256 amount = balances[msg.sender];
    
    // SAFE: Update state FIRST
    balances[msg.sender] = 0;
    
    // Then make external call
    (bool success, ) = msg.sender.call{value: amount}("");
}
```

This is called **"Checks-Effects-Interactions"** pattern.

---

## 🔧 Lab Setup

### Prerequisites

- [Foundry installed](https://book.getfoundry.sh/getting-started/installation) (`forge`, `anvil`)
- Basic Solidity knowledge
- Command line comfort

### Install Foundry (if needed)

```bash
curl -L https://foundry.paradigm.xyz | bash
~/.foundry/bin/foundryup
```

### Project Structure

```
lab-00-reentrancy/
├── src/
│   ├── VulnerableBank.sol    # Vulnerable contract
│   └── Attacker.sol          # Exploit contract
├── test/
│   └── ReentrancyExploit.t.sol  # Test suite
├── foundry.toml              # Foundry config
└── README.md                 # This file
```

---

## 🚀 Step-by-Step Guide

### Step 1: Build the Contracts

```bash
cd lab-00-reentrancy
forge build
```

Expected output:
```
Compiling 3 files with 0.8.20
Solc 0.8.20 finished in 00.500s
Compiler run successful!
```

### Step 2: Run All Tests

```bash
forge test -vv
```

This runs the entire test suite. You should see:
- ✅ `test_NormalDeposit` — Normal usage works
- ✅ `test_NormalWithdraw` — Users can withdraw normally
- ✅ `test_MultipleDeposits` — Multiple users can coexist
- ✅ `test_ReentrancyAttack` — **THE VULNERABILITY IS DEMONSTRATED HERE**

### Step 3: Focus on the Attack Test

Run just the reentrancy attack test:

```bash
forge test -vv -k "test_ReentrancyAttack"
```

Output (showing the attack):
```
[PASS] test_ReentrancyAttack() (gas: 87654)
  Attacker balance before: 1000000000000000000
  Attacker balance after: 6000000000000000000
  Bank balance after attack: 100000000000000
  Attack reenter count: 6
```

**What this means:**
- Attacker started with 1 ETH
- After the attack, they have 6 ETH
- They stole 5 ETH from legitimate users!
- The attack triggered 6 reentrant calls

### Step 4: Analyze the Code

Open `src/VulnerableBank.sol` and find:

```solidity
function withdraw() public {
    uint256 amount = balances[msg.sender];
    
    // ⚠️ VULNERABLE LINE:
    (bool success, ) = msg.sender.call{value: amount}("");
    
    // Attacker's receive() is called here!
    // They can call withdraw() again before this next line runs:
    balances[msg.sender] = 0;  // ← Too late! Already reentered
}
```

### Step 5: Understand the Attacker

Open `src/Attacker.sol` and focus on:

```solidity
receive() external payable {
    attackCount++;
    uint256 bankBalance = bank.getBalance(address(this));
    
    if (bankBalance > 0) {
        bank.withdraw();  // ← Reenters here!
    }
}
```

**Why this works:**
1. When `withdraw()` calls `msg.sender.call{}`, the attacker's `receive()` is triggered
2. `receive()` immediately calls `withdraw()` again
3. Since `balances[attacker]` hasn't been zeroed yet, the second call succeeds
4. Loop continues until bank is drained or gas runs out

### Step 6: Measure Depth

```bash
forge test -vv -k "test_MeasureReentrancyDepth"
```

This shows how many times the attacker reentered before being stopped.

---

## 🔍 Analysis Questions

Use Claude Code to analyze this lab. Try these prompts:

### Prompt 1: Understand the Flow
> Analyze the withdraw() function in VulnerableBank.sol and explain the exact sequence of events when the Attacker calls withdraw(). Show the function calls step-by-step.

### Prompt 2: Identify the Fix
> What is the minimal change needed to fix the reentrancy vulnerability in VulnerableBank.sol? Explain why your fix works.

### Prompt 3: Prevention Patterns
> What are the three main patterns to prevent reentrancy attacks? Compare their pros/cons.

---

## 📖 Further Reading

### This Lab Covered:
- [Reentrancy vulnerability (SWC-107)](https://swcregistry.io/docs/SWC-107)
- [Checks-Effects-Interactions pattern](https://docs.soliditylang.org/en/develop/security-considerations.html#use-the-checks-effects-interactions-pattern)
- [Real incident: The DAO Hack (2016)](https://www.coindesk.com/understanding-dao-hack-journalists)

### Recommended Resources:
- [OpenZeppelin ReentrancyGuard](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/security/ReentrancyGuard.sol)
- [Solidity Security Considerations](https://docs.soliditylang.org/en/develop/security-considerations.html)
- [Slither static analyzer](https://github.com/crytic/slither) — Detects reentrancy automatically
- [MythX](https://mythx.io/) — Professional smart contract analysis

---

## 🎯 Key Takeaways

1. **Reentrancy is dangerous** — Can drain contracts of user funds
2. **The pattern matters** — State updates BEFORE external calls
3. **Recognize the pattern** — Look for `.call()`, `.transfer()` before balance updates
4. **Fix is simple** — Reorder your code (Checks-Effects-Interactions)
5. **Use tools** — Slither can detect this automatically

---

## 🚨 What NOT to Do

❌ Deploy to mainnet  
❌ Send real funds to test contracts  
❌ Copy-paste vulnerable patterns into production  
❌ Assume "it's too obvious to miss"  

---

## ✅ Next Steps

1. **Fix the vulnerability** — Modify `VulnerableBank.sol` to prevent reentrancy
2. **Run tests again** — Verify your fix prevents the attack
3. **Study the fix** — Understand why it works
4. **Apply the pattern** — Use this in your own code

---

## 📞 Getting Help

- Ask in the Discord #discussion channel
- Reference the facilitator guide for classroom setup
- Use Claude Code to analyze patterns
- Submit findings via GitHub

---

**Duration:** 20 minutes  
**Next Lab:** Week 1 — Integer Overflow/Underflow  
**Happy Hacking! 🎓**

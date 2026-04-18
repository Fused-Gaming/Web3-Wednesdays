# CLAUDE.md — AI-Assisted Security Analysis Prompts

Use these prompts with Claude Code or Claude.ai to deepen your understanding of reentrancy vulnerabilities.

---

## 📋 Analysis Prompts

### Prompt 1: Identify the Vulnerability
**Use this to analyze contract security:**

```
Analyze VulnerableBank.sol for security vulnerabilities.
1. Identify each risky code pattern
2. Explain why each pattern is dangerous
3. Classify by severity (critical, high, medium, low)
4. Suggest fixes for each vulnerability
```

### Prompt 2: Trace the Attack
**Use this to understand the attack flow:**

```
Trace the execution order of the reentrancy attack:

1. What does Attacker.attack() do?
2. When does VulnerableBank.receive() get called?
3. What state does the bank have when receive() executes?
4. Why can the attacker withdraw more than they deposited?
5. Draw a call stack diagram showing the reentrant calls
```

### Prompt 3: Compare Vulnerable vs Fixed Code
**Use this to understand the difference:**

```
Compare these two withdraw() implementations:

VULNERABLE:
```solidity
(bool success, ) = msg.sender.call{value: amount}("");
require(success, "Withdrawal failed");
balances[msg.sender] -= amount;
```

FIXED:
```solidity
balances[msg.sender] -= amount;
(bool success, ) = msg.sender.call{value: amount}("");
require(success, "Withdrawal failed");
```

Explain:
1. What changes between vulnerable and fixed?
2. Why does moving the state update fix the vulnerability?
3. Can the attacker still exploit the fixed version?
```

### Prompt 4: Design Your Own Attack
**Use this to think like an attacker:**

```
Design a reentrancy attack against a DEX (Decentralized Exchange) that has:
- swap(tokenA, tokenB, amount) function
- Sends tokenB to caller, then updates balances

1. How would you structure the attack?
2. What would you implement in receive() or fallback()?
3. How much profit could you extract?
4. How would you defend against it?
```

### Prompt 5: Real-World Examples
**Use this to learn from history:**

```
Analyze the DAO attack of 2016:

1. What was the DAO? What did it do?
2. How did the reentrancy attack work?
3. How much money was stolen?
4. What changed in Solidity and smart contract practices after?
5. Would this attack work today? Why or why not?
```

### Prompt 6: Prevention Strategies
**Use this to learn defenses:**

```
Explain these reentrancy prevention strategies:

1. **Checks-Effects-Interactions Pattern**
   - What is it?
   - How does it prevent reentrancy?
   - When should you use it?

2. **Reentrancy Guard (Mutex)**
   - How does OpenZeppelin's ReentrancyGuard work?
   - Code example
   - Performance impact?

3. **Limiting Gas with transfer()**
   - Why does transfer() limit reentrancy?
   - When is this NOT sufficient?
   - Code example

4. **State Variables and Locks**
   - What's a simple way to implement a lock?
   - Code example
   - Pros and cons?

5. **Comparison Table**
   - Create a table comparing all methods
   - Include: cost, security, ease of use, gas efficiency
```

### Prompt 7: Security Audit Report
**Use this to practice writing findings:**

```
Write a security audit report for VulnerableBank.sol:

Format:
- Title: [Vulnerability Name]
- Severity: Critical/High/Medium/Low
- CWE: [CWE Number]
- SWC: [SWC Registry Number]
- Description: [What is the vulnerability?]
- Root Cause: [Why does it exist?]
- Proof of Concept: [How to exploit it?]
- Impact: [What's the damage?]
- Recommendation: [How to fix it?]
- Code Fix: [Corrected code]
```

### Prompt 8: Gas Analysis
**Use this to optimize:**

```
Analyze gas usage of these approaches:

1. Original vulnerable code
2. Checks-Effects-Interactions fix
3. OpenZeppelin ReentrancyGuard
4. Simple boolean lock

For each:
- Gas cost per transaction
- Storage overhead
- Which is most efficient?
- When should you use each?
```

---

## 🎯 Exercise Responses

### Exercise 1: Test Results Analysis
After running `forge test -vv`, answer:

1. **Which tests fail?** Why?
   - Answer: None should fail; vulnerability is real
   
2. **What is `test_ReentrancyCallCount` telling us?**
   - Answer: The attacker successfully called withdraw() multiple times
   
3. **In `test_ReentrancyVulnerability()`, how much total did the attacker steal?**
   - Answer: More than the initial deposit due to reentrancy

### Exercise 2: Vulnerability Analysis
Answer using the contract code:

1. **What line number contains the vulnerable code?**
   - Answer: Lines 27-29 in VulnerableBank.sol
   
2. **What would happen if we moved line 31 before line 27?**
   - Answer: The balance would be decremented before the external call, preventing reentrancy
   
3. **Can the attacker exploit a version with `transfer()` instead of `call{}`?**
   - Answer: Much harder/impossible because transfer() limits gas (2300), not enough to call withdraw()

### Exercise 3: Attack Trace
Execute this trace by hand:

```
INITIAL STATE:
- Bank balance: 0
- Attacker balance in bank: 0
- Attacker ETH: 10

STEP 1: bank.deposit{value: 10}
- Bank balance: 10
- Attacker balance in bank: 10

STEP 2: bank.withdraw(10)
STEP 2a: Check balance: 10 >= 10 ✓
STEP 2b: call{value: 10}  → sends ETH
STEP 2b-i: Attacker.receive() triggered
STEP 2b-ii: bank.withdraw(10) called AGAIN!
  - Check balance: 10 >= 10 ✓ (still shows 10!)
  - call{value: 10} → sends another 10 ETH
  - Attacker.receive() triggered AGAIN
  - bank.withdraw(10) called AGAIN...
    [Continues until balance runs out or limit reached]
STEP 2c: Update balance (finally!)
```

---

## 🔗 Resources for Further Learning

### Documentation
- OpenZeppelin Contracts: https://docs.openzeppelin.com/contracts/
- Solidity Security: https://solidity.readthedocs.io/en/latest/security-considerations.html
- Slither Tool: https://github.com/crytic/slither

### Articles
- "The DAO Hack Explained": https://blog.openzeppelin.com/reentrancy-after-istanbul/
- "Reentrancy Attacks Explained": https://github.com/crytic/slither/wiki/Detector-Documentation#reentrancy
- "Checks-Effects-Interactions Pattern": https://fravoll.github.io/solidity-patterns/checks_effects_interactions.html

### Code Examples
- Vulnerable Code: VulnerableBank.sol (this lab)
- Fixed Code: (See Week 1 lab)
- OpenZeppelin Guard: https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/security/ReentrancyGuard.sol

---

## 💡 Tips for Using These Prompts

1. **Copy a prompt exactly** into Claude or Claude Code
2. **Include the contract code** if asking Claude to analyze it
3. **Be specific** about what you want to understand
4. **Ask follow-up questions** to deepen your knowledge
5. **Share results** with peers for discussion

---

## 🎓 Integration with Claude Code Workflow

You can use Claude Code to:

1. **Analyze contracts:**
   ```
   Use Claude to review VulnerableBank.sol for vulnerabilities
   ```

2. **Write tests:**
   ```
   Ask Claude to write additional test cases for reentrancy
   ```

3. **Trace attacks:**
   ```
   Ask Claude to create a step-by-step execution trace
   ```

4. **Compare fixes:**
   ```
   Ask Claude to show multiple ways to fix the vulnerability
   ```

5. **Audit reports:**
   ```
   Ask Claude to write a formal security finding
   ```

---

**Ready to dive deeper? Pick a prompt above and start analyzing!** 🔐

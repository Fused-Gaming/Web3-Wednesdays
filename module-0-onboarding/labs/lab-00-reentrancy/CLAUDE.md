# Lab 00: Reentrancy — Claude Code Analysis Guide

**Using Claude Code to understand smart contract vulnerabilities**

---

## 📖 What is This?

This guide provides **Claude Code prompts** to help you analyze the vulnerable contracts in this lab using AI. Each prompt is designed to teach a specific aspect of reentrancy.

### How to Use

1. Open Claude Code (`claude.ai/code`)
2. Load this project directory
3. Copy one of the prompts below
4. Paste into Claude and hit send
5. Review the analysis

---

## 🔍 Analysis Prompts

### Prompt 1: Contract Overview

**Goal:** Understand what the contracts do

```
Read and analyze the VulnerableBank.sol contract. Explain:
1. What is the purpose of this contract?
2. What functions does it provide?
3. What state variables are tracked?
4. What events are emitted?

Be beginner-friendly and explain in simple terms.
```

**Expected Learning:** Understanding contract structure and purpose

---

### Prompt 2: Identify the Vulnerability

**Goal:** Spot the exact vulnerability

```
Look at the withdraw() function in VulnerableBank.sol.

1. Explain the order of operations in this function
2. What external call is made?
3. What state update comes after?
4. Why is the ORDER of these operations dangerous?
5. How could an attacker exploit this?

Explain in 2-3 sentences why this is vulnerable.
```

**Expected Learning:** Recognizing the vulnerability pattern

---

### Prompt 3: Attack Mechanics

**Goal:** Understand the exploit

```
Analyze the Attacker.sol contract:

1. What does the attack() function do?
2. What is the purpose of the receive() function?
3. How does receive() trigger reentrancy?
4. What is the attackCount variable tracking?
5. Walk through the attack step-by-step (1→2→3→4...)

Explain how the attacker drains more funds than they deposited.
```

**Expected Learning:** Understanding how exploits work

---

### Prompt 4: Test Analysis

**Goal:** Read and understand the tests

```
Analyze test_ReentrancyAttack() in ReentrancyExploit.t.sol:

1. What setup happens before the attack?
2. What is the exact sequence of calls?
3. What assertions verify the attack worked?
4. What do the emitted logs show?
5. Why is the attacker able to get more ETH than they deposited?

Summarize the test result in one sentence.
```

**Expected Learning:** Understanding test-driven vulnerability demonstration

---

### Prompt 5: The Fix

**Goal:** Learn how to prevent reentrancy

```
Given that the vulnerability is in this order:

CURRENT (VULNERABLE):
```
(bool success, ) = msg.sender.call{value: amount}("");
balances[msg.sender] = 0;
```

What change would make this SAFE? Explain:
1. What is the new order?
2. Why does this prevent reentrancy?
3. Would an attacker still be able to exploit this?
4. Name the pattern this follows.

Provide the corrected code snippet.
```

**Expected Learning:** Understanding prevention strategies

---

### Prompt 6: Static Analysis

**Goal:** Learn about tools that detect this

```
Explain how a static analysis tool like Slither would detect this 
reentrancy vulnerability. Specifically:

1. What pattern would Slither look for?
2. How would it identify state changes after external calls?
3. Why are low-level calls like .call{} more dangerous than .transfer()?
4. What would Slither's report look like?

What command would you run to check this contract with Slither?
```

**Expected Learning:** Using tools for vulnerability detection

---

### Prompt 7: Real-World Impact

**Goal:** Understand practical consequences

```
Research the 2016 DAO hack and explain:

1. What was the DAO?
2. How was reentrancy exploited?
3. How much was stolen?
4. What was the impact on Ethereum?
5. What changes did this lead to in Solidity?

How would the fix from Prompt 5 have prevented this hack?
```

**Expected Learning:** Understanding real-world impact and historical context

---

### Prompt 8: Prevention Patterns

**Goal:** Learn all ways to prevent reentrancy

```
There are three main patterns to prevent reentrancy:

1. Checks-Effects-Interactions (reordering)
2. ReentrancyGuard modifier
3. Mutex lock variable

For each pattern, explain:
- How it works
- Pros and cons
- Code example
- When to use it

Which would you use for VulnerableBank? Why?
```

**Expected Learning:** Understanding multiple solutions

---

### Prompt 9: Forensic Analysis

**Goal:** Learn how to spot reentrancy in unfamiliar code

```
Create a checklist for identifying reentrancy vulnerabilities:

1. What specific code patterns indicate reentrancy risk?
2. What should you check BEFORE external calls?
3. What should you check AFTER external calls?
4. What tools help automate the checking?
5. How would you test for reentrancy manually?

Create a security audit checklist (5-7 items).
```

**Expected Learning:** Developing a security mindset

---

### Prompt 10: Writing an Audit Report

**Goal:** Learn professional reporting

```
Write a brief security audit report for VulnerableBank.sol.

Include:
1. Executive Summary (1-2 sentences)
2. Vulnerability Found (title, severity, CVSS score)
3. Technical Details (explanation + code snippet)
4. Impact Assessment (what's at risk?)
5. Recommended Fix (code + explanation)
6. Proof of Concept (reference to test case)

Format this as a professional report you'd send to a project.
```

**Expected Learning:** Professional security reporting

---

## 🎓 Self-Guided Questions

If you want to analyze deeper:

**Question 1:** How many times would the attack reenter if the bank had 100 ETH and the attacker had 1 ETH?

**Question 2:** What would happen if the contract used `.transfer()` instead of `.call{}`?

**Question 3:** Could reentrancy affect the `deposit()` function? Why or why not?

**Question 4:** How would you test for reentrancy in a contract you didn't write?

---

## 🔗 Integration with Foundry

### View Contract with Claude Code

```bash
cat src/VulnerableBank.sol  # Use with Claude to analyze
cat src/Attacker.sol
cat test/ReentrancyExploit.t.sol
```

### Run Tests While Analyzing

```bash
forge test -vv                               # Run all tests
forge test -vv -k "test_ReentrancyAttack"  # Just the attack
forge test -vv --gas-report                 # See gas usage
```

### Get More Details

```bash
forge test -vv --gas-report --report-file=gas-report.txt
cat gas-report.txt
```

---

## 📚 Recommended Learning Order

1. **Start:** Prompt 1 (understand the contracts)
2. **Next:** Prompt 2 (identify the vulnerability)
3. **Then:** Prompt 3 (understand the attack)
4. **Deep dive:** Prompt 4 (analyze the tests)
5. **Learn fix:** Prompt 5 (fix the vulnerability)
6. **Understand tools:** Prompt 6 (static analysis)
7. **Context:** Prompt 7 (real-world impact)
8. **Prevention:** Prompt 8 (prevention patterns)
9. **Practice:** Prompt 9 (create your own checklist)
10. **Report:** Prompt 10 (write a professional report)

---

## 💡 Tips for Using Claude Code

### Copy Code into Claude

When Claude asks for code, you can:
1. Use Claude Code's file browser to load contracts
2. Copy-paste specific functions
3. Ask Claude to reference line numbers
4. Share test output for analysis

### Ask for Clarification

Good follow-ups:
- "Explain that in simpler terms"
- "Show me where in the code this happens"
- "Why would an attacker do X instead of Y?"
- "How would I detect this in production?"

### Experiment

- Modify the contracts slightly and ask Claude to analyze
- Ask "what if" questions
- Request code fixes and understand why they work

---

## 🎯 Success Criteria

By the end of this lab and these analyses, you should:

✅ Explain reentrancy in your own words  
✅ Spot reentrancy patterns in code  
✅ Understand how the attack works  
✅ Know at least 2 ways to prevent it  
✅ Write a basic security report  
✅ Use tools like Slither  

---

## 📝 Next Steps

1. **Complete all prompts** — Work through 1-10 over the week
2. **Fix the contract** — Modify VulnerableBank to prevent reentrancy
3. **Write a report** — Document your findings
4. **Submit to Discord** — Share your analysis in #showcase

---

## 🔗 Resources

- [Prompt 7 Reference: The DAO Hack](https://www.coindesk.com/understanding-dao-hack-journalists)
- [OpenZeppelin ReentrancyGuard](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/security)
- [Slither Documentation](https://github.com/crytic/slither)
- [Solidity Docs: Security](https://docs.soliditylang.org/en/develop/security-considerations.html)

---

**Happy analyzing! Ask questions in Discord 🎓**

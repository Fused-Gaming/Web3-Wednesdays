# CLAUDE.md — Week [NUM] Lab

## 🎯 Lab Overview
This lab focuses on **[vulnerability name]** in the context of [protocol/domain].

**Learning Goal:** Understand how [vulnerability] works, exploit it, and recognize it in real code.

---

## 📋 Prompts for Code Analysis

### Prompt 1: Initial Contract Review
```
Analyze this Solidity contract for security vulnerabilities:

[PASTE CONTRACT CODE]

Focus on:
1. State management and updates
2. External calls and reentrancy
3. Access control
4. Arithmetic operations
5. Protocol assumptions

Identify the main vulnerability and explain how an attacker could exploit it.
```

### Prompt 2: Threat Model Generation
```
Create a threat model for this contract:

[PASTE CONTRACT CODE]

For each function:
1. What are the assumptions?
2. What happens if an attacker violates those assumptions?
3. What state changes are possible?
4. What damage could result?

Format as:
- Function name
- Assumption
- Attack vector
- Impact
```

### Prompt 3: Exploit Development
```
Help me write a Foundry test that exploits [vulnerability name]:

Contract:
[PASTE VULNERABLE CODE]

Requirements:
1. Set up the contract with initial state
2. Call functions to trigger the vulnerability
3. Prove the exploit (show state change or ether theft)
4. Use assertions to verify the attack succeeded

Use this Foundry test scaffold:
[PASTE TEST SCAFFOLD]
```

### Prompt 4: Fix & Safe Pattern
```
Show me how to fix this vulnerability:

[PASTE VULNERABLE CODE]

Provide:
1. Explanation of the fix
2. Corrected code
3. Trade-offs (gas, functionality, complexity)
4. References to secure patterns (OpenZeppelin, etc.)
```

### Prompt 5: Report Writing
```
Write a security audit finding for this issue:

Vulnerability: [vulnerability name]
Severity: [High/Medium/Low]
Contract: [name]

Include:
1. Description (what is the issue?)
2. Impact (what can happen?)
3. Proof of concept (how is it exploited?)
4. Recommendation (how to fix it?)
5. References (standards, similar issues, etc.)

Use this template:
[PASTE TEMPLATE]
```

---

## 🧪 PoC Scaffolds

### Foundry Test Template
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Test.sol";
import "../contracts/Vulnerable.sol";

contract [VulnerabilityName]Test is Test {
    [ContractName] vulnerable;
    address attacker = address(0xdeadbeef);

    function setUp() public {
        // Deploy contract
        vulnerable = new [ContractName]();

        // Set up initial state
        // (e.g., mint tokens, deposit funds, add balances)
    }

    function test_exploit_[vulnerability]() public {
        // Attacker setup
        vm.startPrank(attacker);

        // 1. Attack vector (call vulnerable function)
        // 2. Trigger the vulnerability

        // 3. Verify exploit succeeded
        assert(/* attacker gains something */);

        vm.stopPrank();
    }

    // Helper functions
    function _setupInitialState() internal {
        // ...
    }
}
```

---

## 📖 Resources

### Understanding the Vulnerability
- **Paper/Blog**: [Link]
- **Case Study**: [Real exploit that used this]
- **Tool**: [Slither/Mythril check](https://github.com/)

### Secure Patterns
- **OpenZeppelin**: [Link to secure contract]
- **AAVE**: [Link to pattern]
- **Reference**: [Best practices doc]

### Further Reading
- [Ethereum Security](https://ethereum.org/en/developers/tutorials/secure-development-workflow/)
- [OWASP Smart Contract Top 10](https://owasp.org/www-community/vulnerabilities)
- [DeFi Security 101](https://link.medium.com/)

---

## 🚀 Expected Workflow

1. **Read** the vulnerable contract
2. **Ask Claude**: Use Prompt 1 (Initial Review)
3. **Understand**: Use Prompt 2 (Threat Model)
4. **Exploit**: Use Prompt 3 (PoC Development)
5. **Learn**: Use Prompt 4 (Safe Patterns)
6. **Document**: Use Prompt 5 (Report Writing)

---

## 💡 Pro Tips

- Use `forge test -vv` to see detailed output (logs, state changes)
- Add `console.log()` in contracts to trace execution
- Use `vm.prank()` to impersonate different accounts
- Check gas usage: `forge test --gas-report`
- Read the contract comments (`// VULNERABLE:`) carefully

---

## 🎓 Learning Checklist

- [ ] I understand what the vulnerability is
- [ ] I can explain how it's exploited
- [ ] I can write a PoC that triggers it
- [ ] I can identify the fix
- [ ] I can write a security report about it

---

## 📝 Submission

When you've completed the lab:

1. Save your findings as `findings.md` in your fork
2. Open a GitHub issue with:
   - Vulnerability: [name]
   - Severity: [High/Medium/Low]
   - PoC: [link to test]
   - Recommendation: [how to fix]

---

## 🤔 Stuck? Try This

**Q: The test won't compile**
A: Check Solidity version (^0.8.0), import paths, and contract names

**Q: The exploit doesn't trigger**
A: Verify initial state setup, check function signatures, add `console.log()` to trace

**Q: I don't understand the vulnerability**
A: Re-read the contract comments, ask in Discord, or use Claude Code (Prompt 1)

**Q: How do I know if my fix is correct?**
A: Run `forge test` — your PoC should fail, safe version should pass


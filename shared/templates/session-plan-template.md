# Week [NUM] - [VULNERABILITY NAME]

## Session Overview
- **Duration**: 60 minutes
- **Format**: Presentation (30 min) → Lab (20 min) → Debrief (10 min)
- **Audience**: Beginners learning Solidity
- **Target**: [Brief learning goal]

---

## Pre-Session Checklist
- [ ] Contracts compile locally (`forge build`)
- [ ] Tests pass (`forge test`)
- [ ] Slides reviewed with speaker notes
- [ ] Demo run-through completed
- [ ] Lab instructions tested with fresh clone
- [ ] Discord announcement posted
- [ ] Zoom/in-person setup confirmed

---

## Timeline

### 0:00 - 0:05 | Welcome & Overview
**Speaker Notes:**
- Welcome everyone to Web3 Wednesdays
- Today's topic: [vulnerability name]
- Why this matters: [real-world impact, recent exploits]

### 0:05 - 0:20 | Vulnerability Explanation (15 min)
**Content:**
- Define the vulnerability
- Show code example
- Explain attack flow
- Real-world case study

**Slide Deck:** [Link to slides]

### 0:20 - 0:30 | Live Demo Walkthrough (10 min)
**Demo:**
1. Open [contract file]
2. Explain vulnerable code
3. Run exploit test: `forge test -vv`
4. Show output (state changes, gas, logs)
5. Explain findings

**Key Points to Highlight:**
- Where the vulnerability exists
- Why it's possible
- What an attacker could do

### 0:30 - 0:50 | Hands-on Lab (20 min)
**Instructions:**
1. Clone lab folder: `/module-[N]/week-[NUM]/labs/lab-[NUM]-[topic]/`
2. Read `README.md` for step-by-step guide
3. Review `contracts/Vulnerable.sol`
4. Complete the guided steps
5. Run `forge test` to verify exploit

**Facilitator Notes:**
- Walk through the first 3 steps together (5 min)
- Let participants work independently (10 min)
- Share solutions and discuss (5 min)

**Guidance for Participants:**
- Don't skip reading the annotations (`// VULNERABLE:` comments)
- Ask questions—this is a learning environment
- Experiment: Try changing the contract, run tests again

### 0:50 - 1:00 | Debrief & Discussion (10 min)
**Discussion Points:**
- What surprised you about this vulnerability?
- How would you prevent this in real code?
- Have you seen this in the wild?

**Show Solutions:**
- Unlock `solutions/findings.md`
- Review expected findings
- Discuss severity + real-world impact

---

## Resources

### Lab Files
- Vulnerable contract: `contracts/Vulnerable.sol`
- Exploit POC: `poc/Exploit.t.sol`
- Safe version: `contracts/SafeVersion.sol` (unlocked after session)

### Further Reading
- [Link 1](url)
- [Link 2](url)
- [Link 3](url)

### Tools & Setup
- Foundry: https://book.getfoundry.sh/
- Slither: https://github.com/crytic/slither
- Claude Code: https://claude.ai/code

---

## Speaker Notes for Live Demo

### Running the Exploit
```bash
cd module-[N]/week-[NUM]/labs/lab-[NUM]-[topic]
forge build
forge test -vv --match-test <test_name>
```

### Expected Output
```
[contract_name] contract
...
[test name]: ... ok
```

### What to Explain
1. **The vulnerability**: Point out the vulnerable line in the contract
2. **The attack**: Walk through the test step by step
3. **The impact**: Show what an attacker could accomplish
4. **Prevention**: Discuss secure patterns or fixes

---

## Post-Session

### Feedback Collection
- Post survey in Discord: "1-5 scale: Was the pacing good?"
- Collect GitHub issues: Lab bugs, unclear instructions
- Screenshot feedback: "Most useful thing learned today?"

### Next Steps for Participants
- Attempt the lab independently (if didn't finish in session)
- Submit findings: Open GitHub issue in `/findings/` folder
- Read further resources + related case studies
- Prepare for Week [NUM+1]: [preview topic]

---

## Session Metrics (to track)
- [ ] Attendance count
- [ ] % who completed lab
- [ ] Avg time to complete lab
- [ ] Feedback score (1-5)
- [ ] Top question / pain point

---

## Notes for Next Iteration
[Leave space for feedback after session]

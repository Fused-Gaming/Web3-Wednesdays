# Facilitator Guide — Web3 Wednesdays

## Overview
This guide helps you run an effective 60-minute Web3 Wednesdays session with beginners learning smart contract security.

---

## Pre-Session (1 week before)

### Preparation Checklist
- [ ] Review session plan (`session-plan.md`)
- [ ] Test all contracts locally (`forge build && forge test`)
- [ ] Practice live demo (run through exploit once)
- [ ] Create/review slide deck
- [ ] Set up environment (Zoom, in-person space, Discord)
- [ ] Ensure lab README is clear and tested
- [ ] Post announcement in Discord (date, topic, join link)

### Lab Testing
```bash
cd module-[N]/week-[NUM]/labs/lab-[NUM]-[topic]
forge install  # If needed
forge build
forge test -vv  # Verify all tests pass
```

### Demo Dry-Run
1. Start from a clean clone (to simulate participant experience)
2. Run each step of the demo
3. Note any issues or unclear instructions
4. Update README if needed

---

## During the Session (60 minutes)

### Setup (5 min before start)
- [ ] Zoom/Discord open, waiting room enabled
- [ ] Screen share ready (terminal + text editor visible)
- [ ] Slides loaded
- [ ] Demo contract cloned and compiled locally
- [ ] Coffee ready ☕

### Session Timeline

#### 0:00 - 0:05 | Welcome (5 min)
```
"Welcome to Web3 Wednesdays! I'm [name].

Today we're covering [vulnerability name].

Real-world impact: [recent exploit case study]

This is a beginner-friendly session—no prior
Solidity needed. Ask questions anytime.

Let's dive in."
```

**Facilitator Notes:**
- Be warm and welcoming
- Acknowledge everyone's background
- Set expectation: "This is hands-on; we'll code together"

#### 0:05 - 0:20 | Presentation (15 min)
**What to Cover:**
1. **Define the vulnerability** (2 min)
   - What is it?
   - Why does it happen?

2. **Show vulnerable code** (5 min)
   - Annotated Solidity
   - Highlight the vulnerable line
   - Explain the issue

3. **Explain the attack** (5 min)
   - How an attacker exploits it
   - What state changes
   - Real-world impact

4. **Case study** (3 min)
   - Recent exploit that used this vulnerability
   - Amount lost / impact

**Presentation Tips:**
- Use slides, but speak naturally
- Pause for questions
- Don't rush; clarity > speed

#### 0:20 - 0:30 | Live Demo (10 min)
**Demo Walkthrough:**
1. **Show the contract** (2 min)
   - Open file in editor
   - Point out vulnerable function
   - Read the `// VULNERABLE:` comment aloud

2. **Run the exploit** (5 min)
   ```bash
   # Terminal visible to participants
   cd module-[N]/week-[NUM]/labs/lab-[NUM]-[topic]
   forge test -vv --match-test test_exploit
   ```
   - Show test pass
   - Explain what happened
   - Highlight state change in output

3. **Explain the PoC** (3 min)
   - Walk through test code line by line
   - Explain each assertion
   - Q&A: "What questions do you have about the exploit?"

**Demo Tips:**
- Speak slowly; many are new to this
- Zoom in on code (font size >20)
- Share cursor so participants can follow
- If demo fails: "Let me rerun that..." (have a backup screenshot)

#### 0:30 - 0:50 | Hands-on Lab (20 min)
**Guidance:**
1. **Hand out instructions** (1 min)
   - "Everyone clone `/module-[N]/week-[NUM]/labs/lab-[NUM]-[topic]/`"
   - "Follow the README step by step"

2. **Walk through setup together** (3 min)
   - "First, `cd` into the lab folder"
   - "Run `forge build`"
   - "Let me know when you see 'Compiler run successful'"

3. **Let participants work** (12 min)
   - You're available for questions
   - Type in chat: "Ask if you get stuck!"
   - Monitor Zoom reactions / hand raises

4. **Regroup & share solutions** (4 min)
   - "Let's see who got it working"
   - Show your test output
   - Explain any tricky parts
   - "Don't worry if you didn't finish—replay this session"

**Lab Tips:**
- Set expectations: "You might not finish in 20 min—that's OK"
- Encourage experimentation: "Try modifying the contract"
- Celebrate wins: "Nice! You got that working"
- Have 1-2 helpers monitoring chat (if possible)

#### 0:50 - 1:00 | Debrief (10 min)
**Discussion:**
1. **Recap** (2 min)
   - "What did we learn today?"
   - "Key takeaway: [summarize vulnerability]"

2. **Discuss prevention** (3 min)
   - "How would you prevent this?"
   - "What patterns are secure?"
   - Link to OpenZeppelin solution

3. **Next week** (2 min)
   - "Next week: [Week NUM+1]"
   - "Topic: [vulnerability]"
   - "See you Wednesday!"

4. **Feedback** (3 min)
   - "Quick poll: 1-5, was the pacing good?"
   - "React with 🎉 if you enjoyed"
   - "DM me feedback or post in #feedback"

**Debrief Tips:**
- Be encouraging
- Acknowledge those who struggled
- Set up next week to build momentum

---

## After the Session (30 min)

### Immediately Post-Session
1. **Thank participants** in Discord
2. **Post recordings** (Zoom auto-records)
3. **Share solution code** (unlock in GitHub)
4. **Remind about submission** (findings due by [date])

### Within 24 Hours
1. **Collect feedback**
   - GitHub issues: session-feedback.md template
   - Discord poll: "Would you attend next week?"

2. **Review issues**
   - Lab bugs? → Fix and update
   - Unclear instructions? → Clarify
   - Wrong output? → Troubleshoot

3. **Share highlights**
   - Tweet: "Great session today! 15 participants, [stat]"
   - Showcase: "Best finding this week: [highlight]"

### For Next Week
1. **Incorporate feedback**
   - Pacing too fast? → Add more breaks
   - Lab too hard? → Simplify
   - Confusion? → Improve README

2. **Prepare the next session**
   - Follow the prep checklist again
   - Test the new lab thoroughly

---

## Common Issues & Fixes

### Issue: Participants Can't Compile
**Solution:**
- Check Foundry version: `foundry --version` (should be recent)
- Verify Solidity: contract should have `pragma ^0.8.0`
- Rebuild: `rm -rf out/ && forge build`

### Issue: Exploit Test Fails
**Solution:**
- Check initial state setup (balances, approvals, etc.)
- Verify contract constructor
- Check test function name (should match regex)
- Re-run: `forge test -vv --match-test [exact_name]`

### Issue: Live Demo Breaks
**Solution:**
- Have a screenshot saved (run demo beforehand)
- Say: "Let me share the expected output"
- Move on; don't spend >3 min troubleshooting live
- Debug offline, share fix in Discord

### Issue: Lab Takes >20 Minutes
**Solution:**
- This is OK for beginners
- Tell participants: "Continue at home"
- Post walkthrough / recording
- Link to solution code

### Issue: Low Attendance
**Solution:**
- Post reminder 24h before
- Send Discord ping 1h before
- Offer to reschedule for those who ask
- Record session (post recording)

---

## Remote vs. In-Person

### Remote (Zoom)
- Screen share terminal + slides
- Use Zoom reactions (👍 = confused, ✋ = question)
- Record automatically
- Chat for helpers to answer questions
- Post recording link in Discord post-session

### In-Person (Oakland)
- Set up projector, show slides
- Participants bring laptops
- Setup your demo laptop beforehand
- Have WiFi info printed
- Leave extra time for setup

### Hybrid (Both)
- Project slides to room
- Stream on Zoom
- Facilitator at podium
- Have a chat monitor (Discord or Slack)
- Test AV setup 15 min early

---

## Accessibility Tips

- **Audio**: Speak clearly, no background noise, volume comfortable
- **Screen**: Text size >18pt, high contrast (use VLN dark theme)
- **Pace**: Pause between sections, allow time for questions
- **Captions**: YouTube auto-captions if you upload recording
- **Breaks**: Offer 5-min break if session >75 min
- **Recordings**: Post to YouTube/GitHub for replays

---

## Safety & Responsibility

### Mindset
- **This is education**, not hacking-for-profit
- Emphasize: "Learn to defend, not to attack"
- Responsible disclosure culture

### Disclaimers
- "These contracts are intentionally vulnerable"
- "Don't use these in production"
- "Exploiting real contracts without permission is illegal"

### References
- OpenZeppelin: https://www.openzeppelin.com/security
- OWASP: https://owasp.org/
- Responsible Disclosure: https://www.eff.org/responsible-disclosure

---

## Resources for You

- **Foundry Docs**: https://book.getfoundry.sh/
- **Solidity Docs**: https://docs.soliditylang.org/
- **Similar Exploits**: See `resources/case-studies.md`
- **Slack**: #web3-wednesdays-facilitators (for help)

---

## Questions?

Post in #facilitators or DM the organizers.

Thank you for leading Web3 Wednesdays! 🎉


# Design System & Web3 UI Recommendations

## 🔍 VLN.gg Research Findings

**Important Discovery:** No public design system library called "vln.gg" with reusable React components was found.

**Interpretation:** VLN.gg may be:
1. Internal to the organization (requires authentication)
2. A reference to the Web3-Wednesdays project itself
3. A future/under-development design system

**Recommendation:** Use proven Web3 design systems (below) and apply VLN design tokens from your internal docs.

---

## 📊 Recommended Design Systems

### **Option 1: Ant Design Web3** ⭐ Recommended
- **URL**: https://web3.ant.design/
- **GitHub**: ant-design/ant-design-web3
- **Best For**: Professional, multi-chain Web3 applications
- **Components**: ConnectButton, Address, NFTCard, multi-chain support
- **Install**: `npm install antd @ant-design/web3`
- **Chains**: Ethereum, Solana, Bitcoin, TON, Sui, TRON
- **Pros**: Battle-tested, large component library, Web3-native

### **Option 2: thirdweb Design System**
- **URL**: https://portal.thirdweb.com/react/v5/getting-started
- **Best For**: Complete Web3 dev stack (wallet, payments, contracts)
- **Components**: 2000+ prebuilt components
- **Features**: Wallet connection, fiat on-ramps, crypto swaps
- **Install**: Built into thirdweb SDK
- **Pros**: Most comprehensive, minimal setup required

### **Option 3: RainbowKit**
- **URL**: https://rainbowkit.com/
- **Best For**: Wallet connection UI specifically
- **Components**: ConnectButton with theme customization
- **Wallets**: 500+ supported
- **Install**: `npm install @rainbow-me/rainbowkit wagmi viem @tanstack/react-query`
- **Pros**: Most wallet support, lightweight

---

## 🎨 VLN Design Tokens (from CLAUDE.md context)

```css
:root {
  --bg-primary: #0b0f17;           /* Dark background */
  --bg-secondary: #111827;         /* Elevated background */
  --bg-elevated: #1f2937;          /* Card/modal background */
  --text-primary: #f3f4f6;         /* Main text */
  --text-muted: #9ca3af;           /* Secondary text */
  --accent-primary: #00f5d4;       /* Neon cyan (main accent) */
  --accent-secondary: #7c3aed;     /* Purple accent */
  --accent-tertiary: #00b3ff;      /* Light blue accent */
  --success: #22c55e;              /* Green */
  --warning: #f59e0b;              /* Orange */
  --danger: #ef4444;               /* Red */
  --border-soft: rgba(255,255,255,0.08);
  --glow-accent: 0 0 12px rgba(0,245,212,0.4);
}
```

**How to apply with Tailwind:**
- Already configured in `next-app/tailwind.config.js`
- Use CSS variables or Tailwind color classes: `bg-vln-dark`, `text-vln-accent`, etc.

---

## 🖼️ Contract Visualization Tools

### **Syntax Highlighting**
| Tool | Best For | Use Case |
|------|----------|----------|
| [React Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter) | Code display in React | Display `.sol` files with Solidity highlighting |
| [highlightjs-solidity](https://github.com/highlightjs/highlight.js) | Language support | Highlight.js extension for Solidity |
| [tree-sitter-solidity](https://github.com/JoranHonig/tree-sitter-solidity) | AST parsing | Parse and analyze Solidity structure |

**Recommendation:** Use `React Syntax Highlighter` with `highlightjs-solidity` for web3-wednesdays labs.

### **Static Analysis & Visualization**
| Tool | Purpose | Integration |
|------|---------|-------------|
| [Slither](https://github.com/crytic/slither) | Vulnerability detection | Python backend, call from Node.js |
| [Surya](https://github.com/ethereum-security/surya) | Call graphs, inheritance | CLI tool, parse output |
| [Sol2UML](https://github.com/naddison36/sol2uml) | UML diagrams | CLI tool, generate SVGs |
| [Remix Analyzers](https://remix-ide.readthedocs.io/) | Interactive analysis | Use Remix.js API |

**Recommendation for Web3-Wednesdays:**
- Use Slither + Foundry for backend analysis
- Display results as JSON in Next.js frontend
- Show vulnerability annotations alongside code

### **Interactive Exploitation Simulators**
| Tool | Best For |
|------|----------|
| [Remix IDE](https://remix.ethereum.org/) | Browser-based code editor + testing |
| [Hardhat](https://hardhat.org/) | Local blockchain simulation |
| [Foundry](https://book.getfoundry.sh/) | PoC testing (already using) |

**Recommendation:** Link to Foundry tests (already in repo), embed Remix for interactive demos.

---

## 🎯 Implementation Plan for learning.vln.gg

### **Phase 1: Core UI (Current Next.js Setup)**
✅ Already done:
- Dark theme with VLN tokens
- Tailwind CSS configured
- Layout and navigation
- Security warning component

### **Phase 2: Contract Viewer Component**
```typescript
// next-app/app/components/ContractViewer.tsx
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function ContractViewer({ code }: { code: string }) {
  return (
    <SyntaxHighlighter language="solidity" style={atomDark}>
      {code}
    </SyntaxHighlighter>
  );
}
```

### **Phase 3: Lab Simulator**
```typescript
// next-app/app/simulator/page.tsx
// Features:
// 1. Upload/paste contract code
// 2. Run syntax highlighting
// 3. Call Slither backend (Python API)
// 4. Display vulnerabilities
// 5. Link to Foundry tests
// 6. Show expected output
```

### **Phase 4: Interactive Elements**
- RainbowKit for wallet connection (if needed for future features)
- Ant Design Web3 components for consistency
- Mermaid diagrams for architecture

---

## 📦 Updated next-app Dependencies

**Add to package.json for Phase 2-4:**
```json
{
  "dependencies": {
    "react-syntax-highlighter": "^15.5.0",
    "solidity-ast-parser": "^0.0.11",
    "mermaid": "^10.6.1"
  },
  "devDependencies": {
    "@types/react-syntax-highlighter": "^15.5.7"
  }
}
```

**Optional (for Phase 4):**
```json
{
  "dependencies": {
    "@rainbow-me/rainbowkit": "^2.0.0",
    "wagmi": "^2.0.0",
    "viem": "^2.0.0",
    "antd": "^5.0.0",
    "@ant-design/web3": "^1.0.0"
  }
}
```

---

## 🎨 Design Decisions for Web3-Wednesdays

### **For learning.vln.gg**
✅ **Use:** VLN design tokens (dark, neon accents) + Tailwind
✅ **Add:** React Syntax Highlighter for code display
✅ **Add:** Mermaid for diagrams (already in package.json)
⚠️ **Later:** Ant Design Web3 if interactive demos needed

### **For Contract Viewer**
✅ **Use:** Foundry + Slither (backend)
✅ **Display:** Syntax highlighting + vulnerability annotations
✅ **Link:** To GitHub repo for running locally

### **For Growth/Community**
✅ **Use:** Discord (not web, external)
✅ **Use:** Twitter (external)
✅ **Link:** From learning.vln.gg to Discord/Twitter

---

## 🚀 Migration Path (If design.vln.gg Becomes Available)

When the actual VLN design system is available:

1. **Import VLN component library** → `npm install @vln/design-system`
2. **Update next-app** → Replace Tailwind colors with VLN components
3. **Maintain current pages** → VLN components should be compatible
4. **Update styling** → From Tailwind classes to VLN component variants

**Current setup is future-proof** because:
- Using CSS variables (easy to swap)
- Tailwind is standard (VLN likely extends it)
- Component structure is simple

---

## 📚 Resources

### Design Systems
- Ant Design Web3: https://web3.ant.design/
- thirdweb SDK: https://portal.thirdweb.com/react/v5
- RainbowKit: https://rainbowkit.com/

### Code Highlighting
- React Syntax Highlighter: https://github.com/react-syntax-highlighter/react-syntax-highlighter
- Tree-sitter Solidity: https://github.com/JoranHonig/tree-sitter-solidity

### Security Analysis
- Slither: https://github.com/crytic/slither
- Surya: https://github.com/ethereum-security/surya
- MythX: https://mythx.io/

### Best Practices
- Web3 Design Principles: https://www.web3designprinciples.com/
- BNB Chain Security: https://www.bnbchain.org/en/blog/best-practices-for-security-in-web3

---

## 📋 Next Steps

1. **Clarify with user:** What is the actual vln.gg design system? (Internal/external/future?)
2. **Confirm choice:** Use Ant Design Web3 or stick with VLN tokens + Tailwind?
3. **Build Phase 2:** Contract viewer component (syntax highlighting)
4. **Build Phase 3:** Lab simulator (upload contract, run analysis)
5. **Deploy:** Test on learning.vln.gg


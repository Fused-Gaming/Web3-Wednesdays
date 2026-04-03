#!/bin/bash

# Web3-Wednesdays Deployment Verification Script
# Verify the Next.js app is ready for production deployment

set -e

echo "🔍 Web3-Wednesdays Deployment Verification"
echo "=========================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Track results
PASSED=0
FAILED=0

check_result() {
  if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓${NC} $1"
    ((PASSED++))
  else
    echo -e "${RED}✗${NC} $1"
    ((FAILED++))
  fi
}

# 1. Check Node.js version
echo "📦 Checking environment..."
node --version > /dev/null 2>&1
check_result "Node.js installed"

# 2. Check Next.js project exists
echo ""
echo "📂 Checking project structure..."
test -f "next-app/package.json"
check_result "package.json exists"

test -d "next-app/app"
check_result "app/ directory exists"

test -f "next-app/next.config.js"
check_result "next.config.js exists"

# 3. Check required files
echo ""
echo "📄 Checking required pages..."
test -f "next-app/app/page.tsx"
check_result "Landing page (/) exists"

test -f "next-app/app/modules/page.tsx"
check_result "/modules page exists"

test -f "next-app/app/module-0/page.tsx"
check_result "/module-0 page exists"

test -f "next-app/app/module-1/page.tsx"
check_result "/module-1 page exists"

test -f "next-app/app/module-2/page.tsx"
check_result "/module-2 page exists"

test -f "next-app/app/module-3/page.tsx"
check_result "/module-3 page exists"

test -f "next-app/app/resources/page.tsx"
check_result "/resources page exists"

# 4. Check dependencies
echo ""
echo "📚 Checking dependencies..."
test -f "next-app/package-lock.json"
check_result "package-lock.json exists"

# 5. Build test
echo ""
echo "🔨 Building Next.js project..."
cd next-app
npm run build > /dev/null 2>&1
check_result "Build successful"

# 6. Check build output
test -d ".next"
check_result "Build artifacts (.next/) created"

# 7. Check for security warnings in code
cd ..
grep -r "security-warning" next-app/app/module-0/page.tsx > /dev/null 2>&1
check_result "Security warnings in Module 0"

grep -r "⚠️" next-app/app/layout.tsx > /dev/null 2>&1
check_result "Security warnings in footer"

# 8. Check for GitHub links
grep -r "github.com/Fused-Gaming" next-app/app > /dev/null 2>&1
check_result "GitHub links present"

# 9. Check TypeScript
echo ""
echo "🎯 Checking code quality..."
cd next-app
npm run build 2>&1 | grep -i "error" > /dev/null 2>&1
if [ $? -ne 0 ]; then
  echo -e "${GREEN}✓${NC} No TypeScript errors"
  ((PASSED++))
else
  echo -e "${RED}✗${NC} TypeScript errors found"
  ((FAILED++))
fi

# Summary
echo ""
echo "=========================================="
echo "✅ Verification Results"
echo "=========================================="
echo -e "${GREEN}Passed: $PASSED${NC}"
echo -e "${RED}Failed: $FAILED${NC}"
echo ""

if [ $FAILED -eq 0 ]; then
  echo -e "${GREEN}✓ All checks passed! Ready for deployment.${NC}"
  echo ""
  echo "Next steps:"
  echo "1. Follow DEPLOY_NOW.md for Vercel deployment"
  echo "2. Verify 5-point checklist after deployment"
  echo "3. Announce at https://learning.vln.gg in Discord"
  exit 0
else
  echo -e "${RED}✗ Some checks failed. Review errors above.${NC}"
  exit 1
fi

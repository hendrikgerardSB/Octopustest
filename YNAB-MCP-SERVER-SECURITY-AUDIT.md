# Security Audit Report: calebl/ynab-mcp-server

**Repository:** https://github.com/calebl/ynab-mcp-server
**Version Audited:** 0.1.2
**Audit Date:** 2026-01-18
**Auditor:** Automated Security Review

---

## Summary: SAFE TO USE (with minor recommendations)

The ynab-mcp-server is a well-written, security-conscious MCP server that interfaces exclusively with the official YNAB API. The codebase shows no signs of malicious behavior, data exfiltration, or suspicious patterns.

---

## Token Handling Assessment: SECURE

### Findings:

| Check | Result |
|-------|--------|
| Token read location | `src/index.ts:30` - via `process.env.YNAB_API_TOKEN` |
| Token destination | Passed only to official `ynab` SDK constructor |
| Token logged | NO - never logged anywhere |
| Token written to disk | NO - no file operations involving token |
| Token sent elsewhere | NO - only to api.ynab.com via YNAB SDK |

**Details:**
- The YNAB API token is read once from environment variable at startup
- It is immediately passed to the official YNAB SDK: `new ynab.API(process.env.YNAB_API_TOKEN || "")`
- The SDK handles all API communication internally
- No custom HTTP calls in production source code that could leak the token

---

## Network Calls Analysis: SECURE

### URLs Found:

| Location | URL | Assessment |
|----------|-----|------------|
| `node_modules/ynab/dist/runtime.js` | `https://api.ynab.com/v1` | Official YNAB API (SAFE) |
| `debugging/getCategory.js` | `https://api.ynab.com/v1/budgets/...` | Official YNAB API (SAFE) |
| `debugging/getBudgetMonth.js` | `https://api.ynab.com/v1/budgets/...` | Official YNAB API (SAFE) |

### Searches Performed:
- `fetch(` in src/ - **No matches**
- `axios` in src/ - **No matches**
- `http://` in src/ - **No matches**
- `https://` in src/ - **No matches**

**Conclusion:** All network traffic goes exclusively to `api.ynab.com` via the official YNAB SDK. No external services, analytics, or telemetry endpoints found.

---

## Dependency Audit Results

### npm audit output: 9 vulnerabilities (3 low, 2 moderate, 4 high)

| Package | Severity | Type | Fixable |
|---------|----------|------|---------|
| @modelcontextprotocol/sdk <=1.25.1 | HIGH | DNS rebinding + ReDoS | Yes (`npm audit fix`) |
| axios 1.0.0-1.11.0 | HIGH | DoS (data size check) | Yes (`npm audit fix`) |
| glob 10.2.0-10.4.5 | HIGH | Command injection via CLI | Yes (`npm audit fix`) |
| qs <6.14.1 | HIGH | DoS (memory exhaustion) | Yes (`npm audit fix`) |
| body-parser 2.2.0 | MODERATE | DoS (url encoding) | Yes (`npm audit fix`) |
| vite 7.1.0-7.1.10 | MODERATE | fs bypass (dev only) | Yes (`npm audit fix`) |
| diff <8.0.3 | LOW | DoS in parsePatch | Requires breaking change |

### Dependency Analysis:

**Production Dependencies:**
- `@modelcontextprotocol/sdk` - MCP protocol implementation (expected)
- `ynab` - Official YNAB API SDK (expected)
- `zod` - Schema validation library (legitimate)
- `axios` - HTTP client (used by ynab SDK, expected)
- `commander` - CLI argument parsing (legitimate)
- `@types/axios` - TypeScript types (deprecated but harmless)

**Dev Dependencies:**
- Standard testing/build tools: vitest, typescript, @types/node
- @modelcontextprotocol/inspector - MCP debugging tool

**No suspicious or unnecessary dependencies found.**

---

## Code Security Review

### Dangerous Patterns Searched:

| Pattern | Found | Details |
|---------|-------|---------|
| `eval()` | NO | No dynamic code execution |
| `Function()` | NO | No dynamic function construction |
| `writeFile` | NO | No file system writes |
| `exec/spawn` | NO | No shell command execution |
| `console.log` | NO | No logging of sensitive data |
| `postinstall` scripts | NO | Clean npm scripts |

### Source Code Structure:

All 16 tool files follow an identical safe pattern:
1. Import zod for input validation
2. Import official ynab SDK
3. Validate input using zod schemas
4. Call ynab SDK methods
5. Return formatted JSON responses
6. Handle errors gracefully

**No data exfiltration, backdoors, or suspicious code patterns detected.**

---

## Package Integrity Check

### npm pack --dry-run results:

```
Tarball Contents (21 files, 57.3 kB unpacked):
- LICENSE
- README.md
- package.json
- dist/index.js
- dist/tools/*.js (16 tool files)
```

**All published files are compiled TypeScript from the repository source. No extra files or hidden scripts.**

---

## Recommendations Before Using in Production

### Critical (Do Before Use):
1. **Run `npm audit fix`** to resolve the axios, MCP SDK, and other fixable vulnerabilities

### Recommended:
2. Use a YNAB API token with **minimal necessary permissions**
3. Consider using a **dedicated YNAB budget** for testing before using with primary budget
4. Set `YNAB_BUDGET_ID` environment variable to **restrict access to a single budget**

### Optional:
5. Pin dependency versions in package-lock.json
6. Monitor the repository for security updates
7. Review the changelog before updating to new versions

---

## Files Reviewed

### Source Files (17 total):
- `src/index.ts` - Main entry point
- `src/tools/*.ts` - 16 tool implementation files
- `src/tools/errorUtils.ts` - Error handling utility

### Configuration Files:
- `package.json` - Dependencies and scripts
- `smithery.yaml` - Smithery MCP configuration
- `Dockerfile` - Container configuration
- `.github/workflows/test.yml` - CI configuration

### Debug Files (not published to npm):
- `debugging/getCategory.js`
- `debugging/getBudgetMonth.js`

---

## Conclusion

**The calebl/ynab-mcp-server is SAFE TO USE** for connecting Claude to your YNAB budget data. The code is well-structured, uses only official YNAB endpoints, handles your API token securely, and contains no malicious patterns.

Run `npm audit fix` before production use to address known dependency vulnerabilities.

---

*Report generated by automated security audit*

# The Healthcare M&A IT Due Diligence & Integration Checklist
## 47 Points Across 6 Critical Domains
### Mobtronic LLC — Based on 190+ Healthcare Infrastructure Deployments

---

> **How to use this checklist:**
> Run this assessment *before* close (due diligence) and *immediately after* close (Day 1–14 sprint).
> Items marked ⚠️ are high-risk findings that require immediate remediation planning.
> Items marked 💰 represent the highest financial value recovery opportunities.

---

## DOMAIN 1: EHR & Clinical Systems Inventory

- [ ] Complete inventory of all EHR systems (authorized and shadow)
- [ ] Map all HL7 interfaces: inbound and outbound feeds per system
- [ ] Identify all EHR vendor contract expiration dates
- [ ] ⚠️ Identify any EHR systems running end-of-life or unsupported versions
- [ ] 💰 Calculate total annual EHR licensing cost across all systems
- [ ] Identify clinical staff EHR preference by site/department (training cost factor)
- [ ] Map all EHR data backup systems and last tested recovery date
- [ ] Identify any EHR data in on-premise-only storage (migration complexity flag)

**Red flags:** More than 3 EHR systems for <20 sites; any system last updated >2 years ago; any system with no documented backup.

---

## DOMAIN 2: HIPAA & Regulatory Compliance

- [ ] Audit all active Business Associate Agreements (BAAs) — vendor list and expiration
- [ ] ⚠️ Identify any vendor with PHI access and no active BAA
- [ ] Review last HIPAA risk assessment date (required annually)
- [ ] Identify any open HIPAA breach reports or OCR investigations
- [ ] State-specific privacy law compliance review (varies by state — 42 CFR Part 2 if behavioral health)
- [ ] Review HIPAA training completion rates for all staff
- [ ] ⚠️ Identify any remote access to clinical systems without MFA

**Red flags:** Vendors with PHI access and no BAA; HIPAA risk assessment >18 months old; any open OCR matter.

---

## DOMAIN 3: FHIR / Interoperability Readiness

- [ ] Identify current interoperability standard per EHR (HL7 v2, CCD, FHIR R4)
- [ ] ⚠️ Flag any EHR that does not support FHIR R4 API endpoints
- [ ] Map active payer API connections and format requirements
- [ ] Review patient portal technology and FHIR capability
- [ ] 💰 Assess TEFCA/QHIN readiness — are they a Participant or Sub-Participant?
- [ ] Identify CMS value-based care programs and their interoperability requirements
- [ ] Review prior authorization workflow — manual vs. automated FHIR PA

**Red flags:** No FHIR R4 capability in primary EHR; patient portal not SMART on FHIR compliant; no QHIN participation plan.

---

## DOMAIN 4: Network Infrastructure & Security

- [ ] Network topology documentation — is it current and accurate?
- [ ] ⚠️ Identify all internet-facing services and their patch status
- [ ] Review firewall configuration and rule set last audit date
- [ ] Inventory all remote access methods (VPN, RDP, Citrix, etc.)
- [ ] ⚠️ Test network segmentation — can a breach in admin systems reach clinical systems?
- [ ] Review endpoint protection coverage — what percentage of devices are managed?
- [ ] Identify any medical devices on the network without network isolation
- [ ] ⚠️ Review backup infrastructure — last recovery test date and RTO/RPO documentation
- [ ] Identify cloud services in use — sanctioned and shadow (AWS, Azure, GCP, etc.)
- [ ] Review vendor remote access methods (are they logged and auditable?)

**Red flags:** Internet-facing systems with patches >90 days old; RDP directly accessible from internet; medical devices on flat network; backup never tested for recovery.

---

## DOMAIN 5: Vendor & Contract Landscape

- [ ] 💰 Complete vendor inventory with contract expiration and auto-renewal dates
- [ ] Identify top 10 vendors by spend — are any duplicated with acquirer contracts?
- [ ] Review managed service provider (MSP) agreements — scope, SLAs, termination notice
- [ ] Identify any sole-source dependencies (single vendor for critical function)
- [ ] Review SaaS application inventory — identify inactive/zombie subscriptions
- [ ] 💰 Map duplicated software licenses between target and acquirer
- [ ] Review data portability provisions in top 5 vendor contracts
- [ ] Identify any vendor contracts with change-of-control clauses

**Red flags:** Auto-renewal contracts within 60 days; sole-source for any Tier 1 system; no data portability in EHR contract.

---

## DOMAIN 6: IT Team & Operational Readiness

- [ ] IT organizational chart — who actually runs what
- [ ] Identify single points of failure in IT staffing (one person who knows the system)
- [ ] Review IT helpdesk ticket volume — leading indicator of system health
- [ ] Current open IT projects — what's in flight, what's at risk?
- [ ] ⚠️ Staff departure risk — any key IT staff with tenures <1 year or expressed intent to leave
- [ ] Documentation quality — is there a runbook for critical systems?
- [ ] Change management process — is there a formal change control process?
- [ ] Identify any IT projects that will be disrupted by integration activity

**Red flags:** No documentation for critical systems; IT staff attrition >25% in last 12 months; no formal change control process.

---

## SCORING GUIDE

**Count your ⚠️ red flags:**

| Red Flags Found | Integration Risk Level | Recommended Action |
|----------------|----------------------|---------------------|
| 0–2 | Low | Standard 90-day integration plan |
| 3–5 | Medium | Prioritized 90-day plan; engage technical advisor |
| 6–10 | High | Pre-close renegotiation; escrow/holdback consideration |
| 10+ | Critical | Extended due diligence; material deal term reconsideration |

---

## FINANCIAL VALUE RECOVERY ESTIMATE

Based on our 190+ engagement history, organizations with 20+ sites typically find:

- **EHR licensing rationalization:** $200K–$800K/year saved
- **Vendor contract deduplication:** $50K–$300K/year saved
- **Zombie SaaS elimination:** $20K–$100K/year saved
- **Shadow IT consolidation:** $30K–$150K/year saved (plus security risk reduction)

**Total typical recovery:** $300K–$1.5M annually for a 20+ site acquisition.

---

## NEXT STEPS

If you found 3+ red flags in this assessment, the next step is a structured remediation plan with clear sequencing, ownership, and timelines.

If you want help building that plan—or want a second set of eyes on a specific domain—reach out:

📩 **info@mobtronic.org**
🌐 **mobtronic.org**
📅 **Book a 20-minute call:** [mobtronic.org/#contact](https://mobtronic.org/#contact)

---

*© 2026 Kavoosh Mohajeri | Mobtronic LLC. This checklist is provided for informational purposes. All engagements are governed by a separate statement of work and confidentiality agreement.*

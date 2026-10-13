# Katuwang SG — Privacy and Safety Requirements

## 1. Purpose
Katuwang SG is intended to support migrant domestic workers and employers with practical information, learning resources, and community support.

Privacy and safety must be considered before any feature that collects, stores, or shares user information is introduced.

## 2. Minimum Data Collection
- The initial version should work without user accounts.
- Do not collect personal information unless a feature genuinely needs it.
- Do not request passport numbers, Work Permit numbers, passwords, bank details, medical records, or identity-document uploads for general browsing.
- Do not build public forms for reporting abuse or disputes in the initial version.
- Do not collect children's names, schools, schedules, or other identifying details unless there is a justified and carefully reviewed need.

## 3. Sensitive Situations
Users may seek help with abuse, exploitation, employment disputes, health, immigration, or financial difficulties.

- Do not promise confidentiality unless the actual system and its policies can support that promise.
- Do not encourage users to post identifiable allegations or sensitive documents publicly.
- Direct users to appropriate verified official or specialist support where possible.
- Clearly explain that Katuwang SG is not an emergency-response service.
- Do not present community comments as professional legal, medical, or immigration advice.

## 4. Community Safety
If community features are added later:
- Publish clear community rules.
- Provide a way to report harmful content.
- Plan how reports will be reviewed and how urgent risks will be handled.
- Restrict access to sensitive information.
- Prevent the public display of private contact details without consent.
- Establish moderation and escalation procedures before opening the feature.
- Do not launch private messaging or public accusations without a safety review.

## 5. Technical Security
Before adding accounts, forms, uploads, or a database:
- Use reputable services and secure configuration.
- Never place passwords, API keys, secret tokens, or private credentials in public source code.
- Restrict administrator access and use strong authentication.
- Apply appropriate access controls to stored data.
- Use secure connections and keep dependencies updated.
- Define retention and deletion rules for any collected information.
- Review backups, access logs, and incident-response procedures.
- Test that one user cannot access another user's private information.

## 6. Third-Party Services
If analytics, hosting, forms, email, donations, payments, or affiliate services are added:
- Review what information each provider collects.
- Disclose relevant third-party services in the privacy notice.
- Check provider terms, data handling, and applicable legal requirements.
- Do not assume a free service is automatically private or compliant.

## 7. Transparency and User Choice
Before collecting any personal information, provide a clear privacy notice explaining:
- What information is collected
- Why it is needed
- Whether it is required or optional
- Who may access it
- Which third parties receive it
- How long it is kept
- How users can request access, correction, or deletion where applicable
- How to contact the project about privacy concerns

Do not publish a placeholder privacy notice as if it were a completed legal review.

## 8. Legal and Policy Review
Before launching features that collect personal data, assess applicable Singapore data-protection requirements and any other relevant laws.

Obtain qualified advice when needed. Do not claim legal compliance merely because these requirements have been documented.

## 9. Safe Initial Release
The initial portal should prioritise:
- Public educational pages
- Links to verified official resources
- Clear help and support directories
- Search and navigation that do not require an account
- A simple way to suggest corrections without requesting sensitive details

Defer accounts, private messages, public user posts, sensitive case reports, document uploads, and payment processing until they have been separately designed and reviewed.

## 10. Current Project Status
These are planned requirements, not proof that technical safeguards have been implemented.

Current status: planning and repository documentation only. The website has not yet been built, tested, or deployed.

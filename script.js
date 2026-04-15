// ─────────────────────────────────────────
//  NYAYAMIND — script.js v4
//  NEW: 6 crime categories × 5 cases each,
//       dual dashboards, bookmark notes,
//       voice, language switching
// ─────────────────────────────────────────


// ── 1. CRIME CATEGORIES & 30 CASES ───────

const crimeCategories = [
  {
    id: 'economic',
    title: 'Economic Offences',
    icon: '💰',
    desc: 'Financial fraud, bank scams, money laundering, chit fund cases',
    color: '#1a237e',
    lightColor: '#e6f1fb',
    cases: [
      { id: 'EC-001', title: 'State of Maharashtra vs Ramesh Gupta', court: 'Bombay High Court · 2023', outcome: 'Bail Denied', outcomeBg: '#fcebeb', outcomeTxt: '#a32d2d', summary: 'Misappropriation of ₹2.3 crore from Saraswat Cooperative Bank. Accused transferred funds to shell companies. Court denied bail citing flight risk and international ties.', plain: 'A bank manager stole ₹2.3 crore from customers. The court refused bail because he might flee the country.', sections: '420, 406, 120B IPC', amount: '₹2.3 crore', flightRisk: 'High', confidence: 97, paragraphs: ['The accused Ramesh Gupta was arrested under Sections 420, 406 and 120B IPC for alleged misappropriation of funds from Saraswat Cooperative Bank.', 'The prosecution submitted that the accused had transferred funds to shell companies across multiple jurisdictions. Forensic audit reports have been placed on record.', 'The court observed that economic offences of this magnitude have a deleterious effect on the financial fabric of society. The accused has strong international ties, creating a substantial risk of absconding.', 'Bail denied. Accused to remain in judicial custody until further orders of this court.'], sourceParagraph: 2 },
      { id: 'EC-002', title: 'CBI vs Harish Mehta & Ors.', court: 'Supreme Court of India · 2022', outcome: 'Bail Granted', outcomeBg: '#eaf3de', outcomeTxt: '#3b6d11', summary: 'Siphoning of public funds through fictitious loan accounts. Bail granted with strict conditions — passport surrender, weekly reporting, and ₹50 lakh surety.', plain: 'A businessman diverted government money through fake bank loans. Bail was allowed, but he must report to police every week and cannot leave India.', sections: '120B, 420 IPC, PC Act', amount: '₹1+ crore', flightRisk: 'Medium', confidence: 91, paragraphs: ['The Supreme Court has consistently held that economic offences constitute a class apart and must be visited with a different approach.', 'The present case involves alleged siphoning of public funds through fictitious loan accounts maintained at three nationalised banks.', 'While personal liberty is paramount, the court must balance it against societal interest. Bail granted subject to strict conditions: surrender of passport, weekly reporting to local police station, and a surety of ₹50 lakhs.', 'The accused shall not leave the country without prior permission of this court.'], sourceParagraph: 2 },
      { id: 'EC-003', title: 'Punjab National Bank vs Vijay Kumar', court: 'Delhi High Court · 2024', outcome: 'Bail Denied', outcomeBg: '#fcebeb', outcomeTxt: '#a32d2d', summary: 'Loans totalling ₹8.7 crore obtained through forged property documents. Court denied bail as custodial interrogation was necessary to unravel the larger conspiracy.', plain: 'A man took out ₹8.7 crore in bank loans using fake property papers. The court refused bail because police needed to question him about who else was involved.', sections: '420, 467, 468 IPC', amount: '₹8.7 crore', flightRisk: 'High', confidence: 88, paragraphs: ['The applicant is alleged to have obtained loans totalling ₹8.7 crore from Punjab National Bank using forged property documents.', 'The investigating agency has placed on record call detail records and financial trails establishing prima facie involvement.', 'This court, applying the principles laid down in P. Chidambaram vs Directorate of Enforcement, finds that custodial interrogation is necessary to unravel the larger conspiracy.', 'Bail application rejected.'], sourceParagraph: 2 },
      { id: 'EC-004', title: 'Directorate of Enforcement vs Sharad Parekh', court: 'Gujarat High Court · 2023', outcome: 'Bail Denied', outcomeBg: '#fcebeb', outcomeTxt: '#a32d2d', summary: 'Alleged laundering of ₹42 crore through real estate transactions. Twin conditions under Section 45 PMLA not satisfied. Bail refused.', plain: 'A property dealer hid ₹42 crore of illegal money through real estate deals. Under the anti-money laundering law, bail is very difficult to get — and the court agreed.', sections: 'Section 45 PMLA, 439 CrPC', amount: '₹42 crore', flightRisk: 'High', confidence: 84, paragraphs: ['This application is filed under Section 439 CrPC read with Section 45 PMLA.', 'The accused is alleged to have laundered proceeds of crime amounting to ₹42 crore through real estate transactions structured to conceal the origin of funds.', 'This court holds that the twin conditions under Section 45 PMLA are not satisfied. The accused has failed to demonstrate prima facie that he is not guilty of the alleged offence.', 'Bail refused.'], sourceParagraph: 2 },
      { id: 'EC-005', title: 'SC-IP420-219 — Chit Fund Scam', court: 'Supreme Court of India · 2025', outcome: 'Bail Granted', outcomeBg: '#eaf3de', outcomeTxt: '#3b6d11', summary: 'Regular bail granted after 22 months custody in multi-crore chit fund scam. Supreme Court held prolonged custody must be balanced against right to liberty.', plain: 'A chit fund organiser was in jail for almost 2 years. The Supreme Court said keeping someone in jail this long before trial is unfair, and granted bail.', sections: '420, 409 IPC', amount: '₹15 crore', flightRisk: 'Medium', confidence: 78, paragraphs: ['The petitioner has been in custody for 22 months in connection with a multi-crore chit fund scam involving thousands of investors.', 'The Supreme Court has repeatedly emphasized that the right to bail is an integral part of the right to liberty under Article 21 of the Constitution.', 'Prolonged custody without trial is not justifiable unless there are compelling reasons. The prosecution has had adequate time to build its case.', 'Regular bail granted subject to conditions. Accused to cooperate with trial proceedings.'], sourceParagraph: 2 },
    ]
  },
  {
    id: 'cyber',
    title: 'Cyber Crime',
    icon: '💻',
    desc: 'Data breach, online fraud, hacking, identity theft, social media crimes',
    color: '#4a148c',
    lightColor: '#f3e5f5',
    cases: [
      { id: 'CY-001', title: 'HC-AB-1738 — Cyber Security Breach', court: 'Bombay High Court · 2024', outcome: 'Bail Granted', outcomeBg: '#eaf3de', outcomeTxt: '#3b6d11', summary: 'Anticipatory bail granted in alleged cyber-security breach case. Court allowed bail subject to forensic device surrender and no tampering with digital evidence.', plain: 'A person was accused of hacking into a company\'s computer systems. The court allowed bail but said he must hand over all his phones and computers to police.', sections: 'Section 66 IT Act, 420 IPC', amount: 'N/A', flightRisk: 'Low', confidence: 86, paragraphs: ['The applicant is alleged to have conducted an unauthorised intrusion into the computer systems of a private company in the BFSI sector.', 'Anticipatory bail is a statutory right. The court must weigh the gravity of the offence against personal liberty.', 'Given the nature of the offence, bail is granted subject to: surrender of all digital devices including phones and laptops, and prohibition from accessing the complainant\'s systems.', 'Bail granted. Accused to cooperate fully with the forensic investigation.'], sourceParagraph: 2 },
      { id: 'CY-002', title: 'State vs Aakash Patel — Online Banking Fraud', court: 'Delhi Sessions Court · 2024', outcome: 'Bail Denied', outcomeBg: '#fcebeb', outcomeTxt: '#a32d2d', summary: 'Accused created fake UPI apps that siphoned ₹1.8 crore from 200+ victims. Court denied bail noting organised nature of the crime and risk of repeating the offence.', plain: 'A man created fake payment apps to steal money from 200 people. The court refused bail because he might do it again if released.', sections: '66C, 66D IT Act, 420 IPC', amount: '₹1.8 crore', flightRisk: 'Medium', confidence: 82, paragraphs: ['The accused is alleged to have created fraudulent UPI applications that mimicked genuine banking apps to defraud victims across multiple states.', 'Over 200 victims have been identified so far, with total losses exceeding ₹1.8 crore. The scale and organised nature of the operation indicates a premeditated conspiracy.', 'Releasing the accused would pose a significant risk of repetition of the offence, given the ease with which such operations can be re-established digitally.', 'Bail refused. Matter listed for further investigation.'], sourceParagraph: 2 },
      { id: 'CY-003', title: 'Sunita Desai vs State — Social Media Defamation', court: 'Madras High Court · 2023', outcome: 'FIR Quashed', outcomeBg: '#eaf3de', outcomeTxt: '#3b6d11', summary: 'FIR under Section 67 IT Act for sharing social media post quashed. Court held the content was legitimate public commentary and did not constitute obscenity.', plain: 'A woman was arrested for sharing a post online that someone found offensive. The court cancelled the case, saying sharing opinions on social media is not a crime.', sections: '67 IT Act, 499 IPC', amount: 'N/A', flightRisk: 'Low', confidence: 90, paragraphs: ['The petitioner was booked for sharing a social media post that allegedly defamed a public figure.', 'The court held that criticism of public figures, even if strong, is protected under Article 19(1)(a) of the Constitution.', 'The content shared by the petitioner does not meet the threshold of obscenity or incitement to hatred as required under Section 67 of the IT Act.', 'FIR quashed. Petitioner entitled to costs.'], sourceParagraph: 2 },
      { id: 'CY-004', title: 'CBI vs Rajesh Malhotra — Data Theft', court: 'Supreme Court · 2025', outcome: 'Bail Denied', outcomeBg: '#fcebeb', outcomeTxt: '#a32d2d', summary: 'Accused allegedly sold personal data of 5 crore citizens to foreign entities. Court denied bail citing national security concerns and risk of continued data exfiltration.', plain: 'A man sold private data of 5 crore Indians to foreign companies without permission. This is a national security issue, so the court refused bail.', sections: '66B IT Act, Official Secrets Act', amount: 'N/A', flightRisk: 'High', confidence: 94, paragraphs: ['The accused is alleged to have exfiltrated personal data of approximately 5 crore Indian citizens and sold it to entities based in two foreign countries.', 'The nature of the offence — mass data theft affecting national security — places it in a category where ordinary bail considerations are insufficient.', 'The court finds compelling reasons to deny bail in view of the ongoing investigation and risk of continued harm if the accused is at large.', 'Bail denied. Case to be heard on merits expeditiously.'], sourceParagraph: 2 },
      { id: 'CY-005', title: 'State vs Priya Nair — Phishing Scam', court: 'Kerala High Court · 2024', outcome: 'Bail Granted', outcomeBg: '#eaf3de', outcomeTxt: '#3b6d11', summary: 'First-time offender accused of phishing emails targeting elderly victims. Bail granted with conditions — no internet access, surrender of devices, and community service.', plain: 'A young person sent fake emails to cheat elderly people. Since it was their first crime and the losses were small, the court gave bail with strict conditions including no internet.', sections: '66C, 66D IT Act', amount: '₹3.5 lakh', flightRisk: 'Low', confidence: 77, paragraphs: ['The accused, a first-time offender aged 23, is charged with orchestrating a phishing campaign targeting pensioners and elderly individuals.', 'The total identified loss is ₹3.5 lakhs across 14 victims. While the crime is serious, the accused has no prior criminal record.', 'Bail is granted subject to: surrender of all internet-connected devices, prohibition from accessing the internet, and completion of 100 hours of community service at an approved NGO.', 'Matter to proceed to trial. Bail conditions to be reviewed after charge framing.'], sourceParagraph: 2 },
    ]
  },
  {
    id: 'domestic',
    title: 'Domestic Violence & Family Law',
    icon: '🏠',
    desc: 'Domestic violence, dowry, Section 498A, protection orders, custody',
    color: '#880e4f',
    lightColor: '#fce4ec',
    cases: [
      { id: 'DV-001', title: 'Anand Agarwal vs State of Rajasthan', court: 'Rajasthan High Court · 2023', outcome: 'Bail Granted', outcomeBg: '#eaf3de', outcomeTxt: '#3b6d11', summary: 'Cheque dishonour case. 47 days custody found disproportionate. Court granted bail on ₹20 lakh surety. No flight risk established.', plain: 'A man was kept in jail for 47 days for a cheque bouncing case. The court said this is too long for such a case and released him on bail.', sections: 'Section 138 NI Act', amount: '₹15 lakhs', flightRisk: 'Low', confidence: 79, paragraphs: ['The petitioner has been in custody for 47 days in connection with a cheque dishonour case under Section 138 of the Negotiable Instruments Act.', 'The court notes that the petitioner has clear roots in society, owns immovable property, and has cooperated with the investigation.', 'The prosecution has failed to establish any cogent material demonstrating flight risk or likelihood of tampering with evidence.', 'Bail granted on furnishing surety of ₹20 lakhs and surrender of passport.'], sourceParagraph: 2 },
      { id: 'DV-002', title: 'Meena Sharma vs Suresh Sharma — DV Act', court: 'Delhi High Court · 2024', outcome: 'Protection Order', outcomeBg: '#eaf3de', outcomeTxt: '#3b6d11', summary: 'Domestic violence complaint by wife. Court granted protection order and directed husband to vacate shared home. Maintenance of ₹25,000/month awarded.', plain: 'A woman was being abused at home by her husband. The court ordered him to leave the house and pay ₹25,000 per month to support her and the children.', sections: 'Section 12, 18, 20 DV Act 2005', amount: 'Maintenance ₹25k/month', flightRisk: 'N/A', confidence: 93, paragraphs: ['The petitioner has filed an application under the Protection of Women from Domestic Violence Act, 2005, alleging physical and economic abuse.', 'The court is satisfied that the petitioner faces a credible and continuing threat to her safety and economic security.', 'A Protection Order under Section 18 DV Act is hereby granted. The respondent is directed to vacate the shared household within 7 days.', 'Maintenance of ₹25,000 per month is awarded under Section 20 of the DV Act, payable on the 5th of each month.'], sourceParagraph: 2 },
      { id: 'DV-003', title: 'State vs Ramachandran — Section 498A', court: 'Madras High Court · 2023', outcome: 'Bail Granted', outcomeBg: '#eaf3de', outcomeTxt: '#3b6d11', summary: 'Section 498A dowry harassment case. Accused in custody for 6 months. Court held the offence, while serious, did not warrant indefinite pre-trial detention.', plain: 'A husband was accused of harassing his wife for dowry. After 6 months in jail without trial, the court said he should get bail because the case was taking too long.', sections: '498A, 406 IPC', amount: 'N/A', flightRisk: 'Low', confidence: 75, paragraphs: ['The petitioner has been in judicial custody for six months under Section 498A IPC (cruelty by husband or relatives) and Section 406 IPC (criminal breach of trust).', 'Section 498A is a cognizable and non-bailable offence. However, the court must balance this with the right to personal liberty under Article 21.', 'The investigating agency has completed its investigation and filed a charge sheet. Continued detention pending trial is not warranted in the circumstances.', 'Bail granted. Accused to appear before the trial court on all scheduled dates.'], sourceParagraph: 2 },
      { id: 'DV-004', title: 'Kavita Rao vs State — Dowry Death', court: 'Supreme Court · 2024', outcome: 'Conviction Upheld', outcomeBg: '#fcebeb', outcomeTxt: '#a32d2d', summary: 'Dowry death conviction of husband and in-laws upheld. Court confirmed Section 304B IPC applies when unnatural death occurs within 7 years of marriage and dowry demands were made.', plain: 'A woman died within 7 years of marriage, and her family had demanded dowry. The court confirmed that her husband and in-laws are guilty of dowry death — a serious crime.', sections: '304B, 498A IPC', amount: 'N/A', flightRisk: 'N/A', confidence: 96, paragraphs: ['The deceased died under unnatural circumstances within three years of marriage. Prior to her death, her family had made repeated demands for additional dowry.', 'Section 304B IPC creates a presumption of dowry death when an unnatural death occurs within 7 years of marriage and dowry demands were being made.', 'The prosecution has successfully established all ingredients of Section 304B IPC. The conviction by the trial court and confirmed by the High Court is upheld.', 'The sentence of 7 years rigorous imprisonment for each accused is confirmed.'], sourceParagraph: 2 },
      { id: 'DV-005', title: 'Priya vs Raju — Child Custody', court: 'Kerala High Court · 2023', outcome: 'Custody to Mother', outcomeBg: '#eaf3de', outcomeTxt: '#3b6d11', summary: 'Child custody dispute. Court awarded custody to mother citing child\'s welfare as paramount consideration. Father granted structured visitation rights every weekend.', plain: 'Parents fought over who gets custody of their child after separation. The court gave custody to the mother because children usually do better with their mother, especially at a young age. The father gets to visit every weekend.', sections: 'Guardian and Wards Act, 1890', amount: 'N/A', flightRisk: 'N/A', confidence: 88, paragraphs: ['The dispute involves custody of a minor child aged 5 years, following the breakdown of the marriage of the parties.', 'The welfare of the child is the paramount consideration in all custody matters, superseding the rights of both parents.', 'Considering the tender age of the child and the established primary caregiving role of the mother, custody is awarded to the mother.', 'The father is granted structured visitation rights every Saturday and Sunday from 10 AM to 6 PM, and for two weeks during summer holidays.'], sourceParagraph: 2 },
    ]
  },
  {
    id: 'property',
    title: 'Property & Land Disputes',
    icon: '🏗️',
    desc: 'Land acquisition, eviction, property fraud, tenant disputes, inheritance',
    color: '#1b5e20',
    lightColor: '#e8f5e9',
    cases: [
      { id: 'PR-001', title: 'Farmers Union vs State of UP — Land Acquisition', court: 'Allahabad HC · 2024', outcome: 'Acquisition Stayed', outcomeBg: '#eaf3de', outcomeTxt: '#3b6d11', summary: 'Land acquisition for highway project challenged. Court stayed acquisition as no hearing was given to farmers before issuing the notice. Violated Section 11A of the RFCTLARR Act.', plain: 'The government tried to take farmers\' land for a road without asking them first. The court stopped the process and said the government must listen to the farmers before taking their land.', sections: 'RFCTLARR Act 2013, Section 11A', amount: 'N/A', flightRisk: 'N/A', confidence: 91, paragraphs: ['The petitioners are farmers whose land was sought to be acquired for a national highway project without issuance of notice under Section 11A of the Right to Fair Compensation and Transparency in Land Acquisition Act, 2013.', 'The statutory requirement of individual notice to each affected party is mandatory and cannot be dispensed with in the interest of expediency.', 'The acquisition proceedings are hereby stayed. The state government is directed to issue fresh notices and conduct public hearings within 60 days.', 'Farmers are entitled to legal representation at all stages of the acquisition process.'], sourceParagraph: 2 },
      { id: 'PR-002', title: 'Nilesh Shah vs MHADA — Unlawful Eviction', court: 'Bombay HC · 2023', outcome: 'Eviction Stayed', outcomeBg: '#eaf3de', outcomeTxt: '#3b6d11', summary: 'Slum-dwelling family facing eviction without alternate accommodation. Court held eviction without rehabilitation violates right to shelter under Article 21.', plain: 'A poor family was being thrown out of their home with nowhere to go. The court stopped the eviction and said the government must first provide them with another place to live.', sections: 'Article 21, Maharashtra Slum Areas Act', amount: 'N/A', flightRisk: 'N/A', confidence: 94, paragraphs: ['The petitioner\'s family has been residing in a slum structure for over 15 years. The respondent issued an eviction notice without identifying any alternate accommodation.', 'The right to shelter is a fundamental right flowing from Article 21 of the Constitution. Eviction that renders a family homeless without rehabilitation violates this right.', 'Eviction proceedings are stayed. The respondent is directed to provide suitable transit accommodation before proceeding with any eviction.', 'The State must file an affidavit within four weeks detailing its rehabilitation policy for affected slum dwellers.'], sourceParagraph: 2 },
      { id: 'PR-003', title: 'Ramesh Kumar vs Sunil Mehta — Property Fraud', court: 'Delhi HC · 2024', outcome: 'FIR Upheld', outcomeBg: '#fcebeb', outcomeTxt: '#a32d2d', summary: 'Property sold twice through forged documents. Court refused to quash FIR and held double registration of property is a criminal offence under IPC.', plain: 'A man illegally sold the same house to two different buyers using fake documents. The court refused to let him off and confirmed this is a serious crime.', sections: '420, 467, 471 IPC', amount: '₹1.2 crore', flightRisk: 'Medium', confidence: 87, paragraphs: ['The petitioner seeks quashing of FIR registered under Sections 420, 467 and 471 IPC for alleged double sale of a residential property using forged documents.', 'The facts on record prima facie establish that the same property was sold to two different parties through documents where the petitioner\'s signatures were forged.', 'The allegations, if proved, constitute serious offences involving fraud and forgery. This is not a case where the inherent power under Section 482 CrPC should be exercised.', 'Petition dismissed. FIR to proceed to investigation and trial.'], sourceParagraph: 2 },
      { id: 'PR-004', title: 'Sita Devi vs State — Inheritance Dispute', court: 'Patna HC · 2023', outcome: 'Rights Upheld', outcomeBg: '#eaf3de', outcomeTxt: '#3b6d11', summary: 'Daughter denied inheritance of ancestral property by brothers. Court held Hindu Succession (Amendment) Act 2005 gives daughters equal rights as coparceners from birth.', plain: 'A woman\'s brothers refused to give her a share of the family property. The court confirmed that daughters have the same rights as sons to inherit family property — this became law in 2005.', sections: 'Hindu Succession Act, Section 6', amount: '₹85 lakh', flightRisk: 'N/A', confidence: 96, paragraphs: ['The petitioner, a daughter, seeks her rightful share in ancestral joint family property. The respondent brothers contend that daughters have no coparcenary rights.', 'The Hindu Succession (Amendment) Act, 2005 amended Section 6 to give daughters equal rights as sons in ancestral property by birth, regardless of when the father died.', 'The petitioner is entitled to an equal one-third share in the ancestral property along with her two brothers.', 'The court directs partition proceedings to be completed within six months through a court-appointed commissioner.'], sourceParagraph: 2 },
      { id: 'PR-005', title: 'Tenant vs Landlord — Rent Control', court: 'Karnataka HC · 2024', outcome: 'Tenant Protected', outcomeBg: '#eaf3de', outcomeTxt: '#3b6d11', summary: 'Landlord attempted to evict long-term tenant without valid grounds. Court held eviction is only permitted under specific grounds in the Karnataka Rent Act.', plain: 'A landlord tried to throw out a tenant who had lived there for 20 years. The court said landlords cannot evict tenants freely — there must be a valid legal reason.', sections: 'Karnataka Rent Act, Section 21', amount: 'N/A', flightRisk: 'N/A', confidence: 83, paragraphs: ['The petitioner has been a tenant in the subject property for over 20 years, paying rent regularly. The landlord seeks eviction under grounds of personal requirement.', 'The Karnataka Rent Act provides specific and limited grounds for eviction. The burden of proof lies on the landlord to establish genuine personal necessity.', 'The landlord has failed to demonstrate compelling personal necessity. The claimed requirement appears to be a pretext for commercial exploitation.', 'Eviction petition dismissed. Tenant\'s possession is protected. Rent to be enhanced by 10% per annum as per the agreement.'], sourceParagraph: 2 },
    ]
  },
  {
    id: 'narcotics',
    title: 'Narcotics & Drug Offences',
    icon: '💊',
    desc: 'NDPS Act, drug trafficking, possession, bail under Section 37, recovery',
    color: '#b71c1c',
    lightColor: '#ffebee',
    cases: [
      { id: 'NA-001', title: 'State vs Rajiv Bhatia — NDPS Commercial Quantity', court: 'Punjab & Haryana HC · 2024', outcome: 'Bail Denied', outcomeBg: '#fcebeb', outcomeTxt: '#a32d2d', summary: 'Commercial quantity of heroin recovered. Section 37 NDPS creates presumption against bail. Court found no reasonable grounds to believe innocence.', plain: 'A large amount of heroin was found with a person. Under the drug law, it is very hard to get bail when such large amounts are found, and the court agreed to keep him in jail.', sections: 'Section 21, 37 NDPS Act', amount: '2.5 kg heroin', flightRisk: 'High', confidence: 95, paragraphs: ['The respondent was apprehended with 2.5 kilograms of heroin, which constitutes a commercial quantity under the NDPS Act.', 'Section 37 of the NDPS Act imposes a dual condition for bail: the court must be satisfied that there are reasonable grounds for believing the accused is not guilty, and that he is unlikely to commit any offence while on bail.', 'The recovery of commercial quantity heroin raises a strong presumption against bail. The accused has failed to rebut this presumption with cogent material.', 'Bail application dismissed. Accused to remain in custody pending trial.'], sourceParagraph: 2 },
      { id: 'NA-002', title: 'Imran Khan vs State — Small Quantity NDPS', court: 'Delhi HC · 2023', outcome: 'Bail Granted', outcomeBg: '#eaf3de', outcomeTxt: '#3b6d11', summary: 'Small quantity marijuana recovered from personal possession. Court distinguished from commercial quantity. Bail granted noting accused was a first-time offender and student.', plain: 'A student was found with a small amount of marijuana for personal use. The court said this is very different from drug trafficking, and granted bail since he had no past crimes.', sections: 'Section 20(a) NDPS Act', amount: 'Small qty ganja', flightRisk: 'Low', confidence: 82, paragraphs: ['The petitioner, a 21-year-old first-year engineering student, was found in possession of 5 grams of cannabis — a small quantity under the NDPS Act.', 'A clear distinction must be drawn between possession of small quantities for personal use and commercial drug trafficking. The legislative intent of the NDPS Act targets the latter more severely.', 'The petitioner has no prior criminal record. The offence, while punishable, does not carry the mandatory minimum sentence that triggers the Section 37 twin conditions.', 'Bail granted subject to: not leaving Delhi without permission, regular appearance before IO, and enrollment in a de-addiction programme.'], sourceParagraph: 2 },
      { id: 'NA-003', title: 'NCB vs Waqar Ahmed — International Trafficking', court: 'Supreme Court · 2025', outcome: 'Bail Denied', outcomeBg: '#fcebeb', outcomeTxt: '#a32d2d', summary: 'Accused part of international drug trafficking network. 15 kg cocaine seized. Court held organised international drug networks require stringent approach to bail.', plain: 'A member of an international drug smuggling network was caught with 15 kg of cocaine. The Supreme Court refused bail because international drug trafficking is extremely serious.', sections: 'Section 21, 29 NDPS Act, PMLA', amount: '15 kg cocaine', flightRisk: 'High', confidence: 97, paragraphs: ['The accused was arrested as part of an international drug trafficking operation that sourced cocaine from South America and distributed it across India.', '15 kilograms of cocaine with a street value of ₹15 crore was seized from the accused and his associates.', 'International drug trafficking networks pose a grave threat to national security and public health. The accused has foreign connections that create an extreme flight risk.', 'Bail rejected. Investigation to proceed under NCB supervision with cooperation of Interpol.'], sourceParagraph: 2 },
      { id: 'NA-004', title: 'State vs Prabhakaran — Prescription Drug Abuse', court: 'Madras HC · 2024', outcome: 'Bail Granted', outcomeBg: '#eaf3de', outcomeTxt: '#3b6d11', summary: 'Accused found with large quantity of prescription opioids without valid prescription. Court distinguished from NDPS offences. Bail granted pending inquiry.', plain: 'A person had large amounts of strong painkillers without a doctor\'s prescription. This is illegal but different from hard drugs — the court granted bail while the case continues.', sections: 'Drugs & Cosmetics Act, Section 18', amount: '500 codeine tablets', flightRisk: 'Low', confidence: 76, paragraphs: ['The accused was found in possession of 500 codeine phosphate tablets — a scheduled substance under the Drugs and Cosmetics Act — without a valid prescription.', 'Codeine phosphate is a prescription medication under Schedule H1 of the Drugs & Cosmetics Act. Its possession without prescription is an offence under that Act, not the NDPS Act.', 'The offence, while punishable, does not attract the stringent bail conditions of Section 37 NDPS. Standard bail considerations apply.', 'Bail granted. Accused to surrender passport and report to local police station weekly.'], sourceParagraph: 2 },
      { id: 'NA-005', title: 'State vs Shankar — Drug Peddling School Zone', court: 'Karnataka HC · 2023', outcome: 'Bail Denied', outcomeBg: '#fcebeb', outcomeTxt: '#a32d2d', summary: 'Drug peddling near a school campus. Court held proximity to educational institutions is an aggravating factor warranting denial of bail under NDPS.', plain: 'A person was selling drugs near a school and targeting students. The court refused bail, saying selling drugs near schools is especially dangerous and deserves strict treatment.', sections: 'Section 21, 25 NDPS Act', amount: '₹4.5 lakh drugs', flightRisk: 'Medium', confidence: 88, paragraphs: ['The accused was apprehended peddling narcotics in the vicinity of a government school, with evidence suggesting students were among his clientele.', 'The proximity of the alleged drug peddling to an educational institution is a serious aggravating factor. The vulnerability of the target population — school-going children — cannot be disregarded.', 'Bail is refused. The accused poses a direct threat to the welfare of children and students in the area.', 'The SHO is directed to file a status report within 30 days regarding the extent of the drug network operating in the school vicinity.'], sourceParagraph: 2 },
    ]
  },
  {
    id: 'environment',
    title: 'Environmental Violations',
    icon: '🌿',
    desc: 'Pollution, illegal mining, forest encroachment, wildlife protection, NGT orders',
    color: '#33691e',
    lightColor: '#f1f8e9',
    cases: [
      { id: 'EN-001', title: 'SC-AB-1479 — Environmental Restoration', court: 'Supreme Court · 2025', outcome: 'Bail with Bond', outcomeBg: '#eaf3de', outcomeTxt: '#3b6d11', summary: 'Anticipatory bail granted in environmental violation case with conditions including a ₹5 crore environmental restoration bond payable to the State Pollution Control Board.', plain: 'A company was destroying the environment. The court allowed bail but made them pay ₹5 crore to fix the damage they caused to nature — a unique and strong condition.', sections: 'Environment Protection Act, NGT Act', amount: '₹5 cr restoration bond', flightRisk: 'Low', confidence: 86, paragraphs: ['The accused company is alleged to have caused large-scale damage to a protected wetland ecosystem through illegal dumping of industrial effluents.', 'Environmental offences, while serious, do not automatically preclude bail. The court must weigh the harm caused against the right to liberty.', 'Bail is granted subject to deposit of ₹5 crore as an environmental restoration bond with the State Pollution Control Board, to be used exclusively for restoration of the affected wetland.', 'The accused shall not engage in any further industrial activity at the disputed site pending trial.'], sourceParagraph: 2 },
      { id: 'EN-002', title: 'Goa Foundation vs State — Illegal Mining', court: 'Supreme Court · 2023', outcome: 'Mining Stopped', outcomeBg: '#fcebeb', outcomeTxt: '#a32d2d', summary: 'Illegal iron ore mining in violation of forest clearance conditions. Court ordered immediate cessation and directed formation of special monitoring committee.', plain: 'Companies were mining iron ore illegally in a protected forest. The Supreme Court ordered all mining to stop immediately and set up a special team to make sure the rules are followed.', sections: 'Forest Conservation Act, MMDR Act', amount: 'N/A', flightRisk: 'N/A', confidence: 92, paragraphs: ['Multiple mining companies have been found operating in violation of environmental clearance conditions, mining beyond permitted depth and encroaching into forest land.', 'Mining activity in ecologically sensitive areas without proper clearances is a serious violation of both the Forest Conservation Act and the Environment Protection Act.', 'All mining operations at the identified sites are hereby suspended with immediate effect.', 'A special monitoring committee comprising the Chief Forest Officer, District Collector, and NGT technical expert is constituted to assess damage and oversee restoration.'], sourceParagraph: 2 },
      { id: 'EN-003', title: 'CPCB vs Anand Industries — Air Pollution', court: 'NGT Principal Bench · 2024', outcome: 'Penalty Imposed', outcomeBg: '#fcebeb', outcomeTxt: '#a32d2d', summary: 'Industrial unit operating without pollution control equipment. NGT imposed ₹2 crore penalty and directed closure of plant until compliance demonstrated.', plain: 'A factory was polluting the air without any controls. The green court ordered the factory to shut down and pay ₹2 crore fine until it installs proper pollution filters.', sections: 'Air (Prevention & Control of Pollution) Act, NGT Act', amount: '₹2 crore penalty', flightRisk: 'N/A', confidence: 89, paragraphs: ['The respondent industrial unit has been operating without mandatory pollution control equipment for three years, causing persistent air quality violations in the surrounding residential areas.', 'The "polluter pays" principle is firmly established in Indian environmental jurisprudence. Those who cause environmental damage bear the cost of remediation.', 'A compensatory environmental restoration fine of ₹2 crore is imposed, payable to the CPCB Environment Relief Fund within 30 days.', 'The unit is directed to close forthwith and shall only reopen upon submission of a compliance certificate from a NABL-accredited laboratory confirming installation of pollution control equipment.'], sourceParagraph: 2 },
      { id: 'EN-004', title: 'Wildlife Trust vs State — Elephant Corridor', court: 'Kerala HC · 2023', outcome: 'Corridor Protected', outcomeBg: '#eaf3de', outcomeTxt: '#3b6d11', summary: 'Construction in elephant corridor challenged. Court directed removal of structures and declared corridor a no-construction zone under Wildlife Protection Act.', plain: 'People were building houses in the path that elephants use to travel. The court ordered all buildings to be removed and declared that area permanently off-limits for construction.', sections: 'Wildlife Protection Act, Forest Rights Act', amount: 'N/A', flightRisk: 'N/A', confidence: 93, paragraphs: ['The petitioner challenges construction activity in a notified elephant corridor that forms a critical passage for the Nilgiri biosphere elephant population.', 'Elephant corridors are ecologically irreplaceable. Any disruption to these movement paths threatens not only elephants but the entire ecosystem they maintain.', 'All construction within the notified elephant corridor boundary is prohibited forthwith. Existing structures within the corridor are directed to be removed within 6 months.', 'The corridor is declared a restricted zone under the Wildlife Protection Act. The Forest Department shall erect boundary markers and signage within 30 days.'], sourceParagraph: 2 },
      { id: 'EN-005', title: 'State vs Chemical Corporation — River Pollution', court: 'Allahabad HC · 2024', outcome: 'Bail Denied, Plant Sealed', outcomeBg: '#fcebeb', outcomeTxt: '#a32d2d', summary: 'Industrial effluents discharged directly into Yamuna river causing fish deaths and making water unfit for humans for 40 km. Bail denied, plant sealed, directors arrested.', plain: 'A factory dumped poisonous chemicals into the Yamuna river, killing fish and making the water dangerous for people for 40 kilometres. The factory was sealed and the bosses were arrested.', sections: 'Water Pollution Act, IPC 278, 430', amount: 'N/A', flightRisk: 'High', confidence: 91, paragraphs: ['The accused company discharged untreated industrial effluents directly into the Yamuna river, resulting in mass fish mortality over a 40-kilometre stretch and rendering water unfit for human consumption.', 'Environmental crimes of this scale that affect the fundamental right to clean water of millions of citizens cannot be treated as mere regulatory violations.', 'The factory is sealed with immediate effect. The managing director and technical director are denied bail, as their continued liberty poses a risk of evidence destruction.', 'A special investigation team is constituted to assess the full extent of environmental damage and identify all responsible persons in the company\'s supply chain.'], sourceParagraph: 2 },
    ]
  },
];

// Flat list of all 30 cases for search
const allCases = crimeCategories.flatMap(cat =>
  cat.cases.map(c => ({ ...c, categoryId: cat.id, categoryTitle: cat.title, tags: [c.outcome, cat.title] }))
);

// Seven Jurors quick-reference cases
const sjCases = [
  { id: 'SC-IP420-219', court: 'Supreme Court · 2025', summary: 'Regular bail after 22 months custody in multi-crore chit fund scam.', order: 'Regular bail granted. Prolonged custody favoured liberty under Article 21.' },
  { id: 'SC-AB-218',    court: 'Supreme Court · 2026', summary: 'Pre-arrest bail in PMLA case involving bank fraud.', order: 'Dismissed. ED provided sufficient material showing direct involvement. Twin conditions not met.' },
  { id: 'SC-AB-289',    court: 'Supreme Court · 2024', summary: 'Anticipatory bail in large-scale bank fraud.', order: 'Rejected. Custodial interrogation necessary to unravel fund trail.' },
  { id: 'SC-AB-1479',   court: 'Supreme Court · 2025', summary: 'Anticipatory bail in recurring environmental violation.', order: 'Granted with ₹5 crore environmental restoration bond.' },
  { id: 'SC-AB-1480',   court: 'Supreme Court · 2025', summary: 'Bail in technical corporate filing default.', order: 'Interim protection granted; no custodial necessity found.' },
  { id: 'HC-AB-1738',   court: 'Bombay HC · 2024', summary: 'Pre-arrest bail for alleged cyber-security breach.', order: 'Granted subject to forensic device surrender.' },
];


// ── 2. SESSION STATE ──────────────────────

let currentUser = { name:'', email:'', lang:'en', userType:'legal' };
let searchCount = 127, feedbackCount = 43;
let afRows = [], toastTimer;
let bookmarks = {};    // id → { caseObj, note }
let compareSel = new Set();
let pendingBookmarkId = null;
let aiMode = 'grounded';

const langNames = { en:'English', hi:'हिंदी', mr:'मराठी', gu:'ગુજરાતી', ta:'தமிழ்', te:'తెలుగు', kn:'ಕನ್ನಡ', bn:'বাংলা', pa:'ਪੰਜਾਬੀ', ur:'اردو' };
const uiStrings = {
  en:{ greeting:'Good day', heroSub:'NyayaMind finds the right precedent in seconds — by understanding meaning, not just keywords.', voiceHint:'Listening…' },
  hi:{ greeting:'नमस्ते', heroSub:'NyayaMind कुछ ही सेकंड में सही उदाहरण ढूंढता है — अर्थ को समझकर।', voiceHint:'सुन रहा हूं…' },
  mr:{ greeting:'नमस्कार', heroSub:'NyayaMind काही सेकंदांत योग्य उदाहरण शोधतो — अर्थ समजून.', voiceHint:'ऐकत आहे…' },
  gu:{ greeting:'નમસ્તે', heroSub:'NyayaMind થોડી સેકન્ડમાં સાચો ઉદ્ઘરણ શોધે છે.', voiceHint:'સાંભળી રહ્યો છું…' },
  ta:{ greeting:'வணக்கம்', heroSub:'NyayaMind சில நொடிகளில் சரியான முன்னோட்டத்தை கண்டறியும்.', voiceHint:'கேட்கிறேன்…' },
  te:{ greeting:'నమస్కారం', heroSub:'NyayaMind కొన్ని సెకన్లలో సరైన నిదర్శనాన్ని కనుగొంటుంది.', voiceHint:'వింటున్నాను…' },
  kn:{ greeting:'ನಮಸ್ಕಾರ', heroSub:'NyayaMind ಕೆಲವೇ ಸೆಕೆಂಡುಗಳಲ್ಲಿ ಸರಿಯಾದ ನಿದರ್ಶನ ಕಂಡುಹಿಡಿಯುತ್ತದೆ.', voiceHint:'ಕೇಳುತ್ತಿದ್ದೇನೆ…' },
  bn:{ greeting:'নমস্কার', heroSub:'NyayaMind মাত্র কয়েক সেকেন্ডে সঠিক নজির খুঁজে পায়।', voiceHint:'শুনছি…' },
  pa:{ greeting:'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ', heroSub:'NyayaMind ਕੁਝ ਸਕਿੰਟਾਂ ਵਿੱਚ ਸਹੀ ਮਿਸਾਲ ਲੱਭਦਾ ਹੈ।', voiceHint:'ਸੁਣ ਰਿਹਾ ਹਾਂ…' },
  ur:{ greeting:'السلام علیکم', heroSub:'NyayaMind چند سیکنڈوں میں صحیح نظیر تلاش کرتا ہے۔', voiceHint:'سن رہا ہوں…' },
};


// ── 3. SIGN-IN ────────────────────────────

let selectedUserType = 'legal';
function selectUserType(t) {
  selectedUserType = t;
  document.getElementById('ut-legal').classList.toggle('selected', t==='legal');
  document.getElementById('ut-public').classList.toggle('selected', t==='public');
}

function doSignIn() {
  const name  = document.getElementById('si-name').value.trim();
  const email = document.getElementById('si-email').value.trim();
  const lang  = document.getElementById('si-lang').value;
  const err   = document.getElementById('si-error');
  if (!name)  { err.textContent='Please enter your name.'; return; }
  if (!email||!email.includes('@')) { err.textContent='Please enter a valid email.'; return; }
  err.textContent = '';
  currentUser = { name, email, lang, userType: selectedUserType };
  initApp();
}

function doSignOut() {
  document.getElementById('screen-app').classList.remove('active');
  document.getElementById('screen-signin').classList.add('active');
  document.getElementById('si-name').value = '';
  document.getElementById('si-email').value = '';
}

function initApp() {
  document.getElementById('screen-signin').classList.remove('active');
  document.getElementById('screen-app').classList.add('active');

  const fn = currentUser.name.split(' ')[0];
  document.getElementById('sidebar-avatar').textContent = fn[0].toUpperCase();
  document.getElementById('sidebar-uname').textContent  = fn;
  document.getElementById('sidebar-ulang').textContent  = langNames[currentUser.lang]||'English';
  document.getElementById('sidebar-user-type-lbl').textContent = currentUser.userType==='legal'?'Law Professional':'General Public';
  document.getElementById('nav-dashboard-lbl').textContent = currentUser.userType==='legal'?'Seven Jurors':'Know Your Rights';
  document.getElementById('set-name').value = currentUser.name;
  document.getElementById('set-lang').value = currentUser.lang;

  applyLanguage(currentUser.lang);
  renderCrimeGrid();
  loadSJGrid();
  loadPublicGrid();
  addToFeed('search', '"economic offence bail Maharashtra"');
  addToFeed('useful', 'Bombay HC vs State (2023)');
}

function applyLanguage(lang) {
  const s = uiStrings[lang]||uiStrings.en;
  const fn = currentUser.name.split(' ')[0];
  const hg = document.getElementById('hero-greeting');
  if (hg) hg.innerHTML = `${s.greeting}, <em id="hero-name">${fn}</em>`;
  const hs = document.getElementById('hero-sub');
  if (hs) hs.textContent = s.heroSub;
  const vi = document.getElementById('voice-hint-text');
  if (vi) vi.textContent = s.voiceHint;
}

function saveSettings() {
  currentUser.name = document.getElementById('set-name').value.trim()||currentUser.name;
  currentUser.lang = document.getElementById('set-lang').value;
  const fn = currentUser.name.split(' ')[0];
  document.getElementById('sidebar-avatar').textContent = fn[0].toUpperCase();
  document.getElementById('sidebar-uname').textContent  = fn;
  document.getElementById('sidebar-ulang').textContent  = langNames[currentUser.lang]||'English';
  applyLanguage(currentUser.lang);
  showToast('Settings saved!');
}


// ── 4. NAV ───────────────────────────────

function switchTab(tab) {
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.sidebar-nav li').forEach(l=>l.classList.remove('active'));
  const t = document.getElementById('tab-'+tab);
  const n = document.getElementById('nav-'+tab);
  if (t) t.classList.add('active');
  if (n) n.classList.add('active');
  if (tab==='dashboard') showDashboard();
  if (tab==='bookmarks') renderBookmarks();
}

function showDashboard() {
  const isLegal = currentUser.userType === 'legal';
  document.getElementById('dash-legal').style.display  = isLegal ? 'block' : 'none';
  document.getElementById('dash-public').style.display = isLegal ? 'none'  : 'block';
}


// ── 5. CRIME CATEGORY BLOCKS ─────────────

function renderCrimeGrid() {
  const grid = document.getElementById('crime-grid');
  if (!grid) return;
  grid.innerHTML = '';
  crimeCategories.forEach(cat => {
    const block = document.createElement('div');
    block.className = 'crime-block';
    block.onclick = () => openCrimeModal(cat);
    block.innerHTML = `
      <div class="crime-block-accent" style="background:${cat.color}"></div>
      <div class="crime-block-icon">${cat.icon}</div>
      <div class="crime-block-title">${cat.title}</div>
      <div class="crime-block-desc">${cat.desc}</div>
      <div class="crime-block-count" style="background:${cat.lightColor};color:${cat.color}">${cat.cases.length} cases</div>
      <div class="crime-block-arrow">→</div>`;
    grid.appendChild(block);
  });
}

function openCrimeModal(cat) {
  document.getElementById('crime-modal-title').textContent = cat.icon + ' ' + cat.title;
  document.getElementById('crime-modal-header').style.background = cat.color;
  const body = document.getElementById('crime-modal-body');
  body.innerHTML = '';
  cat.cases.forEach(c => {
    const card = document.createElement('div');
    card.className = 'crime-case-card';
    card.style.borderLeftColor = cat.color;
    card.innerHTML = `
      <div class="crime-case-title">${c.title}</div>
      <div class="crime-case-court">${c.court} &nbsp;·&nbsp; ${c.sections}</div>
      <div class="crime-case-summary">${c.summary}</div>
      ${currentUser.userType==='public' ? `<div class="pub-card-plain" style="margin-bottom:8px"><strong>In simple words:</strong> ${c.plain}</div>` : ''}
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">
        <div class="crime-case-outcome" style="background:${c.outcomeBg};color:${c.outcomeTxt}">${c.outcome}</div>
        <div style="display:flex;gap:6px">
          <button onclick="openCaseFromCrime('${c.id}')" style="font-size:12px;padding:4px 11px;border-radius:8px;border:1px solid ${cat.color};color:${cat.color};background:${cat.lightColor};cursor:pointer;font-family:inherit">Full judgment</button>
          <button onclick="bookmarkFromCrime('${c.id}')" style="font-size:12px;padding:4px 11px;border-radius:8px;border:1px solid #d3d1c7;color:#5f5e5a;background:transparent;cursor:pointer;font-family:inherit" id="bm-crime-${c.id}">${bookmarks[c.id]?'✓ Saved':'Save'}</button>
        </div>
      </div>`;
    body.appendChild(card);
  });
  document.getElementById('crime-modal').classList.add('open');
}

function closeCrimeModal() { document.getElementById('crime-modal').classList.remove('open'); }

function openCaseFromCrime(caseId) {
  closeCrimeModal();
  const c = allCases.find(x=>x.id===caseId);
  if (c) openCase(c.id);
}

function bookmarkFromCrime(caseId) {
  const c = allCases.find(x=>x.id===caseId);
  if (!c) return;
  if (bookmarks[caseId]) {
    delete bookmarks[caseId];
    const btn = document.getElementById('bm-crime-'+caseId);
    if (btn) btn.textContent = 'Save';
    showToast('Bookmark removed.');
  } else {
    pendingBookmarkId = caseId;
    document.getElementById('note-textarea').value = '';
    document.getElementById('note-modal').classList.add('open');
  }
  updateBmBadge();
}


// ── 6. SEARCH ─────────────────────────────

function quickSearch(q) { document.getElementById('search-input').value=q; doSearch(); }

function doSearch() {
  const q = document.getElementById('search-input').value.trim();
  if (!q) return;
  searchCount++;
  updateCounter('stat-searches', searchCount);

  const words = q.toLowerCase().split(' ').filter(w=>w.length>2);
  const scored = allCases.map(c=>{
    const text = (c.title+' '+c.summary+' '+c.sections+' '+c.categoryTitle+' '+c.plain).toLowerCase();
    const score = words.reduce((s,w)=>s+(text.includes(w)?1:0),0);
    return {...c, score};
  }).filter(c=>c.score>0).sort((a,b)=>b.confidence-a.confidence);

  const results = scored.length > 0 ? scored : allCases.slice(0,5);
  renderResults(results, q);
  addToFeed('search', `"${q}"`);
}

function renderResults(results, q) {
  document.getElementById('query-display').textContent = q||'all cases';
  document.getElementById('results-meta').textContent  = `${results.length} results · 0.8s`;
  const list = document.getElementById('results-list');
  list.innerHTML = '';
  results.forEach(c=>list.appendChild(buildResultCard(c, q)));
  updateCompareBar();
  switchTab('search');
}

function buildResultCard(c, query) {
  const card = document.createElement('div');
  card.className = 'result-card';
  card.id = 'rc-'+c.id;
  const isBm = !!bookmarks[c.id];
  const isC  = compareSel.has(c.id);
  const cc   = c.confidence>=90?'conf-high':c.confidence>=75?'conf-medium':'conf-low';
  card.innerHTML = `
    <div class="rc-top">
      <div class="rc-title-row">
        <div class="compare-check${isC?' checked':''}" id="chk-${c.id}" onclick="toggleCompare('${c.id}')"></div>
        <div class="rc-title" onclick="openCase('${c.id}')">${c.title}</div>
      </div>
      <div class="rc-right">
        <div class="confidence-pill ${cc}">${c.confidence}% match</div>
        <div class="rc-badges">
          <span class="badge" style="background:${c.outcomeBg};color:${c.outcomeTxt}">${c.outcome}</span>
          <span class="badge" style="background:#e6f1fb;color:#0c447c">${c.categoryTitle||''}</span>
        </div>
      </div>
    </div>
    <div class="rc-court">${c.court}</div>
    <div class="legal-factors">
      ${c.amount&&c.amount!=='N/A'?`<div class="factor-tag">₹ ${c.amount}</div>`:''}
      <div class="factor-tag">§ ${c.sections}</div>
      ${c.flightRisk&&c.flightRisk!=='N/A'?`<div class="factor-tag">Risk: ${c.flightRisk}</div>`:''}
    </div>
    <div class="rc-snippet">${hlKw(c.summary, query)}</div>
    ${currentUser.userType==='public'?`<div class="pub-card-plain" style="margin-top:8px"><strong>In plain words:</strong> ${c.plain}</div>`:''}
    <div class="rc-footer">
      <div class="rc-date"></div>
      <div class="rc-actions">
        <button class="fb-btn useful" id="u-${c.id}" onclick="vote('${c.id}','useful')"><svg viewBox="0 0 16 16"><polyline points="3,8 7,12 13,4"/></svg> Useful</button>
        <button class="fb-btn notrel" id="n-${c.id}" onclick="vote('${c.id}','notrel')"><svg viewBox="0 0 16 16"><line x1="3" y1="3" x2="13" y2="13"/><line x1="13" y1="3" x2="3" y2="13"/></svg> Not relevant</button>
        <button class="bm-btn${isBm?' bookmarked':''}" id="bm-${c.id}" onclick="startBookmark('${c.id}')"><svg viewBox="0 0 16 16"><path d="M3 2h10v11l-5-2.5L3 13V2z"/></svg> ${isBm?'Saved':'Save'}</button>
      </div>
    </div>`;
  return card;
}

function hlKw(text, q) {
  if (!q) return text;
  const words = q.toLowerCase().split(' ').filter(w=>w.length>3);
  let out = text;
  words.forEach(w=>{ out = out.replace(new RegExp(`(${w})`,'gi'),'<mark>$1</mark>'); });
  return out;
}


// ── 7. FEEDBACK ───────────────────────────

function vote(id, type) {
  const ub = document.getElementById('u-'+id);
  const nb = document.getElementById('n-'+id);
  if (ub) ub.className = 'fb-btn useful'+(type==='useful'?' voted-useful':'');
  if (nb) nb.className = 'fb-btn notrel'+(type==='notrel'?' voted-notrel':'');
  if (type==='useful') {
    feedbackCount++;
    updateCounter('stat-feedback', feedbackCount);
    showToast('NyayaMind is learning from your feedback.');
    const c = allCases.find(x=>x.id===id);
    addToFeed('useful', 'Useful — '+(c?c.title:id));
  } else {
    showToast('Got it. NyayaMind will deprioritise this.');
  }
}


// ── 8. BOOKMARKS WITH NOTES ───────────────

function startBookmark(id) {
  if (bookmarks[id]) {
    delete bookmarks[id];
    updateBmBtn(id, false);
    updateBmBadge();
    showToast('Bookmark removed.');
    return;
  }
  pendingBookmarkId = id;
  document.getElementById('note-textarea').value = '';
  document.getElementById('note-modal').classList.add('open');
}

function saveNote(skipNote=false) {
  const id   = pendingBookmarkId;
  const note = skipNote ? '' : document.getElementById('note-textarea').value.trim();
  const c    = allCases.find(x=>x.id===id);
  if (c) {
    bookmarks[id] = { caseObj: c, note };
    updateBmBtn(id, true);
    updateBmBadge();
    showToast(note ? 'Case bookmarked with your note!' : 'Case bookmarked!');
  }
  document.getElementById('note-modal').classList.remove('open');
  pendingBookmarkId = null;
}

function closeNoteModal() {
  document.getElementById('note-modal').classList.remove('open');
  pendingBookmarkId = null;
}

function updateBmBtn(id, saved) {
  ['bm-'+id].forEach(bid => {
    const btn = document.getElementById(bid);
    if (btn) {
      btn.className = 'bm-btn'+(saved?' bookmarked':'');
      btn.innerHTML = `<svg viewBox="0 0 16 16"><path d="M3 2h10v11l-5-2.5L3 13V2z"/></svg> ${saved?'Saved':'Save'}`;
    }
  });
}

function updateBmBadge() {
  const count = Object.keys(bookmarks).length;
  document.getElementById('bm-badge').textContent = count;
}

function renderBookmarks() {
  const list = document.getElementById('bookmarks-list');
  const ids  = Object.keys(bookmarks);
  if (ids.length === 0) {
    list.innerHTML = '<div class="empty-state"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 2h10v11l-5-2.5L3 13V2z"/></svg><p>No bookmarks yet</p><small>Search for cases and click "Save" to bookmark them here.</small></div>';
    return;
  }
  list.innerHTML = '';
  ids.forEach(id => {
    const { caseObj: c, note } = bookmarks[id];
    const card = document.createElement('div');
    card.className = 'bm-card';
    card.innerHTML = `
      <div class="bm-card-top">
        <div class="bm-card-title" onclick="openCase('${c.id}')">${c.title}</div>
        <div class="rc-badges">
          <span class="badge" style="background:${c.outcomeBg};color:${c.outcomeTxt}">${c.outcome}</span>
        </div>
      </div>
      <div class="bm-card-court">${c.court} &nbsp;·&nbsp; ${c.sections}</div>
      ${note
        ? `<div class="bm-note-block"><span class="bm-note-icon">📝</span><div class="bm-note-text">${note}</div><button class="bm-note-edit" onclick="editNote('${id}')">Edit</button></div>`
        : `<div class="bm-no-note" onclick="editNote('${id}')">+ Add a note to this bookmark</div>`
      }
      <div class="bm-footer">
        <div style="font-size:11px;color:var(--text3)">${c.categoryTitle}</div>
        <div style="display:flex;gap:7px">
          <button onclick="openCase('${c.id}')" style="font-size:12px;padding:4px 11px;border-radius:8px;border:1px solid var(--border2);color:var(--blue);background:var(--blue-light);cursor:pointer;font-family:inherit">Open judgment</button>
          <button onclick="removeBookmark('${id}')" style="font-size:12px;padding:4px 11px;border-radius:8px;border:1px solid var(--border);color:var(--text2);background:transparent;cursor:pointer;font-family:inherit">Remove</button>
        </div>
      </div>`;
    list.appendChild(card);
  });
}

function editNote(id) {
  pendingBookmarkId = id;
  document.getElementById('note-textarea').value = bookmarks[id]?.note || '';
  document.getElementById('note-modal').classList.add('open');
}

function removeBookmark(id) {
  delete bookmarks[id];
  updateBmBtn(id, false);
  updateBmBadge();
  renderBookmarks();
  showToast('Bookmark removed.');
}


// ── 9. COMPARE ───────────────────────────

function toggleCompare(id) {
  if (compareSel.has(id)) { compareSel.delete(id); }
  else { if (compareSel.size>=2) { showToast('Only 2 cases can be compared at a time.'); return; } compareSel.add(id); }
  const chk = document.getElementById('chk-'+id);
  if (chk) chk.className = 'compare-check'+(compareSel.has(id)?' checked':'');
  document.getElementById('cmp-badge').textContent = compareSel.size;
  updateCompareBar();
}

function updateCompareBar() {
  const label = document.getElementById('compare-bar-text');
  const goBtn = document.getElementById('compare-go-btn');
  if (!label) return;
  if (compareSel.size===0)      { label.textContent='Select 2 cases to compare'; goBtn.style.display='none'; }
  else if (compareSel.size===1) { label.textContent='1 selected — pick 1 more';  goBtn.style.display='none'; }
  else                          { label.textContent='Ready to compare!';          goBtn.style.display='inline-block'; }
}

function openCompare() {
  if (compareSel.size<2) { showToast('Select 2 cases first.'); return; }
  const [a,b] = [...compareSel];
  renderCompare(allCases.find(c=>c.id===a), allCases.find(c=>c.id===b));
}

function renderCompare(cA, cB) {
  const oc = o => o.toLowerCase().includes('denied')?'background:#fcebeb;color:#a32d2d':o.toLowerCase().includes('granted')?'background:#eaf3de;color:#3b6d11':'background:#e6f1fb;color:#0c447c';
  const dc = (a,b) => a!==b?'diff-highlight':'';
  document.getElementById('compare-grid').innerHTML = [cA, cB].map(c=>`
    <div class="compare-col">
      <div class="compare-col-head">${c.title}</div>
      <div class="compare-section"><div class="compare-section-lbl">Court</div><div class="compare-section-val">${c.court}</div></div>
      <div class="compare-section"><div class="compare-section-lbl">Category</div><div class="compare-section-val">${c.categoryTitle}</div></div>
      <div class="compare-section"><div class="compare-section-lbl">Outcome</div><div class="compare-outcome" style="${oc(c.outcome)}">${c.outcome}</div></div>
      <div class="compare-section"><div class="compare-section-lbl">Amount</div><div class="compare-section-val"><span class="${dc(c.amount,(c===cA?cB:cA).amount)}">${c.amount}</span></div></div>
      <div class="compare-section"><div class="compare-section-lbl">Sections</div><div class="compare-section-val">${c.sections}</div></div>
      <div class="compare-section"><div class="compare-section-lbl">Flight risk</div><div class="compare-section-val"><span class="${dc(c.flightRisk,(c===cA?cB:cA).flightRisk)}">${c.flightRisk}</span></div></div>
      <div class="compare-section"><div class="compare-section-lbl">Match score</div><div class="compare-section-val">${c.confidence}%</div></div>
      <div class="compare-section"><div class="compare-section-lbl">Key reasoning</div><div class="compare-section-val" style="font-style:italic;font-size:12px">${c.paragraphs[c.sourceParagraph]}</div></div>
    </div>`).join('');
  switchTab('compare');
}

function clearCompare() {
  compareSel.clear();
  document.querySelectorAll('.compare-check').forEach(el=>el.classList.remove('checked'));
  document.getElementById('cmp-badge').textContent = 0;
  updateCompareBar();
}


// ── 10. CASE DETAIL ──────────────────────

function openCase(id) {
  const c = allCases.find(x=>x.id===id);
  if (!c) return;
  document.getElementById('case-content').innerHTML = `
    <div class="case-title">${c.title}</div>
    <div class="case-meta">
      <span class="badge" style="background:#e6f1fb;color:#0c447c">${c.court}</span>
      <span class="badge" style="background:${c.outcomeBg};color:${c.outcomeTxt}">${c.outcome}</span>
      <span class="badge" style="background:#f1efe8;color:#5f5e5a">${c.categoryTitle}</span>
    </div>
    <div class="legal-factors" style="margin-bottom:15px">
      ${c.amount&&c.amount!=='N/A'?`<div class="factor-tag">₹ ${c.amount}</div>`:''}
      <div class="factor-tag">§ ${c.sections}</div>
      ${c.flightRisk&&c.flightRisk!=='N/A'?`<div class="factor-tag">Risk: ${c.flightRisk}</div>`:''}
    </div>
    ${currentUser.userType==='public'?`<div class="pub-card-plain" style="margin-bottom:15px"><strong>In plain words:</strong> ${c.plain}</div>`:''}
    <div class="case-body" id="case-body">${c.paragraphs.map((p,i)=>`<p id="para-${i}">${p}</p>`).join('')}</div>`;
  document.getElementById('ai-answer').classList.remove('show');
  document.getElementById('ask-input').value = '';
  document.getElementById('source-para').style.display = 'none';
  window._currentCaseId = id;
  addHistory(c.title);
  switchTab('case');
}

const aiAnswers = {
  default: 'The court denied bail primarily because: (1) the offence involved significant harm to society; (2) the accused posed a flight risk; and (3) established precedent requires stricter scrutiny for serious offences. Custodial interrogation was deemed necessary to unravel the complete picture.',
  bail: 'The court applied the twin test: liberty of the individual vs. protection of society. Bail was denied because the prosecution established a prima facie case and the accused failed to demonstrate they would not abscond.',
  conditions: 'The bail conditions imposed were: (1) surrender of passport to court registry, (2) weekly reporting to nearest police station, (3) furnishing the specified surety amount, and (4) no travel abroad without prior court permission.',
};

function askAI() {
  const question = document.getElementById('ask-input').value.trim();
  if (!question) return;
  const answerDiv = document.getElementById('ai-answer');
  const textDiv   = document.getElementById('ai-text');
  const srcPara   = document.getElementById('source-para');
  const confBadge = document.getElementById('confidence-badge');
  textDiv.textContent = ''; srcPara.style.display='none';
  answerDiv.classList.add('show');
  let response = aiAnswers.default, conf = 92;
  if (question.toLowerCase().includes('condition')) { response=aiAnswers.conditions; conf=87; }
  else if (question.toLowerCase().includes('bail'))  { response=aiAnswers.bail;       conf=95; }
  confBadge.className   = 'confidence-badge '+(conf>=90?'high':'medium');
  confBadge.textContent = conf+'% confidence';
  let i=0;
  const iv = setInterval(()=>{
    textDiv.textContent+=response[i++];
    if (i>=response.length) {
      clearInterval(iv);
      const c = allCases.find(x=>x.id===window._currentCaseId);
      if (c) {
        document.getElementById('source-para-text').textContent = c.paragraphs[c.sourceParagraph];
        srcPara.style.display='block';
        document.querySelectorAll('#case-body p').forEach(el=>el.classList.remove('source-highlight'));
        const srcEl = document.getElementById('para-'+c.sourceParagraph);
        if (srcEl) { srcEl.classList.add('source-highlight'); srcEl.scrollIntoView({behavior:'smooth',block:'nearest'}); }
      }
    }
  }, 18);
}

function addHistory(title) {
  const list = document.getElementById('history-list');
  const empty = list.querySelector('.empty-state');
  if (empty) list.innerHTML='';
  const row = document.createElement('div');
  row.className = 'history-row';
  row.innerHTML = `<strong>${title}</strong> — Analyzed via NyayaMind AI &nbsp;<span style="color:var(--text3);font-size:11px">just now</span>`;
  list.prepend(row);
}


// ── 11. SEVEN JURORS (LAW DASHBOARD) ─────

function loadSJGrid() {
  const grid = document.getElementById('sj-grid');
  if (!grid) return;
  grid.className = 'sj-grid';
  grid.innerHTML = '';
  sjCases.forEach(c=>{
    const card = document.createElement('div');
    card.className = 'sj-card';
    card.innerHTML = `<div class="sj-case-id">${c.id}</div><div class="sj-court">${c.court}</div><div class="sj-summary">${c.summary}</div><button class="sj-analyze-btn" onclick='openSJModal(${JSON.stringify(c)})'>Analyze with AI</button>`;
    grid.appendChild(card);
  });
}

function setAIMode(v) { aiMode=v; }

function sjSearch() {
  const q = document.getElementById('sj-search').value.toLowerCase().trim();
  if (!q) return;
  const STOP = new Set(['the','and','in','of','a','an','to','for','is','with','by']);
  const words = q.split(' ').filter(w=>w.length>2&&!STOP.has(w));
  const found = sjCases.find(c=>{ const t=(c.id+' '+c.summary+' '+c.order).toLowerCase(); return words.some(w=>t.includes(w)); });
  if (found) openSJModal(found);
  else { doSearch(); switchTab('search'); }
}

function sjQuickSearch(q) { document.getElementById('sj-search').value=q; sjSearch(); }

function openSJModal(data) {
  document.getElementById('modal-title').textContent = data.id;
  document.getElementById('modal-body').innerHTML = `
    <div class="modal-summary"><strong>Summary:</strong> ${data.summary}</div>
    <div class="modal-analysis"><div class="modal-analysis-title">Grounded AI Analysis (${aiMode==='deep'?'Deep Research':'Fast Grounded'})</div><div class="modal-result" id="modal-result">Processing records…</div></div>
    <div class="modal-feedback"><button class="feedback-btn" onclick="this.style.color='#3b6d11';this.textContent='✓ Useful'">✓ Useful</button><button class="feedback-btn" onclick="this.style.color='#a32d2d';this.textContent='✗ Not useful'">✗ Not useful</button></div>`;
  document.getElementById('sj-modal').classList.add('open');
  setTimeout(()=>{ document.getElementById('modal-result').innerHTML=`<strong>Result:</strong> ${data.order}`; addHistory(data.id+' — '+data.summary.substring(0,50)+'…'); }, aiMode==='deep'?1600:800);
}

function closeModal() { document.getElementById('sj-modal').classList.remove('open'); }


// ── 12. PUBLIC DASHBOARD ─────────────────

function loadPublicGrid() {
  const grid = document.getElementById('pub-grid');
  if (!grid) return;
  grid.className = 'pub-grid';
  grid.innerHTML = '';
  // Show 2 cases from each category
  crimeCategories.forEach(cat=>{
    cat.cases.slice(0,2).forEach(c=>{
      const card = document.createElement('div');
      card.className = 'pub-card';
      card.onclick = ()=>openCase(c.id);
      card.innerHTML = `
        <div class="pub-card-emoji">${cat.icon}</div>
        <div class="pub-card-title">${c.title}</div>
        <div class="pub-card-summary">${c.summary}</div>
        <div class="pub-card-plain"><strong>What this means:</strong> ${c.plain}</div>
        <div class="pub-card-outcome" style="background:${c.outcomeBg};color:${c.outcomeTxt}">${c.outcome}</div>`;
      grid.appendChild(card);
    });
  });
}

function pubSearch() {
  const q = document.getElementById('pub-search').value.trim();
  if (!q) return;
  document.getElementById('search-input').value = q;
  doSearch();
}


// ── 13. ACTIVITY FEED ────────────────────

const feedIconMap = {
  search:{ bg:'var(--blue-light)', stroke:'var(--blue)', path:'<circle cx="7" cy="7" r="4.5"/><line x1="10.5" y1="10.5" x2="14" y2="14"/>' },
  useful:{ bg:'var(--green-light)',stroke:'var(--green)',path:'<polyline points="3,8 7,12 13,4"/>' },
  notrel:{ bg:'var(--red-light)',  stroke:'var(--red)',  path:'<line x1="3" y1="3" x2="13" y2="13"/><line x1="13" y1="3" x2="3" y2="13"/>' },
};

function addToFeed(type, text) {
  const ic = feedIconMap[type]||feedIconMap.search;
  const lbl = type==='search'?'Search':type==='useful'?'Useful':'Not relevant';
  const row = `<div class="af-row"><div class="af-icon" style="background:${ic.bg}"><svg viewBox="0 0 16 16" stroke="${ic.stroke}" fill="none" stroke-width="2" stroke-linecap="round">${ic.path}</svg></div><div class="af-main"><strong>${lbl}:</strong> ${text}</div><div class="af-time">just now</div></div>`;
  afRows.unshift(row);
  if (afRows.length>6) afRows.pop();
  const el = document.getElementById('af-list');
  if (el) el.innerHTML = afRows.join('');
}

function updateCounter(id, value) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = value;
  el.classList.add('flash');
  setTimeout(()=>el.classList.remove('flash'), 900);
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove('show'), 2600);
}


// ── 14. VOICE SEARCH ─────────────────────

const SpeechRecognition = window.SpeechRecognition||window.webkitSpeechRecognition;
let recognition=null, voiceTarget='main';
if (SpeechRecognition) {
  recognition = new SpeechRecognition();
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.onresult = e=>{
    const t = e.results[0][0].transcript;
    stopVoice();
    const inputMap = { main:'search-input', sj:'sj-search', pub:'pub-search', ask:'ask-input' };
    const inputEl = document.getElementById(inputMap[voiceTarget]);
    if (inputEl) inputEl.value = t;
    if (voiceTarget==='main') doSearch();
    else if (voiceTarget==='sj')  sjSearch();
    else if (voiceTarget==='pub') pubSearch();
    else if (voiceTarget==='ask') askAI();
  };
  recognition.onerror = ()=>stopVoice();
  recognition.onend   = ()=>stopVoice();
}

function startVoice(target) {
  if (!recognition) { showToast('Voice search requires Chrome browser.'); return; }
  voiceTarget = target;
  recognition.lang = (['hi','mr'].includes(currentUser.lang))?'hi-IN':'en-IN';
  recognition.start();
  document.getElementById('voice-indicator').classList.add('active');
  document.querySelectorAll('.mic-btn').forEach(b=>b.classList.add('listening'));
}
function stopVoice() {
  try { recognition?.stop(); } catch(e){}
  document.getElementById('voice-indicator').classList.remove('active');
  document.querySelectorAll('.mic-btn').forEach(b=>b.classList.remove('listening'));
}
function toggleVoice()    { document.getElementById('mic-btn').classList.contains('listening')?stopVoice():startVoice('main'); }
function toggleVoiceSJ()  { document.getElementById('mic-btn-sj').classList.contains('listening')?stopVoice():startVoice('sj'); }
function toggleVoicePub() { document.getElementById('mic-btn-pub').classList.contains('listening')?stopVoice():startVoice('pub'); }
function toggleVoiceAsk() { document.getElementById('mic-btn-ask').classList.contains('listening')?stopVoice():startVoice('ask'); }

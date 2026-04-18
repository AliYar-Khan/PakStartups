# PakStartups — Screen List (with Tabs)

A full breakdown of every screen on the platform, including internal tabs/sub-views.

> **Notation**
> - 📄 **Screen** — a top-level page/route
> - 🗂️ **Tab** — a switchable sub-view within a screen
> - 📝 **Step** — a step inside a wizard/form flow

---

## 🏠 1. Landing / Home Page
**Route:** `/`
**Purpose:** First impression. Communicates mission and funnels users to key features.

> No tabs — single scrollable page.

**Sections (scroll order):**
- Hero with tagline + "Join the Ecosystem" CTA
- Platform overview (what PakStartups is)
- Feature highlights grid (Directory, Matchmaking, Knowledge Hub, Blog)
- Live stats (startups listed, members, events)
- Community links (Reddit, Discord, WhatsApp)
- Footer

---

## 🔐 2. Auth Flow
**Route:** `/auth`
**Purpose:** Register, log in, and onboard new users.

> No tabs — separate steps/pages in the flow.

**📝 Steps:**
1. **Sign Up** — Email / Google / LinkedIn
2. **Login** — Email + password or OAuth
3. **Onboarding Wizard** *(post sign-up only)*
   - Step 1: Choose role — Founder / Freelancer / Student / Investor
   - Step 2: Add skills & interest tags
   - Step 3: Set city / location
   - Step 4: Connect social accounts (optional)
   - Step 5: Welcome screen + redirect to dashboard

---

## 👤 3. User Profile Page
**Route:** `/u/[username]`
**Purpose:** Public-facing profile for any ecosystem member.

**🗂️ Tabs:**
- **Overview** — Avatar, name, role badge, bio, city, skills, social links, "Connect" CTA
- **Startups** — Startups the user is a founder/team member of
- **Activity** — Public contributions: ideas submitted, blog posts, events attended
- **Co-Founder Card** — Availability status, what they're looking for in a co-founder

---

## 🏢 4. Startup Directory
**Route:** `/startups`
**Purpose:** Browse and discover Pakistani startups.

**🗂️ Tabs:**
- **All Startups** — Full grid/list with search + filter (Category, Stage, City)
- **Recently Added** — Newest submissions first
- **Trending** — Most viewed / most connected this week
- **By Industry** — Grouped cards per industry (FinTech, HealthTech, EdTech, etc.)

---

## 📋 5. Startup Profile Page
**Route:** `/startups/[slug]`
**Purpose:** Detailed view of a single startup.

**🗂️ Tabs:**
- **About** — Logo, tagline, description, problem statement, stage, category, city, external links
- **Team** — Founder(s) and team member profile cards with roles
- **Updates** — Founder-posted milestones and progress notes
- **Connect** — "Reach out to the team" form or Discord/LinkedIn link

---

## ➕ 6. Submit / Edit Startup
**Route:** `/startups/submit` and `/startups/[slug]/edit`
**Purpose:** Let founders list or update their startup.

> No tabs — multi-step form wizard.

**📝 Steps:**
1. **Basics** — Name, tagline, one-liner description
2. **Details** — Category, stage, city, founding date
3. **Media** — Logo upload, cover image
4. **Team** — Add co-founders / team members
5. **Links** — Website, social, pitch deck URL
6. **Review & Submit** — Preview card + submit for approval

---

## 🤝 7. Co-Founder Matchmaking
**Route:** `/match`
**Purpose:** Help users find compatible co-founders.

**🗂️ Tabs:**
- **Browse Matches** — Profile cards with skill/interest compatibility score, filter by skills, city, role, availability
- **My Requests** — Outgoing connection requests and their status (Pending / Accepted / Declined)
- **Received Requests** — Incoming requests with Accept / Decline actions
- **Saved Profiles** — Bookmarked co-founder candidates

---

## 💼 8. B2B Marketplace / Demand Aggregation
**Route:** `/b2b`
**Purpose:** Connect startups needing services with those providing them.

**🗂️ Tabs:**
- **Browse Demands** — Cards of posted service needs (category, description, budget, posted by, deadline)
- **Browse Solutions** — Vendor/startup solutions directory with category filters and ratings
- **Post a Demand** — Form: category, description, budget range, timeline
- **List a Solution** — Form: service offered, pricing model, contact/apply link
- **AI Matches** *(logged in)* — "Startups that match your needs / offerings" powered by AI

---

## 🏫 9. Accelerator & Community Directory
**Route:** `/ecosystem`
**Purpose:** Discover support organizations.

**🗂️ Tabs:**
- **All** — Combined view, filterable by city and type
- **Incubators** — University and private incubators
- **Accelerators** — Growth and scale-stage programs
- **Co-Working Spaces** — Physical spaces with location and pricing info
- **Venture Studios** — Startup studios and build partners
- **Founder Communities** — Local and online communities
- **Innovation Hubs** — Government and private labs/hubs

> Each tab shows cards: name, type, city, description, apply/contact link.

---

## 📚 10. Knowledge Hub
**Route:** `/knowledge`
**Purpose:** Central entry point for all learning, tools, and resources.

**🗂️ Tabs:**

### 📖 Tab 1 — Learning & Execution Guides
- Guide cards with title, estimated read time, Pakistan-specific badge
- Filter by topic (Legal, Finance, Marketing, Product, etc.)
- Progress bar per guide (if logged in)
- Guide detail page:
  - Interactive step-by-step checklist / playbook
  - Localized examples (Pakistan company registration, FBR, etc.)
  - Mark steps complete, track overall progress

### 🛠️ Tab 2 — Operational Toolkit
- **Sub-tabs inside:**
  - **Templates** — Legal & business document downloads (NDA, MOU, co-founder agreement, etc.)
  - **SaaS Tools** — Curated tools directory with category, pricing model, description, ratings
  - **Calculators** — Burn rate, unit economics, pricing, salary band tools

### 📊 Tab 3 — Market Intelligence
- **Sub-tabs inside:**
  - **Reports** — Industry deep-dive PDFs / summaries (FinTech, AgriTech, etc.)
  - **Sentiment** — Consumer sentiment dashboards with charts
  - **Benchmarking** — Competitor comparison tool (enter startup, get benchmarks)
  - **Surveys** — Community-run survey results + "Run a Survey" CTA for founders

### 🏛️ Tab 4 — Resource Directory
- **Sub-tabs inside:**
  - **Grants & Subsidies** — Tracker with eligibility, deadline, amount, apply link
  - **Regulatory Guides** — SECP registration, FBR/NTN, provincial rules, step-by-step
  - **Investor Directory** — VCs, Angels, Private Equity with profile, focus area, contact

---

## 📰 11. Blog & Success Stories
**Route:** `/blog`
**Purpose:** Inspire and educate through real founder stories and case studies.

**🗂️ Tabs:**
- **All Posts** — Full article feed, sorted by recency
- **Founder Journeys** — Long-form personal stories from founders
- **Case Studies** — Business breakdowns, what worked and what didn't
- **Lessons Learned** — Quick-read takeaways and failure post-mortems
- **Submit Your Story** *(logged in)* — Article editor / submission form

> Article detail page (no tabs): rich content, author profile card, related posts, comment section, share buttons.

---

## 💡 12. Idea Validation System
**Route:** `/ideas`
**Purpose:** Help founders validate startup ideas before building.

**🗂️ Tabs:**
- **Browse Ideas** — Community-submitted ideas with upvotes, comments, and tags
- **Submit an Idea** — Form: problem statement, target market, proposed solution, stage
- **My Ideas** *(logged in)* — Your submitted ideas with feedback and votes
- **Feasibility Tool** — Interactive checklist: market size, competition, monetization, execution risk → generates a score
- **Survey Builder** — Create & publish a market validation survey, view collected responses
- **MVP Resources** — Guides and templates for scoping and building an MVP

---

## 🙋 13. Volunteer & Ambassador Applications
**Route:** `/volunteer`
**Purpose:** Recruit community contributors.

**🗂️ Tabs:**
- **Student Ambassadors** — Info, expectations, apply form (name, university, city, motivation)
- **Community Members** — Info, apply form
- **Mentors** — Skill/subject expert info, apply form (expertise area, availability)
- **Moderators** — Moderation role info, apply form
- **My Applications** *(logged in)* — Status of submitted applications (Under Review / Accepted / Rejected)

---

## 📅 14. Events & Meetups
**Route:** `/events`
**Purpose:** Surface upcoming and past community events.

**🗂️ Tabs:**
- **Upcoming** — List/calendar of future events with RSVP action
- **Past Events** — Archive with recordings, notes, and summaries
- **Weekly Meetups** — Recurring Friday session schedule and agenda
- **Propose an Event** *(logged in)* — Form: title, type (online/offline), date, topic, description

> Event detail page (no tabs): date/time, format, topic, speaker(s), RSVP button, post-event recording.

---

## 🔔 15. Notifications Center
**Route:** `/notifications` *(or slide-in panel)*
**Purpose:** Keep users updated on relevant activity.

**🗂️ Tabs:**
- **All** — Combined feed
- **Connections** — Match requests, accepted connections
- **Ecosystem** — New startups, B2B matches, idea feedback
- **Events** — Upcoming events, RSVP reminders
- **System** — Platform announcements, application status updates

---

## ⚙️ 16. Settings & Account Management
**Route:** `/settings`
**Purpose:** User account and preference controls.

**🗂️ Tabs:**
- **Profile** — Edit name, bio, avatar, city, role tag
- **Skills & Interests** — Add/remove skill tags and interest areas
- **Social Accounts** — Connect/disconnect LinkedIn, Discord, GitHub
- **Notifications** — Toggle preferences per notification type (email, in-app)
- **Privacy** — Public vs. private profile, co-founder visibility toggle
- **Security** — Change password, active sessions, 2FA
- **Danger Zone** — Delete account

---

## 🛡️ 17. Admin / Moderation Dashboard *(Internal)*
**Route:** `/admin`
**Purpose:** Platform operators review, approve, and manage all content and users.

**🗂️ Tabs:**
- **Overview** — Analytics snapshot (new users, active startups, pending reviews, event RSVPs)
- **Startup Queue** — Review submissions: Approve / Request Changes / Reject
- **User Management** — Search users, view profiles, suspend accounts, assign roles
- **Blog & Stories** — Review + publish submitted articles, manage categories
- **Volunteer Applications** — Review applicants per role, update statuses
- **Events** — Approve proposed events, manage RSVPs, publish recordings
- **Reports** — User-reported content queue with action options
- **Analytics** — Deeper charts: growth over time, top content, geographic breakdown

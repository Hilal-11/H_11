import {
  A, B, Callout, Code, CodeBlock, Facts, Figure, FigurePair, H3, H4, LI, Lead, OL, P, Pipeline, Section, Stats,
  Table, Timeline, UL,
} from "./prose"

/* ------------------------------------------------------------------ */
/* Links — update here if the live domain changes                      */
/* ------------------------------------------------------------------ */
const SITE = "https://snaplnk-gold.vercel.app"
const LINKS = {
  site: SITE,
  bio: `${SITE}/@hilal`,
  pricing: `${SITE}/pricing`,
  github: "https://github.com/Hilal-11",
  creator: "/",
}

const IMG = "/case-studies/snaplnk-case-study"
const img = (name: string, alt: string, width: number, height: number) => ({
  src: `${IMG}/${name}.png`, alt, width, height,
})

export const snaplnkMeta = {
  title: "snaplnk.io — Product Case Study",
  subtitle:
    "A URL shortener I designed and built solo: short links with auto-generated QR codes, privacy-safe click analytics, a no-code link-in-bio builder, and a secured admin panel with first-party product analytics.",
}

export const snaplnkToc = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem and goals" },
  { id: "walkthrough", label: "Product walkthrough" },
  { id: "admin", label: "Admin panel" },
  { id: "architecture", label: "Architecture" },
  { id: "deep-dives", label: "Deep dives" },
  { id: "challenges", label: "Challenges" },
  { id: "results", label: "Results and learnings" },
  { id: "references", label: "Links and references" },
]

export default function SnaplnkCaseStudy() {
  return (
    <div className="space-y-14">
      {/* ---------------------------------------------------------- */}
      <section id="overview" className="scroll-mt-24 space-y-6">
        <Figure
          {...img("landing-hero", "snaplnk.io landing page hero with the URL input", 1910, 1071)}
          caption="The snaplnk.io landing page — paste a long URL, get a short link"
          priority
        />

        <Lead>
          snaplnk.io is a URL shortener I designed and built solo. It covers short links with
          auto-generated QR codes, privacy-safe click analytics, a no-code link-in-bio page builder,
          and a secured admin panel with first-party product analytics.
        </Lead>

        <div className="flex flex-wrap gap-2">
          {[
            ["Live site", LINKS.site],
            ["Example bio page", LINKS.bio],
            ["GitHub", LINKS.github],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-neutral-200 px-3 py-1.5 text-[13px] font-medium text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
            >
              {label} ↗
            </a>
          ))}
        </div>

        <Stats
          items={[
            { value: "~23.5k", label: "lines of TypeScript, TSX and SQL" },
            { value: "217", label: "source files, 67 commits" },
            { value: "~97", label: "Vitest test cases in 14 suites" },
            { value: "15", label: "merged pull requests" },
          ]}
        />

        <Facts
          rows={[
            ["Role", "Solo founder, designer and full-stack engineer"],
            ["Timeline", "Jul 2026 – Nov 2026 (first commit 21 Jul 2026; admin panel shipped 12 Nov 2026)"],
            ["Tests", "14 Vitest suites (~97 test cases) + 3 Supabase RLS / RPC test scripts"],
            ["Web stack", <>Next.js 16 (App Router, <Code>proxy.ts</Code>), React 19, TypeScript, Tailwind CSS v4, shadcn/ui (base-nova), Motion</>],
            ["Backend", "Supabase — Postgres, Auth, Storage, Row-Level Security, RPC functions"],
            ["Infra", "Upstash Redis (rate limiting), Cloudinary (QR image hosting), Vercel (hosting + edge geolocation)"],
            ["Key libraries", "nanoid, qrcode, ua-parser-js, isbot, Zod v4, Recharts, bcryptjs, date-fns"],
            ["Code review", "CodeRabbit AI review on every pull request"],
          ]}
        />
      </section>

      {/* ---------------------------------------------------------- */}
      <Section id="problem" title="Problem and goals">
        <P>
          Creators and small businesses juggle separate tools for short links, QR codes, analytics
          and link-in-bio pages — and most free shorteners are slow, track visitors aggressively, or
          get abused for phishing.
        </P>
        <UL>
          <LI>Short links, QR codes and bio pages usually live in different products with different logins.</LI>
          <LI>Free shorteners are a target for spam and phishing, so a public one needs abuse controls from day one.</LI>
          <LI>Click analytics often store raw IP addresses, which is a privacy liability.</LI>
          <LI>Link-in-bio builders either lock basic features behind a paywall or let users inject unsafe HTML.</LI>
        </UL>
        <H4>Goals I set for the product</H4>
        <OL
          items={[
            "Shorten any URL in one step and get a downloadable QR code automatically.",
            "Count every real click with device, browser, OS, country, city and referrer — but never store raw IPs.",
            "Redirects must stay fast: logging must never slow the 302.",
            <>A free, safe link-in-bio builder with themes, templates and blocks, published to <Code>{"/bio/<username>"}</Code>.</>,
            "Stop abuse: rate limits, URL validation, reserved names and no anonymous link creation.",
            "An admin panel to see users, links, events and errors — without exposing it to anyone else.",
          ]}
        />
      </Section>

      {/* ---------------------------------------------------------- */}
      <Section id="walkthrough" title="Product walkthrough">
        <P>
          The product has eight surfaces. The first seven are what every user sees; the admin panel
          has its own section below.
        </P>

        <H3>1. Landing page</H3>
        <P>
          A scroll-aware header, a hero with a URL input and feature pills (customize your link,
          unlimited short links, custom alias links, complete link tracking), an interactive grid
          background, a trusted-by logo grid and micro-interactions built with Motion. Below the hero,
          a live preview of the analytics dashboard shows what you get after signing up.
        </P>
        <Callout>
          A signed-out visitor who pastes a URL is sent to sign-up and then straight to the
          create-link form with the URL pre-filled — no lost intent.
        </Callout>

        <H3>2. Sign-up and sign-in</H3>
        <P>
          Email + password, Google and GitHub OAuth through Supabase, with a password visibility
          toggle, friendly auth error messages and a safe return to the page the user came from.
          The right side previews the product the user is about to get.
        </P>
        <Figure
          {...img("signup", "Create account page with Google and GitHub buttons", 1910, 1071)}
          caption="Create account — Google, GitHub or email"
        />

        <H3>3. Dashboard</H3>
        <P>
          A greeting with the user&apos;s name and date, and a “Shorten a link in one click” card with a
          Short link / QR code switch and a “More options” row for a custom back-half, tags and
          expiry. Below it, a “Do more with Snaplnk” grid (QR codes, analytics, bio pages, tags,
          expiry &amp; controls, custom domains) and a Recent Links rail showing clicks, the last click&apos;s
          city and quick copy / download-QR / share actions. <Code>Ctrl+K</Code> opens a command
          palette from anywhere.
        </P>
        <Figure
          {...img("dashboard", "snaplnk dashboard with shorten card, feature grid and recent links", 1910, 1066)}
          caption="The dashboard home"
        />
        <P>
          The global <B>Create Link</B> button opens a picker so users can start any of the three
          products from one place:
        </P>
        <Figure
          {...img("create-picker", "What do you want to create dialog: short link, QR code or bio page", 793, 428)}
          caption="“What do you want to create?” — short link, QR code or bio page"
        />

        <H3>4. Link management</H3>
        <P>
          Links are created with a custom alias, title, tags and expiry date. The library has
          search across links, URLs and tags; status tabs (All, Active, Disabled, Expired, Hidden)
          with live counts; sorting; list, card and compact views; and bulk selection. Each card
          shows the destination&apos;s favicon, the short link with a copy button, the original URL,
          click count, created date and inline tags.
        </P>
        <P>
          Every row can be edited, shared through the Web Share API, opened in analytics, archived,
          soft-deleted and restored, or have its QR code downloaded as PNG. Archived, Expired and
          Deleted links each get their own view in the sidebar.
        </P>
        <FigurePair
          images={[
            img("links-light", "My Links page in light mode", 1910, 1071),
            img("links-dark", "My Links page in dark mode", 1910, 1068),
          ]}
          caption="My Links — light and dark themes"
        />

        <H3>5. Analytics</H3>
        <P>
          Four stat cards with sparklines and “vs last day” deltas (links created, total clicks, QR
          codes, bio pages), then audience insights with 7d / 30d / 90d ranges: a click-analytics
          area chart, device breakdown and top countries. Each link also has its own breakdown by
          day, device, browser, OS, country, city and referrer.
        </P>
        <Figure
          {...img("analytics", "Analytics page with stat cards, click chart, device breakdown and top countries", 1910, 1071)}
          caption="Analytics — totals, click trend, devices and countries"
        />

        <H3>6. QR codes</H3>
        <P>
          Every link gets a QR code automatically, rendered as a PNG and stored on Cloudinary. The QR
          library mirrors the links library — search, status tabs, sort, list or grid view — and
          each code can be downloaded, edited or opened in analytics. Because each QR points at a
          short link, scans are tracked like clicks.
        </P>
        <FigurePair
          images={[
            img("qr-codes-list", "QR codes list view in dark mode", 1910, 1071),
            img("qr-codes-grid", "QR codes grid view in light mode", 1910, 1071),
          ]}
          caption="QR codes — list view and grid view"
        />

        <H3>7. Bio pages</H3>
        <P>
          A free link-in-bio builder (“1 page · unlimited &amp; free”). Users start from Blank, Link
          Hub (a dark creator card with icon link rows) or Contact Card (a business card with a cover
          banner, socials and tap-to-call details), and claim a username with a live availability
          check.
        </P>
        <P>
          The editor has blocks — link, heading, text, divider, social icons, YouTube / Vimeo /
          Spotify / SoundCloud embeds, and a contact card with vCard download — and a design panel
          for colours, fonts and button styles, with a live preview. Publish and unpublish are one
          click, and the published page lives at <Code>/@username</Code>.
        </P>
        <Figure
          {...img("bio-pages", "Bio pages list with a published page and three templates", 1910, 1071)}
          caption="Bio pages — your pages, and Blank / Link Hub / Contact Card templates"
        />

        <H3>8. Settings and profile</H3>
        <P>
          Tabbed settings: Profile (display name, initials avatar), Account (email, password,
          sign-in methods), Preferences (defaults for new links), Appearance (theme, motion, layout),
          Security (sessions and activity), Data (export) and a Danger zone for deleting links or the
          whole account — self-service, through the <Code>delete_my_account</Code> SQL function.
        </P>
        <Figure
          {...img("settings", "Settings page with profile tab selected", 1641, 779)}
          caption="Settings — seven tabs, from profile to danger zone"
        />
      </Section>

      {/* ---------------------------------------------------------- */}
      <Section id="admin" title="Admin panel">
        <P>
          A separate, noindexed area at <Code>/admin</Code> with its own sign-in, sidebar and theme
          switch (light / dark / default). It has seven sections: Overview, Users, Links, Bio pages,
          Events, Errors, Feedback and Audit log, with CSV export for users, links and events.
          Admin traffic is excluded from every number.
        </P>

        <H3>Overview</H3>
        <P>
          Twelve KPI cards, each compared with the previous period — total users, new users, active
          users, page views, unique visitors, sessions, average session length, bounce rate, links
          created, link clicks, QR downloads and client errors — plus DAU / WAU / MAU, live links,
          all-time clicks and published bio pages.
        </P>
        <P>
          A “Traffic over time” chart switches between page views, visitors, sign-ups, links created
          and link clicks across Today / 7 / 30 / 90 days, followed by top pages, referrers and
          visitor countries. All of it comes from three SQL functions (<Code>admin_overview</Code>,{" "}
          <Code>admin_timeseries</Code>, <Code>admin_breakdown</Code>) cached for 60 seconds.
        </P>
        <Figure
          {...img("admin-overview-redacted", "Admin overview with KPI cards and traffic over time chart", 1910, 1071)}
          caption="Admin overview — KPIs, DAU / WAU / MAU and traffic over time"
        />

        <H3>Users</H3>
        <P>
          Every account with its sign-in method, status, link / click / bio / event counts, country,
          join date and last seen. Search by email, name or user ID; filter by role and status; ban,
          change role or export to CSV. Each user has a detail page with everything stored about them.
        </P>
        <Figure
          {...img("admin-users-redacted", "Admin users table", 1909, 505)}
          caption="Users — personal details blurred for this case study"
        />

        <H3>Links</H3>
        <P>
          All links across all users, including archived and deleted ones — short link, destination,
          owner, status, clicks (with unique visitors), last click and created date — searchable by
          short code, URL, title, owner email or exact tag.
        </P>
        <Figure
          {...img("admin-links-redacted", "Admin links table across all users", 1910, 831)}
          caption="Links — every link in the system, with owner and click stats"
        />
        <P>
          Opening a link shows its QR code, owner and destination, then clicks (humans only), unique
          visitors, <B>bot hits — excluded from counts</B> — and all-time clicks, a clicks-per-day
          chart, and breakdowns by country, referrer, device, browser and operating system.
        </P>
        <Figure
          {...img("admin-link-detail-redacted", "Admin link detail with clicks per day and breakdowns", 1910, 1067)}
          caption="Link detail — bots are recorded but never counted"
        />

        <H3>Audit log</H3>
        <P>
          A read-only, append-only record of every admin action and every admin sign-in attempt —
          including denied ones (<Code>admin.login_denied</Code> with <Code>reason: not_admin</Code>).
          Each row stores when, the action, target, who did it, JSON details and a hashed IP.
        </P>
        <Figure
          {...img("admin-audit-log-redacted", "Admin audit log with user.delete, admin.login and admin.login_denied entries", 1910, 669)}
          caption="Audit log — targets and IDs blurred for this case study"
        />
      </Section>

      {/* ---------------------------------------------------------- */}
      <Section id="architecture" title="Architecture">
        <P>
          One Next.js 16 app on Vercel handles the landing page, dashboard, public redirects, bio
          pages, admin panel and all APIs. Supabase Postgres is the single source of truth, guarded
          by Row-Level Security and <Code>SECURITY DEFINER</Code> functions.
        </P>
        <Pipeline
          steps={[
            { title: "Browser / phone", note: "dashboard, bio page, QR scan" },
            { title: "proxy.ts", note: "session refresh, admin gate" },
            { title: "Next.js 16 on Vercel", note: "routes, server actions, after()" },
            { title: "Supabase Postgres", note: "RLS + RPC functions" },
          ]}
          caption="Request path — Upstash Redis rate-limits and Cloudinary stores QR images alongside"
        />

        <H3>Tech stack</H3>
        <Table
          head={["Layer", "Choice", "Why"]}
          rows={[
            ["Framework", "Next.js 16 App Router, React 19", <>Route handlers, server actions, <Code>after()</Code> for post-response work, and <Code>proxy.ts</Code> (the Next 16 replacement for middleware)</>],
            ["Styling / UI", "Tailwind CSS v4 (OKLCH tokens), shadcn/ui base-nova, @base-ui/react, Motion", "Accessible primitives with light and dark themes"],
            ["Auth", <>Supabase Auth via <Code>@supabase/ssr</Code> (email, Google, GitHub)</>, "Cookie sessions usable in the proxy, server components and route handlers"],
            ["Database", "Supabase Postgres with RLS, RPC functions, monthly partitions for bio events", "Ownership rules enforced in the database, not just in code"],
            ["File storage", "Supabase Storage (bio assets), Cloudinary (QR PNGs)", "Owner-scoped storage policies; CDN-hosted QR images"],
            ["Rate limiting", "Upstash Redis + @upstash/ratelimit (sliding windows)", "Works across serverless instances"],
            ["Short codes", "nanoid — 7 chars from a 57-character unambiguous alphabet (no 0/O, 1/l/I)", "Readable codes, about 1.9 trillion combinations"],
            ["Click parsing", "ua-parser-js, isbot, @vercel/functions geolocation", "Device, browser, OS, country and city without a paid IP database"],
            ["Validation", "Zod v4", "One schema shared by forms and route handlers"],
            ["Charts", "Recharts", "Sparklines, area charts, admin time series"],
            ["Testing", "Vitest + Node scripts against Supabase", "Unit tests for pure rules; RLS tests against a real database"],
            ["Review", "CodeRabbit", "Automated review on each pull request"],
          ]}
        />

        <H3>Folder structure</H3>
        <CodeBlock label="snaplnk.io/">{`snaplnk.io/
├── app/
│   ├── page.tsx                 landing page
│   ├── [shortCode]/route.ts     GET /:code → 302 redirect + click logging
│   ├── (auth)/signup/           email + Google + GitHub auth UI
│   ├── auth/                    server actions, OAuth callback
│   ├── bio/[username]/          public bio pages
│   ├── dashboard/               links, analytics, qr-codes, bio-pages, archived,
│   │                            expired, deleted, tags, domains, profile, settings
│   ├── admin/                   login, logout, (panel)/ users, links, bio-pages,
│   │                            events, errors, feedback, audit
│   ├── api/
│   │   ├── links/               list, create, [linkId] get/patch/delete
│   │   ├── analytics/overview/  daily clicks for charts
│   │   ├── bio/                 pages CRUD, publish, unpublish, username-check
│   │   ├── track/               first-party analytics intake
│   │   ├── feedback/  account/delete/
│   │   └── admin/               users, links, events (+ CSV export)
│   └── pricing/  faqs/  privacy/
├── components/
│   ├── landing/  dashboard/  admin/  analytics/
│   ├── bio/                     BioRenderer (public page renderer)
│   ├── dashboard/bio/editor/    BioEditor, BlockList, DesignPanel
│   └── ui/  theme/  providers/
├── lib/
│   ├── bio/                     blocks, themes, templates, embeds, contrast,
│   │                            reserved names, publish checks, plans, vCard
│   ├── admin/                   access, session, requireAdmin, queries, audit, CSV
│   ├── analytics/               client tracker, events, server, IP hashing
│   ├── validators/              url.ts (SSRF/phishing checks), link schemas
│   ├── utils/                   short codes, QR, Cloudinary, click parsing
│   ├── supabase/                browser, server, admin, middleware clients
│   └── ratelimit.ts  redis.ts  safeNext.ts  authErrors.ts  account.ts
├── supabase/
│   ├── migrations/              bio pages, bio RPCs, delete account,
│   │                            admin analytics, admin queries
│   └── tests/                   RLS and RPC test scripts
├── proxy.ts                     auth refresh, admin gate, route protection
├── vitest.config.ts
└── .coderabbit.yaml`}</CodeBlock>
      </Section>

      {/* ---------------------------------------------------------- */}
      <Section id="deep-dives" title="Deep dives">
        <H3 id="redirect">A. Link creation and the redirect path</H3>
        <P>
          Creating a link runs six guarded steps. Serving a link is a single indexed lookup followed
          by a 302, with logging pushed off the hot path. The database insert is the one place that
          decides uniqueness.
        </P>
        <H4>Create — POST /api/links</H4>
        <Timeline
          items={[
            { title: "Authenticate and rate-limit first", body: <>Reject anonymous users (403) and rate-limit before any parsing: 5 requests per 10 s burst, then 100 per hour per user (Upstash sliding windows).</> },
            { title: "Clean the metadata", body: "Title up to 200 chars, up to 20 unique tags of 40 chars each, and an expiry that must be in the future." },
            { title: "Validate the destination", body: <><Code>lib/validators/url.ts</Code>: http/https only, max 2,048 chars, no embedded credentials, no localhost, private, link-local or carrier-grade IP ranges, and no links pointing back at snaplnk.io itself.</> },
            { title: "Validate a custom alias", body: "3–30 chars of letters, digits, - or _, and not on the reserved list." },
            { title: "Insert and let the database decide", body: <>The <Code>UNIQUE(short_code)</Code> constraint is the judge. On a <Code>23505</Code> collision a random code is retried up to 5 times; a taken custom alias returns 409.</> },
            { title: "Generate the QR afterwards", body: "Only once the row exists: render the QR PNG, upload it to Cloudinary and save its URL. A QR failure never blocks the link." },
          ]}
        />
        <H4>Redirect — GET /:shortCode</H4>
        <Pipeline
          steps={[
            { title: "Lookup", note: "active, non-deleted link" },
            { title: "Check", note: "expired / over limit → /expired" },
            { title: "302", note: "visitor leaves immediately" },
            { title: "Log", note: "after the response" },
            { title: "Count", note: "bots stored, never counted" },
          ]}
          caption={<>Real clicks increment through the atomic <Code>increment_clicks</Code> RPC</>}
        />

        <H3 id="bio">B. Bio pages: a safe, versioned page builder</H3>
        <P>
          Bio pages are stored as JSON blocks (schema version 1), validated by Zod on the client, the
          API and the renderer.
        </P>
        <UL>
          <LI><B>Draft vs published.</B> The editor writes to <Code>draft</Code>. <Code>bio_publish_page</Code> snapshots draft + profile + theme into <Code>published</Code> atomically, guarded by the draft version so a stale browser tab cannot publish old content.</LI>
          <LI><B>No user HTML.</B> Embeds are parsed into a provider + id and the iframe URL is rebuilt from an allowlist (YouTube nocookie, Vimeo, Spotify, SoundCloud). Social handles are turned into safe outbound URLs.</LI>
          <LI><B>Accessible themes.</B> WCAG 2.x contrast helpers check user-picked colours; pre-publish checks separate blocking errors from warnings.</LI>
          <LI><B>Usernames.</B> A live availability RPC returns available, taken, reserved or invalid; a username history table records changes.</LI>
          <LI><B>Reserved names.</B> One list blocks app routes, infrastructure names and impersonation terms (anything containing “snaplnk”) for both usernames and link aliases. A unit test fails if the TypeScript list and the SQL seed drift apart.</LI>
          <LI><B>Analytics at scale.</B> <Code>bio_events</Code> is partitioned by month with an auto-creating partition function, plus a <Code>bio_daily_stats</Code> rollup.</LI>
          <LI><B>Plans as config.</B> <Code>lib/bio/plans.ts</Code> holds every limit (pages, blocks, gallery images, image size, retention) in one place; today bio pages are free.</LI>
        </UL>

        <H3 id="analytics">C. First-party, privacy-safe analytics</H3>
        <P>Product analytics are self-hosted instead of using a third-party script.</P>
        <UL>
          <LI>The browser tracker batches typed events and sends them with <Code>navigator.sendBeacon</Code> (with a <Code>fetch keepalive</Code> fallback); it can never throw or block the UI.</LI>
          <LI><Code>POST /api/track</Code> always answers 204 immediately and writes after the response with <Code>after()</Code>.</LI>
          <LI>It drops oversized or invalid payloads, bots, Do-Not-Track / Global Privacy Control visitors, rate-limited clients and (by default) admin traffic.</LI>
          <LI><B>Raw IPs are never stored.</B> They become a SHA-256 hash with a salt that rotates daily, so hashes cannot be joined across days.</LI>
          <LI>Client timestamps are only trusted within one hour; client errors are fingerprinted and grouped in <Code>error_log</Code>.</LI>
        </UL>

        <H3 id="admin-security">D. Admin panel with layered security</H3>
        <P>
          The admin area is protected by four independent checks, all funnelling into one pure,
          unit-tested function — <Code>evaluateAdminAccess</Code>.
        </P>
        <Pipeline
          steps={[
            { title: "1 · Env allowlist", note: "verified emails in ADMIN_EMAILS" },
            { title: "2 · Role sync", note: "mirrored into app_metadata" },
            { title: "3 · Admin session", note: "HMAC-signed cookie, 7 days" },
            { title: "4 · Re-checked everywhere", note: "proxy, layout, APIs, actions" },
          ]}
          caption="Each layer must pass independently; non-admins get a plain 404"
        />
        <OL
          items={[
            <><B>Identity from env only.</B> Admins are the verified emails in <Code>ADMIN_EMAILS</Code>; removal takes effect immediately.</>,
            <><B>Role sync on every sign-in.</B> The role is mirrored into <Code>app_metadata</Code>, which users cannot edit; banned accounts are refused.</>,
            <><B>Separate admin session.</B> <Code>/admin/login</Code> issues a signed cookie (<Code>userId.issuedAt.hmac</Code>, Web Crypto) valid for 7 days, independent of the normal Supabase session.</>,
            <><B>Re-checked everywhere.</B> <Code>proxy.ts</Code>, the <Code>/admin</Code> layout, every admin API and server action call <Code>requireAdmin()</Code> again. Non-admins hitting admin APIs get a plain 404, and every admin page sends <Code>X-Robots-Tag: noindex</Code>.</>,
          ]}
        />
        <P>
          Every admin action and denied login is written to the append-only <Code>audit_log</Code>.
          URL params are parsed with Zod <Code>.catch()</Code>, so a hand-edited URL can never break
          a page.
        </P>

        <H3 id="auth">E. Auth and account lifecycle</H3>
        <P>
          Supabase handles email / password and OAuth. <Code>safeNext()</Code> only accepts same-site
          paths, so <Code>?next=</Code> cannot be used as an open redirect, and the proxy recovers
          sign-ins that Supabase drops on the Site URL (<Code>/?code=</Code>). Users can delete their
          own account through the <Code>delete_my_account</Code> SQL function.
        </P>
      </Section>

      {/* ---------------------------------------------------------- */}
      <Section id="challenges" title="Challenges and how I solved them">
        <P>
          The hardest problems were keeping a public shortener from becoming an abuse tool,
          generating unique codes correctly under Row-Level Security, and letting users build public
          pages without opening an XSS hole.
        </P>

        <H3>1. Unique short codes under Row-Level Security</H3>
        <P>
          <B>Problem.</B> The obvious approach — SELECT to check if the code exists, then INSERT —
          silently failed: RLS hides other users&apos; rows, so the check always said a code was free.
          It is also a race between two requests.
        </P>
        <P>
          <B>Fix.</B> Drop the pre-check and let the database&apos;s <Code>UNIQUE(short_code)</Code>{" "}
          constraint decide. A random code that hits error <Code>23505</Code> is regenerated up to 5
          times; a taken custom alias returns a clear 409. With a 57-character alphabet and 7
          characters there are ~1.9 trillion codes, so retries are rare.
        </P>

        <H3>2. Stopping abuse of a public URL shortener</H3>
        <P>
          <B>Problem.</B> Shorteners are used to hide phishing links, scan internal networks and spam
          the service.
        </P>
        <UL>
          <LI><B>Dangerous destinations.</B> <Code>validateDestinationUrl</Code> allows only http/https; blocks <Code>javascript:</Code>, <Code>data:</Code> and <Code>file:</Code>, embedded credentials (<Code>google.com@evil.com</Code>), localhost, private and link-local IP ranges, single-label intranet hosts, and links back to snaplnk.io (redirect loops).</LI>
          <LI><B>Scripted flooding.</B> Upstash sliding-window limits (5 per 10 s burst, 100 per hour per user), applied before any parsing or database work, with standard rate-limit headers.</LI>
          <LI><B>Redis outages.</B> An explicit policy: guests fail closed (reject), signed-in users fail open (allow), development always allows. The admin limiter falls back to an in-memory window.</LI>
          <LI><B>Anonymous links.</B> Guest links (30-day expiry, IP-keyed limits) were too easy to abuse. Since 12 Nov 2026 link creation needs a real account, and a signed-out visitor goes through sign-up straight into the create form with the URL pre-filled.</LI>
          <LI><B>Impersonation.</B> A reserved-name list for aliases and usernames, including anything containing “snaplnk”.</LI>
        </UL>
        <Table
          head={["Who", "Redis is down", "Why"]}
          rows={[
            ["Guest", "Fail closed — reject", "Anonymous traffic is the main abuse vector"],
            ["Signed-in user", "Fail open — allow", "A real account is accountable; don't punish users for an outage"],
            ["Admin", "In-memory window", "Still limited, without depending on Redis"],
            ["Development", "Always allow", "No Redis needed locally"],
          ]}
        />

        <H3>3. Fast redirects with accurate analytics</H3>
        <P>
          <B>Problem.</B> Logging device, geo and referrer for each click must not slow the redirect,
          and bots (link previews, crawlers) inflate counts.
        </P>
        <P>
          <B>Fix.</B> The redirect returns the 302 while logging runs separately. <Code>isbot</Code>{" "}
          flags crawlers: they are stored for transparency but never increment the counter. Counts
          go through an atomic <Code>increment_clicks</Code> RPC instead of read-modify-write, unique
          visitors are counted through a hashed visitor id, and geolocation comes from Vercel&apos;s edge
          headers — no paid IP database.
        </P>

        <H3>4. Orphaned QR images</H3>
        <P>
          <B>Problem.</B> Generating the QR code first meant a failed insert left an unused image on
          Cloudinary, and a Cloudinary hiccup blocked link creation.
        </P>
        <P>
          <B>Fix.</B> Insert the link first, then generate and upload the QR, then update the row. A
          QR failure is logged and the link still works. Deleting a link also deletes its Cloudinary
          image through the stored public id.
        </P>

        <H3>5. Letting users publish pages safely</H3>
        <P>
          <B>Problem.</B> A link-in-bio builder lets anyone publish content on my domain, which
          invites XSS, unreadable colour choices and race conditions between tabs.
        </P>
        <UL>
          <LI><B>XSS.</B> No user HTML anywhere. Embeds go through a provider allowlist and the iframe URL is rebuilt from an id.</LI>
          <LI><B>Stale tabs.</B> Publishing is a single SQL function guarded by the draft version.</LI>
          <LI><B>No service-role key for bio.</B> Privileged actions are <Code>SECURITY DEFINER</Code> functions that check ownership themselves, RLS blocks anonymous users entirely, and a Node test script checks these policies against a real database.</LI>
          <LI><B>Colour and design issues.</B> Several rounds fixed theme colours and contrast; WCAG contrast helpers and pre-publish warnings now catch them.</LI>
          <LI><B>Too many templates.</B> Five early templates (business, creator, developer, minimal, neon) were replaced by two focused ones — Link Hub and Contact Card — in pull request 9.</LI>
          <LI><B>Name lists drifting.</B> A unit test compares the TypeScript reserved list with the SQL seed.</LI>
        </UL>

        <H3>6. Auth redirects and open-redirect risk</H3>
        <P>
          <B>Problem.</B> OAuth sign-ins sometimes landed on the home page with a <Code>?code=</Code>{" "}
          instead of finishing (31 Jul 2026), and the callback trusted the <Code>next</Code> parameter,
          which allowed redirects to other sites.
        </P>
        <P>
          <B>Fix.</B> <Code>proxy.ts</Code> forwards any <Code>/?code=</Code>, <Code>token_hash</Code>{" "}
          or <Code>error_code</Code> to <Code>/auth/callback</Code>; <Code>safeNext()</Code> rejects
          absolute URLs, <Code>{"//host"}</Code>, backslashes and control characters, backed by unit
          tests (12 Nov 2026).
        </P>
        <CodeBlock label="lib/safeNext.ts — what gets rejected">{`safeNext("/dashboard/links")        // → "/dashboard/links"   ✓ same-site path
safeNext("https://evil.com")        // → "/dashboard"          ✗ absolute URL
safeNext("//evil.com")              // → "/dashboard"          ✗ protocol-relative
safeNext("/\\\\evil.com")             // → "/dashboard"          ✗ backslash trick
safeNext("/foo\\u0000bar")           // → "/dashboard"          ✗ control characters`}</CodeBlock>

        <H3>7. Securing the admin panel</H3>
        <P>
          <B>Problem.</B> An admin panel with user bans, exports and raw events is the most valuable
          target in the app, and a single check in one place is easy to bypass.
        </P>
        <P>
          <B>Fix.</B> Defence in depth: admin identity only from an env list of verified emails, role
          mirrored into non-editable <Code>app_metadata</Code>, a separate HMAC-signed 7-day admin
          session, re-checks in the proxy, layout, APIs and server actions, 404s for non-admins,
          noindex headers and an append-only audit log. The decision itself is one pure function with
          unit tests. Sign-up and UI fixes followed in pull requests 14 and 15.
        </P>

        <H3>8. Building on Next.js 16</H3>
        <P>
          <B>Problem.</B> Next.js 16 changed conventions — <Code>middleware.ts</Code> became{" "}
          <Code>proxy.ts</Code>, and <Code>after()</Code> replaces ad-hoc background promises — and
          most examples online target older versions.
        </P>
        <P>
          <B>Fix.</B> I read the docs bundled in <Code>node_modules/next/dist/docs</Code> and kept
          routing rules (<Code>lib/bio/proxyRules.ts</Code>, <Code>lib/admin/proxyRules.ts</Code>) as
          pure functions so they can be unit-tested outside the framework.
        </P>

        <H3>9. Shipping large features as one solo developer</H3>
        <P>
          <B>Problem.</B> The work happened in two bursts (21 Jul – 1 Aug and 11–12 Nov 2026). An
          early 53-file merge (pull request 6) shipped features that did not show up in the UI, and it
          was hard to tell which change caused it.
        </P>
        <P>
          <B>Fix.</B> I switched to small, focused pull requests (bio pages, bio UI, colours, dashboard
          CRUD, settings, admin panel, admin fixes), added CodeRabbit for automated review, and added
          Vitest so rules could be checked without clicking through the app.
        </P>
      </Section>

      {/* ---------------------------------------------------------- */}
      <Section id="results" title="Results, learnings and next steps">
        <P>
          In about four months I took snaplnk.io from first commit to a full product — shortener, QR
          codes, analytics, a bio-page builder and an admin panel — with tests around every security
          rule.
        </P>

        <H4>What shipped</H4>
        <UL>
          <LI>Short links with custom aliases, tags, expiry, archive, soft delete and restore, plus auto-generated QR codes.</LI>
          <LI>Click analytics by day, device, browser, OS, country, city and referrer, with bot filtering.</LI>
          <LI>A free link-in-bio builder with 7 block types, 4 embed providers, 2 templates, theming and draft / publish.</LI>
          <LI>A first-party analytics pipeline and an admin panel with 7 sections, CSV exports and an audit log.</LI>
          <LI>5 Supabase migrations (RLS policies, <Code>SECURITY DEFINER</Code> functions, partitioned event tables) and ~97 Vitest test cases.</LI>
        </UL>

        <H4>What I learned</H4>
        <OL
          items={[
            <><B>Let the database enforce invariants.</B> Unique constraints and atomic RPCs beat application-level checks, especially under RLS.</>,
            <><B>Design for abuse from day one.</B> Validation, rate limits and reserved names are cheaper than cleaning up a blacklisted domain.</>,
            <><B>Never render user HTML.</B> Parse inputs into structured data and rebuild output from your own templates.</>,
            <><B>Privacy can be a design constraint,</B> not an afterthought: hashed, daily-salted IPs still give useful analytics.</>,
            <><B>Put security decisions in pure functions</B> so they can be unit-tested, then call them from every layer.</>,
            <><B>Small pull requests</B> are easier to debug than one large merge.</>,
          ]}
        />

        <H4>Next steps</H4>
        <UL>
          <LI>Wrap click logging in the redirect route with <Code>after()</Code> so serverless platforms never drop it (<Code>/api/track</Code> already does this).</LI>
          <LI>Add the <Code>links</Code> and <Code>click_events</Code> tables and their RLS policies to the migrations folder.</LI>
          <LI>Password-protected links and a UTM builder (columns already exist).</LI>
          <LI>Custom domains, teams and API keys (pages already planned in the dashboard).</LI>
          <LI>Paid plans using the limits already defined in <Code>lib/bio/plans.ts</Code>.</LI>
        </UL>
      </Section>

      {/* ---------------------------------------------------------- */}
      <Section id="references" title="Links and references">
        <UL>
          <LI><A href={LINKS.site}>snaplnk.io</A> · <A href={LINKS.github}>Source code</A> · <A href={LINKS.creator}>Creator site</A></LI>
          <LI><A href="https://nextjs.org/docs/app/api-reference/functions/after">Next.js <Code>after()</Code> API</A></LI>
          <LI><A href="https://supabase.com/docs/guides/database/postgres/row-level-security">Supabase Row Level Security</A></LI>
          <LI><A href="https://supabase.com/docs/guides/auth/server-side/nextjs">Supabase Auth with Next.js (SSR)</A></LI>
          <LI><A href="https://upstash.com/docs/redis/sdks/ratelimit-ts/overview">Upstash Ratelimit</A></LI>
          <LI><A href="https://zelark.github.io/nano-id-cc/">nanoid collision calculator</A></LI>
          <LI><A href="https://owasp.org/www-community/attacks/Server_Side_Request_Forgery">OWASP: Server-Side Request Forgery</A></LI>
          <LI><A href="https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html">OWASP: Unvalidated redirects and forwards</A></LI>
          <LI><A href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html">WCAG contrast guidance</A></LI>
          <LI><A href="https://cloudinary.com/documentation/node_integration">Cloudinary Node SDK</A></LI>
        </UL>
      </Section>
    </div>
  )
}

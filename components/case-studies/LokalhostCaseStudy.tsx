import {
  A, B, Callout, Code, CodeBlock, Facts, Figure, FigurePair, H3, H4, LI, Lead, OL, P, Section, Stats, Table, UL,
} from "./prose"

/* ------------------------------------------------------------------ */
/* Links — update here if the live domain changes                      */
/* ------------------------------------------------------------------ */
const SITE = "https://lokalhost-io-eta.vercel.app"
const LINKS = {
  site: SITE,
  docs: `${SITE}/docs`,
  mobile: `${SITE}/mobile`,
  pricing: `${SITE}/pricing`,
  github: "https://github.com/Hilal-11",
  creator: "/",
}

const IMG = "/case-studies/lokalhost-case-study"
const img = (name: string, alt: string, width: number, height: number) => ({
  src: `${IMG}/${name}.png`, alt, width, height,
})

export const lokalhostMeta = {
  title: "lokalhost.io — Product Case Study",
  subtitle:
    "A developer ecosystem I designed and built solo: a CLI-installable component registry, a React Native + Flutter mobile kit, templates, and a Pro tier billed through Razorpay.",
}

export const lokalhostToc = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem and goals" },
  { id: "walkthrough", label: "Product walkthrough" },
  { id: "architecture", label: "Architecture" },
  { id: "deep-dives", label: "Deep dives" },
  { id: "challenges", label: "Challenges" },
  { id: "results", label: "Results and learnings" },
  { id: "references", label: "Links and references" },
]

export default function LokalhostCaseStudy() {
  return (
    <div className="space-y-14">
      {/* ---------------------------------------------------------- */}
      <section id="overview" className="scroll-mt-24 space-y-6">
        <Figure
          {...img("landing-hero", "lokalhost.io landing page hero with bento grid", 1910, 1070)}
          caption="The lokalhost.io landing page"
          priority
        />

        <Lead>
          lokalhost.io is a developer ecosystem I designed and built solo: a shadcn-compatible
          component registry installable from the CLI, a React Native + Flutter mobile kit, web
          templates and design kits, and a paid Pro tier billed through Razorpay.
        </Lead>

        <div className="flex flex-wrap gap-2">
          {[
            ["Live site", LINKS.site],
            ["Docs", LINKS.docs],
            ["Mobile kit", LINKS.mobile],
            ["Pricing", LINKS.pricing],
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
            { value: "~50k", label: "lines of TypeScript, TSX, MDX and Dart" },
            { value: "420+", label: "source files" },
            { value: "52", label: "mobile items (React Native + Flutter)" },
            { value: "15", label: "merged pull requests" },
          ]}
        />

        <Facts
          rows={[
            ["Role", "Solo founder, designer and full-stack engineer"],
            ["Timeline", "Jun 2026 – Nov 2026 (first commit 29 Jun 2026; billing shipped 13 Nov 2026)"],
            ["Web stack", "Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, Radix UI"],
            ["Docs", "Fumadocs (MDX), Shiki syntax highlighting"],
            ["Backend", "Supabase (Postgres, Auth, Row-Level Security), MongoDB / Mongoose for catalog content"],
            ["Payments", "Razorpay (orders, subscriptions, webhooks) behind a provider-agnostic billing layer"],
            ["Distribution", <>shadcn registry JSON at <Code>/r/*.json</Code>, installed with <Code>npx shadcn add</Code></>],
            ["Mobile", "26 React Native (Expo) items and 26 Flutter items"],
          ]}
        />
      </section>

      {/* ---------------------------------------------------------- */}
      <Section id="problem" title="Problem and goals">
        <P>
          Developers building AI-era products rebuild the same UI pieces for every project, and most
          libraries stop at copy-paste snippets for one platform.
        </P>
        <UL>
          <LI>Component libraries are usually web-only; mobile teams in React Native or Flutter start from zero.</LI>
          <LI>Copy-paste code drifts: dependencies, the <Code>cn</Code> helper and imports are easy to miss.</LI>
          <LI>Templates and design kits live in separate products with separate logins and payments.</LI>
        </UL>
        <H4>Goals I set for the product</H4>
        <OL
          items={[
            "One command installs any component, with its dependencies, into the user's own project.",
            "Every component has a live preview, source view, props table and manual install path.",
            "The same catalog covers web (React / Next.js) and mobile (React Native, Flutter).",
            "A Pro tier that charges Indian customers in INR, monthly or yearly, without ever granting access twice or losing a paid user.",
            "Previews stay public so visitors can try before they buy; only account pages require sign-in.",
          ]}
        />
      </Section>

      {/* ---------------------------------------------------------- */}
      <Section id="walkthrough" title="Product walkthrough">
        <P>The product has seven surfaces.</P>

        <H3>1. Landing page</H3>
        <P>
          Bento grids for components, templates and designs, a social dock, an iPhone device preview
          and CTA sections, including a CLI section that shows the install flow right on the home page.
        </P>
        <Figure
          {...img("cli-install-section", "Landing page CLI section with terminal commands", 1896, 1071)}
          crop="1896/610"
          caption="“Install components straight into your project” — the CLI section on the landing page"
        />

        <H3>2. Component docs</H3>
        <P>
          Fumadocs-powered pages with a custom shell, sidebar and table of contents. Each component
          page has a live preview, a code tab with Shiki highlighting, a CLI tab with
          npm / pnpm / yarn / bun switching, a manual install tab and a props table.
        </P>
        <Figure
          {...img("component-preview-install", "Download Button docs page with Preview tab and CLI install tabs", 1525, 1007)}
          caption="Preview / Code tabs and the CLI install block with package-manager switcher"
        />
        <Figure
          {...img("code-block-package-managers", "Code Block component page with package manager dropdown", 1907, 1071)}
          caption="The install command switches between npm, pnpm, yarn and bun"
        />
        <Figure
          {...img("props-table", "Props table for the Download Button component", 1730, 1071)}
          caption="Every component ships a typed props table"
        />

        <H3>3. Component catalog</H3>
        <P>
          Current web components: Download Button, Code Block, Code Preview Block, Install Command,
          Copy Page Markdown, Model Picker, Models Selector and Composer Actions (micro AI components).
        </P>
        <Figure
          {...img("docs-overview", "Docs overview grid of all React UI components", 1906, 1071)}
          caption="The /docs overview — every component with a live thumbnail"
        />

        <H3>4. Mobile kit</H3>
        <P>
          A separate docs shell for React Native and Flutter: components (button, card, bottom sheet,
          tabs, toast, skeleton), blocks (stats grid, story rail, pricing plans) and full screens
          (onboarding, sign-in, chat, feed, cart, product, profile, settings). Each item renders
          inside a phone frame with a framework toggle.
        </P>
        <Figure
          {...img("mobile-overview", "Mobile UI overview with browse-by-category phone previews", 1910, 1063)}
          caption="/mobile — browse by category"
        />
        <Figure
          {...img("mobile-all-items", "All mobile items with type, category and platform filters", 1910, 1071)}
          caption="All items, filterable by type, category, platform and Free / Pro"
        />
        <Figure
          {...img("mobile-onboarding-preview", "Onboarding screen flow in three phone frames with React Native / Flutter toggle", 1910, 1071)}
          caption="A three-screen onboarding flow, with the React Native / Flutter toggle and iOS / Android switch"
        />
        <Figure
          {...img("mobile-product-screen", "Product screen rendered inside an iPhone 15 Pro frame", 1910, 1071)}
          caption="A Pro commerce screen inside the phone-frame preview"
        />

        <H3>5. Templates and designs</H3>
        <P>Filtered galleries with sorting, detail pages per template and premium badges.</P>
        <FigurePair
          images={[
            img("template-detail", "Keep notes app landing page template detail page", 1910, 1071),
            img("checkout-modal", "Unlock template checkout modal with yearly and monthly options", 521, 579),
          ]}
          caption="A template detail page, and the checkout that opens from “Unlock with Pro”"
        />

        <H3>6. Auth</H3>
        <P>
          Email + password, OAuth and email confirmation through Supabase. After login the user
          returns to where they started, including an open checkout.
        </P>
        <FigurePair
          images={[
            img("login-light", "Login page in light mode", 1910, 1071),
            img("login-dark", "Login page in dark mode", 857, 938),
          ]}
          caption="Sign-in with Google, GitHub or email — light and dark"
        />

        <H3>7. Pricing, checkout and billing</H3>
        <P>
          Monthly (₹999 / month, auto-renews) or yearly (₹7,999 one-time, “Save 33%”). Razorpay
          Checkout opens in a modal; the billing page shows status, renewal date and cancel.
        </P>
        <Figure
          {...img("pricing", "Pricing page with Free, Pro Monthly and Pro Yearly plans", 1904, 1071)}
          caption="Free, Pro Monthly and Pro Yearly"
        />
      </Section>

      {/* ---------------------------------------------------------- */}
      <Section id="architecture" title="Architecture">
        <P>
          One Next.js 15 app serves the marketing site, the docs, the static registry JSON and the
          billing API. Supabase holds users and money; MongoDB holds catalog content.
        </P>

        <H3>Tech stack</H3>
        <Table
          head={["Layer", "Choice", "Why"]}
          rows={[
            ["Framework", "Next.js 15 App Router, React 19", "Server components, route groups, API routes and middleware in one deploy"],
            ["Styling", "Tailwind CSS v4, Radix UI, Framer Motion", "Same primitives the shadcn ecosystem expects, so installed components just work"],
            ["Docs", "Fumadocs MDX, Shiki", "Typed MDX collections (docs, mobile, authdocs, backgrounds) with frontmatter validated by Zod"],
            ["Registry", "Custom build script (tsx) emitting shadcn registry-item JSON", <>No extra infra: JSON is served from <Code>/r</Code> with a one-year immutable cache header</>],
            ["Auth", <>Supabase Auth via <Code>@supabase/ssr</Code></>, "Cookie sessions that work in middleware, server actions and route handlers"],
            ["Billing data", "Supabase Postgres with RLS and security-definer functions", "Atomic, idempotent grants inside the database"],
            ["Payments", "Razorpay (Stripe kept behind the same interface)", "INR, UPI and Indian cards; monthly subscriptions and one-time orders"],
            ["Content", "MongoDB + Mongoose", "Templates, designs, enquiries, feedback"],
            ["Email", "Resend, Nodemailer", "Contact and transactional mail"],
            ["Data fetching", "TanStack Query with persisted cache", "Fast template galleries"],
            ["Hosting", "Vercel (+ Analytics, Blob, next-video)", "Zero-config deploys from GitHub"],
          ]}
        />

        <H3>Folder structure</H3>
        <CodeBlock label="lokalhost_io/">{`lokalhost_io/
├── app/
│   ├── (auth)/                 login, sign-up
│   ├── (main)/                 site, docs, templates, designs, pricing, checkout, account
│   │   ├── api/billing/        checkout, verify, status, cancel
│   │   ├── api/webhooks/razorpay/
│   │   ├── docs/[[...slug]]/   Fumadocs pages
│   │   └── preview/[[...slug]]/  isolated component previews
│   └── (mobile)/mobile/        React Native + Flutter docs shell
├── components/
│   ├── lokalhost_io/           the components shipped through the registry
│   ├── mdx/                    preview, code view, install tabs, props table
│   ├── docs/  mobile/          docs shells, sidebars, phone frame
│   ├── billing/                checkout dialog, billing UI
│   └── landing/  ui/  magicui/ ...
├── content/
│   ├── docs/                   component MDX pages
│   └── mobile/                 installation, CLI, theming, changelog
├── registry/
│   ├── schema.ts               Zod schema for registry entries
│   ├── registry-components.ts, registry-lib.ts, index.ts
│   └── mobile/react-native/  mobile/flutter/   26 + 26 items
├── public/r/                   generated registry JSON (download-button.json, ...)
├── scripts/
│   ├── build-registry.ts       npm run build:registry
│   └── razorpay-setup.ts       npm run billing:check
├── lib/
│   ├── billing/                provider interface, razorpay, entitlements, logging
│   ├── supabase/               browser, server, admin, middleware clients
│   ├── mobile/                 catalog, install commands, nav
│   ├── models/                 Mongoose models
│   └── registry.ts  safe-redirect.ts  plans.ts  env.ts
├── supabase/migrations/        billing schema, RLS, grant functions
├── middleware.ts               session refresh, route protection, OAuth fallback
└── source.config.ts            Fumadocs collections`}</CodeBlock>
      </Section>

      {/* ---------------------------------------------------------- */}
      <Section id="deep-dives" title="Deep dives">
        <H3 id="registry">A. Component registry and CLI distribution</H3>
        <P>
          Instead of publishing my own npm package, I made lokalhost.io a shadcn-compatible registry:
          users run the shadcn CLI they already have, pointed at my JSON.
        </P>
        <OL
          items={[
            <>Each component is declared once in <Code>registry/registry-components.ts</Code> (name, type, dependencies, registryDependencies, file paths), validated by a Zod schema in <Code>registry/schema.ts</Code>.</>,
            <><Code>npm run build:registry</Code> runs <Code>scripts/build-registry.ts</Code>, which reads every source file, inlines its content and writes <Code>{"public/r/<name>.json"}</Code> with the official <Code>$schema</Code>.</>,
            <>Next.js serves <Code>/r/*</Code> with <Code>Cache-Control: public, max-age=31536000, immutable</Code>.</>,
            <>The docs build the install command per package manager from <Code>lib/registry.ts</Code>, so every page shows the right command for npm, pnpm, yarn or bun.</>,
          ]}
        />
        <CodeBlock label="terminal">{`npx shadcn@latest add https://lokalhost.io/r/download-button.json`}</CodeBlock>
        <P>
          For mobile, React Native items use a namespaced registry (<Code>{"@lokalhost/<slug>"}</Code>,
          set once in <Code>components.json</Code>), and Flutter items install through{" "}
          <Code>{"npx lokalhost@latest add <slug> --flutter"}</Code>, which writes into{" "}
          <Code>lib/widgets</Code> and runs <Code>flutter pub add</Code>.
        </P>
        <Figure
          {...img("mobile-onboarding-code", "Onboarding screen code view and namespaced install command", 1910, 1071)}
          caption={<>A mobile screen&apos;s code view, installed with <Code>npx shadcn@latest add @lokalhost/onboarding</Code></>}
        />

        <H3 id="payments">B. Payments and subscriptions with Razorpay</H3>
        <Callout>
          Access is never granted from the browser: the browser only reports a payment, the server
          verifies it and Postgres decides. Whichever of the verify call or the webhook arrives first
          grants access; the second finds the payment already recorded and does nothing.
        </Callout>
        <UL>
          <LI><B>Plans.</B> <Code>pro_monthly</Code> (₹999, recurring Razorpay subscription) and <Code>pro_yearly</Code> (₹7,999 one-time order, 365 days). Prices are read from the <Code>plans</Code> table on the server; the client copy in <Code>lib/plans.ts</Code> is display-only.</LI>
          <LI><B>Checkout.</B> <Code>POST /api/billing/checkout</Code> creates an order or subscription and returns the public key and ids to open Razorpay Checkout.</LI>
          <LI><B>Verify.</B> <Code>POST /api/billing/verify</Code> checks the HMAC-SHA256 signature with a timing-safe comparison, fetches the payment from Razorpay and grants access.</LI>
          <LI><B>Webhook.</B> <Code>/api/webhooks/razorpay</Code> verifies the signature on the raw body, records the event in <Code>webhook_events</Code> and processes it once. A failure returns 500 so Razorpay retries.</LI>
          <LI><B>Entitlements.</B> Three Postgres functions (<Code>grant_for_order</Code>, <Code>grant_for_subscription_charge</Code>, <Code>revoke_for_payment</Code>) are the only code that grants or removes access. They run as security definer and only the service role may call them.</LI>
          <LI><B>Stacking.</B> Buying a year while on monthly adds the year after the current access ends and schedules the monthly plan to cancel at cycle end.</LI>
          <LI><B>Self-service.</B> <Code>/account/billing</Code> shows status and lets the user cancel; they keep access until the paid period ends.</LI>
          <LI><B>Provider-agnostic.</B> <Code>lib/billing/provider.ts</Code> defines a <Code>BillingProvider</Code> interface, so Stripe can be added without touching routes or SQL.</LI>
        </UL>

        <H3 id="auth">C. Authentication and safe redirects</H3>
        <P>
          Supabase Auth handles email / password and OAuth; <Code>middleware.ts</Code> refreshes the
          session on every request and protects only <Code>/account</Code>. A buyer who clicks “Buy”
          while logged out goes to <Code>/login?next=/pricing&amp;plan=pro_yearly</Code> and comes back
          with checkout opening automatically. <Code>lib/safe-redirect.ts</Code> rejects absolute URLs,{" "}
          <Code>{"//evil.com"}</Code>, backslashes and control characters, which closes open-redirect holes.
        </P>

        <H3 id="docs-system">D. Docs and preview system</H3>
        <P>
          Reusable MDX components (<Code>Preview</Code>, <Code>CodeView</Code>, <Code>InstallationTabs</Code>,{" "}
          <Code>ManualInstallation</Code>, <Code>PropsTable</Code>) render every component page from the
          same parts. <Code>{"/preview/[[...slug]]"}</Code> renders a component alone for iframe previews,
          and <Code>/mobile</Code> generates its pages from <Code>lib/mobile/catalog.ts</Code> instead of
          one MDX file per item.
        </P>
      </Section>

      {/* ---------------------------------------------------------- */}
      <Section id="challenges" title="Challenges and how I solved them">
        <P>
          The two hardest problems were shipping a registry that the shadcn CLI accepts on every
          machine, and taking real money without ever granting access twice or losing a paying user.
        </P>

        <H3>1. Building a component registry with CLI install</H3>
        <P>
          <B>Problem.</B> I wanted <Code>{"npx shadcn add <url>"}</Code> to install my components, but
          the CLI is strict about the JSON it accepts and failed in ways that were hard to trace
          (2–5 Jul 2026).
        </P>
        <UL>
          <LI><B>Unsafe file path errors.</B> File paths with a leading <Code>/</Code> made the CLI abort with “unsafe file path”, because it treats them as absolute. Fix: a <Code>toRelative()</Code> step in the build script so every path and target is relative.</LI>
          <LI><B>Builds that lied.</B> Early versions caught write errors and still printed “done”, so a broken registry reached production. Fix: no silent catches; any missing source file or duplicate name throws, and the script exits with code 1 so the Vercel build fails.</LI>
          <LI><B>Wrong URLs in install commands.</B> <Code>NEXT_PUBLIC_BASE_URL</Code> was set with a protocol in one environment and without in another. Fix: <Code>lib/registry.ts</Code> normalises the base URL once and every command is built from it.</LI>
          <LI><B>Source files missing in production.</B> The code view reads component source at runtime, but Vercel&apos;s file tracing dropped those files. Fix: <Code>outputFileTracingIncludes</Code> for <Code>components/lokalhost_io/**</Code>.</LI>
          <LI><B>Flutter is not a shadcn target.</B> The shadcn CLI only installs JS/TS. Fix: React Native uses a namespaced shadcn registry, and Flutter gets its own <Code>lokalhost</Code> CLI command plus a Manual tab as a fallback.</LI>
          <LI><B>Keeping docs and registry in sync.</B> Fix: one registry entry drives the JSON, the CLI command, the manual dependency list and the docs page.</LI>
        </UL>

        <H3>2. Payment integration with Razorpay</H3>
        <P>
          <B>Problem.</B> Payments arrive through two paths at once (the browser&apos;s verify call and
          Razorpay&apos;s webhook). Events can arrive late, twice or out of order, and any mistake
          either gives free access or takes money without giving access. It took four iterations
          (pull requests 12–15, 13 Nov 2026).
        </P>
        <UL>
          <LI><B>Race between verify and webhook.</B> Both could grant the same payment. Fix: all grants go through Postgres functions that take a per-user advisory lock and use <Code>ON CONFLICT (provider_payment_id) DO NOTHING</Code>, so repeat calls are harmless.</LI>
          <LI><B>Duplicate and out-of-order webhooks.</B> Fix: a <Code>webhook_events</Code> table keyed by Razorpay&apos;s event id (or a SHA-256 of the body) with <Code>processed_at</Code> and <Code>attempts</Code>; a finished subscription is never revived by a late event, and “authenticated” never downgrades an “active” subscription.</LI>
          <LI><B>Signature checks failing.</B> Parsing JSON before verifying changes the bytes. Fix: read the raw body first, verify HMAC-SHA256 with <Code>timingSafeEqual</Code>, then parse.</LI>
          <LI><B>Price tampering.</B> Fix: the amount is always read from the <Code>plans</Code> table on the server, and the SQL rejects any payment whose amount or currency does not match.</LI>
          <LI><B>Payments refunded automatically.</B> If auto-capture is off, Razorpay refunds authorized payments. Fix: a capture fallback that captures through the API when the amount matches.</LI>
          <LI><B>Double clicks creating two orders.</B> Fix: an unpaid order or subscription created in the last 30 minutes is reused.</LI>
          <LI><B>Subscription activation lag.</B> Right after payment the subscription is often not “active” yet. Fix: verify polls up to 3 times, 1.2 s apart, and the webhook grants it if that window passes.</LI>
          <LI><B>Monthly and yearly overlap.</B> Fix: monthly is blocked while any access is live; yearly stacks after current access and schedules the monthly plan to cancel at cycle end.</LI>
          <LI><B>Test vs live mode confusion.</B> Fix: <Code>npm run billing:check</Code> reports which mode the keys are in and can create the ₹999 plan in that mode.</LI>
          <LI><B>Payment-gateway approval.</B> Fix: added Terms, Privacy, Refund and Shipping policy pages.</LI>
        </UL>

        <H3>3. Auth redirects that silently broke</H3>
        <P>
          <B>Problem.</B> After OAuth, users sometimes landed on the home page instead of the checkout
          they started. Supabase matches redirect URLs exactly, so adding <Code>?next=</Code> made the
          allowed callback URL stop matching and Supabase fell back to the Site URL.
        </P>
        <P>
          <B>Fix.</B> The return path travels in an httpOnly cookie (<Code>lk_next</Code>, 30 minutes)
          instead of the URL, middleware forwards any stray <Code>/?code=</Code> to{" "}
          <Code>/auth/callback</Code>, and the callback origin comes from the request so localhost and
          production both work.
        </P>

        <H3>4. Two mobile frameworks, one catalog</H3>
        <P>
          <B>Problem.</B> Keeping 26 React Native items and 26 Flutter items consistent, with docs,
          previews and install steps, is double the work.
        </P>
        <P>
          <B>Fix.</B> A single typed catalog (<Code>lib/mobile/catalog.ts</Code>) generates every
          component, block and screen page; one phone-frame preview and a framework toggle render
          both. Old <Code>/mobile/*</Code> URLs keep working through redirects in{" "}
          <Code>next.config.ts</Code>.
        </P>

        <H3>5. Scope and momentum as a solo builder</H3>
        <P>
          <B>Problem.</B> The product spans components, templates, designs, mobile, auth and billing,
          built alone, with a four-month gap between July and November 2026.
        </P>
        <P>
          <B>Fix.</B> I shipped in vertical slices behind feature branches and pull requests (registry
          first, then docs, then mobile, then billing), and wrote explanatory comments in the code so
          I could pick the work back up quickly.
        </P>
      </Section>

      {/* ---------------------------------------------------------- */}
      <Section id="results" title="Results, learnings and next steps">
        <P>
          In about five months I took lokalhost.io from first commit to a live product with
          CLI-installable components, a two-framework mobile kit and working INR billing.
        </P>

        <H4>What shipped</H4>
        <UL>
          <LI>6 registry items published at <Code>/r</Code> (5 components + the utils helper), each installable with one command in npm, pnpm, yarn or bun.</LI>
          <LI>52 mobile items (26 React Native, 26 Flutter) with phone-frame previews.</LI>
          <LI>Full billing: monthly subscription, yearly one-time plan, verify route, webhook, cancel flow, billing page, and an 11-table Supabase schema with RLS.</LI>
          <LI>Auth with email, OAuth and safe post-login redirects back into checkout.</LI>
        </UL>

        <H4>What I learned</H4>
        <OL
          items={[
            <><B>Build on standards people already use.</B> Shipping a shadcn registry meant zero new tooling for users.</>,
            <><B>Make builds fail loudly.</B> A script that prints “done” after an error costs more than one that crashes.</>,
            <><B>Treat payments as a distributed system.</B> Webhooks repeat and reorder; idempotency keys and database-level locks are the real safety net.</>,
            <><B>Never trust the client with money.</B> Price, plan and access are decided on the server and in SQL.</>,
            <><B>Read the provider&apos;s exact rules.</B> The Supabase redirect bug came from one query string.</>,
          ]}
        />

        <H4>Next steps</H4>
        <UL>
          <LI>Publish the mobile registry endpoints and the lokalhost Flutter CLI.</LI>
          <LI>Clean up registry names (one duplicated entry is rejected by the build guard).</LI>
          <LI>Add Stripe behind the existing <Code>BillingProvider</Code> interface for international buyers.</LI>
          <LI>Gate Pro components and templates with <Code>has_active_access</Code> and API tokens.</LI>
          <LI>Billing emails (renewal, failed payment) through Resend.</LI>
          <LI>Automated tests for the billing functions and the registry build.</LI>
        </UL>
      </Section>

      {/* ---------------------------------------------------------- */}
      <Section id="references" title="Links and references">
        <UL>
          <LI><A href={LINKS.site}>lokalhost.io</A> · <A href={LINKS.github}>Source code</A> · <A href={LINKS.creator}>Creator site</A></LI>
          <LI><A href="https://ui.shadcn.com/docs/registry">shadcn registry documentation</A></LI>
          <LI><A href="https://ui.shadcn.com/schema/registry-item.json">shadcn registry-item JSON schema</A></LI>
          <LI><A href="https://razorpay.com/docs/payments/subscriptions/">Razorpay Subscriptions docs</A></LI>
          <LI><A href="https://razorpay.com/docs/webhooks/validate-test/">Razorpay webhook validation</A></LI>
          <LI><A href="https://supabase.com/docs/guides/auth/server-side/nextjs">Supabase Auth with Next.js (SSR)</A></LI>
          <LI><A href="https://supabase.com/docs/guides/auth/redirect-urls">Supabase redirect URLs</A></LI>
          <LI><A href="https://fumadocs.dev">Fumadocs</A></LI>
          <LI><A href="https://nextjs.org/docs/app">Next.js App Router</A></LI>
        </UL>
      </Section>
    </div>
  )
}

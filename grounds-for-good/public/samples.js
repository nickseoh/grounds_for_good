/* Pre-written AI answers for the demo church (Grace Fellowship, mock Pine Ridge code).
   Written to the app's own prompt rules: cite only the sample zoning text, mark the rest unverified. */
window.GFG_SAMPLES = {
  feasibility: {
    _sample: true,
    verdict: "promising",
    headline: "Weekday child care, tutoring, a senior program and nonprofit offices look allowed in your building today under the sample code; housing on the parking lot is possible, but it would need a parking plan and a qualified housing partner.",
    uses: [
      { use: "Weekday child care", outlook: "promising", finding: "Your two classrooms (1,300 sq ft) could serve about 37 children, under the 60-child limit for a permitted accessory use. You'd still need a state license and a fenced outdoor play area.", citation: "Sec. 17.62.020(a)", confidence: "cited" },
      { use: "After-school tutoring", outlook: "promising", finding: "Tutoring and educational programs are listed as permitted accessory uses alongside a church.", citation: "Sec. 17.62.020(c)", confidence: "cited" },
      { use: "Senior program", outlook: "promising", finding: "Senior and social service programs are permitted accessory uses, so the fellowship hall could host one without a special permit under this code.", citation: "Sec. 17.62.020(c)", confidence: "cited" },
      { use: "Nonprofit offices", outlook: "promising", finding: "Nonprofit offices may use up to 30% of the building's floor area. Your 900 sq ft office suite is about 16% of the rooms you listed; your planner should confirm against the whole building's floor area.", citation: "Sec. 17.62.020(b)", confidence: "cited" },
      { use: "Affordable housing on the lot", outlook: "possible with relief", finding: "Housing alongside an existing church is permitted, subject to the religious-land section. Density would allow about 21 units on your lot, but the land left after the church and the parking you keep fits about 8 micro-cottages.", citation: "Sec. 17.20.030(c)", confidence: "cited" }
    ],
    constraints: [
      { rule: "Change of use", finding: "Turning classrooms into a child care center or offices needs a building permit and a fire inspection, even inside the existing building.", citation: "Sec. 17.62.020(e)", confidence: "cited" },
      { rule: "Church parking", finding: "With 250 fixed seats, the church needs about 63 spaces (1 per 4 seats); you plan to keep 40. A shared-parking analysis could reduce the combined requirement by up to 30%, because Sunday worship and weekday uses peak at different times.", citation: "Sec. 17.44.020(b)-(c)", confidence: "cited" },
      { rule: "Parking for small homes", finding: "Homes under 600 sq ft need 1.0 space each, not 1.5. Micro-cottages at about 400 sq ft would qualify, which could let a couple more fit than the sketch shows.", citation: "Sec. 17.44.020(a)", confidence: "cited" },
      { rule: "Density bonus", finding: "Affordable housing on church-owned land can get up to 25% more units if at least half are income-restricted at or below 80% of area median income for 30 years. Area median income is the middle household income for your region.", citation: "Sec. 17.62.010", confidence: "cited" },
      { rule: "Setbacks, height and coverage", finding: "Buildings must stay 20 ft from the front and rear lot lines and 7 ft from the sides, under 35 ft tall, and cover no more than 50% of the lot.", citation: "Sec. 17.20.040", confidence: "cited" },
      { rule: "Colorado HOME Act", finding: "News coverage says a 2026 state law will let qualifying housing nonprofits build on land regardless of zoning starting in 2028, but churches themselves don't qualify. This is not in your code text; confirm with a land-use attorney.", citation: null, confidence: "unverified" }
    ],
    obstacles: [
      { obstacle: "Neighbors worried about traffic", why: "Child care adds morning and evening drop-offs on a residential street.", counterpoint: "Drop-off happens in short windows, and the church can share a simple drop-off plan before opening. Care close to home can also shorten drives for neighborhood families.", expert: "City planner or traffic engineer" },
      { obstacle: "Losing Sunday parking", why: "Members may fear that housing on the lot leaves no room on Sunday morning.", counterpoint: "Weekday programs and Sunday worship use the lot at different times, which is what the shared-parking rule is for. A study can show real numbers instead of guesses.", expert: "City planner or parking consultant" },
      { obstacle: "Concerns about affordable housing nearby", why: "Some neighbors worry about change to the street's character.", counterpoint: "Small cottages built to the same height and setback rules as nearby homes, managed by an experienced partner, are a way of welcoming neighbors. Listening sessions early will surface real concerns while plans can still change.", expert: "Nonprofit housing developer" },
      { obstacle: "The board becoming a landlord", why: "Leases, insurance and building upkeep are new work for volunteers.", counterpoint: "Operators run the programs; the church hosts and stewards the space. Starting with a lighter lift, like tutoring or offices, builds confidence before bigger steps.", expert: "Attorney for lease terms and the church's insurer" }
    ],
    financing: [
      { source: "Lease income", fit: "At your own assumption of $16 per sq ft, leasing the 2,200 sq ft of child care and office space could bring roughly $35,200 a year; a commercial broker should check that rate." },
      { source: "Low-Income Housing Tax Credits (LIHTC)", fit: "A common source for affordable housing, though small projects can be hard to make work; a housing finance advisor can tell you whether yours might qualify." },
      { source: "Local housing trust funds and faith-based housing funds", fit: "May help with early design and land costs; terms vary and need confirming." },
      { source: "Child care start-up grants and subsidies", fit: "A licensed operator may be able to access these; your state child care agency can say what exists." }
    ],
    questions: [
      "Planner: what is the total floor area of our building for the 30% office limit?",
      "Planner: would a shared-parking analysis cover our church parking shortfall, and who prepares it?",
      "Licensing agency: how many children could our classrooms and outdoor area be licensed for?",
      "Architect: how many micro-cottages fit on the lot using 1.0 parking space per home?",
      "Land-use attorney: does the Colorado HOME Act help a housing partner build on our land?",
      "Attorney: what lease structure protects the church while a partner runs the program?"
    ]
  },

  emails: {
    childcare: { subject: "Weekday classroom space at Grace Fellowship", body: "Hello,\n\nI'm Dana Reyes, pastor of Grace Fellowship Church in Pine Ridge. Our classrooms are full on Sunday and nearly empty Monday through Friday, and we'd love to see them serve young families in our neighborhood.\n\nWe have two classrooms of about 650 sq ft each that could be available on weekdays. Would you consider operating a child care center in our space, and what lease terms would make that work for you?\n\nWe're early in exploring this and will involve the right professionals before any commitment. Would you have 30 minutes for a conversation in the next few weeks?\n\nThank you,\nPastor Dana Reyes\nGrace Fellowship Church" },
    office: { subject: "Affordable office space at Grace Fellowship", body: "Hello,\n\nI'm Dana Reyes, pastor of Grace Fellowship Church in Pine Ridge. Our office suite of about 900 sq ft sits mostly empty during the week, and we'd like it to support work that serves our neighbors.\n\nDo you need weekday office space, and what could you afford? We're hoping to find a mission-aligned tenant and earn steady income to sustain the church.\n\nWe're early in exploring this and will involve professionals before any commitment. Could we find 30 minutes to talk?\n\nGrace and peace,\nPastor Dana Reyes\nGrace Fellowship Church" },
    tutoring: { subject: "A home for after-school tutoring", body: "Hello,\n\nI'm Dana Reyes, pastor of Grace Fellowship Church in Pine Ridge. We have a classroom of about 520 sq ft that's free every weekday afternoon, and we'd love to see neighborhood kids use it.\n\nCould we host your after-school program, and what would you need from the space?\n\nWe're just starting to explore this and will involve the right professionals before any commitment. Would you be open to a 30-minute conversation?\n\nThank you,\nPastor Dana Reyes\nGrace Fellowship Church" },
    senior: { subject: "Weekday space for older neighbors", body: "Hello,\n\nI'm Dana Reyes, pastor of Grace Fellowship Church in Pine Ridge. Our fellowship hall and kitchen sit quiet most weekdays, and we've been praying about how they could bless older neighbors.\n\nWould a weekday senior program in our hall help the people you serve? We'd love to hear what a good fit would look like for you.\n\nWe're early in exploring this and will involve professionals before any commitment. Could we set up 30 minutes to talk?\n\nWarmly,\nPastor Dana Reyes\nGrace Fellowship Church" },
    housing: { subject: "Exploring affordable housing on church land", body: "Hello,\n\nI'm Dana Reyes, pastor of Grace Fellowship Church in Pine Ridge. Part of our parking lot sits unused most of the week, and our congregation is asking whether it could become homes for neighbors who need them.\n\nWould you evaluate our land for an affordable housing partnership, such as a long-term ground lease? We'd value your experience on what's realistic.\n\nWe're at the very beginning and will involve architects, attorneys and the city before any commitment. Would you have 30 minutes for a conversation?\n\nThank you,\nPastor Dana Reyes\nGrace Fellowship Church" },
    retail: { subject: "A small shop or café in our lobby", body: "Hello,\n\nI'm Dana Reyes, pastor of Grace Fellowship Church in Pine Ridge. Our lobby is a welcoming space that's empty most weekdays.\n\nWould you consider running a small shop or café there? We'd love a place where neighbors can stop in.\n\nWe're early in exploring this and will involve professionals before any commitment. Could we talk for 30 minutes?\n\nThank you,\nPastor Dana Reyes\nGrace Fellowship Church" },
    community: { subject: "Evening meeting space at Grace Fellowship", body: "Hello,\n\nI'm Dana Reyes, pastor of Grace Fellowship Church in Pine Ridge. Our rooms are open most weekday evenings, and we'd like them to serve groups that strengthen our community.\n\nDo you need an evening meeting room? We'd be glad to hear what would help.\n\nWe're early in exploring this. Would you have 30 minutes to talk?\n\nThank you,\nPastor Dana Reyes\nGrace Fellowship Church" }
  },

  presentation: {
    _sample: true,
    onepager: {
      title: "Grace Fellowship Church: A Building for the Whole Week",
      tagline: "Full on Sunday. Open to our neighbors Monday through Saturday.",
      sections: [
        { heading: "Why we're exploring this", body: "Our building sits mostly empty during the week while families nearby need child care, tutoring and affordable homes. We believe faithful stewardship means putting this space to work for our neighbors." },
        { heading: "What looks possible", body: "An early read of the sample zoning code suggests child care, after-school tutoring, a senior program and nonprofit offices are allowed in our building today. Affordable housing on part of our parking lot may be possible, but would need a parking plan and the right partner." },
        { heading: "Concerns we've heard", body: "Neighbors and members have raised traffic, Sunday parking and changes to the street. We take these seriously and want to plan with neighbors, not around them." },
        { heading: "Who we'd work with", body: "We would partner with a licensed child care operator, nonprofit tenants, a tutoring program, a senior services provider and an experienced nonprofit housing developer. They run the programs; we host and steward the space." },
        { heading: "What happens next", body: "This is an early exploration, not a decision. Architects, a land-use attorney, licensing agencies and city planners will review everything before any commitment." }
      ]
    },
    talking_points: [
      { audience: "Church board", points: ["Our building is used about 6% of open hours today; weekday uses could raise that a great deal.", "Lighter steps like tutoring and offices could start this year while we study bigger ones.", "Partners operate the programs, so the board isn't running a daycare.", "Lease income could help sustain the church, based on our own early assumptions.", "Nothing moves forward without expert review."] },
      { audience: "Neighbors", points: ["We want this building to serve the whole neighborhood, not just Sunday mornings.", "We've heard concerns about traffic and parking, and we'll share a plan before anything opens.", "Any housing would follow the same height and setback rules as nearby homes.", "We'd like to hear from you early, while plans can still change."] },
      { audience: "City council", points: ["The sample code appears to allow child care, tutoring, senior programs and nonprofit offices as accessory uses.", "We'd ask staff about a shared-parking analysis for weekday and Sunday uses.", "For housing, we'd work with an experienced nonprofit developer and explore the affordable housing density bonus.", "We'll follow every permit, inspection and notice requirement."] }
    ],
    slides: [
      { title: "Full on Sunday. What about Tuesday?", bullets: ["Grace Fellowship Church, Pine Ridge", "An early look at weekday uses of our building and land"], notes: "Open with the picture of a full Sunday and a quiet, locked Tuesday." },
      { title: "Why we're exploring this", bullets: ["Our building sits mostly empty Monday to Saturday", "Neighbors need child care, tutoring and affordable homes", "Stewardship means using what we've been given for others"], notes: "Keep the focus on calling, not just filling the building." },
      { title: "What looks possible inside the building", bullets: ["Child care for about 37 children in two classrooms", "After-school tutoring and a senior program", "Nonprofit offices in the office suite", "All appear allowed by the sample code, subject to permits"], notes: "Mention the license, play area and fire inspection." },
      { title: "What may be possible on the land", bullets: ["About 8 small cottages on part of the parking lot", "Would need a parking plan and a housing partner", "Affordable housing may qualify for a density bonus"], notes: "Stress that these numbers are rough and need an architect." },
      { title: "Concerns we've heard", bullets: ["Traffic from drop-offs", "Enough parking on Sunday", "Changes to the street's character"], notes: "Name the concerns before others do, and show you take them seriously." },
      { title: "Who we'd partner with", bullets: ["Licensed child care operator", "Nonprofit tenants and a tutoring program", "Senior services provider", "Nonprofit housing developer"], notes: "Partners run programs; the church hosts." },
      { title: "What it could mean", bullets: ["Families served close to home", "Steady lease income to sustain the church", "A church known as a good neighbor"], notes: "Tie back to the three goals: outreach, income, reputation." },
      { title: "Next steps, with expert review", bullets: ["Meet with city planning staff", "Talk with two or three potential partners", "Hold a listening session with neighbors", "Bring findings back to the board"], notes: "Close by inviting questions and naming that nothing is decided yet." }
    ]
  }
};

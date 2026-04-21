## Project Flow
Home page: Team card- log, name, summary, view details button
Team page: side nav - overview, members, projects, tech stack, responsibilities

Overview (MUST HAVE)
	This should be the default route of the team page.
Contains:
	Full team description
	Mission / purpose
	Where the team fits in the organization
	Key stakeholders (optional)

Members
Could include:
	Name
	Role
	Experience 
	specialization
	Profile photo (later)
	email-id
This can evolve into:
	Role-based filtering
	Team hierarchy (lead → members)

Projects
Could include:
	Active projects
	Completed projects
	Project status
	Tech used per project
	Project description (what does this project do)
This naturally ties into Tech Stack later.

Tech Stack (Strong recommendation)
Structure idea:
	Languages
	Frameworks
	Tools
	Platforms (cloud, databases)

Responsibilities / Scope (Highly recommended)
This section answers:
	What this team owns
	What they do NOT own
	Upstream / downstream dependencies

Optional side-nav items (future-ready)
You don’t need these now, but design with them in mind:
🔹 Processes / Ways of Working
	Agile, Jira, Rally, etc.
	Sprint length

🔹 Metrics / KPIs
	Delivery metrics
	Performance indicators

🔹 Documentation
	Links to Confluence / internal docs

## Future Work
1. Make header dynamic: on main page, have DAP title but on specific team's page show team title + image
2. On click of email from member card, one should be asked if they want to send message via email & if clicked yes, there gmail/otlook should get opened
3. introduce lazy loading so that images of the page only load when they are required 

## See the project live [here](https://team-atlas.netlify.app)

## Start vite development server
- npm run dev
- Server will run on localhost:5173

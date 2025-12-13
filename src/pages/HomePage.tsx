import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Section } from "../components/Section";
import { SkillCard } from "../components/SkillCard";
import terrarecipesHome from "../assets/terrarecipes-home.png";
import aboutMe from "../assets/rainier-river.jpeg";
import { Card } from "../components/Card";
import { Chip } from "../components/Chip";
import { ChipGroup } from "../components/ChipGroup";
import { siteConfig } from "../config/site";

export default function HomePage() {
    return (
        <>
            <section id="home" className="min-h-[calc(100vh-3.5rem)] flex items-center">
                <Container>
                    <div className="p-10 bg-[radial-gradient(circle_at_top_left,#0d94880f,transparent)]">
                        {/* Top chip */}
                        <Chip variant="label" className="mb-4">
                            Full-stack web developer · Seattle
                        </Chip>

                        {/* Main heading + body + CTAs */}
                        <div className="max-w-3xl flex flex-col gap-5">
                            <h1 className="heading-1">
                                I build clean, reliable web systems with polished UI.
                            </h1>

                            <p className="text-body">
                                I like taking messy requirements and turning them into clear,
                                well-structured apps. Right now I&apos;m focused on{" "}
                                <span className="font-medium">Terrarecipes</span> - a recipe site
                                with typed search, category browsing, and grocery-list
                                generation.
                            </p>

                            {/* CTAs */}
                            <div className="flex flex-wrap items-center gap-3 pt-2">
                                {/* Primary CTA: Terrarecipes */}
                                <a
                                    href="#featured-project"
                                    className=""
                                >
                                    <Button>View Terrarecipes</Button>
                                    
                                </a>

                                {/* Secondary CTA: all projects */}
                                <a
                                    href="#other-projects"
                                >
                                    <Button variant="secondary">View other projects</Button>
                                </a>
                            </div>

                            {/* Status line */}
                            <p className="text-muted">
                                Open to front-end, full-stack, QA/testing, and IT roles — with a focus on building reliable web 
                                systems in React, Node, and TypeScript.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            <Section id="skills">
                <Container>
                    <div className="flex flex-col items-center">
                        <div className="mb-10">
                            <h2 className="heading-2">Skill Snapshot</h2>
                            <div className="mx-auto mt-3 h-[2px] w-16 bg-brand-accent/40 rounded-full" />
                        </div>
                        <div className="flex gap-4">
                            <SkillCard
                                title="Frontend"
                                items={["React", "TS", "Vite", "Tailwind"]}
                            />
                            <SkillCard
                                title="Backend"
                                items={["Node", "Express", "Mongoose"]}
                            />
                            <SkillCard
                                title="DevOps"
                                items={["Render", "CI/CD", "Postman"]}
                            />
                        </div>
                    </div>
                </Container>
            </Section>

            <Section id="projects" className="bg-brand-bg">
                <Container>
                    <div className="mb-10 text-center">
                        <h2 className="heading-2">Projects</h2>
                        <div className="mx-auto mt-3 h-[2px] w-16 bg-brand-accent/40 rounded-full" />
                    </div>
                    
                    {/* Featured Project */}
                    <div id="featured-project" className="scroll-mt-24 space-y-8">
                        <div className="space-y-3">
                            <Chip variant="label" leftDot>
                                Featured project
                            </Chip>
                            <h3 className="heading-3">Terrarecipes</h3>
                            <p className="text-body max-w-2xl">
                                Terrarecipes is a full-stack recipe platform where I&apos;m
                                experimenting with typed search, category-based browsing, and
                                grocery list generation.
                            </p>
                        </div>

                        {/* Content grid */}
                        <div className="grid gap-8 md:grid-cols-2 items-start">
                            {/* Left: text + details */}
                            <div className="space-y-6">
                                {/* Roles / status chips */}
                                <ChipGroup>
                                    <Chip>
                                        Full-stack · Personal project
                                        </Chip>
                                    <Chip>
                                        In active development
                                    </Chip>
                                </ChipGroup>

                                {/* Highlights */}
                                <div className="space-y-3">
                                    <h4 className="heading-4">What I built</h4>
                                    <ul className="list-disc space-y-2 pl-5 text-body">
                                        <li>
                                            Strongly typed React + Node app with shared TypeScript models
                                            between frontend and backend.
                                        </li>
                                        <li>
                                            Category and tag system for browsing recipes by how people
                                            actually cook (core + featured groupings).
                                        </li>
                                        <li>
                                            Ingredient parsing and normalized units to power grocery-list
                                            generation.
                                        </li>
                                        <li>
                                            Clean API design with auth, protected routes, and structured
                                            logging.
                                        </li>
                                    </ul>
                                </div>

                                {/* Tech stack */}
                                <div className="space-y-1">
                                    <p className="text-label">Tech stack</p>
                                    <p className="text-muted">
                                        React · TypeScript · Vite · Tailwind · Node · Express · MongoDB ·
                                        Mongoose
                                    </p>
                                </div>

                                {/* CTAs */}
                                <div className="space-y-6">
                                    <div className="flex gap-3">
                                        <Button href={siteConfig.featuredSite}>Live Site</Button>
                                        <Button variant="secondary" href={siteConfig.frontendRepo}>
                                            View Frontend Repo
                                        </Button>
                                    </div>

                                    <div className="text-sm text-text-muted space-x-4">
                                        <a
                                        href={siteConfig.frontendRepo}
                                        className="hover:text-brand-accent"
                                        >
                                        Frontend Repo →
                                        </a>

                                        <a
                                        href={siteConfig.backendRepo}
                                        className="hover:text-brand-accent"
                                        >
                                        Backend Repo →
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Right: screenshot card */}
                            <Card>
                                <div className="aspect-[16/10] overflow-hidden rounded-xl border border-black/5 bg-brand-bg">
                                    <img
                                        src={terrarecipesHome} // update path
                                        alt="Screenshot of the Terrarecipes app"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <p className="mt-3 text-muted text-xs md:text-sm leading-relaxed">
                                A recipe browsing experience with category-driven navigation,
                                typed search, and grocery-list support — built as a showcase of my
                                full-stack TypeScript workflow.
                                </p>
                            </Card>
                        </div>
                    </div>

                    {/* <div id="other-projects" className="pt-20 space-y-8">
                        <header className="space-y-2">
                            <h3 className="heading-3">Other Projects</h3>
                            <p className="text-body">
                                A collection of smaller builds, experiments, and utility tools.
                            </p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <ProjectCard
                                title="Example Name"
                                description="Example desc."
                                tech={["React", "TypeScript"]}
                                link="#"
                            />
                        </div>
                    </div> */}
                </Container>
            </Section>

            <Section id="about">
                <Container>
                    <div className="flex flex-col items-center">
                        <div className="mb-10">
                            <h2 className="heading-2">About</h2>
                            <div className="mx-auto mt-3 h-[2px] w-16 bg-brand-accent/40 rounded-full" />
                        </div>
                        <div className="flex flex-col items-center gap-10">
                            <img src={aboutMe} alt="man standing on river bridge at mt rainier" className="w-3/5 rounded-xl object-cover shadow-sm" />
                            <div className="flex flex-col gap-4 max-w-xl">
                                <p className="text-body">
                                    Hi, I'm Gary Kono — a developer who loves building clean systems with React and Node. I focus on 
                                    strong architecture, polished UI, and developer experience.
                                </p>
                                <ul className="space-y-2 text-body list-disc list-inside">
                                    <li><span>Based in the Pacific Northwest</span></li>
                                    <li><span>Passionate about hiking, learning, and journaling</span></li>
                                    <li><span>Love building apps that feel thoughtful</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section id="contact">
                <Container>
                    <div className="flex flex-col items-center">
                        <div className="mb-10">
                            <h2 className="heading-2 text-center">Contact</h2>
                            <div className="mx-auto mt-3 h-[2px] w-16 bg-brand-accent/40 rounded-full" />
                            <p className="mt-4 text-body text-text-secondary">
                                Like my work? I&apos;m open to front-end, full-stack, QA/testing, and
                                IT roles — feel free to reach out.
                            </p>
                        </div>
                        <Card>
                            <div className="space-y-4 text-sm">
                                <div className="flex flex-col gap-1">
                                    <label className="text-label">Email</label>
                                    <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-label">Github</label>
                                    <a href={siteConfig.github}>github.com/garykono</a>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-label">LinkedIn</label>
                                    <a href={siteConfig.linkedin}>linkedin.com/in/gary-kono-842a59177</a>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Container>
            </Section>
        </>
    )
}
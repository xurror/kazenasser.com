import { ArticleCard } from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { ArrowDown, BriefcaseBusiness, Mail } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import React from "react";

import linkedInLogo from '../public/LinkedIn-Logos/LI-In-Bug.png'


const articles = [
  {
    title: "Crafting a design system for a multiplanetary future",
    publishDate: "2022-09-05",
    description:
      "Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.",
    href: "/articles/crafting-a-design-system-for-a-multiplanetary-future",
  },
  {
    title: "Introducing Animaginary: High performance web animations",
    publishDate: "2022-09-02",
    description:
      "When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.",
    href: "/articles/introducing-animaginary",
  },
  {
    title: "Rewriting the cosmOS kernel in Rust",
    publishDate: "2022-07-14",
    description:
      "When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.",
    href: "/articles/rewriting-the-cosmos-kernel-in-rust",
  },
];

const experiences = [
  {
    company: "LINUS Digital Finance AG",
    role: "Software Engineer",
    experiences: [
      "Reduced infrastructure costs by migrating from OData to scheduled jobs for Salesforce integration, implementing the change using Spring Boot and developing automated SEPA file generation systems for bank transactions",
      "Maintained and optimized a microservices architecture built with Spring Boot, Kotlin, and Axon Framework, leading to improved system reliability and reduced deployment costs through strategic service consolidation",
      "Implemented secure KYC workflows using PostIdent and GraphQL APIs, while managing the entire company's IT infrastructure including AWS cloud services, CI/CD pipelines, and production troubleshooting",
    ],
    duration: {
      start: "2023-02",
      end: "2025-02",
    },
  },
  {
    company: "iMbu On-Demand IT Solutions GmbH",
    role: "Software Engineer",
    experiences: [
      "Led development of an HR management platform using Spring Boot and Angular, delivering the first production release within 6 months after 2 years of previous development stalls",
      "Designed and implemented a granular user rights management system with Active Directory integration, improving security and access control across the platform",
      "Improved application performance by 50% through implementing caching strategies and increasing test coverage using test containers for isolated testing environments",
    ],
    duration: {
      start: "2021-08",
      end: "2023-02",
    },
  },
  {
    company: "Openfactor Groups",
    role: "Independent Contractor",
    experiences: [
      "Developed and integrated a credit scoring system using statistical analysis and rule-based assessment, implementing both backend APIs with Django and frontend interfaces with AngularJS",
      "Analyzed financial data to identify key variables affecting loan quality, resulting in an improved risk assessment model",
      "Successfully integrated the credit scoring system into the existing LendPesa platform, enabling more accurate loan risk evaluation",
    ],
    duration: {
      start: "2021-09",
      end: "2022-01",
    },
  },
  {
    company: "Finscale",
    role: "Solution Engineer",
    experiences: [
      "Developed an open-source bug bounty platform using Spring Boot and Jhipster, integrating OAuth authentication with Keycloak and Stripe payment processing",
      "Implemented customizations for banking institutions using Java and Spring Boot, including semi-monthly loan repayment schedules and holiday rescheduling features",
      "Designed and developed microservices using Axon Framework for event-driven architecture, focusing on improving system scalability and maintainability",
    ],
    duration: {
      start: "2020-09",
      end: "2021-06",
    },
  },
  {
    company: "Digital Renter",
    role: "Software Engineering Intern",
    experiences: [
      "Developed a room reservation system with installment payment features using Laravel and PHP, establishing core functionality for property management",
      "Integrated OneSignal push notifications into the mobile app, improving user engagement and communication",
      "Implemented automated notification systems using background jobs, enhancing the platform's user experience",
    ],
    duration: {
      start: "2019-09",
      end: "2019-12",
    },
  },
]

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex gap-8 items-center">
        <div className="flex h-8 items-center space-x-4 tracking-tight">
          <h1 className="text-3xl font-medium">Nasser Kaze</h1>
          <Separator orientation="vertical" />
          <h2 className="text-2xl">Software Engineer</h2>
        </div>

        <div className="flex gap-4">
          <a href="https://linkedin.com/in/xurror">
            <Image
              src={linkedInLogo}
              alt="LinkedIn Logo"
              width={24}
              height={24}
              priority
            />
          </a>

          <a href="https://github.com/xurror">
            <Image
              src="/GitHub-Logos/SVG/GitHub_Invertocat_Dark.svg"
              alt="GitHub"
              width={20}
              height={20}
              priority
            />
          </a>
        </div>
      </header>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="sm:px-8 mt-9">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="max-w-2xl">
                  <h1 className="text-4xl font-medium tracking-tight">
                    About
                  </h1>
                  <p className="mt-6 text-base">
                    {"Hallo, I'm a Software Engineer based in Berlin, Germany. I love to build things and solve problems." +
                      " In my free time, I like to dive into thought experiments, read books, and play video games." +
                      " Putting up content on this site, also brings me joy. I hope you find something interesting here."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:px-8 mt-24 md:mt-28">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                  <div className="flex flex-col gap-16">
                    {articles.map((article, i) => (
                      <ArticleCard key={i} {...article} />
                    ))}
                  </div>

                  <div className="space-y-10 lg:pl-16 xl:pl-24">
                    <Card className="shadow-none">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Mail /> <span className="ml-3">Stay up to date</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <form action="/thank-you">
                          <p className="text-sm">
                            Get notified when I publish something new, and
                            unsubscribe at any time.
                          </p>
                          <div className="mt-6 flex">
                            <Input
                              type="email"
                              placeholder="Email address"
                              aria-label="Email address"
                              required
                            />

                            <Button disabled className="ml-4">
                              Join
                            </Button>
                          </div>
                        </form>
                      </CardContent>
                    </Card>

                    <Card className="shadow-none">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <BriefcaseBusiness /> <span className="ml-3">Work</span>
                        </CardTitle>
                      </CardHeader>

                      <CardContent>
                        <ol className="space-y-4">
                          {experiences?.map((item) => (
                            <li key={item.company} className="flex gap-4">
                              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                <picture>
                                  <img
                                    alt={item.company}
                                    loading="lazy"
                                    width="32"
                                    height="32"
                                    decoding="async"
                                    data-nimg="1"
                                    className="h-7 w-7"
                                    style={{ color: "transparent" }}
                                    src="/_next/static/media/planetaria.ecd81ade.svg"
                                  />
                                </picture>
                              </div>
                              <dl className="flex flex-auto flex-wrap gap-x-2">
                                <dt className="sr-only">Company</dt>
                                <dd className="w-full flex-none text-sm font-medium">
                                  {item.company}
                                </dd>
                                <dt className="sr-only">Role</dt>
                                <dd className="text-xs">
                                  {item.role}
                                </dd>
                                <dt className="sr-only">Date</dt>
                                <dd
                                  className="ml-auto text-xs"
                                  aria-label={`${item.duration.start, "YYYY-MM"} until ${item.duration.end}`}
                                >
                                  <time dateTime={item.duration.start}>
                                    {moment(item.duration.start, "YYYY-MM").format("MM/YYYY")}
                                  </time>
                                  <span aria-hidden="true" className="mx-1">—</span>
                                  <time className="capitalize" dateTime={item.duration.end}>
                                    {moment(item.duration.end, "YYYY-MM").isValid()
                                      ? moment(item.duration.end, "YYYY-MM").format("MM/YYYY")
                                      : item.duration.end}
                                  </time>
                                </dd>
                              </dl>
                            </li>
                          ))}
                        </ol>
                      </CardContent>

                      <CardFooter>
                        <Button disabled variant="secondary" className="w-full">
                          Download CV <ArrowDown />
                        </Button>
                      </CardFooter>
                    </Card>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

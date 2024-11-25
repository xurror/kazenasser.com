export const dynamic = "force-static"; // For caching: https://nextjs.org/docs/app/building-your-application/routing/route-handlers#caching

export async function GET(request: Request) {
  return Response.json([
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
        end: "present",
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
  ]);
}

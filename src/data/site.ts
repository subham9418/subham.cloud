export const site = {
  name: 'Subham Mohanty',
  title: 'Subham Mohanty — Senior Software Engineer',
  description:
    'Senior Software Engineer in Hyderabad building scalable back-end systems with Go, Node.js and AWS. Currently at CBRE, building GenAI features on AWS Bedrock.',
  email: 'subham.sanu99@gmail.com',
  github: 'https://github.com/subham9418',
  linkedin: 'https://www.linkedin.com/in/subham9418/',
  resume: '/SubhamMohanty.pdf',
};

// Career start (Turbot HQ, Apr 2018); years are computed at build time.
export const careerStart = new Date('2018-04-01');
export const yearsExperience = Math.floor(
  (Date.now() - careerStart.getTime()) / (365.25 * 24 * 3600 * 1000),
);

export const experience = [
  {
    hash: 'a1f93c2',
    role: 'Senior Engineer',
    company: 'CBRE',
    period: "Apr '25 — Present",
    location: 'Hyderabad',
    stack: ['AWS Bedrock', 'LangChain', 'AWS EventBridge', 'Twilio SendGrid', 'Go', 'Node.js'],
    points: [
      'Built an in-house email service on Twilio SendGrid and AWS EventBridge, removing the dependency on third-party email clients.',
      'Developed a Generative AI property description service on AWS Bedrock, reducing manual content creation by 80%.',
      'Implemented natural language search with LangChain and AWS Bedrock, increasing feature adoption by 50%.',
    ],
  },
  {
    hash: '7be04d1',
    role: 'Senior Software Engineer',
    company: 'Aqua Security',
    period: "Apr '24 — Jan '25",
    location: 'Hyderabad',
    stack: ['Go', 'Node.js', 'AWS Lambda', 'PostgreSQL', 'gRPC', 'OpenAPI', 'Docker'],
    points: [
      'Categorised vulnerability exploits in container image scanning using Go and Trivy, turning raw findings into actionable recommendations and richer security insights.',
      'Designed Go (gin) middleware enforcing OpenAPI validation, improving system reliability by 20%.',
      'Upgraded the Azure DevOps plugin to generate and store HTML/JSON scan reports per container image in CI/CD pipelines.',
    ],
  },
  {
    hash: '3c88e57',
    role: 'Senior Software Engineer',
    company: 'Mphasis',
    period: "Jun '22 — Apr '24",
    location: 'Bengaluru',
    stack: ['TypeScript', 'Node.js', 'GraphQL', 'AWS Athena', 'DynamoDB', 'MongoDB', 'Prisma'],
    points: [
      'Enhanced the product notification engine on Node.js and AWS Lambda, cutting churn by 20%.',
      'Built an analytics engine on Athena, S3, Glue and Lambda that sharpened customer segmentation accuracy.',
      'Developed the product’s user registration flow with GraphQL, Prisma, JWT and MongoDB.',
    ],
  },
  {
    hash: '09d2b6a',
    role: 'Software Engineer',
    company: 'Turbot HQ',
    period: "Apr '18 — Jun '22",
    location: 'Kolkata',
    stack: ['TypeScript', 'Node.js', 'Terraform', 'AWS', 'GCP', 'GraphQL', 'Steampipe'],
    points: [
      'Scaled real-time event support across clouds with CloudWatch, SNS, GCP Logging and Pub/Sub, improving reliability by 30%.',
      'Improved network efficiency by 30% by integrating AWS VPC Transit Gateway.',
      'Built an integration testing framework with Terraform, GraphQL, Make and Node.js, boosting deployment efficiency by 30%.',
      'Authored open-source Steampipe plugins for Azure AD, Terraform Cloud, Heroku and IBM Cloud.',
    ],
  },
];

export const skills = [
  { group: 'Languages', items: ['Go', 'TypeScript / JavaScript', 'HTML / CSS'] },
  { group: 'Backend', items: ['Node.js', 'GraphQL', 'REST', 'gRPC', 'Prisma', 'JWT'] },
  { group: 'Cloud & Infra', items: ['AWS', 'GCP', 'Azure', 'Terraform', 'Docker', 'Git'] },
  { group: 'Data & GenAI', items: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'AWS Bedrock', 'LangChain'] },
];

export const now = 'Building GenAI services on AWS Bedrock + LangChain at CBRE. Exploring agents, evals and Go concurrency patterns.';

export const facts = [
  { label: 'Experience', value: `${yearsExperience}+ yrs` },
  { label: 'Certified', value: 'AWS SA Associate' },
  { label: 'Based in', value: 'Hyderabad, IN' },
  { label: 'Now', value: 'GenAI on AWS' },
];

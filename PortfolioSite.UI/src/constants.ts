export const USER_INFO = {
  name: "Narendra Chigili",
  title: "Full-Stack .NET Developer & Data Scientist",
  email: "Narendrachigili@gmail.com",
  phone: "+1 573-466-7575",
  linkedin: "https://www.linkedin.com/in/narendra-c-987108235",
  profile: "Graduate professional over 5 years of experience in web application development using C# .NET. Well-versed in data analysis and database management. A certified data scientist holding a Master's degree in Information Science & Technology with a focus on data science.",
  skills: {
    programming: ["C#", "Python"],
    frameworks: ["ASP.NET Core", ".NET Framework", "WPF", "MVC", "Entity Framework Core", "Angular"],
    frontend: ["HTML5", "CSS3", "JavaScript", "XAML"],
    databases: ["SQL Server", "PostgreSQL"],
    cloudDevOps: ["Azure DevOps", "Jenkins", "Git", "Docker"]
  },
  experience: [
    {
      role: "Full-stack .NET Developer",
      company: "Vertex Inc",
      location: "King of Prussia, PA",
      duration: "Jul 2023 - May 2026",
      description: "Working on Tax Compliance Management System. Developed RESTful APIs and microservices-based backend modules using C#, ASP.NET Core, and Entity Framework. Integrated RabbitMQ and Apache Kafka."
    },
    {
      role: "Web Application Developer",
      company: "RIGAPS (Product: OnBlick)",
      location: "Hyderabad, India",
      duration: "Sep 2020 - July 2021",
      description: "Worked on a SaaS-based Immigration & HR Compliance web application. Developed responsive product screens and automation scripts in Python."
    },
    {
      role: "Software Engineer",
      company: "Larsen & Toubro Infotech (Client: Travelers Insurance)",
      location: "Chennai, India",
      duration: "Jan 2019 - Aug 2020",
      description: "Designed and developed modules for a Loss Premium Calculation desktop application using C#, .NET, and WPF. Developed and optimized SQL Server stored procedures."
    }
  ],
  education: [
    {
      degree: "Masters, Information Science & Technology",
      university: "Missouri University of Science & Technology",
      duration: "May 2023"
    },
    {
      degree: "Bachelors, Computer Science Engineering",
      university: "Sree Vidhyanikethan Engineering College",
      duration: "April 2018"
    }
  ],
  artifacts: [
    {
      title: "Live Crypto Dashboard & Data Analysis",
      objective: "To demonstrate the transformation of an automated Python data extraction pipeline (Jupyter Notebook) into a live, interactive web dashboard.",
      process: "Initially, I built a Python pipeline to query the CoinMarketCap API, parse JSON, and build Pandas DataFrames for visualization using Seaborn. To showcase this in my portfolio, I translated that logic into a live React component. It now fetches real-time data from the free CoinGecko API and visualizes 7-day price trends and percentage changes using Recharts.",
      tools: ["React", "TypeScript", "CoinGecko API", "Recharts", "Framer Motion", "Python (Original)"],
      valueProposition: "It demonstrates my ability to not only write robust data extraction scripts in Python, but also to operationalize that data by building modern, interactive frontend experiences that run live in the browser.",
      fileRef: "CryptoAPI Data Analysis.ipynb"
    }
  ]
};

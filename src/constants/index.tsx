import {
  AlignLeft,
  ArrowRightLeft,
  BookOpen,
  Code,
  EyeOff,
  FileText,
  Github,
  GithubIcon,
  Globe,
  GlobeLock,
  KeyRound,
  Lock,
  Mail,
  Search,
  ShieldCheck,
  Twitter,
  TwitterIcon,
  Wand2,
} from 'lucide-react';

// Navigation links
export const navigationLinks = [
  { name: 'Tools', href: '/tools' },
  { name: 'Categories', href: '#', hasDropdown: true },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

// Categories for dropdown
export const categories = [
  { name: 'Text Tools', href: '/tools/text' },
  { name: 'Converters', href: '/tools/converters' },
  { name: 'Encoders/Decoders', href: '/tools/encoders' },
  { name: 'Formatters', href: '/tools/formatters' },
  { name: 'Generators', href: '/tools/generators' },
  { name: 'SEO Tools', href: '/tools/seo' },
  { name: 'Web Tools', href: '/tools/web' },
];

export const indexBlogPosts = [
  {
    id: 1,
    title: 'Top 10 Productivity Tools for Developers in 2025',
    excerpt:
      'Discover the best tools to boost your productivity as a developer, from text editors to time trackers.',
    date: 'April 15, 2025',
    slug: '/blog/top-10-productivity-tools-2025',
  },
  {
    id: 2,
    title: 'How Subnexa Simplifies Your Workflow',
    excerpt:
      'Learn how Subnexa’s free online tools can streamline your daily tasks with zero cost.',
    date: 'March 20, 2025',
    slug: '/blog/how-subnexa-simplifies-workflow',
  },
  {
    id: 3,
    title: 'The Future of Web Development: Trends to Watch',
    excerpt: 'Explore upcoming trends in web development, including AI, Web3, and more.',
    date: 'February 10, 2025',
    slug: '/blog/future-of-web-development',
  },
];

export const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Productivity Tools for Developers in 2025',
    excerpt:
      'Discover the best tools to boost your productivity as a developer, from text editors to time trackers.',
    date: 'April 15, 2025',
    slug: '/blog/top-10-productivity-tools-2025',
    content: `
        <p>In the fast-paced world of software development, productivity isn’t just about writing more code—it's about working smarter. With the right tools, developers can streamline workflows, avoid distractions, and focus on what matters most: building great products.</p>
  
        <h2>Why Productivity Matters</h2>
        <p>Improving productivity isn't just good for business—it helps reduce burnout, improve code quality, and make daily tasks more enjoyable. Whether you're working remotely or in a team environment, staying organized and efficient can make or break your momentum.</p>
  
        <h3>Top Tools to Consider</h3>
        <ul>
          <li><strong>VS Code:</strong> A lightweight but powerful source-code editor with support for JavaScript, TypeScript, Python, and more. Extensions like GitLens, Prettier, and Live Server enhance your workflow.</li>
          <li><strong>Notion:</strong> Ideal for organizing projects, managing documentation, and personal productivity. Its flexibility makes it suitable for solo developers and teams alike.</li>
          <li><strong>Pomofocus:</strong> Based on the Pomodoro Technique, this tool helps you break your work into intervals to maintain focus and energy throughout the day.</li>
          <li><strong>Linear:</strong> A modern issue-tracking and project management tool that’s fast, keyboard-first, and optimized for developer workflows.</li>
          <li><strong>Raycast:</strong> A Mac-only productivity tool that lets you launch apps, run scripts, manage tasks, and control dev tools using simple keyboard commands.</li>
          <li><strong>Figma:</strong> Though primarily a design tool, Figma helps developers collaborate with designers efficiently, reducing back-and-forth on UI requirements.</li>
          <li><strong>GitHub Copilot:</strong> AI-powered code suggestions right inside your editor. Great for speeding up repetitive coding tasks and exploring new languages/frameworks.</li>
          <li><strong>Slack:</strong> Still one of the best tools for team communication, especially when paired with integrations like GitHub and CI/CD alerts.</li>
          <li><strong>RescueTime:</strong> Tracks how you spend your time on your computer to give you insights and help you cut distractions.</li>
          <li><strong>Postman:</strong> A must-have for testing APIs quickly and collaborating on API development with team members.</li>
        </ul>
  
        <p>As we move further into 2025, developers are expected to juggle multiple tools and responsibilities. Mastering these productivity tools can lead to cleaner code, faster development cycles, and ultimately—happier devs.</p>
      `,
    author: {
      name: 'Jay Prakash',
      bio: 'Founder of Subnexa and a passionate developer focused on creating tools for the community.',
      avatar: '/placeholder-avatar.jpg',
    },
  },
  {
    id: 2,
    title: 'How Subnexa Simplifies Your Workflow',
    excerpt:
      'Learn how Subnexa’s free online tools can streamline your daily tasks with zero cost.',
    date: 'March 20, 2025',
    slug: '/blog/how-subnexa-simplifies-workflow',
    content: `
        <p>In today’s digital age, even simple tasks like generating passwords, converting case formats, or decoding URLs can disrupt your flow when you don't have the right tools. That’s where Subnexa steps in.</p>
  
        <h2>Streamlining with Subnexa</h2>
        <p>Subnexa offers a collection of free, web-based utilities designed for developers, content creators, marketers, and anyone working online. No login required, no data tracking—just tools that work, instantly.</p>
  
        <p>Here’s how Subnexa can simplify your workflow:</p>
        <ul>
          <li><strong>Quick Text Manipulation:</strong> Convert case, trim whitespace, remove duplicates, and format JSON or HTML with ease.</li>
          <li><strong>SEO Utilities:</strong> Analyze meta tags, check open graph previews, and generate structured data for better visibility in search engines.</li>
          <li><strong>Security & Encoding Tools:</strong> Encode/decode Base64, hash passwords, and generate secure random strings for cryptographic use.</li>
          <li><strong>Regex & Dev Utilities:</strong> Test regular expressions live, beautify code snippets, and simulate HTTP headers—all from one dashboard.</li>
        </ul>
  
        <p>Subnexa eliminates the need to install browser extensions or download separate apps. All tools are accessible in one place, saving time and mental load. With an intuitive interface and lightning-fast performance, Subnexa helps you stay in the zone and get more done.</p>
      `,
    author: {
      name: 'Chirag Arora',
      bio: 'SEO Specialist at Subnexa, helping users discover our tools through optimized content.',
      avatar: '/placeholder-avatar.jpg',
    },
  },
  {
    id: 3,
    title: 'The Future of Web Development: Trends to Watch',
    excerpt: 'Explore upcoming trends in web development, including AI, Web3, and more.',
    date: 'February 10, 2025',
    slug: '/blog/future-of-web-development',
    content: `
        <p>Web development has evolved rapidly in the past decade, and 2025 is poised to bring even more exciting innovations. From AI-driven interfaces to decentralized apps, staying ahead of the curve is essential for developers and businesses alike.</p>
  
        <h2>Emerging Trends</h2>
        <ul>
          <li><strong>AI-Powered Development:</strong> Tools like GitHub Copilot and AI design generators are making prototyping and development faster than ever before.</li>
          <li><strong>WebAssembly (Wasm):</strong> This low-level binary format allows languages like Rust and C++ to run in the browser, enabling high-performance applications.</li>
          <li><strong>Decentralized Web (Web3):</strong> Blockchain-based apps are gaining traction with more user-friendly interfaces and real-world use cases like decentralized storage and finance.</li>
          <li><strong>Frameworkless Design:</strong> Vanilla JavaScript and lightweight libraries are making a comeback as developers prioritize performance and simplicity.</li>
          <li><strong>Edge Computing:</strong> With CDNs and edge functions, developers can now run backend logic closer to the user, improving speed and scalability.</li>
        </ul>
  
        <p>The future of web development is one of convergence—AI, decentralization, and performance enhancements are all merging to redefine what's possible on the web. Staying informed and adaptable will be the key to thriving in this exciting new era.</p>
      `,
    author: {
      name: 'Dipanshu Kaira',
      bio: 'Performance Marketing Specialist at Subnexa, driving growth through innovative strategies.',
      avatar: '/placeholder-avatar.jpg',
    },
  },
];

export const testimonials = [
  {
    name: 'Subham Kumar',
    role: 'Full-Stack Developer',
    content:
      'Subnexa has become my go-to resource for quick text transformations and encodings. The Base64 and JSON formatter tools save me so much time!',
    rating: 5,
  },
  {
    name: 'Chirag Arora',
    role: 'Senior SEO Specialist',
    content:
      "As a Senior SEO Specialist, I use Subnexa's tools daily. The meta tag generator and keyword density analyzer are incredible time-savers that deliver professional results.",
    rating: 5,
  },
  {
    name: 'Sanjeev kr',
    role: 'UI/UX Designer',
    content:
      'The color converter and Lorem Ipsum generator are essential parts of my design workflow. Clean interface, fast results, and all free!',
    rating: 4,
  },
  {
    name: 'Jaya Singh',
    role: 'Content Creator',
    content:
      'I love how Subnexa makes technical tools accessible. The word counter and case converter help me polish my content before publishing.',
    rating: 5,
  },
  {
    name: 'Stutee',
    role: 'Security Analyst',
    content:
      'The hash generators and encoding tools are reliable and secure. I appreciate that all processing happens client-side so sensitive data stays private.',
    rating: 5,
  },
  {
    name: 'Dipanshu Kaira',
    role: 'Performance Marketing Specialist',
    content:
      'Subnexa is a game-changer for marketers. The URL shortener and QR code generator are perfect for campaigns. I can create custom links in seconds!',
    rating: 5,
  },
];

// Team members data
export const TEAM_MEMBERS = [
  {
    name: 'Jay Prakash',
    role: 'Founder & Lead Developer',
    description: 'Full-stack developer with a passion for creating useful tools and utilities.',
    github: 'https://github.com/IamJayPrakash',
    linkedin: 'https://linkedin.com/in/jayprakash',
  },
  {
    name: 'Chirag Arora',
    role: 'Senior SEO Specialist',
    description:
      'Experienced SEO specialist focused on optimizing web presence and improving search rankings.',
    // github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/in/chiragarora0777/',
  },
  {
    name: 'Dipanshu Kaira',
    role: 'Performance Marketing Specialist',
    description: 'Performance marketing specialist with expertise in scalable architectures.',
    // github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/in/dipanshu-kaira/',
  },
];

// Category data
export const CATEGORIES = [
  {
    title: 'Text Tools',
    description: 'Transform, analyze, and manipulate text with our powerful text utilities.',
    icon: FileText,
    href: '/tools/text',
    color: 'bg-blue-500',
    popular: ['Text Case Converter', 'Word Counter', 'Text Diff Tool'],
  },
  {
    title: 'Converters',
    description: 'Convert between different formats, units, and file types effortlessly.',
    icon: ArrowRightLeft,
    href: '/tools/converters',
    color: 'bg-green-500',
    popular: ['JSON to CSV', 'Markdown to HTML', 'Image Format Converter'],
  },
  {
    title: 'Encoders/Decoders',
    description: 'Encode or decode content in various formats including Base64, URL, and more.',
    icon: Code,
    href: '/tools/encoders',
    color: 'bg-purple-500',
    popular: ['Base64 Encoder/Decoder', 'URL Encoder/Decoder', 'JWT Decoder'],
  },
  {
    title: 'Formatters',
    description: 'Clean, format, and beautify code, text, and data structures.',
    icon: AlignLeft,
    href: '/tools/formatters',
    color: 'bg-orange-500',
    popular: ['JSON Formatter', 'XML Formatter', 'SQL Formatter'],
  },
  {
    title: 'Generators',
    description: 'Generate random data, dummy text, secure passwords, and more.',
    icon: Wand2,
    href: '/tools/generators',
    color: 'bg-pink-500',
    popular: ['Password Generator', 'Lorem Ipsum Generator', 'UUID Generator'],
  },
  {
    title: 'SEO Tools',
    description: 'Analyze and optimize your website for better search engine visibility.',
    icon: Search,
    href: '/tools/seo',
    color: 'bg-yellow-500',
    popular: ['Meta Tag Analyzer', 'Keyword Density Checker', 'SERP Preview'],
  },
  {
    title: 'Web Tools',
    description: 'Useful utilities for web developers, designers, and digital professionals.',
    icon: Globe,
    href: '/tools/web',
    color: 'bg-indigo-500',
    popular: ['CSS Minifier', 'Image Optimizer', 'Color Picker'],
  },
  {
    title: 'Security Tools',
    description:
      'Enhance your security with hash generators, password strength checkers, and more.',
    icon: Lock,
    href: '/tools/security',
    color: 'bg-red-500',
    popular: ['Hash Generator', 'Password Strength Checker', 'Encryption Tool'],
  },
];

// FAQs for contact page
export const FAQS = [
  {
    question: 'How do I suggest a new tool?',
    answer:
      'You can suggest a new tool by filling out our contact form and selecting "Tool Suggestion" as the subject. Please include as much detail as possible about the tool you\'d like to see.',
  },
  {
    question: 'How do I report a bug or issue?',
    answer:
      'If you\'ve found a bug or issue with any of our tools, please use our contact form with the subject "Bug Report" or visit our dedicated report issue page. Include the tool name, what happened, and what you expected to happen.',
  },
  {
    question: 'Are your tools really free?',
    answer:
      'Yes! All tools on SubNexa are completely free to use. We may add premium features in the future, but our core tools will always remain free.',
  },
  {
    question: 'How can I contribute to SubNexa?',
    answer:
      'We welcome contributions! You can contribute by reporting bugs, suggesting features, or even submitting pull requests on our GitHub repository. Check out our contribution guidelines for more information.',
  },
  {
    question: 'How quickly do you respond to inquiries?',
    answer:
      'We aim to respond to all inquiries within 48 hours. For bug reports or urgent issues, we typically respond much faster.',
  },
];

export const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/IamJayPrakash/subnexa', icon: GithubIcon },
  { name: 'Twitter', href: '/', icon: TwitterIcon },
];

export const footerLinks = [
  {
    title: 'Products',
    links: [
      { name: 'All Tools', href: '/tools' },
      { name: 'Categories', href: 'categories' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'API', href: '/api-docs' },
      { name: 'Blog', href: '/blog' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Roadmap', href: '/roadmap' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Use', href: '/terms' },
      { name: 'Report Issue', href: '/report-issue' },
    ],
  },
];

// Contact methods
export const CONTACT_METHODS = [
  {
    name: 'Email Us',
    description: 'Send us a direct email for any inquiries, suggestions, or feedback.',
    icon: Mail,
    linkText: 'contact@subnexa.com',
    linkHref: 'mailto:contact@subnexa.com',
  },
  {
    name: 'GitHub Issues',
    description: 'Report bugs or suggest features directly on our GitHub repository.',
    icon: Github,
    linkText: 'Visit Repository',
    linkHref: 'https://github.com/IamJayPrakash/subnexa',
  },
  {
    name: 'Twitter',
    description: 'Follow us or send a DM on Twitter for quick responses.',
    icon: Twitter,
    linkText: '@SubNexaTools',
    linkHref: 'https://twitter.com/SubNexaTools',
  },
  {
    name: 'Documentation',
    description: 'Check our documentation for help with using our tools.',
    icon: BookOpen,
    linkText: 'Read Docs',
    linkHref: '/docs',
  },
];

export const docSections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    content: `
      <p>Welcome to Subnexa’s documentation! Subnexa is a platform offering free, browser-based tools for developers, designers, and digital professionals. This guide will help you get started with using our tools effectively.</p>
      <h2>Accessing Subnexa Tools</h2>
      <p>All Subnexa tools are available directly on our website at <a href="https://subnexa.vercel.app" class="text-primary dark:text-purple-400 hover:text-purple-600 dark:hover:text-purple-300">subnexa.vercel.app</a>. No account or login is required—just visit the <Link href="/tools">Tools</Link> page to explore our offerings.</p>
      <h3>First Steps</h3>
      <ol>
        <li>Navigate to the Tools page from the homepage.</li>
        <li>Browse categories or search for a specific tool (e.g., "JSON Formatter").</li>
        <li>Use the tool directly in your browser—no installation needed.</li>
      </ol>
    `,
  },
  {
    id: 'tools-overview',
    title: 'Tools Overview',
    content: `
      <p>Subnexa offers a wide range of tools to simplify your workflow. Here’s an overview of some popular categories:</p>
      <h2>Text Manipulation</h2>
      <p>Tools like Case Converter, Whitespace Remover, and Duplicate Line Remover help you clean and format text quickly.</p>
      <h2>Code Utilities</h2>
      <p>Beautify JSON, format HTML, or test regular expressions with our developer-focused utilities.</p>
      <h2>Security Tools</h2>
      <p>Generate secure passwords, encode/decode Base64, or hash data with tools designed for safety and convenience.</p>
    `,
  },
  {
    id: 'api-reference',
    title: 'API Reference',
    content: `
      <p>Subnexa provides an API for developers to integrate our tools into their applications. This section outlines the available endpoints and usage.</p>
      <h2>Authentication</h2>
      <p>The API uses API keys for authentication. Request a key by contacting us via the <Link href="/contact">Contact</Link> page.</p>
      <h2>Endpoints</h2>
      <p>Here’s an example of how to use the JSON Formatter endpoint:</p>
      <pre><code class="language-bash">curl -X POST https://api.subnexa.com/format-json \
-H "Authorization: Bearer YOUR_API_KEY" \
-d '{"json": "{\"key\": \"value\"}"}'</code></pre>
      <p>Response:</p>
      <pre><code class="language-json">{
  "formatted": "{\n  \"key\": \"value\"\n}"
}</code></pre>
    `,
  },
];

export const roadmapMilestones = [
  {
    id: 1,
    title: 'Launch Subnexa Platform',
    description:
      'Officially launch the Subnexa platform with 50+ free tools for developers and designers.',
    status: 'Completed',
    date: 'Q4 2023',
  },
  {
    id: 2,
    title: 'Expand Tool Categories',
    description:
      'Add new categories like AI tools, security utilities, and advanced text manipulation.',
    status: 'Completed',
    date: 'Q2 2024',
  },
  {
    id: 3,
    title: 'API Integration',
    description:
      'Introduce API support for developers to integrate Subnexa tools into their workflows.',
    status: 'In Progress',
    date: 'Q1 2025',
  },
  {
    id: 4,
    title: 'Mobile App Development',
    description: 'Develop a mobile app for Subnexa to provide on-the-go access to our tools.',
    status: 'Planned',
    date: 'Q3 2025',
  },
  {
    id: 5,
    title: 'Community Features',
    description: 'Add community-driven features like user feedback, tool requests, and a forum.',
    status: 'Planned',
    date: 'Q1 2026',
  },
  {
    id: 6,
    title: 'User Analytics Dashboard',
    description: 'Create a dashboard for users to track their tool usage and preferences.',
    status: 'Planned',
    date: 'Q2 2026',
  },
];

// Popular tools across categories
export const POPULAR_TOOLS = [
  { name: 'JSON Formatter', slug: 'json-formatter', category: 'developer' },
  { name: 'Password Generator', slug: 'password-generator', category: 'security' },
  { name: 'Text Case Converter', slug: 'text-case-converter', category: 'text' },
  { name: 'HTML Encoder/Decoder', slug: 'html-encoder-decoder', category: 'developer' },
  { name: 'URL Encoder/Decoder', slug: 'url-encoder-decoder', category: 'developer' },
  { name: 'Lorem Ipsum Generator', slug: 'lorem-ipsum-generator', category: 'content' },
  { name: 'Base64 Encoder/Decoder', slug: 'base64-encoder-decoder', category: 'developer' },
  { name: 'MD5 Hash Generator', slug: 'md5-hash-generator', category: 'security' },
  { name: 'Image Resizer', slug: 'image-resizer', category: 'image' },
  { name: 'Color Converter', slug: 'color-converter', category: 'converters' },
  { name: 'CSS Minifier', slug: 'css-minifier', category: 'developer' },
  { name: 'Word Counter', slug: 'word-counter', category: 'text' },
];

// Tool categories with their icons and descriptions
export const TOOL_CATEGORIES = [
  {
    name: 'Text Tools',
    slug: 'text',
    description: 'Manipulate, analyze, and transform text content easily',
    count: 42,
    popular: ['Text Case Converter', 'Lorem Ipsum Generator', 'String Utilities'],
  },
  {
    name: 'Developer Tools',
    slug: 'developer',
    description: 'Essential utilities for web development and coding',
    count: 38,
    popular: ['JSON Formatter', 'HTML Encoder/Decoder', 'CSS Minifier'],
  },
  {
    name: 'SEO Tools',
    slug: 'seo',
    description: 'Improve your website visibility and search rankings',
    count: 24,
    popular: ['Meta Tag Analyzer', 'Keyword Density Tool', 'SERP Preview'],
  },
  {
    name: 'Image Tools',
    slug: 'image',
    description: 'Process, convert, and optimize images online',
    count: 21,
    popular: ['Image Resizer', 'Image to Base64', 'Color Picker'],
  },
  {
    name: 'Security Tools',
    slug: 'security',
    description: 'Protect your data and enhance digital security',
    count: 18,
    popular: ['Password Generator', 'Hash Generator', 'Encryption Tools'],
  },
  {
    name: 'Content Tools',
    slug: 'content',
    description: 'Create and optimize digital content effectively',
    count: 27,
    popular: ['Headline Analyzer', 'Readability Checker', 'Word Counter'],
  },
  {
    name: 'Converters',
    slug: 'converters',
    description: 'Convert between various formats and units',
    count: 35,
    popular: ['Unit Converter', 'Number Base Converter', 'Date/Time Converter'],
  },
  {
    name: 'Formatters',
    slug: 'formatters',
    description: 'Format and beautify code and other content',
    count: 19,
    popular: ['JSON Formatter', 'XML Formatter', 'SQL Formatter'],
  },
];

// Converter tools data
export const CONVERTER_TOOLS = [
  {
    id: 'json-to-csv',
    name: 'JSON to CSV',
    description: 'Convert JSON data to CSV format with customizable options.',
    popular: true,
    new: false,
  },
  {
    id: 'csv-to-json',
    name: 'CSV to JSON',
    description: 'Convert CSV data to JSON format with various configuration options.',
    popular: true,
    new: false,
  },
  {
    id: 'markdown-to-html',
    name: 'Markdown to HTML',
    description: 'Convert Markdown syntax to HTML with preview functionality.',
    popular: true,
    new: false,
  },
  {
    id: 'html-to-markdown',
    name: 'HTML to Markdown',
    description: 'Convert HTML code to Markdown syntax.',
    popular: false,
    new: false,
  },
  {
    id: 'xml-to-json',
    name: 'XML to JSON',
    description: 'Convert XML documents to JSON format.',
    popular: false,
    new: false,
  },
  {
    id: 'json-to-xml',
    name: 'JSON to XML',
    description: 'Convert JSON data to XML format.',
    popular: false,
    new: false,
  },
  {
    id: 'yaml-to-json',
    name: 'YAML to JSON',
    description: 'Convert YAML files to JSON format.',
    popular: false,
    new: false,
  },
  {
    id: 'json-to-yaml',
    name: 'JSON to YAML',
    description: 'Convert JSON data to YAML format.',
    popular: false,
    new: true,
  },
  {
    id: 'image-converter',
    name: 'Image Format Converter',
    description: 'Convert images between different formats (JPG, PNG, WebP, etc.).',
    popular: true,
    new: false,
  },
  {
    id: 'unit-converter',
    name: 'Unit Converter',
    description:
      'Convert between different units of measurement (length, weight, temperature, etc.).',
    popular: false,
    new: false,
  },
  {
    id: 'color-converter',
    name: 'Color Code Converter',
    description: 'Convert between different color formats (HEX, RGB, HSL, etc.).',
    popular: false,
    new: false,
  },
  {
    id: 'number-base-converter',
    name: 'Number Base Converter',
    description: 'Convert numbers between different bases (binary, decimal, hexadecimal, etc.).',
    popular: false,
    new: true,
  },
  {
    id: 'date-time-converter',
    name: 'Date & Time Converter',
    description: 'Convert between different date and time formats and timezones.',
    popular: false,
    new: false,
  },
  {
    id: 'pdf-to-text',
    name: 'PDF to Text',
    description: 'Extract text content from PDF files.',
    popular: false,
    new: false,
  },
  {
    id: 'text-to-html',
    name: 'Text to HTML',
    description: 'Convert plain text to HTML with proper formatting.',
    popular: false,
    new: false,
  },
];

// Encoder/Decoder tools data
export const ENCODER_TOOLS = [
  {
    id: 'base64',
    name: 'Base64 Encoder/Decoder',
    description: 'Encode or decode text using Base64 encoding.',
    popular: true,
    new: false,
  },
  {
    id: 'url',
    name: 'URL Encoder/Decoder',
    description: 'Encode or decode text for use in URLs.',
    popular: true,
    new: false,
  },
  {
    id: 'jwt',
    name: 'JWT Decoder',
    description: 'Decode and verify JSON Web Tokens.',
    popular: true,
    new: false,
  },
  {
    id: 'html',
    name: 'HTML Encoder/Decoder',
    description: 'Encode or decode HTML entities in your text.',
    popular: false,
    new: false,
  },
  {
    id: 'hex',
    name: 'Hex Encoder/Decoder',
    description: 'Convert text to hexadecimal and vice versa.',
    popular: false,
    new: false,
  },
  {
    id: 'unicode',
    name: 'Unicode Encoder/Decoder',
    description: 'Encode or decode text to/from Unicode escape sequences.',
    popular: false,
    new: false,
  },
  {
    id: 'binary',
    name: 'Binary Encoder/Decoder',
    description: 'Convert text to binary and vice versa.',
    popular: false,
    new: false,
  },
  {
    id: 'morse-code',
    name: 'Morse Code Translator',
    description: 'Convert text to Morse code and vice versa.',
    popular: false,
    new: true,
  },
  {
    id: 'punycode',
    name: 'Punycode Converter',
    description: 'Convert between Unicode domain names and Punycode.',
    popular: false,
    new: false,
  },
  {
    id: 'json-escape',
    name: 'JSON String Escape/Unescape',
    description: 'Escape or unescape strings for use in JSON.',
    popular: false,
    new: false,
  },
  {
    id: 'uri-component',
    name: 'URI Component Encoder/Decoder',
    description: 'Encode or decode URI components.',
    popular: false,
    new: true,
  },
  {
    id: 'caesar-cipher',
    name: 'Caesar Cipher',
    description: 'Encode or decode text using the Caesar cipher.',
    popular: false,
    new: false,
  },
  {
    id: 'qrcode',
    name: 'QR Code Generator',
    description: 'Encode text into a QR code.',
    popular: true,
    new: false,
  },
  {
    id: 'xml-escape',
    name: 'XML Escape/Unescape',
    description: 'Escape or unescape special characters in XML.',
    popular: false,
    new: false,
  },
  {
    id: 'ascii85',
    name: 'Ascii85 Encoder/Decoder',
    description: 'Encode or decode text using Ascii85.',
    popular: false,
    new: false,
  },
];

// Formatter tools data
export const FORMATTER_TOOLS = [
  {
    id: 'json',
    name: 'JSON Formatter',
    description: 'Format and validate JSON data with customizable indentation.',
    popular: true,
    new: false,
  },
  {
    id: 'xml',
    name: 'XML Formatter',
    description: 'Format and validate XML documents with customizable indentation.',
    popular: true,
    new: false,
  },
  {
    id: 'html',
    name: 'HTML Formatter',
    description: 'Format and beautify HTML code with customizable options.',
    popular: true,
    new: false,
  },
  {
    id: 'css',
    name: 'CSS Formatter',
    description: 'Format and beautify CSS code for better readability.',
    popular: true,
    new: false,
  },
  {
    id: 'javascript',
    name: 'JavaScript Formatter',
    description: 'Format and beautify JavaScript code with customizable options.',
    popular: false,
    new: false,
  },
  {
    id: 'sql',
    name: 'SQL Formatter',
    description: 'Format SQL queries for better readability and understanding.',
    popular: false,
    new: false,
  },
  {
    id: 'yaml',
    name: 'YAML Formatter',
    description: 'Format and validate YAML files with customizable options.',
    popular: false,
    new: false,
  },
  {
    id: 'typescript',
    name: 'TypeScript Formatter',
    description: 'Format and beautify TypeScript code with customizable options.',
    popular: false,
    new: true,
  },
  {
    id: 'markdown',
    name: 'Markdown Formatter',
    description: 'Format and beautify Markdown documents for improved readability.',
    popular: false,
    new: false,
  },
  {
    id: 'php',
    name: 'PHP Formatter',
    description: 'Format and beautify PHP code with customizable options.',
    popular: false,
    new: false,
  },
  {
    id: 'csv',
    name: 'CSV Formatter',
    description: 'Format and clean CSV data with various options.',
    popular: false,
    new: false,
  },
  {
    id: 'python',
    name: 'Python Formatter',
    description: 'Format Python code according to PEP 8 and other style guides.',
    popular: false,
    new: true,
  },
  {
    id: 'java',
    name: 'Java Formatter',
    description: 'Format and beautify Java code with customizable options.',
    popular: false,
    new: false,
  },
  {
    id: 'c-sharp',
    name: 'C# Formatter',
    description: 'Format and beautify C# code with customizable options.',
    popular: false,
    new: false,
  },
  {
    id: 'toml',
    name: 'TOML Formatter',
    description: 'Format and validate TOML configuration files.',
    popular: false,
    new: false,
  },
];

// Generator tools data
export const GENERATOR_TOOLS = [
  {
    id: 'uuid',
    name: 'UUID Generator',
    description: 'Generate universally unique identifiers (UUID v4) instantly.',
    popular: true,
    new: false,
  },
  {
    id: 'password',
    name: 'Password Generator',
    description: 'Create secure, random passwords with customizable options.',
    popular: true,
    new: false,
  },
  {
    id: 'lorem-ipsum',
    name: 'Lorem Ipsum Generator',
    description: 'Generate dummy placeholder text for design and layout.',
    popular: true,
    new: false,
  },
  {
    id: 'hash-generator',
    name: 'Hash Generator',
    description: 'Generate MD5, SHA1, SHA256, and other cryptographic hashes.',
    popular: false,
    new: false,
  },
  {
    id: 'random-string',
    name: 'Random String Generator',
    description: 'Generate random alphanumeric strings for testing or use cases.',
    popular: false,
    new: false,
  },
  {
    id: 'slug-generator',
    name: 'Slug Generator',
    description: 'Convert titles or sentences into clean, SEO-friendly slugs.',
    popular: false,
    new: false,
  },
  {
    id: 'text-repeater',
    name: 'Text Repeater',
    description: 'Repeat text or phrases multiple times with custom settings.',
    popular: false,
    new: true,
  },
  {
    id: 'number-sequence',
    name: 'Number Sequence Generator',
    description: 'Generate customizable number sequences for math and testing.',
    popular: false,
    new: false,
  },
  {
    id: 'base64-generator',
    name: 'Base64 Generator',
    description: 'Generate Base64-encoded strings from plain text.',
    popular: false,
    new: true,
  },
];

export const securityTools = [
  {
    name: 'Password Strength Checker',
    description: 'Check how secure your password is using entropy and common pattern analysis.',
    href: '/tools/security/password-strength-checker',
    icon: <ShieldCheck className="h-5 w-5 text-primary" />,
  },
  {
    name: 'Base64 Decoder',
    description: 'Safely decode Base64-encoded strings with browser-side privacy.',
    href: '/tools/encoders/base64-decode',
    icon: <KeyRound className="h-5 w-5 text-primary" />,
  },
  {
    name: 'Text Obfuscator',
    description: 'Make your text unreadable to humans while keeping it recoverable.',
    href: '/tools/security/text-obfuscator',
    icon: <EyeOff className="h-5 w-5 text-primary" />,
  },
  {
    name: 'SSL Checker',
    description: 'Verify the SSL certificate and expiration date of any website.',
    href: '/tools/security/ssl-checker',
    icon: <GlobeLock className="h-5 w-5 text-primary" />,
  },
  {
    name: 'URL Encoder/Decoder',
    description: 'Encode or decode URLs to ensure they are safe for transmission.',
    href: '/tools/security/url-encoder-decoder',
    icon: <KeyRound className="h-5 w-5 text-primary" />,
  },
  {
    name: 'New Security Tool',
    description: 'Description of the new security tool.',
    href: '/tools/security/new-security-tool',
    icon: <ShieldCheck className="h-5 w-5 text-primary" />,
  },
];

// SEO tools data
export const SEO_TOOLS = [
  {
    id: 'meta-tags-analyzer',
    name: 'Meta Tags Analyzer',
    description: 'Analyze the meta title, description, and keywords of any webpage.',
    popular: true,
    new: false,
  },
  {
    id: 'open-graph-checker',
    name: 'Open Graph Checker',
    description: 'Preview and validate your Open Graph social sharing tags.',
    popular: true,
    new: false,
  },
  {
    id: 'robots-txt-tester',
    name: 'Robots.txt Tester',
    description: 'Test and validate your robots.txt rules to control crawler access.',
    popular: false,
    new: false,
  },
  {
    id: 'sitemap-validator',
    name: 'Sitemap Validator',
    description: 'Check and validate your XML sitemap for SEO readiness.',
    popular: false,
    new: false,
  },
  {
    id: 'keyword-density-checker',
    name: 'Keyword Density Checker',
    description: 'Analyze keyword frequency and density on any webpage.',
    popular: false,
    new: false,
  },
  {
    id: 'schema-markup-validator',
    name: 'Schema Markup Validator',
    description: 'Validate JSON-LD structured data for SEO and rich results.',
    popular: false,
    new: true,
  },
  {
    id: 'hreflang-checker',
    name: 'Hreflang Tag Checker',
    description: 'Verify hreflang tags and international targeting setup.',
    popular: false,
    new: true,
  },
];

// Text tools data
export const TEXT_TOOLS = [
  {
    id: 'case-converter',
    name: 'Text Case Converter',
    description:
      'Convert text between different cases: lowercase, UPPERCASE, Title Case, camelCase, and more.',
    popular: true,
    new: false,
  },
  {
    id: 'word-counter',
    name: 'Word Counter',
    description:
      'Count words, characters, sentences, and paragraphs in your text with detailed statistics.',
    popular: true,
    new: false,
  },
  {
    id: 'lorem-ipsum',
    name: 'Lorem Ipsum Generator',
    description: 'Generate placeholder text in various formats with customizable options.',
    popular: false,
    new: false,
  },
  {
    id: 'text-diff',
    name: 'Text Diff Tool',
    description: 'Compare two texts and highlight the differences between them.',
    popular: true,
    new: false,
  },
  {
    id: 'remove-duplicates',
    name: 'Remove Duplicate Lines',
    description: 'Remove duplicate lines from your text while preserving the original order.',
    popular: false,
    new: false,
  },
  {
    id: 'sort-text',
    name: 'Sort Text Lines',
    description: 'Sort lines alphabetically, numerically, by length, or in reverse order.',
    popular: false,
    new: false,
  },
  {
    id: 'text-to-speech',
    name: 'Text to Speech',
    description: 'Convert your text to spoken words with various voice options.',
    popular: false,
    new: true,
  },
  {
    id: 'line-numbers',
    name: 'Add/Remove Line Numbers',
    description: 'Add or remove line numbers from your text content.',
    popular: false,
    new: false,
  },
  {
    id: 'find-replace',
    name: 'Find and Replace',
    description: 'Find and replace text with support for regular expressions.',
    popular: false,
    new: false,
  },
  {
    id: 'text-randomizer',
    name: 'Text Randomizer',
    description: 'Shuffle words, lines, or characters in your text randomly.',
    popular: false,
    new: false,
  },
  {
    id: 'white-space',
    name: 'White Space Remover',
    description: 'Remove extra spaces, tabs, and new lines from your text.',
    popular: false,
    new: false,
  },
  {
    id: 'character-counter',
    name: 'Character Counter',
    description: 'Count specific characters or character types in your text.',
    popular: false,
    new: false,
  },
  {
    id: 'text-reverser',
    name: 'Text Reverser',
    description: 'Reverse characters, words, or lines in your text.',
    popular: false,
    new: false,
  },
  {
    id: 'text-splitter',
    name: 'Text Splitter',
    description: 'Split text by delimiter, character count, or line count.',
    popular: false,
    new: false,
  },
  {
    id: 'text-joiner',
    name: 'Text Joiner',
    description: 'Join multiple lines with a custom delimiter.',
    popular: false,
    new: true,
  },
];

// Web tools data
export const WEB_TOOLS = [
  {
    id: 'http-header-checker',
    name: 'HTTP Header Checker',
    description: 'Inspect and analyze HTTP headers for any URL.',
    popular: true,
    new: false,
  },
  {
    id: 'ip-address-lookup',
    name: 'IP Address Lookup',
    description: 'Get geolocation and ISP info from any IP address.',
    popular: true,
    new: false,
  },
  {
    id: 'user-agent-parser',
    name: 'User Agent Parser',
    description: 'Decode user-agent strings to identify browser and device.',
    popular: false,
    new: false,
  },
  {
    id: 'http-status-code-checker',
    name: 'HTTP Status Code Checker',
    description: 'Check the HTTP response code of any URL.',
    popular: false,
    new: true,
  },
  {
    id: 'dns-lookup',
    name: 'DNS Lookup',
    description: 'Retrieve DNS records for a domain name.',
    popular: false,
    new: true,
  },
  {
    id: 'port-scanner',
    name: 'Port Scanner',
    description: 'Scan for open ports on a given IP address.',
    popular: false,
    new: false,
  },
];

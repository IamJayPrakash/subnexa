'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const blogPosts = [
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

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === `/blog/${slug}`);

  if (!post) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Blog Not Found</h1>
        <p className="text-base sm:text-lg text-muted-foreground">
          Sorry, we couldn’t find the blog post you’re looking for.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center mt-6 text-primary dark:text-purple-400 hover:text-purple-600 dark:hover:text-purple-300"
        >
          <ArrowLeft size={16} className="mr-1" /> Back to Blogs
        </Link>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="relative bg-gray-100 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-800 to-red-500 h-64 sm:h-80 flex items-center justify-center animate-fade-in ">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {post.title}
          </h1>
          <p className="text-sm sm:text-base text-gray-200">{post.date}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Back to Blogs Link */}
          <Link
            href="/blog"
            className="inline-flex items-center text-primary dark:text-purple-400 hover:text-purple-600 dark:hover:text-purple-300 mb-8 transition-colors"
          >
            <ArrowLeft size={16} className="mr-1" /> Back to Blogs
          </Link>

          {/* Blog Content */}
          <div
            className="prose prose-sm sm:prose-base dark:prose-invert animate-slide-in"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Bio */}
          <div className="mt-12 sm:mt-16 p-6 bg-card dark:bg-gray-800 border border-border dark:border-gray-700 rounded-lg shadow-md animate-slide-in">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-lg sm:text-xl font-bold text-gray-600 dark:text-gray-300">
                  {post.author.name.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                  {post.author.name}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">{post.author.bio}</p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-12 sm:mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {relatedPosts.map((relatedPost) => (
                <div
                  key={relatedPost.id}
                  className="bg-card dark:bg-gray-800 border border-border dark:border-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 animate-slide-in"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                  <Link
                    href={relatedPost.slug}
                    className="flex items-center text-primary dark:text-purple-400 hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
                  >
                    Read More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

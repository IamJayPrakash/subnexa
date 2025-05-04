'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/constants';

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

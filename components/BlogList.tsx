'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

interface BlogPost {
  title: string
  excerpt: string
  publishDate: string
  url: string
}

const SAMPLE_BLOGS: BlogPost[] = [
  {
    title: "Our first project with React",
    excerpt: "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.",
    publishDate: "2023-12-20",
    url: "https://dev.to/yourusername/article-1"
  },
  {
    title: "Understanding Modern Web Development",
    excerpt: "Dive deep into modern web development practices and understand how they can improve your development workflow.",
    publishDate: "2023-12-15",
    url: "https://dev.to/yourusername/article-2"
  },
  {
    title: "Understanding Modern Web Development",
    excerpt: "Dive deep into modern web development practices and understand how they can improve your development workflow.",
    publishDate: "2023-12-15",
    url: "https://dev.to/yourusername/article-2"
  }
  ,
  {
    title: "Understanding Modern Web Development",
    excerpt: "Dive deep into modern web development practices and understand how they can improve your development workflow.",
    publishDate: "2023-12-15",
    url: "https://dev.to/yourusername/article-2"
  }
  ,
  {
    title: "Understanding Modern Web Development",
    excerpt: "Dive deep into modern web development practices and understand how they can improve your development workflow.",
    publishDate: "2023-12-15",
    url: "https://dev.to/yourusername/article-2"
  }
  ,
  {
    title: "Understanding Modern Web Development",
    excerpt: "Dive deep into modern web development practices and understand how they can improve your development workflow.",
    publishDate: "2023-12-15",
    url: "https://dev.to/yourusername/article-2"
  }
  ,
  {
    title: "Understanding Modern Web Development",
    excerpt: "Dive deep into modern web development practices and understand how they can improve your development workflow.",
    publishDate: "2023-12-15",
    url: "https://dev.to/yourusername/article-2"
  }
  ,
  {
    title: "Understanding Modern Web Development",
    excerpt: "Dive deep into modern web development practices and understand how they can improve your development workflow.",
    publishDate: "2023-12-15",
    url: "https://dev.to/yourusername/article-2"
  }
  ,
  {
    title: "Understanding Modern Web Development",
    excerpt: "Dive deep into modern web development practices and understand how they can improve your development workflow.",
    publishDate: "2023-12-15",
    url: "https://dev.to/yourusername/article-2"
  }
  ,
  {
    title: "Understanding Modern Web Development",
    excerpt: "Dive deep into modern web development practices and understand how they can improve your development workflow.",
    publishDate: "2023-12-15",
    url: "https://dev.to/yourusername/article-2"
  }
  ,
  {
    title: "Understanding Modern Web Development",
    excerpt: "Dive deep into modern web development practices and understand how they can improve your development workflow.",
    publishDate: "2023-12-15",
    url: "https://dev.to/yourusername/article-2"
  }
  ,
  {
    title: "Understanding Modern Web Development",
    excerpt: "Dive deep into modern web development practices and understand how they can improve your development workflow.",
    publishDate: "2023-12-15",
    url: "https://dev.to/yourusername/article-2"
  }
  ,
  {
    title: "Understanding Modern Web Development",
    excerpt: "Dive deep into modern web development practices and understand how they can improve your development workflow.",
    publishDate: "2023-12-15",
    url: "https://dev.to/yourusername/article-2"
  }
  ,
  {
    title: "Understanding Modern Web Development",
    excerpt: "Dive deep into modern web development practices and understand how they can improve your development workflow.",
    publishDate: "2023-12-15",
    url: "https://dev.to/yourusername/article-2"
  }
  ,
  {
    title: "Understanding Modern Web Development",
    excerpt: "Dive deep into modern web development practices and understand how they can improve your development workflow.",
    publishDate: "2023-12-15",
    url: "https://dev.to/yourusername/article-2"
  }
]

export default function BlogList() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    containerRef.current?.addEventListener('mousemove', handleMouseMove)
    return () => containerRef.current?.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div  id='blog'
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full min-h-screen bg-black overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to bottom right, rgba(79,70,229,0.05), rgba(147,51,234,0.05)),
          url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
        `,
        backgroundSize: '100px 100px, auto',
        backgroundPosition: '0 0, 0 0',
        backgroundRepeat: 'repeat, repeat',
      }}
    >
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(79,70,229,0.15), transparent 40%)`
        }}
      />
      <motion.div 
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-3xl mx-auto px-4 py-16 space-y-6"
      >
        {SAMPLE_BLOGS.map((blog, index) => (
          <motion.article
            key={blog.title}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.02 }}
            className="group relative rounded-lg bg-gray-900 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 border border-gray-800"
          >
            <div 
              className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(79,70,229,0.1), transparent 40%)'
              }}
            />
            <div className="relative space-y-3 z-10">
              <Link href={blog.url} target="_blank" className="block">
                <motion.h3 
                  className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {blog.title}
                </motion.h3>
              </Link>

              <p className="text-gray-400 text-sm leading-relaxed">
                {blog.excerpt}
              </p>

              <div className="flex items-center justify-between pt-2">
                <motion.time 
                  className="text-sm text-gray-500"
                  whileHover={{ scale: 1.05 }}
                >
                  {new Date(blog.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </motion.time>

                <Link 
                  href={blog.url}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-indigo-400 text-sm hover:text-indigo-300 transition-colors group/link"
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1"
                  >
                    <span>Read more</span>
                    <motion.div
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.span>
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.div>
  )
}


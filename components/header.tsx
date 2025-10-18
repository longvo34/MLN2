"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-sm">E</span>
          </div>
          <span className="font-bold text-lg hidden sm:inline">Economics</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#overview" className="text-sm hover:text-accent transition-colors">
            Overview
          </Link>
          <Link href="#comparison" className="text-sm hover:text-accent transition-colors">
            Comparison
          </Link>
          <Link href="#theories" className="text-sm hover:text-accent transition-colors">
            Theories
          </Link>
          <Link href="#quotes" className="text-sm hover:text-accent transition-colors">
            Quotes
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="px-4 py-3 space-y-2">
            <Link href="#overview" className="block text-sm hover:text-accent transition-colors py-2">
              Overview
            </Link>
            <Link href="#comparison" className="block text-sm hover:text-accent transition-colors py-2">
              Comparison
            </Link>
            <Link href="#theories" className="block text-sm hover:text-accent transition-colors py-2">
              Theories
            </Link>
            <Link href="#quotes" className="block text-sm hover:text-accent transition-colors py-2">
              Quotes
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

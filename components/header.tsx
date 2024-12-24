import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Briefcase, Menu, Search, User } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center text-xl font-bold text-primary">
              <Briefcase className="h-6 w-6 mr-2" />
              mployee.jobs
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <form className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search jobs..." className="pl-8 w-64" />
              </form>
              <nav className="flex items-center space-x-4">
                <Link href="/jobs" className="text-muted-foreground hover:text-primary">Find Jobs</Link>
                <Link href="/companies" className="text-muted-foreground hover:text-primary">Companies</Link>
                <Link href="/resources" className="text-muted-foreground hover:text-primary">Resources</Link>
              </nav>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}


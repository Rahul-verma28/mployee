import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-muted-foreground hover:text-primary">About JobHub</Link>
              <Link href="/careers" className="text-muted-foreground hover:text-primary">Careers</Link>
              <Link href="/press" className="text-muted-foreground hover:text-primary">Press</Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link>
              <Link href="/guides" className="text-muted-foreground hover:text-primary">Guides</Link>
              <Link href="/help" className="text-muted-foreground hover:text-primary">Help Center</Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary">Terms of Service</Link>
              <Link href="/cookies" className="text-muted-foreground hover:text-primary">Cookie Policy</Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            <form className="space-y-2">
              <Input type="email" placeholder="Enter your email" />
              <Button className="w-full">Subscribe</Button>
            </form>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; 2024 JobHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


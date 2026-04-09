import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-foreground">
              LUMINA
            </Link>
            <p className="mt-4 text-foreground/60 max-w-xs">
              Crafting digital experiences that inspire and deliver results. Lumina Design Agency is your partner for modern web solutions.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wider">Agency</h4>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-sm text-foreground/60 hover:text-foreground">Services</Link></li>
              <li><Link href="#portfolio" className="text-sm text-foreground/60 hover:text-foreground">Portfolio</Link></li>
              <li><Link href="#contact" className="text-sm text-foreground/60 hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wider">Social</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-foreground/60 hover:text-foreground">Twitter</a></li>
              <li><a href="#" className="text-sm text-foreground/60 hover:text-foreground">LinkedIn</a></li>
              <li><a href="#" className="text-sm text-foreground/60 hover:text-foreground">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-foreground/60">
          <p>© {currentYear} Lumina Design Agency. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

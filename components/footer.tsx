export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              An educational resource exploring the lives and ideas of two of the most influential economists of the
              20th century.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Key Works</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• The General Theory (Keynes)</li>
              <li>• Foundations of Analysis (Samuelson)</li>
              <li>• Economics Textbook (Samuelson)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Economic Theory</li>
              <li>• Policy Applications</li>
              <li>• Historical Context</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Economics Education. Exploring ideas that shaped the world.</p>
        </div>
      </div>
    </footer>
  )
}

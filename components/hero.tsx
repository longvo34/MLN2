export default function Hero() {
  return (
    <section id="overview" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Two Architects of Modern Economics</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Explore the revolutionary ideas of John Maynard Keynes and Paul Samuelson that shaped economic policy
            worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* Keynes Card */}
          <div className="group bg-card border border-border rounded-xl p-8 hover:border-accent transition-all duration-300 hover:shadow-lg">
            <div className="mb-4">
              <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <span className="text-2xl">📊</span>
              </div>
              <h2 className="text-2xl font-bold mb-2">John Maynard Keynes</h2>
              <p className="text-sm text-muted-foreground">1883 – 1946</p>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              British economist who revolutionized macroeconomics by arguing that government intervention is essential
              during economic downturns.
            </p>
          </div>

          {/* Samuelson Card */}
          <div className="group bg-card border border-border rounded-xl p-8 hover:border-accent transition-all duration-300 hover:shadow-lg">
            <div className="mb-4">
              <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <span className="text-2xl">📈</span>
              </div>
              <h2 className="text-2xl font-bold mb-2">Paul Samuelson</h2>
              <p className="text-sm text-muted-foreground">1915 – 2009</p>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              American economist who synthesized Keynesian and classical economics, introducing mathematical rigor to
              economic analysis.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

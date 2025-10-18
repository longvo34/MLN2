export default function Biographies() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Life & Legacy</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Keynes */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-accent">John Maynard Keynes</h3>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Born in Cambridge, England (1883), Keynes came from an intellectual family. His father was an
                  economist and his mother a social activist.
                </p>
                <p>
                  He studied mathematics and philosophy at Cambridge, influenced by the Cambridge Apostles and economist
                  Alfred Marshall.
                </p>
                <p>
                  After working at the British Treasury and attending the Versailles Peace Conference, he published{" "}
                  <em>The Economic Consequences of the Peace</em> (1919), which brought him international recognition.
                </p>
                <p>
                  His masterwork, <em>The General Theory of Employment, Interest and Money</em> (1936), revolutionized
                  macroeconomics and established the foundation for modern economic policy.
                </p>
                <p className="text-sm text-muted-foreground">
                  He died in 1946, but his ideas continue to influence economic policy worldwide, especially during
                  crises.
                </p>
              </div>
            </div>
          </div>

          {/* Samuelson */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-accent">Paul Samuelson</h3>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Born in Gary, Indiana (1915), Samuelson came from a Polish-immigrant family. He studied economics at
                  the University of Chicago and Harvard.
                </p>
                <p>
                  At Harvard, he studied under Joseph Schumpeter, Alvin Hansen, and Wassily Leontief, absorbing diverse
                  economic perspectives.
                </p>
                <p>
                  He published <em>Foundations of Economic Analysis</em> (1947), which applied mathematical rigor to
                  economics and became foundational to modern economic methodology.
                </p>
                <p>
                  His textbook <em>Economics</em> (1948) became the most influential economics textbook of the 20th
                  century, translated into dozens of languages.
                </p>
                <p className="text-sm text-muted-foreground">
                  He taught at MIT for over 40 years, training leading economists like Robert Solow and Joseph Stiglitz.
                  He won the Nobel Prize in 1970.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Theories() {
  const theories = [
    {
      economist: "Keynes",
      title: "Aggregate Demand Theory",
      description:
        "Total demand determines output and employment. When demand falls, government must intervene to restore it.",
      impact: "Applied in Vietnam 2008-2009 stimulus package",
    },
    {
      economist: "Keynes",
      title: "Multiplier Effect",
      description:
        "Government spending creates a multiplier effect, boosting the economy beyond the initial investment.",
      impact: "Used in infrastructure and public works programs",
    },
    {
      economist: "Samuelson",
      title: "Neoclassical Synthesis",
      description: "Combines Keynesian short-term intervention with classical long-term market efficiency.",
      impact: "Foundation for modern mixed economies",
    },
    {
      economist: "Samuelson",
      title: "Public Goods Theory",
      description: "Markets cannot efficiently provide public goods like defense, education, and infrastructure.",
      impact: "Justifies government provision of essential services",
    },
  ]

  return (
    <section id="theories" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Major Theories</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Key economic concepts that shaped modern policy
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {theories.map((theory, idx) => (
            <div
              key={idx}
              className="bg-background border border-border rounded-xl p-6 hover:border-accent transition-colors"
            >
              <div className="flex items-start gap-3 mb-3">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    theory.economist === "Keynes" ? "bg-accent/20" : "bg-accent/10"
                  }`}
                >
                  <span className="text-sm font-bold text-accent">{theory.economist[0]}</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase">{theory.economist}</p>
                  <h3 className="text-lg font-bold">{theory.title}</h3>
                </div>
              </div>
              <p className="text-foreground/80 mb-3 leading-relaxed">{theory.description}</p>
              <p className="text-sm text-accent">💡 {theory.impact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

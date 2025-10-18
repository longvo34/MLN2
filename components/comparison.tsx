"use client"

import { useState } from "react"

export default function Comparison() {
  const [activeTab, setActiveTab] = useState("approach")

  const comparisons = {
    approach: [
      {
        label: "Market Mechanism",
        keynes: "Markets fail to self-correct",
        samuelson: "Markets work with government guidance",
      },
      { label: "Government Role", keynes: "Active intervention needed", samuelson: "Balanced intervention" },
      { label: "Time Horizon", keynes: "Focus on short-term recovery", samuelson: "Balance short and long-term" },
      { label: "Tools", keynes: "Fiscal & monetary policy", samuelson: "Mathematical modeling & policy" },
    ],
    impact: [
      { label: "Vietnam 2008-2009", keynes: "Stimulus package applied", samuelson: "Synthesis framework used" },
      { label: "COVID-19 Response", keynes: "Fiscal expansion deployed", samuelson: "Integrated policy approach" },
      { label: "Education", keynes: "Policy thinking", samuelson: "Economic methodology" },
    ],
  }

  const current = comparisons[activeTab as keyof typeof comparisons]

  return (
    <section id="comparison" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Key Differences</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Understanding how these two economists approached economic problems differently
        </p>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 justify-center flex-wrap">
          {Object.keys(comparisons).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeTab === tab
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-semibold">Aspect</th>
                <th className="text-left py-4 px-4 font-semibold text-accent">Keynes</th>
                <th className="text-left py-4 px-4 font-semibold text-accent">Samuelson</th>
              </tr>
            </thead>
            <tbody>
              {current.map((row, idx) => (
                <tr key={idx} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="py-4 px-4 font-medium">{row.label}</td>
                  <td className="py-4 px-4 text-foreground/80">{row.keynes}</td>
                  <td className="py-4 px-4 text-foreground/80">{row.samuelson}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

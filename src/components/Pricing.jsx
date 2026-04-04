import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, Sparkles } from 'lucide-react'

const PLANS = [
  {
    name: 'Starter',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Perfect for individual developers exploring the tech landscape.',
    cta: 'Get Started Free',
    ctaLink: '/contact',
    featured: false,
    features: [
      '5 AI analyses per month',
      '3 technology domains',
      'Basic trend reports',
      'Community support',
      'Export to PDF',
      '7-day data retention',
    ],
  },
  {
    name: 'Pro',
    monthlyPrice: 49,
    yearlyPrice: 39,
    description: 'For teams that need deep insights and custom reporting.',
    cta: 'Start Pro Trial',
    ctaLink: '/contact',
    featured: true,
    badge: 'Most Popular',
    features: [
      'Unlimited AI analyses',
      'All technology domains',
      'Advanced trend reports',
      'Priority support',
      'PDF/CSV/Slack export',
      '90-day data retention',
      'Team collaboration (5 seats)',
      'API access',
      'Custom alerts & digests',
    ],
  },
  {
    name: 'Enterprise',
    monthlyPrice: null,
    yearlyPrice: null,
    description: 'For large organizations needing custom solutions and SLAs.',
    cta: 'Contact Sales',
    ctaLink: '/contact',
    featured: false,
    features: [
      'Everything in Pro',
      'Unlimited seats',
      'Custom AI training',
      'Dedicated account manager',
      'SSO / SAML',
      '1-year data retention',
      'Custom integrations',
      'SLA 99.99%',
      'On-premise option',
    ],
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(124, 58, 237, 0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 mb-5">
            <span className="text-xs font-semibold text-purple-300 tracking-widest uppercase">Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-5">
            Simple, transparent
            <br />
            <span className="gradient-text">pricing for every team</span>
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-xl mx-auto leading-relaxed mb-8">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 p-1 rounded-xl bg-white/[0.04] border border-white/[0.07]">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                !yearly
                  ? 'bg-white/[0.08] text-white shadow-sm'
                  : 'text-[#6B7280] hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 flex items-center gap-2 ${
                yearly
                  ? 'bg-white/[0.08] text-white shadow-sm'
                  : 'text-[#6B7280] hover:text-white'
              }`}
            >
              Yearly
              <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-5 lg:gap-6 items-start">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 card-hover ${plan.featured ? 'lg:-mt-4 lg:mb-4' : ''}`}
              style={{
                background: plan.featured
                  ? 'linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(6, 182, 212, 0.1) 100%)'
                  : 'rgba(17, 24, 39, 0.5)',
                border: plan.featured
                  ? '1px solid rgba(124, 58, 237, 0.4)'
                  : '1px solid rgba(255, 255, 255, 0.07)',
                boxShadow: plan.featured ? '0 0 60px rgba(124, 58, 237, 0.2)' : 'none',
              }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full gradient-bg text-xs font-bold text-white shadow-lg shadow-purple-900/40">
                    <Sparkles className="w-3 h-3" />
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-lg font-bold text-white mb-1.5">{plan.name}</h3>
              <p className="text-sm text-[#9CA3AF] mb-6 leading-relaxed">{plan.description}</p>

              {/* Price */}
              <div className="mb-7">
                {plan.monthlyPrice === null ? (
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-extrabold text-white">Custom</span>
                  </div>
                ) : plan.monthlyPrice === 0 ? (
                  <div className="flex items-end gap-1">
                    <span className="text-5xl font-extrabold text-white">Free</span>
                  </div>
                ) : (
                  <div className="flex items-end gap-1">
                    <span className="text-lg font-semibold text-[#9CA3AF] self-start mt-2">$</span>
                    <span className="text-5xl font-extrabold text-white">
                      {yearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-[#6B7280] text-sm mb-1.5">/mo</span>
                  </div>
                )}
                {yearly && plan.monthlyPrice > 0 && (
                  <p className="text-xs text-[#6B7280] mt-1">
                    Billed annually · ${plan.yearlyPrice * 12}/year
                  </p>
                )}
              </div>

              {/* CTA */}
              <Link
                to={plan.ctaLink}
                className={`block w-full text-center py-3 px-6 rounded-xl text-sm font-semibold mb-7 transition-all duration-200 ${
                  plan.featured
                    ? 'btn-primary text-white shadow-lg shadow-purple-900/30'
                    : 'border border-white/[0.12] text-white hover:bg-white/[0.05]'
                }`}
              >
                {plan.cta}
              </Link>

              {/* Divider */}
              <div className="h-px bg-white/[0.06] mb-6" />

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-[#9CA3AF]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-[#6B7280] mt-10">
          All plans include a 14-day free trial. No credit card required. Cancel anytime.
        </p>
      </div>
    </section>
  )
}

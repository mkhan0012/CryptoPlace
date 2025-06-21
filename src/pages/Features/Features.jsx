import React, { useState } from 'react'
import './Features.css'

const Features = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        {
            id: 1,
            title: "Real-Time Market Data",
            description: "Get instant access to live cryptocurrency prices, market caps, and trading volumes from over 10,000+ digital assets.",
            icon: "📊",
            details: [
                "Live price updates every second",
                "Historical data up to 10 years",
                "Advanced charting tools",
                "Market depth analysis",
                "Price alerts and notifications"
            ],
            image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            id: 2,
            title: "Advanced Portfolio Tracking",
            description: "Monitor your cryptocurrency investments with comprehensive portfolio analytics and performance metrics.",
            icon: "💼",
            details: [
                "Multi-exchange portfolio sync",
                "Profit/Loss calculations",
                "Asset allocation insights",
                "Performance benchmarking",
                "Tax reporting tools"
            ],
            image: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            id: 3,
            title: "AI-Powered Market Analysis",
            description: "Leverage artificial intelligence to get market insights, trend predictions, and trading recommendations.",
            icon: "🤖",
            details: [
                "Machine learning price predictions",
                "Sentiment analysis from social media",
                "Technical indicator automation",
                "Risk assessment algorithms",
                "Personalized trading signals"
            ],
            image: "https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            id: 4,
            title: "Secure Wallet Integration",
            description: "Connect and manage multiple cryptocurrency wallets with bank-level security and encryption.",
            icon: "🔐",
            details: [
                "Multi-signature wallet support",
                "Hardware wallet integration",
                "Cold storage solutions",
                "Two-factor authentication",
                "Insurance coverage up to $1M"
            ],
            image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            id: 5,
            title: "DeFi Protocol Access",
            description: "Access decentralized finance protocols directly from our platform with simplified interfaces.",
            icon: "🌐",
            details: [
                "Yield farming opportunities",
                "Liquidity pool management",
                "Staking rewards optimization",
                "Cross-chain bridge access",
                "Gas fee optimization"
            ],
            image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            id: 6,
            title: "Professional Trading Tools",
            description: "Execute trades like a pro with advanced order types, algorithmic trading, and market analysis tools.",
            icon: "⚡",
            details: [
                "Advanced order types (Stop-loss, Take-profit)",
                "Algorithmic trading bots",
                "Technical analysis indicators",
                "Market scanner and screener",
                "Copy trading from experts"
            ],
            image: "https://images.pexels.com/photos/8369769/pexels-photo-8369769.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
    ];

    const stats = [
        { number: "10,000+", label: "Cryptocurrencies Tracked" },
        { number: "500+", label: "Exchanges Supported" },
        { number: "1M+", label: "Active Users" },
        { number: "99.9%", label: "Uptime Guarantee" }
    ];

    return (
        <div className='features'>
            <div className="features-hero">
                <h1>Powerful Features for Crypto Enthusiasts</h1>
                <p>Everything you need to navigate the cryptocurrency market with confidence and precision</p>
            </div>

            <div className="features-stats">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card">
                        <h3>{stat.number}</h3>
                        <p>{stat.label}</p>
                    </div>
                ))}
            </div>

            <div className="features-showcase">
                <div className="features-nav">
                    {features.map((feature, index) => (
                        <button
                            key={feature.id}
                            className={`feature-nav-item ${activeFeature === index ? 'active' : ''}`}
                            onClick={() => setActiveFeature(index)}
                        >
                            <span className="feature-icon">{feature.icon}</span>
                            <div className="feature-nav-content">
                                <h4>{feature.title}</h4>
                                <p>{feature.description}</p>
                            </div>
                        </button>
                    ))}
                </div>

                <div className="features-display">
                    <div className="feature-image">
                        <img src={features[activeFeature].image} alt={features[activeFeature].title} />
                        <div className="feature-overlay">
                            <span className="feature-icon-large">{features[activeFeature].icon}</span>
                        </div>
                    </div>
                    <div className="feature-details">
                        <h3>{features[activeFeature].title}</h3>
                        <p>{features[activeFeature].description}</p>
                        <ul>
                            {features[activeFeature].details.map((detail, index) => (
                                <li key={index}>
                                    <span className="check-icon">✓</span>
                                    {detail}
                                </li>
                            ))}
                        </ul>
                        <button className="cta-button">
                            Try This Feature
                            <span className="arrow">→</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="features-grid">
                <h2>Why Choose Cryptoplace?</h2>
                <div className="benefits-grid">
                    <div className="benefit-card">
                        <div className="benefit-icon">🚀</div>
                        <h4>Lightning Fast</h4>
                        <p>Sub-second data updates and instant trade execution across all supported exchanges</p>
                    </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">🛡️</div>
                        <h4>Bank-Level Security</h4>
                        <p>Military-grade encryption, cold storage, and comprehensive insurance protection</p>
                    </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">📱</div>
                        <h4>Mobile First</h4>
                        <p>Fully responsive design with native mobile apps for iOS and Android</p>
                    </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">🎯</div>
                        <h4>Precision Analytics</h4>
                        <p>Advanced algorithms and AI-powered insights for better trading decisions</p>
                    </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">🌍</div>
                        <h4>Global Coverage</h4>
                        <p>Support for 50+ fiat currencies and 500+ cryptocurrency exchanges worldwide</p>
                    </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">💬</div>
                        <h4>24/7 Support</h4>
                        <p>Round-the-clock customer support with average response time under 2 minutes</p>
                    </div>
                </div>
            </div>

            <div className="features-cta">
                <div className="cta-content">
                    <h2>Ready to Experience the Future of Crypto Trading?</h2>
                    <p>Join over 1 million users who trust Cryptoplace for their cryptocurrency needs</p>
                    <div className="cta-buttons">
                        <button className="primary-cta">Start Free Trial</button>
                        <button className="secondary-cta">View Pricing Plans</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
const { useState, useEffect } = React;

// Lucide Icons (using Unicode/Emoji alternatives since we're in browser)
const PhoneIcon = () => <span>📞</span>;
const MailIcon = () => <span>✉️</span>;
const HomeIcon = () => <span>🏠</span>;
const TrendingUpIcon = () => <span>📈</span>;
const ShieldIcon = () => <span>🛡️</span>;
const ChevronRightIcon = () => <span>›</span>;
const StarIcon = ({ filled }) => <span>{filled ? '⭐' : '☆'}</span>;
const AwardIcon = () => <span>🏆</span>;

function DirectLendersHome() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const loanOfficers = [
    {
      name: "Randy Mitchell",
      title: "Senior Loan Officer",
      nmls: "NMLS #123456",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      specialties: ["First-Time Buyers", "Refinancing", "Investment Properties"],
      testimonial: "Randy made everything so easy. He handled every little thing and made the process seamless.",
      phone: "(555) 123-4567",
      email: "randy@mydirectlender.com"
    },
    {
      name: "Lloyd Patterson",
      title: "Senior Loan Officer",
      nmls: "NMLS #234567",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      specialties: ["FHA Loans", "VA Loans", "Jumbo Mortgages"],
      testimonial: "Lloyd was professional, responsive and honest throughout the entire process from beginning to end.",
      phone: "(555) 234-5678",
      email: "lloyd@mydirectlender.com"
    },
    {
      name: "Sarah Chen",
      title: "Loan Officer",
      nmls: "NMLS #345678",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      specialties: ["Home Equity", "Construction Loans", "Debt Consolidation"],
      testimonial: "Sarah provided tremendous service with attention to every detail throughout our transaction.",
      phone: "(555) 345-6789",
      email: "sarah@mydirectlender.com"
    }
  ];

  const testimonials = [
    {
      text: "This was my 5th home I've purchased in my lifetime and Randy was the smoothest process I've ever experienced!! There was no stress, no lots of documentation needed, they did it all!!",
      author: "Michael T.",
      rating: 5
    },
    {
      text: "Randy and his team were extremely helpful during the entire process and made everything possible to make our lives easier. Additionally, he offered us the best rates!",
      author: "Maria G.",
      rating: 5
    },
    {
      text: "I'm a self employed first time home buyer. Randy guaranteed me that he'd get me a stress free experience. True to his word, he did! Everyone on his team was incredibly professional.",
      author: "James L.",
      rating: 5
    }
  ];

  const services = [
    {
      icon: HomeIcon,
      title: "Purchase Loans",
      description: "First-time buyers to seasoned investors, we guide you home with competitive rates and personalized service."
    },
    {
      icon: TrendingUpIcon,
      title: "Refinancing",
      description: "Lower your rate, access equity, or adjust your term. We'll find the right solution for your financial goals."
    },
    {
      icon: ShieldIcon,
      title: "Home Equity Lines",
      description: "Unlock your home's value for renovations, education, or debt consolidation with flexible HELOC options."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-slate-900 bg-opacity-95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center text-2xl">
              🏠
            </div>
            <div>
              <div className="text-white text-xl font-bold tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Direct Lenders
              </div>
              <div className="text-amber-400 text-xs font-medium tracking-wider">LLC</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">Services</a>
            <a href="#team" className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">Our Team</a>
            <a href="#testimonials" className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">Testimonials</a>
            <a href="#contact" className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-2.5 rounded-lg font-semibold transition-all hover:shadow-xl text-sm">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <div className="flex items-center gap-2 bg-amber-500 bg-opacity-10 border border-amber-500 border-opacity-20 rounded-full px-4 py-2 backdrop-blur-sm">
                  <AwardIcon />
                  <span className="text-amber-400 text-sm font-medium">Full-Service Direct Lender</span>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Your Home
                <span className="block text-amber-400 mt-2">Financing Partner</span>
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
                Combining Wall Street expertise with small-town service. We're here to make your homeownership dreams a reality with personalized attention every step of the way.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#team" className="group bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-xl font-bold transition-all hover:shadow-2xl flex items-center gap-2 text-lg">
                  Start Your Application
                  <ChevronRightIcon />
                </a>
                <a href="tel:555-123-4567" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-semibold transition-all border border-slate-700 hover:border-amber-500 hover:border-opacity-50 flex items-center gap-2 text-lg">
                  <PhoneIcon />
                  (555) 123-4567
                </a>
              </div>
              
              <div className="flex items-center gap-8 pt-8 border-t border-slate-700">
                <div>
                  <div className="text-3xl font-bold text-white">$2.5B+</div>
                  <div className="text-slate-400 text-sm">Loans Funded</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">15+</div>
                  <div className="text-slate-400 text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">5,000+</div>
                  <div className="text-slate-400 text-sm">Happy Families</div>
                </div>
              </div>
            </div>
            
            <div className="relative lg:block hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 from-opacity-20 to-transparent rounded-3xl blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop" 
                alt="Beautiful home"
                className="relative rounded-2xl shadow-2xl border border-slate-700 border-opacity-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Comprehensive Mortgage Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From purchase to refinance, we offer expert guidance and competitive rates tailored to your unique needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx}
                className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:border-amber-400 hover:border-opacity-50 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-3xl">
                  <service.icon />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Officers Section */}
      <section id="team" className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Meet Your Loan Officers
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Work directly with experienced professionals who care about your success. Click to start your application.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {loanOfficers.map((officer, idx) => (
              <div 
                key={idx}
                className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-amber-500 hover:border-opacity-50 transition-all duration-300 hover:shadow-2xl cursor-pointer"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={officer.image} 
                    alt={officer.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900 via-opacity-50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {officer.name}
                    </h3>
                    <p className="text-amber-400 font-medium mb-2">{officer.title}</p>
                    <p className="text-slate-300 text-sm">{officer.nmls}</p>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {officer.specialties.map((specialty, i) => (
                      <span key={i} className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-xs font-medium">
                        {specialty}
                      </span>
                    ))}
                  </div>
                  
                  <div className="border-l-2 border-amber-500 pl-4 py-2">
                    <p className="text-slate-300 text-sm italic">"{officer.testimonial}"</p>
                  </div>
                  
                  <div className="space-y-2 pt-2">
                    <a href={`tel:${officer.phone}`} className="flex items-center gap-3 text-slate-300 hover:text-amber-400 transition-colors text-sm">
                      <PhoneIcon />
                      {officer.phone}
                    </a>
                    <a href={`mailto:${officer.email}`} className="flex items-center gap-3 text-slate-300 hover:text-amber-400 transition-colors text-sm">
                      <MailIcon />
                      {officer.email}
                    </a>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 py-3 rounded-xl font-bold transition-all hover:shadow-lg flex items-center justify-center gap-2 mt-4">
                    Start Application
                    <ChevronRightIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section id="testimonials" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600">
              Don't just take our word for it—hear from the families we've helped.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-12 border border-slate-200 shadow-xl">
              <div className="flex justify-center mb-6 text-3xl">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} filled={true} />
                ))}
              </div>
              
              <div className="relative min-h-40">
                {testimonials.map((testimonial, idx) => (
                  <div
                    key={idx}
                    className={`transition-all duration-500 ${
                      idx === activeTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0'
                    }`}
                  >
                    <p className="text-2xl text-slate-700 leading-relaxed text-center mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                      "{testimonial.text}"
                    </p>
                    <p className="text-amber-600 font-semibold text-center text-lg">
                      — {testimonial.author}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`h-3 rounded-full transition-all ${
                      idx === activeTestimonial ? 'bg-amber-500 w-8' : 'bg-slate-300 w-3'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Connect with one of our expert loan officers today and take the first step toward your dream home.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#team" className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-10 py-5 rounded-xl font-bold transition-all hover:shadow-2xl flex items-center gap-2 text-lg">
              Choose Your Loan Officer
              <ChevronRightIcon />
            </a>
            <a href="tel:555-123-4567" className="bg-slate-700 hover:bg-slate-600 text-white px-10 py-5 rounded-xl font-semibold transition-all border border-slate-600 hover:border-amber-500 hover:border-opacity-50 flex items-center gap-2 text-lg">
              <PhoneIcon />
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center text-2xl">
                  🏠
                </div>
                <div>
                  <div className="text-white font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Direct Lenders</div>
                  <div className="text-amber-400 text-xs">LLC</div>
                </div>
              </div>
              <p className="text-sm">Full-service mortgage company serving families with care and expertise.</p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-3">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Purchase Loans</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Refinancing</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Home Equity</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-amber-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-3">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <PhoneIcon />
                  (555) 123-4567
                </li>
                <li className="flex items-center gap-2">
                  <MailIcon />
                  info@mydirectlender.com
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>© 2026 Direct Lenders, LLC. All rights reserved. | NMLS #XXXXXX | Equal Housing Lender</p>
            <p className="mt-2 text-slate-500">Licensed to do business in [States]. Not all products available in all states.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DirectLendersHome />);

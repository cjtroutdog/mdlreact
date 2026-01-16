const { useState, useEffect } = React;

// Lucide Icons (using Unicode/Emoji alternatives since we're in browser)
const PhoneIcon = () => <span>📞</span>;
const MailIcon = () => <span>✉️</span>;
const HomeIcon = () => <span>🏠</span>;
const TrendingUpIcon = () => <span>📈</span>;
const ShieldIcon = () => <span>🛡️</span>;
const ChevronRightIcon = () => <span>›</span>;
const StarIcon = ({ filled }) => <span>{filled ? "⭐" : "☆"}</span>;
const AwardIcon = () => <span>🏆</span>;

function DirectLendersHome() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const loanOfficerRow1 = [
    {
      name: "Randy Bristol",
      title: "Senior Loan Officer",
      nmls: "NMLS #123456",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      specialties: [
        "First-Time Buyers",
        "Refinancing",
        "Investment Properties",
      ],
      testimonial:
        "Randy made everything so easy. He handled every little thing and made the process seamless.",
      phone: "(555) 123-4567",
      email: "randy@mydirectlender.com",
    },
    // Swap Beth's card position with Lloyd (Beth is #2)
    {
      name: "Beth Southern",
      title: "Loan Officer",
      nmls: "NMLS #345678",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      specialties: ["Home Equity", "Construction Loans", "Debt Consolidation"],
      testimonial:
        "Beth provided tremendous service with attention to every detail throughout our transaction.",
      phone: "(555) 345-6789",
      email: "beth@mydirectlender.com",
    },
    {
      name: "Lloyd Fiedler",
      title: "Senior Loan Officer",
      nmls: "NMLS #234567",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      specialties: ["FHA Loans", "VA Loans", "Jumbo Mortgages"],
      testimonial:
        "Lloyd was professional, responsive and honest throughout the entire process from beginning to end.",
      phone: "(555) 234-5678",
      email: "lloyd@mydirectlender.com",
    },
  ];

  const loanOfficerRow2 = [
    {
      ...loanOfficerRow1[0],
      name: "David Summers",
      email: "david@mydirectlender.com",
    },
    {
      ...loanOfficerRow1[1],
      name: "Chris Walker",
      email: "chris@mydirectlender.com",
    },
    {
      ...loanOfficerRow1[2],
      name: "Jimmy Lawler",
      email: "jimmy@mydirectlender.com",
    },
  ];

  const loanOfficers = [...loanOfficerRow1, ...loanOfficerRow2];

  const testimonials = [
    {
      text: "This was my 5th home I've purchased in my lifetime and Randy was the smoothest process I've ever experienced!! There was no stress, no lots of documentation needed, they did it all!!",
      author: "Michael T.",
      rating: 5,
    },
    {
      text: "Randy and his team were extremely helpful during the entire process and made everything possible to make our lives easier. Additionally, he offered us the best rates!",
      author: "Maria G.",
      rating: 5,
    },
    {
      text: "I'm a self employed first time home buyer. Randy guaranteed me that he'd get me a stress free experience. True to his word, he did! Everyone on his team was incredibly professional.",
      author: "James L.",
      rating: 5,
    },
  ];

  const services = [
    {
      icon: HomeIcon,
      title: "Purchase Loans",
      description:
        "First-time buyers to seasoned investors, we guide you home with competitive rates and personalized service.",
    },
    {
      icon: TrendingUpIcon,
      title: "Refinancing",
      description:
        "Lower your rate, access equity, or adjust your term. We'll find the right solution for your financial goals.",
    },
    {
      icon: ShieldIcon,
      title: "Home Equity Lines",
      description:
        "Unlock your home's value for renovations, education, or debt consolidation with flexible HELOC options.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen bg-slate-50"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md py-4"
            : "bg-white md:bg-transparent py-5 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="https://imagedelivery.net/Zxp1JaGxAqaynf9HLRk0UA/6f049967-c9cd-483f-23a0-25ec2fcf1200/intro450w"
              alt="Direct Lenders"
              className="h-16 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className={`transition-colors font-medium ${
                scrolled
                  ? "text-slate-700 hover:text-blue-600"
                  : "text-white hover:text-blue-200"
              }`}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Services
            </a>
            <a
              href="#team"
              className={`transition-colors font-medium ${
                scrolled
                  ? "text-slate-700 hover:text-blue-600"
                  : "text-white hover:text-blue-200"
              }`}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Our Team
            </a>
            <a
              href="#testimonials"
              className={`transition-colors font-medium ${
                scrolled
                  ? "text-slate-700 hover:text-blue-600"
                  : "text-white hover:text-blue-200"
              }`}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                scrolled
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-white text-blue-600 hover:bg-blue-50"
              }`}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              (555) 123-4567
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://imagedelivery.net/Zxp1JaGxAqaynf9HLRk0UA/adde1394-ac1c-4d45-1ac0-f21fcbec9c00/hero')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-slate-900 bg-opacity-20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col items-center text-center">
            {/* Main Headline */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 w-full max-w-full"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(2rem, 8vw, 4.5rem)",
              }}
            >
              A home loan that works for you.
            </h1>

            <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl font-light">
              Combining expertise with personalized service to make your
              homeownership dreams a reality.
            </p>

            {/* Apply Now Box */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 max-w-md w-full">
              <h2
                className="text-3xl font-bold text-slate-900 mb-6"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Get Started Today
              </h2>

              <div className="space-y-4">
                <a
                  href="#team"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:shadow-xl text-lg text-center"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Apply Now
                </a>

                <div className="flex items-center justify-center gap-2 text-slate-600">
                  <span className="text-sm">or call us at</span>
                  <a
                    href="tel:555-123-4567"
                    className="text-blue-600 font-semibold hover:text-blue-700 text-sm"
                  >
                    (555) 123-4567
                  </a>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-around pt-6 mt-6 border-t border-slate-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">
                    $2.5B+
                  </div>
                  <div className="text-xs text-slate-600">Loans Funded</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">15+</div>
                  <div className="text-xs text-slate-600">Years Exp.</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">
                    5,000+
                  </div>
                  <div className="text-xs text-slate-600">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 text-white">
              <p className="text-sm">
                Looking for help?{" "}
                <a href="#contact" className="underline hover:text-blue-200">
                  Get in touch with us
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Yeah, there's a loan for that
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From first-timers to homebuying veterans, we're ready to help.
              Whatever type of mortgage you need, we want to make it work for
              you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:border-blue-400 hover:border-opacity-50 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-3xl">
                  <service.icon />
                </div>
                <h3
                  className="text-2xl font-bold text-slate-900 mb-3"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
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
      <section
        id="team"
        className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl lg:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Meet Your Loan Officers
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Work directly with experienced professionals who care about your
              success. Click to start your application.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {loanOfficers.map((officer, idx) => (
              <div
                key={idx}
                className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500 hover:border-opacity-50 transition-all duration-300 hover:shadow-2xl cursor-pointer"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={officer.image}
                    alt={officer.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900 via-opacity-50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3
                      className="text-2xl font-bold text-white mb-1"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {officer.name}
                    </h3>
                    <p className="text-blue-400 font-medium mb-2">
                      {officer.title}
                    </p>
                    <p className="text-slate-300 text-sm">{officer.nmls}</p>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {officer.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <div className="border-l-2 border-blue-500 pl-4 py-2">
                    <p className="text-slate-300 text-sm italic">
                      "{officer.testimonial}"
                    </p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <a
                      href={`tel:${officer.phone}`}
                      className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      <PhoneIcon />
                      {officer.phone}
                    </a>
                    <a
                      href={`mailto:${officer.email}`}
                      className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      <MailIcon />
                      {officer.email}
                    </a>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-xl font-bold transition-all hover:shadow-lg flex items-center justify-center gap-2 mt-4">
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
            <h2
              className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600">
              Don't just take our word for it—hear from the families we've
              helped.
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
                      idx === activeTestimonial
                        ? "opacity-100"
                        : "opacity-0 absolute inset-0"
                    }`}
                  >
                    <p
                      className="text-2xl text-slate-700 leading-relaxed text-center mb-6"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      "{testimonial.text}"
                    </p>
                    <p className="text-blue-600 font-semibold text-center text-lg">
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
                      idx === activeTestimonial
                        ? "bg-blue-600 w-8"
                        : "bg-slate-300 w-3"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Connect with one of our expert loan officers today and take the
            first step toward your dream home.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#team"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-bold transition-all hover:shadow-2xl flex items-center gap-2 text-lg"
            >
              Choose Your Loan Officer
              <ChevronRightIcon />
            </a>
            <a
              href="tel:555-123-4567"
              className="bg-slate-700 hover:bg-slate-600 text-white px-10 py-5 rounded-xl font-semibold transition-all border border-slate-600 hover:border-blue-500 hover:border-opacity-50 flex items-center gap-2 text-lg"
            >
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
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-2xl">
                  🏠
                </div>
                <div>
                  <div
                    className="text-white font-bold"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Direct Lenders
                  </div>
                  <div className="text-blue-400 text-xs">LLC</div>
                </div>
              </div>
              <p className="text-sm">
                Full-service mortgage company serving families with care and
                expertise.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Purchase Loans
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Refinancing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Home Equity
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Contact
                  </a>
                </li>
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
            <p>
              © 2026 Direct Lenders, LLC. All rights reserved. | NMLS #XXXXXX |
              Equal Housing Lender
            </p>
            <p className="mt-2 text-slate-500">
              Licensed to do business in [States]. Not all products available in
              all states.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DirectLendersHome />);

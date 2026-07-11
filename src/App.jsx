import {
  Phone,
  Mail,
  MapPin,
  Wifi,
  UtensilsCrossed,
  Snowflake,
  Shield,
  BellRing,
  Star,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const ROOM_IMAGE =
  "https://i.ibb.co/vxBcBJwS/1783792043178.png";

const rooms = [
  { name: "Basic Room", price: "24,200" },
  { name: "Standard Room", price: "30,800" },
  { name: "Suite", price: "32,000" },
  { name: "Mini Suite", price: "33,000" },
  { name: "Deluxe Room", price: "44,000" },
  { name: "1 Bed Apartment", price: "82,500" },
  { name: "2-Bedroom Apartment", price: "110,000" },
];

const amenities = [
  { icon: BellRing, label: "24/7 Room Service" },
  { icon: Wifi, label: "High-Speed Free Wi-Fi" },
  { icon: UtensilsCrossed, label: "Restaurant & Bar" },
  { icon: Snowflake, label: "Air Conditioning" },
  { icon: Shield, label: "Top-Tier Security" },
];

function App() {
  return (
    <div className="min-h-screen bg-white font-['Inter'] text-[#1a1a2e]">
      {/* ───── HERO ───── */}
      <section
        id="hero"
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-[#0a1628]/80" />
        </div>

        {/* Navbar */}
        <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 sm:px-8 py-4">
          <div className="flex items-center gap-2">
            <Star className="h-6 w-6 fill-[#c9a84c] text-[#c9a84c]" />
            <span className="font-['Playfair_Display'] text-xl sm:text-2xl font-bold tracking-wide text-white">
              Romeo Suites
            </span>
          </div>
          <a
            href="#rooms"
            className="rounded-full border border-white/30 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10 hover:border-white/50"
          >
            Our Rooms
          </a>
        </nav>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#c9a84c]/40 bg-[#c9a84c]/10 px-4 py-1.5 text-sm text-[#c9a84c]">
            <Star className="h-4 w-4 fill-[#c9a84c]" />
            Premium Hospitality in Lagos
          </div>
          <h1 className="font-['Playfair_Display'] text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Experience Luxury & Comfort
            <br />
            <span className="text-[#c9a84c]">at Romeo Suites</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
            Your premier accommodation choice in the heart of Lagos. Perfect for
            both short and extended stays.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#rooms"
              className="group inline-flex items-center gap-2 rounded-full bg-[#c9a84c] px-8 py-3.5 text-base font-semibold text-[#0a1628] transition-all hover:bg-[#d4b85a] hover:shadow-lg hover:shadow-[#c9a84c]/30"
            >
              Book Your Stay
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="rounded-full border border-white/30 px-8 py-3.5 text-base font-medium text-white transition hover:bg-white/10"
            >
              Explore More
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
          <div className="h-10 w-6 rounded-full border-2 border-white/40" />
        </div>
      </section>

      {/* ───── ABOUT ───── */}
      <section id="about" className="bg-[#f8f7f4] px-4 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop"
                  alt="Romeo Suites lobby"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-[#c9a84c] px-6 py-4 text-[#0a1628] shadow-lg md:block">
                <p className="font-['Playfair_Display'] text-3xl font-bold">
                  5★
                </p>
                <p className="text-sm font-medium">Premium Experience</p>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="mb-2 font-medium tracking-widest text-[#c9a84c] uppercase">
                About Us
              </p>
              <h2 className="font-['Playfair_Display'] text-3xl font-bold leading-tight text-[#0a1628] md:text-4xl">
                Where Luxury Meets
                <br />
                <span className="text-[#c9a84c]">Tranquility</span>
              </h2>
              <p className="mt-6 leading-relaxed text-gray-600">
                At Romeo Suites & Apartments, we offer a serene atmosphere of
                privacy, security, and luxury. Nestled in the vibrant heart of
                Alimosho, Lagos, our establishment provides easy access to local
                attractions while maintaining the peace and comfort you deserve
                for a truly memorable stay.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                Whether you're visiting for business or leisure, our dedicated
                team ensures every moment is crafted with excellence.
              </p>

              {/* Amenities */}
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {amenities.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="group flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#c9a84c]/10 text-[#c9a84c] transition-colors group-hover:bg-[#c9a84c] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── ROOMS ───── */}
      <section id="rooms" className="px-4 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          {/* Section header */}
          <div className="mb-12 text-center">
            <p className="mb-2 font-medium tracking-widest text-[#c9a84c] uppercase">
              Our Rooms
            </p>
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#0a1628] md:text-4xl">
              Suites & Apartments
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-500">
              Choose from our carefully curated selection of premium rooms and
              apartments designed for your comfort.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {rooms.map((room) => {
              const waMessage = `Hello%20Romeo%20Suites,%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(room.name)}%20for%20a%20stay.`;
              const waLink = `https://wa.me/2348122622081?text=${waMessage}`;

              return (
                <div
                  key={room.name}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Room image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={ROOM_IMAGE}
                      alt={room.name}
                      className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Free cancellation badge */}
                    <span className="absolute top-3 left-3 rounded-full bg-green-600/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      ✓ Free Cancellation
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-['Playfair_Display'] text-lg font-semibold text-[#0a1628]">
                      {room.name}
                    </h3>
                    <p className="mt-1 text-2xl font-bold text-[#c9a84c]">
                      ₦ {room.price}
                      <span className="text-sm font-normal text-gray-400">
                        {" "}
                        avg/night
                      </span>
                    </p>

                    {/* Divider */}
                    <div className="my-4 border-t border-gray-100" />

                    {/* Book via WhatsApp button */}
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#1ebe5a] hover:shadow-lg hover:shadow-[#25D366]/30"
                    >
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Book via WhatsApp
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── CTA BANNER ───── */}
      <section className="relative overflow-hidden bg-[#0a1628] px-4 py-20">
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full bg-[radial-gradient(ellipse_at_top,_#c9a84c_0%,_transparent_70%)]"
          />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-white md:text-4xl">
            Ready for an Unforgettable Stay?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-gray-400">
            Contact us today to book your room and experience the best of Lagos
            hospitality.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/2348122622081?text=Hello%20Romeo%20Suites,%20I%27d%20like%20to%20make%20a%20booking%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-[#1ebe5a] hover:shadow-lg hover:shadow-[#25D366]/30"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Book on WhatsApp
            </a>
            <a
              href="tel:+2348122622081"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-3.5 text-base font-medium text-white transition hover:bg-white/10"
            >
              <Phone className="h-5 w-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* ───── FOOTER ───── */}
      <footer className="bg-[#060e1a] px-4 py-16 text-gray-400 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-3">
            {/* Brand */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-6 w-6 fill-[#c9a84c] text-[#c9a84c]" />
                <span className="font-['Playfair_Display'] text-xl font-bold tracking-wide text-white">
                  Romeo Suites
                </span>
              </div>
              <p className="text-sm leading-relaxed text-gray-500">
                Experience luxury and comfort at Romeo Suites & Apartments —
                your premier accommodation in Alimosho, Lagos.
              </p>
              {/* Social links */}
              <div className="mt-6 flex gap-3">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Linkedin, href: "#" },
                ].map(({ icon: Icon, href }) => (
                  <a
                    key={href}
                    href={href}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-all hover:bg-[#c9a84c] hover:text-[#0a1628]"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-sm font-semibold tracking-widest text-white uppercase">
                Quick Links
              </h3>
              <ul className="space-y-3 text-sm">
                {["Home", "About Us", "Our Rooms", "Contact"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="transition-colors hover:text-[#c9a84c]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-4 text-sm font-semibold tracking-widest text-white uppercase">
                Contact Us
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#c9a84c]" />
                  <span>
                    12-14 Amodu Odede Street, Off Ipaja-Command Road, Abesan
                    extension Ipaja, Lagos.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-[#c9a84c]" />
                  <div className="flex flex-col">
                    <a
                      href="tel:+2348122622081"
                      className="transition-colors hover:text-[#c9a84c]"
                    >
                      0812 262 2081
                    </a>
                    <a
                      href="tel:+2348025230207"
                      className="transition-colors hover:text-[#c9a84c]"
                    >
                      0802 523 0207
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-[#c9a84c]" />
                  <a
                    href="mailto:info@romeosuites.com"
                    className="transition-colors hover:text-[#c9a84c]"
                  >
                    info@romeosuites.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Romeo Suites & Apartments. All
            rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

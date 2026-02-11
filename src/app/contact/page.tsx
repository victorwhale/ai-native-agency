import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Get in Touch with an AI-Native Agency",
  description:
    "Want to work with an AI-native agency or learn more? Fill out our contact form and we'll connect you with the right team.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]">
        Get in Touch
      </h1>
      <p className="mt-4 text-lg text-muted leading-relaxed max-w-2xl">
        Want to be connected with an AI-native agency, explore a partnership, or
        simply have a question? Fill out the form below and we&apos;ll get back
        to you.
      </p>

      <form
        action="https://formsubmit.co/jaikin.eu"
        method="POST"
        className="mt-12 space-y-6"
      >
        {/* FormSubmit config */}
        <input type="hidden" name="_subject" value="New contact — AI-Native Agency" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://ainativeagency.com/contact/thank-you" />
        <input type="text" name="_honey" className="hidden" />

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="you@company.com"
              className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2">
            Company{" "}
            <span className="text-muted font-normal">(optional)</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Your company"
            className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            required
            defaultValue=""
            className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
          >
            <option value="" disabled>
              Select a topic
            </option>
            <option value="Connect me with an AI-native agency">
              Connect me with an AI-native agency
            </option>
            <option value="Partnership opportunity">
              Partnership opportunity
            </option>
            <option value="General inquiry">General inquiry</option>
            <option value="Press / Media">Press / Media</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us what you're looking for..."
            className="w-full px-4 py-3 rounded-lg bg-surface border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-y"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center px-8 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent-light transition-colors cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

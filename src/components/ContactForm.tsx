type ContactFormProps = {
  variant?: "dark" | "light";
};

export function ContactForm({ variant = "dark" }: ContactFormProps) {
  const inputStyles =
    variant === "light"
      ? "w-full px-4 py-3 rounded-lg bg-light-surface border border-light-border text-light-text placeholder:text-light-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
      : "w-full px-4 py-3 rounded-lg bg-surface border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors";
  return (
    <form
      action="https://formsubmit.co/victor@jaikin.eu"
      method="POST"
      className="space-y-6"
    >
      {/* FormSubmit config */}
      <input
        type="hidden"
        name="_subject"
        value="New project request — AI-Native Agency"
      />
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="hidden"
        name="_next"
        value="https://ai-native-agency.com/contact/thank-you"
      />
      <input type="text" name="_honey" className="hidden" />

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={`block text-sm font-medium mb-2 ${variant === "light" ? "text-light-text" : ""}`}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your name"
            className={inputStyles}
          />
        </div>
        <div>
          <label htmlFor="email" className={`block text-sm font-medium mb-2 ${variant === "light" ? "text-light-text" : ""}`}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@company.com"
            className={inputStyles}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className={`block text-sm font-medium mb-2 ${variant === "light" ? "text-light-text" : ""}`}>
            Company{" "}
            <span className="text-muted font-normal">(optional)</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Your company"
            className={inputStyles}
          />
        </div>
        <div>
          <label htmlFor="budget" className={`block text-sm font-medium mb-2 ${variant === "light" ? "text-light-text" : ""}`}>
            Budget
          </label>
          <select
            id="budget"
            name="budget"
            required
            defaultValue=""
            className={inputStyles}
          >
            <option value="" disabled>
              Select a range
            </option>
            <option value="Less than $5,000">Less than $5,000</option>
            <option value="$5,000 – $15,000">$5,000 – $15,000</option>
            <option value="$15,000 – $50,000">$15,000 – $50,000</option>
            <option value="$50,000 – $100,000">$50,000 – $100,000</option>
            <option value="$100,000+">$100,000+</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="service" className={`block text-sm font-medium mb-2 ${variant === "light" ? "text-light-text" : ""}`}>
          What do you need?
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className={inputStyles}
        >
          <option value="" disabled>
            Select a service
          </option>
          <option value="Sales automation & lead generation">
            Sales automation & lead generation
          </option>
          <option value="Marketing & content at scale">
            Marketing & content at scale
          </option>
          <option value="Back-office automation (legal, HR, accounting)">
            Back-office automation (legal, HR, accounting)
          </option>
          <option value="Full AI transformation">
            Full AI transformation
          </option>
          <option value="Not sure yet — need guidance">
            Not sure yet — need guidance
          </option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={`block text-sm font-medium mb-2 ${variant === "light" ? "text-light-text" : ""}`}>
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Describe your goals, current challenges, and what you'd like an AI-native agency to help with..."
          className={`${inputStyles} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#f97316] to-[#f59e0b] text-white rounded-lg font-medium text-lg hover:opacity-90 transition-opacity cursor-pointer"
      >
        Get Matched with an Agency
      </button>
    </form>
  );
}

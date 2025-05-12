import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <h1 className="text-4xl font-bold mb-8">Notably Privacy Policy</h1>
        <p className="text-muted-foreground mb-2">Effective Date: May 9, 2025</p>
        <p className="text-muted-foreground mb-8">Last Updated: May 9, 2025</p>

        <p className="text-muted-foreground mb-6">
          At Notably, we care deeply about your privacy. This policy explains what we collect, why we collect it, and how we protect it.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What We Collect</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>
              <strong>Account Information:</strong> Email address and name (via Appwrite authentication).
            </li>
            <li>
              <strong>Notes and Content:</strong> Text you write or upload for summaries, tagging, and task generation.
            </li>
            <li>
              <strong>Google Calendar Access (optional):</strong> Only when you explicitly connect your Google account, and only to create events you approve.
            </li>
            <li>
              <strong>Usage Data:</strong> Basic analytics (e.g., which features are used) to improve the product.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Data</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>
              To provide core functionality like note summaries, tagging, task scheduling, and calendar sync.
            </li>
            <li>
              To personalize your experience and make features smarter over time.
            </li>
            <li>
              To improve our algorithms and user experience (aggregated/anonymized only).
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What We Don’t Do</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>We do not sell your data.</li>
            <li>We do not read your private notes.</li>
            <li>
              We do not access your Google Calendar without your explicit permission every time.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Your data is stored securely using Appwrite infrastructure.</li>
            <li>All communication is encrypted (HTTPS).</li>
            <li>
              Access tokens for services like Google Calendar are not stored permanently.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Control</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>You can delete your notes or account anytime.</li>
            <li>
              You can revoke calendar permissions via your Google account settings.
            </li>
            <li>
              You can contact us at support@notablyai.me for any privacy-related concerns.
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

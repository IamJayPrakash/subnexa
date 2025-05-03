import { Metadata } from 'next';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'Privacy Policy | Subnexa',
  description: 'Read how Subnexa handles your data, privacy, and cookies. We value your privacy.',
};

export default function PrivacyPolicyPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-24">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-center">Privacy Policy</h1>
        <p className="text-muted-foreground text-center text-lg">Last updated: May 3, 2025</p>

        <Separator className="my-6" />

        <div className="space-y-4 text-sm md:text-base text-muted-foreground">
          <p>
            At <strong>Subnexa</strong>, we respect your privacy. This Privacy Policy outlines how
            we collect, use, and protect your information when you use our platform.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6">1. Information We Collect</h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>We do not collect any personal information unless explicitly provided.</li>
            <li>
              Basic analytics may be collected (e.g., page views, clicks) using privacy-focused
              tools.
            </li>
            <li>We do not track or store sensitive data like passwords or IP addresses.</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground mt-6">2. Cookies</h2>
          <p>
            We use cookies to enhance user experience. Cookies are small text files stored in your
            browser. You can disable cookies in your browser settings at any time.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6">3. Third-Party Services</h2>
          <p>
            We may use third-party tools (like GitHub or Vercel Analytics) to improve our service.
            These tools may collect anonymized data as per their respective policies.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6">4. Data Security</h2>
          <p>
            We follow best practices to protect your information, though no system is 100% secure.
            We do not store sensitive user data on our servers.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6">5. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your data. For any requests, contact us
            at{' '}
            <a href="mailto:iammrjayprakash@gmail.com" className="underline text-foreground">
              iammrjayprakash@gmail.com
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-6">6. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Updates will be posted here with a
            revised effective date.
          </p>

          <Separator className="my-6" />

          <p className="text-xs text-center text-muted-foreground">
            © {new Date().getFullYear()} Subnexa. Built with ❤️ by Jay Prakash.
          </p>
        </div>
      </div>
    </section>
  );
}

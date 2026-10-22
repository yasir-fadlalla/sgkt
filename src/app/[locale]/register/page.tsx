import { redirect } from 'next/navigation';

export default async function RegisterPage({ params }: { params: Promise<{ locale: string }> }) {
  // We now use a Modal for registration, so this route redirects to home.
  const { locale } = await params;
  redirect(`/${locale}`);
}

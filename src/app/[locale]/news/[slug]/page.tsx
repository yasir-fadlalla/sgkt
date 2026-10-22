export default async function SingleNewsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="p-24">
      <h1 className="text-3xl font-bold mb-4">تفاصيل الخبر (News Details)</h1>
      <p>الخبر الحالي: {slug}</p>
    </div>
  );
}

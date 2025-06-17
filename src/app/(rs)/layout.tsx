import Header from '@/components/Header';

export default async function RSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='mx-auto w-full max-w-full'>
      <Header />
      <div className=''>{children}</div>
    </div>
  );
}

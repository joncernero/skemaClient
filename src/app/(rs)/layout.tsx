import Header from '@/components/Header';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default async function RSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='mx-auto w-full max-w-full'>
      <ScrollToTop />
      <Header />
      <div className=''>{children}</div>
    </div>
  );
}

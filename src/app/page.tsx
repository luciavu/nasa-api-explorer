import StyledLink from '@/components/StyledLink';
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="ml-10 mr-10 flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-white ">Explorer</h1>
        <p className="text-lg text-gray-300 ">
          A web application to explore{' '}
          <StyledLink href={'https://api.nasa.gov/'}>NASA API</StyledLink> data.
        </p>
        <StyledLink href="/apod" target_blank={false}>
          Astronomy Photo of the Day
        </StyledLink>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}

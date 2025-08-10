import LinkSummary from '@/components/LinkSummary';
import StyledLink from '@/components/StyledLink';
export default function Home() {
  return (
    <div className="mx-5 md:mx-2 box-border flex flex-col min-h-screen p-4 sm:p-8 md:p-20 gap-8 overflow-x-hidden">
      <main className="flex-1 min-w-[280px]">
        <div>
          <h1 className="text-4xl md:text-6xl font-semibold text-white mb-4">Explorer</h1>
          <p className="text-lg text-gray-300 ">
            A web application to explore{' '}
            <StyledLink type="underline" href={'https://api.nasa.gov/'}>
              NASA API
            </StyledLink>{' '}
            data.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
          <StyledLink type="summary" href="/apod" target_blank={false}>
            <LinkSummary
              heading="APOD: Astronomy Picture of the Day"
              description="Discover the universe with NASA's Astronomy Picture of the Day: one of the most popular websites at NASA."
            />
          </StyledLink>
          <StyledLink type="summary" href="/apod" target_blank={false}>
            <LinkSummary
              heading="APOD: Astronomy Picture of the Day"
              description="Discover the universe with NASA's Astronomy Picture of the Day, one of the most popular websites at NASA."
            />
          </StyledLink>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}

import Image from 'next/image';
import Heading from '../Heading';
import Table from '../Table';
import Text from '../Text';
import StyledLink from '../StyledLink';

export default async function APODPage() {
  const apiKey = process.env.NASA_API_KEY;
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

  try {
    const response = await fetch(apiUrl, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    const apodData = await response.json();
    console.log('apod api call');

    if (!response.ok) {
      throw new Error(apodData.msg || 'Failed to fetch APOD');
    }

    return (
      <div className="container mx-auto p-4 flex flex-col justify-center md:flex-row md:items-center md:justify-between gap-4">
        <div className="w-full flex items-center justify-center">
          {apodData.media_type === 'image' ? (
            <Image
              className="max-w-full md:max-w-3/4 h-auto"
              src={apodData.url}
              alt={apodData.title}
              width={800}
              height={600}
              priority
            />
          ) : (
            <div>
              No preview available for this media type - please view{' '}
              <StyledLink
                type="underline"
                href={`https://apod.nasa.gov/apod/ap${apodData.date
                  .slice(2)
                  .replace(/-/g, '')}.html`}
              >
                here.
              </StyledLink>
            </div>
          )}
        </div>
        <div className="w-full md:w-2/5 p-4">
          <Heading
            title={apodData.title}
            subtitle={apodData.media_type.charAt(0).toUpperCase() + apodData.media_type.slice(1)}
          />
          <div className="my-8">
            <Table
              data={[
                { date: apodData.date },
                { copyright: apodData.copyright },
                {
                  url: (
                    <StyledLink
                      type="underline"
                      href={
                        apodData.hdurl ||
                        `https://apod.nasa.gov/apod/ap${apodData.date
                          .slice(2)
                          .replace(/-/g, '')}.html`
                      }
                    >
                      View in HD
                    </StyledLink>
                  ),
                },
              ]}
            />
          </div>

          <Text>{apodData.explanation} </Text>
        </div>
      </div>
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching APOD:', error.message);
    }
    return <p>Error fetching APOD.</p>;
  }
}

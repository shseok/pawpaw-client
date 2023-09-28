import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const input = searchParams.get('searchResult');
  if (!input) {
    return NextResponse.json({ error: '정보가 없습니다.' }, { status: 400 });
    // return NextResponse.json(JSON.stringify({ message: '정보가 없습니다.' }), {
    //   status: 400,
    // });
  }
  const autocompleteUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&types=(regions)&language=ko&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`;
  const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${input}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`;

  async function fetchData(urlString: string) {
    const response = await fetch(urlString).then((res) => res.json());
    return response;
  }

  try {
    const [autocompleteResult, geocodeResult] = await Promise.all([
      fetchData(autocompleteUrl),
      fetchData(geocodeUrl),
    ]);
    const { lat, lng } = geocodeResult.results[0].geometry.location;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const predictions = autocompleteResult.predictions.map((prediction: any) =>
      prediction.description
        .split(' ')
        .filter((str: string) => str !== '대한민국')
        .join(' '),
    );
    return NextResponse.json(
      { predictions, location: { lat, lng } },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({}, { status: 400 });
    // return res.end();
  }
}

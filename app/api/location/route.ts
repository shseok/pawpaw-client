import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const latitude = searchParams.get('latitude');
  const longitude = searchParams.get('longitude');
  if (!latitude || !longitude) {
    return NextResponse.json({ error: '정보가 없습니다.' }, { status: 400 });
    // return NextResponse.json(JSON.stringify({ message: '정보가 없습니다.' }), {
    //   status: 400,
    // });
  }
  try {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&language=ko&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`;
    const response = await fetch(url).then((res) => res.json());
    const koAddress = response.plus_code.compound_code
      .split(' ')
      .slice(1)
      .join(' ');
    return NextResponse.json({ koAddress }, { status: 200 });
  } catch (error) {
    return NextResponse.error();
    // return res.end();
  }
}

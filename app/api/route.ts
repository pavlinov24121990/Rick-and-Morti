import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const status = searchParams.get('status')
  const gender = searchParams.get('gender')
  const currentPage = searchParams.get('currentPage')
  const species = searchParams.get('species')
  const name = searchParams.get('name')
  const res = await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}&status=${status}&gender=${gender}&species=${species}&name=${name}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()
  return NextResponse.json({ data })
}



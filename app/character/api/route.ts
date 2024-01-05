import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()
  return NextResponse.json({ data })
}

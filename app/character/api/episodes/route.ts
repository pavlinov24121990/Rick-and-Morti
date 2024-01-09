import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get('url')
  const res = await fetch(`${url}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()
  return NextResponse.json({ data })
}

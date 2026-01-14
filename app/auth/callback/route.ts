import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (code) {
    const cookieStore = cookies();
    // Si esta librería también te da error, podemos usar la nueva @supabase/ssr
    // Pero por ahora, esta es la forma estándar de procesar el código.
  }

  return NextResponse.redirect(new URL("/", requestUrl.origin));
}

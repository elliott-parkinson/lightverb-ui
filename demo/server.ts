const publicDir = new URL("./public/", import.meta.url);

function contentType(pathname: string): string {
  if (pathname.endsWith(".js")) return "application/javascript; charset=utf-8";
  if (pathname.endsWith(".css")) return "text/css; charset=utf-8";
  if (pathname.endsWith(".png")) return "image/png";
  if (pathname.endsWith(".svg")) return "image/svg+xml";
  return "text/html; charset=utf-8";
}

Deno.serve(async (request: Request) => {
  const url = new URL(request.url);
  const pathname = url.pathname === "/" ? "/index.html" : url.pathname;
  const target = new URL(`.${pathname}`, publicDir);

  try {
    const file = await Deno.readFile(target);
    return new Response(file, {
      headers: { "content-type": contentType(pathname) },
    });
  } catch {
    const fallback = await Deno.readFile(new URL("./index.html", publicDir));
    return new Response(fallback, {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

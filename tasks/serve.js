import { Application } from "https://deno.land/x/oak/mod.ts";
const app = new Application();
app.use(async (ctx) => {
  console.log(Deno.cwd()+'/public');
  await ctx.send({
    root: Deno.cwd()+'/public',
    index: 'index.html'
  });
});

if (Deno.args.indexOf('https') >= 0) {
  await app.listen({ port: 8443, secure: true, certFile:'./localhost.pem', keyFile:'./localhost-key.pem'});
} else {
  await app.listen({ port: 8080, hostname: '0.0.0.0' });
}

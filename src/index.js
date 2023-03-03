const doMaths = () => {
  let xl = 1;
  for (let i = 0; i < 1000000; i++) {
    if (xl++ & 1234 < xl) {
      xl++;
    }
  }
  return xl;
}

addEventListener("fetch", event => {
  // NB: date is not the most reliable way of getting time, but process.hrtime is not defined in the fastly environment
  const t1 = new Date().getTime()
  doMaths()
  const t2 = new Date().getTime()
  const message = `Doing maths took ${t2 - t1}ms`
  console.log(message)

  event.respondWith(new Response(message));
});

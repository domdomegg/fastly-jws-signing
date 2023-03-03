const jsrsasign = require('jsrsasign')

addEventListener("fetch", event => {
  const jwt = jsrsasign.KJUR.jws.JWS.sign(
    "RS256",
    JSON.stringify({ alg: "RS256", typ: "JWT" }),
    JSON.stringify({
      iss: "example",
      scope: "https://www.googleapis.com/auth/logging.write",
      aud: "https://oauth2.googleapis.com/token",
      exp: new Date().getTime() / 1000 + 3600,
      iat: new Date().getTime() / 1000,
    }),
    // example key, generated fresh for this purpose
    `-----BEGIN RSA PRIVATE KEY-----
    MIICWwIBAAKBgQCkUxj5yJojgShmIjucfoKHOWHsr+L1cWwheBR4aLZpnIYhD/5w
    d8sU4ZFUtU3y8YyFCsHu0heqS2sdebiRhV1JrSN03HrQOWhuhMIKWxy7a5HzKKkK
    aJ0zPB0EHyTEs03Kl5VEoqdOEE/0sWGf7BqWSMFzZoVnN0flxoEbfWjnpwIDAQAB
    AoGAMjMknSI4XIJXiiQJG/zV+WOBU+JDroGw6+SYNFSg7VCg9TbCny8pfj6OvFcK
    8h3ytK4doszR5/dUSNPnm6UnYx5CyuXytm6oFjdVH3+9u83OcrsY1Ge4NSLTzbu0
    3HCVF3mX+iixNbv1VRJM/k7s7fAp7c+KIM3jsXeyNcUfC4kCQQDSfmftAcxTbooU
    P/U46p5BBAdckUCW++7rrRvBxvL3BDIFc68J8HDjfEeySdbYUFo4vyjQmWfI7np1
    Vg7bFWb7AkEAx9l/v9kDD/+8yG/jsIuz1hiIkQMEO9PQZAOfsSzEoumBD3JVsYdB
    DIOrd32PDYjIKfEbRPH9g0mPLa0/w2uSRQJAAWTY51bltX+75lpuE0xqc9/E9LX5
    iYZtlJ322xeoMD6U3jhf5l7zQG5oQyP+Cjyt/EY3zPnXGBuMMA671nOT1QJACJvG
    0/W+GwdSE3Q2Y5lw8qz13QE7QnR6SoSZcWFTSw0x4P90z4Pa+nYFgc0nx1Z4AM6A
    9TRTTj9x6m7HC1zr3QJAF0F0X0kkKkqZYg0dEfk1zXjTrc8t7y4vjy4OlFa+zgIX
    kPurVUg7MOG/bfqh/PnV5ElUrG8DN9DTDuDXwvFoJg==
    -----END RSA PRIVATE KEY-----`
  )

  event.respondWith(new Response(
    `Here's a token, made just for you: ${jwt}`
  ));
});

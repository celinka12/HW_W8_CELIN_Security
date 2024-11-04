//alice.js
const crypto = require("crypto");

// key alice private
const alicePrivateKeyPem = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDHYsdTlUHy8tit
UhqWEvMddIQpNBrFhFEZgyuIfNBCAPgLsmFiym6fiTVOrTBtKFUfr2zobntnvUVd
e8peOMuTEdxZtKgptIAwOiG+Mpi28MKXu9hDRVLkJ9MzweY931lxfwGiG119NY9i
MRheAa8y0Ya2baowstQohcz5oEpSONJZBOw0HA6DA9IGtqHt8jnli3lqpzlVzGzP
uyhOhhNz29+9JeRAMd6K1iNDhHHwJPgMRbv+7xnDmZ0ghctI1S9GYHEczGZXc5n/
jdzTNXrna7pyGYLNOn9xVtWuaKa29QGpArjQqkPF/h2kSBJjdVrwRtb0qeN8ckWj
LZPJ3hwFAgMBAAECggEAElktvKxcoE3m0LRgi/T8eHZzfxMzb3/Iss9WXz4VMC3E
pdbpjVzRp07KIA5iCXmPs9XB8PXR128chgjRS7BwU31uSLcOTqA0t7txxX4EfblU
PwBjW3VytlpP3lB2rrTyFza34MIh7VbTdhbMhkIjbErJ2dnnsomSapQ9k69Dh6NX
OTdlccXGf1vRlKBgxsv7J265jKjHbmoB62Z3XyP06FCNmJbv4CyvTxZv02xtvhjS
5DJ8Jrp0XO0LLaGTlnjQXtHgHYcFU9LJ2kcfJdN13BxtJE8+nsxvHIy1AUTZSmrv
XR+NOLXLi6Ine/y2Ofc8RhZNrdjm2QC2IW7KvsLY1QKBgQD45Cs09TaAizg1mEi7
P5Lix6UpHhfYz2VRyDbmyC+JKEG/wHCf4ioRPYT8Oe5gZ4roa+Km0AltMYIqfdfs
kdmZ+KqDPdjrfdBJxfJZYa7xRp8afuSLzi0HqlWg7XnWkUt3L/6YwmE4Bvb6+JwC
Pi+a63EnrLjJ4M5Ae7tN4C0DpwKBgQDNFKNwpgjRHS2VBtErGU6+1zAAx2OGbBv1
qIumx0TAs4k8FMuo1eDFtq6gD497at1XMR3WGO0ZOEF3XGWSpaWtLK0aVrB2MANt
jaeCC3+sqlZ7qzMkf3751jVkjOYLj+X+xqfqOLCFjUrVfswEUQQdxXqPZYufEQa/
PLc+FD3IcwKBgQD1nxcUuDoFOV9LZPHB+MdYjnXr0gruqB3xS4kCz+Q5k0Tvm1aK
MoQZZ4Dp+bHJ6eUn4fBXd08WN5mhnXeNu5HnZYPA6TQ9kngPlg3JL6GZ8nvphfi+
D8ZYnjzLCBEJM3IqOW8kChAvXpA2tUog3IXWeSu+X7ItaHGjKXh7LhS+WQKBgFVL
JSK/22DlisS1fh83ulmC9BMO2mTY59QHEnX94KlowkX7vCxvL7nrXbtyXVGOQ5p0
8hzOZyYbEJdNFW2leT+KGkCfF2tAUtyokqdyktpESg3LSUz/vda48aHtO+xJH/YT
t1ih1UDmX95liwKsk1KyhGPJbwVsNmspHGk0T/HjAoGAAjRW0BiLOWYfJv8y5aSa
/WN/237zAZYMxkyjnEPEIj1vxQZqtWhqzlRG+gxadpF9jKuQ6ZXvuDruN6tsNszq
alYUQ83B9pATqku1mrQ69djx4NQVKmjJpHwiy6YezRxcgoltXPkUU7Z3Aju75NRL
+aAukn5gKKhhqI3lLkLNkic=
-----END PRIVATE KEY-----`;

//key bob private
const BobPublicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2YXbRRraNBxy0QmvL+mf
EIIN3m0UkxipV1zkSxPZmVeeRiQkzThGVXGyvoov0n+jZu3V9W3ekvqH/srWt+EL
LPyWChq2TgVuX0RkIRFaH7zXnkXbEuZB3d5fhHpvGXHX7iB3RHflPPmlPrHyKUrn
lkuZaqFcJNGvpdehA8RbDI5Zd03SVvoGlFto5zsTZVmAGCvjeWNwsKNWjkoFlrlj
xu7bRuenhLwkDG49AsVDaZokO0CObwpdLbs9K0/wcJra+qkBkz6QwMK+MBA8Xn9H
DF3FKFWKE8TWE+jVh1oG+1h9mkW9LpO6TDmfk6ErpvcoYwDUqrAMR9IuF2Am/ZTk
/wIDAQAB
-----END PUBLIC KEY-----`;

const message = "I want some apples";


// generate signature alice
const signer = crypto.createSign("sha256");
signer.update(message);
signer.end();
const signature = signer.sign(alicePrivateKeyPem, "hex");

// encryption message use bob public key
const encryptedMessage = crypto.publicEncrypt(
    BobPublicKey,
    Buffer.from(message)
);

console.log("Signature:", signature);
console.log("Message:", encryptedMessage.toString("hex"));
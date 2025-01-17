// bob.js
const crypto = require("crypto");

// Bob's private key (used for decryption)
const BobPrivateKeyPem = `-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDZhdtFGto0HHLR
Ca8v6Z8Qgg3ebRSTGKlXXORLE9mZV55GJCTNOEZVcbK+ii/Sf6Nm7dX1bd6S+of+
yta34Qss/JYKGrZOBW5fRGQhEVofvNeeRdsS5kHd3l+Eem8ZcdfuIHdEd+U8+aU+
sfIpSueWS5lqoVwk0a+l16EDxFsMjll3TdJW+gaUW2jnOxNlWYAYK+N5Y3Cwo1aO
SgWWuWPG7ttG56eEvCQMbj0CxUNpmiQ7QI5vCl0tuz0rT/Bwmtr6qQGTPpDAwr4w
EDxef0cMXcUoVYoTxNYT6NWHWgb7WH2aRb0uk7pMOZ+ToSum9yhjANSqsAxH0i4X
YCb9lOT/AgMBAAECggEANB/j5eDj5fXlO5tW/CO/Bq0rlp/L/N29gp5TZHxKufip
iERT/0tba1E2FHu3rvkAFoOqsEfWPKFFYnSH1INccrjKWXyCMBsUEkcouVXXo2BU
yOwTbal4oiqN+AiAw/eoVzs3aVRTvfNSuj3Y+jUlXroZ9tfY5UfMD/Emd+kfKlgm
3IsDe6C6qZNTMv6tL6EZqU3AS4v5TGLoPHZxfwBPs3mYVPLIz+k67miPIgvJ+taS
/T3ax1JKq1JTf22R/U3UuLdBbGtikwBm5WaFErGiPJbk+4t8TJNqETn9P71vZtLE
OC3woUYlUDQuwLFqeK9Xe2VQIMgEYF8rd74RhBOIwQKBgQD7abPjrGVF4JVxjXxD
o9wWbbjil3Jatz0Qr3GqiYumEOSemXr1uDr8gViHBfKS8DI5MjB6/QjSXh6Y/Uqf
FTLBaWubfyHDUvDG+5IF08kQy21j0ijgQpdXXymCd0JPvwKmRG2eJ7RRMQWRJZq+
mLPPlL5mdGJKZMNArbakk+WjQQKBgQDdfdxPTgttiZQGAAB8TkLc3fIZ6HMbCbi/
A5GJUJYx6JWyHAzCL7ZKU9c2Qkh45MnM9oPFvD1qiotbZDI8mYZWghJzilbNPk2P
3At6fUSm12l0hiH47ux1o+6Qud18bvz1fCpYy1hKJysbmEyVRM85PB2dOyJ3oy6N
10+F+vu4PwKBgDXcN0WXMTr/GgTxoqV6/TNw3iLs/vqgNtzUOS2nudsh01iG2Oi7
RyfBLg3/IDCKdLf8IJa4jqNCtptf6BScnfsBcqQlYD5QDnUSf/3vmSuX6R9xboBc
w79cC7B/jB05dn/YOQOgzeh28BJgU/5xCFR4MTIRzNzTKWE51d78MD4BAoGACjoP
fBHscShTD1vcqeCrMauFzDBxcCQoxZkSlTaFWNSWZNzqseSmFBR+8WBqHDrkHnSb
bPveEhdHi/a6YxXrn/7tfyw6CcwApM3SMduq2dFEaz7uPqI5hM0G7OPIGEC/qU4M
XoE1GGdqlCGaF6JPtyLRczsRwlhkg+QXJeaKzN0CgYBP9+nTBKYLBWs26RmVyxgZ
P/70TOXLjpHyPz3yaLdavHe25Zg/XJeLfDNOZj+6KKEiKK4XtETdtT6RuRyan9CR
k+FyuaqnM0MKbmgUW+0uHvdMowBgHXsR318rb88D2fRWml9r+7qElQyOsz6D/VuC
UT1dNwT5j9h5Ff4L2sCBxg==
-----END PRIVATE KEY-----`;

// Verify the signature using Alice's public key
const alicePublicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAx2LHU5VB8vLYrVIalhLz
HXSEKTQaxYRRGYMriHzQQgD4C7JhYspun4k1Tq0wbShVH69s6G57Z71FXXvKXjjL
kxHcWbSoKbSAMDohvjKYtvDCl7vYQ0VS5CfTM8HmPd9ZcX8BohtdfTWPYjEYXgGv
MtGGtm2qMLLUKIXM+aBKUjjSWQTsNBwOgwPSBrah7fI55Yt5aqc5Vcxsz7soToYT
c9vfvSXkQDHeitYjQ4Rx8CT4DEW7/u8Zw5mdIIXLSNUvRmBxHMxmV3OZ/43c0zV6
52u6chmCzTp/cVbVrmimtvUBqQK40KpDxf4dpEgSY3Va8EbW9KnjfHJFoy2Tyd4c
BQIDAQAB
-----END PUBLIC KEY-----`;

// Received data from Alice
const receivedSignature = "a9b0aeaeac816d406f0f2de52d47ceaa64a565ff15353dc933cd6c5a5bf26a0f4dc64cf3041d4a90df047ab7c4aede00b7f0a98ea70719a37bb474449b7814c7175cbf5804720b6e2f07fdf81a1732db7eef986b4370adc062ea09a4f31a37ccecdf46fb2a5fd76dc3ec49f2d68b14deb91791d0720445114f4a8d775beb78855d16f4e31ba1a79884fd491310374b60d91ec0274254aac9b84bb15c218283a39b7b2eab9e0730022d7ba744027833e2a2264ed421996355c65397a7bcbe23668ca2d99d61c97843b67853c8dabeb67992314f5b409f7d4e9f07f616ebfeef1c595180209f31abfaa474391ecbab86c1211ea4c28fde5186323708ac13d1527b"; // Replace with Alice's actual signature
const receivedEncryptedMessage = "7887a586b6a432c7345a023f87bfd803e6142e50b8d1217f19e07e9a2682250c70754d508b42ef9fb65ad9728181f6e79d28c2e95b3d35ff8fb8f1947bf3b0d8b799bab95cdb422bede9e16906ed6084359793f0f6edfcd0e713431b52e40ba2a6ddc7019a574c82bc76bc0752d5ea2c4bd8489771a9da644603d9f730947ef512aa29211d35db1244cfe011655da6b796aefce30ad3a25ccc25b4eb84976baaab14598d48e42f4b158f76571974ec8ad9adc3b7d99390c3e31e3769ee0412a3f5440d69a6f61ec04562d6729c397fb3462759fb2b0f86d147faa1c85ce33aaed1a692c88cec394602d781358b18d69043c77818151ce9ee864380eefabfae62"; // Replace with Alice's actual encrypted message

// Decrypt the message
const encryptedMessage = Buffer.from(receivedEncryptedMessage, "hex");

const decryptedMessage = crypto.privateDecrypt(
    BobPrivateKeyPem,
    encryptedMessage
);

// Verification signature use Public Key Alice
const verifier = crypto.createVerify("sha256");
verifier.update(decryptedMessage.toString());
verifier.end();
const isVerified = verifier.verify(alicePublicKey, receivedSignature, "hex");

console.log("Signature Verification:", isVerified);
console.log("Message:", decryptedMessage.toString("utf8"));
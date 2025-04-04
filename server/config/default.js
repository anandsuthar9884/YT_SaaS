module.exports = {
    origin: "http://localhost:3000",
    saltWorkFactor: 10,
    accessTokenTtl: "15m",
    refreshTokenTtl: "1y",
    publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCXzZerpx9qdaelwt1U7NCpWXQK
km1OW4ohDF/7g01xDtYf8Nox9wzhhVQrFD+G4eaJoWxIhJYQTgT4ijMlpjXs07Mc
wktcMX49h6Eoo6ZddOMl380UpivkaO+h80miG4JCFAM0G0pUoeNT8h6L9zHqr/yE
oBRd3RAsqxeCKwKrswIDAQAB
-----END PUBLIC KEY-----`,
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAlnfH6nnjuZaj3WW22leVQ2m/IGWpLiLN6ztuBt0A9NHd7o7i
3vYXDrSBjcn9SOQZFoAnJlMVqe+13/GoMhyWpHQr2TxYrQBP89xaBYEhJ1ta+4pL
qAcsLxOuKiMjUd3jYdQjnBHmNnDFxx4IBE9IqRCPaZhgsqXVAN70ND1ttl1bU41K
E++Xk1YEdzGM2vHVIObJLrG5rnVGdYZ8V1FhbfWUlYiN7fMK9j9HPHiH8KDjnegp
9kIlDQNrOCDno3/rlG+nnP/Re8LHyEZ3DHiwYTmubzb3ANcTbVeD8K2vYTWHCpHH
onxeh++j97HyKEEWCl+MFCKOPuLMzHYJs8XatwIDAQABAoIBAAIzEgsNaRTHbPHJ
kNi0OwxXOWIB2m1AOP5dSghzppXtk27vS8Wylzexz8sAzuEH5I39pZTb1g873868
O5cv78vLnvB3/1vYC1MnP3GhJ5jprvTKWrzEDhNKGFupU9TYh4Bgl3yqjlDxaRK2
D6vwdMFz6oTCo3c5EVoH6E3zL+1gfixcMTGeYVvv13rGZOf23eTeJQDYw43LotYp
GEJkhQB4zUS/bXESLYSgQB1EvKkUJf2I93bya1WdediLtvWrUV1DqRX2YnRBKUSu
ASpXw2e8i89t68flp0lSwo1gidUDSwrdEOq/7ZVlONq8NaaojaAToc/DBB2prDMR
iO95CVECgYEA5XqEwbrUlUyfo5vap3v4tnbypIaUGy/NQ84QY8pQbEq+nk6G9vjl
dG1KY6E496KiRle9yjaiJMHrxGvDy7XF8/4crEQlG9i1RQj0EGqnYVpRjOgpK2N6
QrDISiwgzyFc5RLiZk6RzDN+9ZkTcJySr/aXO6/LLGHoAf6TnCjEmZMCgYEAp9ub
n+oN676kXPNsW+wgtOoTtcLmdsvVRPrada53O2tq32qgzd8+ELVgpkYLNPap4tY1
3V3aLj8eNX1iDSD1jIrTsKATyLTK1Rg7/ttKKTcFHLldGsLszLwDO95yXW4K2xyI
bJmz+A42XBODJWOLDKgFziYf1R9OvLXnxXUZoM0CgYEAtQrL4et7+63P5Ev5XVk5
BvsgwxxJjIlR78SKua/LcyQk7tAVOpNysz/mCGQRhY0RaV2fpgEkOsujLfu3JOfr
nGtGQ8IfZLC7khNWOf1qwCt5WyluEYUR17uQyLO3zrILj84uP3iNHgUijLCP3bAp
KhnphnVSXVmAqNInsnOXZ3ECgYAO5sYICkU2GnSI8+s4tdupc+ZQCn9fKHVEbGic
beKT2dNhBhxEan8eCJwN5sXz67nlM1MQ1dYaqOvLn9fmhniGA4ULdwqKlNI03LPm
yhzpT8Maa7JCP++5tS8sT3EjrjM0hHHwAi0h5lEZF3pbBV1AwGHTjTriNqdMxXFP
7DdcOQKBgA2sdMFYX2S87jozvn2Pol277tLdUTuPApAjfY7bLhYR2WPWstlc/4K9
rWMSEJbydqHLm+D5Yb9AxI2viOLQvcppgEFqvoj+d3x4SMOslQKGyoerr0IvJ8dz
9btpXELq2c9DBuMu/YlnreKN1co5GpP9vPUySm+E8obT5vuAHHAl
-----END RSA PRIVATE KEY-----`,

    googleClientId:
        "559102681862-bcbqu4ed3hrtg43v3mju7o03t8rl934j.apps.googleusercontent.com",
    googleClientSecret: "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",
    googleOauthRedirectUrl: "http://localhost:1337/api/sessions/oauth/google",

    S3AccessKey: "AKIA3ULL222AB25ZUN4C",
    S3SecretAccessKey: "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",
    S3BucketName: "ytsaas",
    S3Region: "ap-south-1"

};

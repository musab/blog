---
title: Generating Ed25519 SSH deploy keys in Go
publish_date: 2022-04-05
---

It took me a long time to discover how to do this, sharing with others hoping
it would help someone else someday.

The task was to generate Ed25519 specific SSH keypairs in Go for the purpose of being
used as deploy keys. Using `ssh-keygen` gets you a PEM-encoded private key and a correctly encoded public key. You don't get the same when using the
[crypto/ed25519](https://pkg.go.dev/crypto/ed25519) package.

Let us begin by first correctly encoding the public key.

```go
type Key struct {
	PublicKey                ed25519.PublicKey
	PrivateKey               ed25519.PrivateKey
	PublicKeyEncodedToString string
}

func GenerateEd25519Keys() (*Key, error) {

	const sshAlgoType = "ssh-ed25519"

	pubKey, privKey, err := ed25519.GenerateKey(rand.Reader)


	pubPublicKey, err := ssh.NewPublicKey(pubKey)

  // pubPublicKey is not encoded in the correct format a typical VCS requires.
  //  - does not include the `ssh-ed25519` prefix
  // Here we prefix the public key with the algorithm type.
	sshPubKey := sshAlgoType + " " + base64.StdEncoding.EncodeToString(pubPublicKey.Marshal())

	return &Key{
		PublicKey:                pubKey,
		PublicKeyEncodedToString: sshPubKey,
		PrivateKey:               privKey,
	}, nil
}
```

Next, we PEM encode the private key. This is the same as the private key generated by `ssh-keygen`.

```go
func PrivateKeyToPEM(privKey ed25519.PrivateKey) ([]byte, error) {
	keybytes, _ := x509.MarshalPKCS8PrivateKey(privKey)

	keyBuf := &bytes.Buffer{}
	err := pem.Encode(keyBuf, &pem.Block{Type: "PRIVATE KEY", Bytes: keybytes})

	return keyBuf.Bytes(), err
}
```

Play with this code in a [Go Playground](https://go.dev/play/p/9tMbZ7umzFq).

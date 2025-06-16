<p align="center">
  <img src="assets/zeronorth-logo.png" alt="Zero North Vault Logo" width="200"/>
</p>

<h1 align="center">Zero North Vault</h1>

<p align="center">
  Your personal 1-of-1 cipher engine — a sovereign, offline cryptographic artifact.
</p>

---

> **TL;DR**:
> If you're a consumer: This is a secret password generator
> If you're zk/crypto: This is zero-knowledge as it was meant to be. Ephemeral, local, and sovereign.
>   
> Machine validation is boring. You forgot who the proof was for. That's why your products suck.

> **zkVault generates a 1-of-1 offline `.exe` cipher that can only encrypt/decrypt *your* information.**

> No sync. No cloud. No verifier.  
> Just you, your passphrase, and a proof-sealed cryptographic organism.
> Your own vault. Your own encryption. Your own language. Forever. 

### 🧬 What is it?

**For Consumers**:  
Zero North Vault (*zkVault*) is your personal secret passcode generator.  
**ONLY you** own the `.exe` and the encryption logic. Store it locally. Use it offline.

- For root generation, consider using a second letter of the chorus of a song you love — or anything memorable, unguessable, and yours.
- Each `.exe` is **cryptographically distinct**. It is **uncrackable**. Not by me, not by the SEC, not by quantum.  
- The only way to decrypt what it encrypts is through owning the machine output (.exe seeded program) itself.

**Zero North Vault (zkVault)** is a dark-mode, black-box, air-gapped desktop app that generates a one-time-use encryption engine for your secrets.

Each vault:
- Is cryptographically unique  
- Can’t decrypt any other vault’s data  
- Includes a zk-style `vaultproof.json` (for proof of individuality)

Think:  
A crypto-organism on a USB stick.  
A personal language no one else speaks.  
A book only you (or a loved one) can ever open.  

**Nobody can recover your vault. You don’t own an account. There is no sync. No recovery. You are interacting with a physical cryptographic object.**

---

### 🔐 How it works

Every `.exe` is generated with:

- A high-entropy cryptographic seed  
- A static genesis timestamp (`vault-genesis.txt`)  
- A SHA-256 logic fingerprint (`vaultproof.json`)  

You receive:
- A standalone encryption `.exe`  
- A proof-of-build artifact  
- A unique cipher engine that runs fully offline

It’s not just AES-256.  
It’s **you-256**.


---

### 🧠 Isn’t this just a toy?

No.  
It’s an encryption organism.

You’re not storing secrets.  
You’re generating a cipher language that only you can speak.

> 🔻 You don’t store secrets in the cloud.  
> 🔺 You _generate_ secrets with localized physics.

Zero North Vault flips the security model.  
It’s not SaaS. It’s not Web3.  
It’s **sovereign cryptographic architecture.**

### Lose the `.exe`, and no one — not even you — can recover the data.  
### That’s the point.

---

### 🛠 Usage

This repo contains the **frontend only**.

To use the full system:
1. Visit the hosted frontend or clone this repo locally  
2. Input a passphrase (your “root”)  
3. Encode or decode strings using your `.exe`  
4. Optionally verify build authenticity using `verifyProof.js`  

---

### Note to fellow zk or cryptography nerds like me: 

Yes, there’s a proof file.
No, this isn't a consensus artifact. Yes, you can read **yours**. The only chain here is time and entropy; sealed at genesis in genesis.txt.

To verify:
Move verifyProof.js into your /vaultproof/ directory and run it via
node verifyProof.js

It confirms the artifact's logic fingerprint, timestamp, and seed integrity.

This is only partially circuit math. This is not zkSnark. This is spycraft.


Don't be a nerd. Admit it, this is cool. 

In case I'm not being clear enough-- 

Fuck FIPS — this is for the people.
Libsodium is for narcs.
I’m not auditing shit.

**This isn’t about public consensus or zk verification. It’s about information ownership and putting sovereign tools in human hands.**

**This is the real deal. Tell that VC to go decrypt this: b4e44884ab88c27e7cf8db3b86bae7ba.9fa1... (They won’t. You will. That’s the point.)  Say what you need bro, get it out. Delete it after. Spin up another zkVault.**

Don’t confuse silence for lack of proof.
Don’t lose sight of privacy.

This is zero-knowledge for people.

---

### 🔒 Ownership & Status

- Created by [**0north.eth**](https://github.com/0north-eth)  
- Built for the **Bolt Prompt Generation Hackathon**  
- **Patent Pending**  
- **Frontend is source-visible** (Apache 2.0)  
- **Encryption backend is closed-source and proprietary**

> _zkVault is a cryptographic organism — a logic-body built from your intent and sealed in time._

---

### 🧾 License

This frontend is licensed under [Apache 2.0](LICENSE.md).  
Backend logic is proprietary and not included in this repository.

---

### 🧬 Credits

Crafted by [**0north.eth**](https://github.com/0north-eth)  
Architect of stealth systems, zk-native infrastructure, and offline sovereign UX.

---

> _"Blue lightsabers."_ 💙
> — 0north


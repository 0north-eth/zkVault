const { contextBridge, clipboard } = require('electron');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

function getSeed() {
  try {
    const base = process.resourcesPath || __dirname;
    const seedPath = path.join(base, 'vault-seed.txt');
    return fs.readFileSync(seedPath, 'utf8').trim();
  } catch (err) {
    console.error('[Vault] Failed to load seed:', err);
    return '';
  }
}

function deriveKey(root, seed) {
  const keyMaterial = crypto.createHash('sha256')
    .update(root + seed)
    .digest();
  return crypto.createHash('sha256').update(keyMaterial).digest();
}

contextBridge.exposeInMainWorld('vaultAPI', {
  getSeed: () => getSeed(),

  getGenesis: () => {
    try {
      const base = process.resourcesPath || __dirname;
      const pathToGenesis = path.join(base, 'vault-genesis.txt');
      return fs.readFileSync(pathToGenesis, 'utf8').trim();
    } catch (err) {
      console.error('[Vault] Failed to load genesis timestamp:', err);
      return 'Unknown';
    }
  },

  getLogoPath: () => {
    const base = process.resourcesPath || __dirname;
    return path.join(base, 'assets', 'zeronorth-logo.png');
  },

  encrypt: async (root, input) => {
    const seed = getSeed();
    const key = deriveKey(root, seed);
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    const encrypted = Buffer.concat([
      cipher.update(input, 'utf8'),
      cipher.final()
    ]);
    const output = iv.toString('hex') + '.' + encrypted.toString('hex');
    clipboard.writeText(output);
    return output;
  },

  decrypt: async (root, input) => {
    const seed = getSeed();
    const key = deriveKey(root, seed);
    const [ivHex, cipherHex] = input.split('.');
    if (!ivHex || !cipherHex) throw new Error('Invalid input format');
    const iv = Buffer.from(ivHex, 'hex');
    const encrypted = Buffer.from(cipherHex, 'hex');
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    const decrypted = Buffer.concat([
      decipher.update(encrypted),
      decipher.final()
    ]);
    const output = decrypted.toString('utf8');
    clipboard.writeText(output);
    return output;
  }
});

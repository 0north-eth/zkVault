window.addEventListener('DOMContentLoaded', () => {
  const ts = document.getElementById('timestamp');
  if (ts && window.vaultAPI?.getGenesis) {
    const gen = window.vaultAPI.getGenesis();
    ts.textContent = 'Vault created at: ' + gen;
  }

  // ✅ Logo injection
  const logo = document.getElementById('logoImg'); // <- was 'logo' before
  if (logo && window.vaultAPI?.getLogoPath) {
    logo.src = window.vaultAPI.getLogoPath();
  }
});

document.getElementById('encodeBtn').addEventListener('click', async () => {
  const root = document.getElementById('root').value.trim();
  const input = document.getElementById('input').value;
  if (!root || !input) return alert('Please enter both a code word and some text.');
  try {
    const out = await window.vaultAPI.encrypt(root, input);
    document.getElementById('output').value = out;
  } catch (err) {
    console.error('Encryption error:', err);
    alert('Encryption failed.');
  }
});

document.getElementById('decodeBtn').addEventListener('click', async () => {
  const root = document.getElementById('root').value.trim();
  const input = document.getElementById('input').value;
  if (!root || !input) return alert('Please enter both a code word and ciphertext.');
  try {
    const plain = await window.vaultAPI.decrypt(root, input);
    document.getElementById('output').value = plain;
  } catch (err) {
    console.error('Decryption error:', err);
    alert('❌ Invalid code word or corrupted data.');
  }
});

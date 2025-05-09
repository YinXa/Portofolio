document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah reload halaman saat submit form

  const name = event.target.name.value;
  const email = event.target.email.value;
  const message = event.target.message.value;

  const token = '8081955057:AAH8ohR-Hx7JPe-BeU-bgjMtlCrhZyctDxA';  // Token bot kamu
  const chatId = '1281187772';   // Chat ID kamu

  const text = `New message from ${name} (${email}):\n\n${message}`;

  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        alert("Pesan telah dikirim ke Telegram!");
        event.target.reset(); // Reset form setelah kirim
      } else {
        alert("Terjadi kesalahan, coba lagi.");
      }
    })
    .catch(error => {
      console.error('Error:', error);  // Log error untuk debugging
      alert("Terjadi kesalahan, coba lagi.");
    });
});

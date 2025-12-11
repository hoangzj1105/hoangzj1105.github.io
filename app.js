// app.js - portfolio interactions
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Simple client-side validation
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      if (!name || !email || !message) {
        alert('Vui lòng điền tên, email và nội dung.');
        return;
      }
      // Here bạn có thể tích hợp gửi form qua API/email provider.
      // Hiện tại ta chỉ hiển thị thông báo thành công.
      alert('Cảm ơn ' + name + '! Mình đã nhận được tin nhắn. Mình sẽ phản hồi sớm.');
      form.reset();
    });
  }
});

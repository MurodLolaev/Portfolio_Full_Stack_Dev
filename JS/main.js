// function openModal(imgSrc) {
//     const modal = document.getElementById('cert-modal');
//     const modalImg = document.getElementById('modal-img');
//     modalImg.src = imgSrc;
//     modal.classList.remove('hidden');
//     setTimeout(() => modalImg.classList.remove('scale-95'), 10);
// }
// function closeModal() {
//     const modal = document.getElementById('cert-modal');
//     const modalImg = document.getElementById('modal-img');
//     modalImg.classList.add('scale-95');
//     setTimeout(() => modal.classList.add('hidden'), 200);
// }


function openModal(imgSrc) {
  const modal = document.getElementById('certModal');
  const modalImg = document.getElementById('modalImg');
  
  // Устанавливаем путь к картинке
  modalImg.src = imgSrc;
  
  // Показываем модалку (убираем hidden)
  modal.classList.remove('hidden');
  
  // Небольшая задержка для запуска анимации плавности (fade-in и scale)
  setTimeout(() => {
    modal.classList.remove('opacity-0');
    modalImg.classList.remove('scale-95');
    modalImg.classList.add('scale-100');
  }, 10);
  
  // Блокируем прокрутку основного сайта под модалкой
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('certModal');
  const modalImg = document.getElementById('modalImg');
  
  // Запускаем обратную анимацию исчезновения
  modal.classList.add('opacity-0');
  modalImg.classList.remove('scale-100');
  modalImg.classList.add('scale-95');
  
  // Ждем завершения анимации (300мс) и скрываем элемент полностью
  setTimeout(() => {
    modal.classList.add('hidden');
    modalImg.src = ''; // Очищаем путь
  }, 300);
  
  // Возвращаем прокрутку сайта
  document.body.style.overflow = '';
}

// Закрытие по нажатию на клавишу Esc
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});
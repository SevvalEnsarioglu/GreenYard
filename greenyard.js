/* FOTOĞRAF KAYDIRMA */
var slideIndex = 1; // Başlangıçta görünen slayt index'i
        showSlides(slideIndex);
    
        function plusSlides(n) {
            // Önceki veya sonraki düğmelere tıklanınca çağrılır
            showSlides(slideIndex += n);
        }
    
        function currentSlide(n) {
            // Belirli bir slayta direkt olarak gitmek için çağrılır
            showSlides(slideIndex = n);
        }
    
        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            // Slayt index sınırlarını kontrol et
            if (n > slides.length) { 
                slideIndex = 1;
            }
    
            if (n < 1) {
                slideIndex = slides.length;
            }
    
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
    
            slides[slideIndex - 1].style.display = "block";
        }



/* GREENYARD GERİ DÖNÜŞTÜRME HESAPLAMA */
function calculateTime() {
    const product = document.getElementById('product').value;
    const liquidRatio = parseFloat(document.getElementById('liquidRatio').value);
  
    const productNames = {
      kagit: 5,
      ahsap: 5,
      aluminyum: 9,
      plastik: 7,
      pil: 3,
      motoryagi: 9,
      cam: 3,
      yesilatik: 9,
      metal: 5,
      strafor: 7,
      karton: 6,
    };
  
    const result = document.getElementById('result');
  
    if (isNaN(liquidRatio) || liquidRatio <= 0) {
      result.textContent = 'Lütfen geçerli bir sıvı oranı seçin.';
      return;
    }
    if (isNaN(liquidRatio) || liquidRatio == 1) {
        result.textContent = 'Ürün 3 günde dönüştürülür.';
        return;
      }
  
    const processingTime = productNames[product] * 1 / liquidRatio;
  
    result.textContent = `Ürün ${processingTime.toFixed(2)} günde dönüştürülür.`;
  }
  

  /*İLETİŞİM FORMUNU GÖNDERİNCE GÖNDERİLDİ MESAJI VEREN KUTU */
  function submitForm() {
    var fullNameInput = document.getElementById('fullName');
    var phoneNumberInput = document.getElementById('phoneNumber');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
    var resultDiv = document.getElementById('result');

    // Alert ile mesajı göster
    alert('Formunuz kaydedildi!');

    // Alanlardaki yazıları temizle
    fullNameInput.value = '';
    phoneNumberInput.value = '';
    emailInput.value = '';
    messageInput.value = '';

    // Formun gerçek bir sunucuya gönderilmesini engellemek için false döndür
    return false;
  }
  
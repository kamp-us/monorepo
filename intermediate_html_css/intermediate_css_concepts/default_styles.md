### Giriş

Tarayıcılar, varsayılan olarak web projelerinize biraz stil enjekte ederler. Belki bunu özellikle düşünmemiş olabilirsiniz ancak kesinlikle karşılaşmışsınızdır.

### Öğrenme Çıktıları

-   Varsayılan tarayıcı stilleri hakkında bilgi edineceksiniz.
-   CSS sıfırlama kullanarak bu varsayılan stilleri kaldırmayı veya değiştirmeyi öğreneceksiniz.

### Varsayılan Stiller

İlk olarak [HTML Tarifler Projesini](https://www.theodinproject.com/lessons/foundations-recipes) yaptığınızda, bazı elementlerin zaten üzerlerine biraz stil uygulandığını fark etmiş olmalısınız. Bir `h1` başlığı, örneğin, normal metinden daha büyük ve kalındır. Bağlantılar (`a`), mavi renkte ve altı çizgilidir. Listeler (`ul` ve `ol`), etraflarında bir sürü dolgu bulunan bir yapıya sahiptir. Tarayıcılar, her web sayfasına biraz CSS ekleyerek bunu yaparlar. [İşte Chrome'un varsayılan HTML stil-sayfası](https://chromium.googlesource.com/chromium/blink/+/refs/heads/main/Source/core/css/html.css)

Bununla ilgili sorun, farklı tarayıcıların her şeyi aynı şekilde biçimlendireceğinin garantisi olmamasıdır. Genel olarak, tutarsızlıklar oldukça küçük olacak ancak yine de VAR OLACAKLAR. Ayrıca, birçok durumda bir geliştirici olarak, sitenizin tam olarak hayal ettiğiniz gibi görünmesini sağlamak için tüm bu varsayılan stili geri alacak veya yeniden yapacaksınız.

Buna karşı birçok geliştirici, projelerine "CSS Sıfırlama" ile başlar; tarayıcı varsayılanlarını geri alarak her elementin her tarayıcıda aynı şekilde davranmasını sağlayan bir dosya. 

CSS sıfırlama kullanmak zorunda değilsiniz. Birçok durumda, size sunulan sıfırlama tarafından sağlanan stillerin çoğunu geri almanız veya yeniden yapmanız gerekecektir. Bir sıfırlama kullanıp kullanmamaya karar verebilirsiniz, ancak birkaç tanesini incelemek için zaman ayırmak faydalı bir alıştırmadır!

### Ödev

<div class="lesson-content__panel" markdown="1">

1.  [Meyer Sıfırlaması](https://meyerweb.com/eric/tools/css/reset/) muhtemelen en popüler olanıdır. Çok basittir ve temelde tüm varsayılan stilleri kaldırır.
2.  [Normalize.css](http://nicolasgallagher.com/about-normalize-css/) başka popüler bir seçenektir. Tüm varsayılan stilleri kaldırmaz, ancak tarayıcıların tutarlı olmasını sağlamak için onları hafifçe düzenler.
3.  [Reboot, Resets and Reasoning](https://css-tricks.com/reboot-resets-reasoning/) CSS hileleri makalesi, biraz daha derine iner ve birkaç diğer popüler sıfırlamayı anlatır.
4.  İşe yararlığından ziyade eğlence için bu [Tarayıcı Varsayılan Stiller](https://browserdefaultstyles.com/) sitesiyle oynayabilirsiniz.

</div>

### Bilgi Ölçme Bakış

Bu bölüm, bu dersin anlayışınızı kendi başınıza kontrol etmeniz için sorular içerir. Bir soruya cevap vermede zorluk yaşıyorsanız, üzerine tıklıyarak bağlantı verilen materyali gözden geçirebilirsiniz.

-   [Neden CSS sıfırlama kullanmak istersiniz?](#default-styles)

### Ek Kaynaklar

Bu bölüm, ilgili içeriklere yönlendiren yararlı bağlantılar içerir. Zorunlu değildir, bu yüzden bunlar ek bilgi kaynakları olarak düşünülebilir.

-   [2018'de CSS Sıfırlamalarına Bir Bakış](https://bitsofco.de/a-look-at-css-resets-in-2018/) diğer sıfırlama seçeneklerini ele alan başka bir makaledir.

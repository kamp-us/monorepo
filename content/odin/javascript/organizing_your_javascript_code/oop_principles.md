---
title: 'OOP Prensipleri'
---

### Giriş

Bu noktaya kadar, JavaScript'teki en yaygın nesne oluşturma ve düzenleme modellerini öğrenmiş ve uygulama şansı bulmuş olacaksınız. Ancak bu sadece buzdağının görünen kısmıdır. Nesne üretici fonksiyonları(factory functions) ya da modüller için sözdizimini öğrenmekten daha önemlisi, bunları nasıl etkili bir şekilde kullanacağınızı bulmaktır.

Tüm bu ders dizisi "Nesne Yönelimli Programlama" paradigması (OOP) ile ilgilidir. Nesneler ve sınıflar yaratmanın temelleri nispeten basittir. Ancak her bir nesneye ne koyacağınıza, ne zaman yeni bir nesne oluşturacağınıza ya da bir nesnenin başka bir nesneden ne zaman 'miras' alacağına karar vermek kolay değildir.

### Derse Genel Bakış

Bu bölüm, bu derste öğreneceğiniz konuların genel bir özetini içerir.

- "Tek Sorumluluk İlkesi" ni açıklayınız.
- Ek SOLID ilkelerini kısaca açıklayınız.
- "Sıkı bağlı" nesnelerin ne olduğunu ve neden bunlardan kaçınmak istediğimizi açıklayın.

Neyse ki, nesnelerimiz söz konusu olduğunda iyi kararlar vermemize rehberlik edebilecek birkaç kavram ve ilke vardır. Bu ders, bu kavramların en önemlilerine bir giriş niteliğindedir. Uygulama tasarımı sorularınıza genellikle çok net bir yanıt olmadığını unutmayın. Bazı kalıplar ve fikirlerin diğerlerinden daha iyi olduğu açıktır, ancak belirli bir işlevi nereye koyacağınıza karar verirken genellikle bazı takaslar söz konusudur. Başka bir deyişle... bu ilkeler _kural_ değildir - yardımcı kılavuzlardır.

Bu kaynakları okurken, daha önce yaptığınız bazı projelere geri dönmek ve yazdıklarınızın gördüğünüz örneklerle ne kadar örtüştüğünü düşünmek size yardımcı olabilir. Ve tabii ki, yolunuza devam ederken, yeni projeler hazırlarken bunları aklınızda tutun.

### Tek sorumluluk

Nesnelerinizi oluştururken, hatırlamanız gereken en önemli şeylerden biri, bir sınıfın (veya nesnenin veya modülün... anladınız siz onu) yalnızca _bir_ sorumluluğu olması gerektiğini belirten __Tek Sorumluluk İlkesi__'dir. Bu, bir nesnenin yalnızca bir şey yapabileceği anlamına gelmez, ancak bir nesnenin yaptığı her şeyin tek bir sorumluluğun parçası olması gerektiği anlamına gelir.

İşte gerçekten yaygın bir örnek. Kodumuzun çoğunda, uygulama mantığımıza ek olarak DOM'u güncellemek ve DOM'a bir şeyler yazmak için işlevler bulunur. DOM işlerinizi uygulama mantığından ayırmak _gerçekten_ iyi bir fikirdir.

Burada, bir oyun bitti koşulunun karşılanıp karşılanmadığını kontrol etmesi gereken bir fonksiyonumuz var.  Bununla ilgili iki sorun var:

```javascript
function isGameOver() {

  // game over logic goes here!

  if (gameOver) {
    const gameOverDiv = document.createElement('div');
    gameOverDiv.classList.add('game-over');
    gameOverDiv.textContent = `${this.winner} won the game!`;
    document.body.appendChild(gameOverDiv);
  }
}
```

İlk sorun, fonksiyonun (ve içinde bulunduğu modülün) doğrudan DOM'u manipüle etmemesi gerektiğidir. Tüm DOM manipülasyonunu kendi modülüne çıkarmalı ve bu şekilde kullanmalısınız:

```javascript
function isGameOver() {

  // game over logic goes here!

  if (gameOver){
    DOMStuff.gameOver(this.winner);
  }
}
```

Geriye kalan ikinci sorun ise `isGameOver` fonksiyonunun yalnızca `gameOver` koşulunun karşılanıp karşılanmadığını kontrol etmekten sorumlu olması gerektiğidir. isGameOver` dönüş değerine bağlı olarak, oyun döngüsünü yöneten fonksiyon `DOMStuff.gameOver(this.winner)` çağrısının yapılıp yapılmayacağına karar vermekten sorumlu olmalıdır.

Tek Sorumluluk İlkesi hakkında düşünmenin bir başka yolu da, belirli bir yöntemin/sınıfın/bileşenin değiştirilmesi için tek bir neden olması gerektiğidir. Aksi takdirde, bir nesne birden fazla sorumluluğa sahip olmaya çalışıyorsa, bir özelliğin değiştirilmesi diğerini etkileyebilir.

Tek Sorumluluk İlkesi, yaygın olarak bulunan ve __SOLID__ ilkeleri olarak adlandırılan 5 tasarım ilkesinden ilkidir. Bu ilkeler hakkında daha fazlasını aşağıdaki ödev makalelerinde okuyacaksınız.


### Gevşek bağlı nesneler(Loosely coupled objects)

Açıkçası, tüm nesnelerimizin nihai uygulamamızı oluşturmak için birlikte çalışması amaçlanmıştır. Bununla birlikte, tek tek nesnelerinizin mümkün olduğunca tek başına durabilmesine dikkat etmelisiniz. Birbirine __sıkı sıkıya bağlı__ nesneler birbirlerine o kadar çok bağlı nesnelerdir ki birini kaldırmak ya da değiştirmek diğerini de tamamen değiştirmek zorunda kalmanıza neden olur.

Bu, 'Tek Sorumluluk' ile oldukça yakından ilişkilidir ancak farklı bir açıdan ele alınmaktadır. Örnek olarak, bir oyun yazıyor olsaydık ve Kullanıcı Arayüzünün nasıl çalıştığını tamamen değiştirmek isteseydik, bunu oyun mantığını tamamen yeniden işlemeden yapabilmeliydik. Yani oyunumuzu yazmaya öncelikle `console.log()` kullanarak başlayabilmeli ve daha sonra oyun mantığına dokunmadan bir grup `DOM` fonksiyonu ekleyebilmeliyiz.


### Ödev

<div class="lesson-content__panel" markdown="1">

1.  Aşağıdaki makale Tek Sorumluluk hakkında konuşmaya başlamadan önce __SOLID__ kısaltmasından bahsetmektedir. Tek Sorumluluk kesinlikle 5 ilke arasında en alakalı olanıdır. İsterseniz SOLID ilkelerinin geri kalanını incelemekten çekinmeyin, ancak Tek Sorumluluğa özellikle dikkat edin.
    1. [SOLID principle #1: Single responsibility (JavaScript)](https://duncan-mcardle.medium.com/solid-principle-1-single-responsibility-javascript-5d9ce2c6f4a5) has links to other very brief articles that cover the rest of 'SOLID'. They're optional, but recommended nonetheless. __Note__: this article riffs off what the SOLID videos in the next link goes in-depth on.
    2. Her bir ilkeye ilişkin kod örneklerini görmek için [The SOLID Design Principles by WDS](https://www.youtube.com/playlist?list=PLZlA0Gpn_vH9kocFX7R7BAe_CvvOCO_p9) adresini izleyin.
2. [How to Write Highly Scalable and Maintainable JavaScript: Coupling](https://web.archive.org/web/20200810210808/https://medium.com/@alexcastrounis/how-to-write-highly-scalable-and-maintainable-javascript-coupling-c860787dbdd4) gevşek bağlı nesneleri oldukça iyi açıklıyor.
</div>

### Bilgi ölçme

Bu bölüm, bu dersi anladığınızı kontrol etmeniz için sorular içermektedir. Aşağıdaki soruları kendi başınıza yanıtlamakta zorlanıyorsanız, yanıtı bulmak için yukarıdaki materyali gözden geçirin.

- [Explain the "Single Responsibility Principle".](#single-responsibility)
- [Briefly explain the additional SOLID principles.](https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa)
- [Explain what "tightly coupled" objects are and why we want to avoid them.](https://web.archive.org/web/20200810210808/https://medium.com/@alexcastrounis/how-to-write-highly-scalable-and-maintainable-javascript-coupling-c860787dbdd4)

### Ek kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

- Gevşek bağlantı konusunda şimdiye kadar okuduğumuz en iyi kitap [Practical Object-Oriented Design In Ruby](http://www.poodr.com/). Ne yazık ki ücretsiz değil... ve JavaScript de değil. Yine de tavsiye etmekte kendimize güveniyoruz. Ruby bilmiyorsanız, örnekleri takip etmek için öğrenmenize gerek kalmayacak kadar açık bir dildir ve kitabın içeriği gerçekten harikadır. Alternatif olarak, [99 Bottles of OOP](https://sandimetz.com/products) hem JavaScript hem de Ruby dilinde yazılmıştır. Aynı yazar tarafından yazılmıştır ve OOP konusunda yeniyseniz daha iyi bir seçenek olabilir (ücretsiz de değildir).

- [Building a house from the inside out](https://www.ayweb.dev/blog/building-a-house-from-the-inside-out) temel mantığınızı ve DOM mantığınızı ayırma sürecinde size yol gösterecektir.

- Coderized tarafından hazırlanan bu [brief video by Coderized](https://www.youtube.com/watch?v=q1qKv5TBaOA), temiz kodlama uygulamalarını benimseme ve sürdürülebilir bir kod yapısı oluşturma bağlamında SOLID programlama ilkelerini ve daha fazlasını kapsamaktadır. Bu ilkelerin neden var olduğu ve kodunuzu, kod mimarinizi ve bir programcı olarak becerilerinizi geliştirmek için birlikte nasıl çalışabilecekleri konusunda hala kafanız karışıksa, bunu yararlı bulabilirsiniz!
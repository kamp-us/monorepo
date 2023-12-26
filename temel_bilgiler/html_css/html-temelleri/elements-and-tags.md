---
title: 'Elementler ve Etiketler'
---

### Giriş

HTML (HyperText Markup Language) internet sitelerinin yapılarını ve içeriklerini tanımlar. HTML elementlerini tipik bir siteyi oluşturan paragraflar, başlıklar, listeler, görseller ve bağlantılar yaratmak için kullanırız. Bu derste HTML elementlerinin nasıl çalıştığını öğreneceğiz.

### Derse Genel Bakış

Bu bölüm, bu derste öğreneceğiniz konuların genel özetini içerir.

*   HTML etiketlerinin ne olduğunu açıklar
*   HTML elementlerinin ne olduğunu açıklar

### Elementler ve Etiketler

HTML sayfası içindeki neredeyse her element açılış ve kapanış etiketleri arasında bulunan içerik parçalarıdır.

Açılış etiketleri bir HTML elementinin açıldığını tarayıcıya bildirir. Açılış etiketleri küçüktür ve büyüktür işaretleri arasına yazılan bir anahtar kelimeden oluşurlar `<>`. Örneğin bir paragrafın açılış etiketi bu şekildedir: `<p>`.

Kapanış etiketleri bir HTML elementinin kapandığını tarayıcıya bildirir. Açılış etiketleri ile neredeyse aynıdır; tek fark anahtar kelimeden önce eğik çizgi(/) içermeleridir. Örneğin bir paragrafın kapanış etiketi bu şekildedir: `</p>`.

Tamamlanmış bir paragraf etiketi şu şekilde gözükür:

~~~html
<p>some text content</p>
~~~


Özetlemek gerekirse:

*   `<p>` açılış etiketidir.
*   `some text content` açılış ve kapanış etiketleri arasındaki içeriği temsil eder. 
*   `</p>` kapanış etiketidir.


Elementleri içerik taşıyıcıları olarak düşünebilirsiniz. Açılış ve kapanış etiketleri tarayıcıya elementlerin ne taşıdığını bildirir. Tarayıcı böylece gelen içeriği nasıl göstereceğine karar verir.

Bazı HTML elementleri kapanış etiketi içermez. Bu elementler genellikle böyle gözükür: `<br />`, `<img/>` ancak bazıları ileride göreceğiniz gibi eğik çizgi olmadan da kullanılabilir: `<br>`, `<img>`. Bu tip elementler kendiliğinden kapanan(self-closing) element veya boş element olarak da adlandırılabilirler, çünkü herhangi bir içerik çevrelemezler. Bunlardan bazılarını ileride göreceğiz fakat çoğu element hem açılış hem kapanış etiketine sahiptir.

HTML size istediğiniz her şeyi üretmeniz için [önceden tanımlanmış elementlerin geniş listesi](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) sunar. İçerikleriniz için doğru etiketi kullanmak önemlidir. Doğru etiketleri kullanmak siteniz için şu iki konuda önemli bir etkiye sahiptir: sitenizin arama motorlarında nerede sıralandığı; sitenizin ekran koruyucu(screen reader) gibi eklentiler kullanan kullanıcılara ne kadar erişilebilir olduğu.

İçeriğiniz için doğru etiketler kullanmaya semantik HTML denir. Bunun hakkında detaylı bilgiyi ileride göreceğiz.

### Ödev

<div class="lesson-content__panel" markdown="1">

  1.  [Kevin Powell'ın "HTML'e Giriş" videosunu izleyin](https://www.youtube.com/watch?v=LGQuIIv2RVA&list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-)
  
</div>

### Bilginizi Test Edin

Bu bölüm bu derste öğrendikleriniz hakkında ne kadar bilgi sahibi olduğunuzu ölçen sorular içerir. Herhangi bir soruda sorun yaşarsanız soruya tıklayıp ilgili içeriği gözden geçirebilirsiniz.

*   [HTML etiketi nedir?](#elements-and-tags)
*   [Bir HTML elementinin üç bölümü nedir?](#elements-and-tags)

### Ek Kaynaklar

Bu bölüm içerikle alakalı yardımcı bağlantılar içerir. Zorunlu değil, ek ders olarak düşünebilirsiniz.

*   [Don't Fear the Internet's video about HTML](http://www.dontfeartheinternet.com/02-html)


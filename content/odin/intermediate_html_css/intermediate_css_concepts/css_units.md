### Giriş
CSS'de boyutları tanımlamak için kullanabileceğiniz birçok farklı birim vardır. Bu ders sizin için en önemli olanları tanıtacak ve geri kalanları nereden öğrenebileceğinizi gösterecektir.

### Öğrenme çıktıları

* Göreli ve mutlak birimler arasındaki farkı öğreneceksiniz.
* Farklı birimleri kullanmanın ne zaman uygun olduğunu öğreneceksiniz.

### Mutlak birimler

Mutlak birimler, herhangi bir bağlamda her zaman aynı olan birimlerdir. `px` mutlak bir birimdir çünkü bir pikselin boyutu sayfadaki başka bir şeye göre değişmez. Aslında `px` web projeleri için kullanmanız gereken tek mutlak birimdir. Diğerleri `in` (inç) ve `cm` (santimetre) gibi fiziksel birimlerle ilişkili oldukları için baskı ortamında daha anlamlıdır.

### Göreli birimler

Göreli birimler, bağlamlarına göre değişebilen birimlerdir. Karşılaşmanız ve kullanmak istemeniz muhtemel olan birkaç tane vardır.

#### em ve rem

`em` ve `rem` genellikle CSS'de diğer boyutları tanımlamak için kullanılsalar da, her ikisi de bir yazı tipi boyutunu ifade eder. Her ikisini de sık sık göreceksiniz, bu yüzden her ikisini de açıklayacağız, ancak genel bir kural olarak `rem`'i tercih edin.

`1em` bir öğenin (veya `font-size` ayarlamak için kullanıyorsanız öğenin ebeveyninin) `font-size` değeridir. Örneğin, bir öğenin `font-size` değeri `16px` ise, öğenin genişliğini `4em` olarak ayarlamak genişliğini `64px` yapacaktır (`16 * 4 == 64`).

`1rem` kök öğenin (ya `:root` ya da `html`) `font-size` değeridir. Matematiksel olarak, 'rem' ile 'em' aynı şekilde çalışır, ancak ebeveynin yazı tipi boyutunu takip etme karmaşıklığı olmadan çalışır. `em`'e güvenmek, bağlam değişirse belirli bir boyutun değişebileceği anlamına gelebilir, bu da büyük olasılıkla istediğiniz davranış değildir.

Web siteniz genelinde yazı tipi boyutlarını tanımlamak için `rem` gibi göreli bir boyut kullanılması _önerilir_. Birçok tarayıcı, okunabilirliği artırmak için kullanıcıların temel yazı tipi boyutunu değiştirmesine izin verir. Mümkünse, kullanıcının yazı tipi boyutuyla ilgili isteklerine saygı gösterilmesi tavsiye edilir. Okuma ödevlerinden bu konuda daha fazla bilgi edineceksiniz.

#### Görüntü alanı birimleri

`vh` ve `vw` birimleri görüntü alanının boyutuyla ilgilidir. Özellikle, `1vh` görüntü alanı yüksekliğinin `%1`ine ve `1vw` görüntü alanı genişliğinin `%1`ine eşittir. Bunlar, bir şeyin görüntü alanına göre boyutlandırılmasını yani tam boy kahramanlar, tam ekran uygulama benzeri arayüzler gibi örnekler dahil olmak üzere istediğiniz zaman yararlı olabilir.

### Ödev
<div class="lesson-content__panel" markdown="1">
1. [CSS values and units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units) adlı ingilizce makale mevcut tüm birimleri kapsar.
2. [CSS units](https://codyloyd.com/2021/css-units/) adlı ingilizce makale nasıl ve ne zaman `em`, `rem` veya `px` kullanabileceğinizi derinlemesine açıklar.
3. [Fun with Viewport Units](https://css-tricks.com/fun-viewport-units/) adlı ingilizce makale `vh` ve `vw` ile yapabileceğiniz bazı ilginç şeyleri gösterir.
</div>

### Bilgi kontrolü

Bu bölüm, bu dersi anladığınızı kontrol etmeniz için sorular içermektedir. Aşağıdaki soruları kendi kendinize yanıtlamakta zorlanıyorsanız, yanıtı bulmak için yukarıdaki materyali gözden geçirin.

- [Yazı tipi boyutu için neden `px` yerine `em` veya `rem` kullanmak istiyorsunuz?](#em-ve-rem)
- [`vh` ve `vw` kullanmak isteyebileceğiniz bazı durumlar nelerdir?](#görüntü-alanı-birimleri)
- [Göreli bir birim yerine `px` kullanmak isteyebileceğiniz bazı durumlar nelerdir? bunu öğrenmek için bu ingilizce makaleye göz atın.](https://codyloyd.com/2021/css-units/)

### Ek kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, bu nedenle bir şeyi daha derinlemesine incelemeniz gerektiğinde bunu tamamlayıcı olarak düşünün.

* Farklı durumlar için doğru CSS birimlerini seçme konusunda Kevin Powells'ın genel kurallarını öğrenmek istiyorsanız [are you using the right CSS unit?](https://www.youtube.com/watch?v=N5wpD9Ov_To) adlı ingilizce videosunu izleyin. 

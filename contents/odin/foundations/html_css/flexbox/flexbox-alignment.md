---
title: 'Flexbox ile Hizalama'
---

### Giriş

Şimdiye kadar flexbox ile değindiğimiz her şey, tüm flex öğelerde `flex: 1` kuralını kullandı; bu, öğelerin mevcut tüm alanı doldurmak için eşit şekilde büyümesini veya küçülmesini sağlar, ancak çoğu zaman bu istenen etki değildir. Flex, belirli bir boyuta sahip öğeleri düzenlemek için de çok kullanışlıdır.

### Derse genel bakış

Bu bölüm, bu derste öğreneceğiniz konuların genel bir özetini içerir.

-   Flex konteyneri içindeki öğeleri hem dikey hem de yatay olarak nasıl hizalayacağınızı öğreneceksiniz.

### Hizalama(Alignment)

Bir örneğe bakalım.

<p class="codepen" data-height="400" data-default-tab="html,result" data-slug-hash="MWoyBzR" data-editable="true" data-user="TheOdinProjectExamples" style={{"height":"400px","boxSizing":"border-box","display":"flex","alignItems":"center","justifyContent":"center","border":"2px solid","margin":"1em 0","padding":"1em"}}>
  <span><a href="https://codepen.io">CodePen</a>'deki TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) tarafından sağlanan <a href="https://codepen.io/TheOdinProjectExamples/pen/MWoyBzR"> 
  flex-alignment örneğine</a> 
  bakın.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Şimdiye kadar öğrendiklerinizle, `.item` sınıfına `flex: 1` yazarsanız ne olacağını tahmin edebilmeniz gerekiyor. Konuya devam etmeden önce yapmaya çalışın!

`.item` sınıfına `flex: 1` eklemek, öğelerin her birinin kullanılabilir alanı dolduracak şekilde büyümesini sağlar, ancak bunların aynı genişlikte kalmasını ama konteyner içinde kendilerini farklı şekilde dağıtmalarını istesek ne olur? Bunu yapabiliriz!

`.item` sınıfından `flex: 1`'i kaldırın ve `.container`(.item sınıfının da içerisinde bulunduğu konteyner) sınıfına `justify-content: space-between`'i ekleyin. Bunu yapmak size şöyle bir şey vermelidir:

![space between](https://cdn.statically.io/gh/TheOdinProject/curriculum/495704c6eb6bf33bc927534f231533a82b27b2ac/html_css/v2/foundations/flexbox/imgs/07.png)

`justify-content` değeri, öğeleri **ana eksen** üzerinde hizalar. Burada kullanabileceğiniz birkaç değer var. Geri kalanını okuma ödevlerinde öğreneceksiniz, ancak şimdilik, kutuları ana eksende ortalayacak `center`(merkez) değerini kullanarak değiştirmeyi deneyin.

**Çapraz eksen**'de öğelerin yerleşimini değiştirmek için `align-items` değerini kullanın. `.container`a `align-items: center` ekleyerek kutuları konteynerin merkezine getirmeyi deneyin. İstenen sonuç şöyle görünür:

![centered](https://cdn.statically.io/gh/TheOdinProject/curriculum/495704c6eb6bf33bc927534f231533a82b27b2ac/html_css/v2/foundations/flexbox/imgs/08.png)

`justify-content` ve `align-items` konteynerinizin ana ve çapraz eksenini temel aldığından, bir flex konteynerın `flex-direction`'nını değiştirdiğinizde davranışları değişir. Örneğin, `flex-direction`'ı `column` olarak değiştirdiğinizde, `justify-content` dikey olarak hizalar ve `align-items` yatay olarak hizalar. Bununla birlikte, en yaygın davranış varsayılandır, yani `justify-content` öğeleri yatay olarak hizalar (çünkü ana eksen varsayılan olarak yataydır) ve `align-items` öğeleri dikey olarak hizalar. Yeni başlayanların flexbox ile en çok karşılaştığı zorluklardan biri, bu davranış değişikliğidir. 

#### Açıklık(Gap)

Flex'in çok kullanışlı bir özelliği de `gap` özelliğidir. Flex konteynerde `gap` ayarlamak, flex öğeler arasına, öğelerin kendilerine bir margin(dış kenar boşluğu) eklemeye çok benzer şekilde, yalnızca belirli bir açıklık ekler. `gap` _yeni_ bir özelliktir, bu nedenle henüz pek çok kaynakta bulunmaz, ancak tüm modern tarayıcılarda güvenilir bir şekilde çalışır, bu nedenle kullanımı güvenli ve çok kullanışlıdır! Yukarıdaki ortalanmış örneğe `gap: 8px` eklemek, aşağıdaki sonucu verir.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="qBjZyea" data-editable="true" data-user="TheOdinProjectExamples" style={{"height":"300px","boxSizing":"border-box","display":"flex","alignItems":"center","justifyContent":"center","border":"2px solid","margin":"1em 0","padding":"1em"}}>
  <span><a href="https://codepen.io">CodePen</a>'deki TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) tarafından sağlanan <a href="https://codepen.io/TheOdinProjectExamples/pen/qBjZyea"> 
  flex-alignment örneğine</a> 
  bakın.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Aşağıdaki bölümde öğreneceğiniz daha çok şey var, ancak bu noktada kesinlikle flexbox'ın ne kadar yararlı olduğunu görebilirsiniz. Yalnızca daha önce ele aldığımız özellikleri kullanarak bazı etkileyici düzenleri bir araya getirebilirsiniz!

Okumaya ihtiyaç duyduğunuz kadar zaman ayırabilirsiniz. Burada zaten ele aldığımız konuların bir kısmı gözden geçirilecek, ancak daha derine inecek ve henüz bahsedilmeyen birkaç şeye değinilecek. Henüz her küçük ayrıntıyı ezberlemeye çalışmak konusunda çok fazla strese girmeyin; sadece örneklerle birlikte kodlayın ve flexbox ile _yapılabilen_ her şeyi oturtmak için elinizden gelenin en iyisini yapın. Alıştırma egzersizlerine geldiğinizde bu kaynaklara tekrar ulaşmanız gerekecek, ancak bu kesinlikle kabul edilebilir. Bir şeyi ne kadar çok kullanırsan, aklında o kadar iyi kalacak... ve onu _sürekli_ kullanıyor olacaksın. İyi eğlenceler!

### Ödev

<div class="lesson-content__panel" markdown="1">

1.  Bu güzel [Etkileşimli Flexbox İngilizce Kılavuzu](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/), bilmeniz gereken her şeyi kapsıyor. Daha önce değindiğimiz kavramları gerçekten eğlenceli ve yaratıcı örneklerle pekiştirmeye yardımcı olacak. Burada biraz zaman geçirin, bir kısmı bu noktada gözden geçirilmelidir, ancak buradaki temeller önemlidir!
2.  [Flexbox'ın tipik kullanım durumları](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox), daha pratik ipuçlarını kapsayan İngilizce bir MDN makalesidir. İnteraktif bölümleri atlamayın! Bir şeylerle oynayarak, onu öğrenirsiniz!
3.  CSS Tricks websitesinin ["Guide to Flexbox"](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) adlı İngilizce CSS kılavuzu bir klasiktir. Burada sizin için yeni bir bilgi yok, ancak resimler ve örnekler çok yardımcı oluyor. Bu, muhtemelen sık sık geri döneceğiniz harika bir cheatsheet. (Alıştırma egzersizleri için elinizin altında bulundurun!)
4.  [CSS egzersiz veri havuzumuza](https://github.com/TheOdinProject/css-exercises) geri dönün (talimatların README'de olduğunu unutmayın). 'flex' dizinindeki egzersizleri listelendikleri sırayla yapın. Hepsini geçmeniz biraz zaman alabilir ve ilerledikçe zorluk artar. Ona bağlı kal! Hepsinin üstesinden gelebilirseniz, ileriye doğru _gerçekten_ iyi durumda olacaksınız.
    - `01-flex-center`
    - `02-flex-header`
    - `03-flex-header-2`
    - `04-flex-information`
    - `05-flex-modal`
    - `06-flex-layout`
    - `07-flex-layout-2`

    Not: Bu alıştırmaların çözümlerini alıştırmanın kendi `solution` klasöründe bulabilisiniz.

</div>

### Bilgi ölçme

Bu bölüm, bu dersi kendi kendinize anlayıp anlamadığınızı kontrol etmeniz için sorular içermektedir. Bir soruyu yanıtlamakta zorlanıyorsanız, soruya tıklayın ve bağlantılı olduğu materyali gözden geçirin.

-   [`justify-content` ve `align-items` arasındaki fark nedir?](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)
-   [Bir div'i flex konteyner içinde tamamen ortalamak için flexbox'ı nasıl kullanırsınız?](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)
-   [`justify-content: space-between` ve `justify-content: space-around` arasındaki fark nedir?](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Ek kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

* [Flexbox Froggy](https://flexboxfroggy.com/), nesneleri flexbox ile hareket ettirme alıştırması yapmak için eğlenceli küçük bir oyundur.
* [Flexbox Zombies](https://mastery.games/flexboxzombies/), flexbox'ın başka bir oyunlaştırılmış versiyonudur. Ücretsiz, ancak bir hesap gerektirir.
* MDN'deki [Flexbox'ın Temel Kavramları](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) İngilizce makalesi bir başka iyi başlangıç noktasıdır. Yararlı örnekler ve etkileşimli bölümler var.
* [Flex konteynerdeki Öğeleri Hizalama](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container), eksenler ve `align-items` ve `justify-content` konularını daha derinlemesine ele alıyor.
* Freecodecamp'tan bu İngilizce [Flexbox Eğitimi](https://www.freecodecamp.org/news/css-flexbox-tutorial-with-cheatsheet/) başka bir iyi kaynaktır.
* [Flexbox Crash Course](https://www.youtube.com/watch?v=3YW65K6LcIA), Traversy Media tarafından hazırlanan güzel bir kaynaktır.
* Daha etkileşimli demolar için, `justify-content` anlatılan [bu kısa ingilizce video(Scrim)](https://scrimba.com/learn/flexbox/justify-content-flexbox-tutorial-cVWPacR?embed=odin,mini-header,no-big-play,no-next-up)'ya ve `align-items` anlatılan bu [Scrim](https://scrimba.com/learn/flexbox/justify-content-flexbox-tutorial-cVWPacR?embed=odin,mini-header,no-big-play,no-next-up)'e göz atın. Bu Scrim'leri görüntülemek için Scrimba'da oturum açmanız gerektiğini unutmayın.
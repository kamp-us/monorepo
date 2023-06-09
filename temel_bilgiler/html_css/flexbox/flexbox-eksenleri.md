### Giriş

Bir flex konteynerindeki öğelerin yönünün `flex-direction` özelliği kullanılarak nasıl kontrol edilebileceğini görelim.

### Derse Genel Bakış

Bu bölüm, bu derste öğreneceğiniz konuların genel bir özetini içerir.

-   Bir flex konteynerinin 2 "eksenini" öğreneceksiniz.
-   İçeriğinizi satırlar yerine sütunlar halinde düzenlemek için eksenleri nasıl değiştireceğinizi öğreneceksiniz.

Flexbox ile ilgili en kafa karıştırıcı şey, yatay veya dikey olarak çalışabilmesi ve hangi yönde çalıştığınıza bağlı olarak bazı kuralların biraz değişmesidir.

Bir flex konteyneri için varsayılan yön yatay veya `row` (satır)dır, <span id='flex-vertical'>ancak yönü dikey veya `column` (sütun) olarak değiştirebilirsiniz. Yön, CSS'de şu şekilde belirtilebilir:
</span>

~~~css
.flex-container {
  flex-direction: column;
}
~~~

### Eksenler

<span id='flex-axes'>Hangi yönü kullanırsanız kullanın, flex konteynerinizin 2 eksene sahip olduğunu bilmeniz gerekmektedir: ana eksen ve çapraz eksen. `Flex-direction` değeri değiştirildiğinde, değişen şey bu eksenlerin yönüdür. _Çoğu durumda_, `flex-direction: row` ana ekseni yatay (soldan sağa) ve `column` ana ekseni dikey (yukarıdan aşağıya) yerleştirir.</span>

Yani ilk örneğimizdeki gibi, bir div'e `display: flex` ekleyince çocukları yatay olarak sıralanır. Bu, varsayılan ayar olan "`flex-direction: row`a bir örnektir. Aşağıda benzer bir örnek var. `flex-direction: column` yazan satırın yorumunu kaldırırsanız, bu div'ler dikey olarak sıralanırlar.

<p class="codepen" data-height="400" data-default-tab="html,result" data-slug-hash="BaZKPdw" data-editable="true" data-user="TheOdinProjectExamples" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>[CodePen](https://codepen.io)'de TheOdinProject'in ([@TheOdinProjectExamples](https://codepen.io/TheOdinProjectExamples)) yazdığı [flex-direction örneğine](https://codepen.io/TheOdinProjectExamples/pen/BaZKPdw) bakın.
  </span> 
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Unutulmaması gereken bir nokta, bu örnekte, `flex: 1` kısaltmasını kullanırsak `flex-direction: column` beklendiği gibi çalışmaz. Şimdi deneyin (yani, `flex: 1 1 auto;` satırındaki flex değerini değiştirin). `flex: 1` kullanılırsa neden çalışmadığını anlayabilir misiniz? Orada _açıkça_ tanımlanmış bir `height` (yükseklik) bulunmasına rağmen div'ler kapanıyor.

Bunun nedeni, <span id='row-flex-basis'> flex kısaltmasının `flex-basis`ı `0`a genişletmesidir; bu, tüm `flex-grow` ve `flex-shrink` hesaplamalarının `0`dan başlayacağı anlamına gelir.</span> Boş div'lerin varsayılan yüksekliği 0'dır, bu nedenle flex öğelerimizin kendi konteynerlerinin yüksekliğine ulaşması için aslında herhangi bir yüksekliğe sahip olmaları gerekmez.

Yukarıdaki örnekte `flex: 1 1 auto` tanımlanarak yani flex öğelerinin varsayılan `height` değerlerine dönmesi sağlanarak sorun giderildi. Ebeveyn `.flex-container` elementine bir yükseklik ekleyerek veya kısaltma yerine `flex-grow: 1` kullanarak da bunu düzeltebilirdik.

Dikkat edilmesi gereken başka bir ayrıntı: <span id='column-flex-basis'>flex-direction'u `column` olarak değiştirdiğimizde, `flex-basis`, `width` yerine `height` özelliğini baz alır.</span> Kullanım esnasında bu bariz olabilir ancak yine de dikkat edilmesi gerekir.

Konudan biraz saptık... flex-direction ve eksenlerden bahsediyorduk. Konuya dönmek gerekirse, varsayılan davranış öğeleri yatay olarak düzenleyen `flex-direction: row`dur. Bunun, genellikle CSS'deki diğer ayrıntıları değiştirmeden sorunsuz çalışmasının nedeni, blok düzeyindeki (tüm yatayı kaplayan) öğelerin varsayılan olarak ebeveynlerinin tam genişliğine sahip olmasıdır. `flex-direction: column` kullanarak her şeyi dikey olarak değiştirmek karmaşıklık katar çünkü blok düzeyindeki öğeler, varsayılan olarak içeriklerinin yüksekliğine göre ayarlanır ve bu durumda herhangi bir içerik _bulunmamaktadır_.

> Yukarıdan aşağıya veya sağdan sola yazılan bir dil kullanıyorsanız, flex-direction davranışının değişebileceği durumlar bulunur. Ancak Arapça veya İbranice bir web sitesi yapmaya hazır olana dek bu konuda endişelenmenize gerek yok. 

Eksenlerin flexbox ile nasıl çalıştığına dair etkileşimli bir demo için şu Scrim'e göz atın:

<iframe src="https://scrimba.com/learn/flexbox/main-axis-and-cross-axis-flexbox-tutorial-cz94MT8?embed=odin,mini-header,no-big-play,no-next-up" sandbox="allow-scripts allow-same-origin" width="100%" height="400"></iframe>

### Bilgi Ölçme

Bu bölüm, bu dersi anlayıp anlamadığınızı kendi başınıza kontrol etmeniz için sorular içermektedir. Bir soruyu yanıtlamakta sorun yaşıyorsanız, soruya tıklayın ve bağlantının verdiği materyali inceleyin.

-   [Flex öğelerin yatay yerine dikey olarak düzenlenmesini nasıl sağlarsınız?](#flex-vertical)
-   [Bir `column` flex-container'da, `flex-basis` neyi ifade eder?](#column-flex-basis)
-   [Bir `row` flex-container'da, `flex-basis` neyi ifade eder?](#row-flex-basis)
-   [Önceki iki sorunun neden farklı yanıtları var?](#flex-axes)

### Ek Kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

*   [Bu flexbox cheatsheet](https://flexbox.malven.co/)'i, flex ve özellikleri için bazı faydalı kaynaklara sahiptir.

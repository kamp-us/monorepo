### Giriş

HTML ve CSS'in temel sözdizimini anladığınıza göre, artık ciddileşeceğiz. CSS'te ustalaşmanızı sağlayan en önemli beceriler _konumlandırma_ ve _düzendir._ Yazı tiplerini ve renkleri değiştirmek çok önemli bir beceridir. Ancak bir öğeyi, internet sayfasında tam olarak istediğiniz yere koyabilmek daha da önemlidir. Sonuçta, istisnasız tüm öğelerin üst üste yığıldığı kaç tane internet sayfası bulabilirsiniz ki?

Birkaç temel kavramı anladığınız zaman, öğeleri bir sayfada konumlandırmayı öğrenmek bunu o kadar da zor değildir. Ne yazık ki birçok öğrenci, JavaScript'e ulaşmak için HTML ve CSS'i aceleyle öğrenip bu temel kavramları kaçırıyor. Bu da hüsrana, acıya ve ([komik giflere](https://giphy.com/gifs/css-13FrpeVH09Zrb2)) yol açıyor. Çünkü öğelerinizi sayfada olmaları gereken yerlere yerleştiremezseniz, istediğiniz kadar JavaScript ustası olun, o JavaScript becerileriniz anlamsız olacaktır. Bunu göz önünde bulundurarak başlayalım.

### Derse genel bakış

Bu bölüm, bu derste öğreneceğiniz konulara genel bir bakış içerir.

*   _Kutu modeli_ hakkında her şeyi öğreneceksiniz.
*   Öğelerin `dış kenar boşluğu(margin)`, `iç kenar boşluğu(padding)` ve `kenar çizgileri(borders)` ile doğru boyutta olmasını nasıl sağlayacağınızı öğreneceksiniz.

### Kutu modeli

CSS'de başarılı olmak için anlamanız gereken ilk önemli kavram kutu modelidir. Karmaşık bir konu değil ancak bu konuyu atlamanız ileride üzülmenize sebep olabilir.

Bir internet sayfasındaki her şey dikdörtgen bir kutudur. Bu kutular, içlerinde başka kutular barındırabilir ve yan yana durabilirler. Sayfadaki her öğeye şu şekilde birer kenar çizgisi ekleyerek bunun nasıl çalıştığına dair kabaca bir fikir edinebilirsiniz:

```css
* {
  border: 2px solid red;
}
```

![boxes](https://cdn.statically.io/gh/TheOdinProject/curriculum/main/foundations/html_css/the-box-model/imgs/boxes.png)

Yukarıdaki CSS'i bu internet sayfasına eklemek isterseniz, bunun için tarayıcının denetleyicisini kullanabilirsiniz. Kutular içinde kutular!

![lines](https://cdn.statically.io/gh/TheOdinProject/curriculum/main/foundations/html_css/the-box-model/imgs/odin-lined.png)

Tamam, yukarıdaki resimde bazı daireler olabilir... ama söz konusu düzen olduğunda, bu öğeler daireler gibi değil, dikdörtgen kutular gibi bir araya gelirler. Sonuçta, bir internet sayfasını düzenlemek ve tüm öğelerini konumlandırmak, bu kutuları nasıl iç içe geçireceğinize ve üst üste koyacağınıza karar vermekten ibarettir.

Buradaki tek gerçek karmaşıklık, `iç kenar boşluğu`, `dış kenar boşluğu` ve `kenar çizgisi` kullanarak bu kutuların boyutlarını ve aralarındaki boşlukları değiştirmenin birçok yolunun olmasıdır. Bu kavrama özel makaleler, kavramı daha derinlemesine ele alıyor, ancak kısaca özetlememiz gerekirse:

*   `iç kenar boşluğu`, bir kutunun kenarları ile kutunun içeriği arasındaki boşluğu artırır.
*   `dış kenar boşluğu`, bir kutunun kenarları ile bitişiğindeki kutuların kenarları arasındaki boşluğu artırır.
*   `kenar çizgisi`, dış kenar boşluğu ile iç kenar boşluğu arasına bir boşluk ekler (yalnızca birkaç piksel olsa bile).

Diyagramları dikkatlice incelediğinizden emin olun.

![the box model](https://cdn.statically.io/gh/TheOdinProject/curriculum/main/foundations/html_css/the-box-model/imgs/box-model.png)

### Ödev

<div class="lesson-content__panel" markdown="1">

1. [Bu video](https://www.youtube.com/watch?v=rIO5326FgPE), kutu modeli, iç kenar boşluğu ve dış kenar boşluğu konularına basit bir genel bakış niteliğindedir. Haydi şimdi bu videoyu izleyin; sizi bu konunun diğer tüm yönleri hakkında bilgilendirecektir.
2. Kutu modeli kavramı son derece temel bir kavram olduğu için, [MDN'deki İngilizce dilindeki bu derse](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model) göz atın. Yukarıdaki video ile aynı materyali kapsar, ancak konunun biraz daha derinine iner. Verilen örneklere çok dikkat edin ve tarayıcı içi düzenleyicilerini denemeye vakit ayırın!
3. [Bu CSS Tricks sayfası](https://css-tricks.com/almanac/properties/m/margin/), `dış kenar boşluğu` özelliği hakkında yararlı bulacağınız bazı ek bilgiler içerir. Özellikle, `auto` değeri ve dış kenar boşluğu daraltma ile ilgili bölümler, bilmek isteyeceğiniz şeyler içerir.

</div>

### Bilgi ölçme

Bu bölüm, bu dersi kendi kendinize anlayıp anlamadığınızı kontrol etmeniz için sorular içermektedir. Bir soruyu yanıtlamakta zorlanıyorsanız, soruya tıklayın ve bağlantılı olduğu materyali gözden geçirin.

*   [İçeriden dışarıya doğru, kutu modeli özelliklerinin sıralaması nedir?](#kutu-modeli)
*   [CSS özelliklerinden `box-sizing` ne işe yarar? bunu öğrenmek için bu ingilizce makaleye göz atın.](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#the_alternative_css_box_model)
*   [Standart ve alternatif kutu modeli arasındaki fark nedir? bunu öğrenmek için bu ingilizce makaleye göz atın.](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#the_alternative_css_box_model)
*   [İki öğe arasında daha fazla boşluk oluşturmak için `dış kenar boşluğu` mu yoksa `iç kenar boşluğu` mu kullanırsınız? bunu öğrenmek için bu ingilizce makaleye göz atın.](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#margins_padding_and_borders)
*   [Bir öğenin içeriği ile kenarı arasında daha fazla boşluk oluşturmak için `dış kenar boşluğu` mu yoksa `iç kenar boşluğu` mu kullanırsınız? bunu öğrenmek için bu ingilizce makaleye göz atın.](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#margins_padding_and_borders)
*   [İki öğenin birbiriyle örtüşmesini isterseniz `dış kenar boşluğu` mu yoksa `iç kenar boşluğu` mu kullanırsınız? bunu öğrenmek için bu ingilizce makaleye göz atın.](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#margins_padding_and_borders)
*   [Tüm elementleriniz için alternatif kutu modelini nasıl ayarlıyorsunuz? öğrenmek için bu ingilizce makaleye göz atın.](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#the_alternative_css_box_model)
*   [Bir elementi yatay olarak nasıl ortalarsınız? bunu öğrenmek için bu ingilizce makaleye göz atın.](https://css-tricks.com/almanac/properties/m/margin/#aa-auto-and-centering)

### Ek kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

*   [CSS Kutu Modeli hakkındaki bu İngilizce W3Schools dersi](https://www.w3schools.com/css/css_boxmodel.asp), kutu modeli becerilerinizi egzersizlerle test etmek için etkileşimli bir oyun alanı sağlar.
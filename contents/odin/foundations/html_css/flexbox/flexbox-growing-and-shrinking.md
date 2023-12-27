---
title: 'Flexbox Grow ve Shrink'
---

### Giriş

Son derste bu flex öğelere `flex: 1` koyduğunuzda gerçekte ne olduğuna biraz daha yakından bakalım.

<br />

### Derse Genel Bakış

Bu bölüm, bu derste öğreneceğiniz konulara genel bir bakış içermektedir.

-   `flex` kısaltması olarak tanımlanan 3 özelliği ve bunları ayrı ayrı nasıl kullanacağınızı öğreneceksiniz.

<br />

### Flex Kısaltması

`flex` bildirimi aslında bir flex öğesi üzerinde ayarlayabileceğiniz 3 özelliğin kısaltmasıdır. Bu özellikler flex öğelerinin kapsayıcıları içinde kendilerini nasıl boyutlandıracaklarını etkiler. Bazı kısaltma özellikleri daha önce görmüştünüz, ancak bunları henüz resmi olarak tanımlamadık.

> Kısayol özellikleri, birden fazla diğer CSS özelliğinin değerlerini aynı anda ayarlamanıza olanak tanıyan CSS özellikleridir. Bir kısaltma özelliği kullanarak daha kısa (ve genellikle daha okunabilir) stil sayfaları yazabilir, zamandan ve enerjiden tasarruf edebilirsiniz.
>
> Kaynak: [MDN Kısaltma Özellikleri](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties)

Bu durumda, `flex` aslında `flex-grow`, `flex-shrink` ve `flex-basis` için bir kısaltmadır.

![flex kısaltması](https://cdn.statically.io/gh/TheOdinProject/curriculum/0cc6b26bb0c4b94524369d327c97a8fb11e83b6b/foundations/html_css/flexbox/imgs/10.png)

Yukarıdaki ekran görüntüsünde, `flex: 1` şu anlama gelir: `flex-grow: 1`, `flex-shrink: 1`, `flex-basis: 0`.

Çoğu zaman flex kısaltmasının yalnızca _bir_ değeriyle tanımlandığını görürsünüz. Bu durumda, bu değer `flex-grow` değerine uygulanır. Yani div'lerimize `flex: 1` koyduğumuzda, aslında `flex: 1 1 0` şeklinde bir kısaltma belirtmiş oluruz.


<br />

#### Flex-Grow

<br />

`flex-grow` değeri olarak tek bir sayı bekler ve bu sayı flex-item'in "büyüme faktörü" olarak kullanılır. Kapsayıcımızın içindeki her div'e `flex: 1` uyguladığımızda, her div'e aynı miktarda büyümesini söylemiş oluruz. Bunun sonucu olarak her div tam olarak aynı boyutta olur. Bunun yerine div'lerden yalnızca birine `flex: 2` eklersek, bu div diğerlerinin 2 katı kadar büyür.

Aşağıdaki örnekte `flex` kısaltması için `flex-shrink` ve `flex-basis` değerleri varsayılan değerleriyle belirtilmiştir.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="YzQqvgK" data-editable="true" data-user="TheOdinProjectExamples" style={{"height":"300px","boxSizing":"border-box","display":"flex","alignItems":"center","justifyContent":"center","border":"2px solid","margin":"1em 0","padding":"1em"}}>
  <span><a href="https://codepen.io">CodePen</a>'de TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) tarafından hazırlanan <a href="https://codepen.io/TheOdinProjectExamples/pen/YzQqvgK">flex-grow örneğine</a> göz atın.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

<br />

#### Flex-Shrink

`flex-shrink`, `flex-grow`a benzer, ancak bir flex öğesinin "küçültme faktörünü" ayarlar. `flex-shrink` yalnızca tüm flex öğelerinin boyutu ana kapsayıcılarından daha büyükse uygulanır. Örneğin, yukarıdaki 3 divimiz aşağıdaki gibi bir genişlik bildirimine sahip olsaydı: `width: 100px` ve `.flex-container` `300px`den küçük olsaydı, divlerimiz sığacak şekilde küçülmek zorunda kalacaktı.

Varsayılan küçültme faktörü `flex-shrink: 1`dir, bu da tüm öğelerin eşit şekilde küçüleceği anlamına gelir. Eğer bir öğenin küçülmesini istemiyorsanız `flex-shrink: 0;` belirtebilirsiniz. Belirli öğelerin normalden daha yüksek oranda küçülmesini sağlamak için daha yüksek sayılar da belirtebilirsiniz.

İşte bir örnek. Birazdan açıklayacağımız nedenlerden dolayı `flex-basis` değerini de değiştirdiğimizi unutmayın. Tarayıcı pencerenizi küçültürseniz, `flex-grow` kuralı aksi takdirde her öğenin eşit boyutta olması gerektiğini belirtmesine rağmen `.two` öğesinin verilen 250 piksel genişliğinden daha küçük olmadığını fark edeceksiniz.
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="JjJXZVz" data-editable="true" data-user="TheOdinProjectExamples" style={{"height":"300px","boxSizing":"border-box","display":"flex","alignItems":"center","justifyContent":"center","border":"2px solid","margin":"1em 0","padding":"1em"}}>
  <span><a href="https://codepen.io">CodePen</a>'de TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) tarafından hazırlanan <a href="https://codepen.io/TheOdinProjectExamples/pen/JjJXZVz">flex-shrink örneğine</a> göz atın.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Burada dikkat edilmesi gereken önemli bir husus, `flex-grow` veya `flex-shrink` belirttiğinizde, flex öğelerinin `width` için verdiğiniz değerlere uymak zorunda olmadığıdır. Yukarıdaki örnekte, 3 div'e de 250 piksellik bir genişlik verilmiştir, ancak üst öğeleri yeterince büyük olduğunda, onu doldurmak için büyürler. Aynı şekilde, üst öğe çok küçük olduğunda, varsayılan davranış sığacak şekilde küçülmeleridir. Bu bir hata değildir, ancak bunu beklemiyorsanız kafa karıştırıcı bir davranış olabilir.

<br />

#### Flex-Basis

`flex-basis` basitçe bir flex öğesinin başlangıç boyutunu ayarlar, böylece her türlü `flex-grow` veya `flex-shrink` işlemi bu başlangıç boyutundan başlar. Kısaltma değeri varsayılan olarak `flex-basis: 0%`. `Flex-shrink` örneğinde bunu `auto` olarak değiştirmek zorunda kalmamızın nedeni, temel `0` olarak ayarlandığında, bu öğelerin öğenin genişliğini(width) yok sayması ve her şeyin eşit şekilde küçülmesidir. Bir flex-base olarak `auto` kullanmak öğeye bir genişlik bildirimi (`width: 250px`) olup olmadığını kontrol etmesini söyler.

<br />

> #### Flex-Basis Hakkında Önemli Not:
>
> `flex-basis`in varsayılan değeri ile `flex-basis` belirtilmediğinde `flex` kısaltmasının bunu tanımlama şekli arasında bir fark vardır. `flex-basis` için gerçek varsayılan değer `auto`dur, ancak bir öğe üzerinde `flex: 1` belirttiğinizde, bunu `flex: 1 1 0` olarak yorumlar. Eğer bir öğenin `flex-grow` değerini _sadece_ ayarlamak istiyorsanız, bunu kısaltma kullanmadan doğrudan yapabilirsiniz. Ya da daha ayrıntılı olabilir ve `flex: auto` kullanımına eşdeğer olan tam 3 değer kısaltması `flex: 1 1 auto` kullanabilirsiniz.

<br />

> #### Flex: auto Nedir?
>
> Fark ettiyseniz, bir önceki notta yeni bir flex kısaltması olan `flex: auto`dan bahsetmiştik. Ancak bunu tam olarak tanıtmamıştık. `flex: auto` flex'in kısaltmalarından biridir. `auto` bir flex anahtar sözcüğü olarak tanımlandığında, `flex-grow: 1`, `flex-shrink: 1` ve `flex-basis: auto` değerlerine veya flex kısaltması kullanılarak `flex: 1 1 auto` değerine eşdeğerdir. Adı "auto" olmasına rağmen flex kısaltması kullanılırken `flex: auto` değerinin varsayılan değer olmadığına dikkat edin, bu ilk başta biraz kafa karıştırıcı olabilir. Ödev bölümünü okurken `flex: auto` ve potansiyel kullanım durumlarıyla karşılaşacak ve daha fazlasını öğreneceksiniz.

<br />

#### Pratikte...

Pratikte muhtemelen `flex-grow`, `flex-shrink` veya `flex-basis` için karmaşık değerler kullanmayacaksınız. Genel olarak, divlerin eşit şekilde büyümesini sağlamak için `flex: 1;` ve belirli divlerin küçülmesini önlemek için `flex-shrink: 0` gibi bildirimler kullanmanız muhtemeldir.

Gösterişli olmak ve bazı sütunların birbirleriyle belirli bir oranda ilişkili olduğu düzenler kurmak mümkündür, bu nedenle başka değerler kullanabileceğinizi bilmek yararlıdır, ancak bunlar nadiren rastlanan değerlerdir.

<br />

### Görev

<div class="lesson-content__panel" markdown="1">

1. Yaygın flex kısaltmaları değerlerinin temel değerlerini anlamak için okuyun. [W3C's flex Kısmı (İngilizce Kaynak)](https://www.w3.org/TR/css-flexbox-1/#flex-common)

2. Bu, tüm flex kısaltmaları değerlerini özetlemenin yanı sıra önceki makalede ele alınmamış bazı yeni sözdizimlerini de tanıtmaktadır. [MDN Doc](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)


</div>

<br />

### Bilgi Kontrolü

Bu bölüm, bu dersi kendi başınıza anlayıp anlamadığınızı kontrol etmeniz için sorular içermektedir. Bir soruyu yanıtlamakta zorlanıyorsanız, soruya tıklayın ve yönlendirdiği materyali gözden geçirin.

-   [flex özelliğinin kısaltmasında tanımlanan 3 değer nedir (örn. `flex: 1 1 auto`)?](#flex-kisaltmasi)
-   [flex kısaltması `flex:auto` için tanımlanan 3 değer nedir?](#flex-auto-nedir)


<br />

### Ek Kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

*  Flexbox'ın nasıl ve neden çalıştığını anlatan [videoyu izleyiniz](https://www.youtube.com/watch?v=u044iM9xsWU&t=1s&pp=ugMICgJhchABGAE%3D) 

Etkileşimli bir açıklama ve demo için [Scrim Flexbox](https://scrimba.com/learn/flexbox/the-flex-property-flexbox-tutorial-cGNKJTv) sayfasına göz atın. Alternatif bir açıklama için [flex-grow, flex-shrink ve flex-basis kullanımı üzerine Scrim](https://scrimba.com/learn/flexbox/flex-grow-shrink-basis-flexbox-tutorial-ck6L7fv)'i görüntüleyebilirsiniz. Bu Scrim'leri görüntülemek için Scrimba'da oturum açmanız gerektiğini unutmayın.

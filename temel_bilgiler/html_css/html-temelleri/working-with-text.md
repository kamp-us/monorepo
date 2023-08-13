### Giriş

Web'deki çoğu içerik metin tabanlıdır, bu nedenle kendinizi HTML kodlarıyla oldukça fazla çalışıyor halde bulacaksınız.

Bu derste, en çok kullanmanız muhtemel metin tabanlı öğeler hakkında bilgi edineceğiz.

### Derse Genel Bakış

Bu bölüm, bu derste öğreneceğiniz konuların genel bir özetini içermektedir.

*   Paragraflar nasıl oluşturulur?
*   Başlıklar nasıl oluşturulur?
*   Kalın metin nasıl oluşturulur?
*   İtalik metin nasıl oluşturulur?
*   İç içe geçmiş öğeler arasındaki ilişkiler
*   HTML yorumları nasıl oluşturulur?

### Paragraflar

Bir HTML sayfasında aşağıdaki metnin çıktısının ne olmasını beklersiniz?

~~~html
<body>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua.

  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
</body>
~~~

Görünüşe göre iki paragraf metin gibi duruyor, bu nedenle onun bu şekilde görüntülenmesini bekleyebilirsiniz. Ancak durum böyle değil, aşağıdaki çıktıda görebileceğiniz gibi:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="xxrKqeV" data-user="TheOdinProjectExamples" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>
<a href="https://codepen.io">CodePen</a>'de
TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) tarafından hazırlanan <a href="https://codepen.io/TheOdinProjectExamples/pen/penxxrKqeV">paragraf-kullanılmayan-örneği</a>'ni inceleyebilirsiniz.
  </span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>


Tarayıcı HTML'nizde bunun gibi yeni satırlarla karşılaştığında, bunları tek bir boşluk halinde sıkıştıracaktır. Bu sıkıştırmanın sonucu olarak tüm metin tek bir uzun satırda toplanır.

HTML'de paragraflar oluşturmak istiyorsak, <span id='create-paragraph-element'>paragraf öğesini kullanmamız gerekiyor</span>, bu da her paragrafımızdan sonra bir satırbaşı ekleyecektir. Bir paragraf öğesi, metin içeriğinin bir `<p>` etiketi ile sarılmasıyla tanımlanır.

Örneğin paragraf öğelerini kullanacak şekilde değiştirmek sorunu çözer:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="mdwbmdp" data-user="TheOdinProjectExamples" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>
<a href="https://codepen.io">CodePen</a>'de
TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) tarafından hazırlanan <a href="https://codepen.io/TheOdinProjectExamples/pen/mdwbmdp">paragraf-örneği</a>'ni inceleyebilirsiniz.
  </span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Başlıklar

Başlıklar diğer HTML kodlarından farklıdır: başlık olduklarını belirtmek için diğer metinlerden daha büyük ve kalın bir şekilde görüntülenirler.

<span id='different-heading-levels'>`<h1>` den başlayarak `<h6>` ya kadar 6 farklı başlık seviyesi vardır. Bir başlık etiketi içindeki sayı, o başlığın seviyesini temsil eder. En büyük ve en önemli başlık h1 iken, h6 en alt seviyedeki en küçük başlıktır.</span>

Başlıklar da paragraflar gibi tanımlanır. Örneğin, bir h1 başlığı oluşturmak için başlık metnimizi bir `<h1>` etiketi içine sararız.

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="LYLPLbg" data-user="TheOdinProjectExamples" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
<a href="https://codepen.io">CodePen</a>'de
TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) tarafından hazırlanan <a href="https://codepen.io/TheOdinProjectExamples/pen/LYLPLbg">html-başlık-örneği</a>'ni inceleyebilirsiniz.
  </span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Doğru başlık seviyesini kullanmak, içeriğe bir hiyerarşi sağladığından önemlidir. Genel sayfanın başlığı için her zaman h1 başlığı kullanılmalı ve daha düşük seviye başlıklar, sayfanın daha küçük bölümlerindeki içeriklerin başlıkları olarak kullanılmalıdır.

### Strong öğesi

`<strong>` öğesi metni kalın yapar. Ayrıca metni semantik olarak önemli olarak işaretler; bu, görme engelli kullanıcıların web sitenizi kullanmak için güvenecekleri ekran okuyucular gibi araçları etkiler. Bazı ekran okuyuculardaki ses tonu, güçlü bir öğe içindeki metnin önemini iletmek için değişecektir. Güçlü bir öğe tanımlamak için metin içeriğini bir `<strong>` etiketi içine sararız.

Tek başına `strong` öğesini kullanabilirsiniz:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="qBjWXrB" data-user="TheOdinProjectExamples" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>
<a href="https://codepen.io">CodePen</a>'de
TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) tarafından hazırlanan <a href="https://codepen.io/TheOdinProjectExamples/pen/qBjWXrB">html-single-strong-örneği</a>'ni inceleyebilirsiniz.
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Ancak muhtemelen kendinizi güçlü öğeyi diğer metin öğeleriyle birlikte daha çok kullanırken göreceksiniz, bunun gibi:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="wvewqJr" data-user="TheOdinProjectExamples" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>
<a href="https://codepen.io">CodePen</a>'de
TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) tarafından hazırlanan <a href="https://codepen.io/TheOdinProjectExamples/pen/wvewqJr">html-strong-paragraf-örneği</a>'ni inceleyebilirsiniz.
  </span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Bazen metni `<strong>` etiketi kullanmadan kalın yapmak isteyebilirsiniz. Bunu nasıl yapacağınızı müfredatın ilerleyen bölümlerindeki CSS derslerinde öğreneceksiniz.

### Em öğesi

`<em>` öğesi metni italik yapar. Ayrıca semantik olarak metne vurgu yapar, bu da yine ekran okuyucular gibi öğeleri etkileyebilir.

Tek başına `<em>` kullanmak için:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="wvewqpp" data-user="TheOdinProjectExamples" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>
<a href="https://codepen.io">CodePen</a>'de
TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) tarafından hazırlanan <a href="https://codepen.io/TheOdinProjectExamples/pen/wvewqpp">html-single-em-örneği</a>'ni inceleyebilirsiniz.
</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Yine strong öğesinde olduğu gibi, `<em>` öğesini de çoğunlukla diğer metin öğeleriyle birlikte kullanacaksınız:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="VwWZzyj" data-user="TheOdinProjectExamples" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>
<a href="https://codepen.io">CodePen</a>'de
TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) tarafından hazırlanan <a href="https://codepen.io/TheOdinProjectExamples/pen/VwWZzyj">html-em-ile-paragraf-örneği</a>'ni inceleyebilirsiniz.
</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Yerleştirme ve Girinti

Bu dersteki tüm örneklerde, diğer öğelerin içinde yer alan öğeleri girintilendirdiğimizi fark etmiş olabilirsiniz. Bu, öğelerin iç içe geçmesi olarak bilinir.

<span id='nested-relationship'>Elemanları diğer elemanların içine yerleştirdiğimizde, aralarında bir ebeveyn ve çocuk ilişkisi yaratırız. İç içe geçen elemanlar çocuk, iç içe geçtikleri eleman ise ebeveyndir.</span>

Aşağıdaki örnekte body öğesi üst öğe (ebeveyn), paragraf ise alt öğedir(çocuk):


<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="oNwjEvO" data-user="TheOdinProjectExamples" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>
<a href="https://codepen.io">CodePen</a>'de
TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) tarafından hazırlanan <a href="https://codepen.io/TheOdinProjectExamples/pen/oNwjEvO">html-nesting-parent-child örneği</a>'ni inceleyebilirsiniz.
  </span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Tıpkı insan ilişkilerinde olduğu gibi, HTML ana öğelerinin birçok çocuğu olabilir.  <span id='elements-same-level'>Aynı iç içe yerleştirme seviyesindeki öğeler kardeş olarak kabul edilir.</span>

Örneğin, aşağıdaki kodda yer alan iki paragraf kardeştir, çünkü her ikisi de body etiketinin alt öğeleridir ve birbirleriyle aynı iç içe geçme düzeyindedirler:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="ZEybrYx" data-user="TheOdinProjectExamples" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>
<a href="https://codepen.io">CodePen</a>'de
TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) tarafından hazırlanan <a href="https://codepen.io/TheOdinProjectExamples/pen/ZEybrYx">html-nesting-siblings örneği</a>'ni inceleyebilirsiniz.
</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

İç içe geçme seviyesini kendimiz ve gelecekte HTML'mizle çalışacak diğer geliştiriciler için net ve okunabilir hale getirmek için girinti kullanırız. Tüm alt öğelerin iki boşluk girintilenmesi önerilir.

Öğeler arasındaki üst, alt ve kardeş ilişkileri, HTML'imizi CSS ile şekillendirmeye ve JavaScript ile işlev eklemeye başladığımızda çok daha önemli hale gelecektir. Ancak şimdilik, öğelerin birbiriyle nasıl ilişkili olduğu ve ilişkilerini tanımlamak için kullanılan terminoloji arasındaki farkı bilmek önemlidir.

### HTML Yorumları

HTML yorumları tarayıcı tarafından görülemez; kodumuz üzerinde *yorum* yapmamızı sağlarlar, böylece diğer geliştiriciler veya gelecekteki kişiler bunları okuyabilir ve kodda açık olmayan bir şey hakkında bazı bilgiler edinebilirler.

Bir HTML yorumu yazmak basittir: Yorumu sadece `<!--` ve `-->` etiketleri ile çevreliyoruz. Örneğin:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="abwoyBg" data-user="TheOdinProjectExamples" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>
 <a href="https://codepen.io">CodePen</a>'de
TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) tarafından hazırlanan <a href="https://codepen.io/TheOdinProjectExamples/pen/abwoyBg">html-yorum-örneği</a>'ni inceleyebilirsiniz.
</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Ödev

<div class="lesson-content__panel" markdown="1">

1.  Kevin Powell'ın [HTML Paragraf ve Başlıklar Videosunu İzleyin](https://www.youtube.com/watch?v=yqcd-XkxZNM&list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-&index=3)
2.  Kevin Powell'ın [HTML Kalın ve İtalik Metin Videosunu İzleyin](https://www.youtube.com/watch?v=gW6cBZLUk6M&list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-&index=4)
3.  HTML'de metinle çalışma alıştırması yapmak için, farklı başlıklar kullanan, paragraflar kullanan ve paragraflardaki bazı metinleri kalın ve italik hale getiren düz bir blog makalesi sayfası oluşturun. Sitelerinizi oluştururken gerçek metin yerine sahte metin oluşturmak için [Lorem Ipsum](https://loremipsum.io/) kullanabilirsiniz.

</div>

### Bilgi Ölçme
  
Bu bölüm, bu dersi kendi başınıza anlayıp anlamadığınızı kontrol etmeniz için sorular içermektedir. Bir soruyu yanıtlamakta zorlanıyorsanız, soruya tıklayın ve yönlendirdiği materyali inceleyin.
 
*   [HTML'de bir paragraf nasıl oluşturulur?](#create-paragraph-element)
*   [HTML'de nasıl başlık oluşturulur?](#headings)
*   [Kaç farklı başlık seviyesi vardır ve aralarındaki fark nedir?](#different-heading-levels)
*   [Metni kalın ve önemli yapmak için hangi öğeyi kullanmalısınız?](#strong-element)
*   [Metne vurgu katmak amacıyla italik hale getirmek için hangi öğeyi kullanmalısınız?](#em-element)
*   [Bir elemanın içindeki herhangi bir iç içe elemanla ne gibi bir ilişkisi vardır?](#nested-relationship)
*   [İki öğe aynı iç içe geçme seviyesindeyse aralarında nasıl bir ilişki vardır?](#elements-same-level)
*   [HTML yorumları nasıl oluşturulur?](#html-comments)

### Ek Kaynaklar

Bu bölüm, ilgili içeriğe yararlı bağlantılar içerir. Zorunlu değildir, bu nedenle tamamlayıcı olarak düşünün.

*   [&lt;strong> &lt;b> &lt;em> ve &lt;i> etiketleri arasındaki anlamsal fark nedir ve bu öğeler ne zaman kullanılır?](https://medium.com/@zac_heisey/when-to-use-strong-b-em-and-i-tags-in-your-markup-fa4d0af8affb)
*   [Etkileşimli bir HTML metin biçimlendirme makalesi](https://www.w3schools.com/html/html_formatting.asp)
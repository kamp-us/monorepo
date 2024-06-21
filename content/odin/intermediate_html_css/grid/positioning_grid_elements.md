### Giriş

Bu derste bir ızgaranın farklı bölümlerini inceleyecek ve ızgara öğelerini konumlandırmak için kullanılabilecek ortak özellikleri keşfedeceğiz.

### Öğrenme çıktıları

Bu dersin sonunda:

İzler, çizgiler ve hücreler arasındaki farkları tanımlayabilmelisiniz
* Başlangıç ve bitiş çizgilerini tanımlayarak öğeleri konumlandırabilmelisiniz
* Kısaltılmış gösterim kullanabilmelisiniz

### Parçaların incelenmesi

Doğrudan konumlandırmaya geçmeden önce bir ızgaranın farklı bölümlerini daha iyi anlamak için bazı terminolojiler oluşturalım. Bir önceki derste `grid-template` kullanarak bir ızgara tanımladığınızda ızgaranın sahip olacağı *izleri* tanımladığınızı öğrendiniz. Bir ızgara izini, ızgaradaki herhangi bir tek satır ya da sütun olarak düşünebilirsiniz.

Bir örnek vermek gerekirse, 100 piksel satır ve 100 piksel sütun içeren 3x3'lük bir ızgara oluşturmak istiyorsak, 100 piksel yüksekliğinde 3 yatay iz ve 100 piksel genişliğinde 3 dikey iz tanımlamamız gerekir:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="css,result" data-slug-hash="poWvJXQ" data-editable="true" data-user="TheOdinProjectExamples" style={{"height":"300px","boxSizing":"border-box","display":"flex","alignItems":"center","justifyContent":"center","border":"2px solid","margin":"1em 0","padding":"1em"}}>
  <span><a href="https://codepen.io">CodePen'de</a> TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) tarafından hazırlanan<a href="https://codepen.io/TheOdinProjectExamples/pen/poWvJXQ">
  3x3 Düzen | CSS Izgaraları</a> örneğine bakınız.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Bu CodePen'de iki CSS satırının yorumlandığını fark edeceksiniz. Birinci ve ikinci satır ızgara çizgileri arasındaki ızgara izini görmek için `.first-row` sınıf seçicisindeki özelliğin yorumunu kaldırın.

Ardından, üçüncü ve dördüncü sütun ızgara çizgileri arasındaki ızgara izini görmek için `.last-column` sınıf seçicisindeki özelliği kaldırın.

### Çizgiler

Izgara izleri oluşturduğumuzda, ızgara çizgileri *dolaylı olarak* oluşturulur. Bu çok önemlidir. Izgara çizgileri yalnızca ızgara izlerimiz tanımlandıktan sonra oluşturulur. Izgara çizgilerini açıkça oluşturamayız.

Her parçanın bir başlangıç çizgisi ve bir bitiş çizgisi vardır. Çizgiler 1'den başlayarak soldan sağa ve yukarıdan aşağıya doğru numaralandırılır. Dolayısıyla, yukarıdaki 3x3 ızgaramızda 1 ila 4 arasında değişen sütunlar için dikey çizgiler ve 1 ila 4 arasında değişen satırlar için yatay çizgiler vardır.

Izgara çizgileri, ızgara öğelerini konumlandırmak için kullandığımız şeydir. Buna birazdan değineceğiz, ancak önce geliştirici araçlarımızı kullanarak ızgara çizgilerine daha derinlemesine bir göz atalım.

Chrome'da geliştirici araçlarını açarsanız, Düzen bölmesine gidebilir ve Izgara yer paylaşımı görüntüleme ayarlarını bulabilirsiniz. Satır numaralarını göster_ seçeneğinin etkin olduğundan emin olun. Izgara kaplamalarından doğru öğeyi seçin (örneğin, CodePen'imizi inceliyorsanız bu bizim `div.container`ımız olabilir.) Şimdi ızgara çizgilerinin bir katmanını görmelisiniz.

Geliştirici araçlarının pozitif çizgilerin karşısında negatif çizgiler de gösterdiğine dikkat edin. Şimdilik negatif çizgiler konusunda endişelenmenize gerek yok, ancak bunun size ızgara öğelerini konumlandırırken kullanabileceğiniz başka bir seçenek sunduğunu bilin.

### Hücreler

Bir ızgarada tek bir satır izi ve tek bir sütun izi tarafından paylaşılan alana ızgara *hücresi* denir. Bir ızgara hücresini elektronik tablodaki bir hücre gibi düşünebilirsiniz: *satır, sütun* koordinatıyla tanımlanan bir alan.

Varsayılan olarak, bir ızgara kapsayıcısının her bir alt öğesi bir hücreyi kaplayacaktır. Yukarıdaki örnekte, ızgaramızda 9 hücre (3 satır x 3 sütun) vardır ve her birinin içinde otomatik olarak konumlandırılmış bir alt öğe bulunur. "A" harfiyle işaretlenmiş öğe, satır izi 1 (satır ızgara çizgileri 1 ve 2 arasında) ve sütun izi 1 (sütun ızgara çizgileri 1 ve 2 arasında) içinde yer alan bir hücreyi kaplamaktadır. "H" harfiyle işaretlenmiş öğe, satır izi 3 (satır kılavuz çizgileri 3 ve 4 arasında) ve sütun izi 2'de (sütun kılavuz çizgileri 2 ve 3 arasında) bulunan bir hücrededir.

Ancak ızgara öğelerimizin sırasını değiştirmek istersek ne olur? Ya da öğelerin birden fazla hücreyi kaplamasını istersek?

### Konumlandırma

Öğelerin nasıl konumlandırılabileceğini anlamak için bir daire için temsili bir kat planı oluşturacağız. Dairemizin toplam alanını (ızgara konteyneri) 5x5 ızgaraya bölerek başlayalım. Bu örneği biraz daha net hale getirmek için konteyner alanımızı ayırt etmek için bir arka plan rengi kullanacağız. Ayrıca burada `display: inline-grid` kullandığımıza dikkat edin, böylece konteynerimiz blok seviyesindeki bir kutu gibi uzayıp yer kaplamaz. Bu sadece alanı daha iyi görselleştirmemize yardımcı olacaktır.

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="css,result" data-slug-hash="rNGaOxB" data-editable="true" data-user="TheOdinProjectExamples" style={{"height":"300px","boxSizing":"border-box","display":"flex","alignItems":"center","justifyContent":"center","border":"2px solid","margin":"1em 0","padding":"1em"}}>
  <span><a href="https://codepen.io">CodePen'de</a> TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) tarafından hazırlanan<a href="https://codepen.io/TheOdinProjectExamples/pen/rNGaOxB">
  Konumlandırma 1 | CSS Izgaraları</a> örneğine bakınız.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Bu haliyle oldukça hüzünlü bir birim. Onu boş bir kutu olmaktan çıkarıp bir ev haline getirmek için ızgara konteynerimize farklı odaları temsil edecek bazı öğeler ekleyeceğiz.

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="css,result" data-slug-hash="poWvjgY" data-editable="true" data-user="TheOdinProjectExamples" style={{"height":"300px","boxSizing":"border-box","display":"flex","alignItems":"center","justifyContent":"center","border":"2px solid","margin":"1em 0","padding":"1em"}}>
  <span><a href="https://codepen.io">CodePen'de</a> TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) tarafından hazırlanan<a href="https://codepen.io/TheOdinProjectExamples/pen/poWvjgY">
  Konumlandırma 2 | CSS Izgaraları</a> örneğine bakınız.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Odalarımızın çoğu tek bir ızgara hücresini temsil eder. Ama biz kendimize büyük bir oturma odası verdik. (Yaşasın!) Bu öğeyi `grid-column-start` ve `grid-column-end` kullanarak konumlandırdık. Özellik değerleri, başlamasını ve bitmesini istediğimiz sütun ızgara çizgilerini temsil eder.

Ayrıca, bu öğenin ızgara satırı konumlandırması için özellik değerlerini yorumladığımızı da fark edeceksiniz. Birinci ve üçüncü satır ızgara çizgileri arasındaki ızgara izini alarak oturma odamızın nasıl daha da büyüyebileceğini görmek için `grid-row-start` ve `grid-row-end` özelliklerini yorumdan çıkarın.

Bu özellikler, öğelere her bir öğenin kaç satır ve sütuna yayılması gerektiğini söylemek için mevcut ızgara çizgilerimizi kullanmamızı sağlar. Buradaki özellik değerleriyle oynamak için bir dakikanızı ayırın. Satır numaraları kafa karıştırıcıysa ızgara katmanını göstermek için geliştirme araçlarınızı kullanarak konteyneri inceleyin.

Daha sonra, alanımızı daha verimli kullanmamız gerekiyor. Odalarımızın geri kalanını birden fazla ızgara hücresine yayacağız ve dairemizin geri kalanını dolduracağız.

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="css,result" data-slug-hash="jOGEbrX" data-editable="true" data-user="TheOdinProjectExamples" style={{"height":"300px","boxSizing":"border-box","display":"flex","alignItems":"center","justifyContent":"center","border":"2px solid","margin":"1em 0","padding":"1em"}}>
  <span><a href="https://codepen.io">CodePen'de</a> TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) tarafından hazırlanan<a href="https://codepen.io/TheOdinProjectExamples/pen/jOGEbrX">
  Konumlandırma 3 | CSS Izgaraları</a> örneğine bakınız.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Artık dairemizin tamamı için planlarımız var. Eğer `#kitchen` seçicisine bakarsanız burada kısaltılmış özellikler kullandığımızı göreceksiniz. `grid-column` sadece `grid-column-start` ve `grid-column-end` değerlerinin iki değer arasında bir eğik çizgi ile birleştirilmesidir. `grid-row` ise bir öğenin satır konumlandırmasını ayarlamanın kısaltılmış yoludur.

Kat planımızla ilgili bir sorun, banyo ve mutfağın dairenin iki ucunda olmasıdır. Bu iki odayı arka arkaya yerleştirerek tesisattan tasarruf edebiliriz. Şimdi bir dakikanızı ayırın ve banyo, yatak odası ve dolap için başlangıç ve bitiş konumlarını değiştirip değiştiremeyeceğinize bakın, böylece banyo mutfağın hemen yanında olur. Burada uzun ya da kısa yol özelliklerini kullanabilirsiniz.

### grid-area

Artık satır ve sütun çizgilerini kullanarak ızgara öğelerinizi nasıl konumlandıracağınızı biliyorsunuz. Ancak öğeleri konumlandırmanın başka yolları da var ve bu noktada işler biraz karmaşıklaşabilir.

Izgara öğelerini başlangıç ve bitiş çizgileriyle konumlandırmak için daha da kısa bir kısaltma vardır. `Grid-row-start` / `grid-column-start` / `grid-row-end` / `grid-column-end` öğelerini `grid-area` kullanarak tek bir satırda birleştirebilirsiniz.

Yukarıdaki oturma odamız şu şekilde yazılabilir:

~~~css
/* styles.css */

#living-room {
  grid-area: 1 / 1 / 3 / 6;
}
~~~

Ancak `grid-area` birkaç farklı şeyi de ifade edebilir.

Bir ızgaradaki tüm öğeleri konumlandırmak için ızgara çizgilerini kullanmak yerine ızgaranın görsel bir düzenini kelimelerle oluşturabiliriz. Bunu yapmak için ızgaradaki her öğeye `grid-area` kullanarak bir isim veririz.

Yani oturma odamız bu şekilde yazılabilir:

~~~css
/* styles.css */

#living-room {
  grid-area: living-room;
}
~~~

Bunu tüm ızgara öğelerimiz için yapabilir ve her odaya isim olarak bir `grid-area` değeri verebiliriz. Daha sonra `grid-template-areas` kullanarak tüm yapıyı ızgara konteyneri ile eşleyebiliriz.

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="css,result" data-slug-hash="dyVPYpv" data-editable="true" data-user="TheOdinProjectExamples" style={{"height":"300px","boxSizing":"border-box","display":"flex","alignItems":"center","justifyContent":"center","border":"2px solid","margin":"1em 0","padding":"1em"}}>
  <span><a href="https://codepen.io">CodePen'de</a> TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) tarafından hazırlanan<a href="https://codepen.io/TheOdinProjectExamples/pen/dyVPYpv">
  grid-template-areas 1 | CSS Izgaraları</a> örneğine bakınız.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Vay canına! CodePen tarayıcısını açıp `grid-template-areas` düzenini gerçekten satır satır okumak için yeterince büyük yapmak isteyebilirsiniz. Ancak bu araç bize öğeleri konumlandırmak için tamamen farklı bir yol sunuyor.

Boş hücreleri belirtmek için `.` bile kullanabiliriz. Diyelim ki dairemize bir su ısıtıcısı ve çamaşır makinesi/kurutucusu alınıyor. Tam yerleşim planından emin olmayabiliriz, ancak banyo ve mutfakta daha fazla yer açarak bir miktar alanı kolayca görselleştirebiliriz:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="css,result" data-slug-hash="ZEXYbpg" data-editable="true" data-user="TheOdinProjectExamples" style={{"height":"300px","boxSizing":"border-box","display":"flex","alignItems":"center","justifyContent":"center","border":"2px solid","margin":"1em 0","padding":"1em"}}>
  <span><a href="https://codepen.io">CodePen'de</a> TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) tarafından hazırlanan<a href="https://codepen.io/TheOdinProjectExamples/pen/ZEXYbpg">
  grid-template-areas 2 | CSS Izgaraları</a> örneğine bakınız.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Artık bir ızgara öğesinde `grid-area` kullanmanın iki farklı yolunu biliyorsunuz. Hatta "ızgara alanı" teriminin bir grup hücreyi ifade ettiğini de görebilirsiniz. Örneğin, oturma odasının tüm ızgara hücreleri birlikte bir ızgara alanıdır. Apartman benzetmesi yardımcı olacaktır. Bir ızgara öğesi, bir apartman dairesinde dört duvarlı bir oda gibi ızgaranın bir alanını oluşturan birden fazla hücreyi kaplayabilir.

### Toparlamak gerekirse

Ödevleri gözden geçirdikçe, ızgara öğelerini parçalar arasında konumlandırırken `span` ve `auto` gibi daha fazla terminolojiyle karşılaşacaksınız. Flexbox'a benzer şekilde ızgara öğelerini yaslamak ve hizalamak için özellikler de vardır. Tüm bu terminolojiyi ve öğelerin nasıl konumlandırılacağını öğrenmenin en iyi yolu bol bol pratik ise yapmaktır!

### Ödev
<div class="lesson-content__panel" markdown="1">
- MDN'nin [CSS Grid ile Çizgi Tabanlı Yerleştirme] (https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid) makalesini okuyun
- CSS-Tricks'ten [Grid Özellikleri Üzerine - Bölüm 4] (https://css-tricks.com/snippets/css/complete-guide-grid/#grid-properties)'ü inceleyin.
</div>

### Pratik

> Aşağıdaki alıştırmaları yaparken, lütfen bunları gerçekleştirmek için ihtiyaç duyduğunuz tüm belgeleri ve kaynakları kullanın. Bu noktada bunların hiçbirini ezberlemeniz amaçlanmamıştır. Dokümanları kontrol edin, google'ı kullanın, bunları yapmak için ne yapmanız gerekiyorsa yapın (çözümleri kontrol etmenin yanı sıra).

[CSS alıştırmaları depomuza](https://github.com/TheOdinProject/css-exercises) geri dönün (bunları daha önce yaptınız, ancak talimatların README'de olduğunu unutmayın). İlk alıştırmayı 'grid' dizininde yapın:

1. grid-layout-1

### Bilgi ölçme

Bu bölüm, bu dersi anladığınızı kontrol etmeniz için sorular içermektedir. Aşağıdaki soruları kendi başınıza yanıtlamakta zorlanıyorsanız, yanıtı bulmak için yukarıdaki materyali gözden geçirin.

- [İz ve çizgi arasındaki farkı açıklayın]( #reviewing-tracks)
- [Bir ızgara üzerindeki en küçük birim nedir?](#cells)
- [`grid-column-start` veya `grid-column-end` özelliklerine ne tür bir değer vereceğiz?](#positioning)
- [Bir grid öğesinin tüm başlangıç ve bitiş değerlerini birleştirmek için hangi özelliği kullanabiliriz?](#grid-area)
- [Hangi grid konteyner özelliği grid öğelerinin görsel yapısını eşleyebilir?](#grid-area)

### Ek kaynaklar

Bu bölüm diğer içeriklere yararlı bağlantılar içerir. Zorunlu değildir, bu nedenle destekleyici olarak kabul edin.

- Öğeleri konumlandırma alıştırması yapmak için [CSS Grid Garden] (https://cssgridgarden.com/) 1 - 17 seviyelerini oynayın. Diğer seviyelerin bu dersin kapsamı dışında olduğunu unutmayın.
- Eğer `grid-template-areas` kullanımı hakkında daha fazla bilgi edinmek istiyorsanız [Rachel Andrew'un Smashing Magazine makalesine](https://www.smashingmagazine.com/understanding-css-grid-template-areas) göz atın.
- Hizalama ve öğeleri merkezleme hakkında daha fazla bilgi edinmek için [CSS Izgara Düzeninde Kutu Hizalama](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout) hakkındaki bu MDN Dokümanlarını okuyun.

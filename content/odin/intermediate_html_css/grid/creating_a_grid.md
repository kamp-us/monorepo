---
title: 'Grid Oluşturma'
---

### Giriş

CSS Grid düzeninin ne olduğunu bildiğinize göre kendi Grid'inizi nasıl yaratacağınızı öğreneceksiniz. Bu ders, grid konteyneri oluşturmayı, sütun ve satır eklemeyi, Grid'in altındaki belirli ve belirsiz konsepti ve grid boşluklarını nasıl ayarlayabileceğinizi ele alacak.

### Öğrenim çıktıları

Bu dersin sonunda şunları yapabiliyor olmalısınız:

- Grid konteyneri oluşturmak,
- Grid izlerini tanımlamak,
- Belirli ve imalı grid arasındaki farkı açıklamak,
- Grid hücreleri arasında boşlukları ayarlamak

### Grid düzeni kurmak

Bu ders, size fazla uğraşmadan grid düzeni oluşturmanın ne kadar kolay olduğunu gösterecek. İlerleyen derslerde konumlandırma ve karmaşık grid düzenleri oluşturmak hakkında daha fazlasını öğreneceksiniz ama şimdilik basit bir şey ile başlayacağız.

#### Grid konteyneri

CSS Grid'i konteyner ve öğeler açısından düşünebiliriz. Basitçe, bir öğeyi grid konteyneri yaptığınız zaman o öğe grid'in bütününü içinde bulunduracaktır. CSS'de bir öğeyi grid konteynerı yapmak için `display: grid` ya da `display: inline-grid` özelliklerini kullanabilirsiniz.

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="css,result" data-slug-hash="ZEXYGGx" data-editable="true" data-user="TheOdinProjectExamples" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
    <span>TheOdinProject(<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
     tarafından (<a href="https://codepen.io">CodePen'de</a>) hazırlanan <a 
     href="https://codepen.io/TheOdinProjectExamples/pen/ZEXYGGx">My First Grid | CSS Grid</a>  adlı ingilizce örneğe bakınız.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Bu örnekte `class="container"` ile işaretlenmiş ebeveyn öğe grid konteynerı oluyor ve altındaki her bir direkt çocuk öğeler ise otomatik olarak grid öğeleri olmuş oluyor. CSS Grid ile ilgili kolay olan şey ise her bir herbir çocuk öğe için bir özellik atamasında yapmanıza gerek kalmıyor.

Dikkate almanız gerekiyor ki sadece direkt çocuk olan öğeler grid öğesi olacaktır. Eğer bu direkt çocuk öğelerden birisinin altında başka bir öğe olsaydı, o grid öğesi olmayacaktı. Aşağıdaki örnekte paragraf öğesi grid öğesi değildir:

```html
<!-- index.html -->

<div class="container">
  <div>Öğe 1</div>
  <div>Öğe 2
    <p>Ben bir grid öğesi değilim!</p>
  </div>
  <div>Öğe 3</div>
  <div>Öğe 4</div>
</div>
```

Ama flexbox derslerinden öğrendiğiniz gibi grid öğeleri *aynı zamanda* grid konteyneri olabilir. Yani eğer isterseniz bir grid'in içerisinde başka bir grid yapabilirsiniz.

#### Grid'lerdeki çizgiler ve izler

Örneğimiz ile beraber kodladığın için (kodluyorsun değil mi?) farkedeceksin ki tam olarak grid yapısına benzemiyor. CSS Grid hakkındaki bir çok kaynak size en başından kutuları ve çizgilerle belirtilen grid tablolarını gösteriyor. Ama sizin grid konteynerınızın ve grid öğelerinizin herhangi bir kenar çizgisi bulunmuyorsa bunları ekranınızda göremeyeceksiniz. Merak etmeyin, onlar orada bulunuyor!

Eğer bu öğeleri geliştirici araçları ile denetlerseniz, kod tarafında bu öğelerde grid rozeti olduğunu göreceksiniz. Geliştirici araçlarının düzen ayarları size bu görünmez çizgileri, izleri ve gridin alanlarını gösterebileceği bir katman seçmesinize olanak sağlıyor. Aşağıdaki ödevde tarayıcının geliştirici araçlarıni kullanmakla ilgili okuma yapacaksınız ve bir sonraki derste çizgiler, izler ve alanlar hakkında daha fazla şey öğreneceksiniz.

#### Sütunlar ve satırlar

Şimdi birkaç grid öğesi bulunan bir grid konteynerimiz olduğuna göre, sütunlarımızı ve satırlarımız belirlememizin zamanı geldi. Bu grid izlerini (griddeki çizgilerin arasındaki boşluk) tanımlayacak. Böylece sütunlarımız arasında boşluk bırakmak için bir sütun izi ve satırlarımız arasında boşluk bırakmak için bir satır izi ayarlayabiliriz. İzler ve satırlarla ilgili ayrıntılara bir sonraki derste gireceğiz, ancak şimdilik sadece birkaç sütun ve satır yapalım.

`grid-template-columns` ve `grid-template-rows` özellikleri sütun ve satır izlerini tanımlamamızı kolaylaştırır. Bu ders için sütun ve satırlarımızı pikselleri kullanarak tanımlayacağız. Gelecek derslerde, yüzdelik ve kesirli değerler ile tanımlamayı da öğreneceksiniz.

Yukarıdaki grid konteynerımıza dönecek olursak, dört grid öğemizi yerleştirmek için iki sütun ve iki satır tanımlayalım:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="css,result" data-slug-hash="yLzyNYp" data-editable="true" data-user="TheOdinProjectExamples" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
    <span>TheOdinProject(<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) 
    tarafından (<a href="https://codepen.io">CodePen'de</a>) hazırlanan 
    <a href="https://codepen.io/TheOdinProjectExamples/pen/yLzyNYp">Columns and Rows 1 | CSS Grid</a> adlı ingilizce örneğe bakınız.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Eğer gridimize daha fazla sütun ve satır eklemek istersek, basitçe bu değerleri tanımlayarak başka bir iz oluşturabiliriz. Diyelim ki örneğimize üçüncü bir sütun eklemek istedik:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="css,result" data-slug-hash="NWaPqxj" data-editable="true" data-user="TheOdinProjectExamples" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
    <span>TheOdinProject(<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) 
    tarafından (<a href="https://codepen.io">CodePen'de</a>) hazırlanan 
    <a href="https://codepen.io/TheOdinProjectExamples/pen/NWaPqxj">Columns and Rows 2 | CSS Grid</a> adlı ingilizce örneğe bakınız.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

CSS Grid satırları ve sütunları tanımlamak için kısa özellikler bulunduruyor. Önceki örneğimizde `grid-template-rows` ve `grid-template-columns` özelliklerini kısaca `grid-template` özelliği olarak değiştirebiliriz. Burada satırlarımızı ve sütunlarımızı aynı anda tanımlayabiliriz. Bu özellik için satırlar taksim(slash)(/) işaretinden önce ve sütunlar taksim işaretinden sonra tanımlanır. Hadi aynı sütun ve satır değerlerini kısayol özelliğini kullanarak tanımlayalım:

```css
/* styles.css */

.container {
  display: grid;
  grid-template: 50px 50px / 50px 50px 50px;
}
```

Sütunların ve satırların aynı değere sahip olmasına gerek yoktur. Hadi sütunlarımızın değerlerini ilk sütunumuz diğerlerinin beş katı olacak şekilde değiştirelim:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="css,result" data-slug-hash="LYzEVGo" data-editable="true" data-user="TheOdinProjectExamples" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
    <span>TheOdinProject(<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) 
    tarafından (<a href="https://codepen.io">CodePen'de</a>) hazırlanan 
    <a href="https://codepen.io/TheOdinProjectExamples/pen/LYzEVGo">Columns and Rows 3 | CSS Grid</a> adlı ingilizce örneğe bakınız.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Belirli grid vs belirsiz grid

Hadi 4 grid öğesi olan 2x2 düzenli orjinal örneğimize geri dönelim. `grid-template-columns` ya da `grid-template-rows` özelliklerini değiştirmeden beşinci bir öğe eklersek ne olacaktır?

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="css,result" data-slug-hash="qBPEdZw" data-editable="true" data-user="TheOdinProjectExamples" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
    <span>TheOdinProject(<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) 
    tarafından (<a href="https://codepen.io">CodePen'de</a>) hazırlanan 
    <a href="https://codepen.io/TheOdinProjectExamples/pen/qBPEdZw">Implicit Grid | CSS Grid</a> adlı ingilizce örneğe bakınız.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Farkedeceksiniz ki beşinci öğemiz grid içerisine yerleştirildi ve tanımlamadığımız üçüncü satırda yer alıyor. Bunun sebebi belirsiz grid konsepti ve bu CSS Grid'in belirli şekilde tanımlanmadığı zaman grid öğelerini yerleştirme yönetimidir.

`grid-temlate-colums` ve `grid-temlate-rows` özelliklerini kullandığımız zaman, grid öğelerimizi yerleştirmek için belirleyici şekilde grid çizgilerini tanımlamış oluruz. Lakin grid'in ek içerikler için daha fazla çizgiye ihtiyacı olduğu zaman belirsiz şekilde yeni grid çizgileri tanımlayacaktır. Ek olarak `grid-temlate-colums` ve `grid-temlate-rows` özelliklerinde tanımladığımız boyut değerleri bu belirsiz grid çizgileri etki etmeyecektir. Ama belirsiz grid çizgileri için değerler tanımlayabiliriz.

Belirsiz grid çizgilerinin boyutlarını `grid-auto-rows` ve `grid-auto-column` özellikleriyle ayarlayabiliriz. Bu sayede belirsiz gride eklenen öğelerin tanımladığımız boyutlara uymalarını sağlayabiliriz.

Diyelim ki her yeni satırın belirlediğimiz satır çizgilerinin boyutlarına eşit olmasını istiyoruz:

```css
/* styles.css */

.container {
  display: grid;
  grid-template-columns: 50px 50px;
  grid-template-rows: 50px 50px;
  grid-auto-rows: 50px;
}
```

Varsayılan olarak CSS Grid ek olarak eklenen her içeriği belirsiz satır olarak olarak ekler. Bu, ekstra öğelerin gridin aşağısına yatay olarak ekleneceği anlamına gelir. Ekstra içeriğin yatay olarak eklenmesi nadiren istenilen bir şeydir *ama* bu `grid-auto-flows: column` özelliğiyle ve bu belirsiz çizgilerin boyutları `grid-auto-columns` özelliğiyle ayarlanabilir.

### Aralık

Grid satırları ve sütunları arasındaki aralık oluk ya da geçit olarak bilinir. Aralık boyutları satırlar ve sütunlar için `column-gap` ve `row-gap` özellikleriyle ayrık olarak ayarlanabilir. Ek olarak `gap` adındaki kısayol özelliğini kullanarak `row-gap` ve `column-gap` tanımlanabilir.

Grid aralığı özelliklerimizi eklemeden önce, geliştirici araçlarına güvenmeden işleri biraz daha kolay görülebilir hale getirelim. Devam edip grid öğelerimizin etrafına basit bir kenarlık ekleyeceğiz, böylece birbirlerinin etrafındaki yerleşimlerini daha iyi anlayabileceğiz:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="css,result" data-slug-hash="eYGmNzj" data-editable="true" data-user="TheOdinProjectExamples" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
    <span>TheOdinProject(<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) 
    tarafından (<a href="https://codepen.io">CodePen'de</a>) hazırlanan 
    <a href="https://codepen.io/TheOdinProjectExamples/pen/eYGmNzj">Gap 1 | CSS Grid</a> adlı ingilizce örneğe bakınız.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Sonrasında iki sütunumuzu ayırmak için hafif bir sütun aralığı kullanalım:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="css,result" data-slug-hash="wvrBazJ" data-editable="true" data-user="TheOdinProjectExamples" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
    <span>TheOdinProject(<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
    tarafından (<a href="https://codepen.io">CodePen'de</a>) hazırlanan 
    <a href="https://codepen.io/TheOdinProjectExamples/pen/wvrBazJ">Gap 2 | CSS Grid</a> adlı ingilizce örneğe bakınız.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Son olarak aradaki farkı vurgulamak için satırlarımıza fazlaca aralık ekleyelim:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="css,result" data-slug-hash="abLzOmX" data-editable="true" data-user="TheOdinProjectExamples" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
    <span>TheOdinProject(<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
    tarafından (<a href="https://codepen.io">CodePen'de</a>) hazırlanan 
    <a href="https://codepen.io/TheOdinProjectExamples/pen/abLzOmX">Gap 3 | CSS Grid</a> adlı ingilizce örneğe bakınız.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Yukarıdaki CodePen örneğinde `gap` kısayoluyla oynarak hem `row-gap` hem de `column-gap` özelliklerini ayarlayabilirsiniz.

### İlk grid'imizi tamamlıyoruz

Grid'inizi oluşturduğunuza göre CSS Grid ile öğelerinizin düzenini kontrol etmenin ne kadar kolay olduğunu görebilirsiniz. Ayrıca CSS Grid'in yaygın düzen problemlerini nasıl çözebileceğinin farkına varabilirsiniz. Önümüzdeki birkaç derste öğelerin konumlanmasını ve ileri düzey grid özelliklerini ele alacağız. Ama önce grid temellerini konu alan aşağıdaki linklere göz atın.

### Ödev

<div class="lesson-content__panel" markdown="1">
- [CSS-Tricks'in ingilizce makalesindeki](https://css-tricks.com/snippets/css/complete-guide-grid/) birinci, ikinci ve üçüncü kısımları okuyun.
- Web Bos'un Css Grid kursundaki belirli vs belirsiz çizgiler hakkındaki bu ingilizce [kısa videoyu](https://www.youtube.com/watch?v=8_153Zz4YI8&ab_channel=WesBos) izleyin.
- Chrome geliştirici araçlarından CSS Grid'i incelemekle ilgili olan bu ingilizce [dökümantasyonlara](https://developer.chrome.com/docs/devtools/css/grid/) bakın.
</div>

### Bilgi ölçme

Bu bölüm, bu dersi anladığınızı kontrol etmeniz için sorular içermektedir. Aşağıdaki soruları kendi kendinize yanıtlamakta zorlanıyorsanız, yanıtı bulmak için yukarıdaki materyali gözden geçirin.

- [Bir HTML öğesi nasıl grid öğesi olur?](#grid-düzeni-kurmak)
- [Grid'de çizgilerin arasındaki boşluk nedir?](#sütunlar-ve-satırlar)
- [Grid'de oluklar (geçit olarak da bilinir) nasıl ayarlarsınız?](#aralık)
- [Tanımlı izlerdan daha fazla içerik olduğunda ne olduğunu açıklayınız.](#belirli-grid-vs-imalı-grid)
- [Bu tanımlanmamış izlerin boyutlarını nasıl değiştirebilirsiniz?](#belirli-grid-vs-imalı-grid)

### Ek kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

- MDN'in, [Basic Concepts of grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout) adındaki ingilizce yazısı temel konuları ve bazı ek konseptleri ele alıyor.
- PeterSommerhoff'un grid terminolojisi hakkındaki [bu ingilizce kısa videosunu](https://www.youtube.com/watch?v=0m5qgfX2TVQ&ab_channel=PeterSommerhoff) izleyin.
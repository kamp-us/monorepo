---
title: "CSS'e Giriş"
---

### Giriş

Önceki derste, bir internet sayfasının nasıl yapılandırıldığını belirleyen HTML'in nasıl yazıldığını öğrendiniz. Bir sonraki adım, bu yapının biraz _stil_ ile güzel görünmesini sağlamaktır. CSS de tam bu noktada devreye girer. Sonraki birkaç derste, bazı temel CSS kavramları olduğuna inandığımız ve herkesin en başından bilmesi gereken şeylere(ister yeni başlıyor olun, ister sadece bilgilerinizi tazelemek isteyin) odaklanacağız.

### Derse genel bakış

Bu bölüm, bu derste öğreneceğiniz konuların genel bir özetini içerir.

- CSS ile HTML'e stiller eklemek.
- Class ve ID niteliklerinin nasıl kullanılacağını anlamak.
- Doğru seçicileri kullanarak belirli öğelere stiller eklemek.

### Temel sözdizimi

CSS, en temel düzeyde çeşitli kurallardan oluşur. Bu kurallar, bir seçici(bu konuya birazdan değineceğiz) ve noktalı virgüllerle ayrılmış bir tanımlama listesiyle belirlenir. Bu tanımlamaların her biri özellik:değer(property:value) şeklinde yazılır.

![Temel CSS Sözdizimi](https://cdn.statically.io/gh/TheOdinProject/curriculum/05ce472eabf8e04eeb2cc9139e66db884074fd7d/foundations/html_css/css-foundations/imgs/00.jpg)

<div class="lesson-note" markdown="1">

#### Not
 
`<div>`, temel HTML öğelerinden biridir. En basit haliyle boş bir konteynerdir. Genellikle projelerinizdeki içerik için `<h1>` veya `<p>` gibi diğer etiketleri kullanmak en iyisidir. Ancak CSS hakkında daha fazla bilgi edindikçe, birçok durumda ihtiyacınız olan şeyin, yalnızca diğer öğeleri barındırmanızı sağlayan bir konteyner olduğunu göreceksiniz. Alıştırmalarımızın çoğunda basitlik için `<div>`ler kullanılmaktadır. Daha sonraki derslerde, çeşitli HTML öğelerinin ne zaman kullanılması gerektiği konusunda çok daha derinlemesine bilgi verilecektir.

</div>

### Seçiciler(Selectors)

Seçiciler, CSS kurallarının uygulanması gereken HTML öğelerini belirtir. Her kural için hedefleri tanımlarlar. Aşağıdaki bölümlerde tüm seçicilere yer verilmemiştir. Ancak en yaygın ve başlangıçta rahatça kullanmanız gerekenler bunlardır.

#### Evrensel seçici

Evrensel seçici her türden öğeyi seçer, bu nedenle "evrensel"dir ve sözdizimi bir yıldız işaretidir. Aşağıdaki örnekte, her öğeye `color: purple;` stili uygulanacaktır.

```css
* {
  color: purple;
}
```

#### Tip seçiciler

Bir tip seçici(veya öğe seçici) verilen tipteki tüm öğeleri seçer ve sözdizimi yalnızca öğenin adıdır:

```html
<!-- index.html -->

<div>Merhaba dünya!</div>
<div>Tekrar merhaba!</div>
<p>Selam...</p>
<div>Tamam, görüşürüz.</div>
```

```css
/* styles.css */

div {
  color: white;
}
```

Burada, üç `<div>` öğesi de seçilirken, `<p>` öğesi seçilmez.

#### Sınıf(class) seçiciler

Sınıf seçiciler, aynı sınıfa(HTML öğelerine verilen niteliklerden biri) sahip tüm HTML öğelerini seçerler. Bir HTML öğesine nasıl sınıf ekleyeceğiniz ve bu sınıfı CSS'te nasıl seçeceğiniz aşağıda açıklanmıştır:

```html
<!-- index.html -->

<div class="alert-text">Lütfen hizmet şartlarımızı kabul edin.</div>
```

```css
/* styles.css */

.alert-text {
  color: red;
}
```

Sınıf seçicilerin sözdizimine dikkat edin. Bir nokta ve hemen ardından hedeflenen sınıfın büyük/küçük harfe duyarlı değeri olarak kullanılır. Sınıfların belirli bir öğeye özel olması gerekmez. Bu nedenle aynı sınıfı istediğiniz sayıda öğeye ekleyebilirsiniz.

Sınıflarla yapabileceğiniz bir başka şey ise tek bir öğeye birden fazla sınıfı aralarında boşluk bırakarak liste halinde eklemektir. Örneğin `class="alert-text severe-alert"` şeklinde kullanabilirsiniz. Sınıfları ayırmak amacıyla boşluk kullanıldığı için, birden fazla kelimeyle tanımlanabilecek sınıfların isimlerinde asla boşluk kullanmamalı, bunun yerine kısa çizgi kullanılmalıdır.

#### ID seçiciler

ID seçiciler sınıf seçicilere benzer. HTML öğelerinin başka bir niteliği olan ID'ye sahip bir öğeyi seçerler. Sınıflar ve ID'ler arasındaki en büyük fark, bir öğenin yalnızca **bir** ID'ye sahip olabilmesidir. Bir sayfada tekrarlanamaz ve adında herhangi bir boşluk içermemelidir:

```html
<!-- index.html -->

<div id="title">Muhteşem 90'lar Sayfam</div>
```

```css
/* styles.css */

#title {
  background-color: red;
}
```

ID'ler için nokta yerine hashtag kullanılır. Hemen ardından ID'nin büyük/küçük harfe duyarlı değeri gelir. Sıkça yapılan bir hata, insanların ihtiyaç duymadığı ve sınıfların yeterli olacağı durumlarda ID özelliğini aşırı kullanmasıdır. ID kullanmanın anlamlı veya gerekli olduğu durumlar olsa da(örneğin, özgüllüğün avantajından yararlanmak veya bağlantıların geçerli sayfadaki bir bölüme yönlendirmesi) onları **idareli** kullanmalısınız.

#### Gruplandırma seçici

Peki ya stil tanımlamalarından bazılarını paylaşan iki grup öğemiz varsa ne yapmalıyız?

```css
.read {
  color: white;
  background-color: black;
  /* bu sınıfa özel tanımlamalar */
}

.unread {
  color: white;
  background-color: black;
  /* bu sınıfa özel tanımlamalar */
}
```

`.read` ve `.unread` seçicilerimiz `color: white;` ve `background-color: black;` tanımlamalarını paylaşırken bununla birlikte kendilerine özel birkaç tanımlamaya da sahiptirler. Tekrarlamayı azaltmak için bu iki seçiciyi virgülle ayrılmış bir liste olarak gruplayabiliriz:

```css
.read,
.unread {
  color: white;
  background-color: black;
}

.read {
  /* bu sınıfa özel tanımlamalar */
}

.unread {
  /* bu sınıfa özel tanımlamalar */
}
```

Yukarıdaki örneklerin her ikisi de (gruplandırmalı ve gruplandırmasız) aynı sonuca sahip olacaktır. Ancak ikinci örnek, tanımlamaların tekrarını azaltır ve her iki sınıf için `color` ve `background-color`ın aynı anda düzenlenmesini kolaylaştırır.

#### Zincirleme seçiciler

Seçicileri kullanmanın bir başka yolu da onları herhangi bir ayrım yapmadan liste halinde zincirlemektir. Diyelim ki aşağıdaki HTML'e sahibiz:

```html
<div>
  <div class="subsection header">Son Gönderiler</div>
  <p class="subsection preview">Bir gönderinin önizlemesi buraya gelebilir.</p>
</div>
```

Bir çeşit benzersiz stile sahip olan `subsection` sınıfına sahip iki öğemiz var. Ancak sadece ikinci bir sınıf olarak `header` sınıfına sahip olan öğeye ayrı bir kural uygulamak istersek ne yapacağız? CSS'imizde iki sınıf seçiciyi de şu şekilde zincirleyebiliriz:

```css
.subsection.header {
  color: red;
}
```

`.subsection.header`ın yaptığı şey, `subsection` _ve_ `header` sınıflarına sahip olan herhangi bir öğeyi seçmektir. `.subsection` ve `.header` sınıf seçicileri arasında boşluk olmadığına dikkat edin. Bu sözdizimi temel olarak, [tip seçiciler](#type-selectors) dışında herhangi bir seçici kombinasyonunun oluşturulmasında kullanılır.

Aşağıda gösterildiği gibi bir sınıf ve ID'yi zincirlemek için de kullanılabilir:

```html
<div>
  <div class="subsection header">Son Gönderiler</div>
  <p class="subsection" id="preview">
    Bir gönderinin önizlemesi buraya gelebilir.
  </p>
</div>
```

Yukarıdaki iki öğeyi alıp aşağıdaki şekilde birleştirebilirsiniz:

```css
.subsection.header {
  color: red;
}

.subsection#preview {
  color: blue;
}
```

Genel olarak, bir öğe aynı anda iki farklı tipte olamayacağı için birden fazla tip seçiciyi zincirleyemezsiniz. Örneğin, `div` ve `p` gibi iki tip seçiciyi zincirlemek, bize `divp` seçicisini verir. Seçici, var olmayan bir `<divp>` öğesi bulmaya çalışacağı için işe yaramaz.

#### Soydan gelen birleştirici

Birleştiriciler, seçiciler arasında bir ilişki belirttiği için, birden fazla seçiciyi, gruplamaktan veya zincirlemekten farklı bir şekilde birleştirmemize olanak tanır. Toplamda dört tür birleştirici vardır. Ancak şimdilik size yalnızca seçiciler arasında tek bir boşlukla temsil edilen **soydan gelen birleştiriciyi** göstereceğiz. <span id="descendant-combinator-description">Soydan gelen birleştirici, son seçiciyle eşleşen öğeleri, ondan önceki seçiciyle eşleşen bir ataya(ebeveyn, büyük ebeveyn vb.) sahip olduğu durumlarda seçer.</span>

Yani `.ancestor .child` gibi bir seçim, `child`(çocuk) sınıfına sahip bir öğeyi, ancak `ancestor`(ata) sınıfından bir atası varsa seçecektir. Bunu düşünmenin bir başka yolu da, ne sayıda katman olursa olsun, `child` yalnızca `ancestor`ın içinde yuvalanmışsa seçilecektir. Aşağıdaki örneğe hızlıca göz atın ve verilen CSS kuralına göre hangi öğelerin seçileceğini anlayıp anlayamadığınızı görün:

```html
<!-- index.html -->

<div class="ancestor">
  <!-- A -->
  <div class="contents">
    <!-- B -->
    <div class="contents"><!-- C --></div>
  </div>
</div>

<div class="contents"></div>
<!-- D -->
```

```css
/* styles.css */

.ancestor .contents {
  /* some declarations */
}
```

Yukarıdaki örnekte, `contents` sınıfına sahip ilk iki öğe (B ve C) seçilecektir. Ancak son öğe (D) seçilmeyecektir. Tahmininiz doğru muydu?

Bir kurala kaç tane birleştirici ekleyebileceğiniz konusunda net bir sınır yoktur. Bu nedenle `.one .two .three .four` tamamen geçerli olacaktır. Bu seçim, `four` sınıfına sahip öğeyi ancak `three` sınıfına sahip bir atası varsa, o atanın `two`, onun atasının da `one` sınıfına sahip öğesi varsa seçecektir. Genellikle bu seviyede iç içe geçmeye ihtiyaç duyan öğeleri seçmeye çalışmaktan kaçınmak isteriz. Çünkü oldukça kafa karıştırıcı ve uzun olabilirler. Özgüllük konusunda sorunlara da neden olabilirler.

### Başlamak için özellikler

Her zaman ya da diğerlerine göre daha sık kullanacağınız bazı CSS özellikleri vardır. Size bu özelliklerden birkaçını tanıtacağız. Bu hiçbir şekilde tam bir liste olmamakla beraber, aşağıdaki özellikleri öğrenmek, başlamanıza yardımcı olmak için yeterli olacaktır.

#### Color ve background-color özellikleri

`color` özelliği bir öğenin metin rengini ayarlarken, `background-color`, bir öğenin arka plan rengini ayarlar. Burada işimiz bitti mi?

Neredeyse. Bu özelliklerin her ikisi de birkaç farklı tipte değeri kabul edebilir. Anahtar kelimeler, yaygın değer türlerinden biridir. `red`(kırmızı) gibi gerçek bir renk adı veya `transparent`(şeffaf) gibi bir anahtar kelime kullanılabilir. Ayrıca HEX, RGB ve HSL değerlerini de kabul ederler; daha önce bir photoshop programı ya da profil renklerinizi özelleştirebileceğiniz bir site kullandıysanız bu değerlere aşina olabilirsiniz.

```css
p {
  /* hex örneği: */
  color: #1100ff;
}

p {
  /* rgb örneği: */
  color: rgb(100, 0, 127);
}

p {
  /* hsl örneği: */
  color: hsl(15, 82%, 56%);
}
```

Bir alfa değeri ekleyerek bu renklerin opaklığını nasıl ayarlayabileceğinizi görmek için [CSS Legal Color Values](https://www.w3schools.com/cssref/css_colors_legal.asp) adlı ingilizce makaleye göz atın.

#### Tipografi temelleri ve metin hizalama

`font-family`(yazı tipi ailesi) tek bir değer olabileceği gibi, bir öğenin hangi yazı tipini kullanacağını belirleyen değerlerin bir listesi de olabilir. Her yazı tipi iki kategoriden birine girer, ya `"Times New Roman"` gibi bir "yazı tipi ailesi adı"(kelimeler arasındaki boşluklar nedeniyle tırnak işareti kullanırız) ya da `sans-serif` gibi bir "genel aile adı"dır(genel aile adlarında asla tırnak işareti kullanılmaz).

Bir tarayıcı, listedeki ilk yazı tipini bulamazsa veya onu desteklemiyorsa, desteklenen ve geçerli bir yazı tipi bulana kadar listeden sonraki tiplerini deneyerek devam eder. Bu nedenle, en çok kullanılmasını istediğiniz yazı tipiyle başlayıp, yedek olarak genel bir yazı tipi ailesiyle biten bir liste oluşturmak en iyisidir, örneğin `font-family: "Times New Roman", serif;`

`font-size`(yazı tipi boyutu) özelliği, adından da anlaşılacağı gibi yazı tipinin boyutunu ayarlar. Bu özelliğe bir değer verirken, değer herhangi bir boşluk içermemelidir. Örneğin `font-size: 22px` tanımlaması, "22" ve "px" arasında boşluk içermez.

`font-weight`(yazı tipi ağırlığı) fontun belirtilen ağırlığı desteklediği varsayılarak metnin kalınlığını belirler. Bu değer `font-weight: bold` gibi bir anahtar kelime olabilir ya da `font-weight: 700` (`bold` eşdeğeri) gibi 1 ile 1000 arasında bir sayı olabilir. Genellikle, sayısal değerler 100'den 900'e kadar 100'lük artışlarda görülür. Bu yine de fonta bağlıdır.

`text-align`(metin hizalama) bir öğe içindeki metni yatay düzlemde hizalar ve bu özelliğin değeri olarak Word programlarında karşılaşabileceğiniz `text-align: center` gibi yaygın anahtar kelimeleri kullanabilirsiniz.

#### Resim yüksekliği ve genişliği

Yüksekliğini ve genişliğini ayarlayabileceğimiz öğeler yalnızca resimler değildir. Ancak bu durumda özellikle onlara odaklanmak istiyoruz.

Varsayılan olarak, bir `<img>` öğesinin `height`(yükseklik) ve `width`(genişlik) değerleri, gerçek görüntü dosyasının yükseklik ve genişliğiyle aynı olacaktır. Resmin boyutunu, oranlarını kaybetmeden ayarlamak istersek, `height` özelliği için "auto" değerini kullanıp `width` değerini ayarlayabiliriz:

```css
img {
  height: auto;
  width: 500px;
}
```

Örneğin, bir resmin orijinal boyutu 500 piksel yükseklik ve 1000 piksel genişlikte ise, yukarıdaki CSS kuralları kullanıldığında 250 piksellik bir yükseklik elde edilir.

Resim dosyasının orijinal değerlerini değiştirmeyi planlamıyorsak bile `<img>` öğeleri için bu özelliklerin her ikisini de dahil etmek en iyisidir. Bu değerler dahil edilmediğinde, bir resmin yüklenmesi sayfa içeriğinin geri kalanından daha uzun sürerse resim ilk başta sayfada hiç yer kaplamaz. Ancak yüklendikten sonra diğer sayfa içeriklerinde aniden ciddi bir kayma oluşur. `height` ve `width` belirlemek bunu önler. Çünkü öğenin kaplayacağı alan sayfada "rezerve edilmiş" olacak ve resim yüklenene kadar yalnızca boş bir alan olarak görünecektir.

### HTML'e CSS Ekleme

Artık bazı temel sözdizimlerini öğrendiğimize göre, tüm bu CSS'i HTML'imize _nasıl_ ekleyeceğimizi merak ediyor olabilirsiniz. Bunu üç yöntemle yapabiliriz.

#### Harici CSS

Harici CSS karşılaşacağınız en yaygın yöntemdir. CSS için ayrı bir dosya oluşturmayı ve bunu HTML'in `<head>` etiketlerinin içine kendi kendini kapatan bir `<link>` öğesiyle bağlamayı içerir:

```html
<!-- index.html -->

<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

```css
/* styles.css */

div {
  color: white;
  background-color: black;
}

p {
  color: red;
}
```

İlk olarak, HTML dosyasının `<head>` etiketinin içine kendi kendini kapatan bir `<link>` öğesi ekleriz. `href` niteliği CSS dosyasının konumudur. Ya mutlak bir URL'e ya da şimdi kullanacağınız gibi HTML dosyasının konumuna göreli bir URL'e sahiptir. Yukarıdaki örneğimizde, her iki dosyanın da aynı dizinde bulunduğunu varsayıyoruz. `rel` niteliği gereklidir ve HTML dosyası ile bağlantılı dosya arasındaki ilişkiyi belirtir.

Örnek olarak, yeni oluşturulan `styles.css` dosyasının içine, `div` ve `p` seçicileri ekledik. Bu seçiciler, açma ve kapama küme parantezleri ile "tanımlama blokları" oluştururlar. Son olarak, tüm tanımlamaları bu blokların içine yerleştiririz. `color: white;` bir tanımlamadır, `color` özellik ve `white` değerdir ve `background-color: black;` de başka bir tanımlamadır.

Dosya isimleri hakkında bir not: Burada dosya adını `styles.css` olarak belirledik. Dosya türü `.css` olduğu sürece dosyayı istediğiniz gibi isimlendirebilirsiniz. Ancak "style" ve "styles" en yaygın kullanılan isimlerdir.

Bu yöntemin bazı avantajları şunlardır:

1. HTML ve CSS'i ayrı tutar. Böylece HTML dosyasının daha küçük olmasını ve her şeyin daha temiz görünmesini sağlar.
2. CSS'i yalnızca _bir_ yerde düzenlememiz gerekir. Böylece, özellikle benzer stilleri paylaşan birçok sayfası olan internet siteleri için kullanışlıdır.

#### Dahili CSS

Dahili CSS(gömülü CSS), tamamen ayrı bir dosya oluşturmak yerine CSS'i HTML dosyasının içine eklemeyi içerir. Dahili yöntemle, tüm kurallar bir `<style>` etiketinin içine yerleştirilir. Bunlar da HTML dosyanızın `<head>` etiketine yerleştirilir. Stiller doğrudan `<head>` etiketinin içine yerleştirildiği için harici yöntemin gerektirdiği `<link>` öğesine ihtiyaç duyulmaz.

Bu farklılıklar dışında sözdizimi, harici yöntemle tamamen aynıdır(seçici, küme parantezler, tanımlamalar):

```html
<head>
  <style>
    div {
      color: white;
      background-color: black;
    }

    p {
      color: red;
    }
  </style>
</head>
<body>
  ...
</body>
```

Bu yöntem, bir internet sitesinin _tek bir sayfasına_ benzersiz stiller eklemek için yararlı olabilir. Ancak harici yöntem gibi her şeyi ayrı tutmaz. Kural ve tanımlama sayısına bağlı olarak HTML dosyasının oldukça büyük olmasına neden olabilir.

#### Satır içi CSS

Satır içi CSS, stilleri doğrudan HTML öğelerine eklemeyi sağlar. Ancak bu yöntem genellikle önerilmez:

```html
<body>
  <div style={{"color":"white","backgroundColor":"black"}}>...</div>
</body>
```

Burada dikkat edilmesi gereken şey, herhangi bir seçici kullanılmamasıdır. Çünkü stiller doğrudan açılıştaki `<div>` etiketine eklenir. Tanımlamalar, `style=` niteliğinde tırnak işaretleri içine eklenir.

_Tek bir_ öğeye _benzersiz_ bir stil eklemeniz gerekiyorsa bu yöntemi kullanabilirsiniz. Ancak bu yöntem, birkaç sebepten dolayı HTML'e CSS eklemek için önerilen bir yol değildir:

- Tek bir öğeye _çok_ sayıda tanımlama eklemeye başladığınızda HTML dosyanız gereksiz yere şişmeye başlar. Böylece projeniz hızlıca dağınık bir hale gelebilir.
- Aynı stili birçok öğeye eklemek isterseniz o stili kopyalayıp her bir öğeye yapıştırmanız gerekir. Bu da çok sayıda gereksiz tekrara ve daha fazla şişkinliğe neden olur.
- Herhangi bir satır içi CSS, diğer iki yöntemi geçersiz kılar. Bu da beklenmedik sonuçlara neden olabilir. (Burada bu konuya girmeyecek olsak da aslında bundan faydanabileceğimiz durumlar da vardır).

### Ödev

<div class="lesson-content__panel" markdown="1">

1.  [Odin Project CSS alıştırmaları repository'sine](https://github.com/TheOdinProject/css-exercises) gidin, aşağıdaki alıştırmaları sırasıyla tamamlamadan önce her bir README dosyasını gözden geçirin:
    - `01-css-methods`
    - `02-class-id-selectors`
    - `03-group-selectors`
    - `04-chain-selectors`
    - `05-descendant-combinator`

   Not: Bu alıştırmaların çözümleri her alıştırmanın `solution` klasöründe bulunabilir.
</div>

### Bilgi ölçme

Bu bölüm, bu dersi kendi kendinize anlayıp anlamadığınızı kontrol etmeniz için sorular içermektedir. Bir soruyu yanıtlamakta zorlanıyorsanız, soruya tıklayın ve bağlantılı olduğu materyali gözden geçirin.

- [Sınıf ve ID seçiciler için sözdizimi nasıldır?](#class-selectors)
- [Tek bir kuralı iki farklı seçiciye nasıl uygularsınız?](#the-grouping-selector)
- [ID'si `title` ve sınıfı `primary` olan bir öğe verildiğinde, tek bir CSS kuralı için her iki niteliği nasıl kullanırsınız?](#chaining-selectors)
- [Soydan gelen birleştirici ne işe yarar?](#descendant-combinator-description)
- [HTML'e CSS eklemek için kullanılan üç yöntemin isimleri nelerdir?](#adding-css-to-html)
- [HTML'e CSS eklemenin üç yöntemi arasındaki temel farklar nelerdir?](#external-css)

### Ek kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

- [Mozilla CSS values and units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units) adlı ingilizce makale mutlak veya göreli olarak mümkün olan çeşitli değer türlerini öğrenmek için kullanılabilir.
- [Bu ingilizce interaktif Scrim](https://scrimba.com/scrim/co12d4cf99cf2776f19e84a9d) dersteki materyallerin çoğunu interaktif bir biçimde ele almaktadır.
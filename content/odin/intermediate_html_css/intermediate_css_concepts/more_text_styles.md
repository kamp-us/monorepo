---
title: 'Diğer metin stilleri'
---

### Giriş

Daha önce Temel Bilgiler derslerimizde birkaç metin manipülasyonu yaptınız. Bu ders, metinle çalışırken kullanılabilecek birkaç kullanışlı CSS özelliğini daha kapsayacak.

### Öğrenme çıktıları

* Web projelerinizde özel fontları nasıl kullanacağınızı öğreneceksiniz.
* Metinle ilgili birkaç daha fazla CSS özelliğini öğreneceksiniz.

### Yazı Tipleri

Temel Bilgiler dersimizde bir öğenin `font-family`'sini değiştirmeyi ele almıştık, ancak o zaman bazı incelik ve detayları atlamıştık.

#### Sistem font yığını

Eğer `font-family` özelliğini kullanarak `impact` veya `Times New Roman` gibi bir fonta geçiş yaparsanız ve bu fontlar kullanıcının bilgisayarında yüklü değilse, bir yedek font görüntülenecektir. Eğer bir yedek belirtmemişseniz, genellikle çirkin bir şekilde görünen varsayılan HTML fontu kullanılacaktır. Bu nedenle, projelerde uzun font yığınları görmek yaygındır.

Bu popüler yığın, 'sistem font' kullanımını içerir. [Source: CSS Tricks](https://css-tricks.com/snippets/css/system-font-stack/)

```css
body {
  font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
```

Bu oldukça absürt font-family dizisinin amacı, sistem kullanıcı arayüzünün varsayılan fontunu kullanmaya çalışmaktır. Sistemde yüklü olan bir font bulana kadar her birini deneyecek ve ardından onu kullanacaktır. Bu tür bir yığın kullanmak genellikle hoş sonuçlar üretir, özellikle biraz 'tarafsız' bir font stili hedefliyorsanız.

#### Çevrim içi font kütüphaneleri

Kullanıcının bilgisayarında _yüklü olmayan_ fontlara ulaşmanın popüler ve kolay bir yolu, [Google Fonts](https://fonts.google.com/), [Font Library](https://fontlibrary.org/) veya premium ancak ücretli [Adobe Fonts](https://fonts.adobe.com/) gibi çevrimiçi font kütüphanelerini kullanmaktır.

Bu kütüphanelerden birinden bir font kullanmak için, web sitesine gidin, bir font seçin ve ardından bu font'u web sitenin sunucularından kendi web sitenize aktarmak için web sitesinden bir parçacık(snippet) kopyalayın.  HTML'nize koymanız için size bir `<link>` etiketi verilecektir, örneğin....

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
```

...   ya da CSS dosyanızın en üstüne ekleyebileceğiniz bir `@import` etiketi alırsınız.

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
```

Her iki yöntem de o fontu içe aktaracak ve CSS dosyanızda kullanılabilir hale getirecektir:

```css
body {
  font-family: 'Roboto', sans-serif;
}
```

Unutmayın ki bir yedek font eklemek önemlidir. Eğer harici bir API'ye bağlantı yapıyorsanız, URL'nin değişmeyeceğine veya harici API'nin bir noktada çökmeyeceğine dair herhangi bir garanti yoktur. Makul bir yedek font kullanmak, bir şeyler ters giderse en azından sitenizin tamamen bozulmamış görünmesini sağlar.

#### İndirilmiş olan yazı tipleri

Web üzerinden indirdiğiniz bir fontu kullanmak da mümkündür. CSS dosyanızda, özel bir fontu `@font-face` kuralını kullanarak içe aktarıp ve tanımlarsınız ve ardından onu diğer font-family'ler gibi kullanabilirsiniz. Birden fazla font dosya formatı türü bulunmaktadır ve bunlar hakkında daha fazla bilgiye [fileinfo.com'un Font Dosya Biçimleri](https://fileinfo.com/filetypes/font) sayfasında detaylı olarak ulaşabilirsiniz. Ancak lütfen bir font dosya formatı seçerken dikkatli olun, çünkü bazıları tarayıcılar tarafından evrensel olarak desteklenmemektedir. Tarayıcılar ve destekledikleri font formatları hakkında bilgi için [W3 Schools'un CSS Web Yazı Tipleri](https://www.w3schools.com/css/css3_fonts.asp) sayfasını inceleyebilirsiniz."

```css
@font-face {
  font-family: my-cool-font;
  src: url(../fonts/the-font-file.woff);
}

h1 {
  font-family: my-cool-font, sans-serif;
}
```

Bu yöntem, üçüncü taraf bir font API'ına güvenmekten daha güvenilir olabilir, ancak her zaman bir yedek eklemek akıllıcadır.

### Metin stilleri

Temel Bilgiler derslerimizde fontları manipüle etmenin temellerini öğrendiniz, ancak CSS ile metin stillerini manipüle etmek konusunda daha fazla şey yapabilirsiniz. Bu kurallar genellikle basit ve açıklayıcıdır. Herhangi bir sorunuz varsa dökümanlara bakabilirsiniz.

#### font-style

Genellikle bir fontu eğik (italik) yapmak için kullanılır. HTML `<em>` etiketini öğrendiniz, bu etiket italik bir font kullanır, ancak `<em>` aynı zamanda sardığı metnin önemli olduğunu veya bir şekilde vurgulanması gerektiğini belirtir. Genel bir kural olarak, eğer bir metni sadece italik (veya kalın, altı çizili, vurgulu, vb.) yapmak istiyorsanız, bir CSS özelliği kullanın. Aksi takdirde, metnin semantik vurguya ihtiyacı varsa, doğru HTML öğesini kullanın.

Örneğin, tüm başlık metninizi italik yapmak istiyorsanız, bunu gerçekleştirmek için `font-style`'ı kullanmalısınız. Eğer bir cümle içindeki metnin _orta kısmının_ italik görünmesini istiyorsanız ve bu metni vurgulamak istiyorsanız, bir `em` öğesini kullanmak uygun olacaktır. [Emphasis Element üzerine MDN dökümanı](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em) yukarıdaki noktayı vurgular.

Eğer stil amaçları için italik kullanılması gerekiyorsa, `font-style: italic;` kullanmalıyız.

```css
h1 {
  font-style: italic;
}
```

Vurgu amacıyla italik kullanılması gerekiyorsa, `em` öğesini kullanmalıyız.

```html
<p>I <em>never</em> said he stole your money</p>
<p>I never said <em>he</em> stole your money</p>
<p>I never said he stole <em>your</em> money</p>
```

#### letter-spacing(harf aralığı)
letter-spacing, beklendiği gibi davranır... bir kelimenin harfleri arasındaki boşluğu değiştirir. Bu, fazla veya az boşluğa sahip olduğunu düşündüğünüz özel fontları ayarlamak için kullanışlı olabilir. Aynı zamanda bazı durumlarda, özellikle başlıklarda, estetik olarak hoş görünebilir.

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="css,result" data-slug-hash="MWomjGr" data-editable="true" data-user="TheOdinProjectExamples" style={{"height":"300px","boxSizing":"border-box","display":"flex","alignItems":"center","justifyContent":"center","border":"2px solid","margin":"1em 0","padding":"1em"}}>
<span>
  <a href="https://codepen.io/TheOdinProjectExamples/pen/MWomjGr">Letter Spacing | CSS Text Styles</a>TheOdinProject tarafından
  (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
  aracılığıyla <a href="https://codepen.io">CodePen</a> üzerinde paylaşıldı.
</span>

</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Tabii ki, bunu dikkatlice ve ölçülü bir şekilde kullanın. Sitenizi okunması zor hale getirmeyin!

#### line-height(satır yüksekliği)
line-height, sarılı metindeki satırlar arasındaki boşluğu ayarlar. Biraz satır yüksekliği eklemek, okunabilirliği artırabilir.

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="css,result" data-slug-hash="vYZmXzY" data-editable="true" data-user="TheOdinProjectExamples" style={{"height":"300px","boxSizing":"border-box","display":"flex","alignItems":"center","justifyContent":"center","border":"2px solid","margin":"1em 0","padding":"1em"}}>
<span>
  <a href="https://codepen.io/TheOdinProjectExamples/pen/vYZmXzY">Line Height | CSS Text Styles</a> - TheOdinProject
  (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
  tarafından <a href="https://codepen.io">CodePen</a> üzerinde paylaşıldı.
</span>

</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

#### text-transform
Text transform basitçe verilen metnin büyük-küçük harf durumunu değiştirir. Bu örneğin başlık etiketlerinizi tamamen büyük harfe zorlamak veya her kelimenin ilk harfini büyük yapmak için kullanılabilir.

Kullanımı basittir ve açık bir örnek için bu [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)'dan bakabilirsiniz.

#### text-shadow
Bekleyebileceğiniz gibi, `text-shadow` seçilen öğedeki metnin etrafına bir gölge ekler. Bu özellik genellikle özenle kullanılır, ancak başlıklar veya diğer sunum metinlerinde büyük etki yaratmak için kullanılabilir.

Bu özelliği nasıl kullanacağınızı gösteren örnekler [MDN'in text-shadow için referans sayfasında]https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow) bulunmaktadır.

#### ellipsis
Bu, tek bir özellik değil, ancak takım çantanızda bulundurmanız gereken kullanışlı bir hile. `text-overflow` özelliği ile taşan metni üç nokta ile kırpabilirsiniz. Ancak bir taşmanın gerçekleşmesi için, metnin varsayılan davranışının basitçe konteynerının dışına basılması, teknik olarak bir `overflow(taşma)` olarak kabul edilmez (bu karmaşık, biliyoruz, özür dileriz).

Tam kod parçası:

```css
.overflowing {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

Daha fazla ayrıntı ve bir örneği [bu CSS Tricks makalesinde](https://css-tricks.com/snippets/css/truncate-string-with-ellipsis/) görebilirsiniz. (Bu özelliği kullanmak istediğinizde her seferinde o makaleyi aramak için hazır olun.)

### Bilgi ölçme

Bu bölüm, bu dersi anladığınızı kontrol etmeniz için sorular içermektedir. Aşağıdaki soruları kendi kendinize yanıtlamakta zorlanıyorsanız, yanıtı bulmak için yukarıdaki materyali gözden geçirin.

- [What are the 2 ways to add fonts that are not installed on a user's computer?](#online-font-libraries)
- [What is the 'system font stack' and why would you want to use it?](#the-system-font-stack)
- [Which property would you use to increase or decrease the space between letters in a word?](#letter-spacing)
- [Which property would you use to increase or decrease the space between lines in a paragraph?](#line-height)

### Ek kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

- [Edoardo Cavazza](https://www.smashingmagazine.com/author/edoardo-cavazza/)'nın yazdığı [Modern CSS Techniques To Improve Legibility](https://www.smashingmagazine.com/2020/07/css-techniques-legibility/) başlıklı makale, web sitelerinin okunabilirliğini artırmak için kullanılabilecek bazı ek metin stilleri ve teknikleri kapsayan harika bir makaledir.
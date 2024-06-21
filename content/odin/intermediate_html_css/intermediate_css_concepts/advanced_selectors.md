### Giriş

Bu noktada temel CSS seçicileriyle rahat hissetmelisiniz ve tür, sınıf veya kimliğine göre öğeleri seçmede zorluk yaşamamalısınız. Ancak gerçek bir CSS cerrahı olabilmek için bazen daha özelleşmiş araçlara ihtiyaç duyarsınız. Bu dersimizde, gelişmiş CSS seçicilerine göz atacak ve öğeleri daha spesifik ve ince bir şekilde hedeflemenin yollarını göstereceğiz.

Bu seçiciler, HTML işaretleminizi değiştiremiyorsanız (veya değiştirmek istemiyorsanız) özellikle kullanışlı olabilir.

Gelişmiş seçici sayısı oldukça fazla olduğundan, her birini ayrıntılı bir şekilde ele almak bu dersin kapsamı dışındadır. Bununla birlikte, en kullanışlı ve yaygın olanları üzerinden geçecek ve kendi başınıza daha fazlasını öğrenmek için kavramları ve kelime dağarcığınızı güçlendireceğiz.

Her zamanki gibi kod düzenleyicinizi açıp bu seçicilerle kendi deneylerinizi yapmaktan çekinmeyin - pratik mükemmelleştirir!

### Öğrenme çıktıları

* Ebeveyn ve kardeş seçicilerini nasıl kullanılacağını anlayın.
* Yalancı sınıf ve yalancı öğe arasındaki farkı tanıyın.
* En kullanışlı ve yaygın yalancı öğeleri ve yalancı sınıfları öğrenin.
* Bir özniteliği veya onun bölümlerini seçmek için farklı yöntemleri öğrenin.

### Çocuk ve kardeş birleştiricileri

Farklı öğelere başvururken sınıflarına başvurmadan kullanabileceğimiz başka yolları inceleyelim. İşte bunu yapmak için üç yeni seçici.

* `>` - çocuk birleştirici
* `+` - bitişik kardeş birleştirici
* `~` - genel kardeş birleştirici

Bu örnek işaretleme kullanarak bazı pratik örnekleri ele alacağız.

```html
<main class="parent">
  <div class="child group1">
    <div class="grand-child group1"></div>
  </div>
  <div class="child group2">
    <div class="grand-child group2"></div>
  </div>
  <div class="child group3">
    <div class="grand-child group3"></div>
  </div>
</main>
```

Bu noktada, [intro to CSS](https://www.theodinproject.com/lessons/foundations-intro-to-css) 'de öğrendiğiniz soy birleştiriciyi kullanarak kurallar yazmada oldukça rahat olmalısınız. Örneğin, `main` içindeki tüm `child` ve `grand-child` div'lerini seçmek istiyorsak şu şekilde yazabiliriz:

```css
main div {
  /* Our cool CSS */
}
```

Ancak daha spesifik olmak istersek ve sadece `child` veya `grand-child` div'lerini seçmek istersek, çocuk birleştirici `>` işe yarar. Soy birleştiriciye benzemez, yalnızca doğrudan çocukları seçer.

```css
/* This rule will only select divs with a class of child */
main > div {
  /* Our cool CSS */
}

/* This rule will only select divs with a class of grand-child */
main > div > div {
  /* More cool CSS */
}
```

Başka bir deyişle, çocuk seçici, bir düzey içeriğe sahip bir öğeyi seçecektir. Hedefimize bitişik veya aynı düzeydeki bir öğeyi seçmek için bitişik kardeş birleştirici `+` kullanabiliriz.

```css
/* This rule will only select the div with the class child group2 */
.group1 + div {
  /* Our cool CSS */
}

/* This rule will only select the div with the class child group3 */
.group1 + div + div {
  /* More cool CSS */
}
```

Son olarak, bir öğenin tüm kardeşlerini seçmek istiyorsak ve sadece ilk olanı değilse, genel kardeş birleştirici `~` kullanabiliriz.
```css
/* This rule will select all of .group1's siblings - in this case the 2nd and 3rd .child divs */
.group1 ~ div {
  /* Our cool CSS */
}
```

Descendant birleştirici gibi, bu seçicilerin özel öncelik kuralları yoktur - öncelik skorları yalnızca bileşen parçalardan oluşacaktır.

Eğer daha fazlasını öğrenmek istiyorsanız, [this MDN article on combinators](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators) size iyi bir genel bakış sunar.

### Yalancı Seçiciler (Pseudo-selectors)

Yalancı seçicilere dalmadan önce, [pseudo-elements and pseudo-classes](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements) üzerine kısa bir not. <span id="syntax-exist-knowledge-check">Pseudo-class seçicileri tek iki nokta üst üste ile öne eklenir ve zaten HTML'de var olan öğeleri hedefleme farklı bir yoludur. Pseudo-elements iki iki nokta üst üste ile öne eklenir ve genellikle işaretleme normalde olmayan öğeleri hedeflemek için kullanılır.</span> Eğer bu hemen anlaşılır gelmiyorsa, endişelenmeyin - aşağıda bazı örnekleri keşfedeceğiz.

### Yalancı Sınıflar (Pseudo-classes)

Yalancı sınıflar bize HTML'deki öğeleri hedefleme farklı yolları sunar. Bunlardan bir hayli fazla sayıda ve birkaç farklı çeşidi vardır. Bazıları HTML içindeki konumlarına veya yapısına dayanır. Diğerleri belirli bir öğenin durumuna veya kullanıcının şu anda nasıl etkileşimde bulunduğuna dayanır. Bunların hepsini burada detaylı bir şekilde ele almak mümkün değildir, ancak en kullanışlı olanlara bir göz atacağız. Yalancı sınıflar, düzenli sınıflarla aynı önceliğe sahiptir (0, 0, 1, 0). Düzenli sınıflar gibi, çoğu bir araya getirilebilir.

<div class="lesson-note lesson-note--tip" markdown="1">
Yukarıdaki (0,0,1,0), öncelik hesaplama için bir notasyondur. Nasıl çalıştığı hakkında daha fazla bilgi edinmek için [this article on CSS Specificity](https://css-tricks.com/specifics-on-css-specificity/) başlıklı makalenin "Calculating CSS Specificity Value" bölümüne göz atın.
</div>

Her zamanki gibi mevcut olanakların tam resmini görmek için [docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) göz atmayı unutmayın.

#### Dinamik ve Kullanıcı Eylemi Yalancı Sınıflar

Bu tür yararlı yalancı sınıflar, sayfanızın çok daha dinamik ve etkileşimli hissetmesini sağlayabilir.

[`:focus`](https://css-tricks.com/almanac/selectors/f/focus/), kullanıcının şu anda faresiyle seçtiği veya klavyesini kullanarak seçtiği bir öğeye uygulanır.

<span id="hover-active-knowledge-check">[`:hover`](https://css-tricks.com/almanac/selectors/h/hover/) kullanıcının fare işaretçisinin altındaki her şeyi etkiler.</span> Bu, düğmelere ve bağlantılara etkileşimli olduklarını vurgulamak veya bir açılır menüyü tetiklemek için kullanılabilir.

[`:active`](https://css-tricks.com/almanac/selectors/a/active/), şu anda tıklanan öğelere uygulanır ve kullanıcının eyleminin bir etkisi olduğuna dair geri bildirim sağlamak için özellikle kullanışlıdır. Bu, düğmelerinize ve diğer etkileşimli öğelere daha fazla 'dokunsal' geri bildirim sağlamak için harika bir seçenektir.

Hiç düşündünüz mü, neden bağlantılar standart HTML'de mavi iken tıklanınca mor oluyor? Bu, tarayıcıların varsayılan olarak bu stillemeyi uygulamasından kaynaklanır. Bağlantılar için kendi özel stilinizi uygulamak için [`:link`](https://css-tricks.com/almanac/selectors/l/link/) ve [`:visited`](https://css-tricks.com/almanac/selectors/v/visited/) yalancı sınıflarından faydalanın. Varsayılan tarayıcı stillemesinin basitleştirilmiş bir versiyonu şöyle görünebilir:

```css
  /* This rule will apply to all links */
  a {
    text-decoration: underline;
  }

  /* This will apply to unvisited links */
  a:link {
    color: blue;
  }

  /* And you guessed it, this applies to all links the user has clicked on */
  a:visited {
    color: purple;
  }
```

#### Yapısal Yalancı Sınıflar

Yapısal yalancı sınıflar, öğeleri DOM içindeki konumlarına göre seçmenin güçlü bir yoludur.

[`:root`](https://css-tricks.com/almanac/selectors/r/root/), belgenizin en üst düzeyini temsil eden özel bir sınıftır - hiç ebeveyni olmayan tek öğe. Genellikle web ile çalışırken, bu genellikle `html` elementine eşdeğerdir, ancak [birkaç ince fark vardır](https://stackoverflow.com/questions/15899615/whats-the-difference-between-css3s-root-pseudo-class-and-html).

`:root` genellikle her yerde kullanılabilir olmasını istediğiniz 'global' CSS kurallarınızı koymak için yerdir - örneğin, özel özellikleriniz ve CSS değişkenleriniz veya `box-sizing: border-box;` gibi kurallar.

<span id="first-child-knowledge-check">[`:first-child`](https://css-tricks.com/almanac/selectors/f/first-child/)</span> ve [`:last-child`](https://css-tricks.com/almanac/selectors/l/last-child/), ilk veya son kardeş olan öğelerle eşleşecektir.

Benzer şekilde, [`:empty`](https://css-tricks.com/almanac/selectors/e/empty/), hiç çocuğu olmayan öğelerle eşleşir ve [`:only-child`](https://css-tricks.com/almanac/selectors/o/only-child/) hiçbir kardeşi olmayan öğelerle eşleşir.

Daha dinamik bir yaklaşım için <span id="second-child-knowledge-check">[`:nth-child`](https://css-tricks.com/almanac/selectors/n/nth-child/)</span>'i kullanabiliriz. Bu, birkaç farklı kullanımı olan esnek bir yalancı sınıftır.

```css
  .myList:nth-child(5) {/* Selects the 5th element with class myList */}

  .myList:nth-child(3n) { /* Selects every 3rd element with class myList */}

  .myList:nth-child(3n + 3) { /* Selects every 3rd element with class myList, beginning with the 3rd */}

  .myList:nth-child(even) {/* Selects every even element with class myList */}
```

### Yalancı Öğeler (Pseudo-elements)

Yalancı sınıflar, HTML öğelerimizle etkileşimde bulunmanın alternatif bir yolunu sağlarken, yalancı öğeler daha soyuttur. Bize hiçbir öğe olmayan HTML parçalarını etkilememize olanak tanır. Bu özel öğeler, düzenli öğelerle aynı önceliğe sahiptir (0, 0, 0, 1). Her türlü yaratıcı şekilde kullanılabilen bir dizi yararlı yalancı öğe bulunmaktadır.

[`::marker`](https://css-tricks.com/almanac/selectors/m/marker/), `<li>` öğelerinizin madde işaretlerini veya numaralarını özelleştirmenize olanak tanır.

[`::first-letter`](https://css-tricks.com/almanac/selectors/f/first-letter/) ve [`::first-line`](https://css-tricks.com/almanac/selectors/f/first-line/), bir metnin ilk harfini veya satırını (siz tahmin ettiniz!) özel bir stil vermenize olanak tanır.

[`::selection`](https://css-tricks.com/almanac/selectors/s/selection/), kullanıcının sayfa üzerinde metin seçtiğinde vurgulamayı değiştirmenize olanak tanır.

[`::before` ve `::after`](https://css-tricks.com/almanac/selectors/a/after-and-before/), HTML yerine CSS ile sayfaya ekstra öğeler eklememize izin verir. Metni çeşitli şekillerde süslemek için kullanma, yaygın bir kullanım alanıdır.

```html
<style>
  .emojify::before {
    content: '😎 🥸 🤓';
}

  .emojify::after {
    content: '🤓 🥸 😎';
}
</style>

<body>
  <div> Let's <span class="emojify">emojify</span>this span!</div>
</body>
```

Bu şekilde yalancı öğeleri kullanmak bize şu sonucu verecektir:

Hadi bu span'i 😎 🥸 🤓 emojilerle 🤓 🥸 😎 süsleyelim!

Daha birçok örnek var! [pseudo-element docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) göz atarak mümkün olanların tam bir listesini görebilirsiniz.

### Nitelik Seçicileri

Kutuya ekleyeceğimiz son araç, nitelik seçicileridir. Hatırlarsanız, bir nitelik, bir HTML öğesinin açılış etiketindeki her şeydir - örneğin, `src='picture.jpg'` veya `href="www.theodinproject.com"` gibi.

Kendi değerlerimizi niteliklere yazdığımızdan, belirli değerlere hedef alabilmek için biraz daha esnek bir sistemimize ihtiyacımız var.

Attribut seçicilerinin özellik açısından sınıflar ve yalancı sınıflarla aynıdır (0, 0, 1, 0).

Temel kullanım için bazı örnekleri inceleyelim.

* `[attribute]` - Bu genel seçici, belirtilen niteliğin var olduğu her şeyi seçer. Değerinin bir önemi yoktur.
* `selector[attribute]` - İsteğe bağlı olarak, nitelik seçicilerimizi sınıf veya öğe seçicileri gibi diğer türdeki seçicilerle birleştirebiliriz.
* `[attribute="value"]` - <span id="type-text-knowledge-check">Gerçekten spesifik olmak için, `=` kullanarak belirli bir niteliği belirli bir değerle eşleştirebiliriz.</span>

```css
  [src] {
    /* This will target any element that has a src attribute. */
  }

  img[src] {
    /* This will only target img elements that have a src attribute. */
  }

  img[src="puppy.jpg"] {
    /* This will target img elements with a src attribute that is exactly "puppy.jpg" */
  }
```

SBazen bu niteliklere daha genel bir şekilde nasıl erişeceğimizi düşünmemiz gerekebilir. Örneğin, belki de sadece `src` niteliğinin değeri `.jpg` ile biten `img` öğeleri ile ilgileniyoruz. Bu tür durumlar için, niteliğin değerinin bir kısmını eşleştirmemizi sağlayan bazı nitelik seçicilere sahibiz. Daha önce [regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) karşılaştıysanız, bu nitelikler benzer bir sözdizimini kullanır.

* `[attribute^="value"]` - `^=` <span id="thunder-knowledge-check">Değerin başından eşleşecektir.</span>
* `[attribute$="value"]` - `$=` Değerin sonundan eşleşecektir.
* `[attribute*="value"]` - `*=` Joker karakter seçici, dize içinde herhangi bir yerde eşleşecektir.

```css
[class^='aus'] {
  /* Classes are attributes too!
    This will target any class that begins with 'aus':
    class='austria'
    class='australia'
  */
}

[src$='.jpg'] {
  /* This will target any src attribute that ends in '.jpg':
  src='puppy.jpg'
  src='kitten.jpg'
  */
}

[for*='ill'] {
  /* This will target any for attribute that has 'ill' anywhere inside it:
  for="bill"
  for="jill"
  for="silly"
  for="ill"
  */
}
```

Nitelik seçicileri ile neler başarabileceğinizi, örneğin büyük-küçük harfe duyarsız arama veya tirelerle ayrılmış alt dizeleri arama gibi şeyleri görmek için [MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) göz atın.

### Ödev

<div class="lesson-content__panel" markdown="1">
1. [CSS Diner](https://flukeout.github.io/) adresindeki görevi tamamlayın. İlk birkaç alıştırmada içeriğin çoğunu zaten biliyor olmalısınız, ancak pratik yapmak ve gözden geçirmek her zaman faydalıdır! Sağ taraftaki örnekleri ve açıklamaları okumayı unutmayın.
2. [Shay Howe's article on Complex Selectors](https://learn.shayhowe.com/advanced-html-css/complex-selectors/) makalesini okuyun. Bu dersin çoğunu biraz daha ayrıntılı bir şekilde ele alıyor. Makalelerinde bazen yalancı öğeler için tek iki nokta yerine tek bir nokta kullanabilirler. Lütfen unutmayın ki çift iki nokta artık standarttır.
</div>

### Bilgi ölçme

Bu bölüm, bu dersi kendi kendinize anlayıp anlamadığınızı kontrol etmeniz için sorular içermektedir. Bir soruyu yanıtlamakta zorlanıyorsanız, soruya tıklayın ve bağlantılı olduğu materyali gözden geçirin.

* [What is the difference between the child combinator and the descendant combinator?](#childvdesc-knowledge-check)
* [How does the syntax of pseudo-classes and pseudo-elements differ?](#syntax-exist-knowledge-check)
* [Do pseudo-classes exist somewhere in HTML? Do pseudo-elements?](#syntax-exist-knowledge-check)
* [Name two ways you could select every second child of an element, starting with the first.](#second-child-knowledge-check)
* [What is the difference between `div:first-child` and `div:last-child`? What will each select?](#first-child-knowledge-check)
* [What selector would you use to style a button a user is currently hovering over? How about one that is currently being clicked on?](#hover-active-knowledge-check)
* [How could you select all input elements with a type of text?](#type-text-knowledge-check)
* [How could you select all classes that begin with `thunder`?](#thunder-knowledge-check)

### Ek kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

* [Kevin Powell](https://www.youtube.com/kepowob/search?query=pseudo), bu konularda daha derinlemesine bir inceleme yapmak istiyorsanız çeşitli videolara sahiptir.
* [CSS Tricks Almanac](https://css-tricks.com/almanac/selectors/), tüm yalancı öğeler ve seçiciler için harika bir referansa sahiptir. Örnekler, ek kaynaklar ve tarayıcı desteği tablolarını içerir.
* [W3 Schools](https://www.w3schools.com/cssref/css_selectors.asp) ayrıca sağlam, daha özlü bir referans listesine sahiptir. Birkaç pratik örnekle oynamak istiyorsanız etkileşimli bir seçici aracı içerir.
* [The Free Code Camp Selector Cheat Sheet](https://www.freecodecamp.org/news/css-selectors-cheat-sheet/), en yaygın kullanılan bazı seçicilerin sağlam bir özetini içerir.
* [A nice concise article](https://www.growingwiththeweb.com/2012/08/pseudo-classes-vs-pseudo-elements.html) hakkında güzel ve özlü bir makale. Aynı zamanda farklı türdeki seçicilerin sağlam bir özetini sunar.
* [Smashing Magazine on Taming Advanced CSS Selectors](http://coding.smashingmagazine.com/2009/08/17/taming-advanced-css-selectors/)
* [CSS Tricks on Attribute Selectors](https://css-tricks.com/attribute-selectors/) makalesi niteliklere daha derinlemesine bir bakışa ihtiyacınız varsa size yardımcı olacaktır.
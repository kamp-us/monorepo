---
title: 'DOM Manipülasyonu ve Eventler'
---

### Giriş

JavaScript'in en eşsiz ve kullanışlı yeteneklerinden biri DOM'u manipüle edebilmesidir. Peki DOM nedir ve onu nasıl değiştirebiliriz? Hadi hemen konuya geçelim...

### Derse genel bakış

Bu bölüm, bu derste öğreneceğiniz konuların genel bir özetini içerir.

- Bir web sayfasıyla ilişkili olarak DOM'un ne olduğunu açıklama.
- "Düğüm(Node)" ve "öğe(element)" arasındaki farkı açıklama.
- "Seçiciler(Selectors)" ile düğümlerin nasıl hedefleneceğini açıklama.
- DOM düğümlerini bulmak/eklemek/kaldırmak ve değiştirmek için temel yöntemleri açıklama.
- "Düğüm listesi(Nodelist)" ile "düğüm dizisi(array of nodes)" arasındaki farkı açıklama.
- "Kabarcıklanma(Bubbling)"'in ne olduğunu ve nasıl çalıştığını açıklama.

### DOM - Document Object Model(Belge Nesne Modeli)


DOM (veya Belge Nesne Modeli), bir web sayfasının içeriğinin ağaç benzeri bir temsilidir - HTML belgesinde nasıl düzenlendiklerine bağlı olarak farklı ilişkilere sahip bir " düğüm " ağacı.


```html
<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
```


Yukarıdaki örnekte `<div class="display"></div>`, `<div id="container"></div>`'nin bir "çocuğu" ve `<div class="controls"></div>`'nin bir kardeşidir. Bunu bir aile ağacı gibi düşünün. `<div id="container"></div>` bir **ebeveyn**dir, **çocukları** bir sonraki seviyede, her biri kendi "dalında(branch)" yer alır.

### Seçicilerle düğümleri hedefleme

DOM ile çalışırken, çalışmak istediğiniz düğümleri hedeflemek için "seçiciler" kullanırsınız. İstediğiniz düğümleri hedeflemek için CSS stili seçicileri ve ilişki özelliklerini bir arada kullanabilirsiniz. CSS stili seçicilerle başlayalım. Yukarıdaki örnekte, `<div class="display"></div>` öğesine ulaşmak için aşağıdaki seçicileri kullanabilirsiniz:`

- `div.display`
- `.display`
- `#container > .display`
- `div#container > div.display`

Ayrıca, düğümlerin sahip olduğu özel özelliklerle ilişkili seçicileri ( örneğin `firstElementChild` veya `lastElementChild` vb.) de kullanabilirsiniz.

```javascript
const container = document.querySelector('#container');
// #container div'ini seçer (sözdizimi konusunda endişelenmeyin, oraya geleceğiz)

console.dir(container.firstElementChild);                      
// #container => .display öğesinin ilk çocuğunu seçer

const controls = document.querySelector('.controls');   
// .controls div'ini seçer

console.dir(controls.previousElementSibling);                  
// önceki kardeşi seçer => .display
```

Yani belirli bir düğümü, etrafındaki düğümlerle olan ilişkilerine göre tanımlıyorsunuz.

### DOM yöntemleri

HTML kodunuz bir web tarayıcısı tarafından işlendiğinde, yukarıda belirtildiği gibi DOM'a dönüştürülür.  Temel farklardan biri, bu düğümlerin kendilerine bağlı birçok özelliği ve yöntemi olan nesneler olmasıdır.  Bu özellikler ve yöntemler, web sayfamızı JavaScript ile değiştirmek için kullanacağımız birincil araçlardır. Düğümleri hedeflemenize yardımcı olan sorgu seçicileri(query selectors) ile başlayacağız.

#### Sorgu seçicileri(Query selectors)

- `element.querySelector(selector)` - ilk *seçici* eşleşmesine bir referans döndürür
- `element.querySelectorAll(selectors)` - *seçicilerin* tüm eşleşmelerine referanslar içeren bir " düğüm listesi" döndürür.

<div class="lesson-note">

Potansiyel (marjinal) performans avantajları sunan başka, daha spesifik sorgular da vardır, ancak şimdi bunların üzerinden geçmeyeceğiz.

</div>

querySelectorAll kullanıldığında, dönüş değerinin bir dizi **olmadığını** unutmamak önemlidir. Bir dizi gibi görünür ve bir şekilde bir dizi gibi davranır, ancak aslında bir " düğüm listesi " dir. En büyük fark, düğüm listelerinde birkaç dizi yönteminin eksik olmasıdır. Eğer sorun çıkarsa, bir çözüm düğüm listesini bir diziye dönüştürmektir. Bunu `Array.from()` veya [yayma operatörü(spread operator)(daha detaylı bilgi için ingilizce MDN makalesi)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator) ile yapabilirsiniz.

#### Element oluşturma

- `document.createElement(tagName, [options])` - tagName etiket türünde yeni bir element oluşturur. `[options]` bu durumda fonksiyona bazı isteğe bağlı parametreler ekleyebileceğiniz anlamına gelir.  Bu noktada bunlar hakkında endişelenmeyin.

```javascript
const div = document.createElement('div');
```

Bu fonksiyon yeni öğenizi DOM'a yerleştirmez - sadece bellekte oluşturur.  Bunun nedeni, öğeyi sayfaya yerleştirmeden önce üzerinde değişiklik yapabilmenizdir (stiller, class'lar, id'ler, metin vb. ekleyerek). Öğeyi DOM'a aşağıdaki yöntemlerden biriyle yerleştirebilirsiniz.

#### Öğe ekleme

- `parentNode.appendChild(childNode)` - *childNode* 'u *parentNode* 'un son çocuğu olarak ekler.
- `parentNode.insertBefore(newNode, referenceNode)` - *newNode* 'u *referenceNode* 'dan önce *parentNode* 'a ekler.

#### Öğe kaldırma

- `parentNode.removeChild(child)` - DOM üzerinde *child*'u *parentNode*'dan kaldırır ve *child* için bir referans döndürür.

#### Öğelerin değiştirilmesi

Bir öğeye referansınız olduğunda, bu referansı öğenin kendi özelliklerini değiştirmek için kullanabilirsiniz. Bu, özellik ekleme/kaldırma ve değiştirme, sınıfları değiştirme, satır içi stil bilgisi ekleme ve daha fazlası gibi birçok yararlı değişiklik yapmanıza olanak tanır.

```javascript
const div = document.createElement('div');                     
// creates a new div referenced in the variable 'div'
```

#### Satır içi stil ekleme

```javascript
div.style.color = 'blue';                                      
// belirtilen stil kuralını ekler

div.style.cssText = 'color: blue; background: white;';          
// birkaç stil kuralı ekler

div.setAttribute('style', 'color: blue; background: white;');    
// birkaç stil kuralı ekler
```

Satır içi stiller hakkında daha fazla bilgi için ingilizce kaynak olan DOM Enlightenment'ın [CSS Style Rules](https://domenlightenment.com/#6.2) adlı bölümüne bakın.

JS'den kebab-case bir CSS kuralına erişiyorsanız, ya camelCase kullanmanız ya da tire gösterimi yerine ayraç gösterimi kullanmanız gerekeceğini unutmayın.

```javascript
div.style.background-color // çalışmıyor - div.style.background'dan renk çıkarmaya çalışıyor
div.style.backgroundColor // div'in arka plan rengi stiline erişir
div.style['background-color'] // aynı zamanda bu da çalışır
div.style.cssText = "background-color: white;" // bir CSS dizesi atayarak div'in arka plan rengini ayarlar
```

#### Özelliklerin düzenlenmesi

```javascript
div.setAttribute('id', 'theDiv');                              
// id mevcutsa, 'theDiv' olarak güncelleyin, aksi takdirde bir id oluşturun
// "theDiv" değeriyle

div.getAttribute('id');                                        
// belirtilen niteliğin değerini döndürür, bu senaryoda
// "theDiv"

div.removeAttribute('id');                                     
// belirtilen niteliği kaldırır
```

Kullanılabilir özellikler hakkında daha fazla bilgi için MDN'nin [HTML Nitelikleri ingilizce makalesine](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes) bölümüne bakın.

#### Sınıflarla(class) çalışma

```javascript
div.classList.add('new');                                      
// yeni div'inize "new" sınıfını ekler

div.classList.remove('new');                                   
// div'den "new" sınıfını kaldırır

div.classList.toggle('active');                                
// div "active" sınıfına sahip değilse ekleyin veya
// var ise, o zaman kaldırın
```

Satır içi CSS eklemek ve kaldırmak yerine bir CSS stilini değiştirmek genellikle standarttır (ve daha güvenlidir).

#### Metin içeriği ekleme

```javascript
div.textContent = 'Merhaba Dünya!'                               
// "Merhaba Dünya!" içeren bir metin düğümü oluşturur ve
// div içine ekler
```

#### HTML içeriği ekleme

```javascript
div.innerHTML = '<span>Merhaba Dünya!</span>';                   
// div içindeki HTML'yi oluşturur
```

<div class="lesson-note lesson-note--tip" markdown="1">

Metin eklemek için textContent'in tercih edildiğini ve innerHTML'nin yanlış kullanıldığında güvenlik riskleri oluşturabileceğinden dikkatli kullanılması gerektiğini unutmayın. Nasıl kullanıldığına dair bir örnek görmek istiyorsanız [bu ingilizce videoya] (https://youtube.com/watch?v=ns1LX6mEvyM) göz atın.

</div>

Bir dakikanızı ayırarak işlediğimiz konuları gözden geçirelim ve devam etmeden önce bu konularda pratik yapma şansı verelim. Bir web sayfasına DOM öğesi oluşturma ve ekleme ile ilgili bu örneğe göz atın.

```html
<!-- HTML dosyanız: -->
<body>
  <h1>
    Websayfanızın Başlığı
  </h1>
  <div id="container"></div>
</body>
```

```javascript
// JavaScript dosyanız:
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'Websayfanızın içeriği';

container.appendChild(content);
```

JavaScript dosyasında, önce HTML'mizde zaten var olan `container` div'ine bir referans alıyoruz. Daha sonra yeni bir div oluşturuyoruz ve bunu `content` değişkeninde saklıyoruz. `content` divine bir sınıf ve metin ekliyoruz ve son olarak bu div'i `container`a ekliyoruz. Sonuçta bu basit bir işlemdir. JavaScript kodu çalıştırıldıktan sonra DOM ağacımız aşağıdaki gibi görünecektir:

```html
<!-- DOM -->
<body>
  <h1>
    Websayfanızın Başlığı
  </h1>
  <div id="container">
  	<div class="content">
      Websayfanızın içeriği
    </div>
  </div>
</body>
```

JavaScript'in HTML'nizi *değil*, DOM'u değiştirdiğini unutmayın - HTML dosyanız aynı görünecektir, ancak JavaScript tarayıcının işlediği şeyi değiştirir.

<div id="important-note" class="lesson-note" markdown="1">

JavaScript'iniz çoğunlukla JS dosyası her çalıştırıldığında ya da HTML'de script etiketiyle karşılaşıldığında çalıştırılır. JavaScript'inizi dosyanızın en üstüne ekliyorsanız, bu DOM manipülasyon yöntemlerinin çoğu çalışmayacaktır çünkü JS kodu DOM'da düğümler oluşturulmadan *önce* çalıştırılmaktadır. Bunu düzeltmenin en basit yolu, JavaScript'inizi HTML dosyanızın en altına eklemek ve böylece DOM düğümleri ayrıştırılıp oluşturulduktan sonra çalıştırılmasını sağlamaktır.

Alternatif olarak, JavaScript dosyasını HTML belgenizin `<head>` bölümüne bağlayabilirsiniz. JS dosyasının yolunu içeren `src` özelliğiyle birlikte `<script>` etiketini kullanın ve dosyayı HTML ayrıştırıldıktan *sonra* yüklemek için `defer` anahtar sözcüğünü ekleyin:

```html
<head>
  <script src="js-file.js" defer></script>
</head>
```

Daha fazla bilgi için bu ingilizce MDN makalesindeki[Applying CSS and JavaScript to HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#applying_css_and_javascript_to_html) adlı bölümün altındaki ikinci maddeyi okuyun; bu makalede ek komut dosyası yükleme stratejilerine bir bağlantı da yer almaktadır.

</div>

### Egzersiz

Yukarıdaki örneği kendi bilgisayarınızdaki dosyalara kopyalayın.  Çalıştırmak için HTML iskeletinin geri kalanını sağlamanız ve JavaScript dosyanızı bağlamanız ya da JavaScript'i sayfadaki bir script etiketine koymanız gerekir.  Devam etmeden önce her şeyin çalıştığından emin olun!

SADECE JavaScript ve yukarıda gösterilen DOM yöntemlerini kullanarak aşağıdaki öğeleri konteynere ekleyin.

1.  "Hey ben kırmızıyım!" yazan kırmızı metinli bir `<p>`
2.  "Ben mavi bir h3'üm!" yazan mavi metinli bir `<h3>`
3.  siyah border(kenar çizgisi) ve pembe arka plan renkli bir `<div>` ve içinde aşağıdaki öğeler:
    1.  "Ben bir div içindeyim" diyen başka bir `<h1>`
    2.  "BEN DE!" diyen bir `<p>`
    3.  Bunun için ipucu: createElement ile `<div>` oluşturduktan sonra, konteynere eklemeden önce `<h1>` ve `<p>` ekleyin.

### Eventler

Artık DOM'u JavaScript ile manipüle etmeyi öğrendiğimize göre, bir sonraki adım bunun dinamik olarak veya talep üzerine nasıl gerçekleştirileceğini öğrenmektir!  Eventler, sayfalarınızda bu sihri nasıl gerçekleştireceğinizi gösterir.  Eventler, web sayfanızda meydana gelen fare tıklamaları veya tuşlara basma gibi eylemlerdir ve JavaScript kullanarak web sayfamızın bu eventleri dinlemesini ve bunlara tepki vermesini sağlayabiliriz.

Bunu yapmanın üç temel yolu vardır: Doğrudan HTML öğelerinizde fonksiyon özellikleri belirleyebilir, JavaScript'inizdeki DOM düğümlerinde `on[eventType]` formunun özelliklerini (`onclick`, `onmousedown`, gibi) ayarlayabilir ya da JavaScript'inizdeki DOM düğümlerine olay dinleyicileri(eventListener) ekleyebilirsiniz.  Olay dinleyicileri kesinlikle tercih edilen yöntemdir, ancak diğerlerinin de kullanıldığını düzenli olarak göreceksiniz, bu nedenle üçünü de ele alacağız.

Tıklandığında "Merhaba Dünya" uyarısı veren 3 düğme oluşturacağız.  Kendi HTML dosyanızı kullanarak veya [CodePen](https://codepen.io/) gibi bir şey kullanarak hepsini deneyin.

#### Method 1

```html
<button onclick="alert('Merhaba Dünya!')">Bana tıkla</button>
```

Bu çözüm, HTML'imizi JavaScript ile karıştırdığımız için ideal olmaktan uzaktır. Ayrıca, her DOM öğesi için yalnızca bir "onclick" özelliği ayarlayabiliriz, bu nedenle bu yöntemi kullanarak bir tıklama olayına yanıt olarak birden fazla ayrı fonksiyon çalıştıramayız.

#### Method 2

```html
<!-- HTML dosyanız -->
<button id="btn">Bana tıkla</button>
```

```javascript
// JavaScript dosyanız
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Merhaba Dünya");
```

**([Ok fonksiyonlarını(arrow functions)](http://javascript.info/arrow-functions-basics) gözden geçirmeniz gerekiyor mu?)**

Bu biraz daha iyi. JS'yi HTML'nin dışına ve bir JS dosyasına taşıdık, ancak hala bir DOM öğesinin yalnızca 1 "onclick" özelliğine sahip olabileceği sorunuyla karşı karşıyayız.

#### Method 3

```html
<!-- HTML dosyanız -->
<button id="btn">Bana da tıkla</button>
```

```javascript
// JavaScript dosyanız
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Merhaba Dünya");
});
```

Şimdi, endişeleri birbirinden ayırmayı sürdürüyoruz ve ayrıca ihtiyaç duyulması halinde birden fazla olay dinleyicisine izin veriyoruz. Yöntem 3, kurulumu biraz daha karmaşık olsa da çok daha esnek ve güçlüdür.

Bu yöntemlerin 3'ünün de aşağıdaki gibi adlandırılmış fonksiyonlarla kullanılabileceğini unutmayın:

```html
<!-- HTML dosyanız -->
<!-- METHOD 1 -->
<button onclick="alertFunction()">Bana tıkla</button>
```

```javascript
// JavaScript dosyanız
// METHOD 1
function alertFunction() {
  alert("Evet, başardın!");
}
```

```html
<!-- HTML dosyanız -->
<!-- METHODS 2 & 3 -->
<button id="btn">Bana tıkla</button>
```

```javascript
// JavaScript dosyanız
// METHODS 2 & 3
function alertFunction() {
  alert("Evet, başardın!");
}
const btn = document.querySelector('#btn')

// METHOD 2
btn.onclick = alertFunction;

// METHOD 3
btn.addEventListener('click', alertFunction);
```

Adlandırılmış fonksiyonlar kullanmak kodunuzu önemli ölçüde sadeleştirebilir ve fonksiyon birden fazla yerde yapmak isteyeceğiniz bir şeyse *gerçekten* iyi bir fikirdir.

Her üç yöntemle de çağırdığımız fonksiyona bir parametre aktararak olay hakkında daha fazla bilgiye erişebiliriz.  Bunu kendi makinenizde deneyin:

```javascript
btn.addEventListener('click', function (e) {
  console.log(e);
});
```

<div class="lesson-note lesson-note--tip" markdown="1">

Fonksiyon (e)`nin addEventListener'dan bir geri çağırması olduğuna dikkat edin. Geri aramalarla ilgili daha fazla ingilizce açıklama [BURADA](https://dev.to/i3uckwheat/understanding-callbacks-2o9e) bulunabilir.

</div>

Bu fonksiyondaki `e`, **olayın** kendisine referans veren bir nesnedir.  Bu nesne içinde, hangi fare düğmesine veya tuşuna basıldığı ya da olayın **hedefi** (tıklanan DOM düğümü) hakkında bilgi gibi birçok yararlı özelliğe ve yönteme (bir nesnenin içinde yaşayan fonksiyonlar) erişebilirsiniz.

Bunu dene:

```javascript
btn.addEventListener('click', function (e) {
  console.log(e.target);
});
```

ve şimdi de bunu:

```javascript
btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});
```

Çok havalı, değil mi?

#### Dinleyicileri düğüm gruplarına bağlama

Birçok öğeye çok sayıda benzer olay dinleyicisi ekliyorsanız, bu çok fazla kod gibi görünebilir. Bunu daha verimli bir şekilde yapmanın birkaç yolu vardır.  Yukarıda `querySelectorAll('selector')` ile belirli bir seçiciyle eşleşen tüm öğelerin bir düğüm listesini alabileceğimizi öğrendik.  Bunların her birine bir dinleyici eklemek için tüm listeyi şu şekilde yinelememiz yeterlidir:

```HTML
<div id="container">
    <button id="1">Bana tıkla</button>
    <button id="2">Bana tıkla</button>
    <button id="3">Bana tıkla</button>
</div>
```

```javascript
// buttons bir düğüm listesidir. Bir dizi gibi görünür ve davranır.
const buttons = document.querySelectorAll('button');

// her düğmeyi yinelemek için .forEach yöntemini kullanıyoruz
buttons.forEach((button) => {

  // ve her biri için bir 'tıklama' dinleyicisi ekliyoruz
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
```

Bu, DOM manipülasyonu ve olay işleme söz konusu olduğunda buzdağının sadece görünen kısmıdır, ancak bazı alıştırmalarla başlamanız için yeterlidir.  Şimdiye kadarki örneklerimizde yalnızca 'tıklama' olayını kullandık, ancak kullanabileceğiniz *çok* daha fazlası var.

Bazı kullanışlı eventler şunlardır:

- click
- dblclick
- keydown
- keyup

Her bir olayın açıklamalarını içeren daha kapsamlı bir listeyi [bu ingilizce sayfada](https://www.w3schools.com/jsref/dom_obj_event.asp) bulabilirsiniz.

### Ödev

<div class="lesson-content__panel" markdown="1">

Web sayfalarını manipüle etmek JavaScript dilinin birincil faydasıdır! Bu teknikler, bir ön yüz geliştiricisi olarak *her gün* uğraşmanız muhtemel olan şeylerdir, bu yüzden hadi pratik yapalım!

1. [Bu ingilizce MDN makalesinde](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#active_learning_a_dynamic_shopping_list) yer alan görevleri tamamlayın ve becerilerinizi test edin!
2. Bu [ingilizce JavaScript DOM Dersindeki](https://www.javascripttutorial.net/javascript-dom/) ilk 2 bölüm üzerinde çalışın. `getElementById` gibi bazı yöntemlerin daha eski olduğunu ve günümüzde daha az kullanıldığını unutmayın. Daha sonra, eventler, kabarcıklanma ve yayılma konusunda gerçekten uzmanlaşmak için bölüm 7 üzerinde çalışın.

</div>

### Bilgi Ölçme

Bu bölüm, bu dersi anlayıp anlamadığınızı kendi başınıza kontrol etmeniz için sorular içermektedir. Bir soruyu yanıtlamakta sorun yaşıyorsanız, soruya tıklayın ve bağlantının verdiği materyali inceleyin.

- [DOM nedir?](#dom-document-object-model)
- [Birlikte çalışmak istediğiniz düğümleri nasıl hedefliyorsunuz?](#targeting-nodes-with-selectors)
- [DOM'da bir öğeyi nasıl oluşturursunuz?](#element-creation)
- [DOM'a bir öğeyi nasıl eklersiniz?](#append-elements)
- [Bir öğeyi DOM'dan nasıl kaldırırsınız?](#remove-elements)
- [DOM'daki bir öğeyi nasıl değiştirebilirsiniz?](#altering-elements)
- [Bir DOM öğesine metin eklerken textContent mi yoksa innerHTML mi kullanmalısınız? Neden? bunu öğrenmek için bu ingilizce videoya göz atın.](https://www.youtube.com/watch?v=ns1LX6mEvyM)
- [DOM düğümleriyle çalışırken JavaScript etiketinizi HTML dosyanızın neresine eklemelisiniz?](#important-note)
- ["Eventler" ve "dinleyiciler" nasıl çalışır?](#events)
- [Kodunuzda eventleri kullanmanın üç yolu nedir?](#events)
- [Olay dinleyicileri neden eventleri ele almak için tercih edilen yoldur?](#attaching-listeners-to-groups-of-nodes)
- [Dinleyicilerinizde adlandırılmış fonksiyonları kullanmanın faydaları nelerdir?](#method-3)
- [Dinleyicileri düğüm gruplarına nasıl bağlarsınız?](#attaching-listeners-to-groups-of-nodes)
- [querySelector` ve `querySelectorAll` dönüş değerleri arasındaki fark nedir?](#query-selectors)
- [Bir " düğüm listesi" ne içerir?](#query-selectors)
- ["Yakalama" ve "kabarcıklanma" arasındaki farkları öğrenmek için bu ingilizce videoya göz atın.](https://www.youtube.com/watch?v=F1anRyL37lE)

### Ek Kaynaklar
Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

- [Eloquent JS - DOM adlı ingilizce makale](http://eloquentjavascript.net/13_dom.html)
- [Eloquent JS - Handling Events adlı ingilizce makale](http://eloquentjavascript.net/14_event.html)
- [DOM Enlightenment adlı ingilizce makale](http://domenlightenment.com/)
- [Plain JavaScript](https://plainjs.com/javascript/), JavaScript kod parçacıkları ve DOM'un yanı sıra JS'nin diğer yönlerini içeren açıklamalardan oluşan ingilizce bir kaynaktır. Eğer jQuery'yi zaten öğrendiyseniz, onsuz nasıl yapacağınızı anlamanıza yardımcı olacaktır.
- Bu [W3Schools](https://www.w3schools.com/js/js_htmldom.asp) ingilizce makalesi DOM hakkında basit ve anlaşılması kolay dersler sunmaktadır.
- [JS DOM Crash Course](https://www.youtube.com/watch?v=0ik6X4DJKCc&list=PLillGF-RfqbYE6Ik_EuXA2iZFcE082B3s) Traversy Media tarafından DOM üzerine kapsamlı ve iyi açıklanmış 4 bölümlük ingilizce video serisidir.
- [Understanding The Dom](https://www.digitalocean.com/community/tutorial_series/understanding-the-dom-document-object-model), DigitalOcean tarafından uygun bir şekilde adlandırılmış makale tabanlı ingilizce bir eğitim serisidir.
- MDN tarafından hazırlanan bu ingilizce makale, [Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events), eventler hakkında bu derste öğrendiğiniz konuları kapsar.
- [Wes Bos'un Drumkit](https://www.youtube.com/watch?v=VuN8qwZoego) JavaScript30 programı ödevde işlenen içeriği desteklemektedir. İngilizce videoda kullanımdan kaldırılmış [keycode(ingilizce MDN makalesi)](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode) klavye olayının kullanıldığını fark edeceksiniz, bunu önerilen [code(ingilizce MDN makalesi)](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code) klavye olayı ile değiştirin ve `data-key` etiketlerini uygun şekilde değiştirin.
- Wes Bos'un JavaScript30 programından [Event Capture, Propagation and Bubbling adlı ingilizce videosu](https://www.youtube.com/watch?v=F1anRyL37lE).

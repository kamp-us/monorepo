### Giriş

Bağlantılar HTML'nin temel özelliklerinden biridir. Bize web üzerindeki diğer HTML sayfalarına bağlantı kurma imkanı sağlar. Aslında bu yüzden web olarak adlandırılır.

Bu derste bağlantıları nasıl oluşturacağımızı ve görüntülere HTML kullanarak bazı görsel detaylar ekleyerek web sitelerimize nasıl caziplik katabileceğimizi öğreneceğiz.

### Ders genel bakışı

Bu bölüm öğreneceğiniz konuların genel bir özetini içerir.

*   İnternet üzerindeki diğer web sitelerindeki sayfalara bağlantı nasıl oluşturulur
*   Kendi web sitenizdeki diğer sayfalara nasıl bağlantı oluşturulur
*   Mutlak ve göreceli bağlantılar arasındaki fark
*   HTML kullanarak bir web sayfasında resim nasıl görüntülenir

### Hazırlık

Bu derste bağlantılar ve görüntüler kullanarak alıştırma yapmak için bir HTML projesine ihtiyacımız var.

1.  `odin-links-and-images` adında yeni bir dizin oluşturun.
2.  Bu dizin içinde `index.html` adında yeni bir dosya oluşturun.
3.  Dosyayı VS Code'da açın ve standart HTML şablonunu ekleyin.
4.  Son olarak aşağıdaki h1 etiketini body içine ekleyin:

~~~html
<h1>Homepage</h1>
~~~

### Anchor öğeleri

HTML'de bir bağlantı oluşturmak için anchor öğesini kullanırız. Bir anchor öğesi bir metni veya bir HTML öğesini bağlantı olarak belirlemek için `<a>` etiketiyle sarmalanarak tanımlanır.

Oluşturduğumuz `index.html` sayfasının body bölümüne aşağıdakini ekleyin ve tarayıcıda açın:

~~~html
<a>click me</a>
~~~

Belki fark etmişsinizdir bu linke tıkladığınızda hiçbir şey olmuyor. Bunun nedeni yalnız başına bir anchor etiketinin nereye bağlantı yapmak istediğimizi bilememesidir. Ona gitmek istediğimiz bir hedefi söylememiz gerekiyor. Bunun için bir HTML niteliği kullanırız.

<span id="attribute"></span> Bir HTML niteliği, bir HTML öğesine ek bilgi verir ve her zaman öğenin açılış etiketine yerleştirilir. Bir nitelik genellikle iki kısımdan oluşur; bir isim ve bir değer. Ancak tüm niteliklerin bir değere ihtiyacı yoktur. <span id="where-to-go"></span> Bizim durumumuzda önceki oluşturduğumuz `anchor` etiketine bir `href` (hiperlink referansı) niteliği eklememiz gerekiyor. href niteliğinin değeri bağlantımızın gitmesini ve istediğimiz hedefi temsil eder.

Önceden oluşturduğumuz anchor öğesine aşağıdaki href niteliğini ekleyin ve tekrar tıklamayı deneyin. Tarayıcıyı yenilemeyi unutmayın. Böylece yeni değişiklikler uygulanabilir.

~~~html
<a href="https://www.theodinproject.com/about">click me</a>
~~~

Varsayılan olarak `href` niteliği olmadan bir anchor etiketiyle sarılmış metin düz metin gibi görünecektir. Eğer `href` özniteliği mevcutsa tarayıcı metne mavi bir renk ve alt çizgi vererek onun bir bağlantı olduğunu belirtir.

Ayrıca anchor etiketlerini yalnızca diğer HTML belgelerine değil, internet üzerindeki her türlü kaynağa bağlantı kurmak için de kullanabileceğinizi belirtmek önemlidir. Video, pdf dosyası, resim vb. gibi şeylere bağlantı kurabilirsiniz. Ancak çoğunlukla diğer HTML belgelerine bağlantı kuracaksınız.

### Bağlantıları yeni bir sekmede açma

Yukarıda gösterilen yöntem bağlantıları içerdikleri web sayfasının aynı sekmesinde açar. Bu çoğu tarayıcının varsayılan davranışıdır ve bunu oldukça kolay bir şekilde değiştirmek mümkündür. Tek ihtiyacımız olan başka bir öznitelik: `target` özniteliği.

`href` hedef bağlantıyı belirtirken, `target` bağlantılı kaynağın nerede açılacağını belirtir. Eğer mevcut değilse varsayılan olarak `_self` değerini alır ve bağlantıyı mevcut sekmede açar. Bağlantıyı yeni bir sekmede veya pencerede açmak için (tarayıcı ayarlarına bağlı olarak) `_blank` olarak ayarlayabilirsiniz:

```html
<a href="https://www.theodinproject.com/about" target="_blank" rel="noopener noreferrer">Click me</a>
```

<span id="target-security"></span> Yukarıda `rel` özniteliğini de gizlice eklediğimizi fark etmiş olabilirsiniz. Bu öznitelik mevcut sayfa ile bağlantılı belge arasındaki ilişkiyi tanımlamak için kullanılır.

`noopener` değeri, açılan bağlantının onu açan web sayfasına erişim kazanmasını engeller. `noreferrer` değeri, açılan bağlantının kendisine bir bağlantısı (veya 'referansı') olan web sayfasını veya kaynağı bilmemesini sağlar. Bu aynı zamanda `noopener` davranışını içerir ve bu nedenle tek başına da kullanılabilir.

Bağlantıları yeni sekmelerde açarken neden bu eklenmiş davranışa ihtiyaç duyarız? Güvenlik nedenleri. `noopener` tarafından neden olunan erişimin engellenmesi açılan bağlantının orijinal web sayfasını kullanıcıları kandırmak için farklı bir sayfaya değiştirebileceği [kimlik avı saldırıları](https://www.ibm.com/topics/phishing)ni önler. Buna [tabnabbing](https://owasp.org/www-community/attacks/Reverse_Tabnabbing) denir. `noreferrer` değerini eklemek açılan bağlantının kendi web sayfanızın ona bağlantı verdiğini bilmemesini sağlamak istiyorsanız yapılabilir.

Unutursanız bile `rel="noopener noreferrer"` eklememeniz sorun olmayabilir çünkü daha yeni tarayıcı sürümleri [yalnızca `target="_blank"` varsa](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#security_and_privacy), bu güvenliği sağlar. Bununla birlikte iyi kodlama uygulamalarına uygun olarak ve daha güvenli bir yaklaşım benimseyerek her zaman `target="_blank"` ile `rel="noopener noreferrer"` özniteliklerini bir arada kullanmanız önerilir.

### Mutlak ve göreceli bağlantılar

Genel olarak oluşturacağımız bağlantılar şunlardır:

1.  İnternet üzerindeki diğer web sitelerindeki sayfalara bağlantılar
2.  Kendi web sitelerimizde bulunan sayfalara bağlantılar

#### Mutlak bağlantılar

İnternet üzerindeki diğer web sitelerindeki sayfalara bağlantılar, mutlak bağlantılar olarak adlandırılır. Tipik bir mutlak bağlantı aşağıdaki bileşenlerden oluşur: `protokol://alan/yol`. Bir mutlak bağlantı her zaman hedefin protokolünü ve domain'ini içerir.

Zaten bir mutlak bağlantıyı kullanırken görmüştük. Daha önce The Odin Project'in Hakkında sayfasına oluşturduğumuz bağlantı protokol ve domain içerdiği için bir mutlak bağlantıydı.

`https://www.theodinproject.com/about`

#### Göreceli bağlantılar

Kendi web sitemizdeki diğer sayfalara bağlantılar göreceli bağlantılar olarak adlandırılır. Göreceli bağlantılar domain ismini içermez çünkü aynı site içindeki başka bir sayfa olduğu varsayılır ve bağlantıyı oluşturduğumuz sayfanın domain isminin aynı olacağı düşünülür.

Göreceli bağlantılar yalnızca diğer sayfaya olan dosya yolunu içerir ve bu yol bağlantıyı oluşturduğunuz sayfaya göre *göreceli* olarak belirlenir. Bu kavram biraz soyut olabilir bir örnek üzerinden görelim.

`odin-links-and-images` dizini içinde, `about.html` adında başka bir HTML dosyası oluşturun ve aşağıdaki kodu içine yapıştırın:

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Odin Links and Images</title>
  </head>

  <body>
    <h1>About Page</h1>
  </body>
</html>
~~~

İndex sayfasına dönün ve about sayfasına bir bağlantı oluşturmak için aşağıdaki anchor öğesini ekleyin:

~~~html
<body>
  <h1>Homepage</h1>
	<a href="https://www.theodinproject.com/about">click me</a>

	<a href="about.html">About</a>
</body>
~~~

Tarayıcıda index dosyasını açın ve bağlantıya tıklayarak tümünün doğru bir şekilde bağlandığından emin olun. Bağlantıya tıkladığınızda yeni oluşturduğumuz about sayfasına gitmelidir.

Bu index ve about sayfasının aynı dizinde olduğu için işe yarıyor. Bu durumda bağlantının href değeri olarak sadece dosyanın adını (`about.html`) kullanabiliriz.

Ancak genellikle web sitesi dizinlerimizi biraz daha iyi organize etmek isteyeceğiz. Normalde yalnızca index.html dosyasını kök dizinde bulundurur ve tüm diğer HTML dosyalarını kendi dizinlerine yerleştiririz.

`odin-links-and-images` dizini içinde `pages` adında bir dizin oluşturun ve `about.html` dosyasını bu yeni dizine taşıyın.

Tarayıcıdaki index sayfasını yenileyin ve ardından about bağlantısına tıklayın. Şimdi bağlantı çalışmayacak. Bunun nedeni about sayfasının dosya konumunun değişmiş olmasıdır.

Bunu düzeltmek için about bağlantısının href değerini güncellememiz yeterlidir. İndex dosyasına *göreceli* olarak about dosyasının yeni konumu olan `pages/` dizinini dahil etmemiz gerekmektedir. 

~~~html
<body>
  <h1>Homepage</h1>
  <a href="pages/about.html">About</a>
</body>
~~~

Tarayıcıda index sayfasını yenileyin ve about bağlantısına tekrar tıklayın, şimdi düzgün çalışması gerekmelidir.

Birçok durumda bu yöntem gayet iyi çalışır; ancak yine de beklenmeyen sorunlarla karşılaşabilirsiniz. Bağlantıdan önce `./` eklemek, çoğu durumda bu tür sorunların önüne geçecektir. `./` ekleyerek, kodunuza dosya/dizin aramaya *göreceli* olarak `mevcut` dizinden başlaması gerektiğini belirtmiş olursunuz.

~~~html
<body>
  <h1>Homepage</h1>
  <a href="./pages/about.html">About</a>
</body>
~~~

#### Bir metafor

Mutlak ve göreceli bağlantılar iyi bir zihinsel model oluşturmak için karmaşık bir kavramdır bir metafor yardımcı olabilir:

Alan adınızı (`sehir.com`) bir kasaba olarak düşünün, web sitenizin bulunduğu dizini (`/muzeler`) bir müze olarak ve web sitenizdeki her sayfayı (`/muzeler/film_odasi.html` ve `/muzeler/magazalar/kahve_dukkani.html`) müzedeki bir oda olarak düşünün. `./magazalar/kahve_dukkani.html` gibi göreceli bağlantılar, mevcut odadan (müze film odası `/muzeler/film_odasi.html`) diğer bir odaya (müze mağazası) yönerge niteliğindedir. Mutlak bağlantılar ise protokolü (`https`), alan adını (`sehir.com`) ve bu alan adından gelen yolunu (`/muzeler/magazalar/kahve_dukkani.html`) içeren tam yol tarifleri olarak düşünülebilir: `https://sehir.com/muzeler/magazalar/kahve_dukkani.html`.

### Görseller

Web siteleri yalnızca metin görüntüleyebilseydi oldukça sıkıcı olurdu. Neyse ki HTML çeşitli medyaları görüntülemek için geniş bir element yelpazesi sunar. Bunların arasında en yaygın kullanılanı görüntü elementidir.

HTML'de bir görüntüyü görüntülemek için `<img>` elementini kullanırız. Diğer karşılaştığımız elementlerin aksine `<img>` elementi kendini kapatan bir elementtir. Kendini kapatan HTML elementlerine kapanış etiketi gerekmez.

Açılış ve kapanış etiketiyle içeriği sarmak yerine src özelliğini kullanarak bir görüntüyü sayfaya yerleştirir. src özelliği tarayıcıya görüntü dosyasının nerede bulunduğunu söyler. src özelliği bağlantı öğeleri için href özelliği gibi çalışır. Hem mutlak hem de göreceli yol kullanarak bir görüntü yerleştirebilir.

Örneğin The Odin Project sitesinde bulunan bir görüntüyü mutlak yol kullanarak görüntüleyebiliriz:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="gORbExZ" data-user="TheOdinProjectExamples" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
<span><a href="https://codepen.io">CodePen</a>'de TheOdinProject 
(<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) tarafından hazırlanan 
<a href="https://codepen.io/TheOdinProjectExamples/pen/gORbExZ">absolute-path-image örneğine</a> göz atın.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Kendi web sitelerimizde bulunan görüntüleri kullanmak için göreceli bir yol kullanabiliriz.

1. `odin-links-and-images` projesi içinde `images` adında yeni bir dizin oluşturun.

2. [Bu görüntüyü](https://unsplash.com/photos/Mv9hjnEUHR4/download?force=true&w=640) indirin ve yeni oluşturduğumuz images dizinine taşıyın.

3. Görüntüyü `dog.jpg` olarak yeniden adlandırın.

Son olarak görüntüyü `index.html` dosyasına ekleyin:

~~~html
<body>
  <h1>Homepage</h1>
	<a href="https://www.theodinproject.com/about">click me</a>

	<a href="./pages/about.html">About</a>

	<img src="./images/dog.jpg">
</body>
~~~

`index.html` dosyasını kaydedin ve tarayıcıda açarak Charles'ı tüm ihtişamıyla görüntüleyin.

### Üst dizinler
Peki ya about sayfasında köpek görüntüsünü kullanmak istersek? İlk olarak, pages dizininden bir seviye yukarı çıkıp üst dizine gitmemiz gerekecek, böylece images dizinine erişebiliriz.

<span id="parent-filepath"></span>Üst dizine gitmek için göreceli dosya yolunda iki nokta (`../`) kullanmamız gerekiyor. Hadi bunu uygulamada görelim, `about.html` dosyasının içine, daha önce eklediğimiz başlığın altına aşağıdaki görüntüyü ekleyin:

~~~html
<img src="../images/dog.jpg">
~~~


Bu durumu daha iyi anlamak için şu adımları izliyoruz:

1. İlk olarak pages dizininin üst dizinine yani `odin-links-and-images` dizinine gidiyoruz.
2. Ardından üst dizinden images dizinine geçiyoruz.
3. Son olarak `dog.jpg` dosyasına erişebiliyoruz.

Önceki metaforu kullanarak bir dosya yolunda `../` kullanmak, bulunduğunuz odadan ana koridora çıkıp başka bir odaya gitmek gibi bir şeydir.

### Alt özniteliği

<span id="two-attributes"></span> Src özniteliğinin yanı sıra her görüntü elementinin alt (alternatif metin) özniteliği olmalıdır.

Alt özniteliği bir görüntüyü açıklamak için kullanılır. Eğer görüntü yüklenemezse yerine kullanılır. Ayrıca ekran okuyucularla birlikte kullanılarak görsel olarak engelli kullanıcılara görüntünün ne olduğunu açıklamak için kullanılır.

İşte daha önce kullandığımız The Odin Project logosu örneği alt özniteliği eklenmiş hali:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="ExXjoEp" data-user="TheOdinProjectExamples" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/TheOdinProjectExamples/pen/ExXjoEp">
  image-alt-attribute</a> by TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Biraz pratik yapmak için, `odin-links-and-images` projesine eklediğimiz köpek görüntüsüne bir alt özniteliği ekleyelim.

### Ödev

<div class="lesson-content__panel" markdown="1">

1.  [Watch Kevin Powell's HTML Links Video](https://www.youtube.com/watch?v=tsEQgGjSmkM&list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-&index=5).
2.  [Watch Kevin Powell's HTML Images Video](https://www.youtube.com/watch?v=0xoztJCHpbQ&list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-&index=6).
3.  [Watch Kevin Powell's File Structure Video](https://www.youtube.com/watch?v=ta3Oxx7Yqbo&list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-&index=7).
4.  [Read about the four main image formats that can be used on the web](https://internetingishard.netlify.app/html-and-css/links-and-images/#image-formats).

</div>

### Bilgi kontrolü

Bu bölümde bu dersle ilgili anlama seviyenizi kendiniz kontrol etmek için sorular bulunmaktadır. Bir soruya cevap vermede zorluk yaşıyorsanız, üzerine tıklayarak bağlantı verilen materyali gözden geçirin.

*   [What element is used to create a link?](#anchor-elements)
*   [What is an attribute?](#attribute)
*   [What attribute tells links where to go to?](#where-to-go)
*   [What is the difference between an absolute and relative link?](#absolute-and-relative-links)
*   [Which element is used to display an image?](#images)
*   [What two attributes do images always need to have?](#two-attributes)
*   [How do you access a parent directory in a filepath?](#parent-filepath)
*   [What are the four main image formats that you can use for images on the web?](https://internetingishard.netlify.app/html-and-css/links-and-images/#image-formats)

### Ek kaynaklar

Bu bölüm ilgili içeriklere yönelik yararlı bağlantılar içerir. Zorunlu değildir, bu nedenle ek bir kaynak olarak düşünün.

-   [Interneting is hard's treatment on HTML links and images](https://internetingishard.netlify.app/html-and-css/links-and-images)
-   [What happened the day Google decided links including (`/`) were malware](https://www.itpro.co.uk/609724/google-apologises-after-blacklisting-entire-internet)










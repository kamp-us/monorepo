### Giriş

Linkler HTML'nin temel özelliklerinden biridir. Bize web üzerindeki diğer HTML sayfalarıyla bağlantı kurma imkanı sağlar. Aslında bu yüzden web olarak adlandırılır.

Bu derste, nasıl link oluşturacağımızı ve resim ekleyerek web sitelerimize nasıl görsel bir hava katacağımızı öğreneceğiz.

### Ders genel bakışı

Bu bölüm öğreneceğiniz konuların genel bir özetini içerir.

- İnternet üzerindeki diğer web sitelerindeki sayfalara nasıl link oluşturulur.
- Kendi web sitelerinizdeki diğer sayfalara nasıl link oluşturulur.
- Mutlak ve göreceli linkler arasındaki fark.
- HTML kullanarak bir web sayfasında resim nasıl görüntülenir.

### Hazırlık

Bu derste linkler ve görüntüler kullanarak alıştırma yapmak için bir HTML projesine ihtiyacımız var.

1.  `odin-links-and-images` adında yeni bir dizin oluşturun.
1.  Bu dizin içinde `index.html` adında yeni bir dosya oluşturun.
1.  Dosyayı VS Code'da açın ve standart HTML şablonunu ekleyin.
1.  Son olarak aşağıdaki h1 etiketini body içine ekleyin:

```html
<h1>Homepage</h1>
```

### Anchor öğeleri

HTML'de bir link oluşturmak için anchor öğesini kullanırız. Bir anchor öğesi bir metni veya bir HTML öğesini link olarak belirlemek için `<a>` etiketiyle sarmalanarak tanımlanır.

Oluşturduğumuz `index.html` sayfasının body bölümüne aşağıdakini ekleyin ve tarayıcıda açın:

```html
<a>click me</a>
```

Belki fark etmişsinizdir bu linke tıkladığınızda hiçbir şey olmuyor. Bunun nedeni, bir anchor etiketinin tek başına nereye link vermek istediğimizi bilmemesidir. Ona gitmek istediğimiz bir hedefi söylememiz gerekiyor. Bunun için bir HTML niteliği kullanırız.

<span id="attribute"></span> Bir HTML niteliği, bir HTML öğesine ek bilgi verir ve her zaman öğenin açılış etiketine yerleştirilir. Bir nitelik genellikle iki kısımdan oluşur; bir isim ve bir değer. Ancak tüm niteliklerin bir değere ihtiyacı yoktur. <span id="where-to-go"></span> Bizim durumumuzda önceki oluşturduğumuz `anchor` etiketine bir `href` (hipertext referansı) niteliği eklememiz gerekiyor. href niteliğinin değeri, linkimizin gitmesini istediğimiz hedeftir.

Önceden oluşturduğumuz anchor öğesine aşağıdaki href niteliğini ekleyin ve tekrar tıklamayı deneyin. Tarayıcıyı yenilemeyi unutmayın. Böylece yeni değişiklikler uygulanabilir.

```html
<a href="https://www.theodinproject.com/about">click me</a>
```

Varsayılan olarak `href` niteliği olmadan bir anchor etiketiyle sarılmış metin düz metin gibi görünecektir. Eğer `href` niteliği mevcutsa tarayıcı metne mavi bir renk ve alt çizgi vererek onun bir link olduğunu belirtir.

Sadece diğer HTML belgelerine değil, internet üzerindeki her türlü kaynağa link vermek için anchor etiketlerini kullanabileceğinizi belirtmek gerekir. Videolara, pdf dosyalarına, resimlere ve benzerlerine link verebilirsiniz, ancak çoğunlukla diğer HTML belgelerine link vereceksiniz.

### Linkleri yeni bir sekmede açma

Yukarıda gösterilen yöntem, linkleri, onları içeren web sayfasıyla aynı sekmede açar. Bu çoğu tarayıcının varsayılan davranışıdır ve bunu oldukça kolay bir şekilde değiştirmek mümkündür. Tek ihtiyacımız olan başka bir nitelik: `target` niteliği.

`href` hedef linki belirtirken, `target` linkli kaynağın nerede açılacağını belirtir. Eğer mevcut değilse varsayılan olarak `_self` değerini alır ve linki mevcut sekmede açar. Linki yeni bir sekmede veya pencerede açmak için (tarayıcı ayarlarına bağlı olarak) `_blank` olarak ayarlayabilirsiniz:

```html
<a href="https://www.theodinproject.com/about" target="_blank" rel="noopener noreferrer">Click me</a>
```

<span id="target-security"></span> Yukarıda `rel` niteliğini araya sıkıştırdığımızı fark etmiş olabilirsiniz. Bu nitelik, geçerli sayfa ile linki verilen belge arasındaki ilişkiyi tanımlamak için kullanılır.

`noopener` değeri, açılan linkin açıldığı web sayfasına erişim kazanmasını engeller. `noreferrer` değeri, açılan linkin hangi web sayfasına veya kaynağa linki (veya 'referansı') olduğunu bilmesini engeller. Bu aynı zamanda `noopener` davranışını içerir ve bu nedenle tek başına da kullanılabilir.

Linkleri yeni sekmelerde açarken neden bu eklenmiş davranışa ihtiyaç duyarız? Güvenlik nedenlerinden dolayı. `noopener` tarafından neden olunan erişimin engellenmesi açılan linkin orijinal web sayfasını kullanıcıları kandırmak için farklı bir sayfaya değiştirebileceği [kimlik avı saldırıları](https://www.ibm.com/topics/phishing)nı önler. Buna [tabnabbing](https://owasp.org/www-community/attacks/Reverse_Tabnabbing) denir. `noreferrer` değerinin eklenmesi, açılan linkin web sayfanıza link verdiğini bilmemesini istiyorsanız yapılabilir.

Unutursanız bile `rel="noopener noreferrer"` eklememeniz sorun olmayabilir çünkü daha yeni tarayıcı sürümleri [yalnızca `target="_blank"` varsa](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#security_and_privacy), bu güvenliği sağlar. Bununla birlikte iyi kodlama uygulamalarına uygun olarak ve daha güvenli bir yaklaşım benimseyerek her zaman `target="_blank"` ile `rel="noopener noreferrer"` niteliklerini bir arada kullanmanız önerilir.

### Mutlak ve göreceli linkler

Genel olarak oluşturacağımız linkler şunlardır:

- İnternet üzerindeki diğer web sitelerindeki sayfalara linkler.
- Kendi web sitelerimizde bulunan sayfalara linkler.

#### Mutlak linkler

İnternet üzerindeki diğer web sitelerindeki sayfalara linkler, mutlak linkler olarak adlandırılır. Tipik bir mutlak link aşağıdaki bileşenlerden oluşur: `protokol://alan/yol`. Bir mutlak link her zaman hedefin protokolünü ve domain'ini içerir.

Zaten bir mutlak linki kullanırken görmüştük. Daha önce The Odin Project'in Hakkında sayfasına oluşturduğumuz link protokol ve domain içerdiği için bir mutlak linkti.

`https://www.theodinproject.com/about`

#### Göreceli linkler

Kendi web sitemizdeki diğer sayfalara linkler göreceli linkler olarak adlandırılır. Göreceli linkler domain ismini içermez çünkü aynı site içindeki başka bir sayfa olduğu varsayılır ve linki oluşturduğumuz sayfanın domain isminin aynı olacağı düşünülür.

Göreceli linkler yalnızca diğer sayfaya olan dosya yolunu içerir ve bu yol linki oluşturduğunuz sayfaya göre *göreceli* olarak belirlenir. Bu kavram biraz soyut olabilir bir örnek üzerinden görelim.

`odin-links-and-images` dizini içinde, `about.html` adında başka bir HTML dosyası oluşturun ve aşağıdaki kodu içine yapıştırın:

```html
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
```

İndex sayfasına dönün ve about sayfasına bir link oluşturmak için aşağıdaki anchor öğesini ekleyin:

```html
<body>
  <h1>Homepage</h1>
	<a href="https://www.theodinproject.com/about">click me</a>

	<a href="about.html">About</a>
</body>
```

Tarayıcıda index dosyasını açın ve linke tıklayarak tümünün doğru bir şekilde bağlandığından emin olun. Linke tıkladığınızda yeni oluşturduğumuz about sayfasına gitmelidir.

Bu index ve about sayfasının aynı dizinde olduğu için işe yarıyor. Bu durumda linkin href değeri olarak sadece dosyanın adını (`about.html`) kullanabiliriz.

Ancak genellikle web sitesi dizinlerimizi biraz daha iyi organize etmek isteyeceğiz. Normalde yalnızca index.html dosyasını kök dizinde bulundurur ve tüm diğer HTML dosyalarını kendi dizinlerine yerleştiririz.

`odin-links-and-images` dizini içinde `pages` adında bir dizin oluşturun ve `about.html` dosyasını bu yeni dizine taşıyın.

Tarayıcıdaki index sayfasını yenileyin ve ardından about linkine tıklayın. Şimdi link çalışmayacak. Bunun nedeni about sayfasının dosya konumunun değişmiş olmasıdır.

Bunu düzeltmek için about linkinin href değerini güncellememiz yeterlidir. İndex dosyasına *göreceli* olarak about dosyasının yeni konumu olan `pages/` dizinini dahil etmemiz gerekmektedir. 

```html
<body>
  <h1>Homepage</h1>
  <a href="pages/about.html">About</a>
</body>
```

Tarayıcıda index sayfasını yenileyin ve about linkine tekrar tıklayın, şimdi düzgün çalışması gerekmelidir.

Birçok durumda bu yöntem gayet iyi çalışır; ancak yine de beklenmeyen sorunlarla karşılaşabilirsiniz. Linkten önce `./` eklemek, çoğu durumda bu tür sorunların önüne geçecektir. `./` ekleyerek, kodunuza dosya/dizin aramaya *göreceli* olarak `mevcut` dizinden başlaması gerektiğini belirtmiş olursunuz.

```html
<body>
  <h1>Homepage</h1>
  <a href="./pages/about.html">About</a>
</body>
```


#### Bir metafor

Mutlak ve göreceli linkler iyi bir zihinsel model oluşturmak için karmaşık bir kavramdır bir metafor yardımcı olabilir:

Alan adınızı (`sehir.com`) bir kasaba olarak düşünün, web sitenizin bulunduğu dizini (`/muzeler`) bir müze olarak ve web sitenizdeki her sayfayı (`/muzeler/film_odasi.html` ve `/muzeler/magazalar/kahve_dukkani.html`) müzedeki bir oda olarak düşünün. `./magazalar/kahve_dukkani.html` gibi göreceli linkler, mevcut odadan (müze film odası `/muzeler/film_odasi.html`) diğer bir odaya (müze mağazası) yönerge niteliğindedir. Mutlak linkler ise protokolü (`https`), alan adını (`sehir.com`) ve bu alan adından gelen yolunu (`/muzeler/magazalar/kahve_dukkani.html`) içeren tam yol tarifleri olarak düşünülebilir: `https://sehir.com/muzeler/magazalar/kahve_dukkani.html`.

### Görseller

Web siteleri yalnızca metin görüntüleyebilseydi oldukça sıkıcı olurdu. Neyse ki HTML çeşitli medyaları görüntülemek için geniş bir element yelpazesi sunar. Bunların arasında en yaygın kullanılanı görüntü elementidir.

HTML'de bir görüntüyü görüntülemek için `<img>` elementini kullanırız. Diğer karşılaştığımız elementlerin aksine `<img>` elementi kendini kapatan bir elementtir. Kendini kapatan HTML elementlerine kapanış etiketi gerekmez.

Açılış ve kapanış etiketiyle içeriği sarmak yerine src özelliğini kullanarak bir görüntüyü sayfaya yerleştirir. src özelliği tarayıcıya görüntü dosyasının nerede bulunduğunu söyler. src özelliği link öğeleri için href özelliği gibi çalışır. Hem mutlak hem de göreceli yol kullanarak bir görüntü yerleştirebilir.

Örneğin The Odin Project sitesinde bulunan bir görüntüyü mutlak yol kullanarak görüntüleyebiliriz:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="gORbExZ" data-user="TheOdinProjectExamples" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
<span><a href="https://codepen.io">CodePen</a>'de TheOdinProject 
(<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) tarafından hazırlanan 
<a href="https://codepen.io/TheOdinProjectExamples/pen/gORbExZ">absolute-path-image örneğine</a> göz atın.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Kendi web sitelerimizde bulunan görüntüleri kullanmak için göreceli bir yol kullanabiliriz.

<details markdown="block">
<summary class="dropDown-header">Linux, macOS, ChromeOS
</summary>

1. `odin-links-and-images` projesi içinde `images` adında yeni bir dizin oluşturun.
1. [Bu görüntüyü](https://unsplash.com/photos/Mv9hjnEUHR4/download?force=true&w=640) indirin ve yeni oluşturduğumuz images dizinine taşıyın.
1. Görüntüyü `dog.jpg` olarak yeniden adlandırın.

</details>

<details markdown="block">
<summary class="dropDown-header">WSL
</summary>

İnternetten bir dosya indirdiğinizde, Windows'un indirdiğiniz dosyayla aynı ada sahip gizli bir `Zone.Identifier` dosyası oluşturan bir güvenlik özelliği vardır ve `mypicture.jpg:Zone.Identifier` gibi görünür Bu dosya zararsızdır, ancak kopyalamaktan ve dizinlerimizi karıştırmaktan kaçınmak istiyoruz.

1.  odin-links-and-images` projesi içinde `images` adında yeni bir dizin oluşturun.

2.  Ardından, [bu stok köpek görselini indirin](https://unsplash.com/photos/Mv9hjnEUHR4/download?force=true&w=640).

3.  Chrome penceresinin altındaki yeni indirilen dosyaya sağ tıklayın ve "Klasörde göster" seçeneğini seçin.

  1. Alternatif olarak, chrome penceresinin altında hiçbir şey görmüyorsanız, "Google Chrome menüsünü özelleştirin ve kontrol edin" menüsünü açın ve "İndirilenler" öğesini seçin. Bu, her biri kendi "Klasörde göster" düğmesiyle birlikte tüm indirmelerinizi gösterecektir.

4.  Dosyayı indirilenler klasörünüzden VSCode'un dosya tarayıcısına yeni `images` dizinine sürükleyin.

    1. Alternatif olarak, Ubuntu terminalinizi kullanarak, görüntüyü kopyalamak istediğiniz dizine gidin (örneğin `cd ~/odin-links-and-images`)

    2. `cp <boşluk>` yazın

    3. Windows Explorer penceresinden `dog.jpg` resmini sürükleyin ve terminal penceresine bırakın, `"/mnt/c/users/username/Downloads/dog.jpg"` şeklinde görünmelidir.

    4. cp'ye dosyayı geçerli çalışma dizininize kopyalamak istediğinizi söylemek için `<boşluk>` yazın.

        1. Komutun tamamı `cp "/mnt/c/kullanıcı/kullanıcı adı/Downloads/dog.jpg" .` gibi görünecektir.

    5. Komutu tamamlamak için <kbd>Enter</kbd> tuşuna basın ve dosyanın artık var olduğunu doğrulamak için ls'yi kullanın.

Dosyaları Windows'tan VSCode dosya tarayıcısına sürüklemek `Zone.Identifier` dosyalarının üzerine kopyalanmasını önler. Şu andan itibaren, bunun gibi resimleri veya indirilen diğer dosyaları WSL'ye kopyalamanız gerektiğinde, bunu bu şekilde yapabilirsiniz. Eğer bu `Zone.Identifier` dosyalarını yanlışlıkla WSL'ye kopyalarsanız, bunları herhangi bir sorun olmadan güvenle silebilirsiniz.

</details>

Son olarak görüntüyü `index.html` dosyasına ekleyin:

```html
<body>
  <h1>Homepage</h1>
	<a href="https://www.theodinproject.com/about">click me</a>

	<a href="./pages/about.html">About</a>

	<img src="./images/dog.jpg">
</body>
```

`index.html` dosyasını kaydedin ve tarayıcıda açarak Charles'ı tüm ihtişamıyla görüntüleyin.

### Üst dizinler
Peki ya about sayfasında köpek görüntüsünü kullanmak istersek? İlk olarak, pages dizininden bir seviye yukarı çıkıp üst dizine gitmemiz gerekecek, böylece images dizinine erişebiliriz.

<span id="parent-filepath"></span>Üst dizine gitmek için göreceli dosya yolunda iki nokta (`../`) kullanmamız gerekiyor. Hadi bunu uygulamada görelim, `about.html` dosyasının içine, daha önce eklediğimiz başlığın altına aşağıdaki görüntüyü ekleyin:

```html
<img src="../images/dog.jpg">
```

Bu durumu daha iyi anlamak için şu adımları izliyoruz:

1. İlk olarak pages dizininin üst dizinine yani `odin-links-and-images` dizinine gidiyoruz.
1. Ardından üst dizinden images dizinine geçiyoruz.
1. Son olarak `dog.jpg` dosyasına erişebiliyoruz.

Önceki metaforu kullanarak bir dosya yolunda `../` kullanmak, bulunduğunuz odadan ana koridora çıkıp başka bir odaya gitmek gibi bir şeydir.

### Alt niteliği

<span id="two-attributes"></span> Src niteliğinin yanı sıra her görüntü elementinin alt (alternatif metin) niteliği olmalıdır.

Alt niteliği bir görüntüyü açıklamak için kullanılır. Eğer görüntü yüklenemezse yerine kullanılır. Ayrıca ekran okuyucularla birlikte kullanılarak görsel olarak engelli kullanıcılara görüntünün ne olduğunu açıklamak için kullanılır.

İşte daha önce kullandığımız The Odin Project logosu örneği alt niteliği eklenmiş hali:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="ExXjoEp" data-user="TheOdinProjectExamples" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/TheOdinProjectExamples/pen/ExXjoEp">
  image-alt-attribute</a> by TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Biraz pratik yapmak için, `odin-links-and-images` projesine eklediğimiz köpek görüntüsüne bir alt niteliği ekleyelim.

### Görsel boyutu nitelikleri

Kesinlikle gerekli olmamakla birlikte, yükseklik ve genişlik belirtmek
görsel(img) etiketlerindeki nitelikler, sayfanın atlamasına ve yanıp sönmesine neden olmadan tarayıcının sayfayı düzenlemesine yardımcı olur.

Görüntü doğru boyutta olsa veya değiştirmek için CSS kullanıyor olsanız bile, her görüntüde bu nitelikleri her zaman belirtmek iyi bir alışkanlıktır.

İşte yükseklik ve genişlik etiketleri içeren Odin Project logo örneğimiz:

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="PoXJKvy" data-user="FabulousPBB" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span><a href="https://codepen.io">CodePen</a>'de Brian Lister 
  (<a href="https://codepen.io/FabulousPBB">@FabulousPBB</a>) tarafından yazılan 
  <a href="https://codepen.io/FabulousPBB/pen/PoXJKvy">Görüntü Yükseklik ve Genişlik Özelliklerine </a> bakın.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Hadi devam et ve `odin-links-and-images` projesindeki köpek görüntüsünü genişlik ve yükseklik etiketleri ile güncelle.

### Ödev

<div class="lesson-content__panel" markdown="1">

1.  [Kevin Powell'ın HTML Links adlı ingilizce videosunu izleyin](https://www.youtube.com/watch?v=tsEQgGjSmkM&list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-&index=5).
1.  [Kevin Powell'ın HTML Images adlı ingilizce videosunu izleyin](https://www.youtube.com/watch?v=0xoztJCHpbQ&list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-&index=6).
1.  [Kevin Powell'ın File Structure adlı ingilizce videosunu izleyin](https://www.youtube.com/watch?v=ta3Oxx7Yqbo&list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-&index=7).
1.  [Web'de kullanılabilecek dört ana görüntü formatı hakkında olan ingilizce makaleye göz atın](https://internetingishard.netlify.app/html-and-css/links-and-images/#image-formats).

</div>

### Bilgi kontrolü

Bu bölüm, bu dersi kendi başınıza anlayıp anlamadığınızı kontrol etmeniz için sorular içermektedir. Bir soruyu yanıtlamakta zorlanıyorsanız, soruya tıklayın ve linki verilen materyali gözden geçirin.

-   [Link oluşturmak için hangi öğe kullanılır?](#anchor-öğeleri)
-   [Bir nitelik nedir?](#attribute)
-   [Hangi nitelik linklere nereye gideceklerini söyler?](#where-to-go)
-   [Linkleri yeni bir sekmede/pencerede açmak için target niteliğini kullanmak isterseniz hangi güvenlik hususlarına dikkat etmeniz gerekir?](#target-security)
-   [Mutlak ve göreceli link arasındaki fark nedir?](#mutlak-ve-göreceli-linkler)
-   [Bir görseli görüntülemek için hangi öğe kullanılır?](#görseller)
-   [Görüntülerin her zaman hangi iki özelliğe sahip olması gerekir?](#two-attributes)
-   [Bir dosya yolundaki bir üst dizine nasıl erişirsiniz?](#üst-dizinler)
-   [Web'deki görseller için kullanabileceğiniz dört ana görsel formatı nedir? bunu öğrenmek için bu ingilizce makaleye göz atın.](https://internetingishard.netlify.app/html-and-css/links-and-images/#image-formats)

### Ek kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

-   [İnternette HTML linkleri ve görseller üzerinde çalışmak zordur adlı ingilizce makaleye bakın](https://internetingishard.netlify.app/html-and-css/links-and-images)
-   [Google'ın (`/`) içeren linklerin kötü amaçlı yazılım olduğuna karar verdiği gün ne olduğuna bu ingilizce makaleden bakın ](https://www.itpro.co.uk/609724/google-apologises-after-blacklisting-entire-internet)
-   [Chris Coyier'in CSS-Tricks'teki target="_blank" ne zaman kullanılmalı? adlı ingilizce makalesine bakın](https://css-tricks.com/use-target_blank/)
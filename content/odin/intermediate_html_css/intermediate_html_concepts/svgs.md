### Giriş

SVG'ler web üzerinde yaygın bir görüntü formatıdır. İlk başta biraz kafa karıştırıcı olabilir, ancak nasıl kullanılacağını bildikten sonra, web siteniz için yüksek kaliteli, dinamik görüntüler oluşturmak için son derece güçlü bir araçtır.

In this lesson, we will learn exactly what SVGs are, what they're used for, and how you can embed them in your websites.

### Öğrenme çıktıları

- SVG'lerin, Vektör Grafiklerin ve XML'in ne olduğu
- Basit SVG'ler nasıl oluşturulur ve web sitelerinize nasıl eklenir
- SVG'leri ne zaman kullanmanın uygun olduğu ve başka bir görüntü formatının daha uygun olabileceği durumlar

### SVG'ler nedir?

SVG'ler, boyutları kolayca _ölçeklenebilen_ bir görüntü formatıdır, bu da onların kalitesini artırmadan herhangi bir boyuta kolayca ölçeklenebileceği anlamına gelir. Ayrıca, CSS ve JavaScript aracılığıyla özelliklerini değiştirebileceğiniz için programatik olarak görüntüler oluşturmanız veya değiştirmeniz gerekiyorsa çok kullanışlıdır.

SVG'ler genellikle şu amaçlar için kullanılır:

1. İkonlar
2. Grafikler/Grafikler
3. Büyük, basit görüntüler
4. Desenli arka planlar
5. Diğer öğelere SVG filtreleri aracılığıyla efektler uygulama

### Tamam, ama bunlar nedir?


"SVG," "Scalable Vector Graphics" kelimelerinin kısaltmasıdır. Vektör grafikleri, basitçe matematikle tanımlanan görüntülerdir, geleneksel "raster grafikleri"ne karşıt olarak, burada görüntünüz piksellerin bir ızgarası tarafından tanımlanır. Raster grafiklerle, detay piksel ızgarasının boyutu ile sınırlıdır. Eğer görüntünün boyutunu artırmak (ölçeklendirmek) istiyorsanız, o ızgaranın boyutunu artırmalısınız. Peki, tüm bu yeni piksellerin nasıl görünmesi gerektiğine nasıl karar verirsiniz? Bu konuda basit bir çözüm yoktur. Ayrıca, ızgaranın ne kadar büyük olduğu, dosya boyutunuzun ne kadar büyüdüğünü belirler.

Öte yandan, vektör grafiklerinde bir ızgara bulunmaz. Bunun yerine, farklı şekil ve çizgiler için matematiksel formüller vardır. Bu formüller sadece matematiksel ifadeler olduğu için, bunları--istediğiniz büyüklükte veya küçüklükte kullanabilirsiniz. Bu durum, kalite veya dosya boyutu üzerinde herhangi bir etki yapmaz.

SVGs'ın başka ilginç bir yönü daha vardır: XML kullanılarak tanımlanırlar. XML (Extensible Markup Language olarak da bilinir), bir HTML benzeri sözdizimidir ve [API's](https://en.wikipedia.org/wiki/API)'den [RSS](https://en.wikipedia.org/wiki/RSS)'e, [spreadsheet and word editor software](https://en.wikipedia.org/wiki/Office_Open_XML) kadar birçok alanda kullanılır.

SVG kaynak kodunun XML olması birkaç önemli avantaja sahiptir.

İlk olarak, bu, insan tarafından okunabilir (human-readable) olduğu anlamına gelir. Eğer bir JPEG dosyasını bir metin düzenleyicide açarsanız, anlamsız karakterlerle dolu bir şey göreceksiniz. Ancak bir SVG dosyasını açarsanız, şöyle bir şey göreceksiniz:

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect x=0 y=0 width=100 height=50 />
    <circle class="svg-circle" cx="50" cy="50" r="10"/>
</svg>
```

Hâlâ kafa karıştırıcı olabilir, ama işte orada kelimeler var! Etiketler! Öznitelikler! JPEG gibi [binary file formats](https://en.wikipedia.org/wiki/Binary_file) ile karşılaştırıldığında, kesinlikle tanıdık bir alandayız.

İkinci avantajı ise XML'in HTML ile etkileşimli olacak şekilde tasarlanmış olmasıdır. Bu, yukarıdaki kodu herhangi bir değişiklik yapmadan doğrudan bir HTML dosyasına yerleştirebileceğiniz ve görüntünün görüntülenmesi gerektiği anlamına gelir. Ve çünkü bunlar HTML öğeleri gibi DOM'da öğe haline gelebilir, CSS ile hedef alabilir ve zaten kullandığınız [Element WebAPI](https://developer.mozilla.org/en-US/docs/Web/API/Element) ile oluşturabilirsiniz!

### Dezavantajları

Öyleyse, açıkça SVG'ler harika! Şimdi tüm görüntülerimizi SVG'ye dönüştürmeye mi gidiyoruz? Peki, tam olarak değil. SVG'ler, nispeten basit görüntüler için harika olsa da, görüntünün her ayrıntısının XML olarak yazılması gerektiği için karmaşık görüntülerin depolanması konusunda son derece verimsizdir. Eğer görüntünüz fotoğraf gerçekçiliğinde olmalı veya ince detaya veya dokuya sahip olmalıysa ("[grunge textures](https://unsplash.com/s/photos/grunge-texture)" harika bir örnek), o zaman SVG'ler iş için yanlış araçtır.

### SVG'nin anatomisi

Genellikle, SVG'leri kodunuzda sıfırdan oluşturmak istemeyeceksiniz. Çoğunlukla, dosyayı bir web sitesinden veya SVG oluşturabilen bir görüntü düzenleyicisinden kopyalarsınız (Adobe Illustrator ve Figma, SVG oluşturabilen bunun için iki popüler uygulamadır). Ancak, genellikle bir SVG'yi indirirken biraz düzenleme veya ayarlama yapmak isteyebilirsiniz, bu nedenle tüm parçaların ne olduğunu ve nasıl çalıştığını bilmek oldukça faydalıdır.

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="css,result" data-slug-hash="NWaGdmL" data-editable="true" data-user="TheOdinProjectExamples" style={{"height":"300px","boxSizing":"border-box","display":"flex","alignItems":"center","justifyContent":"center","border":"2px solid","margin":"1em 0","padding":"1em"}}>
<span>Şu koda göz atın: <a href="https://codepen.io/TheOdinProjectExamples/pen/NWaGdmL">Basit SVG Örneği</a>
 - TheOdinProject tarafından (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) 
 CodePen üzerinde.</span>

</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

1.  `xmlns` - "XML NameSpace" kısaltmasıdır. Bu, kullandığınız XML dilinin hangi _lehçe_ olduğunu belirtir. Bizim durumumuzda, bu lehçe SVG dil spesifikasyonudur. Bu olmadan, bazı tarayıcılar görüntünüzü render etmeyebilir veya yanlış render edebilir. Bu özelliğin tam olarak ne olduğu ve neden gerekli olduğu konusunda detaylı bir açıklama için [this excellent MDN article](https://developer.mozilla.org/en-US/docs/Web/SVG/Namespaces_Crash_Course) göz atabilirsiniz. 
2.  `viewBox` - SVG'nizin sınırlarını tanımlar. SVG'nizdeki öğelerin farklı noktalarının konumlarını tanımlamanız gerektiğinde, bu değerlere başvurulan yer burasıdır. Ayrıca, SVG'nin en/boy oranını ve orijinini de tanımlar. Yani oldukça önemli bir rolü vardır! Şekiller üzerindeki etkilerini anlamak için yukarıdaki örnekte farklı değerlerle oynamayı deneyin.
3.  `class`, `id` - Bu özellikler HTML'deki gibi çalışır. Bunları SVG'lerde kullanmak, bir öğeyi CSS veya JavaScript ile kolayca hedeflemenize veya bir öğeyi [`use` element](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use) ile yeniden kullanmanıza olanak tanır.
4. `<circle>`, `<rect>`, `<path>`, ve `<text>` gibi öğeler SVG ad alanı tarafından tanımlanır. Bunlar temel yapı taşlarımızdır. SVG ile son derece karmaşık görüntüler oluşturabilirsiniz, ancak bunlar genellikle sadece bir düzine veya daha az sayıda temel öğe kullanılarak oluşturulur. SVG öğelerinin tam listesini [here](https://developer.mozilla.org/en-US/docs/Web/SVG/Element) görebilirsiniz.
5.  Birçok SVG özelliği, örneğin `fill` ve `stroke`[changed in your CSS](https://css-tricks.com/svg-properties-and-css/) olabilir.

Yukarıdaki kodla oynayın ve neler olduğunu anlamaya çalışın. `viewBox` boyutlarını değiştirdiğinizde veya bir öğenin özniteliklerini değiştirdiğinizde neler olur?

### SVG'leri Gömmek

SVG'yi belgenize nasıl yerleştireceğinizi kararlaştırırken iki temel yaklaşım vardır: bağlantılı ve iç içe (inline).

SVG'leri bağlamak, temelde diğer herhangi bir görüntüyü bağlamak gibi çalışır. `<img>` gibi bir HTML görüntü öğesi kullanabilir veya CSS'nizde `background-image: url(./my-image.svg)` kullanarak bağlantı kurabilirsiniz. Hâlâ doğru bir şekilde ölçeklenirler, ancak SVG içeriği web sayfasından erişilemez.

Alternatif olarak, SVG'leri iç içe yerleştirebilirsiniz, yani içeriğini doğrudan web sayfasının koduna yapıştırabilirsiniz, onu bir görüntü olarak bağlamak yerine. Hâlâ doğru bir şekilde oluşturulacaktır, ancak SVG'nin özellikleri kodunuz tarafından görülebilecek, bu da size CSS veya JavaScript aracılığıyla görüntüyü dinamik olarak değiştirme imkanı sağlayacaktır.

SVG'leri iç içe yerleştirmek, onların tam potansiyelini ortaya çıkarmanıza izin verir, ancak bazı ciddi dezavantajlarla birlikte gelir: kodunuzu okunması daha zor hale getirir, sayfanızın önbelleğe alınabilirliğini azaltır ve büyük bir SVG ise geri kalan HTML'in yüklenmesini geciktirebilir.

SVG kodunu iç içe yerleştirmenin bazı dezavantajları, React gibi bir ön yüz JavaScript kütüphanesi veya webpack gibi bir yapı aracı öğrendikten sonra önlenebilir. Ancak şu anda bu konulara girmek için hazır değiliz, bu yüzden sadece bu bilgiyi zihninizin arka tarafında tutun.

Şu anda, kullanım durumunuza en iyi uyanı yapın. Bağlamak genellikle daha temiz ve daha basittir, bu nedenle HTML'nizle birlikte SVG kodunu ayarlamaya ihtiyacınız yoksa bunu tercih edin.

### Bilgi ölçme

Bu bölüm, bu dersi anladığınızı kontrol etmeniz için sorular içermektedir. Aşağıdaki soruları kendi kendinize yanıtlamakta zorlanıyorsanız, yanıtı bulmak için yukarıdaki materyali gözden geçirin.

-   [What is the `xmlns` attribute?](#anatomy-of-an-svg)
-   [What are some situations where you _wouldn't_ want to use SVG?](#drawbacks)
-   [What are the benefits of "inlining" your SVGs? What are the drawbacks?](#embedding-svgs)

### Ek kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

1.  SVG ikonları için birçok ücretsiz kütüphaneler vardır. Göz atmaya değer olanlar: [Material icons](https://fonts.google.com/icons), [Feather icons](https://feathericons.com/), [The Noun Project](https://thenounproject.com/term/free/), ve [Ionicons](https://ionic.io/ionicons).
2.  Eğer SVG'ler hakkında daha detaylı bilgiye sahip olmak isterseniz,  [MDN tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial) başlamak için iyi bir seçenek olacaktır.
3.  Kendi SVG'lerinizi oluşturmaya başlamak istiyorsanız, bir tür görsel düzenleyiciye ihtiyacınız olacaktır..
    1.  SVG etiketemeyi öğrenmek için [This is a great little SVG editor](https://yqnn.github.io/svg-path-editor). Bu web sitesi sadece XML'i göstermekle kalmaz, aynı zamanda SVG oluşturmak için kullandığınız "komutları" da gösterir. Ancak bu web sitesi genellikle karmaşık grafikler oluşturmak için tasarlanmamıştır.
    2.  Bu yüzden, [Inkscape](https://inkscape.org/) harika bir seçenek olacaktır ayrıca ücretsiz ve açık kaynak!
    3.  Gerçekten kendi SVG'lerinizi oluşturma konusunda kararlıysanız, [Affinity Designer](https://affinity.serif.com/designer/) gibi güçlü ücretli seçenekleri gözden geçirmek isteyebilirsiniz.  
4.  Eğer SVG'leri programatik olarak resim oluşturmak istiyorsanız, bunun için en az iki büyük, modern kütüphane bulunmaktadır: [snap.svg](http://snapsvg.io/) ve [SVG.js](https://svgjs.dev/docs/3.0/).  
5.  Veri görselleştirmesi için yıllardır standart olarak [d3](https://d3js.org/) kullanılmaktadır.  
6.  SVG'lerle yapabileceğiniz daha ileri düzeydeki bazı konularla ilgileniyorsanız, [this video on SVG animation](https://www.youtube.com/watch?v=UTHgr6NLeEw) ve [SVG Filters, and Why They're Awesome](https://www.smashingmagazine.com/2015/05/why-the-svg-filter-is-awesome/) göz atabilirsiniz!  
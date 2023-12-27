### Giriş

Bazıları size Grid ve Flexbox kullanımıyla ve birisinin diğerine üstün olup olmadığıyla ilgili bir tartışma olduğunu söyleyebilir. Gerçek çok daha basittir; bunlar birlikte çalışabilen birbirini tamamlayan araçlardır ve her birinin CSS dünyasında kendine has bir yeri vardır.

### Öğrenim çıktıları

Bu dersin sonunda şunları yapabiliyor olmalısınız:

* Grid yerine Flexbox'ı ne zaman kullanmak isteyebileceğinizi bilmek,
* Flexbox yerine Grid'i ne zaman kullanmak isteyebileceğinizi bilmek,
* İkisini beraber ne zaman kullanmak isteyebileceğinizi bilmek.

### İçerik öncelikli tasarım vs düzen öncelikli tasarım

Grid ve Flexbox arasında seçim yapabilmenin yolu tasarımınızın içerikten mi yoksa düzenden mi başladığını dikkate almaktır.

İçerik Öncelikli Tasarımda, içeriğin nasıl olması gerektiğinin netliğiyle başlarsınız ve düzen buna göre oluşturulur. Bu Flexbox'ı kullanmak için harika bir fırsattır. Onun esnek yapısı size, mantıksal kurallar yoluyla nesnelerin *davranışlarını* kontrol etmenizi sağlar. Onların nasıl büyüdükleri, küçüldükleri, onların ideal boyutları ve birbirlerine olan konumları; bunların hepsi düzeni dinamik yapar. Flexbox size onun içerikleri üzerinde kontrol verirken, ortaya çıkan son düzen bu kontrolün bir sonucudur. Flex konteynerinin boyutlarına bağlı olarak genel düzen çok değişebilir.

Düzen Öncelikli Tasarımda, parçaların nasıl düzenleneceğine karar verirsiniz ve sonrasında içeriği doldurursunuz. Bu Grid'in öne çıktığı durumdur. Grid satır ve sütun parçalarının tanımlanması size düzenle ilgili tam bir kontrol sağlar. Grid içerisinde içerik sadece belirli veya belirsiz parçaların boşluklarını doldurabilir. Bu yüzden konteynerın genel yapısının nasıl olması gerektiği hakkında bir fikriniz varsa Grid doğru bir seçim olacaktır.

İçerik ya da Düzen Öncelikli Tasarım bizi sadece Flexbox veya Grid kullanmaya zorlamaz! Grid kullanarak - çoğu kişinin Flexbox ile oluşturduğu - tek boyutlu bir nesne kümesini oluşturmayı deneyelim.

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="css,result" data-slug-hash="mdByJRV" data-editable="true" data-user="TheOdinProjectExamples" style={{"height":"300px","boxSizing":"border-box","display":"flex","alignItems":"center","justifyContent":"center","border":"2px solid","margin":"1em 0","padding":"1em"}}>
  <span>TheOdinProject(<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) 
    tarafından (<a href="https://codepen.io">CodePen'de</a>) hazırlanan 
    <a href="https://codepen.io/TheOdinProjectExamples/pen/mdByJRV"> 1-Dimensional Grid | CSS Grid</a> adlı ingilizce örneğe bakın.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Çalışıyor ve kesinlikle *güzel* gözüküyor! Ama ileride bu kutuları taşımak istediğimizi düşünelim ya da örnek olarak, üçüncü kutunun ikinci bir satırda genişlemesini isteyelim ki kutular bir satıra sığmak için çok küçülmesinler. Bunların ikisi de Grid ile *mümkün*. Ama düzenin kontrolü bizim için öncelikli değilse Flexbox daha sezgisel ve bu işe uygun olacaktır.

### Flexbox ve Grid'i beraber kullanmak
Eğer tek boyutlu bir içeriğiniz varsa Flexbox bu içeriklerin Flex konteyneri içerisinde nasıl pozisyonlandırılacağı hakkında daha kolay bir kontrol sağlar. Eğer içeriği çift boyutlu bir düzen içerisinde daha kesin olarak yerleştirmek istiyorsanız Grid kullanmak daha kolay olacaktır.

Diyelim ki genel düzeninizin Grid olmasını ama nesneleriniz flex nesnesi gibi davranmasını istiyorsunuz. Bu sayede, grid nesneleri Grid'in sağladığı yerleştirme ile iki boyutlu düzende daha kesin olarak hareket edecek; aynı zamanda da grid nesnelerinin içerisindeki içeriğin ise Flex ile daha özgür bir şekilde hareket edecektir. CSS-Tricks'deki bu örneği göz at:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="css,result" data-slug-hash="vYeEOxN" data-editable="true" data-user="TheOdinProjectExamples" style={{"height":"300px","boxSizing":"border-box","display":"flex","alignItems":"center","justifyContent":"center","border":"2px solid","margin":"1em 0","padding":"1em"}}>
  <span>TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) 
    tarafından (<a href="https://codepen.io">CodePen'de</a>) hazırlanan 
    <a href="https://codepen.io/TheOdinProjectExamples/pen/vYeEOxN">Combine Grid and Flexbox</a> adlı ingilizce örneğe bakın.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Kapanış görüşü
Bu ders Flexbox ve Grid kullanımıyla ilgili "doğru" ya da "yanlış" bilgiler değil, tavsiyeler bulunduruyor. Sonuçta, geliştiricinin kişisel tercihlerine ve verilen işle ilgili hangisinin daha kolay hissettirdiğine bağlıdır. Bu noktada bu iki araç hakkında ve beraber ya da birisinin yerine diğerinin nasıl kullanabileceği hakkında bilginiz var. Flexbox ve Grid'i öğrenmenin en iyi yolu ikisiyle de bolca proje geliştirme ve farklı şartlar altında hangisini kullanabileceğiniz hakkında kendi düşüncelerinizi oluşturmaktır. 

### Ödev

<div class="lesson-content__panel" markdown="1">

1. Eğer hala okumadıysanız, daha önce bahsedilen [CSS-Tricks'in ingilizce makalesini](https://css-tricks.com/css-grid-replace-flexbox/) okuyun.

2. Grid'in farklı kullanım gerekliliklerine bakmak için [Wes Bos'un ingilizce videosunu](https://www.youtube.com/watch?v=HYji_V2aYa0) izleyin.

3. Grid ve Flexbox'un nerede ve nasıl kullanılmasını daha derin incelemek için [bu](https://webdesign.tutsplus.com/articles/flexbox-vs-css-grid-which-should-you-use--cms-30184) ingilizce makaleyi okuyun.
</div>

### Bilgi ölçme

Bu bölüm, bu dersi anladığınızı kontrol etmeniz için sorular içermektedir. Aşağıdaki soruları kendi kendinize yanıtlamakta zorlanıyorsanız, yanıtı bulmak için yukarıdaki materyali gözden geçirin.

- [Grid yerine Flexbox'ı ne zaman kullanabilirsiniz?](#content-first-vs-layout-first-design)
- [Flexbox yerine Grid'i ne zaman kullanabilirsiniz?](#content-first-vs-layout-first-design)
- [Bu iki aracı ne zaman birlikte kullanabilirsiniz?](#combining-flexbox-and-grid)

### Ek kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

- MDN, Grid'in diğer düzen metotlarıyla olan ilişkisi hakkında derinlemesine bir ingilizce makale yazdı, [buradan okuyabilirsiniz](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout).
- Görererek daha kolay öğrenen biriyseniz, [Flexbox30](https://www.samanthaming.com/flexbox30/) hızlı görsel referans için harika bir ingilizce kaynaktır.

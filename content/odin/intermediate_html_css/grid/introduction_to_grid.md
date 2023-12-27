### Giriş

Önümüzdeki birkaç ders boyunca CSS Grid'i ele alacağız ve sayfa düzenlerini çok daha kolaylaştıracağız. Öncelikle Flexbox'a (Flexbox'ı hatırladınız mı!?) tekrardan hızlıca bir göz atacağız ve sonrasında Grid'i öğreneceğiz.

Önümüzdeki dersler size grid'in nasıl oluşturulduğunu, grid öğelerini konumlandırmayı ve bazı gelişmiş özelliklerin nasıl kullanıldığını gösterecek. Sonrasında Flexbox ve Grid arasında daha derin bir inceleme yapacağız. Nihayetinde Grid kullanarak bir gösterge paneli projesi geliştirmeye yönelik çalışıyoruz.

### Öğrenim Çıktıları

Bu dersin sonunda şunları yapabiliyor olmalısınız:

- Flexbox ve Grid arasındaki temelleri karşılaştırabilme.
- Flexbox yerine Grid kullanabileceğimiz bir durumu açıklayabilme.

### Flex'e geri bakış

Temel Bilgiler kursunda Flexbox hakkında çok şey öğrendiniz. Eğer Flex'i yol boyunca orada burada kullandıysanız, bu bölüm sizin için Grid'e giriş yapmadan önce hızlı bir hatırlatıcı olacak. Eğer Flex konusunda tamamen kaybolduysanız [Flex](https://www.theodinproject.com/lessons/foundations-introduction-to-flexbox) derslerini tekrar etmek hızlanmak için yardımcı olabilir.

Flex dersleri, öğelerin iki [eksen](https://www.theodinproject.com/lessons/foundations-axes) üzerinde konumlandırmasını ve [hizalandırmasını](https://www.theodinproject.com/lessons/foundations-alignment) ele aldı. Ayrıca flex öğelerinizde [grow, shrink veya boyut değiştirme](https://www.theodinproject.com/lessons/foundations-growing-and-shrinking) özelliklerinin nasıl kullanıldığını öğrendiniz. Öğeler flex ile büyüyebilir veya küçülebilir, işte Flexbox'ın güzelliği bu.

Hatırlarsınız ki, güzel bir satır flex öğesini, bu şekilde hizalayabilirsiniz:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="css,result" data-slug-hash="XWeJbRy" data-editable="true" data-user="TheOdinProjectExamples" style={{"height":"300px","boxSizing":"border-box","display":"flex","alignItems":"center","justifyContent":"center","border":"2px solid","margin":"1em 0","padding":"1em"}}>
  <span>See the Pen <a href="https://codepen.io/TheOdinProjectExamples/pen/XWeJbRy">
  Single Row | CSS Flexbox</a> by TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Veya bir sütunu bu şekilde:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="css,result" data-slug-hash="MWEYwoX" data-editable="true" data-user="TheOdinProjectExamples" style={{"height":"300px","boxSizing":"border-box","display":"flex","alignItems":"center","justifyContent":"center","border":"2px solid","margin":"1em 0","padding":"1em"}}>
  <span>See the Pen <a href="https://codepen.io/TheOdinProjectExamples/pen/MWEYwoX">
  Single Column | CSS Flexbox</a> by TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Flex tek boyutlu düzenler için, float'lara veya CSS kurnazlıklarına gerek kalmadan, bize öğelerimizi hizalamamız için kullanışlı bir araç sunar.

İki boyutlu düzenler için, flex öğelerinizi bir sonraki satıra kaydırmanızı sağlayan `flex-wrap` hakkında biraz bilgi edinmiştiniz. Bu, başka bir satıra sarılan bir satır ile veya başka bir sütuna sarılan bir sütun ile yapılabilir.

Kart Düzeni egzersizini çözerken ne kadar eğlenmiştiniz, hatırlıyor musunuz?

[![flex-exercise-desired-outcome.png](https://i.postimg.cc/vZ81HMkB/flex-exercise-desired-outcome.png)](https://github.com/TheOdinProject/css-exercises/tree/main/flex/07-flex-layout-2)

Sinir bozucuydu biliyoruz, ama bu konunun bir parçası. Flexbox, satır ve sütunlardan oluşan bir düzen oluşturmanıza olanak tanısa da bu her zaman kolay değil.

Ama iki boyutlu bir kart düzeni oluşturmak CSS Grid kullanarak çok daha basit olacaktır:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="css,result" data-slug-hash="KKXwpZR" data-editable="true" data-user="TheOdinProjectExamples" style={{"height":"300px","boxSizing":"border-box","display":"flex","alignItems":"center","justifyContent":"center","border":"2px solid","margin":"1em 0","padding":"1em"}}>
  <span>See the Pen <a href="https://codepen.io/TheOdinProjectExamples/pen/KKXwpZR">
  2D Layout | CSS Grid</a> by TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Grid nedir?

Grid, CSS için daha yeni bir modül olmasına rağmen, bu düzen aracı uzun süredir geliştirilme aşamasında. Eğlenceli bir bilgi, CSS'nin yaratıcısı olan Dr. Bert Bos (Wes Bos ile hiçbir ilişkisi olmayan) bu düzen modeli üzerinde 1996 yılında çalışmaya başladı. Bu fikir, gazeteler ve dergiler gibi diğer medya biçimlerinde kullanılan grid benzeri düzenlerden ilham alınarak ortaya çıktı. Yıllar süren detaylı gösterimler ve geliştirmelerin ardından, CSS Grid nihayet 2017 yılında tüm büyük tarayıcılara tanıtıldı.

Yukarıda gösterildiği gibi, Grid genellikle öğelerin iki boyutlu düzen içinde kolayca yerleştirilmesi için övülür. Ancak Grid, tek boyutlu düzenler için de kullanılabilir. Geliştiriciler için bir avantajı, yalnızca bir sıra öğe ile başladıklarında, sonrasında basitçe ek sıralar ekleyebilmeleridir.

Flex ve Grid arasında birçok benzerlik fark edeceksiniz. İkisi de çocuk öğeleri olan ana konteynerler kullanır. Hizalama ve konumlandırma için benzer özellik adlarına sahiptirler. Ancak her iki modül arasında nasıl kullanılması gerektiği konusunda farklılıklar ve görüşlerle karşılaşacaksınız. Örneğin, Flex öğelerinizi boyut olarak eşit hale getirmekte zorlanıyorsanız, Grid bu tür düzenlemeleri çok daha kolay hale getirebilir.

Eski kaynakları gözden geçirirken, Flex ve Grid arasındaki farklılıkların bu modüller güncellendikçe değişebileceğini unutmayın. CSS Grid için önemli özelliklerden biri, bir sonraki dersimizde ele alacağımız gap özelliğinin kullanımıydı. Bu özellik başlangıçta yalnızca Grid için mevcuttu, ancak şimdi Flex'te de destekleniyor.

CSS Grid'in Flexbox'un yerini almak için geldiğini düşünen bazı insanlar olsa da, bu derslerin sonunda Grid'in sadece başka bir araç olduğunu öğreneceksiniz. Aslında, bu modüllerin her birinin kendi kullanım durumları olmasıyla kalmayıp ve Flex ve Grid'i bir araya getirmenizin faydalı olabileceğini göreceksiniz. Ancak, bunların hepsini son dersimizde ele alacağız. İlk olarak gerçekten nasıl bir grid oluşturacağınızı öğreneceksiniz!

### Bilgi Ölçme

Bu bölüm, sizin bu dersi ne kadar anladığınızı kontrol etmek için sorular içerir. Aşağıdaki soruları kendi başınıza cevaplamakta zorlanıyorsanız, cevapları bulmak için yukarıdaki materyali gözden geçirin.

- [Flex'i iki boyutlu düzende nasıl kullanabilirsin?](#flexe-bir-geri-bakış)
- [CSS Grid neden tanıtıldı?](#grid-nedir)
- [Konteynerde eşit boyutlu öğeleri kolayca oluşturmak için hangi CSS düzen modülünü kullanırsınız?](#grid-nedir)

### Ek Kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

- Flexbox vs CSS Grid kullanım durumlarının görsel sunumu için [Flexbox vs. CSS Grid — Which is Better?](https://www.youtube.com/watch?v=hs3piaN4b5I) izleyin.
- CSS Tricks'ın Flex ve Grid arasındaki farklar hakkında [hızlı özetini](https://css-tricks.com/quick-whats-the-difference-between-flexbox-and-grid/) okuyun.
- [CSS Grid'in hikayesine](https://alistapart.com/article/the-story-of-css-grid-from-its-creators/) göz atın.

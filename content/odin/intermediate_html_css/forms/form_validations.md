### Giriş

Doğrulamalar, kullanıcıların bir girişe hangi verileri girebileceğini belirleyen belirli kısıtlamaları veya kuralları ayarlamamıza olanak tanır. Kullanıcı, kuralları ihlal eden veri girdiğinde, bir mesaj görünecek ve girilen veride neyin yanlış olduğu ve nasıl düzeltilmesi gerektiği konusunda geri bildirim sağlayacaktır.

Doğrulamalar, iyi tasarlanmış formların önemli bir bileşenidir. Backend sistemimizi yanlış veri alınmasından korumaya yardımcı olurlar ve kullanıcılarımızla etkileşimde bulunma deneyimini mümkün olduğunca basit hale getirmeye yardımcı olurlar.

Bu ders, HTML formlarıyla kullanabileceğiniz bazı yerleşik doğrulamaları keşfedecek. Ayrıca, CSS ile doğrulamaların nasıl biçimlendirileceğine de gireceğiz.

### Öğrenme çıktıları

Bu dersin sonunda şunları yapabilmelisiniz:

- Form doğrulamalarının ne olduğunu açıklamak
- Temel yerleşik HTML doğrulamalarından bazılarını nasıl kullanacağınızı bilmek
- Özel doğrulamaları nasıl oluşturacağınızı bilmek

### Gerekli doğrulama

Çoğu zaman, formu göndermeden önce belirli alanların doldurulmuş olmasını isteyeceğiz, örneğin, bir giriş formundaki e-posta ve şifre.

Bir alanı zorunlu hale getirmek için, ona sadece `required` niteliğini ekleriz:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="vYeZGzB" data-preview="true" data-user="TheOdinProjectExamples" style={{"height":"300px","boxSizing":"border-box","display":"flex","alignItems":"center","justifyContent":"center","border":"2px solid","margin":"1em 0","padding":"1em"}}>
<span>See the Pen <a href="https://codepen.io/TheOdinProjectExamples/pen/vYeZGzB">
forms-required-validation</a> by TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

İyi bir kullanıcı deneyimi sağlamak ve erişilebilirlik kurallarını karşılamak için her zaman hangi alanların zorunlu olduğunu belirtmeliyiz. Bu genellikle örneklediğimiz gibi, zorunlu alan etiketine bir yıldız (\*) ekleyerek yapılır.

### Metin uzunluğu doğrulamaları

Bazı durumlarda, kullanıcılardan bir alana belirli bir metin miktarını girmelerini istemek isteyebiliriz. Bu doğrulamaları kullanmanın gerçek dünya örnekleri, Twitter'ın eski durum alanındaki 140 karakterlik sınırlama veya bir kullanıcı adı alanında minimum ve maksimum uzunluk kısıtlamaları gibi olabilir.

#### Minimum uzunluk doğrulaması

To add the minimum length validation, we give the form control a `minlength` attribute with an integer value that represents the minimum number of characters we want to allow in the form control:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="WNZOwgp" data-preview="true" data-user="TheOdinProjectExamples" style={{"height":"300px","boxSizing":"border-box","display":"flex","alignItems":"center","justifyContent":"center","border":"2px solid","margin":"1em 0","padding":"1em"}}>
  <span>CodePen tarafından yapılan <a href="https://codepen.io/TheOdinProjectExamples/pen/WNZOwgp">forms-min-length-validation</a> 
  örneği TheOdinProjectExamples (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) tarafından hazırlandı ve 
  <a href="https://codepen.io">CodePen</a>'de paylaşıldı.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

"Tweet" düğmesine tıklayarak metin alanına üç karakterden az giriş yapmayı deneyin ve doğrulamayı görmek için aşağıdaki adımları izleyin.

#### Maksimum uzunluk doğrulaması

Maksimum uzunluk doğrulaması eklemek için, form kontrolüne, form kontrolünde izin vermek istediğimiz maksimum karakter sayısını temsil eden bir tamsayı değeri içeren bir `maxlength` niteliği veririz:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="zYEzqJJ" data-preview="true" data-user="TheOdinProjectExamples" style={{"height":"300px","boxSizing":"border-box","display":"flex","alignItems":"center","justifyContent":"center","border":"2px solid","margin":"1em 0","padding":"1em"}}>
  <span>CodePen tarafından yapılan <a href="https://codepen.io/TheOdinProjectExamples/pen/zYEzqJJ">forms-maximum-length-validations</a> 
  örneği TheOdinProjectExamples (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) 
  tarafından hazırlandı ve <a href="https://codepen.io">CodePen</a>'de paylaşıldı.</span>

</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Maksimum uzunluk doğrulaması ile tarayıcı, kullanıcıları maksimum uzunluk niteliği değerinden daha fazla karakter girmekten engelleyecektir. Bu örnekte bunu kendiniz deneyin.

#### Doğrulamaları Birleştirme

HTML, bir form kontrolüne istediğimiz kadar doğrulama uygulamamıza izin verir. Örneğin, tweet metin alanımıza hem `minlength` hem de `maxlength` doğrulamalarını verebiliriz:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="vYeZGVY" data-preview="true" data-user="TheOdinProjectExamples" style={{"height":"300px","boxSizing":"border-box","display":"flex","alignItems":"center","justifyContent":"center","border":"2px solid","margin":"1em 0","padding":"1em"}}>
  <span>CodePen tarafından yapılan <a href="https://codepen.io/TheOdinProjectExamples/pen/vYeZGVY">forms-combining-validations</a> 
  örneği TheOdinProjectExamples (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) tarafından hazırlandı ve 
  <a href="https://codepen.io">CodePen</a>'de paylaşıldı.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

This gives us much more scope to control what users input.

Bu, kullanıcıların girdilerini kontrol etme konusunda çok daha fazla kapsama sahip olmamıza olanak tanır.

### Sayı aralığı doğrulamaları

Metin tabanlı form kontrollerinin uzunluğunu kontrol etmeye ihtiyaç duyduğumuz gibi, sayı tabanlı form kontrollerine girilebilecek değerlerin aralığını kontrol etmek istediğimiz birçok durum olacaktır.

Bunu, form kontrolüne girilen değerin alt ve üst sınırlarını belirlememize olanak tanıyan `min` ve `max` nitelikleri ile yapabiliriz.
`min` ve `max` nitelikleri, yalnızca sayı tabanlı form kontrolleriyle, örneğin sayı, tarih ve saat girişleri gibi çalışır.
Desteklenen öğelerin tam listesini [MDN's documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/max#syntax) inceleyebilirsiniz.

Bu doğrulamaları kullanmanın bazı gerçek dünya kullanım örnekleri, bir ürün sipariş formundaki miktarı sınırlamak veya bir uçuş rezervasyon formundaki yolcu sayısını belirlemek olabilir.

#### Minimum değer doğrulaması

Minimum değer doğrulaması eklemek için, form kontrolüne, form kontrolünün kabul etmesini istediğimiz minimum sayıyı temsil eden bir tamsayı değeri içeren bir `min` niteliği veririz:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="poWwyxd" data-preview="true" data-user="TheOdinProjectExamples" style={{"height":"300px","boxSizing":"border-box","display":"flex","alignItems":"center","justifyContent":"center","border":"2px solid","margin":"1em 0","padding":"1em"}}>
  <span>CodePen tarafından yapılan <a href="https://codepen.io/TheOdinProjectExamples/pen/poWwyxd">forms-min-validation</a> örneği TheOdinProjectExamples 
  (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) tarafından hazırlandı ve <a href="https://codepen.io">CodePen</a>'de paylaşıldı.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Formu 0 miktarında göndermeyi deneyerek doğrulamayı gözlemleyebilirsiniz.

#### Maksimum değer doğrulaması

Maksimum değer doğrulaması eklemek için, form kontrolüne, form kontrolünün kabul etmesini istediğimiz maksimum sayıyı temsil eden bir tamsayı değeri içeren bir `max` niteliği veririz:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="XWegdxB" data-preview="true" data-user="TheOdinProjectExamples" style={{"height":"300px","boxSizing":"border-box","display":"flex","alignItems":"center","justifyContent":"center","border":"2px solid","margin":"1em 0","padding":"1em"}}>
  <span>CodePen tarafından yapılan <a href="https://codepen.io/TheOdinProjectExamples/pen/XWegdxB">forms-max-validation</a> 
  örneği TheOdinProjectExamples (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) tarafından hazırlandı ve 
  <a href="https://codepen.io">CodePen</a>'de paylaşıldı.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Yedi yolcu ile formu göndermeyi deneyerek doğrulamayı gözlemleyebilirsiniz.

### Desen doğrulamaları

Kullanıcılardan doğru bilgileri almak için verilerin belirli bir modele uymasını sağlamak isteyeceğiz.
Gerçek dünya uygulamaları, bir kredi kartı numarasının veya posta kodunun doğru formatta olup olmadığını kontrol etme gerekliliğini içerebilir.

Desen doğrulaması eklemek için, form kontrolüne, [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) olarak değeri olan bir `pattern` niteliği veririz. Örneğimizde desen doğrulamasını kullanarak bir ABD posta kodunun doğru formatta olup olmadığını kontrol ediyoruz (5 sayıdan sonra isteğe bağlı bir tire ve 4 daha fazla sayı):

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="YzrQqRK" data-preview="true" data-user="TheOdinProjectExamples" style={{"height":"300px","boxSizing":"border-box","display":"flex","alignItems":"center","justifyContent":"center","border":"2px solid","margin":"1em 0","padding":"1em"}}>
  <span>CodePen tarafından yapılan <a href="https://codepen.io/TheOdinProjectExamples/pen/YzrQqRK">forms-pattern-basic-validation</a> örneği TheOdinProjectExamples 
  (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) tarafından hazırlandı ve <a href="https://codepen.io">CodePen</a>'de paylaşıldı.</span>
</p>

<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Forma yanlış bir posta kodu girdikten sonra göndermeye çalışmak, tarayıcıda "Lütfen istenen formata uyun" şeklinde bir doğrulama hatasını görüntüler. Bu, sorunu nasıl düzelteceğimizi iletmemesi nedeniyle çok kullanışlı değildir.

Kullanıcılara girmeleri gereken beklenen desenin bir örneğini göstermek için `placeholder` niteliğini kullanmak iyi bir uygulamadır:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="LYzLNXv" data-preview="true" data-user="TheOdinProjectExamples" style={{"height":"300px","boxSizing":"border-box","display":"flex","alignItems":"center","justifyContent":"center","border":"2px solid","margin":"1em 0","padding":"1em"}}>
  <span>CodePen tarafından yapılan <a href="https://codepen.io/TheOdinProjectExamples/pen/LYzLNXv">forms-pattern-with-placeholder-validation</a> 
  örneği TheOdinProjectExamples (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) tarafından hazırlandı ve <a href="https://codepen.io">
  CodePen</a>'de paylaşıldı.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Desen niteliği sadece `<input>` öğelerinde kullanılabilir. Bazı giriş öğeleri zaten belirli bir modele uyan verileri doğrular. Örneğin, e-posta giriş alanı geçerli bir e-posta girişi yapıldığını kontrol eder ve URL giriş öğesi, URL'nin http veya https ile başladığını kontrol eder:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="eYGRZbK" data-preview="true" data-user="TheOdinProjectExamples" style={{"height":"300px","boxSizing":"border-box","display":"flex","alignItems":"center","justifyContent":"center","border":"2px solid","margin":"1em 0","padding":"1em"}}>
  <span>CodePen tarafından yapılan <a href="https://codepen.io/TheOdinProjectExamples/pen/eYGRZbK">forms-built-in-pattern-validations</a> örneği TheOdinProjectExamples 
  (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) tarafından hazırlandı ve <a href="https://codepen.io">CodePen</a>'de paylaşıldı.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Doğrulama Stilleri

Geçmiş veya başarısız olan doğrulamalara sahip form kontrol öğelerini hedefleyebiliriz. 

Bu amaçla, daha önce incelediğimiz e-posta ve web sitesi örneklerini kullanacağız:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="dyVRMwx" data-preview="true" data-user="TheOdinProjectExamples" style={{"height":"300px","boxSizing":"border-box","display":"flex","alignItems":"center","justifyContent":"center","border":"2px solid","margin":"1em 0","padding":"1em"}}>
  <span>CodePen tarafından yapılan <a href="https://codepen.io/TheOdinProjectExamples/pen/dyVRMwx">forms-styling-validations</a> örneği TheOdinProjectExamples 
  (a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) tarafından hazırlandı ve <a href="https://codepen.io">CodePen</a>'de paylaşıldı.</span>

</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

İlk olarak, herhangi bir geçerli girişi hedefleyip onlara yeşil bir kenarlık veriyoruz. E-posta ve URL giriş öğelerimiz, zorunlu alanlar olmadığı ve geçerli oldukları için başlangıçta yeşil bir kenarlığa sahiptir.

Bir alan geçersiz olduğunda, ona kırmızı bir kenarlık veriyoruz. Nasıl göründüğünü görmek için geçersiz bir e-posta adresi ve URL girmeyi deneyin.

### Çıkarım

Yerleşik doğrulamalar, kullanıcıların doğru verileri girmesini sağlama konusunda oldukça etkilidir. Hızlı ve kolay bir şekilde eklenirler. Ancak, kendi sınırlamalarına sahiptirler.

Bazen, yerleşik doğrulamaların başa çıkamayacağı doğrulamaları eklemeniz gerekebilir. Örneğin, bir şifre girişi ile şifre onay girişinin aynı değere sahip olduğunu doğrulama veya bir kullanıcı adının zaten alınıp alınmadığını kontrol etme gibi durumlar. Ayrıca, doğrulama mesajlarını ve içerdikleri içeriği biçimlendirme konusunda sınırlıyız.

Bu durumda, özel doğrulamalar yapmak için JavaScript ve CSS kullanmak gerekecek. JavaScript ile doğrulama nasıl yapılır konusuna gelecekteki bir derste daha detaylı bir şekilde değineceğiz.

Ayrıca, istemci tarafındaki doğrulamaların kullanıcıların doğru verileri girmesini garantileme konusunda tek başına bir çözüm olmadığını belirtmek önemlidir. Sistemimize gelen kullanıcı verilerinin bütünlüğünü sağlamak için aynı zamanda sunucu tarafı doğrulamalarının da olması gerekmektedir. Bu doğrulama türünü müfredatın ilerleyen bölümlerinde ele alacağız.

### Ödev

<div class="lesson-content__panel" markdown="1">

1. [MDN's Client-Side Form Validation Guide](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)'ı okuyun ve takip edin.
   - "Validating forms using JavaScript" bölümünü atlayın. Bu, gelecekteki bir dersimizde ele alınacaktır.

2. SitePoint'in [Complete Guide to HTML Forms and Constraint Validation Guide](https://www.sitepoint.com/html-forms-constraint-validation-complete-guide/) adlı kaynağı inceleyin. "JavaScript and the Constraint Validation API" ve "Creating a Custom Form Validator" bölümlerini atlayabilirsiniz.

3. Silo Creativo'nun makalesi olan [Improving UX in forms](https://www.silocreativo.com/en/css-rescue-improving-ux-forms/) okuyun.

</div>


### Bilgi ölçme

- [What does the <code>required</code> validation do?](#required-validation)
- [What validations can you use for checking text length?](#text-length-validations)
- [How can you validate the minimum and maximum of numeric inputs?](#number-range-validations)
- [What can you use the pattern validation for?](#pattern-validations)
- [What pseudo CSS selectors are available for styling valid and invalid inputs?](#styling-validations)

### Ek kaynaklar

- [HTML5Pattern](https://www.html5pattern.com/)'ı ziyaret ederek, yaygın olarak kullanılan desen düzenli ifadelerinin bir listesine göz atabilirsiniz.
- [this Twitter thread](https://threadreaderapp.com/thread/1400388896136040454.html) inceleyerek, form doğrulama kullanıcı deneyimi için yapılması ve yapılmaması gerekenleri öğrenebilirsiniz.
- Form doğrulama tasarımı için [10 Guidelines](https://www.nngroup.com/articles/errors-forms-design-guidelines/)ye göz atabilirsiniz.
- [Learn Regex: A Beginner’s Guide](https://www.sitepoint.com/learn-regex/), regex desenlerinin nasıl oluşturulduğunu anlamak ve bunları oluşturmak için harika bir araç kullanımını gösteren kaynaklardan biridir.
- [Demystifying Regex with Practical Examples](https://www.sitepoint.com/demystifying-regex-with-practical-examples/), regex'in nasıl çalıştığını sadece kopyala-yapıştır yapmak yerine detaylı bir şekilde anlamanız için pratik örnekler içerir.
- Regex hakkında başka bir yardımcı kaynak ise MDN'nin [regular expression syntax cheatsheet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet)'dur. Bu kılavuz, düzenli ifadelerin sözdizimini daha ayrıntılı bir şekilde açıklamaktadır.
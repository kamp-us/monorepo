### Giriş

Tüm HTML belgelerinin kullanılmadan önce yerine konması gereken temel bir yapı veya şablonu vardır. Bu derste bu şablonun farklı bölümlerini keşfedecek ve nasıl bir araya geldiğini göreceğiz.

### Ders özeti

Bu bölüm bu derste öğreneceğiniz konuların genel bir özetini içerir.

* Bir HTML belgesi için temel şablonu nasıl yazacağınızı öğrenme
* HTML belgelerini tarayıcınızda nasıl açacağınızı öğrenme

### Bir HTML dosyası oluşturma

HTML şablonunu göstermek için öncelikle çalışacağımız bir HTML dosyasına ihtiyacımız var.

Bilgisayarınızda yeni bir klasör oluşturun ve adını `html-boilerplate` olarak belirleyin. Bu klasörün içinde yeni bir dosya oluşturun ve adını `index.html` olarak belirleyin.

Muhtemelen zaten birçok farklı dosya türüne aşinasınızdır, örneğin doc, pdf ve resim dosyaları.

Bilgisayara HTML dosyası oluşturmak istediğimizi bildirmek için dosya adını `.html` uzantısıyla tamamlamamız gerekiyor, bu da `index.html` dosyasını oluştururken yaptığımız gibi.

Değerli bir not olarak belirtmek gerekir: HTML dosyamıza `index` adını verdik. Web sitelerimizin anasayfasını içerecek HTML dosyasını her zaman `index.html` olarak adlandırmalıyız. Bunun nedeni, web sunucularının, kullanıcıların web sitelerimize giriş yaptığında varsayılan olarak bir index.html sayfası aramasıdır - ve böyle bir sayfanın olmaması büyük sorunlara neden olacaktır.

### DOCTYPE

Her HTML sayfası bir doctype bildirimiyle başlar. Doctype'nin amacı tarayıcıya belgeyi nasıl işleyeceğini söylemek için hangi HTML sürümünü kullanması gerektiğini bildirmektir. En son HTML sürümü HTML5'tir ve bu sürüm için doctype bildirimi basitçe `<!DOCTYPE html>` şeklindedir.

Eski HTML sürümleri için doctype bildirimleri biraz daha karmaşıktı. Örneğin HTML4 için doctype bildirimi şu şekildedir:

~~~html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
~~~

Ancak muhtemelen eski bir HTML sürümünü kullanmak istemeyeceğiz ve her zaman `<!DOCTYPE html>` kullanacağız.

Önceden metin düzenleyicinizde oluşturduğunuz `index.html` dosyasını açın ve `<!DOCTYPE html>` ifadesini tam olarak ilk satıra ekleyin.

### HTML öğesi

Doctype bildirimini yaptıktan sonra bir `<html>` öğesi sağlamamız gerekiyor. Bu belgenin kök öğesi olarak bilinen şeydir, yani belgedeki diğer her öğe, onun alt öğesi olacaktır.

Bu daha sonra JavaScript kullanarak HTML'yi manipüle etmeyi öğrendiğimizde daha da önem kazanır. Şimdilik sadece HTML öğesinin her HTML belgesinde yer alması gerektiğini bilin.

`index.html` dosyasına geri dönelim ve `<html>` öğesini açılış ve kapanış etiketleriyle ekleyelim, şu şekilde:

~~~html
<!DOCTYPE html>
<html lang="en">
</html>
~~~

#### `lang` özelliği nedir?

`lang`, o öğenin metin içeriğinin dilini belirtir. Bu özellik web sayfasının erişilebilirliğini geliştirmek için kullanılır. Yardımcı teknolojilerin; örneğin ekran okuyucuların, dilin doğru bir şekilde telaffuz edilmesi için dilinize göre uyarlanmasına olanak tanır.

### Head öğesi

`<head>` öğesi web sayfalarımız **hakkında** önemli meta bilgilerini ve web sayfalarımızın tarayıcıda doğru bir şekilde görüntülenmesi için gereken şeyleri yerleştirdiğimiz yerdir.
`<head>` içinde, web sayfasında içerik gösteren herhangi bir öğe kullanmamalıyız.

#### Meta öğesi

Web sayfasının karakter kümesi kodlaması için her zaman head öğesinde `<meta charset="utf-8">` meta etiketine sahip olmalıyız.

Kodlamayı ayarlamak çok önemlidir çünkü bu web sayfasının tarayıcıda farklı dillerden gelen özel sembollerin ve karakterlerin doğru bir şekilde görüntülenmesini sağlar.

#### Başlık öğesi

HTML belgesinin `head` kısmında her zaman yer alması gereken başka bir öğe, `title` öğesidir:

 `<title>My First Webpage</title>`

`title` öğesi, web sayfalarına insanlar tarafından okunabilir bir başlık vermek için kullanılır ve bu başlık web sayfamızın tarayıcı sekmesinde görüntülenir.

Eğer bir `title` öğesi eklemeseydik, web sayfasının başlığı varsayılan olarak dosya adı olurdu. Bizim durumumuzda bu `index.html` olurdu ve kullanıcılar için çok anlamlı olmayan bir başlık olurdu; kullanıcının birçok tarayıcı sekmesi açık ise web sayfamızı bulmak oldukça zorlaşırdı.

HTML belgesinin `head` kısmına yerleştirilebilecek birçok başka öğe bulunmaktadır. Ancak şu anda burada ele aldığımız iki öğeyi bilmek önemlidir. Geri kalan eğitim sürecinde `head` kısmına yerleştirilecek daha fazla öğeyi tanıtacağız.

`index.html` dosyamıza geri dönelim ve içinde meta öğesi ve bir başlık içeren bir `head` öğesi ekleyelim. `head` öğesi, HTML öğesinin içinde yer almalı ve açılış `<html>` etiketi altındaki ilk öğe olmalıdır.

~~~html
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Webpage</title>
  </head>
</html>
~~~

### Body öğesi

HTML şablonunu tamamlamak için gereken son öğe `<body>` öğesidir. Bu, kullanıcılara görüntülenecek tüm içeriğin (metin, resimler, listeler, bağlantılar vb) yer alacağı yerdir. 

Boilerplate'i tamamlamak için `index.html` dosyasına bir body öğesi ekleyin. Body öğesi de HTML öğesinin içine yerleştirilir ve her zaman `head` öğesinin altında yer alır, aşağıdaki gibi:

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Webpage</title>
  </head>

  <body>
  </body>
</html>
~~~

### HTML dosyalarını tarayıcıda görüntüleme

`index.html` dosyasındaki HTML şablonu bu noktada tamamlanmış durumda, ancak bunu nasıl tarayıcıda görüntüleyebilirsiniz? Birkaç farklı seçeneğiniz vardır:

> Bir not:
> Tarayıcıların arasındaki tüm farklılıkları karşılamak için dersin talimatlarını dallandırmaktan kaçınmak için bu kursun geri kalanında Google Chrome'u birincil tarayıcı olarak kullanacağız. Tarayıcıyla ilgili tüm referanslar özellikle Google Chrome için geçerli olacaktır. İlerideki tüm testleriniz için Google Chrome'u kullanmanızı **şiddetle** öneririz.

1. HTML dosyanızı metin düzenleyicinizden tarayıcınızın adres çubuğuna sürükleyip bırakabilirsiniz.

2. HTML dosyasını dosya sisteminden bulabilir ve ardından çift tıklayabilirsiniz. Bu dosyayı sistemde varsayılan olarak kullanılan tarayıcıda açacaktır.

3. HTML dosyasını tarayıcınızda açmak için terminali kullanabilirsiniz.

    * `Ubuntu` - Dosyayı içeren dizine gidin ve `google-chrome index.html` yazın.
    * `macOS` - Dosyayı içeren dizine gidin ve `open ./index.html` yazın.

Yukarıdaki yöntemlerden birini kullanarak üzerinde çalıştığımız index.html dosyasını açın. Ekranın boş olduğunu fark edeceksiniz. Bunun nedeni görüntülenecek bir içeriğimizin olmamasıdır.

`index.html` dosyasına geri dönelim ve başlık (daha fazlası sonradan açıklanacak) ekleyelim ve dosyayı kaydedelim.

~~~html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Webpage</title>
  </head>

  <body>
    <h1>Hello World!</h1>
  </body>
</html>
~~~

Şimdi tarayıcıda sayfayı yenilerseniz değişikliklerin etkili olduğunu ve "Hello World!" başlığının görüntülendiğini göreceksiniz.

### VSCode Kısayolu 

VSCode'nun tek seferde tüm şablonu oluşturmak için kullanabileceğiniz yerleşik bir kısayolu vardır. Bu kısayolun yalnızca '.html' uzantılı bir dosyayı düzenlerken veya HTML dilinin zaten seçildiği bir metin dosyasını düzenlerken çalıştığını unutmayın. Kısayolu tetiklemek için `index.html` dosyasındaki her şeyi silin ve yalnızca ilk satıra `!` karakterini girin. Bu size birkaç seçenek sunacaktır. İlk seçeneği seçmek için <kbd>Enter</kbd> tuşuna basın ve işte size tamamen oluşturulmuş şablon.

Ancak not defteri gibi (Allah korusun) bu kısayola sahip olmayan bir metin düzenleyici kullanmanız durumunda şablonu kendiniz nasıl yazacağınızı bilmek iyi olacaktır. İlk birkaç HTML projenizde bu kısayolu kullanmamaya çalışın, böylece şablon kodunu yazarken biraz kas hafızası oluşturabilirsiniz.

### Ödev

<div class="lesson-content__panel" markdown="1">

1. Kevin Powell'un harika [Building Your First Web Page](https://youtu.be/V8UAEoOvqFg?list=PL4-IK0AVhVjM0xE0K2uZRvsM7LkIhsPT-&t=93) videosunu izleyin ve adımları takip edin.

2. Kas hafızası oluşturmak için `index.html` dosyasının içeriğini silin ve şablonu tamamen hafızadan tekrar yazmaya çalışın. İlk birkaç kez takıldığınızda ders içeriğine göz atmanızda sakınca yok. Sadece hafızadan birkaç kez başarılı bir şekilde yapana kadar devam edin.

3. Şablonunuzu W3 [HTML validator](https://validator.w3.org/) veya alternatif olarak [HTML validator](https://www.freeformatter.com/html-validator.html) üzerinden çalıştırın. Doğrulayıcılar işaretlemenizin doğru olduğundan emin olmanızı sağlar. Eksik kapanış etiketleri ve HTML'deki fazladan boşluklar gibi sıklıkla yaptığınız ve farkında olmadığınız sözdizimi hataları hakkında geri bildirim sağlayarak mükemmel bir öğrenme aracıdır.

</div>

### Bilgi kontrolü

Bu bölümde, bu dersle ilgili anlayışınızı kendi başınıza kontrol etmek için sorular bulunmaktadır. Bir soruya cevap verirken zorluk yaşıyorsanız, üzerine tıklayarak bağlantı verilen materyali gözden geçirin.


*   [What is the purpose of the doctype declaration?](#the-doctype)
*   [What is the HTML element?](#html-element)
*   [What is the purpose of the head element?](#head-element)
*   [What is the purpose of the body element?](#body-element)

### Ek kaynaklar

Bu bölüm, ilgili içeriğe yönelik yararlı bağlantılar içermektedir. Zorunlu değildir, bu yüzden ek olarak düşünün.

* [charsets you should use with your HTML pages](https://www.positioniseverything.net/html-encoding/) hakkında bu makaleyi okuyun.

* HTML sayfalarınızı tarayıcıda açmanın başka bir seçeneği VSCode ile [live server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) kullanmaktır. Bu HTML belgenizi açacak ve belgeyi kaydettiğiniz her seferde otomatik olarak yenileyecektir. Bununla birlikte ilk birkaç HTML projesinizde bu uzantıyı kullanmamanızı ve bunun yerine eski yöntemi kullanmanızı öneririz. Sayfayı tarayıcıda manuel olarak açıp yenileyerek bu sürece alışabilirsiniz ve hemen uzantılara bağımlı hale gelmezsiniz. Bunun nedeni uzantıları kullanırken bazı ince farklılıklar olabileceğidir. Örneğin canlı sunucu her zaman UTF-8 karakter kodlamasını kullanır ve `meta-charset` özniteliğinde tanımlanan değeri kullanmaz. Bu sitenizde beklediğiniz şekilde kodlanmamış bazı karakterlerin gizlenmesine neden olabilir.

* İsterseniz web sayfasının herhangi bir yerindeki öğelere `lang` özniteliğini ekleyebilirsiniz. `lang` özniteliği hakkında daha iyi bir anlayış için [bu belgeyi](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) okuyabilirsiniz.

### Giriş
JavaScript'e dalalım!

### Ders Özeti
Bu bölümde öğreneceğiniz konuların genel bir özeti bulunmaktadır.

* Bir değişken nasıl tanımlanır?
* Bir değişkeni tanımlamanın üç farklı yolu nelerdir?
* Hangi birini ne zaman kullanmalısınız?
* Değişkenler için adlandırma kuralları nelerdir?
* Operatörler, işlem yapılandırıcıları ve işlemler nelerdir?
* Birleştirme nedir, sayıları ve dizeleri birleştirirken ne olur?
* JavaScript'teki farklı operatör türleri nelerdir?
* == ve === arasındaki fark nedir?
* Operatör öncelik değerleri nelerdir?
* Artırma / azaltma operatörleri nelerdir?
* Bunları öne eklemenin ve sonuna eklemenin farkı nedir?
* Atama operatörleri nelerdir?
* Tekil artı (unary plus) operatörü nedir?

### JavaScript Kodu Nasıl Çalıştırılır?

Temel bilgiler kursunda yazacağımız JavaScript kodunun çoğunlukla tarayıcı üzerinde çalıştıracağız. JavaScript'in tarayıcı dışındaki bir ortamda nasıl çalıştırılacağını, ilerleyen zamanda temel bilgiler ve NodeJS kurslarında öğreneceksiniz. O zamana kadar tam tersi belirtilmedikçe JavaScript'i tarayıcınızda çalıştırmalısınız, aksi takdirde beklenmedik hatalarla karşılaşabilirsiniz.

En kolay yol, içinde JavaScript kodu bulunan bir HTML dosyası yaratmaktır. Bilgisayarınızın herhangi bir yerindeki bir dosyaya, temel HTML taslağını yazın:

~~~html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Sayfa Başlığı</title>
</head>
<body>
  <script>
    // JavaScript'inizi buraya yazın!
    console.log("Merhaba, Dünya!")
  </script>
</body>
</html>
~~~

Bu dosyayı kaydedin ve bir web tarayıcısında açın (bunun için Visual Studio Code'daki ["Live Server"](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) eklentisini kullanabilirsiniz!) ve daha sonra <span id="access-devTools-console">boş web sayfasına sağ tıklayıp "İncele" veya "Öğeyi İncele" seçeneğini seçerek tarayıcının konsolunu açın. 'Geliştirici Araçları' panelinde 'Konsol' sekmesini bulun ve seçin</span>, burada `console.log` ifadesinin çıktısını görmelisiniz.

> <span id="console-log">`console.log()` tarayıcınızın geliştirici konsoluna bir şey yazdırmak için kullanılan komuttur. Bu komutu, ileride karşılaşacağınız makale ve alıştırmalardaki çıktıları yazdırmak için kullanabilirsiniz. </span> Bu ve gelecekteki derslerdeki tüm örneklerle birlikte kod yazmanızı öneririz.

Bir web sayfasına JavaScript dahil etmenin başka bir yolu, harici kod kullanmaktır Bu, web sitenize harici CSS dosyalarını bağlamaya çok benzer.

~~~html
  <script src="javascript.js"></script>
~~~

Stil dosyaları .css'ye benzer şekilde, JavaScript dosyaları .js uzantısına sahiptir. Harici JavaScript dosyaları, daha karmaşık kodlar için kullanılır.

### Değişkenler

Değişkenleri kodunuzdaki veriler için basitçe "saklama kutuları" olarak düşünebilirsiniz.

![Variable Box Illustration](https://cdn.statically.io/gh/TheOdinProject/curriculum/d39eaf2ca95e80705f703bb218216c10508f5047/foundations/javascript_basics/fundamentals-1/imgs/00.png)

Değişkenleri, kodunuzdaki veriler için sadece "saklama kutusu" olarak düşünebilirsiniz. <span id="variable-declaration">Yakın zamana kadar, JavaScript'te bir değişken oluşturmanın tek yolu `var` ifadesiydi. Ancak en yeni JavaScript sürümlerinde iki yol daha var: `let` ve `const`.</span>

1. [Bu değişken dersi](http://javascript.info/variables) ihtiyacınız olan her şeyi anlatır! Sonunda __Görevler__ bölümünü yapmayı unutmayın. Pratik yapmadan bilgi pekişmez!

Üstteki ders buna değinmiş olsa da tekrar hatırlatmakta fayda var: `let` ve `const`,  JavaScript'te değişken tanımlamanın yeni yollarıdır. <span id="avoid-var"> İnternetteki _birçok_ videoda (ve kodda) `var`  ifadeleriyle karşılaşmanız muhtemeldir. Aklınız karışmasın! `var`'ın hatalı bir kullanım değil, çoğu durumda  `var` ve `let` aynı şekilde davranır. Fakat bazen `var`'ın istenmeyen bir şekilde davranış gösterebilir. Siz şimdilik `let` (ve `const`) kullanın.</span>

### Sayılar

Sayılar, programlama mantığının yapı taşlarıdır! Azıcık basit matematik içermeyen bir programlama örneği düşünmek zordur. Bu yüzden sayıların nasıl çalıştığını bilmek oldukça önemlidir. Neyse ki epey kolaydır.

1. [Bu İngilizce W3Schools dersi](https://www.w3schools.com/js/js_arithmetic.asp) ve ardından [bu ders](https://www.w3schools.com/js/js_numbers.asp), JavaScript'te sayılarla neler yapabileceğinize dair iyi bir başlangıçtır.
2. [Bu İngilizce MDN makalesi](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math), basit matematik işlemlerini JavaScript ile nasıl yapabileceğinizi öğreterek, aynı konuyu farklı bir bakış açısıyla ele almakta. Sayılarla yapılabilecek daha çok şey var ancak şimdilik bilmeniz gereken bu kadar.
3. JavaScript operatörlerini anlatan [bu İngilizce makaleyi](http://javascript.info/operators) okuyun (ve bir yandan kodlayın!). Sondaki Görevler kısmını yapmayı unutmayın! JavaScript'te sayılarla (ve daha nicesiyle!) neler yapabileceğinize dair iyi fikir edineceksiniz.okuyun (ve bir yandan kodlayın!). Sondaki Görevler kısmını yapmayı unutmayın! JavaScript'te sayılarla (ve daha nicesiyle!) neler yapabileceğinize dair iyi fikir edineceksiniz.


### Görev

<div class="lesson-content__panel" markdown="1">
Aşağıdaki alıştırmaları deneyin (ve `console.log()` kullanmayı unutmayın!):

1. İki sayıyı toplayın! (html dosyanıza  `console.log(23 + 97)` yazın)
2. Altı farklı sayıdan oluşan bir diziyi toplayın.
3. Aşağıdaki denklemi çözümleyin: `(4 + 6 + 9) / 77`
    * Cevap yaklaşık `0.24675` olmalıdır.
4. Hadi değişkenleri kullanalım!
    * Script etiketinin üstüne şu ifadeyi yazın: `let a = 10`
    * Konsola `console.log(a)` yazarsanız `10` yazısı gelmelidir.
    * Konsolda şunu deneyin: `9 * a`
    * ve bunu: `let b = 7 * a` ( `undefined` \* değerini döndürür) ve sonra `console.log(b)` yazın.
5. Şimdiye kadar bir şeyler kapmış olmalısınız. Şunu deneyin.
    * Sabit bir değişken olan `max`ı `57` değeriyle belirtin.
    * Başka bir değişken olan `actual`ı `max - 13` olarak ayarlayın.
    * Başka bir değişken olan `percentage`i `actual / max` olarak ayarlayın.
    * Eğer konsola `percentage` yazarsanız ve enter tuşuna basarsanız `0.7719` gibi bir değer göreceksiniz.
6. Script etiketinizdeki şeyleri biraz daha kurcalayın. Bir süre sonra, o sayıları ve değişkenleri web sayfasında nasıl göstereceğimizi öğreneceğiz ama mantık hep aynı kalacak, o yüzden ilerlemeden önce iyi anladığınıza emin olun.

_* JavaScript kodunu konsolda çalıştırarak muhtemelen fark etmişsinizdir, konsol çalıştırdığı kodun çıktısını verir (buna döndürme denir). İlerleyen derslerde bunları göreceksiniz ancak şimdilik hatırlatmakta fayda var. Atama yapılmış bir tanımlama (örn. let b = 7 * a), undefined değerini döndürür yani aynı satırda bir değişken tanımlayıp sonra ona değer atayıp o değeri okumak mümkün değildir._
</div>

### Ek Kaynaklar

Bu bölüm, diğer içeriklere yardımcı olan faydalı bağlantılar içerir. Zorunlu değildir, ek kaynak olarak düşünün 

* `var` ve `let` arasındaki kesin farklar [javascript.info](https://javascript.info/var) adresinde açıklanmaktadır.

### Bilgi Kontrolü

Bu bölüm, bu dersi anlayıp anlamadığınızı kendi başınıza kontrol etmeniz için sorular içermektedir. Bir soruyu yanıtlamakta sorun yaşıyorsanız, soruya tıklayın ve bağlantının verdiği materyali inceleyin.

* [Bir değişken tanımlamanın üç yolunu sayın.](#variable-declaration)
* [Üç farklı yolu olan değişken tanımlamanın hangisinden, neden kaçınmalısınız?](#avoid-var)
* [Değişkenleri adlandırırken hangi kurallara dikkat etmelisiniz?](https://javascript.info/variables#variable-naming)
* [Sayıları ve dizeleri bir araya getirdiğinizde ne olur?](https://javascript.info/operators#string-concatenation-with-binary)
* [Modulo (%), veya Kalan, operatörü nasıl çalışır?](https://javascript.info/operators#remainder)
* [`==` ve `===` arasındaki farkı açıklayın.](https://www.w3schools.com/js/js_numbers.asp)
* [Ne zaman `NaN` sonucu alırsınız?](https://www.w3schools.com/js/js_numbers.asp)
* [Bir sayıyı nasıl artırır veya azaltırsınız?](https://javascript.info/operators#increment-decrement)
* [Ön ekli ve son ekli artırım/azaltım operatörleri arasındaki fark nedir?](https://javascript.info/operators#increment-decrement)
* [Operatör önceliği nedir ve JS'de nasıl ele alınır?](https://javascript.info/operators#operator-precedence)
* [Geliştirici araçlarına ve konsola nasıl erişilir?](#access-devTools-console)
* [Bilgileri konsola nasıl yazdırırız?](#console-log)
* [Tekil artı (unary plus) operatörü, dize olarak belirtilmiş bir sayıya ne yapar? örn. "10"](https://javascript.info/operators#numeric-conversion-unary)
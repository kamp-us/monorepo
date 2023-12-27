---
title: 'Javascript Temelleri - 4'
---
### Giriş

Programlamanın zorluklarından biri de büyük miktarda veri ile uğraşmaktır. Örneğin, sınıfınızdaki tüm öğrencilerin isimlerini depolamak istiyorsanız, bunu nasıl yaparsınız? Her isim için bir değişken oluşturabilirsiniz, ancak bu sıkıcı ve verimsiz olacaktır. Ayrıca yönetilmesi ve güncellenmesi de zor olacaktır. Ya isimleri daha sonra değiştirmek ya da erişmek isterseniz?

Neyse ki bu sorunu çözmenin daha iyi bir yolu var. Bu derste, birden fazla değeri tek bir değişkende depolayabilen veri yapıları olan diziler hakkında bilgi edineceksiniz. Diziler, büyük miktarda veriyi düzenlemek ve işlemek için çok kullanışlıdır. Ayrıca, bir kod bloğunu tekrar tekrar çalıştırmanıza olanak tanıyan kontrol yapıları olan döngüler hakkında da bilgi edineceksiniz. Döngüler, bir dizinin her bir elemanı üzerinde aynı işlemi gerçekleştirmek için çok kullanışlıdır. Son olarak, kodun kendisini yazmadan önce kodunuz için testler yazma yöntemi olan Test Odaklı Geliştirme (TDD) ile tanışacaksınız.

### Derse Genel Bakış

Bu bölüm, bu derste öğreneceğiniz konuların genel bir özetini içerir.

* Dizileri kullanma.
* Yerleşik dizi yöntemlerini kullanma.
* Döngüleri kullanma.
* TDD alıştırmaları ile pratik yapma.

### Diziler

Dizeler ve sayılar yapı taşlarımız olabilir, ancak komut dosyalarınız daha karmaşık hale geldikçe, büyük miktarlarda bunlarla başa çıkmak için bir yola ihtiyacınız olacaktır. Neyse ki JavaScript tam da bu iş için kullanılan birkaç veri türüne sahiptir. Dizi, basitçe öğelerin (Dizeler, sayılar veya diğer şeyler) sıralı bir koleksiyonudur.

1. [Bu ingilizce eğitim](https://www.w3schools.com/js/js_arrays.asp) harika bir giriş niteliğindedir.
2. [Bu ingilizce makale](https://www.w3schools.com/js/js_array_methods.asp) en kullanışlı yerleşik dizi yöntemlerinden bazılarını kapsamaktadır. Bu temel bilgiler her gün kullanacağınız şeylerdir, bu yüzden çok fazla acele etmeyin ve kaçırmayın!
3. Bu ingilizce [Web Dev Simplified videosu](https://www.youtube.com/watch?v=7W4pQQ20nJg) JavaScript'teki dizilere genel bir bakışı yaklaşık 6 dakikada açıklıyor.

### Döngüler

Bilgisayarlar yorulmazlar ve gerçekten çok hızlıdırlar! Bu nedenle, hesaplamaların birden fazla kez yapılmasını gerektiren problemleri çözmek için çok uygundurlar. Bazı durumlarda, bir bilgisayar, bir insanın saatler sürebileceği bir görevi sadece birkaç saniye içinde _binlerce_ hatta _milyonlarca_ kez tekrarlayabilir. \(Açıkçası, buradaki hız hesaplamanın karmaşıklığına ve bilgisayarın hızına bağlıdır\). Bir bilgisayara tekrarlayan bir görev yaptırmanın bir yolu **döngü** kullanmaktır.

1. Bu ingilizce [MDN makalesini](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code) okuyun. Bu daha uzun bir makale, ancak sayfanın altındaki 'Active Learning' bölümlerini çözmeye çalıştınızdan emin olun.
2. Bir kez daha, aynı bilgi, [JavaScript.info](http://javascript.info/while-for)'dan biraz farklı içerik. \(Her şeyi bildiğinizi düşünüyorsanız bilgileri gözden geçirin, ancak **sayfanın sonundaki görevleri unutmayın**. En iyi _yaparak_ öğrenirsiniz.\)

### Test Odaklı Geliştirme

Test Odaklı Geliştirme \(TDD\), geliştirme dünyasında sıkça duyduğunuz bir ifadedir. Siz kodu gerçekten yazmadan önce kodunuzun nasıl çalışması gerektiğini açıklayan otomatik testler yazma yöntemini ifade eder. Örneğin, birkaç sayıyı toplayan bir fonksiyon yazmak istiyorsanız, önce fonksiyonu kullanan ve beklenen çıktıyı sağlayan bir test yazarsınız. Kodunuzu yazmadan önce test başarısız olacaktır ve test geçtiğinde kodunuzun doğru çalıştığını bilmeniz gerekir.

Birçok açıdan TDD, testler olmadan kod yazmaktan çok daha verimlidir. Yukarıdaki toplama fonksiyonu için testimiz olmasaydı, kodu kendimiz tekrar tekrar çalıştırmamız ve çalıştığından emin olana kadar farklı sayılar girmemiz gerekirdi... basit bir `add(2, 2)` fonksiyonu için büyük bir sorun değil, ancak birisinin tic tac toe oyununu kazanıp kazanmadığını kontrol etmek gibi daha karmaşık fonksiyonlar için bunu yapmak zorunda olduğunuzu hayal edin: \(`game_win(["o", null, "x",null, "x",null, "x", "o", "o"])`). TDD yapmadıysanız, fonksiyonun doğru çalışıp çalışmadığını test etmek için kendinize karşı birden fazla oyun oynamanız gerekebilir!

Bu testleri gerçekten yazma sanatını size kursun ilerleyen bölümlerinde öğreteceğiz. Aşağıdaki alıştırmada testler sizin için zaten yazılmış durumda. Tek yapmanız gereken test ortamını kurmak, özellikleri okumak ve geçmelerini sağlayacak kodu yazmak!

### Ödev

<div class="lesson-content__panel" markdown="1">

1. [JavaScript alıştırmaları repomuza](https://github.com/TheOdinProject/javascript-exercises) gidin ve yerel ortamınızı kurmak için [reponun README](https://github.com/TheOdinProject/javascript-exercises#readme) dosyasını inceleyin. Repoyu klonladıktan ve Jest'i kurduktan sonra, aşağıdaki alıştırmaları sırasıyla tamamlamadan önce her bir README dosyasını gözden geçirin:
    - `01_helloWorld` (Bu alıştırma, her şeyi düzgün bir şekilde kurduğunuzdan emin olmak için kasıtlı olarak çok basittir!)
    - `02_repeatString`
    - `03_reverseString`
    - `04_removeFromArray`
    - `05_sumAll`
    - `06_leapYears`
    - `07_tempConversion`

    Not: Bu alıştırmaların çözümleri her alıştırmanın `solution` klasöründe bulunabilir.

</div>

### Bilgi Ölçme

Bu bölüm, bu dersi anlayıp anlamadığınızı kendi başınıza kontrol etmeniz için sorular içermektedir. Bir soruyu yanıtlamakta sorun yaşıyorsanız, soruya tıklayın ve bağlantının verdiği materyali inceleyin.

* [Dizi nedir?](https://www.w3schools.com/js/js_arrays.asp)
* [Diziler ne işe yarar?](https://www.w3schools.com/js/js_arrays.asp)
* [Bir dizi elemanına nasıl erişirsiniz?](https://www.w3schools.com/js/js_arrays.asp)
* [Bir dizi elemanını nasıl değiştirirsiniz?](https://www.w3schools.com/js/js_arrays.asp)
* [Bazı yararlı dizi özellikleri nelerdir?](https://www.w3schools.com/js/js_arrays.asp)
* [Bazı yararlı dizi yöntemleri nelerdir?](https://www.w3schools.com/js/js_array_methods.asp)
* [Döngüler ne işe yarar?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#why_bother)
* [Break deyimi nedir?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#exiting_loops_with_break)
* [Continue deyimi nedir?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#skipping_iterations_with_continue)
* [Otomatik çalışan test yazmanın avantajı nedir?](#test-odakli-gelistirme)

### Ek Kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

* Görünüşe göre bu dersin henüz herhangi bir ek kaynağı yok. Müfredatımıza katkıda bulunarak bu bölümü genişletmemize yardımcı olabilirsiniz.
---
title: 'Problem Çözme'
---

### Giriş

JavaScript'i incelemeye başlamadan önce, bir geliştiricinin ihtiyaç duyduğu en önemli beceri olan *problem çözme* hakkında konuşmaya başlamamız gerekiyor.

Problem çözme, yazılım geliştiricilerin yaptığı temel şeydir. Kullandıkları programlama dilleri ve araçları bu temel beceriye ek olarak ikincil öneme sahiptir.

V. Anton Spraul programlamada problem çözmeyi şu şekilde tanımlar:

> Problem çözme, belirli bir dizi görevi yerine getiren ve belirtilen tüm kısıtlamaları karşılayan orijinal bir program yazmaktır. <br /> - Bir Programcı Gibi Düşünün

Görevler, küçük kodlama alıştırmalarını çözmekten Facebook gibi bir sosyal ağ sitesi veya Google gibi bir arama motoru oluşturmaya kadar değişebilir. Her sorunun kendine özgü kısıtlamaları vardır; örneğin, bir kodlama alıştırmasında yüksek performans ve ölçeklenebilirlik çok önemli olmayabilir, ancak Google gibi her gün milyarlarca arama sorgusuna hizmet vermesi gereken uygulamalarda hayati önem taşıyacaktır.

Yeni programcılar genellikle problem çözmeyi geliştirmesi en zor beceri olarak görürler. Çiçeği burnunda programcıların sözdizimi ve programlama kavramlarını öğrenmekte zorlanmaları nadir değildir, ancak kendi başlarına bir şeyler kodlamaya çalıştıklarında, kendilerini nereden başlayacaklarını bilmeden metin editörlerine boş boş bakarken bulurlar.

Problem çözme yeteneğinizi geliştirmenin en iyi yolu, çok sayıda program yaparak deneyim kazanmaktır. Ne kadar çok pratik yaparsanız, gerçek dünya problemlerini çözmek için o kadar iyi hazırlanmış olursunuz.

Bu derste, problem çözme sürecine yardımcı olmak için kullanılabilecek birkaç teknik üzerinde duracağız.

### Derse genel bakış

Bu bölüm, bu derste öğreneceğiniz konuların genel bir özetini içerir.

*   Problem çözme sürecindeki üç adımı açıklamak.
*   Sözde kodun ne olduğunu açıklamak ve problemleri çözmek için kullanabilmek.
*   Bir problemi alt problemlere ayırabilmek.

### Sorunu anlayın
<span id="problem-solving-stages"></span>
Bir sorunu çözmenin ilk adımı, sorunun tam olarak ne olduğunu anlamaktır.<span id="important-understand-problem"> Sorunu anlamazsanız, ne zaman başarılı bir şekilde çözdüğünüzü bilemezsiniz ve yanlış bir çözüm için çok fazla zaman kaybedebilirsiniz</span>.

<span id="help-understand-problem">Sorunu netleştirmek ve anlamak için kağıda yazın, size mantıklı gelene kadar sade bir dille yeniden ifade edin ve yardımcı olacaksa diyagramlar çizin. Sorunu bir başkasına sade bir dille açıklayabildiğinizde, onu anlamışsınız demektir.</span>

### Plan
Artık neyi çözmeyi hedeflediğinizi bildiğinize göre, henüz kodlamaya atlamayın. Önce bunu nasıl çözeceğinizi planlamanın zamanı geldi.
<span id="planning-stage"></span>
Sürecin bu aşamasında cevaplamanız gereken bazı sorular:

*   Programınızın bir kullanıcı arayüzü var mı? Nasıl görünecek? Arayüz hangi işlevselliğe sahip olacak? Bunu kağıt üzerinde çizin.
*   Programınız hangi girdilere sahip olacak? Kullanıcı mı veri girecek yoksa başka bir yerden mi girdi alacaksınız?
*   İstenen çıktı nedir?
*   Girdileriniz göz önüne alındığında, istenen çıktıyı elde etmek için gerekli adımlar nelerdir?

Son soru, problemi çözmek için bir algoritma yazacağınız yerdir. <span id="algorithm">Bir algoritmayı belirli bir problemi çözmek için bir reçete olarak düşünebilirsiniz. Bir problemi çözmek için bilgisayar tarafından atılması gereken adımları sözde kodla tanımlar.</span>

### Sözde Kod(Pseudocode)
<span id="pseudo">Sözde kod, programınızın mantığını kod yerine doğal dilde yazmaktır. Bu, yavaşlamanıza ve programınızın sorununu çözmek için uygulamanız gereken adımları düşünmenize yardımcı olur.</span>

Burada, girilen bir sayıya kadar olan tüm sayıları yazdıran basit bir programın sözde kodunun nasıl görünebileceğine dair bir örnek verilmiştir:

```text
Kullanıcı bir sayı girdiğinde
Bir sayaç değişkenini başlatın ve değerini sıfıra ayarla
Sayaç kullanıcı tarafından girilen sayıdan küçük olduğunda sayacı bir artır
Sayaç değişkeninin değerini yazdır
```

Bu, sözde kodun nasıl göründüğünü göstermek için çok basit bir programdır. Ödevlerde daha fazla sözde kod örneği yer alacaktır.

### Böl ve fethet
Planlamanıza göre, çözmekte olduğunuz büyük problemin bazı alt problemlerini belirlemiş olmalısınız. Son bölümde yazdığımız algoritmadaki adımların her biri alt problemlerdir. En küçük veya en basit olanı seçin ve kodlamaya oradan başlayın.

İhtiyacınız olabilecek tüm adımları önceden bilemeyebileceğinizi, dolayısıyla algoritmanızın eksik olabileceğini unutmamak önemlidir - bu normal. Planlama aşamasında belirlediğiniz alt problemlerden biriyle başlamak ve onu çözmek genellikle üzerinde çalışabileceğiniz bir sonraki alt problemi ortaya çıkarır. Ya da bir sonraki alt problemi zaten biliyorsanız, ilk alt problem çözüldüğünde genellikle daha basittir.

Yeni başlayanların çoğu büyük bir sorunu tek seferde çözmeye çalışır. **Bunu yapmayın**. <span id="breaking-problem">Sorun yeterince karmaşıksa, kendinizi çıkmaza sokar ve hayatı kendiniz için çok daha zor hale getirirsiniz. Problemleri daha küçük ve çözülmesi daha kolay alt problemlere ayırmak çok daha iyi bir yaklaşımdır. Ayrıştırma, karmaşıklıkla başa çıkmanın ana yoludur ve sorunları çözmeyi ve anlamayı daha kolay ve ulaşılabilir hale getirir.</span>

Kısacası, büyük sorunu parçalara ayırın ve büyük sorunu çözene kadar her bir küçük sorunu çözün.

### Fizz Buzz'ı Çözme
Bu iş akışını uygulamalı olarak göstermek için yaygın [bir programlama alıştırmasını çözelim: Fizz Buzz, bu ingilizce wiki makalesinde açıklanmıştır](https://en.wikipedia.org/wiki/Fizz_buzz).

#### Sorunu anlamak
>Kullanıcının girdisini alan ve birden kullanıcının girdiği sayıya kadar olan sayıları yazdıran bir program yazın. Ancak, üçün katları için sayı yerine `Fizz` yazdırın ve beşin katları için `Buzz` yazdırın. Hem üçün hem de beşin katı olan sayılar için `FizzBuzz` yazdırılır.

Bu, çözeceğimiz büyük resim problemidir. Oldukça basit olduğu için yeniden ifade etmemize gerek olmayabilir. Ancak her zaman yeniden ifade ederek daha açık hale getirebiliriz.

Kullanıcının bir sayı girmesine izin veren bir program yazın, bir ile kullanıcının girdiği sayı arasındaki her sayıyı yazdırın, ancak 3 ile kalansız bölünen sayılar için bunun yerine `Fizz` yazdırın. Kalansız 5 ile bölünen sayılar için `Buzz` yazdırın ve son olarak kalansız hem 3 hem de 5 ile bölünen sayılar için `FizzBuzz` yazdırın.

#### Plan
Programınızın bir arayüzü var mı? Neye benzeyecek?
FizzBuzz çözümümüz bir tarayıcı konsol programı olacak, bu nedenle bir arayüze ihtiyacımız yok. Tek kullanıcı etkileşimi, kullanıcıların bir sayı girmesine izin vermek olacaktır.

Programınız hangi girdilere sahip olacak? Kullanıcı mı veri girecek yoksa başka bir yerden mi girdi alacaksınız?
Kullanıcı bir istemden (açılır kutu) bir sayı girecektir.

İstenen çıktı nedir? 
İstenen çıktı, 1'den kullanıcının girdiği sayıya kadar olan sayıların bir listesidir. Ancak 3 ile bölünebilen her sayı `Fizz` çıktısı verir, 5 ile bölünebilen her sayı `Buzz` çıktısı verir ve hem 3 hem de 5 ile bölünebilen her sayı `FizzBuzz` çıktısı verir.

#### Sözde kod
İstenen çıktıyı elde etmek için gerekli adımlar nelerdir?
İşte bu problem için sözde kodda bir algoritma:

```text
Kullanıcı bir sayı girdiğinde
1'den girilen sayıya kadar döngü yapın 
Geçerli sayı 3'e bölünebiliyorsa "Fizz" yazdırılır
Geçerli sayı 5'e bölünebiliyorsa "Buzz" yazdırılır
Geçerli sayı 3 ve 5'e bölünebiliyorsa "FizzBuzz" yazdırılır
Aksi takdirde geçerli sayıyı yazdırır
```

#### Böl ve fethet (uygulama)
Geliştirdiğimiz algoritmadan da görebileceğimiz gibi, çözebileceğimiz ilk alt problem kullanıcıdan girdi almaktır. Öyleyse buradan başlayalım ve girilen sayıyı yazdırarak çalıştığını doğrulayalım.

JavaScript ile "prompt" yöntemini kullanacağız.

```javascript
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
```

Yukarıdaki kod, kullanıcıdan bir sayı isteyen küçük bir açılır kutu oluşturmalıdır. Geri aldığımız girdi `answer` değişkenimizde saklanacaktır.

<div class="lesson-note lesson-note--tip" markdown="1">
Prompt yöntemini bir `parseInt` fonksiyonuna sardık, böylece kullanıcının girdisinden bir sayı döndürüldü.
</div>

Bunu yaptıktan sonra, bir sonraki alt probleme geçelim: "1'den girilen sayıya kadar döngü". JavaScript'te bunu yapmanın birçok yolu vardır. Java, C++ ve Ruby gibi diğer birçok dilde gördüğünüz yaygın yollardan biri [for döngüsü](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for):

```javascript
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
  console.log(i);
}
```

Bunu daha önce görmediyseniz ve garip görünüyorsa, aslında basittir. Bir `i` değişkeni tanımlıyoruz ve ona döngümüzdeki `i` değişkeninin başlangıç değeri olarak 1 atıyoruz. İkinci ifade, `i <= answer` bizim koşulumuzdur. `i` değeri `answer` değerinden büyük olana kadar döngü yapmak istiyoruz. Üçüncü ifade, `i++`, döngümüze her tekrarda `i` değerini 1 artırmasını söyler. Sonuç olarak, kullanıcı 10 girerse, bu döngü konsola 1 - 10 sayılarını yazdıracaktır.

<div class="lesson-note lesson-note--tip" markdown="1">
Çoğu zaman, programcılar kendilerini 0'dan başlayarak döngü yaparken bulurlar. Programımızın ihtiyaçları nedeniyle, biz 1'den başlıyoruz
</div>

Bu çalışmayla, bir sonraki probleme geçelim: Mevcut sayı 3 ile bölünebiliyorsa, `Fizz` yazdırın.

```javascript
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
```

Burada mevcut sayıyı üçe bölmek için modül operatörünü (`%`) kullanıyoruz. Bir önceki dersten hatırlarsanız, modül operatörü bir bölme işleminden kalanı döndürür. Dolayısıyla, bölme işleminden 0 kalan döndürülürse, bu `mevcut` sayının 3 ile bölünebilir olduğu anlamına gelir.

Bu değişiklikten sonra, programı çalıştırdığınızda ve kullanıcı 10 girdiğinde program artık bu çıktıyı verecektir:

```bash
1
2
Fizz
4
5
Fizz
7
8
Fizz
10
```

Program şekillenmeye başlıyor. Son birkaç alt problemi çözmek kolay olmalı çünkü temel yapı yerinde ve bunlar zaten sahip olduğumuz koşulun farklı varyasyonları. Sıradakini ele alalım: Eğer mevcut sayı 5'e bölünebiliyorsa `Buzz` yazdır.

```javascript
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
```

Programı şimdi çalıştırdığınızda, kullanıcı 10 girerse bu çıktıyı görmelisiniz:

```bash
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
```

Programı tamamlamak için çözmemiz gereken bir alt problemimiz daha var: Eğer mevcut sayı 3 ve 5 ile bölünebiliyorsa `FizzBuzz` yazdırın.

```javascript
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
```

Çalışması için koşulların yerini biraz değiştirmek zorunda kaldık. İlk koşul artık `i`nin sadece 3'e bölünebilir olup olmadığını kontrol etmek yerine `i`'nin 3 ve 5'e bölünebilir olup olmadığını kontrol ediyor. Bunu yapmak zorundaydık çünkü bu şekilde tutarsak, ilk koşul `if (i % 3 === 0)` çalıştırılacaktı, böylece `i` 3'e bölünebilirse, `Fizz` yazdıracak ve ardından `i` 5'e de bölünebilir olsa bile döngüdeki bir sonraki sayıya geçecekti.

İlk olarak `if (i % 3 === 0 && i % 5 === 0)` koşulu ile `i`'nin hem 3 hem de 5 ile bölünebilir olup olmadığını kontrol ettikten sonra `else if` koşullarında ayrı ayrı 3 veya 5 ile bölünebilir olup olmadığını kontrol etmeye devam ediyoruz.

Program şimdi tamamlandı! Şimdi çalıştırırsanız, kullanıcı 20 girdiğinde bu çıktıyı almalısınız:

```bash
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
```

### Ödev

<div class="lesson-content__panel" markdown="1">

  1.  Richard Reis'in [How to Think Like a Programmer - Lessons in Problem Solving](https://www.freecodecamp.org/news/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2/) adlı ingilizce makalesini okuyun.
  2.  Coding Tech tarafından hazırlanan [How to Begin Thinking Like a Programmer](https://www.youtube.com/watch?v=azcrPFhaY9k)adlı ingilizce videosunu izleyin. Bir saat uzunluğunda ama bilgi dolu ve kesinlikle zaman ayırıp izlemeye değer.
  3.  Built In'den bu [Pseudocode: What It Is and How to Write It](https://www.builtin.com/data-science/pseudocode) adlı ingilizce makaleyi okuyun.

</div>

### Bilgi Ölçme

Bu bölüm, bu dersi anladığınızı kontrol etmeniz için sorular içermektedir. Aşağıdaki soruları kendi kendinize yanıtlamakta zorlanıyorsanız, yanıtı bulmak için yukarıdaki materyali gözden geçirin.

- [Problem çözme sürecindeki üç aşama nedir?](#problem-solving-stages)
- [Öncelikle sorunu net bir şekilde anlamak neden önemlidir?](#important-understand-problem)
- [Sorunun daha net anlaşılmasına yardımcı olmak için ne yapabilirsiniz?](#help-understand-problem)
- [Problem çözme sürecinin planlama aşamasında yapmanız gerekenlerden bazıları nelerdir?](#planning-stage)
- [Algoritma nedir?](#algorithm)
- [Sözde kod nedir?](#pseudo)
- [Bir sorunu parçalara ayırmanın ve daha küçük sorunları çözmenin avantajları nelerdir?](#breaking-problem)

### Ek Kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

- Think Like a Programmer adlı ingilizce kitabının ilk bölümünü okuyun: [An Introduction to Creative Problem Solving](https://nostarch.com/thinklikeaprogrammer)(*ücretsiz değil*). Bu kitabın örnekleri C++ dilindedir, ancak kitabın ana fikri programcılara problemleri daha iyi çözmeyi öğretmek olduğu için her şeyi anlayacaksınız. Harika bir kitap ve her kuruşuna değer. Sizi daha iyi bir programcı yapacaktır.
- [Tekrarlayan programlama teknikleri hakkındaki bu ingilizce videoyu](https://ocw.mit.edu/courses/res-tll-004-stem-concept-videos-fall-2013/resources/basic-programming-techniques/) izleyin.
- Jonathan Blow'un yazılım projelerinde problem çözmeye nasıl yaklaşılması gerektiğine dair bilgece tavsiyeler verdiği [zor problemleri çözme](https://www.youtube.com/watch?v=6XAu4EPQRmY) konusundaki ingilizce videosunu izleyin.
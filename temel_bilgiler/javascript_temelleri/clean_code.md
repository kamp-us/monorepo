---
title: "Temiz Kod"
---

### Giriş


Bir geliştiricinin işinin büyük bir kısmının kod yazmaktan ibaret olduğunu düşünebilirsiniz. Ancak gerçekte zamanın önemli bir kısmı kodu _okumak_ için harcanır. Buna diğer ekip üyeleri tarafından yazılan kodlar, artık ekibinizin bir parçası olmayan kişiler tarafından yazılan kodlar ve hatta iki hafta önce yazdığınız ancak hakkında pek bir şey hatırlamadığınız kodlar da dahildir.

Bu ilkeleri hemen ustalaşmanız gereken bir şey olarak düşünmeyin. Herkes bazen dağınık kod yazar, profesyoneller bile. Burada yapmak istediğimiz şey, ilerledikçe kodunuzun okunabilirliğini artırmanıza yardımcı olabilecek bazı yönergeler vermektir. Ne kadar çok kod yazarsanız, hem okunabilirlik hem de diğer açılardan o kadar iyi hale gelecektir.

Bu fikirleri test edin ve kod yazarken bunları düşünce sürecinize dahil etmeye çalışın, ancak zarif, kristal berraklığında kod yazamadığınız için kendinizi hırpalamayın. Mükemmelliğe değil, kademeli gelişime odaklanın.

Bunu da aradan çıkardığımıza göre, başlayalım!

### Derse genel bakış

Bu bölüm, bu derste öğreneceğiniz konuların genel bir özetini içermektedir.

- Okuması zor ile okuması kolay kod arasındaki farkı nasıl ayırt edebilirim?
- Kodunuzu daha temiz hale getirmek için programlama prensiplerini kullanın.
- İyi yorumlar yazın.

### Temiz kod nedir?


Aşağıdaki örnekleri inceleyin:



Örnek A;

```JavaScript

const x = function(z) {
  let w = 0;z.forEach(
function(q) {
     w += q;
});return w;
};

x([2, 2, 2]);
```

Örnek B;

```JavaScript
const sumArray = function(array) {
  let sum = 0;
  array.forEach(function(number) {
    sum += number;
  });
  return sum;
};

sumArray([2, 2, 2]);
```

Bu örneklerden hangisini okumayı daha kolay buluyorsunuz? İkincisinin daha anlamlı olduğu hemen anlaşılıyor. Şaşırtıcı bir şekilde, bu fonksiyonların her ikisi de aynı görevi yerine getirir \(tam olarak aynı şekilde!\) ve her ikisi de geçerli koddur. Ancak ikincisi çok daha okunabilirdir. Neden mi?

İlk örnekte tek harfli değişkenler kullanılmış, bir satırın ortasında noktalı virgül var ve girinti tutarsız. Sonuç olarak ortaya kafa karıştırıcı ve dağınık bir kod parçası çıkıyor. İlk fonksiyonu yazmış olan biriyle bir proje üzerinde işbirliği yaptığınızı düşünün. İşinize devam edebilmeniz için neler olup bittiğini çözmeniz ne kadar sürer? Ya da belki de bunu sadece iki hafta önce kendiniz yazdınız ve var olduğunu bile tamamen unuttunuz. Her iki durumda da eninde sonunda neler olduğunu anlayacaksınız, ancak bu hiç de eğlenceli olmayacak.

İlk fonksiyonu yazmış olan biriyle bir proje üzerinde işbirliği yaptığınızı düşünün. İşinize devam edebilmeniz için neler olup bittiğini çözmeniz ne kadar sürer? Ya da belki de bir süre önce kendiniz yazdınız ve var olduğunu bile tamamen unuttunuz. Her iki durumda da, eninde sonunda neler olduğunu anlayacaksınız, ancak bu eğlenceli olmayacak.

Öte yandan Örnek B, temiz kodu temsil eder. Her bir parçanın tam olarak ne yaptığını bilmeseniz de, fonksiyon ve değişkenler açıkça adlandırıldığı için neler olduğunu tahmin etmek çok daha kolaydır. Girintileme tutarlı ve mantıklı bir model izliyor ve neyse ki satır içinde kodu kesintiye uğratan noktalı virgüller yok.

Bir döngü veya çağırma fonksiyonu bağlamında değişken adı olarak tek karakter kullanmak uygundur, ancak başka bir yerde uygun değildir.

### camelCase hakkında

Büyük harf kullanımını tartıştığımıza göre, camelCase'den bahsetmek gerekir. camelCase, birden fazla kelimenin boşluk veya noktalama işareti olmadan birlikte yazılmasına olanak tanıyan bir adlandırma kuralıdır. CamelCase'de, bir değişken adı `setTimeout` örneğimizde olduğu gibi birden fazla kelimeden oluştuğunda, ilk kelime tamamen küçük harfle yazılırken, ikinci kelime (ve sonraki tüm kelimeler) büyük harfle yazılır.

Bu ders boyunca değişkenlerimizin ve fonksiyonlarımızın çoğu (en azından iyi örneklerde!) camelCase kullanılarak adlandırılmıştır. Bu örneği takip etmelisiniz.

### Fonksiyonları ve değişkenleri adlandırma

İlk örneğimizde bir şeyleri _anlamlı bir şekilde_ adlandırmanın önemine zaten değinmiştik. İyi bir değişken ya da fonksiyon adının ne olduğunu biraz daha açalım.

#### Açıklayıcı isimler kullanın

İyi bir isim açıklayıcıdır. İyi örneğimizde, dizideki her yeni `sayı`nın eklendiği bir `sum` değişkenimiz var. Fonksiyon `sumArray` olarak adlandırılmıştır ve fonksiyon adından da anlaşılacağı üzere bu işi yapar. Güzel, temiz ve anlaşılır.

Şimdi, kötü örnek hakkında biriyle sohbet ettiğinizi hayal edin. İçinde `z`, `w` ve `q` gibi değişkenler bulunan `x` adlı bir fonksiyonla karşılaşıyorsunuz. Kafanızın karışacağı kesin.

#### Tutarlı bir kelime dağarcığı kullanın

Aynı tipteki değişkenler tutarlı isimlendirmeye sahip olmalıdır. Bir Tic-Tac-Toe oyunundan aşağıdaki örnekleri düşünün:

```javascript
// Good
function getUserScore();
function fetchPlayerName();
function retrievePlayer1Tag();

 // Bad
function getPlayerScore();
function getPlayerName();
function getPlayerTage();
```

Kötü örnekte, oyuncuya ve yapılan eylemlere atıfta bulunmak için üç farklı isim kullanılmıştır. Ayrıca, bu eylemleri tanımlamak için üç farklı fiil kullanılmıştır. İyi örnek hem değişken isimlendirmesinde hem de kullanılan fiillerde tutarlılığı korumaktadır.

Değişkenler her zaman bir isim veya sıfatla (yani bir isim tamlamasıyla) başlamalı ve bir fiil ile işlev görmelidir.

Başka bir dizi örnek bunun neden önemli olduğunu gösterebilir:

```javascript
// iyi
const numberOfThings = 10;
const myName = "Thor";
const selected = true;

// kötü (fiillerle başlayanlar fonksiyonlarla karıştırılabilir)
const getCount = 10;
const isSelected = true;

// iyi
function getCount() {
  return numberOfThings;
}

// kötü (bu bir isim)
function myName() {
  return "Thor";
}
```

### Aranabilir ve hemen anlaşılabilen isimler kullanın

Bazen, bildirilmemiş bir değişken kullanmak cazip gelebilir. Bir örneğe daha göz atalım:

```javascript
setTimeout(stopTimer, 3600000);
```

Muhtemelen sorunu hemen fark etmişsinizdir. `3600000` ne anlama geliyor ve `stopTimer` çalıştırılmadan önce bu zaman aşımı ne kadar süre geri sayacak? 

Şimdi, açıklayıcı bir değişken ekleyerek bu kodu daha anlamlı hale getirelim:

```javascript
const MILLISECONDS_PER_HOUR = 60 * 60 * 1000; // 3,600,000;

setTimeout(stopTimer, MILLISECONDS_PER_HOUR);
```

Çok daha iyi, değil mi? Değişken açıklayıcı bir isimle bildirilir ve bu kodu okurken herhangi bir hesaplama yapmanız gerekmez.

Daha önce camelCase önerdiğimiz halde bu değişkenin neden büyük harflerle bildirildiğini merak edebilirsiniz. Bu, programcının değişkenin _gerçekten_ bir sabit olduğundan kesinlikle emin olduğu durumlarda kullanılması gereken bir kuraldır. Bir saat içindeki milisaniyelerin asla değişmeyeceğini biliyoruz, bu yüzden burada uygun.



### Girintiler ve satır uzunluğu

Şimdi daha tartışmalı konulara geçme zamanı. Kodlarını girintilemek için tab tuşu kullanan kodlayıcılar ile boşluk tuşu kullanan yazılımcılar arasındaki savaş o kadar köklüdür ki [artık bir şakaya dönüşmüştür] (https://www.youtube.com/watch?v=SsoOG6ZeyUI).

Aslında önemli olan _tutarlılıktır_. Girinti yapmak için bir yol seçin ve buna sadık kalın. Çeşitli JS stil kılavuzları farklı seçenekler önermektedir ve biri diğerinden gerçekten üstün değildir.

#### Satır uzunluğu


Yine, farklı stil kılavuzları bunun için farklı seçenekler önerecektir, ancak hemen hemen TÜMÜ her kod satırının uzunluğunun sınırlandırılmasını önerir.

Genellikle yaklaşık 80 karakterden uzun satırları manuel olarak keserseniz kodunuzun okunması daha kolay olacaktır. Birçok kod düzenleyicinin ekranında bu eşiği ne zaman geçtiğinizi gösteren bir çizgi vardır. Satırları manuel olarak keserken, bir operatör veya virgülden hemen sonra kesmeye çalışmalısınız.

Ardından, devam satırlarını biçimlendirmenin birkaç yolu vardır. Örneğin, şunları yapabilirsiniz:

```javascript
// Bu satır biraz uzun
let reallyReallyLongLine = something + somethingElse + anotherThing + howManyTacos + oneMoreReallyLongThing;

// Bu şekilde değiştirebilirsiniz
let reallyReallyLongLine =
  something +
  somethingElse +
  anotherThing +
  howManyTacos +
  oneMoreReallyLongThing;

// ya da bu şekilde
   let anotherReallyReallyLongLine = something + somethingElse + anotherThing +
                                     howManyTacos + oneMoreReallyLongThing;
```

### Noktalı virgüller

Noktalı virgüller JavaScript'te _çoğunlukla_ isteğe bağlıdır, çünkü atlandıklarında JS derleyicisi bunları otomatik olarak ekleyecektir. Bu işlevsellik belirli durumlarda bozulabilir ve kodunuzda hatalara yol açabilir, bu nedenle noktalı virgül eklemeye alışmak daha iyidir.

Tekrar ediyorum: önemli olan tutarlılıktır.

### Yorumlar hakkında

Yorumlar harika bir araçtır. Ancak her iyi araç gibi yanlış kullanılabilirler. Özellikle kodlama yolculuğunun başlarında olan biri için, kodun yaptığı her şeyi açıklayan yorumlara sahip olmak cazip gelebilir. Bu iyi bir uygulama değildir.

Şimdi yorum yazarken sıkça karşılaşılan bazı tuzaklara ve bunların neden tuzak olduğuna bakacağız.

#### git kullanmanız gerekirken yorum kullanmayın

Kodunuzda yaptığınız değişiklikleri veya eklemeleri açıklayan yorumlar yapmak cazip gelebilir. Örneğin:

```javascript
/**
 * 2023-01-10: Karışıklığa neden olan gereksiz kod kaldırıldı (RM)
 * 2023-03-05: Kod basitleştirildi (JP)
 * 2023-05-15: Üretim sırasında hatalara neden olan fonksiyonlar kaldırıldı (LI)
 * 2023-06-22: Değerleri birleştirmek için yeni bir fonksiyon eklendi (JR)
 */
```

Sorun şu ki, değişiklikleri takip etmek için zaten bir aracınız var - git! Bu yorumları takip etmek bir angarya haline gelecek ve neler olduğuna dair eksik bir resme sahip olacaksınız. Dosyalarınız ayrıca oraya ait olmayan şişirmeler de içerecektir.

Git kullanarak, tüm bu bilgiler repoda düzgün bir şekilde organize edilecek ve `git log` ile kolayca erişilebilir olacaktır.

Aynı şey artık kullanılmayan kodlar için de geçerlidir. Gelecekte tekrar ihtiyacınız olursa, git commit'lerinize başvurmanız yeterlidir. Başka bir şeyi test ederken bir şeyi yorumlamak elbette sorun değildir, ancak bir kod parçasına ihtiyaç duyulmadığında, onu silin. Dosyalarınızda böyle bir şey bulundurmayın:

```javascript
theFunctionInUse();
// oldFunction();
// evenOlderUselessFunction();
// whyAmIEvenHereImAncient():
```

#### Nedenini söyleyin, nasılını değil

Yorumların amacı, kodunuzu kopyalayan pseudo kod sağlamak değildir. İyi yorumlar, bir kod parçasının arkasındaki _nedenleri_ açıklar.

Bunu pratikte görmek için bir örneğe bakalım:

```javascript
// Kötü Örnek - yorum nedenini söylemez, sadece ne ve nasıl olduğunu söyler

// Bu fonksiyon i'nin değerini 1 artırır
function incrementI(i) {
  i = i + 1; // i'ye bir ekleyin
  return i;
}

// Daha İyi Örnek - yorum bir neden söyler

// Bu fonksiyon bir sonraki elemana geçmek için index değerini artırır
function incrementI(i) {
  i = i + 1;
  return i;
}

// İyi Örnek - kod gereken her şeyi anlatıyor

function moveToNextElement(index) {
  index = index + 1;
  return index;
}
```

Kötü örnekte, yorumlar kodun ne yaptığını iki kez açıklıyor. Ancak bunun için sadece kodu okuyabilirdiniz, bu nedenle yorumlar gereksizdir.

Daha iyi örnekte, yorum fonksiyonun amacını açıklıyor: bir sonraki elemana geçmek. Bu iyi ama daha da iyisini yapabiliriz.

İyi örnekte, hiçbir yoruma gerek yoktur. Açıklayıcı fonksiyon ve değişken isimlerinin kullanılması ek açıklama ihtiyacını ortadan kaldırıyor. Oldukça güzel, değil mi?

_Bu, iyi kodun yorumlardan yoksun olması gerektiği anlamına gelmez_. Birçok durumda, iyi yerleştirilmiş yorumlar paha biçilemezdir. Ödev bölümünde bağlantısı verilen makale bu konuda daha derinlemesine bilgi vermektedir. Yorumlardan kaçınmanızı istemiyoruz, sadece en iyi nasıl kullanıldıklarına dikkat edin.

Yorumun iyi bir amaca hizmet ettiği son bir örneğe bakalım:

```javascript

function calculateBMI(height, weight) {
    // BMI formülü kilogram cinsinden ağırlığın metre kare cinsinden boya bölünmesiyle elde edilir
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  return bmi;
}
```

Bu yorum, okuyucunun BMI'nin sade bir dille nasıl hesaplandığı konusunda bilgilenmesine yardımcı olmakta, boy uzunluğunun neden dönüştürülmesi gerektiğini ve aşağıdaki hesaplamanın ne işe yaradığını görmesini sağlamaktadır. Sadece isimlendirme konusunda neredeyse tamamız ancak yorum yine de daha fazla netlik katıyor.


### Sonuç

Şimdi bu fikirleri ele aldığımıza göre, başlangıçta paylaştığımız hatırlatmaya geri dönmek iyi olacaktır. Mükemmel derecede temiz kod yazmaya çalışmayın, bu sadece hayal kırıklığına yol açacaktır. "Spagetti" yazmak kaçınılmazdır, herkes bazen bunu yapar. Sadece bu fikirleri aklınızda tutun ve zaman ve sabırla kodunuz daha temiz olmaya başlayacaktır.

Temiz kod yazmayı öğrenmek sürekli bir gelişim sürecidir. Bu süreç, Odin Projesi'ni tamamlamanızın ötesine geçecektir. Bu ders, bu yolculuk için bir başlangıç, bir başlangıç noktası olarak hizmet etmeyi amaçlamaktadır.


### Ödev

<div class="lesson-content__panel" markdown="1">

1.  [Temiz koda dair ingilizce bir tavsiye listesi](https://onextrapixel.com/10-principles-for-keeping-your-programming-code-clean/).
2.  [Bu ingilizce makale](https://blog.codinghorror.com/coding-without-comments/) ve [bir de bu ingilizce makale](https://blog.codinghorror.com/code-tells-you-how-comments-tell-you-why/) kodunuzdaki yorumların önemini anlatmaktadır.
</div>

### Bilgi ölçme

Bu bölüm, bu dersi kendi kendinize anlayıp anlamadığınızı kontrol etmeniz için sorular içermektedir. Bir soruyu yanıtlamakta zorlanıyorsanız, soruya tıklayın ve bağlantılı olduğu materyali gözden geçirin.

- [Temiz kod yazmak neden önemli?](#giriş)
- [Önceden bahsedilen 5 temiz kod yazma prensipleri nelerdir? bunu öğrenmek için bu ingilizce makaleye göz atın.](https://onextrapixel.com/10-principles-for-keeping-your-programming-code-clean/)
- [İyi ve kötü yorumların arasındaki farklar nelerdir? bunu öğrenmek için bu ingilizce makaleye göz atın.](https://onextrapixel.com/10-principles-for-keeping-your-programming-code-clean/)

### Ek kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

* [Güzel bir ingilizce görüş yazısı](https://www.martinfowler.com/bliki/CodeAsDocumentation.html)
* [Airbnb stil rehberi](https://github.com/airbnb/javascript)  
* [Cümle yazmak için zincirleme yöntemini kullanmak konulu ingilizce makale](https://web.archive.org/web/20190211152543/https://javascriptissexy.com/beautiful-javascript-easily-create-chainable-cascading-methods-for-expressiveness/)   
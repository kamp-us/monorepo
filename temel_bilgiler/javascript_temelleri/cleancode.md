### Giriş

Geliştiriciler kod yazmaktan daha çok, kod okumaya zaman harcıyorlar. Bu kendi kodunuz için bile geçerlidir. Lütfen kendinize ve kodunuzu kullanacak, bakımını yapacak veya ileride geliştirecek kişilere iyilik yapmak için okunabilir kod yazmayı öğrenin.

### Derse Genel Bakış

Bu bölüm, bu derste öğreneceğiniz konuların genel bir özetini içermektedir.

- Okuması zor ile okuması kolay kod arasındaki farkı nasıl ayırt edebilirim?
- Kodunuzu daha temiz hale getirmek için programlama prensiplerini kullanın.
- İyi yorumlar yazın.

### Temiz Kod Yazma

Aşağıdaki iki JavaScript kod parçasını inceleyin:

Bu okuması zor ve kötü görünen bir kod örneği:

~~~JavaScript
const x =
function(z) {
let w = 0;z.forEach(
function(q){
     w += q;
});return w;
};

x([2, 2, 2]);
~~~

Şimdi bu temiz ve okuması kolay bir kod örneği:

~~~JavaScript
const sumArray = function(array) {
  let sum = 0;
  array.forEach(function(number) {
    sum += number;
  });
  return sum;
};

sumArray([2, 2, 2]);
~~~

İnanın veya inanmayın, her iki fonksiyon da aynı şeyi\(tamamen aynı şekilde!\) yapıyor ve her ikisi de tamamen geçerli kodlar ancak görüldüğü üzere ikincisini takip etmesi daha kolay. Başka birisiyle ortak bir projede çalıştığınızı ve ilk fonksiyonu onun yazdığını hayal edin. İşinizi yapabilmeniz için ne olup bittiğini anlamalısınız, ilk örnekte bunun için ne kadar süre harcamanız gerekeceğini düşünün. Kendi projenizde tek başınıza çalıştığınızı ve bir iki hafta önce ilk örnekteki fonksiyonu yazdığınızı düşünün. Tam olarak ne yaptığınızı muhtemelen hatırlamayacaksınız. Her şeyi çözmek ve anlamak için _yine_ bayağı bir zaman harcamanız gerekecektir.

İkincisini takip etmek gerçekten çok daha kolaydır. Kodun içerisindeki her şeyi tam olarak anlamasanız bile değişkenler açıkça isimlendirildiği için tahmin edebilirsiniz. Girintinin tutarlı kullanımı da fonksiyonun farklı bölümlerini anlaşılabilir kılmaktadır.

Bir JavaScript kodunu harika kılan şeyin ne olduğu hakkında birçok farklı görüş var. En önemli şey sadece tutarlı olmanızdır. Kodları girintilemek için tab kullanan ve boşluk kullanan kullanıcılar arasındaki savaş o kadar derinleşmiştir ki [artık bir şaka haline gelmiştir](https://www.youtube.com/watch?v=SsoOG6ZeyUI) ancak tutarlı olduğunuz sürece gerçekten hangisini tercih ettiğiniz önemli değil.

### Kurallar veya Kılavuzlar

1.  Girintileme: Kullandığınız girintileme stili _gerçekten_ önemli değil. Farklı JS stil rehberleri farklı seçenekler önermektedir ve hiçbiri bir diğerinden üstün değildir. Her halükarda önemli olan tutarlılıktır. Alıştırmalarımızda girintileme için 2 boşluk kullanacağız.

2.  Noktalı virgüller: Noktalı virgüller, JavaScript'te _çoğu zaman_ isteğe bağlıdır. Çünkü eksikse, JS derleyicisi otomatik olarak ekleyecektir. Fakat bu fonksiyonalite bazı durumlarda bozulabilir ve kodunuzda hatalara neden olabilir. Bu yüzden noktalı virgülü eklemeye alışmak daha iyidir. Ekleyin gitsin!

3. Satır uzunluğu: Yine farklı stil rehberleri bu konuda farklı önerilerde bulunabilir ancak neredeyse HEPSİ, satır uzunluğunu sınırlandırmayı önerir. Bu kural diğer kurallar kadar sıkı değildir. Fakat genel bir kural olarak, kodunuzun her satırını yaklaşık 80 karakterden sonra manuel olarak bölmeniz kodunuzu daha okunaklı hale getirir. Birçok kod düzenleyicisi, bu eşiği geçtiğinizde size uyarı verecek bir satır göstergesine sahiptir. Satırları manuel olarak bölerken, operatör veya virgülün hemen sonrasında bölmeniz önerilir. Devam satırlarını düzenlemenin birkaç yolu vardır. Örneğin şunları yapabilirsiniz:

   - devam satırlarını bir kez girintileyin.
   - devam satırlarını, ilk değişkeni baz alarak dikeylemesine hizalayın
   - veya tamamen farklı bir biçim kullanabilirsiniz. Kurallar katı değildir ve iş ortamından iş ortamına değişkenlik gösterebilir, yeter ki tutarlı olmaya dikkat edin.

   ~~~javascript
   // Olası bir format:
   let reallyReallyLongLine =
     something +
     somethingElse +
     anotherThing +
     howManyTacos +
     oneMoreReallyLongThing;

   // Diğer olası bir format:
   let anotherReallyReallyLongLine = something + somethingElse + anotherThing +
                                     howManyTacos + oneMoreReallyLongThing;
   ~~~
   
   ​

4.  Fonksiyonları ve Değişkenleri İsimlendirme: Fonksiyonlar ve değişkenler için isimlendirme açık olmalıdır. Her zaman camelCase kullanın. Tutarlılık ve okunabilirlik için değişkenler her zaman bir isim veya sıfatla (yani bir tamlama oluşturmalı) başlamalı ve fonksiyonlar bir fiil ile başlamalıdır. Döngü veya callback fonksiyonu bağlamında tek karakterli değişken adları kullanmak sorun değil ama başka yerlerde kullanmamaya özen gösterin.

    ~~~javascript
    // İyi
    const numberOfThings = 10;
    const myName = "Thor";
    const selected = true;

    // Kötü (bu örnekte değişken isimleri fiillerle başladığı için fonksiyonlarla karıştırılabilir)
    const getCount = 10;
    const isSelected = true;

    // İyi 
    function getCount() {
      return numberOfThings;
    }

    // Kötü (bu örnekte fonksiyon bir isimdir)
    function myName() {
      return "Thor";
    }
    ~~~


### Ödev

<div class="lesson-content__panel" markdown="1">

1.  [Temiz koda dair ipucu listesi](https://onextrapixel.com/10-principles-for-keeping-your-programming-code-clean/).
2.  [Bu makale](https://blog.codinghorror.com/coding-without-comments/) ve [bir de bu makale](https://blog.codinghorror.com/code-tells-you-how-comments-tell-you-why/) kodunuzdaki yorumların önemini anlatmaktadır.
</div>

### Bilgi ölçme

Bu bölüm temiz kod yazma dersinde anladığınızı kendi kendinize kontrol etmek için sorular içermektedir. Bir soruyu cevaplamakta zorlanıyorsanız, üzerine tıklamanız ve bağlantıda verilen materyale göz atmanız önerilir.

- [Temiz kod yazmak neden önemli?](#writing-clean-code)
- [Önceden bahsedilen 5 temiz kod yazma prensibini sayın](https://onextrapixel.com/10-principles-for-keeping-your-programming-code-clean/)
- [İyi ve kötü yorumların arasındaki farklar nelerdir?](https://onextrapixel.com/10-principles-for-keeping-your-programming-code-clean/)

### Ek Kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

* [Güzel bir görüş yazısı](https://www.martinfowler.com/bliki/CodeAsDocumentation.html)
* ["Kendi kendini açıklayan kod" rehberi](http://wiki.c2.com/?SelfDocumentingCode)
* [Airbnb stil rehberi](https://github.com/airbnb/javascript)  
* [Cümle yazmak için zincirleme yöntemini kullanmak](https://web.archive.org/web/20190211152543/https://javascriptissexy.com/beautiful-javascript-easily-create-chainable-cascading-methods-for-expressiveness/)   
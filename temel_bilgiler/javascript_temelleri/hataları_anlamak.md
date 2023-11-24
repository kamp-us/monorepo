### Giriş

Bir geliştirici olarak hata mesajlarını okumak ve anlamak bir gerekliliktir. İlk bakışta yeni başlayan pek çok kişi, aşina olunmayan terimler içerdiği için "korkutucu" ve anlaşılması zor gibi görünen hata mesajlarından uzak durur. Ancak, hata mesajları geliştiricilere bir bilgi hazinesi sunar ve bu mesajları nasıl çözeceğiniz konusunda bilmeniz gereken her şeyi size söyler! Hata mesajlarını ve uyarıları korkmadan ayrıştırabilmek, uygulamalarınızda etkili bir şekilde hata ayıklamanızı, başkalarından anlamlı yardım almanızı ve bir hatayla karşılaştığınızda ilerlemek için kendinizi güçlendirmenizi sağlayacaktır.

### Derse genel bakış

Bu bölüm, bu derste öğreneceğiniz konuların genel bir özetini içerir.

-   En az üç tür Javascript hatası adlandırın
-   Hatanın nereden kaynaklandığını bulmanıza yardımcı olacak bir hata mesajının iki bölümünü tanımlayın
-   Hataların nasıl araştırılacağını ve çözüleceğini anlayın

### Bir hatanın anatomisi

Hata, JS dilinde yerleşik olarak bulunan, bir ad/tür ve bir mesajdan oluşan bir nesne türüdür. Hatalar, hatadan sorumlu kodu bulmanıza, bu hatayı neden aldığınızı belirlemenize ve hatayı çözmenize yardımcı olabilecek önemli bilgiler içerir. 

<div class="lesson-note lesson-note--tip" markdown=1>
  Bu dersteki tüm örnekler için kodu tarayıcının konsolunda çalıştırmalısınız.
</div>

Aşağıdaki kodu yazdığımızı varsayalım:

```javascript
const a = "Hello"
const b = "World"

console.log(c)
```

Bu kod çalışacak, ancak bir hata oluşturacaktır. Teknik olarak ele aldığımızda, bu işleme hata "fırlatmak" denir. Bir hatanın ilk kısmı hatanın türünü gösterir. Bu, neyle karşı karşıya olduğunuza dair ilk ipucunu sağlar. Dersin ilerleyen bölümlerinde farklı hata türleri hakkında daha fazla bilgi edineceğiz. Bu örnekte, bir `ReferenceError` hatamız var.

![Referans Hatası(Reference Error) Örneği](https://cdn.statically.io/gh/TheOdinProject/curriculum/175b5ef2a1b4758a7b75f4ef43d7e27203e5707b/foundations/javascript_basics/understanding_errors/imgs/00.png)

Bir `ReferenceError`, geçerli kapsam içinde tanımlanmamış ve/veya belirlenmemiş bir değişkene atıfta bulunulduğunda fırlatılır. Bizim durumumuzda, hata mesajı `c is not defined` c tanımlanmadığı için hatanın oluştuğunu açıklar. Bu türdeki farklı hatalar, `ReferenceError`a neyin neden olduğuna bağlı olarak farklı mesajlara sahiptir. Örneğin, karşılaşabileceğiniz bir diğer mesaj `ReferenceError: can't access lexical declaration 'X' before initialization` şeklindedir. Gördüğümüz gibi, bu yukarıdaki orijinal `ReferenceError`dan tamamen farklı bir nedene işaret etmektedir. Hem hata türünü hem de hata mesajını anlamak, hatayı neden aldığınızı anlamak için çok önemlidir.

Bir hatanın bir sonraki kısmı bize hatayı bulabileceğiniz dosyanın adını (bu durumda, `script.js`) ve ayrıca satır numarasını verir. Bu, kodunuzdaki sorunlu satıra kolayca gitmenizi sağlar. Burada hata, `at script.js:4` metniyle hata mesajının altında bir bağlantı olarak görüntülenen `script.js`nin dördüncü satırında kaynaklanmaktadır. Bu bağlantıya tıklarsanız, çoğu tarayıcı tam kod satırına ve Geliştirici Araçları'nın Kaynaklar sekmesindeki kodunuzun geri kalanına gider. Bazen tarayıcınızın konsolu hatanın oluştuğu satırdaki sütunu (veya karakteri) de görüntüler. Örneğimizde bu `at script.js:4:13` şeklinde olacaktır.

Hatanın bir diğer önemli kısmı da **yığın izidir**(stack trace). Bu, uygulamanızda hatanın ne zaman atıldığını ve hataya yol açan hangi işlevlerin çağrıldığını anlamanıza yardımcı olur. Örneğin, aşağıdaki koda sahipsek: 

```javascript
const a = 5;
const b = 10;

function add() {
  return c;
}

function print() {
  add();
}

print();
```

`print()` fonksiyonumuz `add()` fonksiyonunu çağırmalıdır, bu da `c` adında henüz bildirilmemiş bir değişken döndürür. İlgili hata aşağıdaki gibidir:

![Referans Hatası Yığın İzi](https://cdn.statically.io/gh/TheOdinProject/curriculum/284f0cdc998be7e4751e29e8458323ad5d320303/foundations/javascript_basics/understanding_errors/imgs/01.png)

Yığın izi bize bunu söylüyor:

1.  Satır 5'te bildirilen `add()` kapsamında `c is not defined`.
2.  `add()` fonksiyonu, 9. satırda bildirilen `print()` fonksiyonu tarafından çağrıldı.
3.  `print()` fonksiyonunun kendisi 12. satırda çağrılmıştır.

Böylece yığın izi, bir hatanın kaynağına kadar gelişimini izlemenizi sağlar; bu da burada `add()` bildirimidir.

### Yaygın hata türleri

Bunlar karşılaşacağınız en yaygın hatalardan bazılarıdır, bu nedenle bunları anlamak önemlidir.

#### Sözdizimi hatası(Syntax Error)

Çalıştırmaya çalıştığınız kod doğru yazılmadığında, yani JavaScript'in dilbilgisi kurallarına uygun olmadığında sözdizimi hatası oluşur. Örneğin bu:

```javascript
function helloWorld() {
  console.log "Hello World!"
}
```

aşağıdaki hatayı verecektir, çünkü `console.log()` için parantezleri unuttuk!

![Sözdizimi Hatası Örneği](https://cdn.statically.io/gh/TheOdinProject/curriculum/284f0cdc998be7e4751e29e8458323ad5d320303/foundations/javascript_basics/understanding_errors/imgs/02.png)

[MDN - SyntaxError ingilizce makalesi](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)

#### Referans hatası(Reference Error)

Bu dersteki ilk örnekte referans hatalarını ele aldık, ancak bunların referans vermeye çalıştığınız değişken mevcut olmadığı (mevcut kapsam dahilinde) veya yanlış yazıldığı için ortaya çıktığını hatırlamak önemlidir!

[MDN - ReferenceError ingilizce makalesi](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)

#### Tür hatası(Type Error)

Bu hatalar birkaç farklı nedenden dolayı atılır:

MDN'ye göre, bir `TypeError` şu durumlarda atılabilir:

> -   bir fonksiyona aktarılan bir işlenen veya argüman, o işleyici veya fonksiyon tarafından beklenen türle uyumsuz olduğunda;
> -   veya değiştirilemeyecek bir değer değiştirilmeye çalışıldığında;
> -   veya bir değer uygun olmayan bir şekilde kullanılmaya çalışıldığında.

Diyelim ki, aşağıdaki gibi tek bir mesaj oluşturmak için birleştirmek istediğiniz iki dizemiz var:

```javascript
const str1 = "Hello";
const str2 = "World!";
const message = str1.push(str2);
```

![Tür Hatası Örneği](https://cdn.statically.io/gh/TheOdinProject/curriculum/4ed59981b4ce2c60b5b83bf7415d3127b61821f5/foundations/javascript_basics/understanding_errors/imgs/03.png)

Burada, `str1.push is not a function`(str1.push bir fonksiyon değildir) şeklinde bir mesaj içeren bir `TypeError` alıyoruz. Bu, öğrencilerin kafasını karıştıran yaygın bir hata mesajıdır, çünkü `.push()`un kesinlikle bir fonksiyon olduğunu biliyoruz!(muhtemelen daha önce _dizilere_ öğe eklemek için kullandınız). Ancak önemli olan kısım - `.push()` bir dize yöntemi değil, bir dizi yöntemidir. Dolayısıyla, bir dize metodu olarak bulabileceğiniz "bir fonksiyon değildir". Eğer `.push()` metodunu uygun bir dize metodu olan `.concat()` ile değiştirirsek, kodumuz amaçlandığı gibi çalışır! Bir `TypeError` ile karşılaştığınızda aklınızda bulundurmanız gereken iyi bir not, bir yöntemi veya işlemi çalıştırmaya çalıştığınız veri türünü göz önünde bulundurmaktır. Muhtemelen düşündüğünüz gibi olmadığını ya da işlemin veya yöntemin bu türle uyumlu olmadığını göreceksiniz.

[MDN - TypeError ingilizce makalesi](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)

### Hataları çözmek için ipuçları

Bu noktada, bu hataları nasıl çözebileceğimizi merak ediyor olabilirsiniz.

1.  Hatayı *dikkatlice* okuyun ve kendi başınıza anlamaya çalışın.
2.  Ardından, hatayı Google'da arayın! Büyük olasılıkla StackOverflow'da veya belgelerde bir düzeltme veya açıklama bulabilirsiniz. Başka bir şey yoksa, bu hatayı neden aldığınıza dair daha fazla netlik elde edeceksiniz.
3.  Hata ayıklayıcıyı kullanın! Daha önce de belirtildiği gibi, hata ayıklayıcı daha kapsamlı sorun giderme için harikadır ve bir geliştirici için kritik bir araçtır. Kesme noktaları ayarlayabilir, uygulamanızın yürütülmesinin herhangi bir noktasında verilen herhangi bir değişkenin değerini görüntüleyebilir, kodda satır satır ilerleyebilir ve daha fazlasını yapabilirsiniz! Son derece değerli bir araçtır ve her programcı nasıl kullanılacağını bilmelidir. [Bu ingilizce eğitim Chrome Debugger'ı incelemektedir] (https://developer.chrome.com/docs/devtools/javascript/).
4.  Konsolu kullanın! `console.log()` hızlı hata ayıklama için popüler bir seçimdir. Daha kapsamlı sorun giderme işlemleri için hata ayıklayıcıyı kullanmak daha uygun olabilir, ancak `console.log()`u kullanmak, fonksiyonlarınızda adım adım ilerlemenize gerek kalmadan anında geri bildirim almak için harikadır. Ayrıca `console.table()`, `console.trace()` ve daha fazlası gibi başka yararlı yöntemler de vardır! Ek yöntemleri [bu ingilizce makalede](https://www.w3schools.com/jsref/obj_console.asp) bulabilirsiniz.

### Hatalar vs. uyarılar

Son olarak, birçok kişi uyarılarla karşılaşır ve bunları hata olarak değerlendirir. Hatalar programınızın ya da çalıştırmaya çalıştığınız işlemin yürütülmesini durdurur ve daha fazla işlem yapılmasını engeller. Öte yandan uyarılar, programınızı çalışma zamanında ya da hiç çökertmeyebilecek potansiyel sorunlar hakkında size fikir veren mesajlardır! Mümkünse ve mümkün olan en kısa sürede bu uyarıları ele almanız gerekse de, uyarılar hatalar kadar önemli değildir ve daha çok bilgilendirme amaçlıdır. Uyarılar genellikle sarı renkle gösterilirken, hatalar genellikle kırmızı renkle gösterilir. Bu renkler bir kural olmamakla birlikte, hangi platformda karşılaştığınızdan bağımsız olarak çoğu zaman ikisi arasında görsel bir fark olacaktır.

### Ödev

<div class="lesson-content__panel" markdown="1">

1.  [MDN'deki bu ingilizce ders] (https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong) üzerinden çalışın. Kasıtlı hatalar içeren başlangıç kodlarını indirdiğinizden emin olun.
</div>

### Bilgi ölçme

Bu bölüm, bu dersi kendi kendinize anlayıp anlamadığınızı kontrol etmeniz için sorular içermektedir. Bir soruyu yanıtlamakta zorlanıyorsanız, soruya tıklayın ve bağlantılı olduğu materyali gözden geçirin.

-   [Tür Hatası görmenizin üç nedeni nedir?](#type-error)
-   [Hata ile uyarı arasındaki temel fark nedir?](#errors-vs-warnings)
-   [Bir hatayı çözmek için kullanabileceğiniz bir yöntem nedir?](#tips-for-resolving-errors)

### Ek kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

-   [MDN Javascript Errors Reference ingilizce makalesi](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)
---
title: 'Javascript Temelleri - 3'
---

### Giriş

İşler _gerçekten_ heyecan verici bir hal almak üzere. Şimdiye kadar çeşitli problemleri çözmek için etkileyici miktarda kod yazdınız ancak bu kod o kadar da kullanışlı değildi. Kodlarınızdan birini alıp kodu yeniden yazmak veya değiştirmek zorunda kalmadan, tekrar tekrar kullanabileceğiniz küçük bir paket haline getirdiğinizi hayal edin. İşte fonksiyonların gücü budur ve JavaScript'te _sürekli_ kullanılırlar.

### Derse Genel Bakış

Bu bölüm, bu derste öğreneceğiniz konulara genel bir bakış içermektedir.

- Farklı fonksiyon türleri nasıl tanımlanır ve çağrılır?
- Geri dönüş değeri nasıl kullanılır?
- Fonksiyon kapsamı nedir?

### Fonksiyonlar

1. [İngilizce dilindeki bu uzun MDN makalesi](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions) başlangıç için iyi bir noktadır. Bu dersin kapsamı dışında kalabilecek bazı fonksiyonlar da bulunduğu için endişelenmeyin,'Fonksiyon Kapsamı' ile ilgili bölümlere  odaklanın. Kapsam (scope), genellikle hem yeni başlayan hem de orta düzey yazılımcıları uğraştıran bir konudur, bu nedenle şimdiden bu konuya biraz zaman ayırmak faydalı olacaktır. Bu makale, henüz değinmediğimiz konuları da içerdiği için henüz **yapmamanız** gereken alıştırmaları da içerebilir.
2. [Geri dönüş değerleri](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values) hakkındaki bu İngilizce makaleyi okuyun.
3. Parametreleri ve argümanları aşağıdaki örnek fonksiyon üzerinden inceleyelim:

    ~~~javascript
     function favoriteAnimal(animal) {
       return animal + " is my favorite animal!"
     }

     console.log(favoriteAnimal('Goat'))
    ~~~

    JavaScript'te parametreler, fonksiyon tanımlarken parantez içine yerleştirilen öğelerdir. Fonksiyon argümanları ise bu fonksiyona aktarmaya karar verdiğimiz gerçek değerlerdir. Yukarıdaki örnekte, fonksiyon tanımı ilk satırda yazılmıştır: `function favoriteAnimal(animal)`. Parametre, yani `animal` parantezlerin içinde bulunmaktadır. `animal` yerine `evcil hayvan`, `x` ya da `örnek` de koyabilirdik. Ancak bu durumda parametreyi `animal` olarak adlandırmak, kodumuzu okuyan birine fonksiyon hakkında bir fikir verecektir. Böylece `animal`ın içinde ne olabileceğini tahmin etmek zorunda kalmayacaklardır. `favouriteAnimal()` fonksiyonunun parantezleri içine `animal` yazarak, JavaScript'e `favoriteAnimal` fonksiyonumuza _bazı_ değerler göndereceğimizi söylemiş oluruz. Bu, `animal`ın gelecekte bizim atayacağımız herhangi bir değer için sadece bir **yer tutucu** olduğu anlamına gelir. Peki ama hangi değeri göndereceğiz?
    Son satır olan `favoriteAnimal('Goat')`, `favoriteAnimal` fonksiyonumuzu çağırdığımız ve `'Goat'` değerini bu fonksiyonun içine aktardığımız yerdir. Burada, `'Goat'` bizim argümanımızdır. Burada `favoriteAnimal` fonksiyonuna "Lütfen `'Goat'` değerini favoriteAnimal fonksiyonuna gönder ve `'Goat'` değerini 'animal' yer tutucusunun olduğu her yerde kullan" diyoruz. Parametre kullanmanın sağladığı esneklik sayesinde, herhangi bir hayvanı favorimiz olarak bildirebiliriz.

    'Goat' argümanıyla `console.log()` içinde `favoriteAnimal()`'ı çağırarak fonksiyonun geri dönüş değerini, yani `"Goat is my favorite animal!"` string'ini konsola yazdırdığımıza dikkat edelim. Çağırdığımız `favoriteAnimal('Goat')` fonksiyonunu, farklı bir fonksiyon çağrısına (`log()`) argüman olarak veriyoruz. Bu olasılığı aklınızda bulundurun çünkü sık sık fonksiyon çağrılarını argüman olarak geçireceksiniz. Eğer fonksiyonu console.log() olmadan çağırsaydık, konsolda hiçbir şey görünmeyecekti **ama** yine de fonksiyon bu string'i geri döndürecekti.

    Kendiniz de kodu deneyebilir ve `'Goat'` yerine en sevdiğiniz hayvanı koyabilirsiniz. Argümanı istediğimiz herhangi bir şeyle nasıl değiştirebileceğimize dikkat ettiniz mi? Fonksiyonu tanımlarken fonksiyonun gövdesinde de `animal` ifadesini değiştirmeyi deneyin. Bunu yaptığınızda ne olduğunu gördünüz mü?

4. Ardından, Javascript.info'dan [bu İngilizce makaleyi](http://javascript.info/function-basics) okuyun. Bundan daha önce de bahsetmiştik. JavaScript yıllar içinde biraz değişti ve son zamanlarda fonksiyonlara bazı yenilikler getirildi. Bu makale en faydalı yeni işlevlerden birini ele alıyor: 'varsayılan parametreler'. \(NOT: Bu dersin sonundaki son "görev", bir sonraki derste öğreneceğiniz döngüleri içermektedir.  Bunun için endişelenmeyin.\)
5. Şimdi, Javascript'teki fonksiyonlar hakkında [bu İngilizce makaleyi](http://javascript.info/function-expressions) okuyarak biraz daha bilgi edinebilir ve [bu makaleyi](http://javascript.info/arrow-functions-basics) okuyarak modern JavaScript'te nispeten yeni bir özellik olan `Arrow fonksiyonları`'na giriş yapabilirsiniz. Arrow fonksiyonları oldukça kullanışlıdır ancak şu an bizim için çok da önemli değildir, bu nedenle henüz onlar hakkında çok endişelenmenize gerek yok. Bunları buraya dahil ediyoruz çünkü ilerledikçe bunlarla karşılaşmanız kuvvetle muhtemel olduğundan, karşınıza çıktıklarında neye baktığınıza dair en azından _biraz_ fikir sahibi olmanız faydalı olacaktır.
6. Son olarak, çağrı yığınları (call stack) ve zincirleme fonksiyon çağrıları bağlamında`return`ün nasıl çalıştığı hakkında [bu İngilizce makaleyi](https://www.javascripttutorial.net/javascript-call-stack/) okuyun. Bunu henüz tam olarak anlayamadıysanız endişelenmeyin ancak `return` değerlerinin nereye gittiğini göz önünde bulundurmanız önemlidir. Bu kısım aynı zamanda biraz basit anlamda bilgisayar bilimi olarak da düşünülebilir.

### Ödev

<div class="lesson-content__panel" markdown="1">

Şimdi bazı fonksiyonlar yazalım!  Bunları bir HTML dosyasının `script` etiketi içine yazın. Nasıl oluşturulacağını unuttuysanız, [Fundamentals Part 1](https://www.theodinproject.com/lessons/foundations-fundamentals-part-1#how-to-run-javascript-code) bölümündeki açıklamaları gözden geçirin.

Şimdilik, her bir fonksiyonu yazın ve çıktısını `console.log` ile test edin.

1. Bir sayı alan ve bu sayının üstüne 7 ekleyip sonucu döndüren `7ekle` adlı bir fonksiyon yazın.
2. İki sayı alan ve bunların çarpımını döndüren `çarp` adında bir fonksiyon yazın.
3. Bir string alan ve bu string'i _sadece_ ilk harfi büyük olacak şekilde döndüren `harfiBüyüt` adında bir fonksiyon yazın.  küçük harfli, BÜYÜK harfli ya da kARışıK olan stringleri de kullanabileceğinden emin olun.
4. Bir string alan ve bu string'in en son harfini döndüren `sonHarf` adında bir fonksiyon yazın:
    - `sonHarf("abcd")` fonksiyonu `"d"` döndürmelidir.

</div>

### Bilgi Ölçme

Bu bölüm, bu dersi kendi başınıza anlayıp anlamadığınızı kontrol etmeniz için sorular içermektedir. Bir soruyu yanıtlamakta zorlanıyorsanız, soruya tıklayın ve bağlantı verdiği materyali gözden geçirin.

- [Fonksiyonlar ne işe yarar?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions)
- [Bir fonksiyonu nasıl çağırırız?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions#invoking_functions)
- [İsimsiz fonksiyon nedir?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions#anonymous_functions_and_arrow_functions)
- [Fonksiyon kapsamı (scope) nedir?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions#function_scope_and_conflicts)
- [Geri dönüş değeri nedir?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values)
- [Arrow fonksiyonu nedir?](https://javascript.info/arrow-functions-basics)

### Ek Kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

- [What's the difference between using "let" and "var"? - stackoverflow](https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var#:~:text=The%20main%20difference%20is%20scoping,(hence%20the%20block%20scope))
- [How JavaScript Code is executed?](https://youtu.be/iLWTnMzWtj4)

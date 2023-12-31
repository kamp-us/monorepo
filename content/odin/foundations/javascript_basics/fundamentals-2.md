---
title: 'Javascript Temelleri - 2'
---

### Giriş

JavaScript'te karşılacağınız son derece yaygın birkaç veri tipi vardır ve temel bilgiler derslerinde, bunların temelini iyi atacağız. Daha derine inmeden önce, [bu İngilice makaleyi](http://javascript.info/types), okuyarak en yaygın olanlara bir bakabilirsiniz.

### Ders özeti

Bu bölüm, bu derste öğreneceğiniz konuların genel bir özetini içerir.

- JavaScript'teki sekiz veri türünü saymak.
- Tek tırnak, çift tırnak ve ters tırnak arasındaki farkı anlamak.
- Bir değişkeni / ifadeyi bir dizeye yerleştirmek.
- Bir metodun ne olduğunu anlamak.
- Üç mantıksal operatörü sayabilmek.
- Karşılaştırma operatörlerinin ne olduğunu anlamak.
- Koşullu durumların ne olduğunu anlamak.
- İç içe yerleştirmenin ne olduğunu anlamak.
- Doğrumsu ve yanlışımsı değerlerin ne olduğunu anlamak.

### Dizeler

Yaptığınız işe bağlı olarak, sayılar yerine metin parçalarıyla daha çok çalışmanız gerekebilir. Basitçe, __dize__ bir metin parçasıdır ve dilin temel yapı taşlarından biridir.

1.  [Bir diğer İngilizce MDN makalesini](https://developer.mozilla.org/tr/docs/Learn/JavaScript/First_steps/Strings) okuyup kodlayarak takip edin.
2. Daha fazlasını öğrenmek için [bu ingilizce derse](https://www.w3schools.com/js/js_string_methods.asp) bakın. Sayfanın altındaki [Dize Referansı'na](https://www.w3schools.com/jsref/jsref_obj_string.asp) göz atmayı ve sondaki egzersizleri yapmayı unutmayın!
3. Kelime haznenize bir __yöntem__ dahil edin. [Önceki W3Schools egzersizinde](https://www.w3schools.com/js/js_string_methods.asp), `replace` ve `slice` gibi dizeler üzerinde kullanılabilecek birkaç yöntem öğrendiniz. Dizeler üzerinde kullanılabilecek tüm yöntemlerin kapsamlı bir ingilizce listesi [burada](https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/String) bulunabilir.

### Koşullu ifadeler

Şimdi eğlenceli kısma geldik. Şu ana kadar programlama konusunda, basit matematik becerileriyle yapabileceğimizden farklı bir şey yapmadık. Elbette bilgisayara matematiği hızlıca yapmayı öğrettik ancak programlama, esasında bilgisayara karmaşık işler yaptırmaktır. Koşullu ifadeler de bunun için var.

1. Koşullu ifadeleri öğrenmenin ilk adımı, [karşılaştırmaları(bu ingilizce makaleden göz atabilirsiniz)](http://javascript.info/comparison) iyi bildiğinizden emin olmaktır. 
2. [Bu İngilizce makale](https://www.w3schools.com/js/js_if_else.asp), JavaScript'teki koşullu ifadeler için güzel bir başlangıçtır.
3. [Bu ingilizce makale](http://javascript.info/logical-operators), mantıksal operatörler hakkında size bilgi verecektir. Bu makalenin görevleriyle ilgili bir uyarı: (parantez içinde bir sayı veya dize ile) `alert()` ifadesine sahip sorular bulunmaktadır. Bunun ne olduğunu ilerleyen zamanlarda inceleyeceğiz. Bazı şeylere anlam veremeyebilirsiniz ancak bunlar doğru örneklerdir ve sizin için anlam kazanacak. Endişelenmeyin!
4. [Bu İngilizce makale](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals), ynı konuyu ele alır (konu tekrarı niyetine okuyabilirsiniz!), daha da önemlisi sayfanın altında tekrar için ödevler verir.
5. [Bu İngilizce makale](http://javascript.info/ifelse), aynı temel kavramı kapsar (bir gözden geçirme olarak okuyun!) Ve - daha önemlisi - sayfa altındaki 'görevleri' sunar!
6. [Bu ingilizce makale](https://www.digitalocean.com/community/tutorials/how-to-use-the-switch-statement-in-javascript), birden fazla koşulunuz olduğunda işinize yarayacak `switch` ifadesini öğretmektedir.

### Ödev

<div class="lesson-content__panel" markdown="1">

Bolca pratik yapmanız için replit.com egzersizleri oluşturduk. Programlamayı çevrimiçi ortamlardan ziyade, _kendi_ bilgisayarınızda çalışmanın daha iyi olduğuna inanıyoruz ancak bu konuya sonra değineceğiz.

Burada sunulan dersleri sırayla yapın. Üst kısımda "run" düğmesine basarak kodu çalıştırın. Tüm talimatları okuyun, terminali izleyin ve tüm hataları okuyun. 'console.log' kullanmayı unutmayın.

Başlamak için ücretsiz bir replit hesabı oluşturun ve erişim için "Fork" veya "Remix"e tıklayın.
Not: Aşinalık kazanmak için sol sütundaki dosyalara göz atmaktan çekinmeyin.

<div class="lesson-note lesson-note--warning">
<h4>Replit ve AI</h4>

Replit yakın zamanda varsayılan olarak aktif olan bir yapay zeka asistanı tanıttı. Herhangi bir alıştırmayı denemeden önce, alıştırmayı bozmasını önlemek için önce devre dışı bırakmalısınız. Bunu, kod görüntüsünün sol alt köşesindeki AI etiketli düğmeye tıklayarak ve ardından "Etkinleştir" onay kutusunun işaretini kaldırarak yapabilirsiniz.
</div>

- [Egzersiz 1](https://replit.com/@OdinProject/troubleshooting#troubleshooting.js)
  - Bu egzersizde, troubleshooting.js adlı dosyada çalışacaksınız.
- [Egzersiz 2](https://replit.com/@OdinProject/enter-a-number#script.js)
  - script.js'de çalışacaksınız ve çalışmanızı kontrol etmek için 'webview' bölmesindeki konsolu kullanacaksınız. Konsola erişmek için, 'webview' bölmesi içindeki adres çubuğunun sağ tarafında bulunan anahtar simgesine tıklayın.
- [Egzersiz 3](https://replit.com/@OdinProject/lets-do-some-math#math.js)
  - math.js'de çalışacaksınız.
- [Egzersiz 4](https://replit.com/@OdinProject/direction-follow#follow.js)
  - follow.js'de çalışacaksınız.

</div>

### Bilgi ölçme

Bu bölüm, bu dersi kendi kendinize anlayıp anlamadığınızı kontrol etmeniz için sorular içermektedir. Bir soruyu yanıtlamakta zorlanıyorsanız, soruya tıklayın ve bağlantılı olduğu materyali gözden geçirin. Bu bölümde bulunan materyallerin hepsi ingilizcedir.

- [JavaScript'teki sekiz veri tipi nedir?](https://javascript.info/types#summary)
- [Hangi veri tipi ilkel DEĞİLDİR?](https://javascript.info/types#objects-and-symbols)
- [null ve undefined arasındaki ilişki nedir?](https://javascript.info/types#the-null-value)
- [Tek tırnak, çift tırnak ve ters tırnak dizeleri arasındaki fark nedir?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings#single_quotes_vs._double_quotes)
- [Dizelerin birleştirilmesi için kullanılan terim nedir?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings#concatenating_strings)
- [Hangi tırnak türü, bir dizeye değişkenler / ifadeler yerleştirmenizi sağlar?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings#concatenating_strings)
- [Bir dizeye değişkenler / ifadeler nasıl yerleştirilir?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings#concatenating_strings)
- [Dizelerde kaçış karakterleri nasıl kullanılır?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings#escaping_characters_in_a_string)
- [slice / substring / substr dize metotları arasındaki fark nedir?](https://www.w3schools.com/js/js_string_methods.asp)
- [Üç mantıksal operatör nedir ve ne anlama gelirler?](http://javascript.info/logical-operators)
- [Karşılaştırma operatörleri nelerdir?](https://javascript.info/comparison)
- [Doğrumsu ve yanlışımsı değerler nelerdir?](https://javascript.info/ifelse#boolean-conversion)
- [JavaScript'te yanlışımsı değerler nelerdir?](https://javascript.info/ifelse#boolean-conversion)
- [Koşullu ifadeler nedir?](https://www.w3schools.com/js/js_if_else.asp)
- [if / else koşullu ifadesi için sözdizimi nedir?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#basic_if...else_syntax)
- [Switch ifadesi için sözdizimi nedir?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#switch_statements)
- [Üçlü işlem operatörü için sözdizimi nedir?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#ternary_operator)
- [İç içe yerleştirme (nesting) nedir?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#nesting_if...else)

### Ek kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

- Genellikle regex olarak bilinen [kurallı ifadeler(regex hakkında ingilizce makale)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions), dize doğrulaması için dizelerdeki kalıpları eşleştiren veya bulan bir araçtır. Ancak, [düzenli ifadeleri ne zaman kullanmamanız gerektiğini(ilgili ingilizce makale)](https://softwareengineering.stackexchange.com/questions/113237/when-you-should-not-use-regular-expressions) bilmek önemlidir. Dizeleri işlemek için başka çeşitli [yöntemler(freecodecamp regex konulu ingilizce makalesi)](https://www.freecodecamp.org/news/a-quick-and-simple-guide-to-javascript-regular-expressions-48b46a68df29/) de vardır ve regex buna kıyasla daha yavaş olabilir.
- [Web Dev Simplified's Regular Expressions In 20 Minutes adlı ingilizce video](https://www.youtube.com/watch?v=rhzKDrUiJVk)
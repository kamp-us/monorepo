### Giriş

JavaScript, Java veya Ruby gibi diğer Nesne Yönelimli dillerde olduğu gibi _tam olarak_ sınıflara sahip değildir, ancak ES6, `class` anahtar kelimesini kullanan nesne oluşturma için bir sözdizimi tanıttı. Bu temelde, constructor dersinde öğrendiğimiz nesne yapılandırıcıları ve prototiplerle _tam olarak_ aynı işi yapan yeni bir sözdizimidir.

Ancak, `class` sözdizimini kullanmak konusunda biraz tartışma var. Karşıtlar, `class`'ın temelde var olan prototype tabanlı yapılandırıcıların üzerine konan _sözdizimsel şeker_ (syntatic sugar) olduğunu ve bu nesnelerle gerçekte neler olup bittiğini gözden kaçırmak için tehlikeli ve/veya yanıltıcı olduğunu iddia ediyorlar. Tartışmalara rağmen, sınıfların gerçek kod tabanlarında ortaya çıkmaya başladığını ve muhtemelen karşılaşacağınız gibi çerçevelerde (özellikle sınıf tabanlı React koduyla çalışmayı tercih ederseniz) kullanıldığını göz önünde bulundurmanız önemlidir.

Yapılandırıcılar konusunda oldukça derinleştik, burada öğrenecek pek fazla şeyiniz kalmadı, sadece yeni sözdizimi var. Eğer kodunuzda sınıfları kullanmayı seçerseniz (yapmakta hiçbir sakınca yok!), onları nesne yapılandırıcılarıyla hemen hemen aynı şekilde kullanabilirsiniz.

### Derse genel bakış

Bu bölüm, bu derste öğreneceğiniz konuların genel bir özetini içerir.

- JavaScript'te sınıfların kullanımının artıları ve eksilerini açıklama.
- JavaScript'in nesne oluşturma işlemi Java veya Ruby gibi bir dil ile nasıl farklılık gösterir, kısaca tartışma.
- Bir nesne yapılandırıcısı ile bir sınıf arasındaki farkları açıklama.
- "Getters" ve "setters" kavramlarını açıklama.
- Hesaplanmış isimlerin ve sınıf alanlarının ne olduğunu anlama.
- Özel sınıf alanlarını ve yöntemlerini nasıl uygulayacağınızı açıklama.
- Fonksiyon bağlama kavramını açıklama.
- Sınıflarla miras alma işlemini gerçekleştirme.
- Neden kompozisyonun genellikle mirasa tercih edildiğini anlama.

### Ödev

<div class="lesson-content__panel" markdown="1">

1.  [JavaScript.info's article on Getters and Setters](https://javascript.info/property-accessors) size "Getters ve Setters" konusunda bilgi sahibi olmanızı sağlayacaktır.

2.  [This article](https://javascript.info/class) makalesi `class` sözdizimini özgüvenli bir şekilde kullanmanız için gereken tüm gerekenleri verecektir.

3.  Özellikle ['extends' reference page](https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Classes/extends)'a bakın, burada ['Mixins' section](https://developer.mozilla.org/tr/
	docs/Web/JavaScript/Reference/Classes/extends#mix-ins) içeren kısımlara göz atın. Bazı framework'lerde React gibi, sınıfları bileşenlerinizi oluşturmak ve onları temel React        bileşenini `extend` etmek için kullanabilirsiniz, bu da size tüm yerleşik işlevselliğe erişim sağlar (ancak bu bileşenleri oluşturmanın tek yolu değildir. Bu, kursun ilerleyen bölümlerinde React bölümünde ele alınacaktır). Sınıflar ayrıca [private features](https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Classes/Private_class_fields) sahip olabilir, bu da size fabrika fonksiyonlarına benzer şekilde gizlilik uygulamanıza olanak tanır.

4. Sınıflar [static properties and methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static) sahip olabilir; bunlar, bir sınıfın örneğine değil, sınıfın 			kendisine erişilen özellikler ve metotlardır. Bu, bazı dize yöntemlerinin dize örneği üzerinde erişildiği şekilde çalışır, örneğin `someString.slice(0, 5)` ; bazı yöntemler ise doğrudan 		String yapılandırıcısı üzerinde çağrılır, örneğin `String.fromCharCode(79, 100, 105, 110)`.

5. [this article covering opinions regarding the pros and cons of classes](https://medium.com/@rajaraodv/is-class-in-es6-the-new-bad-part-6c4e6fe1ee65). [FunFunFunction's video on Composition over Inheritance](https://www.youtube.com/watch?v=wfMtDGfHWpA) makalede belirtilen eksileri detaylı bir şekilde ele alır ve konuyu çok iyi anlatır.
</div>

### Pratik

[Library](https://www.theodinproject.com/lessons/node-path-javascript-library) projesine geri dönün ve basit yapılandırıcılar yerine `class` kullanacak şekilde yeniden düzenleyin. Yeni bir özellik üzerinde çalışmak için [this foundations lesson](https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors) öğrendiğiniz git iş akışını kullanmayı unutmayın. Bu şekilde çalışmaya alışmalısınız!

### Bilgi ölçme

Bu bölüm, bu dersi anladığınızı kontrol etmeniz için sorular içermektedir. Aşağıdaki soruları kendi kendinize yanıtlamakta zorlanıyorsanız, yanıtı bulmak için yukarıdaki materyali gözden geçirin.

- [Describe the pros and cons of using classes in JavaScript.](https://rajaraodv.medium.com/is-class-in-es6-the-new-bad-part-6c4e6fe1ee65)
- [How does JavaScript's object creation differ from a language like Java or Ruby?](https://rajaraodv.medium.com/is-class-in-es6-the-new-bad-part-6c4e6fe1ee65)
- [Explain the differences between object constructors and classes.](https://javascript.info/class#not-just-a-syntactic-sugar)
- [What are "getters" & "setters"?](https://javascript.info/property-accessors)
- [Describe computed names and class fields.](https://javascript.info/class)
- [Describe function binding.](https://javascript.info/class)
- [Describe static properties.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)
- [Describe private class features.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
- [How is inheritance used with classes?](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#inheritance)
- [Why is favoring Composition over Inheritance suggested?](https://www.youtube.com/watch?v=wfMtDGfHWpA)

### Ek kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

- Stephen Mayeux'dan [This playlist](https://www.youtube.com/playlist?list=PLtwj5TTsiP7uTKfTQbcmb59mWXosLP_7S), ES6 Sınıflarını ve bazı yöntemlerini kolay takip edilebilir örneklerle açıklar.
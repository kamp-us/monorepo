### Giriş
Şu ana kadar muhtemelen CSS'nin önemli temel konseptlerini güçlü bir şekilde anlamışsınızdır, ancak projelerinize bazı gerçekten etkileyici görünümler eklemek için CSS ile yapabileceğiniz çok daha fazla şey var. Şimdi, projelerinize parlaklık katmak için kullanabileceğiniz o küçük fakat kullanışlı CSS özelliklerini ele almanın zamanı geldi.

CSS'de çok sayıda özellik bulunmaktadır. [A Recent CSS Tricks Article](https://css-tricks.com/how-many-css-properties-are-there/) göre, _yüzlerce_ özellik bulunmaktadır. Neyse ki, hepsini ezberlemeniz gerekmiyor; günlük olarak kullanacağınız özelliklerin sayısı çok daha azdır. Bu ders, genellikle düzenli olarak kullanacağınız öğelerin çoğunu kapsayacak. Bu dersin formatı biraz farklıdır çünkü temelde CSS özelliklerinin bir listesidir. Bir özelliğin küçük bir açıklamasını vereceğiz ve ardından tüm mevcut seçenekleri görebileceğiniz bazı belgelere yönlendireceğiz.

### Öğrenme çıktıları

- Çok sayıda kullanışlı CSS özelliği hakkında bilgi edineceksiniz!

#### Background

Muhtemelen zaten nesneler üzerinde arka plan renkleri ayarlama konusunda denemeler yapmışsınızdır, ancak `background` özelliği biraz daha fazlasını yapabilir. `background` özelliği aslında 8 farklı arka planla ilgili özelliğin kısaltmasıdır; bunların tümüne bağlantılı belgelerden ulaşabilirsiniz. Arka plan renklerini değiştirmenin ötesinde, arka plan görüntülerini belirleyebilir, arka plan görüntülerinin pozisyonunu ve boyutunu değiştirebilir ve arka plan görüntülerinin, konteynerini dolduracak kadar büyük olmadıkları durumda nasıl tekrarlandığını veya kaplandığını değiştirebilirsiniz. Ayrıca, birden fazla arka plan katmanı kullanmak da mümkündür.

Bir şeyi belirtmek önemlidir ki bu özellikleri bireysel olarak kullanmak mümkündür ve bazı durumlarda bunu yapmak, kısaltmaya varsayılan olarak geçmekten daha kolay ve açık olabilir. Bu durum, genellikle kısaltmayı kullanmaya varsayılan olarak geçmenin neredeyse her zaman tercih edilebilir olduğu bazı diğer kısaltma özelliklerine karşıdır (flex, margin, padding vb.).

Bu kısaltma ve ilişkili tüm özelliklerle ilgili belgelerde çok sayıda bilgi bulunmaktadır. Daha önce de belirtildiği gibi, her özelliğin tam sırasını ve sözdizimini _ezberlemeniz_ gerekmez. Var olduklarını bilmek ve genel olarak ne yaptıkları hakkında bir fikre sahip olmak yeterlidir.

Bir not daha: Buradaki **Formal Syntax** (Resmi Sözdizimi) bölümü oldukça karmaşıktır. Sizi caydırmasına izin vermeyin. Temel sözdizimi tanımlamak biraz zor, çünkü kısaltmayı oluşturan birçok özellik isteğe bağlıdır veya tanımda farklı yerlerde gelebilir. [MDN docs on `background`.](https://developer.mozilla.org/en-US/docs/Web/CSS/background) okuyun.

#### Borders
Bu noktada muhtemelen zaten `border` ve `border-radius` ile karşılaştınız. `border` özelliği başka bir kısaltmadır, ancak arka plan kısaltmasından _çok_ daha karmaşık değildir. Sınırlar için temelde sadece bir boyut, stil ve renk tanımlamanız gerekmektedir.

`border-radius`, şeylerin köşelerini yuvarlamak için kullanılan bir özelliktir. Belgelerde göreceğiniz gibi, her bir element köşesi için farklı yarıçaplar tanımlamak mümkündür, ancak bu nadiren kullanışlıdır. Bu bilgiyi "bir gün ihtiyaç duyarsam araştıracağım şeyler" kategorisine saklayın.

MDN için [`border`](https://developer.mozilla.org/en-US/docs/Web/CSS/border) ve [`border-radius`](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) dokümantasyonunu okuyunuz.

#### box-shadow
Özellik adından da bekleyebileceğiniz gibi, `box-shadow` bir elementin etrafına bir gölge efekti ekler. Bu, sayfanızda derinlik hissi yaratmak ve öğeler arasında hafif ayrım eklemek için kullanışlıdır.

Kullanımı oldukça basittir, ancak sadece az ve nazik bir şekilde kullanılması, hafif gölgelerin daha koyu veya parlak renklere tercih edilmesi önemlidir.

[`box-shadow` docs](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) okuyunuz.

#### Overflow
`overflow` özelliğini kullanarak, bir öğenin içeriği sığdırılamayacak kadar büyük olduğunda ne olacağını tanımlamak mümkündür. Muhtemelen en yaygın kullanım, örneğin kaydırılabilir içeriğe sahip bir web sayfasındaki bir `card` tarzı öğeye kaydır çubukları eklemektir.

[`overflow` docs](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow) kontrol ediniz.

#### Opacity
Opaklık (`opacity`), bazı durumlarda çok kullanışlı olabilen başka bir kolay özelliktir.

[`opacity`](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity) özelliğini tanımlama ve bazı örnekleri görmek için inceleyebilirsiniz.

### Bilgi ölçme

Bu bölüm, bu dersi anladığınızı kontrol etmeniz için sorular içermektedir. Aşağıdaki soruları kendi kendinize yanıtlamakta zorlanıyorsanız, yanıtı bulmak için yukarıdaki materyali gözden geçirin.

- [Which property would you use to make an element transparent?](#opacity)
- [Which property would you use to make a background image tile?](#background)
- [Which property would you use to add scrollbars to an element?](#overflow)
- [Which property would you use to add a shadow behind an element?](#box-shadow)
- [Which property would you use to create rounded corners on an element?](#borders)
- [How would you use border-radius to make a circular element?](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)

### Ek kaynaklar

Bu ders boyunca her özellik için temel olarak MDN belgelerine bağlantılar verdik. Ancak web üzerinde bu konularda arama yaparken faydalı olabilecek birçok referans sitesi bulunmaktadır ve bunlar da karşınıza çıkabilir.

* [CSS Tricks](https://css-tricks.com/almanac/properties), gerçekten harika içeriğe sahiptir. Bazıları, MDN belgelerinden daha az resmi ve resmi olmayan bir hissiyat verir, ancak bu, sindirilmesi daha kolay olabilir demektir. Bazı durumlarda örnekleri daha kullanışlı olabilir. Örneğin, [background shorthand](https://css-tricks.com/almanac/properties/b/background/) veya [overflow](https://css-tricks.com/almanac/properties/o/overflow) üzerine sayfalarına göz atın.
* [W3 Schools](https://www.w3schools.com/cssref/), başka bir kaliteli kaynaktır. Biz (Odin yazarları) genellikle MDN'yi tercih ediyoruz, ancak W3 ile de bir sorun yoktur.

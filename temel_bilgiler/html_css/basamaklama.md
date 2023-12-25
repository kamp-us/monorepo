### Giriş

Bir önceki derste temel CSS sözdizimini ve seçicileri ele almıştık. Şimdi seçiciler hakkındaki bilgilerimizi CSS'in *C*'si olan cascade(basamaklama) ile birleştirmenin zamanı geldi.

### Derse genel bakış

Bu bölüm, bu derste öğreneceğiniz konuların genel bir özetini içerir.

- Basamaklama ne yapar?
- Özgüllük ve CSS seçicilerinin birleştirilmesi.
- Kalıtım, belirli özellikleri nasıl etkiler?

### CSS'in basamaklandırılması

Bazen birbiriyle çelişen kurallarımız olabilir. Böylece beklenmedik sonuçlarla karşılaşabiliriz. "Ama ben *bu* paragrafların mavi olmasını istemiştim, neden diğer paragraflar gibi kırmızılar?!" Bu durum her ne kadar sinir bozucu olsa da, CSS'in bizim isteğimiz dışında kafasına göre bir şeyler *yapmadığını* anlamak önemlidir. CSS, yalnızca bizim ondan istediğimiz şeyleri yapar. Bu durumun istisnalarından biri, tarayıcı tarafından sağlanan varsayılan stillerdir. Bu varsayılan stiller tarayıcıdan tarayıcıya değişir. Bazı öğelerin diğer öğelerle aralarında büyük bir "boşluk" olmasını ya da butonları o şekilde göstermek için herhangi bir CSS kuralı yazmamamıza rağmen o şekilde görünmesini sağlar.

Dolayısıyla, bunun gibi beklenmedik bir davranışla karşılaşırsanız, bunun nedeni varsayılan stiller, bir özelliğin nasıl çalıştığını anlamamak ya da basamaklama adı verilen bu konsepti anlamamaktır.

Basamaklama, HTML'imize hangi kuralların uygulanacağını belirler.Basamaklamanın bunu belirlemek için kullandığı farklı faktörler vardır. Şimdi bu faktörlerden üçünü inceleyeceğiz. Bunların üstünden geçmek, CSS'ten nefret ettiğiniz anlardan kaçınmanıza yardımcı olacaktır.

#### Özgüllük

Daha özgül bir CSS tanımlaması, ondan daha az özgül olanlardan önceliklidir. Önceki derste ele aldığımız satır içi stiller, seçicilere kıyasla en yüksek özgüllüğe sahipken, her seçici türünün bir tanımlamanın ne kadar özgül olduğuna katkıda bulunan kendi özgüllük düzeyi vardır. Diğer seçiciler de özgüllüğe katkıda bulunurlar. Ancak biz yalnızca şu ana kadar üstünde durduklarımıza odaklanacağız:

1. ID seçiciler (en özgül seçici)
2. Sınıf(class) seçiciler
3. Tip seçiciler

Özgüllük yalnızca bir öğeyi hedefleyen birden fazla çakışan tanımlama olduğunda dikkate alınır. Bir tür eşitlik bozucu olarak düşünebiliriz. Bir ID seçici her zaman herhangi bir sayıdaki sınıf seçiciden öncelikli olur. <span id="high-specificity-class-type">Benzer şekilde bir sınıf seçici her zaman herhangi bir sayıdaki tip seçiciden</span> ve bir tip seçici her zaman kendisinden daha az özgül olan herhangi sayıdaki seçiciden öncelikli olur. Tanımlamada daha yüksek özgüllüğe sahip bir seçici olmadığında, tek bir seçicinin daha büyük bir miktarı, aynı seçicinin daha küçük bir miktarından öncelikli olacaktır.

Özgüllüğün nasıl çalıştığını görselleştirmek için birkaç hızlı örneğe göz atalım. 
Aşağıdaki HTML ve CSS koduyla başlayalım:

```html
<!-- index.html -->

<div class="main">
  <div class="list subsection"></div>
</div>
```

```css
/* kural 1 */
.subsection {
  color: blue;
}

/* kural 2 */
.main .list {
  color: red;
}
```

Yukarıdaki örnekte, her iki kural da yalnızca sınıf seçicileri kullanmaktadır. Ancak 2. kural daha özgüldür. Çünkü daha fazla sınıf seçicisi kullanmaktadır, bu nedenle `color: red;` tanımlaması öncelikli olacaktır.

Şimdi, birkaç şeyi değiştirelim:

```html
<!-- index.html -->

<div class="main">
  <div class="list" id="subsection">Mavi yazı</div>
</div>
```
```css
/* kural 1 */
#subsection {
  color: blue;
}

/* kural 2 */
.main .list {
  color: red;
}
```

Yukarıdaki örnekte, kural 2'de ID seçici sayısından daha fazla sınıf seçicisi vardır. Ancak ID, sınıftan öncelikli olduğu için kural 1 daha özgüldür. Bu durumda, `color: blue;` tanımlaması öncelikli olacaktır.

Biraz daha karmaşık:

```html
<!-- index.html -->

<div class="main">
  <div class="list" id="subsection">Sarı arkaplanlı kırmızı yazı</div>
</div>
```

```css
/* kural 1 */
#subsection {
  background-color: yellow;
  color: blue;
}

/* kural 2 */
.main #subsection {
 color: red;
}
```

Bu son örnekte, ilk kural bir ID seçici kullanırken, ikinci kural bir ID seçici ile sınıf seçiciyi birleştirir. Dolayısıyla iki kural da aynı özgüllükte seçiciler kullanır. Bu durumda basamaklandırma, her bir seçici türünün sayısını kontrol eder. Her iki kuralda da birer ID seçici vardır. Ancak kural 2'de ID seçiciye ek olarak bir sınıf seçici vardır. Bu nedenle kural 2 daha yüksek bir özgüllüğe sahiptir.

`color: red` tanımlaması öncelikli olsa da, `background-color: yellow` ile çelişen herhangi bir tanımlama olmadığı için bu tanımlama yine de uygulanacaktır.

<div class="lesson-note" markdown="1">
##### Her şey özgüllüğe katkıda bulunmaz
Seçicileri karşılaştırırken, evrensel seçici (`*`) ve birleştiriciler (`+`, `~`, `>` ve boşluk) için özel sembollerle karşılaşabilirsiniz. Bu semboller kendi başlarına herhangi bir özgüllük katmaz.
</div>

```css
/* rule 1 */
.class.second-class {
  font-size: 12px;
}

/* rule 2 */
.class .second-class {
  font-size: 24px;
}
```

Burada kural 1 de kural 2 de aynı özgüllüğe sahiptir. Kural 1 bir zincirleme seçici(boşluk yok) ve kural 2 de soydan gelen birleştirici(boşluk var) kullanır. Ancak her iki kuralın da iki sınıfı vardır ve birleştirici sembolünün kendisi özgüllüğe katkıda bulunmaz.

```css
/* rule 1 */
.class.second-class {
  font-size: 12px;
}

/* rule 2 */
.class > .second-class {
  font-size: 24px;
}
```

Bu örnek de aynı şeyi göstermektedir. Kural 2 bir alt birleştirici(`>`) kullanıyor olsa da, bu kullanım özgüllük değerini değiştirmez. Her iki kural da hala iki sınıfa sahiptir. Bu nedenle aynı özgüllük değerlerine sahiptirler.

```css
/* rule 1 */
* {
  color: black;
}

/* rule 2 */
h1 {
  color: orange;
}
```

Bu örnekte, kural 2 daha yüksek özgüllüğe sahip olacak ve `orange` değeri bu öğe için öncelikli olacaktır. Kural 2, en düşük özgüllük değerine sahip olan bir tip seçici kullanır. Ancak kural 1, özgüllük değeri olmayan evrensel seçiciyi(`*`) kullanır.

#### Kalıtım

Kalıtım, bir öğeye CSS özellikleri uygulandığında, bu öğenin içindeki öğeler için açıkça bir kural yazmasak bile, onlar tarafından miras alınan belirli CSS özelliklerini ifade eder. Tipografi tabanlı özellikler(`color`, `font-size`, `font-family`, vb.) genellikle miras alınırken, diğer özelliklerin çoğu miras alınmaz.

Bu durumun istisnası, bir öğeyi doğrudan hedeflemektir. Çünkü doğrudan hedeflemek her zaman kalıtımı yener:

```html
<!-- index.html -->

<div id="parent">
  <div class="child"></div>
</div>
```
```css
/* styles.css */

#parent {
  color: red;
}

.child {
  color: blue;
}
```

`parent` öğesi bir ID ile seçildiği için daha yüksek bir özgüllüğe sahip olmasına rağmen, `child` öğesine `color: blue` stili uygulanır. Çünkü bu tanımlama doğrudan onu hedef alır. Ancak ebeveynden gelen `color: red` tanımlaması yalnızca miras olarak alınır.

#### Kural sırası

Son faktöre geldik. Diğer tüm faktörler dikkate alındıktan sonra, bir öğeyi hedefleyen birden fazla çelişkili kural olduğunu varsayalım. Bu durumda basamaklama, hangi kuralın uygulanacağını nasıl belirler?

Aslında oldukça basit. Hangi kural *en son* tanımlanmışsa o kazanır.

```css
/* styles.css */

.alert {
  color: red;
}

.warning {
  color: yellow;
}
```

Hem `alert` hem de `warning` sınıflarına sahip bir öğe için basamaklama, kalıtım(bu durumda bulunmuyor) ve özgüllük(iki kural da aynı özgüllüğe sahip) dahil olmak üzere diğer tüm faktörlerin üstünden geçer. `warning` kuralı en son tanımlanan kural olduğu için ve başka hiçbir faktör hangi kuralın uygulanacağını belirleyemediği için öğeye uygulanacak olan kural `warning` kuralıdır.

### Ödev

<div class="lesson-content__panel" markdown="1">

1. [Odin Project CSS alıştırmaları repository'sine](https://github.com/TheOdinProject/css-exercises) geri dönün. `foundations` dizinindeki son alıştırma olan `06-cascade-fix` isimli alıştırmayı yapın.


    Not: Alıştırmaların çözümleri her alıştırmanın `solution` klasöründe bulunur.

2.  "HTML Temelleri" bölümünde alıştırma olarak oluşturduğunuz tarif sayfasını hatırlıyor musunuz? Oldukça *sade* görünüyor değil mi? Hadi bunu biraz CSS ekleyerek düzeltelim!
    - Nasıl isterseniz öyle biçimlendirebilirsiniz. Ancak harici CSS yöntemini kullanmalısınız(bu pratik ve ilerisi için). Ayrıca önceki derste bahsedilen özelliklerden birkaçını(renk, arka plan rengi, tipografi özellikleri, vb.) kullanmaya çalışmalısınız. Çeşitli özelliklerin ne işe yaradıklarını anlamak için onlara biraz zaman ayırın. Şimdilik *iyi* görünmesi hakkında hiç endişelenmeyin. Bu yalnızca pratik yapmak ve CSS yazmaya alışmak içindir. Özgeçmişinizde gösterecek bir şey yapmak için değil.
    - Henüz `font-family` özelliği için özel bir fontun nasıl kullanılacağından bahsetmedik. Bu nedenle şimdilik kullanılacak genel font ailelerinin bir listesi için [CSS Fonts](https://www.w3schools.com/Css/css_font.asp) ve internet güvenli fontların bir listesi için [CSS Web Safe Fonts(İnternet Güvenli Fontlar)](https://www.w3schools.com/cssref/css_websafe_fonts.asp) adlı ingilizce makalelere bir göz atın. İnternet güvenli fontlar, her bilgisayarda veya cihazda yüklü olan fontlardır(ancak yine de yedek olarak genel bir font ailesi eklediğinizden emin olun).

</div>

### Bilgi ölçme

Bu bölüm, bu dersi kendi kendinize anlayıp anlamadığınızı kontrol etmeniz için sorular içermektedir. Bir soruyu yanıtlamakta zorlanıyorsanız, soruya tıklayın ve bağlantılı olduğu materyali gözden geçirin.

- <a class="knowledge-check-link" href="#high-specificity-class-type">Sınıf seçici kullanan bir kural ile üç adet tip seçici kullanan bir kural arasında hangisi daha yüksek özgüllüğe sahiptir?</a>

### Ek kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

 - [The CSS Cascade(CSS Basamaklama)](https://wattenberger.com/blog/css-cascade) adlı ingilizce makale, CSS kurallarının uygulanmasını etkileyen diğer faktörler hakkında biraz daha ayrıntılı bilgi veren harika, etkileşimli bir kaynaktır.
 - [Yazı Tipi Ailesini Değiştirme](https://www.digitalocean.com/community/tutorials/how-to-load-and-use-custom-fonts-with-css#finding-and-loading-a-font-file-from-a-hosted-service) hakkında olan bu ingilizce makale, özel yazı tipleri kullanmaya yönelik birkaç farklı yaklaşımı açıklamaktadır.
 - Kevin Powell'dan [CSS Specificity](https://www.youtube.com/watch?v=c0kfcP_nD9E) adlı bu ingilizce video, çeşitli özgüllük örneklerini inceleyip özgüllükle boğuşmaktan kaçınmak için bazı tavsiyeler vermektedir.
 - [CSS Specificity Calculator](https://specificity.keegan.st/) adlı bu ingilizce website, kendi seçicilerinizi doldurmanıza ve bunların özgüllüklerinin hesaplanıp görselleştirilmesini sağlar.
 - [Mozilla CSS Properties Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference) adlı ingilizce kaynak, belirli bir CSS özelliğinin miras alınıp alınmadığını öğrenmek için kullanılabilir. Herhangi bir öğenin sayfasına gidip **Formal Definition** bölümü içinde **Inherited** alanına göz atmanız yeterlidir. Örneğin [`color` özelliğinin sayfasına](https://developer.mozilla.org/en-US/docs/Web/CSS/color#formal_definition) gidersek miras alınıp alınmadığını görebiliriz.
 - [CSS Basamaklama üzerine ingilizce bir interaktif Scrim.](https://scrimba.com/scrim/c9gwmnAR)
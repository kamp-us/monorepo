### Giriş

Kod yazmaya tam anlamıyla dalmadan önce, editör ayarlarınızı geliştirerek genel verimliliğinizi artıracağız. Bunu şimdi yapmak, ilerleyen zamanlarda işinizi çok daha kolay hale getirecektir. Bu ders, kod stiline dair bazı bilgiler verecek ve projeleriniz boyunca tutarlı bir kod stili sürdürmenize yardımcı olacak araçlar tanıtacaktır. Bazı durumlarda, girintileme gibi ayarları otomatik olarak düzenlemenize de yardımcı olabilir! Ayrıca, zaman kazandıracak şablon repoları tanıtacağız.

### Stil rehberi

Kod stili önemlidir! Girintileme veya tercih edilen tırnak stilinin tutarlı olması gibi kurallar, kodunuzun okunabilirliğini ve bakımını kolaylaştırır. İnternette bu konuyla ilgili yaygın JavaScript stil rehberleri mevcuttur. Bunları okumak, sizi daha iyi bir geliştirici yapacaktır.

1. [Airbnb Stil Rehberi](https://github.com/airbnb/javascript) En popüler stil rehberlerinden biridir ve okunması oldukça kolaydır.
2. Ayrıca Google, Javascript için [stil rehberi](https://google.github.io/styleguide/jsguide.html).
3. [JavaScript Standard Stil](https://standardjs.com/rules.html). NPM ve GitHub gibi ve [diğer](https://standardjs.com/index.html#who-uses-javascript-standard-style) şirketler tarafından kullanılır.

### Derse genel bakış

Bu bölüm, bu derste öğreneceğiniz konuların genel bir özetini içerir.

- Linter ve Prettier kurulumu yaparak kodunuzu iyileştirin.
- Şablon repoların ne olduğunu ve nasıl kullanılacağını öğrenin.

### Linting

Yukarıda bahsedilen stil rehberleri, kodunuzu düzenleme, organize etme ve yazma konusunda oldukça faydalı bilgiler içerir. Ancak _birçok_ kural var - bunların hepsini akılda tutmak zor olabilir. **Linters**

1. [Bu makale](https://gomakethings.com/javascript-linters/) konuyu gayet iyi özetliyor... buradan başla!
2. [Bu makale](https://hackernoon.com/how-linting-and-eslint-improve-code-quality-fa83d2469efe) ise linter'ların tam olarak _nasıl_ çalıştığını açıklıyor.

Javascript'iniz için birçok linting seçeneği olabilir, [eslint](https://eslint.org/) en popüler (ve endüstride en yaygını) olandır. Kurulumunu sağlayın, kurulumu basittir.

1. [Resmi 'Başlayın' sayfası](https://eslint.org/docs/user-guide/getting-started) başlamak için iyi bir seçenektir. Temel kurulumu ve basit ayarları kapsar. Bu aracı kullanmanın temel yolu, terminalinizde 'eslint' komutunu belirli bir dosyayla çalıştırmaktır.
2. En sevdiğiniz metin düzenleyiciniz için linting eklentileri çok daha kullanışlıdır. Çoğu düzenleyici eklentisi, kodunuzu yazarken otomatik olarak lintlemenize olanak tanır ve hataları doğrudan düzenleyicide gösterir,ve hataları doğrudan editörde gösterecek, bu da onların çözümünü _çok_ daha kolay hale getirecek. _Tüm_ düzenleyici kurulumlarını ele alamıyoruz ancak en popüler olanlardan bazıları şunlardır:
   1. Visual Studio Code - [Plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [öğretici](https://www.digitalocean.com/community/tutorials/linting-and-formatting-with-eslint-in-vs-code).
   2. Sublime Text - [Plugin](https://github.com/roadhump/SublimeLinter-eslint) ve [öğretici](http://jonathancreamer.com/setup-eslint-with-es6-in-sublime-text/).
   3. Atom - [Plugin](https://atom.io/packages/linter-eslint) ve [öğretici](https://medium.freecodecamp.org/how-to-set-up-eslint-in-atom-to-contribute-to-freecodecamp-3467dee86e2c).
   4. Vim - [ALE plugin kullanın](https://github.com/dense-analysis/ale). Vim kullanıyorsanız neye bulaştığınızı zaten biliyorsunuzdur. ALE harika bir eklentidir ancak kurulumu ve konfigürasyonu biraz zor olabilir.

### Prettier

Prettier _mükemmeldir._ Linter'e benzer, ancak biraz farklı bir işlev görür. JS kodunuzu alacak ve ardından onu bir dizi kurala göre otomatik olarak biçimlendirecektir. Linter'dan farklı olarak stil hatalarını aramaz, özellikle kodunuzun düzenini hedefler ve boşluklar, girinti seviyeleri ve satır sonları gibi şeyler hakkında akıllı kararlar verir.

1. Prettier'ın yaratıcısından güzel[hızlı anlatma](https://www.youtube.com/watch?v=hkfBvpEfWdA)
2. [burada](https://prettier.io/playground) bir test sürüşü yapın. Devam edin ve eski JavaScript kodlarınızın bir kısmını bu düzenleyiciye kopyalayın/yapıştırın ve ne olacağını görün.
3. Kurulum basittir. [Ana sayfa](https://prettier.io/) en popüler editörlere yönelik eğitimlere bağlantı verir.

Prettier kullanmak kod yazmanızı daha hızlı ve kolaylı yapar! Girinti veya noktalı virgül gibi şeyleri yakalamak hakkında bir endişeniz olmasın çünkü prettier sizin için bu ayrıntılarla ilgilenecektir.


### ESLint ve Prettier kullanmak

ESlint ve Prettier'i kurmanızı ve bunları gelecekteki tüm projeleriniz için kullanmanızı **şiddetle** öneririz. Bu, hem kendiniz hem de ona bakan herkes için kodunuzun okunmasını kolaylaştıracaktır.
Ancak ESLint ve Prettier'in birlikte kullanılması çakışmalara neden olur. Bunu düzeltmek için [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#installation) yükleme talimatlarını izleyin. Gereksiz veya Prettier ile çakışabilecek tüm ESLint kurallarını kapatır. Sadece bunu yapmak, çatışmayı çözmek ve her ikisinin de birbirleriyle sorunsuz çalışmasını sağlamak için yeterlidir.
Çatışmayı gidermenin başka bir yolu da 'eslint-plugin-prettier' kullanmaktır. Prettier'ı ESLint'te bir kuralmış gibi çalıştırmanıza olanak tanır. Ancak bunu yapmanız **önerilmez**. Bu konuda daha fazla bilgiyi [buradan](https://prettier.io/docs/en/integrating-with-linters.html#notes) edinebilirsiniz.

### Şablon Repoları

Son birkaç projede, Webpack kurulumunun oldukça az sayıda dosya ve yapılandırma gerektirdiğini ve yeniden kullanmak istediğiniz yapılandırmayı kopyalayıp yapıştırmak için daha önce yapılandırdıklarınıza bakmak zorunda kaldığınızı düşünmüş olabilirsiniz. Ayrıca Github'da yeni bir repo oluşturduğunuzda, üst tarafa yakın bir yerde `Repository şablonu` seçeneğinin bulunduğunu fark etmiş olabilirsiniz.

Şablon repolarının çok kullanışlı olabileceği yer burasıdır.Mevcut depolarınızdan herhangi biri ayarlarında bir şablona dönüştürülebilir (repoyu yeniden adlandırabileceğiniz yerin hemen altında, reponun şablon olup olmadığı hakkında bir onay kutusu olacaktır). Eğer bu onay kutusunu işaretlerseniz, tebrikler, yapmanız gereken tek şey bu! Şimdi gitip yeni bir repo oluşturun, `Repository şablonu` açılır menüsünde seçebileceğiniz tüm şablonlar listelenecektir. Birini seçmek, yeni reponuzun boş değil, seçilen şablonun bir kopyası olacağı anlamına gelir!

Kendinizi birden fazla proje için çok sayıda kurulum kodunu yeniden kullanırken bulursanız, İhtiyacınız olan tüm kurulum kodunu içeren yeni bir repository oluşturabilir ve ardından bunu şablon olarak işaretleyebilirsiniz. Artık yeni bir proje reposu oluştururken kurulum sırasında zamandan tasarruf etmek için bu şablonu seçebilirsiniz, ve bu durum projenin kendisi üzerinde çalışmaya daha erken başlamanıza izin veriyor!

### Bilgi ölçme

Bu bölüm, bu dersi kendi kendinize anlayıp anlamadığınızı kontrol etmeniz için sorular içermektedir. Bir soruyu yanıtlamakta zorlanıyorsanız, soruya tıklayın ve bağlantılı olduğu materyali gözden geçirin.

- [What is linting?](https://mikecavaliere.com/javascript-linting-what-developers-need-to-know/)
- [Which problems can linting prevent?](https://mikecavaliere.com/javascript-linting-what-developers-need-to-know/)
- [Why should you use Prettier?](https://www.youtube.com/watch?v=hkfBvpEfWdA)
- [What is a template repository?](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository)

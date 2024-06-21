### Giriş

Derslerimizin ilk başından beri __ES6__ terimini kullanıyoruz, ancak bu terimin ne anlama geldiğini düzgün bir şekilde açıklamadık veya kodumuzdaki etkilerini araştırmadık.

ES6, resmi olarak 2015 yazında piyasaya sürülen bir JavaScript sürümüdür. JavaScript yazmayı çok daha kolay ve temiz hale getiren _birçok_ yeni özellik içeriyor. Eğer derslerimizi takip ediyorsanız zaten bu yeni özellikleri öğrenmeye başladınız çünkü işte, ES6'ın kendisi _JavaScript'tir_.

Muhtemelen ES7, ES8, ES2015, ES2017 gibi sürümlerdeki özellikleri ele alan makalelere de rastlamışsınızdır. Buradaki kafa karışıklığının bir kısmı, ES6'nın piyasaya sürülmesinden hemen sonra, bu kararları alan komitenin isimlendirme düzenini 'sürüm numaraları'ndan (ES5, ES6, ES7 vb.) 'yayın yılları'na (ES2015, ES2016, ES2017 vb.) değiştirmesidir.

- [This article](https://codeburst.io/javascript-wtf-is-es6-es8-es-2017-ecmascript-dca859e4821c), çeşitli ECMAScript sürümlerinin temiz ve açık bir açıklamasını ve zaman çizelgesini sunuyor.
- [This article](https://github.com/lukehoban/es6features), ES6'da ortaya çıkan tüm yeni özellikleri açıklıyor. Bahsettiğimiz gibi, çoğunu zaten kullanmaya başladınız, ancak henüz özel olarak ele almadığımız birkaç özellik bulunuyor.

JavaScript'in sürekli olarak güncellenmesi ve özellikler eklenmesiyle ilgili _sorun_, bazen web tarayıcılarının yayınlandıktan sonra yeni özellikleri yakalayıp uygulamak için bir süre geçmesidir. Şu anda, tüm modern tarayıcılar (Chrome, Firefox, Safari ve Edge), ES6'nın _tamamını_, ve ES7'nin _çoğunu_ destekliyor, ancak eski tarayıcılar (örneğin çeşitli Internet Explorer sürümleri) desteklemiyor. Bu maalesef demek oluyor ki, eğer bu yeni özellikleri kullanan bir kod yazarsanız, desteklenmeyen tarayıcılarda çalışmayacaktır.

Çoğumuz için, bu bir sorun olmamıştır çünkü muhtemelen yeni bir tarayıcı kullanıyorsunuz ve yeni bir sürüm yayınlandığında kendini otomatik olarak güncelliyor. Ancak gerçek dünyada, müşterilere ürün satıyorsanız, insanların sitenize bağlanmak için hangi tarayıcıları kullandığını kontrol edemezsiniz.

Neyse ki bu sorunun bir çözümü var. [Babel](http://babeljs.io/), modern JavaScript kodunuzu alır ve onu eski tarayıcıların anlayabileceği bir şekilde __transpile__ (aktarmak) eder. Bu, komut satırından tek bir komutla kullanılabilir ve aynı zamanda babel-loader ile webpack yapılandırmanıza kolayca eklenebilir.

Gerçek şu ki, bu her projede _endişe_ duymanız gereken bir şey değil. Dünya genelinde kullanılan tarayıcıların büyük çoğunluğunda tüm ES6 özellikleri mevcuttur. Ancak JavaScript sürekli değişiyor ve yeni özellikler duyurulduğunda ve yayınlandığında, genellikle _herhangi bir_ tarayıcıda mevcut olmadan önce bunları denemek için Babel'i kullanabilirsiniz!

- Babel-loader'ı kurmak ve webpack ile kullanmak için [here](https://github.com/babel/babel-loader) linkindei talimatları izleyin. Eğer zaten bir projede webpack'i çalıştırıyorsanız, Babel eklemek çok kolaydır!
- Presetler ve eklentiler hakkında daha iyi bir anlayış için [this article](https://blog.jakoblind.no/babel-preset-env/) okuyun. Ayrıca desteklemek istediğiniz belirli tarayıcı sürümlerini hedeflemenin nasıl yapılacağını da gösterecektir.
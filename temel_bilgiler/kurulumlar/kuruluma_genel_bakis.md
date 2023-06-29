### Giriş

Herhangi bir web sitesi oluşturmanın ilk adımı doğru araçlara sahip olmaktır. Bizim için bu, iyi kod yazmak için bir geliştirme ortamı kurmak anlamına geliyor.

Birçok çevrimiçi geliştirme kursu, sadece o anki görevi tamamlamalık araçlar ve programlar sunan çevrimiçi kod düzenleyicileri veya "sandboxlar" (izole sanal ortamlar) kullanır. Bunlardan bazılarını Odin Project'in erken aşamalarında kullanacaksınız çünkü işe hızlıca başlamak için harikadırlar. Ancak uzun vadeli başarı için kendinizi hazırlamanın en iyi yolu, gerçek bir geliştirme ortamında çalışmaktır.

Size yalan söylemeyeceğiz. Paketler, kod düzenleyiciler ve hatta koca işletim sistemlerini yüklemek oldukça sinir bozucu olabilir. Ancak yazacağınız kodu çalıştırmak için bir geliştirme ortamı kurma deneyimi; kariyeriniz boyunca yanınızda taşıyacağınız, paha biçilmez bir gerçek yaşam becerisidir.

### Kurulum Planı

Aşağıdaki bölümlerde, geliştirme ortamınızı kurmak için gerekli adımları ele alacağız. Bu derste bir şeyler yüklemenize gerek yok, bu ders yalnızca bilgi sağlamak içindir. Bu bölümler, tüm müfredatın **en önemli adımlarıdır**. **Aldığınız notları tekrar kontrol etmek** için ekstra zaman ayırın, aksi takdirde kendinize ileride daha fazla iş çıkartabilirsiniz. 

Önümüzdeki birkaç derste, bu yükleme adımlarını birlikte ele alacağız:

* Desteklenen bir [işletim sistemi](https://en.wikipedia.org/wiki/Operating_system) (OS) yüklemek.
* Google Chrome web tarayıcısını yüklemek.
* Bir kod düzenleyici yüklemek.
* Bir SSH anahtarı oluşturmak (GitHub, Heroku ve daha birçok siteye kimliğinizi tanımlayacak kişisel bir "şifre").

Sıradaki dersin sonunda, kod yazmak ve kodu çalıştırmak için gereken birçok araçla hazır olacaksınız! Adımlar çok fazla gibi görünebilir ancak olabildiğince sorunsuz şekilde bunu beraber atlatacağız! Bir şeyler ters giderse, bu adımları kullanmayı unutmayın:

* Asıl hatayı belirlemek için terminal çıktısını inceleyin.
* Google'layın, Google'layın, Google'layın.
* [Yardım istemekten](https://discord.gg/fbFCkYabZB) asla çekinmeyin!

Chromebook kullanıcıları, cihazınız için en uygun işletim sistemi çoktan belirlenip yüklenmiştir. Ancak cihazınız Linux Beta'yı [destekliyorsa,](https://www.chromium.org/chromium-os/chrome-os-systems-supporting-linux) bir sonraki derste cihazınızda bunu nasıl kuracağınıza dair talimatlar bulunur.

### İşletim Sistemi(OS) Seçenekleri

#### macOS

Eğer bir Mac kullanıyorsanız, harika bir durumdasınız. Odin Project talimatları, Unix tabanlı bir sistem varsayılarak yazılmıştır. Sadece birkaç program yükleyerek, eğitiminize hemen başlayabilirsiniz!

#### Linux (Resmi Ubuntu Sürümleri)

[Linux,](https://en.wikipedia.org/wiki/Linux) tüm programlama dilleriyle iyi çalışan ücretsiz ve açık kaynak kodlu bir işletim sistemidir. Çoğu geliştirme aracı, Linux ile doğal olarak çalışacak şekilde yazılmıştır. Araçlarınız muhtemelen daha sık güncellenecektir, genel olarak Linux'ta daha sorunsuz çalışacaktır ve bir sorunla karşılaşmanız durumunda daha çok kaynak bulabileceksinizdir. Biz, en popüler ve kullanıcı dostu dağıtımlardan biri olan Ubuntu veya onun daha hafif alternatifi olan Xubuntu'yu kullanacağız. **Eğer bir Mac kullanmıyorsanız, Linux kullanmanızı öneririz**. Bu kadar basit.

#### Windows

Windows, Odin Project tarafından **yerel olarak desteklenmiyor** ve Discord sunucumuzda da yardım sunulmuyor. Ancak şu anda Windows kullanıyorsanız, sanal makine veya dual boot kullanarak Windows kurulumunuzu koruyabilir ve Linux'ta geliştirme ortamınızı oluşturabilirsiniz.

**Sanal makine**, mevcut işletim sisteminizin içinde çalışan bir bilgisayar emülasyonudur. Mevcut işletim sisteminizin içindeki bir programla başka bir işletim sistemi kullanmanızı sağlar (örneğin: Windows içinde Linux çalıştırmak). Sanal makineler, herhangi bir program gibi yüklemesi basit ve risksizdir. Linux'u sevmezseniz, sanal makineyi kolaylıkla kaldırabilirsiniz. Sanal makineler, yeni geliştiricilerin hızlı bir şekilde başlaması için harika bir yoldur.

 - Sanal makineler konusunda genel bir fikir edinmek için [bu videoyu](https://youtu.be/yIVXjl4SwVo) izleyin. 

**Dual-booting**, bilgisayarınıza iki işletim sistemi kurarak, bilgisayarınız ilk açıldığında Linux veya Windows'u başlatma seçeneği sunabilir. Sanal makineye kıyasla dual-booting'in avantajı, işletim sisteminin bilgisayarın tüm kaynaklarını kullanabilmesi ve böylece çok daha hızlı çalışmasıdır. Hard disk bölümlerini değiştirdiğiniz için bir dual-boot sistemi kurmakta biraz risk vardır ancak zaman ayırıp talimatları okursanız sorun yaşamazsınız.

Dual-booting, bir flash sürücüsü takıp birkaç tuşa basmak kadar kolaydır. Dual-booting'in faydaları saymakla bitmez. Linux'un donanımınızın tam kapasitesine erişmesine izin verecek, kodlama için temiz ve dikkat dağıtmayan bir ortam sağlayacak ve birçok üst düzey geliştirici ve sunucu tarafından kullanılan platformu öğreneceksiniz.

### Yeni Bir İşletim Sistemi Kurmakta Endişeli misiniz?

"Bir saniye, ben işletim sistemimden oldukça memnunum!"

Eğer bir Apple bilgisayarınız yoksa, muhtemelen Windows kullanıyorsunuzdur. Endişelenmeyin! Yukarıdaki seçenekler Windows'tan kurtulmanız gerektiği anlamına gelmiyor. Linux, sabit diskinizi Windows ile memnuniyetle paylaşacaktır. Favori işletim sisteminizle ilgili birçok ipucu ve püf noktası öğrendiğinizi ve bilgisayarınızdaki her şeyi kaybetmek istemediğinizi biliyoruz. Ancak çoğu işletim sistemi, teknik becerisi olmayan kişiler göz önünde bulundurularak geliştirildiğinden, kurmamız gereken birçok dil ve uygulama çatısını (framework) gizler veya kullanımını zorlaştırır. Bu zorluklarla uğraşmak, birçok yeni geliştiricinin full stack nirvanası yolculuğuna başlamadan vazgeçmesine neden olur.

İhtiyacınız olan araçlarla çalışmak için bilgisayarınız üzerinde değişiklik veya dual-booting yapmak, programlamaya başlamayı çok daha kolay hale getirir, dikkat dağıtıcı olmayan bir ortam yaratmaya yardımcı olur ve CV'nizde iyi görünür. Derin bir nefes alın ve seçeneklere bir göz atın.

Hala ikna olmadınız mı? İşte Linux kurmak için birkaç harika neden:

- **Test Edildi** - Yönergelerimizi macOS, Ubuntu ve resmi Ubuntu dağıtımlarıyla test ettik. Kodlamaya daha erken başlamanıza yardımcı olmak ve olası sorunları en aza indirerek araçları yüklemenizi sağlamak için araştırma yaptık. İşletim sistemiyle uğraşmak için harcanan zaman, kodlamayı öğrenme zamanından kaybetmeniz anlamına gelir.
- **Topluluk Desteği** - Önerdiğimiz araçları kullanmak, sorun yaşadığınızda size yardımcı olmamızı kolaylaştırır.
- **Geliştirme Araçları Linux İçin Tasarlanmıştır** - Odin Project'te kapsanan Ruby (on Rails) ve Node.js, web geliştirme topluluğunda yaygın olarak kullanılan popüler arkayüz teknolojileri, açık kaynaklı projelerdir ve Linux gibi açık kaynaklı (UNIX tabanlı) bir platformda kolaylıkla çalışması  *hedeflenmiştir*.
- **Profesyoneller Gibi Çalışın** - Birçok geliştirici Unix tabanlı bir işletim sistemini kullanır.
- **Performans** - Bilgisayarınız yavaş/eski ve sınırlı bir disk alanına sahip olduğu için Linux yüklemekten çekiniyor musunuz? Önceliğiniz performans ise, Linux harika bir seçimdir, Windows'tan daha az sistem kaynağı kullanır ve daha az sabit disk alanı işgal eder.

Birçok öğrenci, bu sayfadaki yönergelerin takip edilmesi gerekip gerekmediğini sormak için Discord kanalımıza geliyor. Kurulum planı hakkındaki okuduğunuz her şeyi Discord sunucumuzdaki moderatörlerimiz yazdı. Discord sunucumuzdaki öğrencileri destekleyenler, bu sayfadaki yönergelerle aynı fikirdeler ve sizlere burada okuduğunuz önerilerin aynısını yapacaktır.

Devam edebilmemiz için öncelikle önemli bir ayrıntıyı vurgulamamız gerekiyor:

**Biz sadece müfredatımızın kapsamında olanı destekleyebiliriz. Windows yerel sürümünü veya Linux için Windows Alt Sistemi'nin (WSL) herhangi bir sürümünü geliştirme ortamı olarak desteklemiyoruz.** Windows ve WSL kullanımı birçok kez tartışıldı ve şu anda uygun değil. Lütfen bizden Windows'u desteklememizi istemeyin ve **Discord'da bunu gündeme getirmeyin**. Müfredatımızı mümkün olan en güncel ve erişilebilir şekilde tutmak için sürekli olarak değerlendiriyoruz ve Windows/WSL'in [sorun çıkarmayan bir yöntem olduğu kanıtlanmamıştır.](https://github.com/microsoft/WSL/issues)

Bu ayrıntıyı belirttikten sonra, uygun bir geliştirme ortamı kurmaya geçebiliriz!

### Ek Kaynaklar

Bu alanda ilgili içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

* Bu dersin henüz ek kaynağı bulunmuyor. Müfredatımıza katkıda bulunarak bu bölümü genişletmemize yardımcı olun.

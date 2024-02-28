### Giriş

Web geliştirme yolculuğunuza devam ederken çalışmanızın son kullanıcılarının çeşitli tarayıcılar kullanıyor olabileceğini aklınızda bulundurmanız önemlidir; Chrome, Internet Explorer, Firefox ve Safari bunlardan birkaçıdır. Aynı zamanda mobil işletim sistemi kullanan kullanıcıların sayısı hızla artıyor. Bu nedenle farklı tarayıcıların mobil versiyonlarını da göz önünde bulundurmalısınız.  

### Derse genel bakış

Bu bölüm, bu derste öğreneceğiniz konuların genel bir özetini içerir.

- Tarayıcı uyumluluğunu ve geçmişini anlayabilmelisiniz.
- Yeni CSS özelliklerinin tarayıcılara nasıl geldiğini bilmelisiniz.
- Uyumluluğu nasıl kontrol edeceğinizi bilmelisiniz.

### Tarayıcı Geçmişi

<span id="first-web-browser">Modern taramanın tarihi 1990 yılının Aralık ayında WorldWideWeb tarayıcısının piyasaya sürülmesiyle başladı.</span>Tim Berners-Lee tarafından CERN olarak bilinen Avrupa nükleer araştırma ajansında çalışırken yazılmıştır. Daha sonrasında World Wide Web ile karıştırılmaması için Nexus olarak yeniden adlandırılmıştır.

Nexus türünün ilk örneğiydi ve kullanıcıların temel stil sayfalarını görüntülemesine, haber gruplarını okumasına ve hatta yazım denetimi yapmasına olanak sağlıyordu. Bugün çok fazla bir şey gibi görünmeyebilir ancak o zamanlar gerçekten çığır açıcıydı.

Nexus'un piyasaya sürülmesi sadece bir başlangıçtı. Sonraki on yılda insanlar hızlıca popülerlik kazanan ve dünyanın en popüler tarayıcısı haline gelen Mosaic Browser gibi tarayıcıların ilk sürümlerine tanık oldular. Bu noktadan sonra World Wide Web'in büyümesi Opera ve Netscape Navigator tarayıcılarının piyasaya sürülmesiyle patladı.

1995'te dünya pazarda baskın oyuncu haline gelen Internet Explorer'ın ilk sürümüyle tanıştı. Bir noktada Internet Explorer tüm kullanıcıların %90 dan fazlası tarafından kullanılıyordu. Bu hakimiyete karşı koymak için Netscape, Firefox'u geliştiren ve sürdüren Mozilla Vakfı'nı kurdu. Bundan kısa bir süre sonra, 2003'te Apple Safari'yi ve 2008'de Google Chrome'u piyasaya sürdü.

Bu isimlerin hepsini olmasa da çoğunu büyük olasılıkla tanıyorsunuzdur.<span id="most-used-browser"> Chrome (ve [Chromium](https://en.wikipedia.org/wiki/Chromium_(web_browser))) pazardaki baskın oyuncu olsa da, bugün hala tarayıcılar arasında çok fazla rekabet var</span>.

### Tarayıcı Uyumluluğu Nedir?

Bugün interneti tarayıcıların kullanımı olmadan hayal etmek imkansız.  Bağımsız uygulamalardan, uygulamaların bir tarayıcı içinde tam olarak çalışmasına olanak tanıyan HTML5 ve aşamalı web uygulamalarına geçişe tanık olduk. Örneğin, Microsoft Word ve Excel en uzun süre boyunca yalnızca bağımsız bir uygulama aracılığıyla çalıştırılabiliyordu. Artık bu uygulamaları herhangi bir dosya yüklemeye gerek kalmadan herhangi bir tarayıcı üzerinden kullanabilirsiniz.

Şirketler pazar payı için rekabet ederken, farklı tarayıcılar web sayfasındaki bilgileri görüntülemek için farklı motorlar kullanmaktadır. Örneğin; Chrome ve Chromium Blink kullanırken Safari WebKit kullanmaktadır.

Bu farklılıklardan dolayı uygulamanız tarayıcıda farklı davranabilir. Chrome'un hakimiyeti nedeniyle uygulamaların büyük çoğunluğu Chromium ile sorunsuz çalışacak şekilde tasarlanmıştır ve diğer tarayıcılarda iyi bir performans düzeyi sağlamak ikincildir.

Web geliştirme projelerinizin daha geniş bir erişime sahip olması için web uygulamalarınızı kullanıcılar tarafından kullanılma olasılığı en yüksek olan tarayıcılarda test ettiğinizden emin olmalısınız. Chrome, Safari, Firefox ve diğer Chromium tabanlı tarayıcılar (Microsoft Edge, Brave, vb.) normal kullanıcılar arasında daha yaygındır. Ancak kullanıcı tabanına veya çalıştığınız şirkete bağlı olarak daha az yaygın olanları da (Internet Explorer gibi) desteklemeniz gerekebilir. Chromium tarayıcılar için, eğer Chrome'da çalışıyorsa, diğer ilgili tarayıcılarda da çalışmalıdır.

### Tarayıcı sürümleri ve yeni CSS özellikleri

W3C [World Wide Web Consortium](https://www.w3.org/), internet deneyiminin erişilebilirliğini ve tutarlılığını en üst düzeye çıkarmak için internet standartları geliştirmenin arkasındaki otoritedir. W3C aynı zamanda CSS'de yeni özellikler geliştiren otoritedir. Bu, bir topluluk olarak internetin yanı sıra internet tarayıcılarını geliştiren şirketlerle de yakın işbirliği içinde olan bir yaklaşımdır.

Nexus ve Netscape gibi web tarayıcılar piyasaya sürüldüğünde daha fazla uyumluluk yaratmaya yardımcı olacak W3C gibi bir organizasyon yoktu. Uygulamanız her tarayıcıda farklı görünebilir ve çalışabilir; daha da kötüsü, uygulamanız tamamen kullanılamaz hale gelebilirdi. İnternet geliştiricileri her tarayıcı için özel ayarlamalar yapmak zorundaydı ve her geliştiricinin bunu herkes için çalıştıracak yeterli kaynağı yoktu.

Günümüzde, internet etrafındaki standartlar gelişip değiştikçe ve internet geliştiricileri kod tabanlarında yeni özellikler uygulamaya başladıkça tarayıcılar bu yeni özellikler için destek sağlamalıdır. Kullanıcı deneyimi tarayıcılardaki destek eksikliğinden etkilenirse kullanıcılar rakiplerine yönelebilir.

### Yeni özellikleri kullanmak ne zaman güvenlidir?

Her ne kadar yeni özellikleri kullanmak heyecan verici olsa da acele etmenin bir riski var. Örneğin, uygulamanızın Firefox'ta iyi çalıştığını ancak kod tabanındaki değişiklikler nedeniyle artık Firefox'ta kullanılamaz olduğunu ama Safari'de iyi çalıştığını öğrenmek kullanıcılarınız için olumlu bir deneyim olmayacaktır. Neyse ki, bu durumu önlemenize yardımcı olabilecek bir araç var.

["Can I Use"](https://caniuse.com/), yeni özelliklerin tarayıcılar tarafından desteklenip desteklenmediğini doğrulamak için harika bir kaynak. Bu uygulama hangi tarayıcıların ve platformların yeni teknolojileri desteklediğine ve hatta tarayıcıların hangi sürümlerinin belirli özellikleri desteklediğine dair istatistikler sağlıyor.

Yeni özellikleri en yaygın tarayıcılar tarafından desteklendiğinde uygulamak genellikle iyi bir tavsiyedir. Bu şekilde çok sayıda kullanıcının karşılaşacağı bir sorunla karşılaşma olasılığınız azalır.

### Mobil tarayıcılar

Geleneksel olarak internet ilk olarak masaüstü bilgisayardı. Uygulama masaüstü tarayıcılarda çalışırsa başarılıydı. Ancak akıllı telefonlar daha popüler hale geldikçe her yıl daha fazla insan ana internet aracı olarak akıllı telefonları kullanmaya başladı. Dünyanın bazı bölgelerinde mobil kullanıcılar büyük bir çoğunluğu oluşturuyor.

Mobil cihazlar çoğunlukla akıllı telefonlar ve tabletlerden oluşuyor. En popüler mobil işletim sistemleri [Android](<https://en.wikipedia.org/wiki/Android_(operating_system)>) ve [iOS](https://en.wikipedia.org/wiki/IOS)'tur.

Uygulamalarınızı geliştirirken uygulamanızın tamamen mobil uyumlu olması gerekip gerekmediğini de göz önünde bulundurmalısınız. Mobil tarayıcılar hakkında aklınızda bulundurmanız gereken birkaç özellik vardır:

1. <span id="apple-browsers">iOS ve iPadOS'ta Safari teknik olarak desteklenen tek tarayıcıdır. Evet Chrome ve Firefox indirebilir hatta varsayılan olarak ayarlabilirsiniz ancak tam olarak tarayıcı değiller. Hala Safari oluşturma motorunu (WebKit) kullanıyorlar. Bu nedenle, web uygulamanızın Apple kullanıcıları için çalışması için, WebKit ve Safari'de kullanılan diğer teknolojiler için destek sağlamanız gerekir.
Mobil tarayıcıların masaüstü muadilleriyle bire bir aynı olmadığını unutmamak önemlidir. Safari'nin masaüstü sürümünde çalışan bir projenin, aynı tarayıcının mobil sürümünde düzgün çalışması için yine de ayarlamalar yapılması gerekebilir.</span>
2. Mobil tarayıcılar için bir başka husus da farklı ekran boyutlarının fazlalığıdır. Her fiziksel cihazı test etmek için hazır bulundurmak neredeyse imkansızdır. Neyse ki tarayıcılar diğer cihazları taklit etmek için bir yol sağlıyor. Unutulmaması gereken önemli nokta, örneğin Chrome'da bir iPhone'u taklit ettiğinizde taklit ettiğiniz tek şeyin ekran boyutu olduğudur. İşletim sistemiyle ilgili herhangi bir özel hususun yeniden üretilemeyeceğini unutmayın. Bu da bir cihazı taklit ederken Chrome'da her şey iyi çalışsa bile gerçek telefon veya tablet cihazında farklı davranabileceği anlamına gelir

### Ödev

<div class="lesson-content__panel" markdown="1">
- [Can I Use]'u (https://caniuse.com/) inceleyin. Şu ana kadar karşılaştığınız tüm teknolojiler popüler tarayıcılar tarafından destekleniyor mu?
- [Web browsers on iOS](https://adactio.com/journal/17428) adlı makaleyi okuyun.
</div>

### Bilgi ölçme

- [Şu anda en çok kullanılan tarayıcı hangisidir?](#most-used-browser)
- [İlk web tarayıcısının orijinal adı neydi?](#first-web-browser)
- [Mobil tarayıcılar Apple mobil işletim sistemlerinde Android'den nasıl farklıdır?](#apple-browsers)

### Ek kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

- [İnternet tarayıcılarının tarihi](https://www.taskade.com/blog/history-of-web-browsers-internet-online-productivity/) hakkında daha fazla bilgi edinin.
- Tarayıcılar ve işleme motorları hakkındaki [bu kapsamlı kılavuza](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/) göz atın.



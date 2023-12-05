### Giriş

HTML ve CSS'inizi inceleyebilmek ve hata ayıklayabilmek, önyüz geliştirme için çok önemlidir. Bu derste, öğeleriniz ve CSS kurallarınız hakkında ayrıntılı bilgileri görmenizi sağlayan ve kodunuzdaki sorunları bulup düzeltmenize yardımcı olan Chrome Geliştirme Araçlarını inceleyeceğiz.

### Derse genel bakış

Bu bölüm, bu derste öğreneceğiniz konuların genel bir özetini içerir.

- Öğe denetleyicisine nasıl erişeceğinizi öğreneceksiniz.
- Belirli öğeleri nasıl seçip denetleyeceğinizi öğreneceksiniz.
- Denetleyicide HTML ve CSS'i nasıl test edeceğinizi öğreneceksiniz.

### Denetleyici

Denetleyiciyi açmak için, sayfanın herhangi bir öğesine sağ tıklayıp "İncele" seçeneğine tıklayabilir veya F12 tuşuna basabilirsiniz. Bu sayfada kullanılan HTML ve CSS'i görmek için hemen şimdi deneyebilirsiniz.

Şu anda karşınıza çıkan tüm araçlar sizi endişelendirmesin! Bu ders için yalnızca Öğeler ve Stiller bölmelerine odaklanacağız.

### Öğeleri denetlemek

Öğeler bölmesinde, sayfanın tüm HTML yapısını görebilirsiniz. Belirli bir öğeyi seçmek için bu bölmede herhangi birine tıklayabilirsiniz. Alternatif olarak, aşağıdaki görselin sol üstünde bulunan mavi simgeye tıklayıp sayfadaki herhangi bir öğenin üzerine gelebilirsiniz.

![Inspector Icon](https://cdn.statically.io/gh/TheOdinProject/curriculum/594984d7c9f9e744577f19ea475b3864e8cc7c91/html_css/v2/foundations/inspecting-html-and-css/imgs/01.png)

<span id="strikethrough">Bir öğe seçildiğinde, Stiller bölmesi, uygulanmakta olan tüm stillerin yanı sıra üzerine yazılan stilleri de gösterir (metnin üstü çizili olarak gösterilir).</span> Örneğin, ana sayfadaki "Web Geliştirme Kariyeriniz Burada Başlıyor" başlığına tıklamak için denetçiyi kullanırsanız, aşağıda görüldüğü gibi, sağ tarafta şu anda öğeyi etkileyen tüm stilleri göreceksiniz.

![Overwritten style](https://cdn.statically.io/gh/TheOdinProject/curriculum/f8fd38fc62578d8e8368f5303126215a492847f0/foundations/html_css/inspecting-html-and-css/imgs/03.png)

### Denetleyici'de stilleri incelemek

Stiller bölmesi, stilleri doğrudan tarayıcıda değiştirmenize de olanak tanır. Yeni bir kural eklemek için herhangi bir seçicinin içine tıklayabilir veya mevcut bir nitelik veya değere tıklayarak değişiklik yapabilirsiniz. Bunu yaptığınızda, internet sayfası gerçek zamanlı olarak değişikliklerle yanıt verir. Bu değişiklikler, metin düzenleyicinizdeki kaynak kodunu etkilemez, ancak sayfayı tekrar tekrar yüklemeye gerek kalmadan çeşitli nitelikleri ve değerleri hızlı bir şekilde test edebilmek için son derece yararlıdır.

### Ödev

<div class="lesson-content__panel" markdown="1">
[Resmi Chrome Geliştirici Araçları dökümanının](https://developers.google.com/web/tools/chrome-devtools) aşağıdaki bölümlerini inceleyin:

- [Overview](https://developer.chrome.com/docs/devtools/overview/): burada bağlantısı verilen diğer sayfalara gitmeyin; şimdi hepsini nasıl kullanacağınızdan ziyade DevTools'ta _hangi_ araçların mevcut olduğunu öğrenin.
- [Open Chrome DevTools](https://developer.chrome.com/docs/devtools/open/): yukarıda incelediklerimize benzer, ancak bazı güzel ek bilgiler var.
- [View and change CSS](https://developer.chrome.com/docs/devtools/css): etkileşimli talimatları takip ettiğinizden emin olun!
- [Get Started With Viewing And Changing The DOM](https://developer.chrome.com/docs/devtools/dom/): JavaScript konsolunu kullanan bölümleri atlayın.

</div>

### Bilgi kontrolü

Bu bölüm, dersi anlayıp anlamadığınızı kontrol etmeniz için sorular içermektedir. Bir soruyu yanıtlamakta zorlanıyorsanız, soruya tıklayıp yönlendirdiği materyali inceleyin.

- [Tarayıcınızın geliştirici araçlarıyla sayfadaki belirli bir öğeyi nasıl seçersiniz?](#inspecting-elements)
- [Bir CSS ifadesindeki üstü çizili kısım, tarayıcınızın geliştirici araçlarında ne anlama gelir?](#strikethrough)
- [Tarayıcınızın geliştirici araçlarıyla sayfadaki belirli öğelerinde CSS'i gerçek zamanlı olarak nasıl değiştirirsiniz?](#testing-styles-in-the-inspector)

### Ek kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

- [Bu makale](https://www.freecodecamp.org/news/how-to-use-css-overview-in-chrome-developer-tools/), bir web sayfasında kullanılan renkler, yazı stilleri, medya sorguları ve benzeri şeyleri kontrol etmek için geliştirici araçlarında CSS genel bakışını nasıl kullanabileceğimiz hakkında bilgi vermektedir.
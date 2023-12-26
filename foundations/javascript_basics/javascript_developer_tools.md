---
title: 'Javascript Geliştirici Araçları'
---

### Giriş

Tarayıcı içerisindeki 'Geliştirici Araçları'nı kullanmak her web geliştiricisi için önemli bir beceridir. 'Geliştirici Araçları'; JavaScript kodlarını çalıştırma, HTML ve CSS stillerini sayfayı yenilemeden düzenleme ve performans verilerini görüntülemeyi sağlar. Ayrıca oldukça zaman kazandırır. Web geliştirmeye başlamak hiç bu kadar kolay olmamıştı. HTML ve CSS üzerinde çalışmak ve hata ayıklamak konularına çoktan aşina olduğunuza göre, bunların bize JavaScript yazarken nasıl katkı sağlayacağını birlikte görelim.

### Derse genel bakış

Bu bölüm, bu derste öğreneceğiniz konuların genel bir bakışını içermektedir.

* Geliştirici araçlarıyla bir internet sitesinin ekran boyutunu değiştirme
* DOM'u görüntüleme ve değiştirme
* JavaScript'te hata ayıklama
* Breakpoint kullanımı
* Öğeler sekmesinde HTML görüntüleme ve düzenleme
* İnternet sitesinde çalışan scriptleri 'Kaynaklar' panelinde görüntüleme
* CSS Pseudostate'ini bir sınıfa ekleme
* CSS bileşenlerini alfabetik sırada görüntüleme
* Chrome DevTools'da herhangi bir elemanın veya kutu modelini görüntüleme ve düzenleme
* Bir sayfayı yazdırılabilir formatta görüntüleme
* CSS sınıflarını etkinleştirme veya devredışı bırakma
* Cihaz Modu'nda medya sorgularını simüle etme

### Geliştirici araçlarını açmak

Chrome Geliştirici Araçları menüsünü açmanın üç yolu vardır:

1. Chrome Menüsü` > `Diğer Araçlar` > `Geliştirici Araçları`
2. Web sayfasında herhangi bir yere sağ tıklayın ve `İncele` seçeneğini seçin
3. `F12` veya `CTRL + Shift + C` klavye kısayolunu kullanın (Mac'te `option + command + C`)

### Ödev

<div class="lesson-content__panel" markdown="1">

Google, aşağıdaki eğitimlerde gerekli bazı bölümleri güncelledi ve bazı öğeler değişmiş veya artık mevcut olmayabilir ancak aynı işlev ve araçları kullanarak eğitimleri takip etmeye devam edebilirsiniz. Örneğin, artık sayfada bulunmayan bir düğmeyi incelemeniz istenebilir; ancak hala var olan öğeleri sorunsuz bir şekilde takip etmeye ve incelemeye devam edebilirsiniz.

1. Google tarafından hazırlanan İngilizce dilindeki [Chrome DevTools Documentation](https://developer.chrome.com/docs/devtools/) adresine gidin. Aşağıdaki ingilizce alt bölümler, Geliştirici Araçları'nda sizin kullanacağınız kısımların %95'ini ele almaktadır.  Zaten aşina olduğunuz öğeleri atlamaktan çekinmeyin:
    * CSS
        1. [CSS'i görüntüleme ve değiştirme](https://developer.chrome.com/docs/devtools/css/)
        2. [CSS özellikleri referansı](https://developer.chrome.com/docs/devtools/css/reference/)
    * [DOM'u Görüntüleme ve Değiştirmeye Başlama](https://developer.chrome.com/docs/devtools/dom/)
    * Mobil Simülasyon
        1. [Cihaz Modu ile mobil cihazları simüle edin](https://developer.chrome.com/docs/devtools/device-mode/)
    * JavaScript
        1. [JavaScript'te Hata Ayıklama](https://developer.chrome.com/docs/devtools/javascript/) - - Uyarı: Öğreticinin 3. adımının 4. noktasında, devtools fonksiyonun bildirimi yerine ikinci satırda(`if (inputsAreEmpty()) {`) duraklayacaktır. Endişelenmeyin, bu beklenen bir durumdur.
        2. [Breakpointlerle kodu duraklatma](https://developer.chrome.com/docs/devtools/javascript/breakpoints/)

2. Ardından konsolu ve kullanımını tanımak için [bu adresteki İngilizce, konsola genel bakış videosunu izleyin ve sayfayı inceleyin](https://developer.chrome.com/docs/devtools/console/).

</div>

### Bilgi ölçme

Bu bölüm, bu dersi kendi başınıza anlayıp anlamadığınızı kontrol etmeniz için sorular içermektedir. Bir soruyu yanıtlamakta zorlanıyorsanız, soruya tıklayın ve bağlantı verdiği materyali gözden geçirin.

* [Geliştirici araçlarını nasıl açarsınız?](#opening-dev-tools)
* [Geliştirici araçlarını kullanarak bir web sitesinin ekran boyutunu nasıl değiştirirsiniz? bunu öğrenmek için bu ingilizce kaynağa bakın](https://developer.chrome.com/docs/devtools/device-mode/)
* [Breakpoint nedir? adlı ingilizce makale](https://developer.chrome.com/docs/devtools/javascript/breakpoints/)
* [Nasıl breakpoint oluşturulur? bunu öğrenmek için bu ingilizce kaynağa bakın](https://developer.chrome.com/docs/devtools/javascript/breakpoints/#loc)

### Ek kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

* Wes Bos tarafından hazırlanan bu ingilizce[JavaScript 30 Video](https://www.youtube.com/watch?v=xkzDaKwinA8) videodaki 14 ipucu ve püf noktayı öğrenin

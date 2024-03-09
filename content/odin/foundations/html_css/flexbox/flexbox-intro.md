### Giriş

Öğreneceğiniz üzere, web sayfasındaki elemanları çeşitli yollarla hareket ettirmenin birçok yolu vardır. Yıllar içinde yeni yöntemler geliştirilmiş ve eski yöntemler modası geçmiştir. Flexbox, CSS'de elemanları manipüle etmenin [nispeten yeni](https://medium.com/@BennyOgidan/history-of-css-grid-and-css-flexbox-658ae6cfe6d2) bir yoludur ve piyasaya sürülüşü _devrim niteliğindedir_.

Birçok kaynak, teknoloji olarak nispeten yeni olduğu için eğitim programlarının sonuna doğru konumlandırır. Ancak bu noktada, birçok geliştirici için elemanları konumlandırmanın varsayılan yolu haline gelmiştir. Flexbox, araç kutunuzda en çok kullanacağınız araçlardan biri olacak, öyleyse neden ilk önce onu öğrenmeyesiniz?

### Ders Genel Bakışı

Bu bölüm, bu ders boyunca öğreneceğiniz konuların genel bir özetini içerir.

-   Elemanları flexbox kullanarak nasıl konumlandıracağınızı öğreneceksiniz.
-   Flex konteynerleri ve flex elemanları hakkında bilgi edineceksiniz.
-   Sadece elemanları üst üste koymak ve merkezlemekten öte, yararlı bileşenler ve düzenler oluşturmayı öğreneceksiniz.

### Başlamadan Önce

Flexbox düzenleri biraz karmaşık olabilir. Önceki bir dersinizde, tarayıcınızın geliştirici araçlarını kullanarak şeyleri nasıl inceleyip hata ayıklayacağınızı öğrendiniz. Bu araçlar, takip eden derslerde _hayati_ öneme sahip olacaktır. Beklediğiniz gibi davranmayan bir şey olduğunda, her zaman ilk adımınız geliştirici araçlarında incelemek olmalıdır.

Flexbox, şimdiye kadar ele aldığımız diğer konseptlerden mutlaka daha zor değildir, ancak biraz daha fazla hareketli parçaya sahiptir. İlk derslerde öğrendiklerinizden herhangi birini kullanmak, sonuna gelip hepsini bir araya getirene kadar biraz zor olacak. Giderken kendinize bir iyilik yapın ve **tüm kod örnekleriyle oynayın.**

Bu bölümün sonundaki atamalara geldiğinizde, bu derslere (veya sizinle paylaştığımız birkaç kaynağa) muhtemelen geri dönmek zorunda kalacaksınız, ancak zaman ayırıp sunduğumuz tüm kod örnekleriyle deney yaparsanız, o zaman geldiğinde nereye bakacağınızı daha iyi bileceksiniz.

### Hadi Flex Yapalım!

Flexbox, elemanları satırlar veya sütunlar halinde düzenlemenin bir yoludur. Bu elemanlar, tanımlayabileceğiniz bazı kurallara göre esner (yani büyür veya küçülür). Başlamak için, bir gösterime bakalım.

<div class="ders-notu" markdown="1">

Bu derslerde birçok etkileşimli örnek yerleştirdik. Gittikçe kavramları zihninizde pekiştirmek için bunlarla zaman ayırıp deney yapın!

</div>

<a href="https://codepen.io/TheOdinProjectExamples/pen/QWgNxrp">İlk flex örneğini </a>görün TheOdinProject tarafından (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
  <a href="https://codepen.io">CodePen</a> üzerinde.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Yakında tam olarak ne olduğunu anlayacağız. Ancak şimdilik, yukarıdaki Codepen'deki iki flex ile ilgili CSS bildirimini `/*` ve `*/` etiketlerini kaldırarak açıklamadan çıkaralım, sonra sonucu kontrol edelim.

<div class="ders-notu" markdown="1">

Yorumlar, tarayıcının satırları kod olarak yorumlamasını önler ve belirli etiketler arasına alınır. CSS `/*` açıklama başlangıç etiketi ve `*/` kapanış etiketi kullanırken, HTML ve JavaScript kendi sözdizimine sahiptir. Açıklama satırları, kodun etrafındaki yorum etiketlerini kaldırarak 'yeniden etkinleştirilebilir'.

</div>

Şimdi tüm 3 div yatay olarak düzenlenmiş olmalı. Sonuç çerçevesini "1x", ".5x" ve ".25x" düğmeleriyle yeniden boyutlandırırsanız, divlerin 'esnediğini' de göreceksiniz. Mevcut alanı dolduracaklar ve her biri eşit genişliğe sahip olacak.

HTML içinde `.flex-container` içine başka bir div eklerseniz, diğerlerinin yanında görünecek ve her şey mevcut alana sığacak şekilde esneyecektir.

<div class="ders-notu" markdown="1">

Küçük yerleşik CodePen'de ne olduğunu görmek zor ise, "CodePen'de Düzenle" veya "CodePen'de Forkla" butonuna tıklayın. Bu, örneği tam boyutlu bir ortama getirecektir. Daha sonraki örnekler, bunu yapmanın özellikle yararlı olabileceğini gösterebilir.

</div>

#### Flex Konteynerler ve Flex Elemanlar

Gördüğünüz gibi, flexbox sadece tek bir CSS özelliği değil, ihtiyacınız olan şeyleri yerleştirmek için kullanabileceğiniz bir dizi özellik bütünüdür. Bu özelliklerden bazıları _flex konteyner_ üzerinde, bazıları ise _flex elemanları_ üzerindedir. Bu, önemli bir konsepttir.

<span id="flex-konteyner-eleman-bilgi-kontrol">Bir flex konteyner, üzerinde `display: flex` olan herhangi bir elemandır. Bir flex elemanı, doğrudan bir flex konteynerinin içinde yaşayan herhangi bir elemandır.</span>

<span id="flex-eleman-olusturma-bilgi-kontrol">![konteyner-çocuk karşılaştırması](https://cdn.statically.io/gh/TheOdinProject/curriculum/8c0402439e1b0a9a156731bdab4ea64162688dab/foundations/html_css/flexbox/imgs/03.png)</span>

Biraz kafa karıştırıcı bir şekilde, herhangi bir eleman hem flex konteyner _hem de_ flex elemanı olabilir. Başka bir deyişle, bir flex elemanının üzerine de `display: flex` koyabilir ve sonra _onun_ çocuklarını düzenlemek için flexbox kullanabilirsiniz.

![iç içe flex konteynerler](https://cdn.statically.io/gh/TheOdinProject/curriculum/495704c6eb6bf33bc927534f231533a82b27b2ac/html_css/v2/foundations/flexbox/imgs/04.png)

Çeşitli elemanları düzenlemek, boyutlandırmak ve yerleştirmek için _sadece_ flexbox kullanarak karmaşık düzenler oluşturmanın ana yolu, birden fazla flex konteyner ve eleman oluşturup iç içe koymaktır. Aşağıdaki görüntü, çeşitli elemanları düzenlemek, boyutlandırmak ve yerleştirmek için _sadece_ flexbox kullanılarak elde edilmiştir. Flexbox, _çok_ güçlü bir araçtır.

![karmaşık örnek](https://cdn.statically.io/gh/TheOdinProject/curriculum/495704c6eb6bf33bc927534f231533a82b27b2ac/html_css/v2/foundations/flexbox/imgs/05.png)

### Bilgi Kontrolü

Bu bölüm, bu ders hakkındaki anlayışınızı kendi başınıza kontrol etmeniz için sorular içerir. Bir soruya cevap vermede zorlanıyorsanız, tıklayın ve bağlantılı olduğu materyali gözden geçirin.

-   [Bir flex konteyner ile bir flex elemanı arasındaki fark nedir?](#flex-konteyner-eleman-bilgi-kontrol)
-   [Nasıl bir flex elemanı oluşturulur?](#flex-eleman-olusturma-bilgi-kontrol)

### Ek Kaynaklar

Bu bölüm, ilgili içeriğe yardımcı olabilecek bağlantılar içerir. Gerekli değildir, bu yüzden bunu ek olarak düşünün.

* [Bu Flexbox eğitimi](https://internetingishard.netlify.app/html-and-css/flexbox/index.html), Interneting Is Hard tarafından modern CSS düzenleri için dostane bir eğitimdir.

* Daha etkileşimli bir açıklama ve örnek için, bu [Scrim on Flexbox](https://scrimba.com/learn/flexbox/your-first-flexbox-layout-flexbox-tutorial-canLGCw)'a deneyin. Not, bu Scrim'i görüntülemek için Scrimba'ya giriş yapmanız gerekmektedir.
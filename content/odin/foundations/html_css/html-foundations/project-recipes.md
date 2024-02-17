### Giriş

Edindiğiniz tüm HTML bilgilerini uygulama zamanı geldi. Bu projede, temel bir yemek tarifi web sitesi oluşturacaksınız.

Web sitesi, birkaç tarife bağlantı içeren bir ana dizin sayfasından oluşacaktır. Bitirdiğinizde web sitesi çok güzel görünmeyecek.
Tabii [Brütalist Web Tasarımı](https://brutalistwebsites.com/) ile ilgilenmiyorsanız.

Ancak bu projenin sadece HTML becerilerinizi geliştirmek için olduğunu unutmamanız önemlidir; CSS ile şekillendirmek için gelecekte bu projeyi tekrar ziyaret edeceğiz.

### Projenizin GitHub reposunu ayarlama


[Git'e Giriş](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/introduction-to-git)'de belirtildiği gibi, tüm projelerinizi bir portföy gibi düzenlemek ve başkaları tarafından görülebilmesi için GitHub'a bağlamak isteyeceksiniz.

Bir repoyu nasıl kuracağınızı bilmiyorsanız, nasıl kurulacağını öğrenmek için [Git Temelleri](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/git-basics)'nde bulunan talimatları izleyin.


1.  GitHub.com'da bu proje için yeni bir repo oluşturun ve buna `odin-recipes` adını verin ve varsayılan private yerine `public` seçeneğini seçin.

2.  Bu repoyu yerel makinenize, daha önce Git Temelleri dersinde oluşturduğunuz `repos` klasörünün içine taşıyın. Komut `git clone git@github.com:username/odin-recipes.git` gibi görünmelidir (SSH kullanın).


3.  Şimdi `cd` ile yerel makinenizde bulunan `odin-recipes` proje dizinine girin.

4.  README.md` dosyanızı oluşturun ve mevcut projenin ne olduğunu ve tamamladığınızda hangi becerileri göstermiş olacağınızı açıklayan kısa bir giriş yazın. (Bunu projenin sonunda bir öz değerlendirme olarak da yapabilirsiniz, bu da öğrendiklerinizi gözden geçirmek için iyi bir yoldur).

Eğer sorun yaşıyorsanız:

-   Tüm Git komutlarının proje klasörünüzün içinden çalıştırılması gerekir (`odin-recipes` klasörüne `cd` yazmayı unuttunuz mu?).

-   SSH ile GitHub'dan klonlamak için [gerekli](/paths/foundations/courses/foundations/lessons/setting-up-git#step-2-configure-git-and-github) adımları izlediğinizden emin olun.


-   Git Temelleri Dersindeki [adımlara](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/git-basics) bakın.



#### Ne zaman commit atılacağına dair ipuçları


[Önceki derste](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/commit-messages) commit mesajları hakkında konuştuklarımızı unutmayın!


Projenizi oluştururken, `git push origin main` ile GitHub'a göndermeye hazır olmadan önce muhtemelen birkaç `git add` + `git commit` döngüsü yapacaksınız.

Kod yazarken, erken ve sık sık commit yapmak en iyi uygulama olarak kabul edilir. Kodda anlamlı bir değişiklik yaptığınız her seferde commit edin. Bu, ilerlemenizin bir zaman çizelgesini oluşturacak ve bitmiş kodunuzun bir anda ortaya çıkmadığını gösterecektir.

`git push origin main` komutunu girdikten sonra tarayıcınıza geçin ve GitHub'daki reponuzu açın. Şimdi commitlediğiniz tüm dosyaları görebiliyor olmalısınız.


Tamam, şimdilik bu kadar Git yeter, gerçekten bir şeyler inşa etme zamanı!

### Görevlendirme

<div class="lesson-content__panel" markdown="1">

#### Tekrar 1: Başlangıç yapısı

1.  `odin-recipes` dizini içinde bir `index.html` dosyası oluşturun.
2.  Her zamanki şablon HTML ile doldurun ve gövdeye `Odin Tarifleri` başlıklı bir `h1` ekleyin.

#### Tekrar 2: Tarif sayfası

1.  `odin-recipes` dizini içinde yeni bir dizin oluşturun ve adını `recipes` koyun.

2.  `Tarifler` dizini içinde yeni bir HTML dosyası oluşturun ve içereceği tarifin adını verin. Örneğin `tavuk.html`. En sevdiğiniz yemeğin adını kullanabilir veya biraz ilhama ihtiyacınız varsa [Kullanmak için bir tarif bulun](https://www.allrecipes.com/).

3.  Şimdilik, içeriği tarifin adı olan bir `h1` başlığı ekleyin.
4.  `index.html` dosyasına geri dönün, yeni oluşturduğunuz tarif sayfasına bir bağlantı ekleyin. Örneğin: `<h1>Yemek Tarifleri</h1>` başlığı altında bağlantıyı şu şekilde yazın: `<a href="recipes/recipename.html">Tarif Başlığı</a>`. Bağlantının metni yine tarifin adı olmalıdır.

#### Tekrar 3:  Tarif sayfası içeriği

Yeni tarif sayfanız aşağıdaki içeriğe sahip olmalıdır:

1. Daha önce eklediğiniz h1 başlığı altında bitmiş yemeğin bir görüntüsü. Yemeğin görsellerini Google'da veya daha önce bağlantısını verdiğimiz [Tarif Sitesi](https://www.allrecipes.com/)'nde bulabilirsiniz.

2.  Görselin altında uygun büyüklükte bir `Açıklama` başlığı ve ardından tarifi anlatan bir veya iki paragraf bulunmalıdır.

3.  Açıklamanın altına bir `Malzemeler` başlığı ve ardından tarif için gereken malzemelerin **sırasız bir listesini** ekleyin.

4.  Son olarak, malzeme listesinin altına bir "Adımlar" başlığı ve ardından yemeği yapmak için gereken adımların **sıralı bir listesini** ekleyin.

#### Tekrar 4: Daha fazla tarif

1. Önceden oluşturduğunuz tarif sayfasına aynı sayfa yapısına sahip iki tarif daha ekleyin.
2. Dizin sayfasındaki yeni tariflere bağlantı vermeyi unutmayın. Ayrıca, tüm bağlantıları sırasız bir listeye koymayı düşünün, böylece hepsi tek bir satırda olmaz. 

Örnek:

```html 
 <ul>
    <li><a href="recipes/yourrecipe.html">Tarif Adı 1</a></li>
    <li><a href="recipes/yourrecipe.html">Tarif Adı 2</a></li>
    <li><a href="recipes/yourrecipe.html">Tarif Adı 3</a></li>
  </ul>
```
  
Bağlantılarınız gösterişli olmayacaktır, ancak şimdilik sadece onları oluşturmaya odaklanın.
</div>

### Projenizi web üzerinde görüntüleme

Çalışmanızı (projenizi) başkalarına göstermek veya aşağıda bir çözüm sunmak istiyorsanız, sitenizi yayınlamanız gerekir. Böylece başkaları yalnızca yerel makinenizden değil, web'den erişebilir. İyi haber şu ki, projeniz GitHub'daysa (yukarıda açıklandığı gibi), bunu yapmak inanılmaz derecede basittir.

GitHub, web projelerini doğrudan bir GitHub reposundan yayınlamanıza olanak tanır. Bunu yapmak, projenize `your-github-username.github.io/your-github-repo-name` adresinden erişmenizi sağlayacaktır.


<div class="lesson-note">
   Özel bir repo yayınlamak için GitHub ücretli hesabı gereklidir.

</div>

Bunu yapmanın birkaç yolu vardır, ancak en basit olanı şudur:

-   Projenizin ana HTML dosyasının `index.html` olarak adlandırıldığından emin olun. Eğer değilse, yeniden adlandırmanız gerekecektir.
-   Web üzerinden GitHub reponuza gidin ve aşağıdaki ekran görüntüsünde gösterildiği gibi **Settings** düğmesine tıklayın.

    ![Örnek bir repoda bulunan Ayarlara işaret eden ekran görüntüsü](https://cdn.statically.io/gh/TheOdinProject/curriculum/90b1a362af0bb8635af9593cd8911c9aefb68569/foundations/html_css/html-foundations/imgs/01.png)

-   Sol taraftaki çubukta **Sayfalar** üzerine tıklayın.
-  **Branch'i** _none_ yerine _main branch_ olarak değiştirin ve **Save** düğmesine tıklayın.
-   Birkaç dakika sürebilir (GitHub web sitesi 10 dakikaya kadar diyor, ancak bir saate kadar sürdüğünü gördük. Projenize bir "tema" eklemeyin, aksi takdirde git çakışmaları yaşayabilirsiniz, bunun yerine sabırlı olun). ancak projenize web üzerinden `your-github-username.github.io/your-github-repo-name` adresinden erişilebilmelidir (tabii ki bağlantıda kendi bilgilerinizi değiştirerek).
-   Projeniz 1 saat sonra yayınlanmazsa, reponuzun `main` dizininde `index.html` adlı bir dosyanız olduğundan ve tüm ayarların doğru yapıldığından emin olun. GitHub'daki reponuza gidin ve Actions'a tıklayın, herhangi bir giriş yoksa ayarlara geri dönün, **Branch** öğesini _main_ yerine _none_ olarak değiştirin ve **Kaydet** öğesine tıklayın, ardından **Branch** öğesini _none_ yerine _main_ olarak değiştirin ve **Kaydet** öğesine tıklayın.


<div class="lesson-note" markdown="1">
Aşağıdaki proje başvurularına baktığınızda şunu soruyor olabilirsiniz:
"Neden bu kadar iyi görünüyorlar, benim projem de böyle mi görünmeli?".

İşte cevap:

1. Bu kadar iyi görünmelerinin ana nedeni, yeni başlayanlar tarafından yapılmamış olmalarıdır. Muhtemelen programlama konusunda biraz deneyimi olan veya daha önce Odin Projesini tamamlamış ve daha iyi web siteleri yapmak için geri dönen kişiler tarafından gönderilmişlerdir.

1. Projeniz böyle görünmemelidir. Esas olarak projenin gereksinimlerine odaklanın.

Bu durum gelecekteki projeler için de geçerlidir.
Daha fazla bilgi için [Becoming a TOP Success Story](https://dev.to/theodinproject/becoming-a-top-success-story-mindset-3dp2) isimli yazının [Part 5](https://dev.to/theodinproject/learning-code-f56)'ini okuyun. 

</div>

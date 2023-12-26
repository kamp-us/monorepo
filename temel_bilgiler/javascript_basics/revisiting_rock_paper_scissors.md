---
title: 'Taş Kağıt Makas Projesine Geri Dönüş'
---

### Giriş

Şimdi DOM'u manipüle edebildiğimize göre, [Taş Kağıt Makas](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors) oyununu tekrar gözden geçirme ve basit bir kullanıcı arayüzü ekleme zamanı geldi.

Taş Kağıt Makas projenizde değişiklik yapmaya başlamadan önce, mevcut çalışmanızı bozmadan değişiklikler yapabilmeniz için Git'te bir kavram olan **dallanma** (branching) hakkında bilgi edinmeniz gerekli.

Git'teki dallar, depo dosyalarınızın birden çok *alternatif gerçeklik* sürümünü aynı anda tutmasına olanak sağlar. Aslında (bir nevi) ilk commitinizi yaptığınızdan beri dalları kullanıyorsunuz, sadece bunu bilmiyor olabilirsiniz! [Git kurulumu](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/setting-up-git) dersinde `git config --global init.defaultBranch main` komutunu çalıştırdığınızda, repolarınız için *varsayılan* dal olarak adlandırılan dalın adını ayarlamıştınız. Varsayılan dal, bir projede ilk commiti yaptığınızda oluşturulan daldır ve bu komutta dal adını, mevcut standartta olduğu gibi, `main` olarak ayarlarız.

Bir ağacın dalları gibi (adı buradan gelir), bir projenin tüm dalları da bir "gövdeden" (`main` dal) veya *diğer* dallardan çıkar.

Belirli bir dalda commit yaptığınızda, değişiklikler yalnızca **bu** dalda var olur ve diğer tüm dalları, onlardan ayrıldığınızdaki haliyle bırakır.

Bu, `main` dalınızı yalnızca düzgün çalıştığını bildiğiniz bitmiş özellikler için tutabileceğiniz ve her özelliği, *özellik (feature) dalları* olarak adlandırdığımız dalları kullanarak projenize ekleyebileceğiniz anlamına gelir.

### Dalları kullanma

`git branch <branch_name>` komutunu kullanarak yeni dallar oluşturabilirsiniz. Daha sonra `git checkout <branch_name>` komutunu kullanarak yeni dala geçiş yapabilirsiniz. Ayrıca `git checkout -b <branch_name>` şeklinde, `checkout` ile birlikte `-b` etiketini kullanarak, tek bir komutla yeni bir dal oluşturup bu dala geçebilirsiniz.

Başka hiçbir argüman olmadan `git branch` kullanarak mevcut tüm dallarınızı görebilirsiniz. Şu anda üzerinde bulunduğunuz dal bir yıldız işareti (*) ile gösterilecektir. Başka bir daldan `main` dalına geri dönmek isterseniz, `git checkout main` komutunu kullanarak başka bir dala geçer gibi geçebilirsiniz.

Özellik dalınız üzerinde çalışmayı tamamladığınızda ve bu dalda yaptığınız commitleri ana (main) dalınıza taşımaya hazır olduğunuzda, `birleştirme (merge)` olarak bilinen işlemi gerçekleştirmeniz gerekecektir.

Birleştirmeler `git merge <branch_name>` komutu kullanılarak yapılır, bu komut `branch_name`'de yaptığınız commitleri alır ve o anda üzerinde bulunduğunuz dala ekler. Aşağıdaki diyagramda bir `develop` dalının oluşturulduğu, commit edildiği ve ardından `main` ile birleştirildiği bir örnek görebilirsiniz.

<pre class="mermaid">
---
title: Example of Git Branching
---
gitGraph
   commit id: "commit1"
   commit id: "commit2"
   branch develop
   checkout develop
   commit id: "commit1a"
   commit id: "commit2a"
   checkout main
   merge develop id: "merge to main"
</pre>

Bazen bir dosyadaki aynı satırlar iki farklı dal tarafından değiştirilmiş olabilir. Bu durumda, bu dalları birleştirmeye çalıştığınızda bir birleştirme çakışması (merge conflict) yaşarsınız. Dalları birleştirmek için önce çakışmayı çözmeniz gerekecektir, bu da gelecek bir derste ele alınacaktır.

Bir dala artık ihtiyacınız olmadığında, eğer dal `main` ile birleştirildiyse `git branch -d <branch_name>` kullanılarak, birleştirilmediyse `git branch -D <branch_name>` kullanılarak silinebilir. Dallarla işiniz bittiğinde onları genellikle silmek istersiniz, aksi takdirde dallar birikerek ihtiyaç duyduğunuzda aradığınız dalı bulmanızı zorlaştırabilir.

### Kod paylaşımı

Dalların kullanımı için bir başka durum da, ana dalınıza (veya özellik dalınıza) hiç commitlemek istemediginiz kodu başkalarıyla paylaşmaktır.

Örneğin: üzerinde çalıştığınız yeni bir özellikte çözemediğiniz bir hata varsa ve kodunuzun bozulmasına neden oluyorsa, bu bozuk kodu commitleyip projenizin "kalıcı kaydında" olmasını istemezsiniz. Bunun yerine yeni bir geçici dal oluşturabilir, ona geçebilir ve kodunuzu bu yeni dala commitleyebilirsiniz. Daha sonra bu yeni geçici dalı GitHub'a gönderirseniz, sorununuzu çözmenize yardımcı olabilecek diğer kişilerle paylaşabilirsiniz. Aşağıdaki ödevde yeni dallar oluşturma konusunda bazı uygulamalı pratikler yapacaksınız.

### Ödev

<div class="lesson-content__panel" markdown="1">

1. Önceki Taş Kağıt Makas deponuzda yeni bir dal oluşturun
    1. Taş Kağıt Makas oyunumuz için bir kullanıcı arayüzü yapacağımızdan, yeni bir dal oluşturun ve `git checkout -b rps-ui` komutuyla bu dala geçin.
    2. Artık yerel olarak `rps-ui` dalında çalışıyorsunuz. Ancak, bu dal henüz uzak deponuzda mevcut değil. Github repo sayfanıza giderseniz, sadece 1 dalınız olduğunu ve onun da `main` olduğunu göreceksiniz. Bu yeni dalı `git push origin rps-ui` komutu ile uzak deponuza gönderin. Şimdi, GitHub deponuzda iki dal göreceksiniz! Aşağıdaki ekran görüntüsünde gösterilen açılır menüyü kullanarak GitHub'daki yeni dalı seçebilirsiniz.

         ![Github'da dalların bulunduğu açılır menü](https://cdn.statically.io/gh/TheOdinProject/curriculum/46c18d8445051e016b1e415fe0227a0fa33cc825/foundations/javascript_basics/revisiting_rock_paper_scissors/imgs/00.png)

    1. `rps-ui` dalında olduğunuzdan emin olun. Bunu `git branch` komutu ile kontrol edebilirsiniz. Bulunduğunuz dalın yanında bir yıldız işareti (\*) olacaktır. Eğer herhangi bir nedenle başka bir dalda iseniz, `git checkout rps-ui` komutu ile `rps-ui` dalına geçin. Artık yeni özelliğiniz üzerinde çalışmaya hazırsınız! Not: Tıpkı ana dalda yaptığınız gibi dosya ekleyebilir, bu dala commitleyebilir ve değişiklikleri deponuza gönderebilirsiniz. Değişiklikleri yeni dalımıza gönderdiğimiz için; `git push origin main` yerine `git push origin rps-ui` kullanmanız dışında her şey aynı olacaktır.
1. Kullanıcı arayüzümüzde, oyuncu cevaplarını yazmak yerine düğmelere tıklayarak oyunu oynayabilmelidir.
    1. Şimdilik, tam olarak beş tur oynanacak mantığından uzaklaşın.
    1. Her seçim için bir tane olmak üzere üç düğme oluşturun. Düğmeye her tıklandığında `playRound` fonksiyonunu doğru `playerSelection` ile çağıran bir olay dinleyicisi ekleyin (bu adım için `console.log`u kullanabilirsiniz)
    1. Sonuçları görüntülemek için bir `div` ekleyin ve tüm `console.log`larınızı DOM yöntemlerine dönüştürün.
    1. Devam eden skoru görüntüleyin ve bir oyuncu 5 puana ulaştığında oyunun galibini ilan edin.
    1. Bunun için orijinal kodunuzu yeniden düzenlemeniz (yeniden çalışmanız/yeniden yazmanız) gerekecektir. Sorun değil! Eski kodda yeniden çalışmak bir programcının hayatının önemli bir parçasıdır.
1. Kullanıcı arayüzünüzü tamamladıktan ve her şeyin yolunda olduğundan emin olduktan sonra, tüm değişikliklerinizin `git status` ile `rps-ui` dalına commitlendiğinden emin olun.
1. Şimdi `rps-ui` dalımızdaki değişiklikleri `main` dalımızla nasıl birleştirebileceğimize bir göz atalım.
    1. Birleştirmek istediğimiz dala, yani `main` dalına `git checkout main` komutu ile geçiş yapın.
    1. Şimdi `rps-ui` dalımızı `git merge rps-ui` ile mevcut dalımız olan `main` ile birleştirelim.
    1. Her şey yolunda gittiyse, `rps-ui` dalımız artık main ile başarıyla birleştirildi! `git log` komutunu kullanarak ana dalda yaptığınız değişiklikler dışında özellik (feature)  dalında yaptığınız tüm değişiklikleri görebileceksiniz. Şimdi son adımımız için!
    1. Şimdi `git push origin main` komutunu çalıştırarak `main` dalımızı uzak depomuzla birleştirelim. GitHub reponuza gidin ve `main` dalının `rps-ui` dalında yaptığı tüm değişiklikleri ve commitleri içerdiğini göreceksiniz. Tebrikler! İlk özelliğinizi üretim dalınıza başarıyla gönderdiniz!
    1. Şimdi tüm kodumuz ana dalda olduğuna göre, artık `rps-ui` dalına gerçekten ihtiyacımız yok. Hem yerel hem de uzak depoda biraz temizlik yapalım. Dalı yerel depomuzdan `git branch -d rps-ui` ile silin ve ayrıca GitHub'daki uzak depodan `git push origin --delete rps-ui` ile silin. Tebrikler, temizliği tamamladık!
1. Projeyi GitHub Pages'da yayınladığınızdan ve [proje dersi](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors) bölümüne canlı önizleme bağlantısı eklediğinizden emin olun.

</div>

### Ek kaynaklar

Bu bölüm, ilgili içeriğe yararlı bağlantılar içerir. Zorunlu değildir, tamamlayıcı olarak düşünün.
- Andrew Peterson tarafından hazırlanan [interactive **Visual Git Cheatsheet**](https://ndpsoftware.com/git-cheatsheet.html#loc=index;) ile bu derste işlenen Git iş akışlarını aktif olarak öğrenin. Kullanacağınız çeşitli komutlara **aşina olmamanızda sorun yok**. Bunları müfredatın ilerleyen bölümlerinde öğreneceksiniz.
- `git push -u origin <branch>` komutu ile yerel commitlerinizi uzak dallara göndermeyi **daha kolay** hale getirin. Gönderdiğiniz yerel dalı otomatik olarak uzaktaki dalla ilişkilendirir. Talha Ashar'ın [educative.io makalesini okuyun](https://www.educative.io/edpresso/what-is-the-git-push--u-remote-branch-name-command) ve basit bir `git push` komutuyla uzak bir dala daha hızlı commit yapın.
- Peter Cottle tarafından hazırlanan bu [interaktif görselleştiriciyi](https://learngitbranching.js.org/) inceleyerek Git Dallanmasını öğrenin. Yazdığınız komutların görsel olarak sunulan ağaç dalınızı nasıl etkilediğini görürken dallanma ile ilgili önemli komutları öğrenebilirsiniz.

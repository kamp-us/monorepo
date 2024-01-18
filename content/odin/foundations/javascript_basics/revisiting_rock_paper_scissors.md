---
title: 'Taş Kağıt Makas Projesine Geri Dönüş'
---

### Giriş

Şimdi DOM'u manipüle edebildiğimize göre, [Taş Kağıt Makas](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors) oyununu tekrar gözden geçirme ve basit bir kullanıcı arayüzü ekleme zamanı geldi.

Taş Kağıt Makas projenizde değişiklik yapmaya başlamadan önce, mevcut çalışmanızı bozmadan değişiklikler yapabilmeniz için Git'te bir kavram olan **branching** hakkında bilgi edinmeniz gerekli.

Git'teki branch'ler, repo dosyalarınızın birden çok *alternatif gerçeklik* sürümünü aynı anda tutmasına olanak sağlar. Aslında (bir nevi) ilk commitinizi yaptığınızdan beri branch'leri kullanıyorsunuz, sadece bunu bilmiyor olabilirsiniz! [Git kurulumu](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/setting-up-git) dersinde `git config --global init.defaultBranch main` komutunu çalıştırdığınızda, repolarınız için *varsayılan* branch olarak adlandırılan branch'in adını ayarlamıştınız. Varsayılan branch, bir projede ilk commiti yaptığınızda oluşturulan branch'dir ve bu komutta branch adını, mevcut standartta olduğu gibi, `main` olarak ayarlarız.

Bir ağacın dalları(kelime anlamı buradan gelir) gibi, bir projenin tüm branch'leri de bir "gövdeden" (`main` branch) veya *diğer* branch'lerden çıkar.

Belirli bir branch'de commit yaptığınızda, değişiklikler yalnızca **bu** branch'de var olur ve diğer tüm branch'leri, onlardan ayrıldığınızdaki haliyle bırakır.

Bu, `main` branch'inizi yalnızca düzgün çalıştığını bildiğiniz bitmiş özellikler için bir yer olarak tutabileceğiniz ve her yeni özelliği *özellik branch'leri* olarak adlandırdığımız özel branch`leri kullanarak projenize ekleyebileceğiniz anlamına gelir.

### Branch'leri kullanmak

`git branch <branch_name>` komutunu kullanarak yeni branch oluşturabilirsiniz. Daha sonra `git checkout <branch_name>` komutunu kullanarak yeni branch'e geçiş yapabilirsiniz. Ayrıca `git checkout -b <branch_name>` şeklinde, `checkout` ile birlikte `-b` etiketini kullanarak, tek bir komutla yeni bir branch oluşturup bu branch'e geçebilirsiniz.

Başka hiçbir argüman olmadan `git branch` kullanarak mevcut tüm branch'lerinizi görebilirsiniz. Şu anda üzerinde bulunduğunuz branch bir yıldız işareti (*) ile gösterilecektir. Başka bir branch'den `main` branch'ine geri dönmek isterseniz, `git checkout main` komutunu kullanarak başka bir branch'e geçer gibi geçebilirsiniz.

Özellik branch'iniz üzerinde çalışmayı tamamladığınızda ve bu branch'de yaptığınız commitleri main branch'ine taşımaya hazır olduğunuzda, `merge(birleştirme)` olarak bilinen işlemi gerçekleştirmeniz gerekecektir.

Merge'ler `git merge <branch_name>` komutu kullanılarak yapılır, bu komut `branch_name`'de yaptığınız commitleri alır ve o anda üzerinde bulunduğunuz branch'e ekler. Aşağıdaki diyagramda bir `develop` branch'inin oluşturulduğu, commit edildiği ve ardından `main` ile merge'lendiği bir örnek görebilirsiniz.

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

Bazen bir dosyadaki aynı satırlar iki farklı branch tarafından değiştirilmiş olabilir. Bu durumda, bu branch'leri merge'lemeye çalıştığınızda bir merge conflict(çakışma) yaşarsınız. Branch'leri merge'lemek için önce çakışmayı çözmeniz gerekecektir, bu da gelecek bir derste ele alınacaktır.

Bir branch'e artık ihtiyacınız olmadığında, eğer branch `main` ile merge'lendiyse `git branch -d <branch_name>` kullanılarak, merge'lenmediyse `git branch -D <branch_name>` kullanılarak silinebilir. Branch'lerle işiniz bittiğinde onları genellikle silmek istersiniz, aksi takdirde branch'ler birikerek ihtiyaç duyduğunuzda aradığınız branch'i bulmanızı zorlaştırabilir.

### Kod paylaşımı

Branch'lerin kullanımı için bir başka durum da, main branch'inize (veya özellik branch'inize) hiç commitlemek istemediginiz kodu başkalarıyla paylaşmaktır.

Örneğin: üzerinde çalıştığınız yeni bir özellikte çözemediğiniz bir hata varsa ve kodunuzun bozulmasına neden oluyorsa, bu bozuk kodu commitleyip projenizin "kalıcı kaydında" olmasını istemezsiniz. Bunun yerine yeni bir geçici branch oluşturabilir, ona geçebilir ve kodunuzu bu yeni branch'e commit'leyebilirsiniz. Daha sonra bu yeni geçici branch'i GitHub'a gönderirseniz, sorununuzu çözmenize yardımcı olabilecek diğer kişilerle paylaşabilirsiniz. Aşağıdaki ödevde yeni branch'ler oluşturma konusunda bazı uygulamalı pratikler yapacaksınız.

### Ödev

<div class="lesson-content__panel" markdown="1">

1. Önceki Taş Kağıt Makas reponuzda yeni bir branch oluşturun
    1. Taş Kağıt Makas oyunumuz için bir kullanıcı arayüzü yapacağımızdan, yeni bir branch oluşturun ve `git checkout -b rps-ui` komutuyla bu branch'e geçin.
    2. Artık yerel olarak `rps-ui` branch'inde çalışıyorsunuz. Ancak, bu branch henüz remote reponuzda mevcut değil. Github repo sayfanıza giderseniz, sadece 1 branch'iniz olduğunu ve onun da `main` olduğunu göreceksiniz. Bu yeni branch'i `git push origin rps-ui` komutu ile remote repo'nuza gönderin. Şimdi, GitHub repo'nuzda iki branch göreceksiniz! Aşağıdaki ekran görüntüsünde gösterilen açılır menüyü kullanarak GitHub'daki yeni branch'i seçebilirsiniz.

         ![Github'da branch'lerin bulunduğu açılır menü](https://cdn.statically.io/gh/TheOdinProject/curriculum/46c18d8445051e016b1e415fe0227a0fa33cc825/foundations/javascript_basics/revisiting_rock_paper_scissors/imgs/00.png)

    1. `rps-ui` branch'inde olduğunuzdan emin olun. Bunu `git branch` komutu ile kontrol edebilirsiniz. Bulunduğunuz branch'in yanında bir yıldız işareti (\*) olacaktır. Eğer herhangi bir nedenle başka bir branch'de iseniz, `git checkout rps-ui` komutu ile `rps-ui` branch'ine geçin. Artık yeni özelliğiniz üzerinde çalışmaya hazırsınız! Not: Tıpkı ana branch'de yaptığınız gibi dosya ekleyebilir, bu branch'e commitleyebilir ve değişiklikleri reponuza gönderebilirsiniz. Değişiklikleri yeni branch'e gönderdiğimiz için; `git push origin main` yerine `git push origin rps-ui` kullanmanız dışında her şey aynı olacaktır.
1. Kullanıcı arayüzümüzde, oyuncu cevaplarını yazmak yerine düğmelere tıklayarak oyunu oynayabilmelidir.
    1. Şimdilik, tam olarak beş tur oynanacak mantığından uzaklaşın.
    1. Her seçim için bir tane olmak üzere üç düğme oluşturun. Düğmeye her tıklandığında `playRound` fonksiyonunu doğru `playerSelection` ile çağıran bir olay dinleyicisi ekleyin (bu adım için `console.log`u kullanabilirsiniz)
    1. Sonuçları görüntülemek için bir `div` ekleyin ve tüm `console.log`larınızı DOM yöntemlerine dönüştürün.
    1. Devam eden skoru görüntüleyin ve bir oyuncu 5 puana ulaştığında oyunun galibini ilan edin.
    1. Bunun için orijinal kodunuzu yeniden düzenlemeniz (yeniden çalışmanız/yeniden yazmanız) gerekecektir. Sorun değil! Eski kodda yeniden çalışmak bir programcının hayatının önemli bir parçasıdır.
1. Kullanıcı arayüzünüzü tamamladıktan ve her şeyin yolunda olduğundan emin olduktan sonra, tüm değişikliklerinizin `git status` ile `rps-ui` branch'ine commitlendiğinden emin olun.
1. Şimdi `rps-ui` branch'indeki değişiklikleri `main` branch'imizle nasıl merge'leyeceğimize bir göz atalım.
    1. Merge'lemek istediğimiz branch'e, yani `main` branch'ine `git checkout main` komutu ile geçiş yapın.
    1. Şimdi `rps-ui` branch'imize `git merge rps-ui` ile mevcut branch'imiz olan `main` ile merge'leyelim.
    1. Her şey yolunda gittiyse, `rps-ui` branch'imiz artık main ile başarıyla merge'lendi(birleştirildi) `git log` komutunu kullanarak main branch'de yaptığınız değişiklikler dışında özellik branch'inde yaptığınız tüm değişiklikleri görebileceksiniz. Şimdi son adımımız için!
    1. Şimdi `git push origin main` komutunu çalıştırarak `main` branch'imizi remote repomuzla birleştirelim. GitHub reponuza gidin ve `main` branch'inin `rps-ui` branch'inde yaptığı tüm değişiklikleri ve commitleri içerdiğini göreceksiniz. Tebrikler! İlk özelliğinizi üretim branch'ine başarıyla gönderdiniz!
    1. Şimdi tüm kodumuz main branch'de olduğuna göre, artık `rps-ui` branch'ine gerçekten ihtiyacımız yok. Hem yerel hem de remote repoda biraz temizlik yapalım. Branch'i yerel repomuzdan `git branch -d rps-ui` ile silin ve ayrıca GitHub'daki remote repodan `git push origin --delete rps-ui` ile silin. Tebrikler, temizliği tamamladık!
1. Projeyi GitHub Pages'da yayınladığınızdan ve [proje dersi](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors) bölümüne canlı önizleme bağlantısı eklediğinizden emin olun.

</div>

### Ek kaynaklar

Bu bölüm, ilgili içeriğe yararlı bağlantılar içerir. Zorunlu değildir, tamamlayıcı olarak düşünün.

- Andrew Peterson tarafından hazırlanan [interactive **Visual Git Cheatsheet**](https://ndpsoftware.com/git-cheatsheet.html#loc=index;) ile bu ingilizce derste işlenen Git iş akışlarını aktif olarak öğrenin. Kullanacağınız çeşitli komutlara **aşina olmamanızda sorun yok**. Bunları müfredatın ilerleyen bölümlerinde öğreneceksiniz.
- `git push -u origin <branch>` komutu ile yerel commitlerinizi remote branch'lere göndermeyi **daha kolay** hale getirin. Gönderdiğiniz yerel branch'i otomatik olarak remote'taki branch'le ilişkilendirir. Talha Ashar'ın [educative.io ingilizce makalesini okuyun](https://www.educative.io/edpresso/what-is-the-git-push--u-remote-branch-name-command) ve basit bir `git push` komutuyla remote bir branch'e daha hızlı commit yapın.
- Peter Cottle tarafından hazırlanan bu ingilizce [interaktif görselleştiriciyi](https://learngitbranching.js.org/) inceleyerek Git branch'lenmesini öğrenin. Yazdığınız komutların görsel olarak sunulan branch ağacınızı nasıl etkilediğini görürken, branch'lenme ile ilgili önemli komutları öğrenebilirsiniz.

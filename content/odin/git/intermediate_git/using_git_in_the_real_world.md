### Giriş

Git temelleri çok basittir ancak kendinizi kafa karıştırıcı bir hata durumunun yanlış tarafında bulduğunuzda bazen dipsiz bir kuyuda gibi hissedersiniz. Bu durum çok sinir bozucudur çünkü yanlış bir çözüm denediğinizde ya da hata yaptığınızda veri kaybedebileceğinizi düşünüyorsunuz. Aslında Git ile veri "kaybetmek" çok zordur ancak deneyimli bir geliştirici etrafı kurcalamadan bakmayı düşünmeyeceğiniz bir yerde saklanıyor olabilir.

Git ile ilgili olan şey şu ki, ciddi anlamda etkileyici bir hafızanız yoksa bunu önceden okuyarak öğrenemezsiniz... yaparak öğrenmeniz gerekir. Geri dönüp düzeltmek istediğiniz bir sorun bulun, birleştirme işleminizde bir hataya rastlayın vb. ve Google'da aratın, bu süreçte yeni bir Git taktiği öğrenin.

Size yardımcı olması için, başınız sıkıştığında geri dönün ve bu derse tekrar bakın. İlk olarak bu projede kullanılan GitHub iş akışının gerçek dünyadaki bir örneğini ele alacağız. Aşağıdaki Ek Kaynaklar bölümü de daha sonra ihtiyaç duyduğunuzda kullanabileceğiniz yüksek kaliteli kaynakları bulmanıza yardımcı olacaktır.

### Derse genel bakış

Bu bölüm, bu derste öğreneceğiniz konuların genel bir özetini içerir.

- Açık kaynak katkıları yapmak için Git'i kullanmak.

### Açık kaynak katkısı için bir Git iş akışı

Diyelim ki [müfredat içeriğimizi barındıran repo](https://github.com/TheOdinProject/curriculum/)'ya katkıda bulunmak istiyorsunuz

Repo'ya yazma erişiminiz olmadığında nasıl katkıda bulunursunuz? Aşağıda, bu web sitesine katkıda bulunanlar tarafından kullanılan üretime hazır bir iş akışı yer almaktadır. Burada bir repomuzdaki [açık sorun](https://github.com/TheOdinProject/curriculum/issues) hakkında yorum yaptığınızı ve bu sorunun size atandığını varsayacağız. Size atanmış bir sorun yoksa, yine de bazı rastgele güncellemelerle takip edebilirsiniz, sadece **pull request'inizi (çekme talebinizi) gönderme** bölümündeki 3. adımdan önce durun, çünkü değişiklikleriniz geçerli değildir.

Bu senaryodaki kilit noktalar `upstream (yukarı akış)` (orijinal GitHub reposu), `origin` (bu reponun sizdeki fork'u (çatalı)) ve "local" reposu (sizin `origin`inizin yerel klonu) olacaktır. Bunu mutlu bir üçgen olarak düşünün... ancak "yerel" `upstream`den sadece çekebilir, `upstream`'e pushlayamaz (itemez).

#### İlk kurulum

1. Proje için [katkı sağlama kılavuzu](https://github.com/TheOdinProject/.github/blob/main/CONTRIBUTING.md)'nu okuyun.
2. Müfredat reposuna gidin ve GitHub'daki repo sayfasının üst kısmındaki "fork" düğmesini kullanarak orijinal ("upstream") repoyu kendi GitHub hesabınıza forklayın.
3. Fork'lanmış reponuzu `git clone git@github.com:your_user_name_here/curriculum.git` gibi bir şey kullanarak yerel makinenize klonlayın (url'yi GitHub'daki repo sayfasının sağındaki kenar çubuğundaki küçük widget'tan alabilirsiniz).
4. Repoyu klonladığınız için, GitHub'daki fork'unuz olan `origin`'i işaret eden bir remote'a zaten sahipsiniz. Değişiklikleri GitHub'a geri göndermek için bunu kullanacaksınız. Ayrıca, `upstream` olarak adlandıracağımız GitHub'daki orijinal repodan başka bir uzak olarak ayarlayarak doğrudan çekebilmek isteyeceksiniz. Bunu `curriculum` proje klasörü içinde aşağıdaki git komutunu kullanarak yapın:

```
git remote add upstream git@github.com:TheOdinProject/curriculum.git
```

#### Devam eden iş akışı

Bir ana dalımız var -- `main`. `main` üretime hazır kod içindir. `main` dalına gönderilen tüm kodlar (orijinal repoda, sizin fork'unuzda değil) hazırlama aşamasında test edilecek ve üretime gönderilecektir. Bir özellik dalında çalışacak ve çekme isteklerinizi `main` dalına göndereceksiniz.

1. Oluşturmak istediğiniz özellik için yeni bir özellik dalı oluşturun ve Taş Kağıt Makas dersimizin [dallara ayırma bölümünde](https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors#using-branches) öğrendiğiniz uygulamaların aynısını izleyerek commit'ler (taahhütler) ekleyin.
2. Özelliğinizi tamamladığınızda, büyük olasılıkla birileri bu arada upstream reposunda değişiklikler yapmıştır. Bu da `main` dalınızın muhtemelen güncel olmadığı anlamına gelir. En güncel kopyayı `git fetch upstream` kullanarak getirin.
3. Şimdi `git merge` kullanarak upstream değişikliklerini yerel "main" sürümünüzle birleştirin. Özellikle, önce `git checkout main` kullanarak `main` dalınızda olduğunuzdan emin olmak ve ardından az önce getirdiğimiz upstream değişikliklerini birleştirmek için `git merge upstream/main` kullanmak isteyeceksiniz.
4. Bir `git fetch upstream` ardından bir `git merge upstream/some_branch` yapmanın bir `git pull upstream some_branch` yapmakla TAMAMEN aynı şey olduğunu unutmayın. Adımlar boyunca açıkça yürüyebilmek için burada bölmeyi tercih ediyoruz.
5. Artık `main` dalınız upstream ile güncel olduğuna göre onu özellik dalınızla birleştirmeniz gerekir. Evet, bu doğru ve ilk başta garip görünüyor. Bunun yerine özellik dalını `ana` dal ile birleştirmek istemez misiniz? Evet, istiyorsunuz, _ama henüz değil_. **Özellik dalınız kirli.** Ortaya çıkabilecek herhangi bir çakışma olup olmadığını bilmiyorsunuz. Daha "kıdemli" dallarda birleştirme yaptığınız zaman (örneğin, özelliği `ana` dalla birleştirmek), mümkünse temiz ve çakışmasız bir birleştirme olmasını istersiniz. Bu nedenle, bu çakışmaları çözmek için önce "kıdemli" dalı kirli dalınızla birleştirirsiniz. Özellik dalınıza geri dönmek için `git checkout your_feature_name` komutunu çalıştırın, ardından `main` ile birleştirmek için `git merge main` komutunu çalıştırın.
6. Birleştirme çakışmalarınız olabilir... [Git'e Derinlemesine Bakış dersinde](https://www.theodinproject.com/lessons/ruby-a-deeper-look-at-git) öğrendiğiniz becerileri kullanarak bunları çözün! ([JS Kurs Bağlantısı](https://www.theodinproject.com/lessons/javascript-a-deeper-look-at-git))

#### Sending your pull request

1. Artık özellik dalınız tertemiz olduğuna ve `main` ile temiz bir şekilde birleşeceğini bildiğinize göre, zor kısım tamamen bitti. Geriye kalan tek şey, GitHub'daki `upstream` repomuza karşı pull request (genellikle PR olarak kısaltılır) yapmak!
2. Şimdi özellik dalınızı `origin`inize (`upstream` reposunun forkuna) geri göndermek istiyorsunuz. Erişiminiz olmadığı için doğrudan `upstream`e gönderemezsiniz, bu nedenle bir pull request yapmanız gerekir. Özellik dalınızı GitHub'daki fork'unuza göndermek için `git push origin your_feature_name` komutunu kullanın.
3. Bu iş akışına aşina olmak için yukarıdaki adımları takip ediyorsanız, **bu noktada durmalısınız**. Atanmış bir sorunu tamamladıysanız son adım, özellik dalınızı orijinal `upstream` reposunun `main` dalıyla birleştirmek için bir pull request göndermektir. Bu, GitHub'ın arayüzü kullanılarak yapılabilir.
4. Paranızı sallayın, siz artık açık kaynak kodlu bir yazılım destekçisisiniz!

### Bilgi ölçme

Bu bölüm, bu dersi kendi kendinize anlayıp anlamadığınızı kontrol etmeniz için sorular içermektedir. Bir soruyu yanıtlamakta zorlanıyorsanız, soruya tıklayın ve bağlantılı olduğu materyali gözden geçirin.

- <a class='knowledge-check-link' href='#initial-setup'>Fork'lanmış bir repoya işaret eden Git remote'a için tipik olarak hangi isim verilir? </a>
- <a class='knowledge-check-link' href='#sending-your-pull-request'>Değişikliklerinizi sahibi olmadığınız/yazma erişiminiz olmayan bir repoya doğrudan gönderebilir misiniz?</a>
- <a class='knowledge-check-link' href='#ongoing-workflow'>Özellik dalınızı ana dal ile birleştirmeden hemen önce ne yapmalısınız?</a>

### Ek kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

- Seth Robertson'dan [Git Best Practices](http://sethrobertson.github.io/GitBestPractices/)
- [Git Branching and Tagging Best Practices on SO](http://programmers.stackexchange.com/questions/165725/git-branching-and-tagging-best-practices)
- [Git Best Practices Workflow Guidelines](http://www.lullabot.com/blog/article/git-best-practices-workflow-guidelines)
- GitHub'ın [orijinal eğitim sayfası](https://training.github.com/)
- [Understand Git Conceptually](http://www.sbf5.com/~cduan/technical/git/)
- Peter Cottle'dan [Git Branching](http://pcottle.github.io/learnGitBranching/) hakkında interaktif branching eğitimini kullanarak bilgi edinin.
- Daha fazlasına mı ihtiyacınız var? Yeni başlayanlar için git eğitimlerinin [bu meta listesine](http://sixrevisions.com/resources/git-tutorials-beginners/) bakın.
- [Git Immersion](http://gitimmersion.com/lab_01.html) git'in kısayollarını öğrenmek için bir başka harika öğreticidir (Ruby yolunu takip ediyorsanız veya biraz Ruby öğrenmeye istekliyseniz).
- [Contributing to Open Source](https://youtu.be/mENDYhfxH-o) bu dersi gözden geçiren bir eğitim videosudur.

Git ile çalışırken bazen (tamam, belki de çoğu zaman) bir şeyler korkunç bir şekilde ters gider. Panik yapmayın! Git, yaşadığınız talihsizlikten kurtulmanıza yardımcı olmak için tasarlanmıştır. Bu kaynaklar, sürüm kontrolü nirvanasına doğru tekrar yola çıkmanıza yardımcı olacaktır:

- [Dangit, Git!?!] (https://dangitgit.com/) sizi yaygın Git sorunlarından kurtarmak için hızlı bir referanstır.
- Bu makale Git'in çeşitli hataları geri almak için sunduğu birçok seçenekten bazılarında size yol gösterecektir. [How to undo (almost) anything with Git](https://github.blog/2015-06-08-how-to-undo-almost-anything-with-git/)
- Karşılaştığınız sorun daha ileri düzeydeyse, spesifik sorunuzun yanıtını bulmak için [bu daha derinlemesine kılavuza] (https://sethrobertson.github.io/GitFixUm/fixup.html) göz atabilirsiniz.

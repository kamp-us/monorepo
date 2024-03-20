### Giriş

Git, ister sadece bir hobi sahibi olun ister profesyonel bir web geliştiricisi olmayı hedefleyin, sahip olunması gereken çok önemli bir beceridir. Bu, "kaydet" düğmesinin steroidler üzerinde olduğu ve sorunsuz işbirliği sağladığı anlamına gelir. Öğrenmeniz gereken çok fazla komut yoktur, ancak bazen Git'in asıl zorluğu neler olduğunu görselleştirmekten kaynaklanır.

Bu derste, çoğunlukla kullandığınız `git add` ve `git commit` ve `git push` komutlarından daha derinlere inerek görselleştirmeye yardımcı olacağız. Remotes, Pointers ve Git Geçmişini Değiştirme gibi konuları ele alacağız. Git'in altında gerçekte neler olduğunu anlamanızı derinleştirecek.

Müfredatta daha fazla ilerlemeden önce tüm bunlara bir göz atın **çok önemlidir**. Proje çalışmaları giderek daha karmaşık hale geliyor, bu nedenle artık düzenli bir Git iş akışı kullanmak isteğe bağlı değil. Umarım bu dersi tamamladıktan sonra Git geçmişinizi değiştirirken çok daha rahat olursunuz ve Git'i bir bütün olarak daha iyi anlarsınız.


### Derse genel bakış

Bu bölüm, bu derste öğreneceğiniz konulara genel bir bakış içermektedir.

* Geçmişi değiştiren Git komutları
* Tarihi değiştirmenin farklı yolları
* Geçmişi değiştirmek için uzaktan kumandaları kullanma
* Tarih değiştiren operasyonların tehlikeleri
* Tarih değiştiren operasyonların en iyi pratikleri
* İşaretçiler

### Tarihi değiştirmek

Diyelim ki iyi commit mesajları yazma konusunda rahatsınız ve iyi bir Git iş akışına sahip olmak için branch çalışıyorsunuz. Ancak kimse mükemmel değildir ve siz güzel bir kod yazarken bir şeyler ters gidebilir! Belki de çok erken commit yaptınız ve bir dosyayı kaçırdınız. Belki de commit mesajlarınızdan birini karıştırdınız ve hayati bir ayrıntıyı atladınız.

Yakın ve uzak tarihi ihtiyaçlarımıza uyacak şekilde değiştirmenin bazı yollarına bakalım. Nasıl yapılacağını ele alacağız:

- En son işlemimizi değiştirin
- Birden fazla commit mesajını değiştirme
- Commitleri yeniden sıralayın
- Commitleri birleştirin
- Commitleri ayırın

#### Kuruluma başlama

Derse başlamadan önce, kodu güvenle takip edebileceğimiz ve geçmiş değiştirme işlemlerini gerçekleştirebileceğimiz bir Git oyun alanı oluşturalım. GitHub'a gidin ve geçmişte yaptığınız gibi yeni bir depo oluşturun. İstediğiniz adı verin ve bu depoyu yerel sisteminize klonlayın. Şimdi klonladığımız depoya `cd` ile girelim ve bazı yeni dosyalar oluşturalım! Depoya girdikten sonra, aşağıdaki komutları takip edin (yazım hatası dahil). Olan biten herhangi bir şey hakkında kafanız karışırsa göz atabilirsiniz.

```bash
  $ touch test{1..4}.md
  $ git add test1.md && git commit -m 'Create first file'
  $ git add test2.md && git commit -m 'Create send file'
  $ git add test3.md && git commit -m 'Create third file and create fourth file'
```

#### Kod düzenleyiciyi ayarlama

Bazı Git komutlarını gerçekleştirmek için metin düzenleyicinin açılmasını gerektiren işlemler, örneğin git commit --amend ve git rebase -i, kod düzenleyicinizi doğru şekilde yapılandırmak önemlidir. Git, varsayılan olarak metin düzenleyiciyi komut satırı arayüzünde (CLI) açar, bu da değişiklik yaptıktan sonra düzenleyiciyi kaydetmenizi ve kapatmanızı engelleyebilir.

Kod düzenleyicinizi düzgün bir şekilde ayarlamak için Git Temelleri dersinde verilen talimatları takip edebilirsiniz. İşte süreci kapsayan özel bölüm: [Changing the Git Commit Message Editor adlı ingilizce makaleyi okuyun](https://www.theodinproject.com/lessons/foundations-git-basics#changing-the-git-commit-message-editor).

#### Son commit'in değiştirilmesi

Yaptığımız son işleme bakarsak *Uh-Oh!*, `git status` ve `git log` yazarsanız bir dosya eklemeyi unuttuğumuzu görebilirsiniz! Eksik dosyamızı ekleyelim ve `git commit --amend` komutunu çalıştıralım.

```bash
  $ git add test4.md
  $ git commit --amend
```

Burada olan şey, önce eksik dosyayı içerecek şekilde hazırlama alanını güncellememiz ve ardından eksik dosyayı içerecek şekilde son işlemimizi yenisiyle değiştirmemizdir. Eğer isteseydik, commit'in mesajını değiştirebilirdik ve bu da son commit'in mesajının üzerine yazılırdı.

Unutmayın **yapmanız gereken sadece herhangi bir yere gönderilmemiş commit'leri değiştirmektir!** Bunun nedeni `git commit --amend` komutunun son commit'i düzenlememesi, *o commit'i tamamen yeni bir commit ile değiştirmesidir*. Bu, diğer geliştiricilerin çalışmalarını dayandırdığı bir commit'i potansiyel olarak yok edebileceğiniz anlamına gelir. Tarihi yeniden yazarken her zaman bunu güvenli bir şekilde yaptığınızdan ve iş arkadaşlarınızın ne yaptığınızın farkında olduğundan emin olun.

#### Çoklu commit'leri değiştirme

Şimdi diyelim ki geçmişimizde değiştirmek istediğimiz daha eski commit'lerimiz var. İşte bu noktada güzel komut `git rebase` devreye giriyor! Bu dersin ilerleyen bölümlerinde `rebase`in karmaşıklıklarına daha derinlemesine değineceğiz, ancak şimdilik çok temel bir kullanımla başlayacağız.

`git rebase -i`, değiştirmeye çalıştığımız her commit'ten sonra etkileşimli olarak durmamızı ve ardından istediğimiz değişiklikleri yapmamızı sağlayan bir komuttur. Bu komuta düzenlemek istediğimiz son commit'in hangisi olduğunu söylememiz gerekiyor. Örneğin, `git rebase -i HEAD~2` son iki komutu düzenlememize izin verir. Bunun nasıl göründüğünü görelim, devam edin ve yazın:

```bash
  $ git log
  $ git rebase -i HEAD~2
```

Yeniden düzenleme sırasında, commit'lerin `git log` kullandığımızda gördüğümüzün tersi sırada listelendiğini fark etmelisiniz. 
İnteraktif aracın size sunduğu tüm seçenekleri incelemek için birkaç dakikanızı ayırın. Şimdi aracın üst kısmındaki commit mesajlarına bakalım. 
Eğer bu commit'lerden birini düzenlemek istersek, uygun commit için `pick` kelimesini `edit` olarak değiştireceğiz. Eğer bir commit'i kaldırmak istersek, onu listeden kaldırırız ve eğer sıralarını değiştirmek istersek, listedeki konumlarını değiştiririz.Bir düzenlemenin neye benzediğini görelim!

```bash
edit eacf39d Create send file
pick 92ad0af Create third file and create fourth file
```

Bu, `Gönderme dosyası oluştur` işlemindeki yazım hatasını `İkinci dosya oluştur` commit'i olacak şekilde düzenlememizi sağlayacaktır. Benzer değişiklikleri interaktif rebase aracınızda da yapın, ancak yukarıdaki kodu kopyalayıp yapıştırmayın çünkü çalışmayacaktır. Düzenleyiciyi kaydedin ve çıkın, bu da aşağıdaki talimatlarla commit'i düzenlememize olanak tanıyacaktır:

```bash
You can amend the commit now, with
       git commit --amend
Once you're satisfied with your changes, run
       git rebase --continue
```

Şimdi `git commit --amend` yazarak commit'imizi düzenleyelim, başlıktaki yazım hatasını düzeltelim ve ardından `git rebase --continue` yazarak rebase işlemini bitirelim. Hepsi bu kadar! Yaptığınız işe `git log` yazarak ve değişiklik geçmişini görerek bir göz atın. Basit gibi görünse de yanlış kullanıldığında çok tehlikeli bir araçtır, bu yüzden dikkatli olun. En önemlisi, unutmayın ki **paylaşılan bir depodaki taahhütleri yeniden düzenlemeniz gerekiyorsa, bunu iş arkadaşlarınızın farkında olduğu çok iyi bir nedenle yaptığınızdan emin olun.**


#### Commitlerin birleştirilmesi

 Commitleriniz için `squash` kullanmak, Git geçmişimizi düzenli tutmanın çok kullanışlı bir yoludur. Nasıl `squash` yapılacağını bilmek önemlidir, çünkü bu süreç bazı geliştirme ekiplerinde standart olabilir. birleştirme işlemi, başkalarının projenizin geçmişini anlamasını kolaylaştırır. Bir özellik birleştirildiğinde genellikle olan şey, bir özellik branch'inin ana branch'de yaptığı tüm değişikliklerin görsel olarak karmaşık günlükleriyle sonuçlanır. Bu commitler özellik geliştirme aşamasındayken önemlidir, ancak ana branch'inizin tüm geçmişine bakarken gerçekten gerekli değildir.

Diyelim ki ikinci commit'i listedeki ilk commit olan `İlk dosyayı oluştur' commit'ine `squash' yapmak istiyoruz. Öncelikle `git rebase -i --root` yazarak kök commit'imize kadar geri dönelim. Şimdi yapacağımız şey, ikinci commit'in içine `squash` edildiği ilk commit'i `seçmek`:

```bash
pick e30ff48 Create first file
squash 92aa6f3 Create second file
pick 05e5413 Create third file and create fourth file
```

İşlemi `Birinci ve ikinci dosyayı oluştur` olarak yeniden adlandırın, ardından yeniden düzenlemeyi tamamlayın. İşte bu kadar! git log`u çalıştırın ve ilk iki commitin nasıl birbirine karıştığını görün.

#### Bir commit'i bölmek

Before diving into Remotes, we're going to have a look at a handy Git command called `git reset`. Şimdi de `Üçüncü dosyayı oluştur ve dördüncü dosyayı oluştur' commit'ine bir göz atalım. Şu anda kolaylık sağlamak için boş dosyalar kullanıyoruz, ancak diyelim ki bu dosyalar işlevsellik içeriyordu ve commit bir kerede çok fazla şey açıklıyordu. Bu durumda yapabileceğimiz şey, bir kez daha etkileşimli `rebase` aracını kullanarak bunu iki küçük işleme bölmektir.

Aracı geçen seferki gibi açabilir, böleceğimiz commit için `pick` i `edit` olarak değiştirebiliriz. Ancak bunun yerine, yapacağımız şey `git reset HEAD^` komutunu çalıştırmaktır, bu da işlemi HEAD'den hemen önceki işleme sıfırlar. Bu, dosyaları tek tek eklememize, eklememize ve işlememize olanak tanır. Hepsi birlikte şöyle bir şey gibi görünecektir:

```bash
$ git reset HEAD^
$ git add test3.md && git commit -m 'Create third file'
$ git add test4.md && git commit -m 'Create fourth file'
```

Burada ne olduğuna biraz daha yakından bakarak başlayalım. Git reset`i çalıştırdığınızda, HEAD'i kendisinden hemen önceki commit'e işaret ederek mevcut branch'i sıfırlarsınız. Aynı zamanda `git reset`, HEAD'in şu anda işaret ettiği yerin içeriğiyle dizini de(hazırlama alanı) güncelledi. Böylece hazırlama alanımız da önceki commit'teki haline sıfırlandı - ki bu harika bir şey - çünkü bu bize her iki dosyayı ayrı ayrı ekleme ve commit etme imkanı verdi.

Şimdi diyelim ki HEAD'in işaret ettiği yere gitmek istiyoruz ama hazırlık alanına dokunmak *istemiyoruz*. Eğer dizini yalnız bırakmak istiyorsak, `git reset --soft` kullanabilirsiniz. Bu sadece HEAD'in başka bir yere taşındığı `git reset`in ilk kısmını gerçekleştirecektir.

Git reset --soft`u daha güçlü bir değişiklik olarak düşünebilirsiniz. Son commit'i değiştirmek yerine, birden fazla commit'e geri dönebilir ve bunların içerdiği tüm değişiklikleri tek bir commit'te birleştirebilirsiniz.

Sıfırlamanın değinmek istediğimiz son kısmı `git reset --hard`dır. Bunun yaptığı şey, HEAD'i taşımak ve dizini güncellemek gibi `git reset`in tüm adımlarını gerçekleştirmektir, ancak *ayrıca* çalışma dizinini de günceller. Buna dikkat etmek önemlidir çünkü potansiyel olarak verileri yok edebileceği için tehlikeli olabilir. Sert sıfırlama, çalışma dizinindeki dosyaların üzerine yazarak HEAD'in işaret ettiği yerdeki hazırlama alanına tam olarak benzemesini sağlar. Git commit --amend`e benzer şekilde, hard reset geçmişin üzerine yazan yıkıcı bir komuttur. Bu, diğer geliştiricilerle bir ekipte paylaşılan depolarla çalışıyorsanız tamamen kaçınmanız gerektiği anlamına gelmez. Bununla birlikte, **onu tam olarak neden kullandığınızı bildiğinizden ve iş arkadaşlarınızın da onu nasıl ve neden kullandığınızın farkında olduğundan emin olmalısınız.**



### Dallar işaretçilerdir

Bu dersin odak noktası Git geçmişini değiştirmek için daha gelişmiş araçlar olsa da, bazıları için anlaşılması zor olabilecek başka bir gelişmiş konuya giriyoruz - Pointer'lar. Dallar hakkında daha önce [Rock Paper Scissors revisited lesson adlı ingilizce makaleyi okuyun](https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors) ve bunların dosyalarımızın birden fazla *alternatif gerçeklik* versiyonunu nasıl tuttuğunu açıklayacağız. Şimdi bunun gerçekte ne anlama geldiğini ve dalların işaretçi olmasının ne anlama geldiğini tartışacağız.

Dallara dalmadan önce, commit'ler hakkında konuşalım. Eğer bunu hatırlarsanız [Git basics lesson from foundations adlı ingilizce makaleyi okuyun](https://www.theodinproject.com/lessons/foundations-git-basics), Anlık Görüntüler olarak tanımlandılar. Eğer yardımcı olacaksa, bunu çok gerçekçi bir anlamda düşünün. Her `git commit` yazdığınızda, bilgisayarınız `git add` ile sahnelenmiş olan tüm dosya içeriklerinin bir resmini çeker. Başka bir deyişle, izlenen tüm çalışma alanınız kopyalanır.

Peki dal nedir? Deneyiminize dayanarak, bir dalı bir grup taahhüt olarak görselleştiriyor olabilirsiniz. Aslında durum böyle değildir! **Bir dal aslında tek bir commit'e işaret eden bir işaretçidir.** Bunu duyduğunuzda ilk düşünceniz *"Peki bir dal sadece tek bir commit'e işaret eden bir parmaksa, bu tek commit kendisinden önce gelen tüm commit'leri nasıl biliyor? "* olabilir: Her bir commit aynı zamanda kendisinden önce gelen commit'i işaret eden bir işaretçidir! Vay canına. Bunu anlamak zor olabilir, bu yüzden biraz durup bu gerçeği özümseyelim.

Şimdi düşüncelerinizi toparlamak ve bu kavramı kafanızda oturtmaya çalışmak için bir saniyeniz olduğuna göre, geriye dönüp bu derste kullandığımız somut bir işaretçi örneğine bakmak yardımcı olabilir. Şimdi `git rebase -i HEAD~2` kullanımımıza geri dönelim. Hatırlarsanız, bu komut son iki işlemi düzenlememizi sağlar. Git'in hangi iki komutu düzenleyeceğini nasıl bildiğine dair bir tahmininiz var mı? Doğru, işaretçileri kullanarak! Şu anda üzerinde bulunduğunuz dalı takip etmek için özel bir işaretçi olan HEAD'den başlıyoruz. HEAD, geçerli daldaki en son işlemimize işaret eder. Bu commit, kendisinden hemen önce yapılan ve commit iki olarak adlandırabileceğimiz commit'e işaret eder. Bu şekilde `git rebase -i HEAD~2` bir HEAD işaretçisi ile başlar ve ardından hangi iki işlemin düzenleneceğini bulmak için sonraki işaretçileri takip eder.

Bu noktada bunalmış hissediyor olabilirsiniz, bu yüzden öğrendiklerimizi özetleyelim. Bir dal, tek bir commit'in işaretçisidir. Bir commit bir anlık görüntüdür ve geçmişte hemen arkasındaki commit'e bir işaretçidir. İşte bu kadar!

### Ödev

<div class="lesson-content__panel" markdown="1">

1.  Aşağıdaki bölümü okuyun [Rebasing covered by git-scm adlı ingilizce makaleyi okuyun](https://git-scm.com/book/en/v2/Git-Branching-Rebasing) Rebasing'e daha da derinlemesine bir dalış için.

2.  Aşağıdaki bölümü okuyun [Reset covered by git-scm adlı ingilizce makaleyi okuyun](https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified) `git reset` hakkında daha derin bir dalış için.

</div>

### Bilgi ölçme

Bu bölüm, bu dersi kendi kendinize anlayıp anlamadığınızı kontrol etmeniz için sorular içermektedir. Bir soruyu yanıtlamakta zorlanıyorsanız, soruya tıklayın ve bağlantılı olduğu materyali gözden geçirin.

*   <a class='knowledge-check-link' href='https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell'>Explain what it means for branches to be pointers.</a>
*   <a class='knowledge-check-link' href='https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things'>How can you amend your last commit?</a>
*   <a class='knowledge-check-link' href='https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History'>What are some different ways to rewrite history?</a>

### Additional resources

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

*   Bir referans sayfasına ihtiyacınız varsa bu [Git Cheat Sheet adlı ingilizce makaleyi okuyun](https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet) adresini okuyun.
*   Rebase ve merge'in nasıl kullanılacağına dair bir örnek için bu [Rebase & Merge hakkındaki videoyu](https://www.youtube.com/watch?v=f1wnYdLEpgI) izleyin.
*   Branch'ler hakkında daha da derinlemesine bilgi edinmek istiyorsanız [Branches covered by git-scm adlı ingilizce makaleyi okuyun.](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)

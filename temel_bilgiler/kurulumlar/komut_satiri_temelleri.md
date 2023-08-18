### Giriş

Komut satırından korkuyor musunuz? Yalnız değilsiniz. Aklımızda, şirketin ana bilgisayarını hacklemek için çılgınca anlaşılmaz komutlar girerken, beyaz veya yeşil metinlerin yanıp söndüğü siyah bir ekrana dikkatle bakan geliştiricilerin imajı canlanıyor.

Bu siyah ekran veya pencere, bilgisayarınızın sizin için çalıştıracağı komutları girebileceğiniz <span id="command-line">komut satırı arayüzüdür (CLI)</span>. Komut satırıyla çalışmak geliştiriciler için öğrenilmesi önemli bir beceridir. Komut satırı, diğer programları başlatabileceğimiz ve onlarla iletişime geçebileceğimiz operasyon üssü gibidir. Öğrenilmesi gereken kendine has bir sözdizimi vardır ancak aynı komutları onlarca kez gireceğiniz için ihtiyacınız olan komutları çabuk öğrenebileceksiniz.

Komut satırına giriş niteliğindeki bu derste, bilgisayarınızda nasıl gezineceğinizi ve doğrudan komut satırının rahatlığıyla dosya ve dizinleri (klasörler olarak da bilinir) nasıl değiştireceğinizi öğreneceksiniz. Bunun sandığınız kadar zor olmadığını göreceksiniz. Bu derste öğreneceğiniz komutlar çok basittir. Bu nedenle, komut satırını ilk kez kullanmak sizi korkutmasın.

### Terminalinizi Test Edin

Bilgisayarınızda <span id="open-command-line">bir terminal açın</span>.

- **Linux**: Programlar menüsünü açın ve "Terminal" diye aratın. Ayrıca klavyenizde <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd> tuşlarına basarak da terminali açabilirsiniz.

- **macOS**: Uygulamalar > Araçlar klasörünüzü açın ve "Terminal" diye aratın. Terminal'i açmak için Spotlight aramasını da kullanabilirsiniz. <kbd>Cmd</kbd> + <kbd>Space</kbd> tuşlarına basarak Spotlight'ı açabilir, ve "Terminal" diye aratabilirsiniz. Sonrasında <kbd>Enter</kbd> tuşuna basarak Terminal'i açabilirsiniz.

Başlamadan önce, aşağıdaki metne bir göz atın:

```
$ whoami
```

`$` işareti yaygın kullanılan bir terminal göstergesidir. `$` işareti "Selam! Terminalinize komut girebilirsiniz." anlamına gelir. Herhangi bir komut girerken `$` işaretini yazmanız gerekmeyecektir. Yukarıdaki örnekte, terminalimize sadece `whoami` yazdık. Bir komuttan önce `$` karakterini girmediğinizden emin olunuz. Artık `$` işaretinin ne olduğunu bildiğinize göre, terminalinizi bir test çalışması için kullanabilirsiniz! Terminalinizin açık olduğundan emin olun, yukarıda belirtilen komutu yazın ve klavyenizde <kbd>Enter</kbd> tuşuna basınız.

Kullanıcı adınızı yazdıracaktır. Harika!

#### Bunu neden şimdi öğreneceksiniz?

Bu müfredat boyunca komut satırını yoğun bir şekilde kullanacaksınız ve yaklaşan kurulum projesi, komut satırını kullanarak birçok farklı yazılım programını yüklemenizi gerektirecek. Ayrıca, Git'i öncelikle komut satırında kullanacaksınız (bu konuda daha sonra bilgi verilecektir). Büyük resmin bir parçası olarak, yazılım geliştiricisi kariyerinizde komut satırını günlük olarak kullanıyor olabilirsiniz, bu da onu kullandığınız araçlar arasında vazgeçilmez bir beceri haline getirir.

### Derse Genel Bakış

Bu bölüm, derste öğreneceğiniz konulara genel bir bakış içermektedir.

- Komut satırının ne olduğunun açıklaması.
- Bilgisayarınızda komut satırını açmak.
- Dizinlerde gezinmek ve dizin içeriklerini görüntülemek için komut satırının kullanımı.
- Yeni bir dizin ve yeni bir dosya oluşturmak için komut satırının kullanımı.
- Bir dizini ve dosyayı yeniden adlandırmak veya yok etmek için komut satırının kullanımı.
- Bir programda dosya veya klasör açmak için komut satırının kullanımı.

### Ödev

<div class="lesson-content__panel" markdown="1">

**Not**: Bu kaynakların birçoğu Mac veya Linux ortamı kullandığınızı varsaymaktadır. Önceki kurulum dersimizi yaptıysanız, Linux'u çift önyükleme veya sanal bir makinede zaten kurmuş olmalısınız. Ya da MacOS kullanıyor olabilirsiniz. MacOS veya herhangi bir Linux sürümü yüklü değilse, lütfen [işletim sistemi kurulum kılavuzu](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/prerequisites) bölümüne geri dönün.

1. Software Carpentry Foundation tarafından tasarlanan [The Unix Shell](https://swcarpentry.github.io/shell-novice/) kursuna göz atın. Orada CLI kullanımı ile ilgili tüm dersleri bulabilirsiniz ancak şimdilik, sadece aşağıdaki dersleri tamamlamaya odaklanalım:

   - Kurulum (Sadece `Download files` bölümündeki talimatları izleyin, gerekli yazılıma zaten sahip olduğunuz için ihtiyacınız olan tek şey budur)
   - Shell Tanıtımı
   - Dosya ve Dizinlerde Gezinme
   - Dosyalar ve Dizinlerle Çalışma
   - Pipe'lar ve Filtreler

2. Yeni keşfettiğiniz CLI süper güçlerinizle, bir önceki adımda tanıtılan `mkdir`, `touch` ve `cd` komutlarını kullanarak klasör ve birkaç dosya oluşturma alıştırması yapın. Örnek olarak, basit bir web sitesinde ana `index.html` dosyası, `style.css` adlı bir CSS stil dosyası ve resimler için `images` isimli bir klasör olabilir. Bu dosyaları komutlarla nasıl oluşturabileceğimizi düşünüp uygulamaya başlayalım!

3. Dosya ve dizin oluşturma ve silme alıştırması yapalım! Aşağıdaki adımlar için komutları terminalinize girmeniz gerekecek. Terminali nasıl açacağınızı hatırlayamıyorsanız, hatırlatma için yukarı kaydırın.

   1. home dizininizde `test` adıyla yeni bir dizin oluşturun.
   2. `test` dizinine gidin.
   3. `test.txt` adında yeni bir dosya oluşturun. _İpucu: `touch` veya `echo` komutunu kullanın._
   4. Yeni oluşturduğunuz dosyayı VSCode'da açın ve bazı değişiklikler yaptıktan sonra dosyayı kaydedin ve kapatın.
   5. `test` dizininin dışına geri dönün.
   6. `test` dizinini silin.

   Bu kadar. Alıştırma ile işimiz bitti! Bundan sonra çoğu şeyi komut satırından yapmaya karar verirseniz, bu komutlar sizin için kolay ve vazgeçilmez hale gelecektir.

</div>

### Komut Satırını Bir Profesyonel Gibi Kullanmak

Programcılar hakkında bilmeniz gereken önemli bir şey var. Programcılar daima bir şeyi yapmanın kolay yolunu ararlar. Gerçekten. Bir şeyi tekrar tekrar yapmak zorunda kaldıklarında, büyük ihtimalle bunu otomatikleştirmenin bir yolunu bulacaklardır. İyi haber şu ki, programcıların bu güne kadar oluşturdukları birçok kısayoldan yararlanabileceksiniz. Komut satırını bir profesyonel gibi kullanmayı öğrenmenin zamanı geldi (yani, kısayollarla kolay bir şekilde).

Öncelikle, komut satırı içinde kopyalama ve yapıştırmanın beklediğiniz şekilde çalışmadığını çoktan fark etmiş olabilirsiniz. Komut satırının içindeyken, kopyalamak için <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd> (Mac: <kbd>Cmd</kbd> + <kbd>C</kbd>) ve yapıştırmak için <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>V</kbd> (Mac: <kbd>Cmd</kbd> + <kbd>V</kbd>) tuşlarını kullanmanız gerekir. Örneğin, tarayıcınızdaki komutları kopyalayıp komut satırına yapıştırmak için komut metnini vurgulayıp her zamanki gibi <kbd>Ctrl</kbd> + <kbd>C</kbd> tuşlarını kullanacak ve ardından <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>V</kbd> tuşlarını kullanarak terminalinize yapıştıracaksınız. Deneyin bakalım!

İkinci olarak, [tab completion](https://en.wikipedia.org/wiki/Command-line_completion) hakkında bilgi edinmeniz iyi olacaktır. Bu ipucu size çok fazla zaman kazandıracak. Diyelim ki komut satırındasınız ve `~/Documents/Odin-Project/foundations/javascript/calculator/` gibi uzak bir klasöre gitmeniz gerekiyor. Yazması uzun bir komut olacak ve çalışması için her şeyin tam olarak doğru olması gerekecektir. Bunu kolay bir şekilde yapabilmek için bir _yöntem_ bulunmakta! Basitçe, <kbd>Tab</kbd> tuşuna basmak, komut satırında yalnızca bir seçenek olduğunda yazmaya başladığınız komutları otomatik olarak tamamlayacaktır. Örneğin, home dizininde genellikle `Documents` ve `Downloads` klasörleri olur. Komut satırına `cd D` yazıp <kbd>Tab</kbd> tuşuna basarsanız, komut satırı, şu ana kadar yazdıklarınızla eşleşen farklı seçenekleri göstererek hangisini istediğinizden emin olmadığını size bildirecektir:

```bash
$ cd D
Documents/ Downloads/
$ cd D
```

Biraz daha yazdığınızda, adı sizin için tamamlayacak ve `cd Doc[tab]O[tab]f[tab]j[tab]cal[tab]` (bilgisayarınızda başka hangi klasörlerin bulunduğuna bağlı olarak) gibi her dizinin baş harfini yazıp <kbd>Tab</kbd> tuşuna bastığınızda yukarıdaki tam dosya yolunu yazmanızı mümkün kılacaktır. Deneyin ve bunun nasıl çalıştığına alışmaya çalışın bakalım. Bunu seveceksiniz.

Üçüncü olarak, bir proje dizini içindeki her şeyi açmak için kullanışlı bir kısayol var: `.` Bir metin editörü yükledikten sonra, tüm projeyi ve tüm dosyalarını tek seferde açmak için bu kısayolu kullanabilirsiniz. Bu kısayol Git ile de yaygın olarak kullanılır (daha sonra ayrıntılı olarak ele alınacaktır) `git add .` gibi komutlar bir dizinin içindeki tüm dosyaları Git'in staging alanına eklemek için kullanılır. Örneğin, VS Code yüklüyse, proje dizinine `cd` kullanarak ulaşabilir ve ardından `code .` (nokta ile) yazabilirsiniz. Bu VS Code'u başlatacak ve proje klasörünü açacaktır. Daha ayrıntılı bir örnek için bu dersin bir sonraki bölümüne bakabilirsiniz.

**Parola yazmaya ilişkin Bir Not**: Terminalde kimlik doğrulama için parolanızı girmenizi gerektiren bir komut kullanırken (örneğin `sudo`), karakterler siz yazarken görünmemelidir. Terminalin yanıt vermediğini düşünseniz de bu, web sitelerindeki parola alanlarının yıldız veya nokta kullanması gibi gizli bilgileri korumak için bir güvenlik önemlidir. Terminal, yazdığınız karakterleri görüntülemeyerek parolanızı güvende tutar.

### VSCode'da Komut Satırından Dosya Açmak

- **Linux**: VSCode'u komut satırından `code` yazarak açabilir ve ardından konumun adını ekleyerek klasörleri veya dosyaları açabilirsiniz: `code my_awesome_project/`.

- **macOS**: Bazı kurulumlar gereklidir. VSCode'u kurduktan sonra çalıştırın. VSCode çalıştıktan sonra, <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> tuşlarıyla Komut Paletini açın. Görüntülenen küçük kutuya `shell command` yazın. Görüntülenen seçeneklerden biri `Shell Command: Install 'code' command in PATH` olacaktır. Bu seçeneği seçin ve (açıksa) terminalinizi yeniden başlatın.

### Ek Kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

- [The Art of Command Line](https://github.com/jlevy/the-art-of-command-line#readme) başlangıç için birebirdir!. Açık kaynak git deposudur. Burada birçok profesyonel ipucu mevcut!
- [Learn Enough Command Line to Be Dangerous](https://www.learnenough.com/command-line-tutorial) adlı çevrimiçi kitap, komut satırında uzmanlaşmak için harika bir kaynaktır. Bölüm 1 ve 2 ücretsizdir ve komut satırı araçlarına iyi bir giriş sağlar. Kitabın geri kalanı ücretsiz değildir ve bu noktada gerçekten ihtiyacınız olandan daha fazla derinliğe iner ancak ilginizi çekerse kitabın geri kalanını satın almaktan ve okumaktan çekinmeyin.
- [ExplainShell.com](http://explainshell.com/), özellikle garip shell komutlarının yapısını çözmek veya Bash'in nasıl çalıştığını öğrenmek istiyorsanız harika bir kaynaktır.
- [Unix/Linux Command Cheat Sheet](https://files.fosswire.com/2007/08/fwunixref.pdf), Linux kullanımına aşina olduğunuzda düzenli olarak başvurabileceğiniz önemli komutların listesini içerir. Bilgisayarınızın başında olmadığınız zamanlarda fiziksel bir kopyasını yanınızda bulundurmak için çıktısını alabilirsiniz.
- [Command Line Flashcards](https://flashcards.github.io/command_line/introduction.html) by flashcards.github.io.
- [Video Series from LearnLinuxTv](https://www.youtube.com/playlist?list=PLT98CRl2KxKHaKA9-4_I38sLzK134p4GJ) komut satırının temellerini açıklayan 24 video içermektedir. Videolar yeni başlayanlar için yeterince kısa ama aynı zamanda başlamanızı sağlayacak ve içinizdeki merakı ateşleyecek kadar detaylıdır.

### Bilgi Kontrolü

Bu bölüm, bu dersi kendi başınıza anlayıp anlamadığınızı kontrol etmeniz için sorular içermektedir. Bir soruyu yanıtlamakta zorlanıyorsanız, soruya tıklayın ve yönlendirdiği materyali gözden geçirin.

- [Komut satırı nedir?](#command-line)
- [Bilgisayarınızda komut satırını nasıl açarsınız?](#open-command-line)
- [Belirli bir dizine nasıl girersiniz?](https://www.softcover.io/read/fc6c09de/unix_commands/basics#sec-basics-cd)
- [Tek başına `cd` sizi nereye yönlendirir?](https://www.softcover.io/read/fc6c09de/unix_commands/basics#uid31)
- [`cd ..` sizi nereye yönlendirir?](https://www.softcover.io/read/fc6c09de/unix_commands/basics#uid30)
- [Şu anda bulunduğunuz dizinin ismini nasıl gösterirsiniz?](https://www.softcover.io/read/fc6c09de/unix_commands/basics#sec-basics-pwd)
- [Şu anda bulunduğunuz dizinin içeriklerini nasıl gösterirsiniz?](https://www.softcover.io/read/fc6c09de/unix_commands/basics#sec-basics-ls)
- [Yeni bir dizin nasıl yaratılır?](https://www.softcover.io/read/fc6c09de/unix_commands/basics#cid7)
- [Yeni bir dosya nasıl oluşturulur?](https://swcarpentry.github.io/shell-novice/03-create.html#create-a-text-file)
- [Bir dizin veya dosya nasıl silinir?](https://www.softcover.io/read/fc6c09de/unix_commands/basics#cid9)
- [Bir dizin veya dosya nasıl yeniden adlandırılır?](https://www.softcover.io/read/fc6c09de/unix_commands/basics#cid10)

### Giriş

Bu derste, projelerinizi yönetmek ve çalışmalarınızı GitHub'a yüklemek için kullanılan yaygın Git komutlarını ele alacağız. Bu komutlara **temel Git iş akışı** diyoruz. Git kullanırken, zamanınızın %70-80'nini bu komutları kullanarak geçireceksiniz. Eğer bunları öğrenebilirseniz, Git'te ustalaşma yolunun yarısından fazlasını öğrenmiş olacaksınız!

### Derse Genel Bakış

Bu bölüm, bu derste öğreneceğiniz konuların genel bir özetini içerir.

- GitHub'da depo nasıl oluşturulur.
- GitHub'a dosya yükleme ve GitHub'dan dosya indirme.
- Kodunuzun "anlık görüntüsünü" alma.

### Ödev

#### Başlamadan Önce!

- Github kısa süre önce varsayılan branch (dal) adını değiştirdi. Bu yüzden git sürümünüzün yeni olduğundan emin olun (2.28 ya da sonrası). Git sürümünüzü kontrol etmek için `git --version` komutunu kullanabilirsiniz.
- Henüz yapmadıysanız, yerel varsayılan git dalınızı `main` olarak ayarlayın. Bunu yapmak için `git config --global init.defaultBranch main` komutunu kullanabilirsiniz.
- Master'dan main'e geçiş hakkında daha fazla bilgi için [GitHub's Renaming Repository](https://github.com/github/renaming).

#### Depo Oluşturma

1. [Git Kurulumu](https://www.theodinproject.com/lessons/foundations-setting-up-git) dersinde bir GitHub hesabı oluşturmuş olmalısınız. Eğer oluşturmadıysanız, [buradan](https://github.com/) oluşturun.
2. Aşağıdaki ekran görüntüsünde gösterilen düğmeye tıklayarak yeni bir depo oluşturun.
   ![The GitHub Profile Screen](https://cdn.statically.io/gh/TheOdinProject/curriculum/b54d14c5dcee1c6fac61aee02fca7e9ef7ba1510/foundations/git_basics/project_practicing_git_basics/imgs/00.png)
3. `Repository name` kısmından, depo adınıza "git_test" ismini verin."Add a README file" kutucuğunu işaretleyin. Ve ardından sayfanın altındaki "Depo oluştur" düğmesine tıklayarak depoyu oluşturun .

   ![Create new repo using GitHub](https://cdn.statically.io/gh/TheOdinProject/curriculum/b54d14c5dcee1c6fac61aee02fca7e9ef7ba1510/foundations/git_basics/project_practicing_git_basics/imgs/01.png)

4. Bu sizi GitHub'daki yeni deponuza yönlendirecektir. Bu depoyu yerel makinenize kopyalamak (klonlamak) için, yeşil "Code" düğmesine tıklayın. Ardından SSH seçeneğini seçin ve altındaki satırı kopyalayın. **NOT: Doğru URL'yi almak için SSH seçeneğine tıklamalısınız.**

   ![Copy SSH link using GitHub](https://cdn.statically.io/gh/TheOdinProject/curriculum/b54d14c5dcee1c6fac61aee02fca7e9ef7ba1510/foundations/git_basics/project_practicing_git_basics/imgs/02.png)

5. Tüm Odin projeleriniz için yeni bir dizin oluşturmak için yerel makinenizdeki komut satırını kullanalım. Ana klasörünüzde `mkdir` komutu ile `repos` adında bir dizin oluşturun. Ana klasörünüz `~` işareti ile temsil edilir. [Dosya ve Dizinlerde Gezinme](https://swcarpentry.github.io/shell-novice/02-filedir.html#callout1) bazı ana klasör varyasyonlarını göstermektedir - bazı zamanlar `~`, `/users/sizin_adınız` yerine geçer ya da `/home/sizin_adınız`. Eğer ana klasörünüzde olduğunuzdan emin değilseniz, `cd ~` komutunu yazın. Klasör oluşturulduktan sonra, `cd` komutunu kullanarak klasöre geçin.

   ![Creating a new directory](https://cdn.statically.io/gh/TheOdinProject/curriculum/b54d14c5dcee1c6fac61aee02fca7e9ef7ba1510/foundations/git_basics/project_practicing_git_basics/imgs/03.png)

6. <span id="github-to-local"></span>Artık GitHub deponuzu bilgisayarınıza kopyalama zamanı geldi, `git clone` komutunun ardından kopyaladığınız URL komut satırına yapıştırın. Yazdığınız komut bu komuta benzemelidir, `git clone git@github.com:USER-NAME/REPOSITORY-NAME.git`. Eğer URL buna benziyorsa `https://github.com/USER-NAME/REPOSITORY-NAME.git`, HTTPS seçeneğini seçmişsiniz demektir, gerekli olan SSH'yi değil.

   ![Clone the repo using CLI](https://cdn.statically.io/gh/TheOdinProject/curriculum/b54d14c5dcee1c6fac61aee02fca7e9ef7ba1510/foundations/git_basics/project_practicing_git_basics/imgs/04.png)

7. <span id="origin-push"></span>Bu kadar! GitHub'da açtığınız deponuzu başarılı bir şekilde bilgisayarınıza bağladınız. Bunu denemek için, yeni indirilen **git_test** klasörüne `cd` komutu ile geçiş yapabilirsiniz, ardından `git remote -v` komutunu çalıştırın. Bu komut GitHub depo URL'sini gösterecektir. <span id="default-remote"></span> `git remote -v` komutunun çıktısının başında **origin** kelimesi dikkatinizi çekmiş olabilir, uzaktan bağlantınızın adını temsil eder. **Origin** ismi uzaktan depolara verilen hem varsayılan hem de geleneksel bir addır. Ama kolaylıkla "parti-papağanı" ya da "dans-eden-muz" olarakta isimlendirilebilirdi.(Şimdilik origin detaylarıyla kafanızı yormayın; bu dersin sonunda yine karşınıza çıkacak.)

   ![Check repo remotes using CLI](https://cdn.statically.io/gh/TheOdinProject/curriculum/b54d14c5dcee1c6fac61aee02fca7e9ef7ba1510/foundations/git_basics/project_practicing_git_basics/imgs/05.png)

#### Git İş Akışı Kullanımı

1. `touch hello_world.txt` komutu ile `git_test` klasöründe "hello_world.txt" adında yeni bir dosya oluşturun.

   ![Create hello_world.txt using CLI](https://cdn.statically.io/gh/TheOdinProject/curriculum/b54d14c5dcee1c6fac61aee02fca7e9ef7ba1510/foundations/git_basics/project_practicing_git_basics/imgs/06.png)

2. <span id="git-status"></span>Terminalinize `git status` yazın. Çıktıda fark ettiğiniz üzere hello_world.txt dosyası kırmızı olarak gözükmektedir. , bunun anlamı dosyanın işaretlenmemiş (unstaged) olmasıdır.

   ![Check status of repo using CLI](https://cdn.statically.io/gh/TheOdinProject/curriculum/b54d14c5dcee1c6fac61aee02fca7e9ef7ba1510/foundations/git_basics/project_practicing_git_basics/imgs/07.png)

3. <span id="git-add"></span><span id="two-stages"></span>Terminalinize `git add hello_world.txt` yazın. Bu komut hello_world.txt dosyanızı Git'in işaretlenmişler (staged) kısmına ekler. İşaretlenmişler (staging) kısmı iki aşamadan oluşan, Git'te bir işlem(commit) yapmanın parçasıdır. İşaretleme (staging) kısmını, değiştirdiğiniz dosyaların Git işlemlerini(commit) bekledikleri bir oda gibi düşünün. Şimdi, tekrar `git status` yazın. Çıktıda fark ettiğiniz üzere dosyanız yeşil olarak gözüküyor, bu da dosyanın işaretleme (staging) bölgesinde olduğunu gösteriyor.

   ![Stage hello_world and check repo status again using CLI](https://cdn.statically.io/gh/TheOdinProject/curriculum/b54d14c5dcee1c6fac61aee02fca7e9ef7ba1510/foundations/git_basics/project_practicing_git_basics/imgs/08.png)

4. <span id="git-commit"></span>Terminale `git commit -m "Add hello_world.txt"` yazın, ardından bir kez daha `git status` yazın. Göreceğiniz çıktı şu olmalıdır: "*nothing to commit, working tree clean*", bu kısaca yaptığınız değişikliklerin kaydedildiği anlamına gelir. Eğer sizin çıktınız "*upstream is gone*" gözüküyorsa, merak etmeyin. Bu normal, klonladığınız deponun başka bir dalı olmadığında gözükür. Projenin devamındaki adımları takip ettiğiniz takdirde çözülecektir.

"_Your branch is ahead of 'origin/main' by 1 commit_" anlamı ise uzak(remote) depodaki değişikliklerinizden daha yeni" anlık görüntü"lerinizin bulunmasıdır. "Anlık görüntü"lerinizi dersin ileriki zamanlarında yükleyeceksiniz.

![Commit hello_world and check repo status again using CLI](https://cdn.statically.io/gh/TheOdinProject/curriculum/b54d14c5dcee1c6fac61aee02fca7e9ef7ba1510/foundations/git_basics/project_practicing_git_basics/imgs/09.png)

5. <span id="git-log"></span>`git log` yazın ve çıktıya dikkat edin. Yaptığınız "*Add hello_world.txt*" işleminiz için bir girdi görmelisiniz. Ayrıca bu işlem hakkında detaylı bilgileri burda görebilirsiniz. İşlemi kimin yaptığı, tarih ve saat gibi. Eğer terminaliniz aşağıda (END) yazan bir ekranda sıkışıp kalmışsa, "q" ya basın. Bunun ayarlarını sonra yapabilirsiniz ama şu an dert etmeyin.

   ![Commit hello_world and check repo status again using CLI](https://cdn.statically.io/gh/TheOdinProject/curriculum/b54d14c5dcee1c6fac61aee02fca7e9ef7ba1510/foundations/git_basics/project_practicing_git_basics/imgs/10.png)

#### Bir iki dosyayı değiştirelim

1. README.md dosyasını metin editörünüzde açın. Bu örnekte, komutu `code .` kullanarak Visual Studio Code ile açacağız.

   ![Add text file and check repo status again using CLI](https://cdn.statically.io/gh/TheOdinProject/curriculum/b54d14c5dcee1c6fac61aee02fca7e9ef7ba1510/foundations/git_basics/project_practicing_git_basics/imgs/11.png)

   MacOS kullanıcıları: Eğer terminaliniz *"command not found: code"* hatası verirse, [Command Line Basics](https://www.theodinproject.com/lessons/foundations-command-line-basics#opening-files-in-vscode-from-the-command-line) bölümüne geri dönüp, bu komutun çalışması için gerekli olan adımları takip edin.

2. README.md dosyasının 3. satırına "Hello Odin!" yazın ve dosyayı "Ctrl+S" (MacOS için "Command+S") ile kaydedin.

   ![Edit README using text editor](https://cdn.statically.io/gh/TheOdinProject/curriculum/b54d14c5dcee1c6fac61aee02fca7e9ef7ba1510/foundations/git_basics/project_practicing_git_basics/imgs/12.png)

3. Terminale geri dönün veya Visual Studio Code kullanıyorsanız, Ctrl + ` (backtick) tuşlarına basarak dahili terminali açabilirsiniz. Ardından `git status` yazın. README.md dosyasının değiştiğini göreceksiniz.

   ![Check repo status again using CLI](https://cdn.statically.io/gh/TheOdinProject/curriculum/b54d14c5dcee1c6fac61aee02fca7e9ef7ba1510/foundations/git_basics/project_practicing_git_basics/imgs/13.png)

4. README.md dosyasını işaretleme (staging) bölgesine eklemek için `git add README.md` yazın.


5. `git status` yazın. README.md dosyasının yeşil renkte olduğunu göreceksiniz. Bu, README.md dosyasının hazırlanma bölgesine eklendiği anlamına gelir. hello_world.txt dosyası görünmeyecektir çünkü son commit işleminizden beri değiştirilmedi.

   ![Stage README changes and check repo status again using CLI](https://cdn.statically.io/gh/TheOdinProject/curriculum/b54d14c5dcee1c6fac61aee02fca7e9ef7ba1510/foundations/git_basics/project_practicing_git_basics/imgs/14.png)

6. hello_world.txt dosyasını açın, içine bir şeyler yazın, kaydedin ve hazırlanma bölgesine ekleyin. Hazırlanma bölgesine tüm dosyaları eklemek için `git add .` kullanabilirsiniz. Ardından, `git status` yazın ve her şeyin hazırlanma bölgesinde olduğunu göreceksiniz.

   ![Stage all other files in repo and check repo status again using CLI](https://cdn.statically.io/gh/TheOdinProject/curriculum/b54d14c5dcee1c6fac61aee02fca7e9ef7ba1510/foundations/git_basics/project_practicing_git_basics/imgs/15.png)

7. Son olarak, hazırlanma bölgesindeki tüm dosyaları commit etmek ve açıklayıcı bir commit mesajı eklemek için `git commit -m "Edit README.md and hello_world.txt"` yazın. Ardından, `git status` yazın, çıktı olarak "*nothing to commit*" göreceksiniz.

   ![Commit repo changes again and check repo status again using CLI](https://cdn.statically.io/gh/TheOdinProject/curriculum/b54d14c5dcee1c6fac61aee02fca7e9ef7ba1510/foundations/git_basics/project_practicing_git_basics/imgs/16.png)

8. Son olarak, commit geçmişinize bir göz atın. `git log` yazın.Üç girdi görmelisiniz.

   ![Git Log](https://cdn.statically.io/gh/TheOdinProject/curriculum/b54d14c5dcee1c6fac61aee02fca7e9ef7ba1510/foundations/git_basics/project_practicing_git_basics/imgs/17.png)

#### Uzak Depoya Yükleme

Çalışmanızı son olarak bu dersin başında oluşturduğunuz GitHub deposuna yükleyelim.

1. <span id="git-push"></span> `git push` yazalım. Daha spesifik olmak gerekirse, `git push origin main` yazın. Başka bir dal (main dışında) veya farklı bir uzak depo (yukarıda bahsedildiği gibi) ile uğraşmadığınızdan, birkaç tuşa basarak bırakabilirsiniz. **NOT: Eğer bu noktada "Support for password authentication was removed on August 13, 2021.
   Please use a personal access token instead." şeklinde bir mesaj alırsanız, adımları yanlış takip etmişsiniz demektir ve
   HTTPS ile değil SSH ile klonlamışsınız demektir. Lütfen [bu adımları](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#switching-remote-urls-from-https-to-ssh) takip ederek uzak bağlantınızı SSH'ye çevirin ve Github'a yüklemeyi tekrar deneyin.**

   ![Push changes to remote using CLI](https://cdn.statically.io/gh/TheOdinProject/curriculum/b54d14c5dcee1c6fac61aee02fca7e9ef7ba1510/foundations/git_basics/project_practicing_git_basics/imgs/18.png)

2. Son olarak `git status` yazın. "_Your branch is up to date with 'origin/main'. nothing to commit, working tree clean_" çıktısını vermesi gerekiyor.

   ![Check repo status again to confirm local repo is up to date with remote using CLI](https://cdn.statically.io/gh/TheOdinProject/curriculum/b54d14c5dcee1c6fac61aee02fca7e9ef7ba1510/foundations/git_basics/project_practicing_git_basics/imgs/19.png)

3. GitHub'daki depoyu yenilediğinizde, yerel makinenizden GitHub'a yeni yüklediğiniz README.md ve hello_world.txt dosyalarını görmelisiniz.

   ![Verify repo changes are on GitHub](https://cdn.statically.io/gh/TheOdinProject/curriculum/b54d14c5dcee1c6fac61aee02fca7e9ef7ba1510/foundations/git_basics/project_practicing_git_basics/imgs/20.png)

### Not/Uyarı

Basit değişiklikler yapmaya çalışırken, örneğin README.md'deki yazım hatasını düzeltmeye çalışırken, bunu doğrudan Github üzerinden yapmaya çalışabilirsiniz. Ancak bu durum, bu aşamada üzerinde durmak istemediğimiz daha gelişmiş Git bilgisi gerektiren sorunlara neden olacaktır (gelecekteki bir derste bu konuyu göreceksiniz), şimdilik hazır olduğunuzda yerel dosyalarınızı kullanarak herhangi bir değişiklik yapmanız ve ardından terminalinizde Git komutlarını kullanarak bunları yüklemeniz etmeniz önerilir.

### Cheatsheet

Bu liste en sık kullanılan Git komutlarının bir listesidir. (Bu kullanışlı sayfayı yer imlerinize eklemeyi düşünebilirsiniz.) Komutları en sonunda hepsini hatırlayabileceğiniz şekilde tanımaya çalışın:

- Uzak depoyla ilgili komutlar:
    - `git clone git@github.com:USER-NAME/REPOSITORY-NAME.git`
    - `git push` ya da `git push origin main` (Bu bağlamda her ikisi de aynı amaca ulaşır)
- İş akışıyla ilgili komutlar:
    - `git add .`
    - `git commit -m "A message describing what you have done to make this snapshot different"`
- Durum ve işlem tarihi ile ilgili komutlar:
    - `git status`
    - `git log`

Git komutlarının mantığı kısaca `program | aksiyon | hedef` şeklindedir.

Mesela,

- `git add .` ,  `git | add | .` olarak okunur, nokta bulunduğu depodaki her şeyi temsil eder;
- `git commit -m "message"`  `git | commit -m | "message"` olarak; and
- `git status` ise `git | status | (no destination)` olarak okunur.

### Git En İyi Uygulamalar (Best Practices)

Git kullanımı hakkında öğrenebileceğiniz çok şey var. Ancak daha iyi bir işbirlikçi olmanız için bazı iyi pratikleri öğrenmelisiniz. Git, yalnızca diğerleriyle işbirliği yaparken değil, aynı zamanda bağımsız olarak çalışırken de yararlıdır. Geçmişteki kodunuzu yeniden ziyaret ettiğinizde, işlem(commit) tarihinize daha fazla bel bağlayacaksınız.

Faydalı olabilecek bir pratik örneği, **atomik işlemler** ve bu atomik işlemleri kullanarak işlemlerinizin(commit) gelecekteki işbirlikçileriniz için daha yararlı olmasını sağlamaktır.

Atomik işlem bir programınızın yalnızca bir özelliği veya göreviyle ilgili değişiklikleri içeren bir işlemdir. Bunu yapmanın iki temel nedeni vardır: ilk olarak, değiştirdiğiniz bir şeyin bazı sorunlara neden olduğu ortaya çıkarsa, diğer değişiklikleri kaybetmeden belirli değişikliği geri almak kolaydır; ikinci olarak, daha iyi bir işlem(commit) mesajı yazmanıza olanak sağlar. İyi bir işlem(commit) mesajının nasıl göründüğünü gelecekteki derslerde daha iyi anlayacaksınız.

### Git Commit Mesaj Editörünü Değiştirme

Eğer _Visual Studio Code_ kullanıyorsanız (bu müfredatı takip ediyorsanız kullanmalısınız), `git commit` komutunu mesaj bayrağı (`-m`) ile [Vim](<https://en.wikipedia.org/wiki/Vim_(text_editor)>)'de commit mesajı yazmak zorunda kalmayacağınız bir yöntem mevcut.

Mesaj yazmayı unutuyorsanız ve Vim kullanmak gibi bir niyetiniz yoksa, varsayılan mesaj düzenleyicinizi VSCode olarak değiştirmek iyi bir seçenek olabilir.

Bunu değiştirmenin bir dezavantajı yoktur çünkü işleme (commit) mesajlarınızı ister terminalde isterseniz de VSCode'da yazma seçeneğiniz olacaktır.

Aşağıdaki komut bu ayarı yapmak içindir. Bu komutu terminalinize yazın (veya kopyalayıp yapıştırın) ve <kbd>Enter</kbd> tuşuna basın.

~~~bash
git config --global core.editor "code --wait"
~~~

Bu komutu yazdıktan sonra terminalde herhangi bir çıktı veya onay yazısı olmayacaktır.

Bunu yaptıktan sonra, artık `git commit -m <your message here>` veya `git commit` kullanarak mesajınızı Visual Studio Code ile yazmayı seçebilirsiniz!

Visual Studio Code ile commit yapmak için, sadece `git commit` yazın. <kbd>Enter</kbd> tuşuna bastıktan sonra VS Code da yeni bir sekme açılacak ve commit mesajınızı yazmanız için size bir alan sunacaktır. Commit mesajınızın bir parçası olarak birden fazla satırda daha fazla ayrıntı sağlayabilirsiniz. Commit mesajınızı yazdıktan sonra, kaydedin <kbd>Ctrl + S</kbd> (veya Mac için muadili) ve sekmeyi kapatın. Eğer komut satırına geri dönerseniz, commit mesajınızı ve değişikliklerinizin özetini göreceksiniz.

### Sonuç

Şu an kendinizi Git konusunda çok rahat hissetmeyebilirsiniz, ki bu normal. Git, pratik yaptıkça daha rahat hissedeceğiniz bir beceridir.

Bu dersten çıkarmanız gereken temel şey **temel iş akışı**dır. Burada öğrendiğiniz komutlar, Git'i en sık kullandığınız komutlardır.

Eğer bazı komutları bilmiyorsanız ya da hafızanızda kalmıyorsa endişelenmeyin. Gelecekteki Odin projelerinde bu komutları tekrar tekrar kullanırken hafızanıza kazınacaklar.

İlerideki derslerde, Git'in daha gelişmiş özelliklerinden bazılarını, örneğin dalları, öğreneceğiz. Bu özellikler yeteneklerinizi daha da geliştirecek ve daha verimli olmanızı sağlayacak.

Şimdilik, burada öğrendiğiniz Git'in temellerini, bundan sonra tüm projelerinizde kullanmaya odaklanın. Yakında temel Git komutlarının her birini hafızanızdan yazabileceksiniz!

### Bilgi Kontrolü

Bu bölüm, dersi anlayıp anlamadığınızı kontrol etmeniz için sorular içermektedir. Bir soruyu yanıtlamakta zorlanıyorsanız, soruya tıklayın ve yönlendirdiği materyali gözden geçirin.

- [GitHub da nasıl yeni bir depo açarız ?](#new-github-repo)
- [GitHub dan bilgisayarınıza nasıl depo kopyalarsınız ?](#github-to-local)
- [Bağlantınızın varsayılan adı nedir ?](#default-remote)
- [`git push origin main` komutundaki `origin` komutunu açıklayın.](#origin-push)
- [`git push origin main` komutundaki  `main` komutunu açıklayın.](#main-push)
- [Git'in kullandığı iki aşamalı dosya kaydetme sistemini açıklayın.](#two-stages)
- [Bulunduğunuz depo'nun durumuna nasıl bakarsınız ?](#git-status)
- [Git'te hazırlanma(staging) bölgesine nasıl dosya eklersiniz?](#git-add)
- [Hazırlanma(staging) bölgesindeki dosyaları nasıl işleyip(commit) açıklayıcı bir mesaj eklersiniz ?](#git-commit)
- [GitHub daki deponuza değişiklikleri nasıl yüklersiniz(push)?](#git-push)
- [İşlem(commit) geçmişinize nasıl bakarsınız ?](#git-log)

### Ekstra Kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

- [Sıfırdan Git ve GitHub kursu](https://www.youtube.com/watch?v=apGV9Kg7ics) - by Kunal Kushwaha

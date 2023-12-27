---
title: 'Kurulumlar'
---

### Giriş

İşletim sistemi olarak zaten **MacOS**, **Ubuntu** veya [Ubuntu'nun resmi bir dağıtımını](https://wiki.ubuntu.com/UbuntuFlavors) kullanıyorsanız ve tarayıcı olarak **Google Chrome** yüklüyse, bu dersi atlayabilirsiniz. Aksi takdirde, bu bölümü görüntülemek için aşağıda kullanmak istediğiniz yöntemin solundaki küçük oka tıklayın ve ardından kurulum talimatlarını izleyin.

<div class="lesson-note" markdown="1">
<h4>Kullandığınız işletim sistemine dikkat edin</h4>
Yalnızca yukarıda belirtilen işletim sistemlerini destekleyebiliyoruz. Talimatlarımız MacOS, Ubuntu ve Ubuntu'nun resmi dağıtımlarıyla test edilmiştir. Ubuntu tabanlı bir işletim sistemi kurmanızı önermiyoruz (Mint, Pop!_OS, ElementaryOS, vb. gibi).
</div>

### 1: İşletim Sistemi(OS) kurulumu

#### ÖNEMLİ

Bu müfredat yalnızca bir dizüstü bilgisayar, masaüstü bilgisayar veya desteklenen Chromebook kullanımını destekler. RaspberryPi veya başka bir cihaz üzerinde bir geliştirme ortamı kurmanıza yardımcı olamayız. İşletim sistemi olarak zaten **MacOS**, **Ubuntu** veya [Ubuntu'nun resmi bir dağıtımı](https://wiki.ubuntu.com/UbuntuFlavors) kullanıyorsanız, bu talimat setlerinden yalnızca birini izlemeniz veya hiçbirini izlememeniz gerekir.

Kurulum yönteminizi aşağıdan seçiniz:

<details markdown="block">
<summary class="dropDown-header">Sanal Makine (Önerilen) </summary>

Bir Sanal Makine (VM) kurmak, web geliştirme için bir ortam oluşturmaya başlamanın en kolay ve en güvenilir yoludur. Sanal Makine, mevcut İşletim Sisteminizin (OS), Windows gibi, içinde çalışan komple bir bilgisayar emülasyonudur. Sanal makinenin en büyük dezavantajı, aynı anda iki bilgisayar çalıştırdığınız için yavaş olabilmesidir. Performansını artırmak için birkaç şey yapacağız.

### Adım 1: VirtualBox ve Xubuntu'yu indirme

Bir sanal makine kurmak basit bir işlemdir. Bu kılavuz, sanal makineyi oluşturmak ve çalıştırmak için Oracle'ın VirtualBox programını kullanır. Bu program açık kaynaklı, ücretsiz ve basittir. Daha ne isteyebilirsiniz ki? Şimdi, her şeyin indirildiğinden ve kurulum için hazır olduğundan emin olalım.

#### ÖNEMLİ

Bu talimatları tamamladıktan sonra, **tamamen VM'de çalışmanız beklenmektedir.** Pencereyi büyütün, varsa daha fazla sanal monitör ekleyin, masaüstünün sol üst köşesindeki **Whisker Menu** <img src="https://cdn.statically.io/gh/TheOdinProject/curriculum/96d534641514fe4d62aabe2919fac3c52cb286e7/foundations/installations/installations/imgs/00_whisker_icon.png" alt="The blue-white rodent Whisker Menu Icon" style={{"display":"inline","margin":"auto"}} /> içindeki internet tarayıcısını çalıştırın. Odin Project üzerinde çalışırken sanal makine dışında hiçbir şey kullanmamalısınız. VM'yi bir süre kullandıktan sonra alıştığınızı düşünüyorsanız veya deneyiminizi geliştirmek istiyorsanız, aşağıda talimatları bulunan Ubuntu'yu dual boot yapmanızı öneririz.

#### Adım 1.1: VirtualBox'u indirme

[Buraya tıklayın](https://www.virtualbox.org/wiki/Downloads) ve Windows bilgisayarlar için VirtualBox'ı indirin.

#### Adım 1.2: Xubuntu'yu indirme

Piyasada binlerce Linux dağıtımı var, ancak Xubuntu şüphesiz en popüler ve kullanıcı dostu olanlardan biri. Bir sanal makineye Linux kurarken, [Xubuntu 22.04'ü indirmenizi](https://mirror.us.leaseweb.net/ubuntu-cdimage/xubuntu/releases/22.04/release/) öneririz. Burada listelenen birkaç dosya var, `.iso` ile biteni indirin. Xubuntu, Ubuntu ile aynı temel yazılımı kullanır ancak daha az bilgisayar kaynağı gerektiren bir masaüstü ortamına sahiptir ve bu nedenle sanal makineler için idealdir. İndirme hızını yavaş bulursanız, daha önce bağlantısı verilen bir ABD linki olduğundan [farklı bir link kullanmayı](https://xubuntu.org/release/22-04/#show-all) deneyin. Eğer indirme sayfasına ulaşırsanız ve hangi sürümü seçeceğinizden emin değilseniz, en son Uzun Süreli Destek (LTS) sürümünü seçmeniz önerilir (yazının yazıldığı zaman 22.04). Daha yeni bir LTS olmayan sürümünü seçme düşüncesiyle oyalanabilirsiniz, ancak LTS sürümleri, 5 yıla kadar garanti edilen destek avantajına sahiptir, bu da onları daha güvenli, stabil ve dolayısıyla güvenilir yapar.

### Adım 2: VirtualBox'ı yükleme ve Xubuntu'yu kurma

#### Adım 2.1: VirtualBox'ı yükleme

VirtualBox'ı kurmak çok basittir. Çok fazla teknik bilgi gerektirmez ve Windows bilgisayarınıza herhangi bir program yüklemekle aynı işlemdir. İndirilen VirtualBox dosyasına çift tıkladığınızda yükleme işlemi başlayacaktır. Microsoft Visual C++ 2019 Redistributable Package'ına ihtiyaç duyduğunuzla ilgili bir hata alırsanız, onu [resmi Microsoft Learn sayfasında](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) bulabilirsiniz. Büyük olasılıkla `X64` mimarisine sahip sürümü istiyorsunuz (bu 64 bit anlamına gelir). Onu indirin ve kurun, ardından VirtualBox'ı tekrar kurmayı deneyin.

Kurulum sırasında size çeşitli seçenekler sunulacaktır. İhtiyacınız olmadığı için Python Desteğini ok işaretli sürücü simgesine tıklayarak ve **Entire feature will be unavailable** seçeneğini seçerek devre dışı bırakmanızı öneririz:

   ![The Python option is at the bottom of the list](https://cdn.statically.io/gh/TheOdinProject/curriculum/96d534641514fe4d62aabe2919fac3c52cb286e7/foundations/installations/installations/imgs/01_turn_off_python.png)

Kapatıldıktan sonra kurulum pencereniz bu şekilde görünmelidir:

   ![You want the Python option to have a scarlet "X" on it](https://cdn.statically.io/gh/TheOdinProject/curriculum/96d534641514fe4d62aabe2919fac3c52cb286e7/foundations/installations/installations/imgs/02_c_install.png)

Uygulamayı `C:` sürücüsüne yüklediğinizden emin olun, aksi takdirde hata verme eğilimi vardır. Sanal makinenin kendisi herhangi bir yere kurulabilir ancak buna yakında değineceğiz.
Yazılım yüklenirken ilerleme çubuğu takılmış gibi görünebilir, sadece bitmesini bekleyin.

#### Adım 2.2: VirtualBox'ı Xubuntu için hazırlama

Artık VirtualBox'ı kurduğunuza göre, programı başlatın. Açıldıktan sonra başlangıç ekranını görmelisiniz.

   ![The VirtualBox start screen](https://cdn.statically.io/gh/TheOdinProject/curriculum/96d534641514fe4d62aabe2919fac3c52cb286e7/foundations/installations/installations/imgs/03_start_screen.png)

Sanal bir işletim sistemi oluşturmak için **New** düğmesine tıklayın. Buna **Xubuntu** adını verin, sanal makinenin varsayılan `C:` konumundan başka bir yere kurulmasını istiyorsanız, bunu **Folder** seçeneğinde uygun şekilde değiştirin. Bu, sanal diskinizin bulunacağı yerdir, bu nedenle bunun için en az 30 GB'ınız olduğundan emin olun. **ISO Image** seçeneğinde **Other** seçeneğini seçin ve bilgisayarınızda `.iso` dosyasını bulmanız için bir pencere açılacaktır. Dosya büyük olasılıkla `İndirilenler` klasöründedir. **Skip Unattended Installation** seçeneğini olduğu gibi bırakın.

   ![Half of the options being greyed out is normal. Don't worry about it.](https://cdn.statically.io/gh/TheOdinProject/curriculum/96d534641514fe4d62aabe2919fac3c52cb286e7/foundations/installations/installations/imgs/04_install_start.png)

**Next** tuşuna basarak devam edin ve sonraki adımları izleyin:

#### Adım 2.2.1: Gözetimsiz konuk işletim sistemi(OS) kurulumu

Şimdi buna benzer bir pencere görmelisiniz:

   ![No need to worry about the Product Key.](https://cdn.statically.io/gh/TheOdinProject/curriculum/96d534641514fe4d62aabe2919fac3c52cb286e7/foundations/installations/installations/imgs/05_unattended_install.png)

**Guest Additions** ve **Install in Background** seçeneklerini işaretleyiniz ve ayrıca **Username** ve **Password** alanlarınızı istediğiniz gibi değiştiriniz. Varsayılan parolayı değiştirmeyi unutursanız, parola `changeme` olacaktır. **Guest Additions ISO**, **Hostname** ve **Domain Name** alanlarını olduğu gibi bırakın. **Next** tuşuna basarak devam edin.

#### Adım 2.2.2: Donanım

   ![You might be tempted to give your VM more than 2 processors. Don't.](https://cdn.statically.io/gh/TheOdinProject/curriculum/96d534641514fe4d62aabe2919fac3c52cb286e7/foundations/installations/installations/imgs/06_hardware.png)

Kurulumun **Hardware** bölümünde **Base Memory** değerini en az 2048 MB veya mümkünse daha fazlasına ayarlayınız. Üst limit toplam RAM'inizin yarısıdır ancak önerdiğimiz ayarlarla 4096 MB size sorunsuz bir deneyim sağlayacaktır.

Örneğin, 8 GB (8192 MB) RAM'iniz varsa, sanal makinenizin işletim sistemine 4096 MB'a kadar (1024 MB 1 GB eder) ayırabilirsiniz. Ne kadar RAM'iniz olduğunu bilmiyorsanız, bunu nasıl bulacağınızı öğrenmek için [lütfen bu Google sorgusunu çalıştırın](https://www.google.com/search?q=how+to+find+how+much+ram+you+have). Sanal makineniz biraz yavaş çalışıyorsa, daha fazla bellek ayırmayı deneyin!


<div class="lesson-note lesson-note--tip" markdown="1">

GigaBaytı MegaBayta çevirirken zorlanıyor musunuz? 1 GB RAM 1024 MB'a eşittir. Bu yüzden, <b>8 GB = 8 x 1024 = 8192 MB</b> diyebiliriz.

</div>

**Processors** seçeneği için değer 2'de olmalı ve daha fazla olmamalıdır. **Enable EFI (special OSes only)** seçeneğini olduğu gibi bırakın, yani **işaretli değil**, ve devam etmek için **Next** seçeneğine tıklayın.

#### Adım 2.2.3: Sanal sabit disk

   ![Don't Pre-allocate Full Size.](https://cdn.statically.io/gh/TheOdinProject/curriculum/96d534641514fe4d62aabe2919fac3c52cb286e7/foundations/installations/installations/imgs/07_virtual_hard_disk.png)

Şimdi, **Disk Size** dışında tüm ayarları olduğu gibi bırakınız, sanal makinenize **en az 30GB** alan vermenizi öneririz. Bu diskin sanal makine oluşturma işleminin ilk adımında belirttiğiniz klasörde oluşturulacağını hatırlatırız, ancak yine de gerekirse disk ileride taşınabilir ve yeniden boyutlandırılabilir.

#### Adım 2.2.4: Katılımsız kuruluma başlama

**Summary** sayfasına yönlendirilmek için **Next** seçeneğine tıklayın, bu sayfada gözetimsiz kurulum sürecini başlatmak için **Finish** seçeneğine tıklamanız yeterlidir. Bunun en güzel yanı nedir? İşletim sistemini ve GuestAdditions'ı size bir şey sormadan kendi başına yükler! Sadece kendi işini yapmasına izin verin, **Preview** bölümünde bunun gibi bir giriş ekranı gördüğünüzde işlemin bittiğini anlayacaksınız:

   ![The Preview section is in the top right of VirtualBox window.](https://cdn.statically.io/gh/TheOdinProject/curriculum/96d534641514fe4d62aabe2919fac3c52cb286e7/foundations/installations/installations/imgs/08_preview_login.png)

Sadece **Show** adlı yeşil oka tıklayın ve bir sanal makine penceresi ve giriş ekranı ile karşılaşacaksınız. Kurulum işlemi sırasında belirlediğiniz parola ile oturum açın ve yapmamız gereken azıcık bir yapılandırma ayarı kaldı.

**Finish'e** tıkladıktan sonra buna benzer bir hata almanız mümkündür:

   ![The error shows up on the right side of the VirtualBox window and can be a little differently worded.](https://cdn.statically.io/gh/TheOdinProject/curriculum/96d534641514fe4d62aabe2919fac3c52cb286e7/foundations/installations/installations/imgs/09_virtualization_error.png)

Bu, [bilgisayarınızın BIOS/UEFI ayarlarında sanallaştırmayı etkinleştirmeniz](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/virtualization_deployment_and_administration_guide/sect-troubleshooting-enabling_intel_vt_x_and_amd_v_virtualization_hardware_extensions_in_bios) gerektiği anlamına gelir. [Alternatif talimat seti](https://2nwiki.2n.cz/pages/viewpage.action?pageId=75202968). Eğer AMD CPU'nuz varsa muhtemelen aktifleştirmek için `SVM` adında bir şey arıyorsunuzdur, Intel CPU'lar içinse bu ayar `Intel Virtualization Technology'dir`.  Aldığınız hata, bulmanız gereken ayarı söylemelidir. Bunu hallettikten sonra, makineyi **Başlatın** ve akışına bırakın, bir giriş ekranı gördüğünüzde işlemin bittiğini anlayacaksınız:

   ![You can already make your VM full screen or just maximize the window.](https://cdn.statically.io/gh/TheOdinProject/curriculum/96d534641514fe4d62aabe2919fac3c52cb286e7/foundations/installations/installations/imgs/10_login_screen.png)

### Adım 3: Doğru sudo izinlerini ayarlama

Katılımsız kurulumun VirtualBox tarafından yapılandırılma şekli nedeniyle, hesabınız uygun `sudo` izinlerine sahip değildir. Bunları Windows makinenizdeki `Yönetici olarak çalıştır` ile eşdeğer olarak düşünün, bunları düzene sokmanın neden önemli olacağını tahmin edebilirsiniz.

#### Adım 3.1: Users and Group'a gidiş

İlk olarak, pencerenizin sol üst köşesindeki <img src="https://cdn.statically.io/gh/TheOdinProject/curriculum/96d534641514fe4d62aabe2919fac3c52cb286e7/foundations/installations/installations/imgs/00_whisker_icon.png" alt="The blue-white rodent Whisker Menu Icon" style={{"display":"inline","margin":"auto"}} /> simgesine tıklayın, ardından `Users` yazın ve `Users and Groups'u` göreceksiniz. Üzerine tıklayın.

   ![It should be the top option you see. It is possible that due to localization it'll be called differently - try using the term in your language then.](https://cdn.statically.io/gh/TheOdinProject/curriculum/96d534641514fe4d62aabe2919fac3c52cb286e7/foundations/installations/installations/imgs/11_users_and_groups.png)

#### Adım 3.2: Groups'u yönetme

Karşınıza gelen pencerede **Manage Groups** seçeneğine tıklayınız, ardından listede bir yere tıklayın ve klavyenizden `sudo` yazın. Bu sizi resimdeki gibi `sudo` girdisine getirecektir:

   ![You will find the search functionality like this in many corners of Xubuntu.](https://cdn.statically.io/gh/TheOdinProject/curriculum/96d534641514fe4d62aabe2919fac3c52cb286e7/foundations/installations/installations/imgs/12_sudo_group.png)

#### Adım 3.2: Kendini sudo'ya Ekleme

`sudo` seçiliyken **Properties** seçeneğine tıklayın ve açılan pencerede kullanıcı adınızı aşağıdaki gibi işaretleyin:

   ![No need to touch anything else.](https://cdn.statically.io/gh/TheOdinProject/curriculum/96d534641514fe4d62aabe2919fac3c52cb286e7/foundations/installations/installations/imgs/13_sudo_properties.png)

Ve ardından **OK**'a tıklayın. Bir parola, giriş yaparken kullandığınız parola ile aynı, istemiyle karşılaşacaksınız.

#### Adım 3.3: Sanal makinenizi yeniden başlatma

Tüm bunlar tamamlandığına göre, bu pencereleri kapatabilir ve sanal makinenizi yeniden başlatabilirsiniz. Klavyede <kbd>CTRL + ALT + T</kbd> yaparak `Terminal` penceresi açabilirsiniz ve terminalde `reboot` yazın ardından komutu çalıştırmak için <kbd>Enter'a</kbd> basın. Alternatif olarak, <img src="https://cdn.statically.io/gh/TheOdinProject/curriculum/96d534641514fe4d62aabe2919fac3c52cb286e7/foundations/installations/installations/imgs/00_whisker_icon.png" alt="The blue-white rodent Whisker Menu Icon" style={{"display":"inline","margin":"auto"}} /> ikonuna tıklayabilirsiniz, ardından sağ alttaki güç simgesine tıklayın ve **Restart** seçeneğini seçin.

   ![You might want to take note of other options that you see in this menu.](https://cdn.statically.io/gh/TheOdinProject/curriculum/96d534641514fe4d62aabe2919fac3c52cb286e7/foundations/installations/installations/imgs/14_logout.png)

   ![Not the most exciting of menus, but take note of the Shut Down option.](https://cdn.statically.io/gh/TheOdinProject/curriculum/96d534641514fe4d62aabe2919fac3c52cb286e7/foundations/installations/installations/imgs/15_restart.png)

#### Adım 3.4: Yeni kazandığınız sudo ayrıcalıklarını test etme

Artık `sudo'ya` erişiminiz olduğuna göre, bunu Xubuntu'yu `Terminal` üzerinden güncellemek için kullanabiliriz. Terminali açın ve aşağıdaki komutları birbiri ardına kullanın:

~~~bash
sudo apt update
sudo apt upgrade
~~~

İlk komutu kullandıktan sonra parolanız sorulacaktır, parolanızı yazın ve <kbd>Enter'a</kbd> basarak terminalinize parolayı iletin. Ne yazdığınıza dair görsel bir geri bildirim olmayacaktır, ancak gerçekten yazıyorsunuz.

Bir süre `sudo apt upgrade` çalıştıktan sonra terminalde bir şeyler yüklemek isteyip istemediğiniz sorulacaktır, makinenizi güncellemek için bunları onaylayın. Herhangi bir sorun yaşarsanız, [Discord sunucumuza](https://discord.gg/V75WSQG) gelmekten ve `#virtualbox-help` kanalında yardım istemekten çekinmeyin.

### Adım 4: Yeni sanal makinenizi anlama

İşte sanal ortamda çalışmaya başlamanıza yardımcı olacak bazı ipuçları:

-   Sanal makine ayarlarınızda araç çubuğunu etkinleştirin. Burada, özellikle tam ekran veya çoklu ekranlarla ilgili olanlar olmak üzere, oynamak isteyebileceğiniz yararlı seçenekler vardır. Bunu yapmak için **Settings** seçeneğine tıklayın ve ardından **User Interface'e** gidin ve son olarak **Show at Top of Screen** seçeneğini işaretleyin.
    ![It's a good idea to look around the settings overall to get a feel of what's possible.](https://cdn.statically.io/gh/TheOdinProject/curriculum/96d534641514fe4d62aabe2919fac3c52cb286e7/foundations/installations/installations/imgs/16_toolbar.png)
-   Tüm çalışmalarınız sanal makinede gerçekleşmelidir. Metin düzenleyiciniz, dil ortamlarınız ve çeşitli araçlar dahil olmak üzere kodlama için ihtiyacınız olan her şeyi sanal makineye yükleyeceksiniz. Sanal makinenizin içindeki Xubuntu, önceden yüklenmiş bir web tarayıcısı ile birlikte gelir, ancak kısa bir süre sonra Chrome'u yükleyeceğiz.
-   Sanal makinenize yazılım yüklemek için, Xubuntu sanal makinesinin içinden Linux (Ubuntu) kurulum talimatlarını takip edeceksiniz.
-   Discord kanalımızda yardım isterken ekran görüntüsü almanız gerekebilir, nerede kullandığınıza bağlı olarak nasıl yapacağınız aşağıda açıklanmıştır:
    -   **Sanal Makinenin içinde:** Ekranınızın bir kısmının ekran görüntüsünü almak için <kbd>Shift + PrtSrc</kbd> tuş kombinasyonunu kullanabilirsiniz. Alternatif olarak, **Whisker Menu'ye** tıklayabilir ve **Screenshot** yazabilirsiniz. Burada tüm ekranınızın, bulunduğunuz pencerenin ekran görüntüsünü almayı veya yakalamak için belirli bir alanı belirlemeyi seçebilirsiniz.
    -   **Ana sisteminizde (Windows):** Ana sistem tuşunun kısayolunu (<kbd>Right Ctrl + E</kbd>) kullanabilir veya tam ekran görüntüsü için **View -> Take Screenshot** seçeneğine tıklayabilirsiniz. Farklı bir yol, sanal makine pencerenizin dışına tıklayarak pencerenin odağından çıkmak ve ardından ekranınızın bir kısmının ekran görüntüsünü almak için standart Windows kısayolu olan <kbd>Windows tuşu + Shift + S</kbd> kombinasyonunu kullanmak olabilir.
-   **Unutmayın:** TOP menüsüyle ilgili yapacağınız tüm geliştirmeler sanal makinede yapılmalıdır.
-   Tam ekrana geçmenizi (**View -> Full-screen Mode**) ve ana işletim sisteminizi (Windows) unutmanızı öneririz. En iyi performans için, sanal makinenizi çalıştırırken ana işletim sisteminizdeki tüm programları kapatın.
-   Sanal makine ayarlarınızın **Display** sekmesine ek monitörler eklediyseniz, sanal makine çalışırken **View -> Virtual Screen 2 -> Enable** seçeneğine tıklayın. Birden fazla monitörü tam ekran çalıştırabilirsiniz, ancak sanal makine daha fazla **Video Belleği** isteyebilir. Zaten daha fazla monitör eklerken arttırmış olmanız gerekir. **Tam ekrana geçmeden önce Sanal Ekranlarınızı pencere modunda açtığınızdan emin olun, aksi takdirde çalışmazlar.** Tam ekrandan çıktıktan sonra ikincil ekranınız kapanabilir. Bu talimatlarla yeniden açabilirsiniz.

#### Sık karşılaşılan sorunlar/sorular:

-   Sanal makineyi başlatmaya çalıştığınızda yalnızca siyah bir ekranla karşılaşırsanız, sanal makineyi kapatın ve `power off'a` tıklayın , **Settings -> Display** seçeneğine tıklayın ve **Enable 3D Acceleration** seçeneğinin İŞARETLENMEDİĞİNDEN ve Video memory'nin **EN AZ 128MB** olarak ayarlandığından emin olun.
-   Yeriniz mi kalmadı? [Discord kanalımızdaki bu talimatlara bakın](https://discord.com/channels/505093832157691914/690588860085960734/1015965403572351047).
-   Dokunmatik ekran mı kullanıyorsunuz? VirtualBox'ta dokunmatik ekranın nasıl etkinleştirileceğine dair [işte bir video](https://www.youtube.com/watch?v=hW-iyHHoDy4).
-   **Sanal Makine için performans ipuçları**:
    -   Sanal makineyi çalıştırırken Windows'taki etkinliğinizi en aza indirin. Dizüstü bilgisayara sahipseniz muhtemelen şarja takılı kullanınız.
    -   Processors ayarının yalnızca 2 olarak ayarlandığından ve sanal makinenize verdiğiniz belleğin toplam RAM'inizin en fazla yarısı ve en az 2GB olduğundan emin olun. Eğer 2GB ayıramıyorsanız, dual boot kullanın.
    -   Videolar sanal makinede takılıyorsa, Video Memory ayarını mümkün olan en üst düzeye çıkardığınızdan emin olun veya alternatif olarak makineniz kaldırabiliyorsa Windows'unuzda oynatın. Etkinleştirdiyseniz 3D Acceleration ayarını devre dışı bırakın.
    -   Sanal makine pencerenizin sağ alt köşesindeki <img src="https://cdn.statically.io/gh/TheOdinProject/curriculum/96d534641514fe4d62aabe2919fac3c52cb286e7/foundations/installations/installations/imgs/17_turtle.png" alt="Icon with a green turtle and a V" style={{"display":"inline","margin":"auto"}} /> simgesine dikkat edin, eğer varsa, burada [VirtualBox forumunda ondan nasıl kurtulacağınıza dair bir başlık var](https://forums.virtualbox.org/viewtopic.php?f=25&t=99390). Bunun yerine <img src="https://cdn.statically.io/gh/TheOdinProject/curriculum/96d534641514fe4d62aabe2919fac3c52cb286e7/foundations/installations/installations/imgs/18_vboxV.png" alt="Icon of a chip with a V" style={{"display":"inline","margin":"auto"}} /> simgesi de bulunabilir. Eğer sağ altta <img src="https://cdn.statically.io/gh/TheOdinProject/curriculum/96d534641514fe4d62aabe2919fac3c52cb286e7/foundations/installations/installations/imgs/17_turtle.png" alt="Icon with a green turtle and a V" style={{"display":"inline","margin":"auto"}} /> veya <img src="https://cdn.statically.io/gh/TheOdinProject/curriculum/96d534641514fe4d62aabe2919fac3c52cb286e7/foundations/installations/installations/imgs/18_vboxV.png" alt="Icon of a chip with a V" style={{"display":"inline","margin":"auto"}} /> görmüyorsanız, bunları görmek için tam ekran modundan çıkmanız gerekir.
  -   Performansınız hala yetersizse, dual boot yapın çünkü bu, tüm bilgisayar kaynaklarını yalnızca bir işletim sistemi için kullandığınızı garanti edecek ve böylece deneyiminizi önemli ölçüde arttıracaktır.
-   Farenizin kaydırma tekerleği Google Chrome'da garip davranıyorsa ve sanal makinenizin istendiği gibi çalıştığından emin olmak için sanal makine performans ipuçlarını gözden geçirdiyseniz, `imwheel'e` bakın: [daha fazla bilgi için bu AskUbuntu talimatlarına bakın](https://askubuntu.com/a/621140). VSCode'u yüklediyseniz, `gedit` yerine bu talimatları kullanın, aksi takdirde `sudo apt install gedit` komutuyla gedit'i yükleyin. Eğer gedit'i `snap` ile yüklerseniz, dosyayı kaydetmenize izin vermez. Her açılışta `imwheel`in çalıştığından emin olmak için whisker menüsüne tıklamalısınız <img src="https://cdn.statically.io/gh/TheOdinProject/curriculum/96d534641514fe4d62aabe2919fac3c52cb286e7/foundations/installations/installations/imgs/00_whisker_icon.png" alt="The blue-white rodent Whisker Menu Icon" style={{"display":"inline","margin":"auto"}} /> , ardından `Session` yazın ve `Session and Startup'a` tıklayın. `Application Autostart'ı` göreceksiniz ve ona gidin, sonra da `Add'e` tıklayın. `Name` değeri için `imwheel` ve `Command` değeri için `imwheel -b "4 5` girin. `OK'e` tıklayın ve her şey hazır olmalı.

### Adım 5: Güvenli bir şekilde sanal makinenizi kapatma

Günlük kullandığınız bilgisayarın fişini çekmezsiniz, değil mi? Neden aynı şeyi sanal bilgisayarınız için yapasınız ki? X düğmesine tıklayıp sanal bilgisayarınızı kapattığınızda, dosyalarınıza da elveda diyebilirsiniz. Bu bölümde, sanal bilgisayarınızı kapatmanın üç yolunu öğreneceksiniz.

#### 1. Seçenek - Kullanıcı arayüzüyle sanal makine içinden kapatma

**Whisker Menu** <img src="https://cdn.statically.io/gh/TheOdinProject/curriculum/96d534641514fe4d62aabe2919fac3c52cb286e7/foundations/installations/installations/imgs/00_whisker_icon.png" alt="The blue-white rodent Whisker Menu Icon" style={{"display":"inline","margin":"auto"}} /> üzerine tıkladığınızda ve güç simgesine tıkladığınızda, oturumunuzu nasıl değiştireceğiniz konusunda **Shut Down** seçeneği de dahil olmak üzere çeşitli seçenekler sunulur. Evet, daha önce **Restart** için kullandığınız yerle aynı yer!

#### 2. Seçenek - Terminal ile sanal makine içinden kapatma

Bu durumda basitçe `poweroff` komutunu yazmanız yeterli olacaktır. Sisteminiz hemen kapanacaktır.

#### 3. Seçenek - Sanal makinenin dışından kapatma

Güvenli bir şekilde kapatma hedefine ulaşmanın son yolu sanal makine arayüzünü kullanmaktır. File sekmesine tıklamak ve kapat düğmesine (güç simgeli) basmak **Close Virtual Machine** başlıklı bir açılır pencere getirecektir. Bu açılır pencere **Save the machine state**, **Send the shutdown signal** veya **Power off the machine** seçeneklerinden hangisini istediğinizi sorar.

![VM File Menu](https://cdn.statically.io/gh/TheOdinProject/curriculum/96d534641514fe4d62aabe2919fac3c52cb286e7/foundations/installations/installations/imgs/19_vbox_close.png)

![Close Virtual Machine Menu](https://cdn.statically.io/gh/TheOdinProject/curriculum/96d534641514fe4d62aabe2919fac3c52cb286e7/foundations/installations/installations/imgs/20_send_shutdown.png)

Güvende olmak için **Send the shutdown signal'ı** seçin ve OK'a tıklayın. Bu, sanal makinenizi güvenli bir şekilde kapatacaktır ve dosyalarınız bozulmayacaktır.

</details>

<details markdown="block">
<summary class="dropDown-header">Ubuntu/Windows Dual-Boot </summary>

### Başlamadan önce bu bölümün tamamını okuyun

Dual boot, bilgisayarınızda basit bir yeniden başlatma ile arasında geçiş yapabileceğiniz iki işletim sistemi sağlar. Siz açıkça söylemediğiniz sürece bir işletim sistemi diğerini değiştirmeyecektir. Devam etmeden önce, önemli verilerinizi yedeklediğinizden ve yardım istemek için bir yolunuz olduğundan emin olun. Kaybolursanız, korkarsanız veya takılırsanız, [Odin Teknik Destek sohbet odasında](https://discordapp.com/channels/505093832157691914/514204667245363200) yardıma hazırız. Gelin ve "Merhaba" deyin!

### Adım 1: Ubuntu'yu indirme

Öncelikle, bilgisayarınıza kurmak istediğiniz Ubuntu sürümünü indirmeniz gerekir. Ubuntu'nun farklı sürümleri ("dağıtımları") vardır, ancak biz standart masaüstü [Ubuntu](https://releases.ubuntu.com/22.04/) sürümünü öneriyoruz. Eğer daha eski bir bilgisayar kullanıyorsanız, [Xubuntu](https://xubuntu.org/release/22-04/)'yu öneriyoruz. [Ubuntu](https://releases.ubuntu.com/22.04/) veya [Xubuntu](https://xubuntu.org/release/22-04/)'nun 64-bit sürümünü indirdiğinizden emin olun.

### Adım 2: Önyüklenebilir flash bellek oluşturma

Ardından, Ubuntu'yu sabit sürücünüze yükleyebilmeniz için önyüklenebilir bir flash bellek oluşturmak üzere [bu kılavuzu](https://itsfoss.com/create-live-usb-of-ubuntu-in-windows/) izleyin. Eğer flash belleğiniz yoksa CD ya da DVD de kullanabilirsiniz.

Not: İsterseniz bu yöntemi [farklı Ubuntu dağıtımlarını](https://www.ubuntu.com/download/flavours) denemek için kullanabilirsiniz. Bu imajlar, kurulum yapmadan farklı dağıtımları denemenize olanak tanır. İşletim sistemini bir flash bellekten çalıştırmanın işletim sisteminin yavaş çalışmasına neden olacağını ve flash belleğinizin ömrünü azaltabileceğini unutmayın.

### Adım 3: Ubuntu'yu yükleme

#### Adım 3.1: Flash bellekten önyükleme

İlk olarak, Ubuntu'yu flash sürücünüzden önyüklemeniz gerekir. Tam olarak ne yapmanız gerektiği değişebilir, ancak genel olarak aşağıdakileri yapmanız gerekecektir:

-  Flash belleği bilgisayara takın.
-  Bilgisayarı yeniden başlatın.
-  Sabit disk yerine flash belleği önyüklenebilir aygıt olarak seçin.

Örneğin, bir Dell bilgisayarda boot menüsünü açmak için, flash sürücüyü takmanız, bilgisayarı yeniden başlatmanız ve bilgisayar ilk açılırken F12 tuşuna basmanız gerekir. Buradan, flash bellekten önyükleme yapmayı seçebilirsiniz. Sizin bilgisayarınızda yöntem tam olarak aynı olmayabilir, ancak Google bunu çözmenize yardımcı olabilir.

#### Adım 3.2: Ubuntu'yu yükleme

Flash bellekteki Ubuntu sürümünü test etmek isterseniz, 'Try me' seçeneğine tıklayın. Beğendiğiniz bir Ubuntu çeşidi bulduğunuzda, 'Install'a tıklayın ve bir sonraki adıma geçin.

Ubuntu'yu yüklemek, bilgisayarınızda asıl değişikliklerin olmaya başladığı yerdir. Varsayılan ayarlar çoğunlukla mükemmeldir, ancak **"Install Ubuntu alongside Windows"** seçeneğini seçtiğinizden ve Ubuntu için ayrılan disk alanını 30 GB'a (veya yapabiliyorsanız daha fazlasına) değiştirdiğinizden emin olun.

Adım adım yönergeler için lütfen Dave's RoboShack'in [kurulum kılavuzunu](https://medium.com/linuxforeveryone/how-to-install-ubuntu-20-04-and-dual-boot-alongside-windows-10-323a85271a73) takip edin.

### Intel RST (Hızlı depolama teknolojisi)

Ubuntu'yu yüklemeye çalışırken **Intel RST'yi** devre dışı bırakmanızı isteyen bir hatayla karşılaşırsanız, [Stack Exchange'deki bu yönergeleri](https://askubuntu.com/questions/1233623/workaround-to-install-ubuntu-20-04-with-intel-rst-systems/1233644#1233644) ve de özellikle **Choice #2'yi** takip edin. Bu işlem, anakart depolama sürücünüzü Ubuntu ile çalışacak şekilde değiştirdikten sonra Windows'u güvenli modda önyükleme yapmaya zorlar. Windows önyükleme yaptıktan sonra, zorunlu güvenli mod devre dışı bırakılır ve Ubuntu'yu bir kez daha yüklemeyi deneyebilirsiniz.

</details>

<details markdown="block">
<summary class="dropDown-header">ChromeOS/ChromeOS Flex </summary>

Yakın zamanda eklenen Linux terminali çalıştırabilme özelliği ile ChromeOS platformu, yerel Linux uygulamalarının yüklenebilmesine açılmıştır. Odin Project'i tamamlamak için Chromebook'unuzu kullanmak istiyorsanız, birkaç gereksinimi karşıladığınızdan emin olmanız gerekir:

1.  Desteklenen bir Chromebook'unuz olmalı:
    -   [Resmi Chromebook'lar](https://www.chromium.org/chromium-os/chrome-os-systems-supporting-linux)
    -   [ChromeOS Flex Chromebook'lar](https://support.google.com/chromeosflex/answer/11513094)
2.  Linux'u [bu talimatları](https://support.google.com/chromebook/answer/9145439?hl=en) izleyerek kurabilirsiniz

Bu iki gereksinimi de başarıyla karşıladıktan sonra, tüm müfredat boyunca Linux talimatlarını takip edebilirsiniz.

</details>

<details markdown="block">
<summary class="dropDown-header">WSL2</summary>

WSL2'yi kullanmak, Linux kullanmaya başlamanın hızlı ve kolay bir yoludur ve Windows içinden bir Linux dağıtımı çalıştırmanıza olanak tanır. WSL2, Windows 10 sürüm 2004 ve üzeri (Yapı 19041 ve üzeri) ve Windows 11'de kullanılabilir.

<div class="lesson-note" markdown="1">
<h4>WSL2 ve Linux talimatları</h4>
WSL2 tam teşekküllü bir Linux dağıtımı olduğundan, müfredatın Linux hakkında öğrettiği hemen hemen her şey WSL2 için de geçerlidir. Gelecekteki derslerde, işletim sistemine göre farklılık gösteren talimatlar olduğunda, ders WSL2'ye özgü talimatlar içermediği sürece Linux talimatlarını izlemelisiniz.
</div>

### Adım 1: Kurulumlar

#### Adım 1.1: WSL2'nin kurulumu

- PowerShell'i uygulamalarınızda arayarak, en üstteki seçeneğe sağ tıklayarak ve ardından yönetici olarak çalıştır'ı seçerek yönetici modunda açın. Windows Powershell'in cihazınızda değişiklik yapmasına izin vermek isteyip istemediğinizi soran bir istem alabilirsiniz: evet'e tıklayın.
- Aşağıdaki komutu girin

  ```powershell
  wsl --install
  ```
- Birkaç dakika sonra bilgisayarınızı yeniden başlatmanız istenecektir; bunu yapın.
- Bir kullanıcı adı ve parola girmenizi isteyen açık bir Powershell penceresi göreceksiniz. Kullanıcı adınız küçük harfli olmalıdır, ancak bunun dışında size uygun olan herhangi bir şey olabilir. Ayrıca yeni bir parola girmeniz gerekecektir.
- Parolanızı girerken herhangi bir görsel geri bildirim görmediğinizi fark edebilirsiniz. Bu, Linux'ta standart bir güvenlik özelliğidir ve gelecekte parola girmeniz gereken tüm durumlarda da geçerli olacaktır. Şifrenizi yazıp <kbd>Enter</kbd> tuşuna basmanız yeterli.

#### Adım 1.2.1: Windows Terminal'i yükleyin (yalnızca Windows 10)

Windows Terminal, terminalleri daha kolay özelleştirmenize ve çalıştırmanıza olanak tanıyan ve her biri kendi farklı terminallerini çalıştırabilen birden çok sekmeyi destekleyen bir terminal uygulamasıdır.

- Doğrudan yükleme seçeneğini kullanarak [Window's Terminal] (https://learn.microsoft.com/en-us/windows/terminal/install) yükleyin.

#### Adım 1.2.2: WSL2'yi varsayılan olarak ayarlama (İsteğe bağlı)

Bilgisayarınızda düzenli olarak başka terminaller kullanmıyorsanız, Windows Terminal'i açtığınızda WSL2'yi varsayılan terminal programı olarak ayarlamanızı öneririz.

- Uygulamalarınızda terminali arayarak Windows Terminal'i açın.
- Yeni sekme düğmesinin yanındaki açılır menüye tıklayın (pencerelerin en üstünde) ve Ayarlar'ı seçin.
- Yanında bir açılır menü bulunan bir Varsayılan Profil seçeneği görmelisiniz.
- Açılır menüden Ubuntu'yu seçin.
- Sayfanın altındaki kaydet'e tıklayın.

### Adım 2: WSL2'yi Açma

Windows'ta WSL2'yi açmanın üç temel yolu vardır.

- Windows Terminal'i varsayılan olarak bir Ubuntu terminali açacak şekilde ayarladıysanız, terminal uygulamasını açarak yeni bir WSL2 oturumu başlatabilirsiniz.
- Aksi takdirde Windows Terminal'i açabilir, yeni sekme düğmesinin yanındaki açılır menüye (pencerelerin en üstünde) tıklayabilir ve Ubuntu'yu seçebilirsiniz.
- Uygulama arama çubuğunda Ubuntu'yu aratırsanız Ubuntu başlıklı bir uygulama göreceksiniz; yeni bir terminal oturumu başlatmak için bunu açın.

<div class="lesson-note lesson-note--tip" markdown="1">
WSL2'yi Windows Terminal üzerinden açtığınızda, uygulamalarınızda Ubuntu üzerinden bir terminal açmaya kıyasla farklı bir renk şemasına ve farklı bir simgeye sahip bir pencere göreceksiniz. Bunun nedeni Windows Terminal'in gerçek bir Ubuntu terminalinin nasıl göründüğünü taklit etmek amacıyla Ubuntu için varsayılan bir renk şemasıyla birlikte gelmesidir. Bu fark tamamen kozmetiktir ve ikisi arasında pratik bir fark yoktur.
</div>

<div class="lesson-note lesson-note--tip" markdown="1">
WSL2 terminalinizi açarken satırın başında `/mnt/c` görmediğinizden emin olun. mnt/c` WSL2 içinde çalışırken Windows kurulumunuzun bulunduğu yerdir ve burayı karıştırmak istenmeyen sonuçlar doğurabilir.
</div>
</details>

### 2: Google Chrome kurulumu

#### Neden Google Chrome?

Derslerimizde Google Chrome kullanıldığından ve Chrome/Chromium geliştiriciler ve tüketiciler tarafından ezici bir çoğunlukla kullanıldığından, yaptığımız öneriler çok kasıtlıdır.
[Web tarayıcılarının kullanım payına](https://en.wikipedia.org/wiki/Usage_share_of_web_browsers#Summary_tables) bakın ve başkalarının en çok neyi kullandığını görün.

İşletim Sisteminizi seçin:

<details markdown="block">
<summary class="dropDown-header">Linux</summary>

#### 1. Adım: Google Chrome'u indirme

   -   **Terminali** açın
   -   En son **Google Chrome** `.deb` paketini indirmek için aşağıdaki komutu çalıştırın

~~~bash
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
~~~

#### Adım 2: Google Chrome'u yükleme

   -   **Google Chrome** `.deb` paketini yüklemek için terminale aşağıdaki komutu girin

       ~~~bash
       sudo apt install ./google-chrome-stable_current_amd64.deb
       ~~~

   -   Gerekirse şifrenizi girin

<div class="lesson-note lesson-note--tip" markdown="1">

`N: Download is performed unsandboxed (...)` ile başlayan bir uyarı görebilirsiniz. Bu konuda endişelenmenize gerek yok. [Daha fazla bilgi için bu ingilizce reddit gönderisini okuyun.](https://www.reddit.com/r/linux4noobs/comments/ux6cwx/comment/i9x2twx/)

</div>

#### Adım 3: Kurulum Dosyasını silme

~~~bash
rm google-chrome-stable_current_amd64.deb
~~~

#### Adım 4: Google Chrome'u kullanma

Chrome'u iki şekilde başlatabilirsiniz,

   -   Uygulamalar menüsünden **Google Chrome** öğesine tıklayın
   -   **Veya**, terminalde `google-chrome` komutunu çalıştırın

~~~bash
google-chrome
~~~

<div class="lesson-note lesson-note--tip" markdown="1">

Chrome, bu terminali çeşitli mesajları vermek için kullanacak ve diğer komutları çalıştırmanıza izin vermeyecektir. Bu mesajlar için endişelenmeyin. Diğer komutlar için de Chrome'u çalıştırdığınız terminali kullanmak istiyorsanız, `google-chrome &` komutunu kullanın.

</div>

</details>

<details markdown="block">
<summary class="dropDown-header">MacOS</summary>

#### 1. Adım: Google Chrome'u indirme

   -   [Google Chrome indirme sayfasını ziyaret edin](https://www.google.com/chrome/)
   -   **Download Chrome for Mac'e** tıklayın

#### 2. Adım: Google Chrome'u yükleme

   -   **İndirilenler** klasörünü açın
   -   **googlechrome.dmg** dosyasına çift tıklayın
   -   Google Chrome simgesini **Uygulamalar** klasörü simgesine sürükleyin

#### 3. Adım: Kurulum dosyasını silme

   -   **Finder'ı** açın
   -   Kenar çubuğunda Google Chrome'un yanındaki **ok** işaretine tıklayın
   -   **İndirilenler** klasörüne gidin
   -   **googlechrome.dmg** dosyasını çöp kutusuna sürükleyin

#### 4. Adım: Google Chrome'u kullanma

   -   **Uygulamalar** klasörüne gidin
   -   **Google Chrome'a** çift tıklayın

</details>

<details markdown="block">
<summary class="dropDown-header">WSL2</summary>

#### Adım 1: Google Chrome'u indirin

- [Google Chrome indirme sayfasını](https://www.google.com/chrome/) ziyaret edin.
- **Chrome'u İndir** seçeneğine tıklayın.

#### Adım 2: Google Chrome'u yükleyin

- Open the **Downloads** folder.
- Double click the file **ChromeSetup.exe**.

#### Adım 3: Kurulum dosyasını silin

- **Downloads** klasörünü açın.
- **ChromeSetup.exe** dosyasını çöp kutusuna sürükleyin.

#### Adım 4: Google Chrome'u Kullanma

- Uygulamalarınızda **Google Chrome** için arama yapın.
- **Google Chrome'a** çift tıklayın.

</details>

### Ek kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

* Bu dersin henüz ek kaynağı bulunmuyor. Müfredatımıza katkıda bulunarak bu bölümü genişletmemize yardımcı olun.
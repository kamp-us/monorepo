### Giriş

Bir metin düzenleyici, ne tür bir geliştirici olduğunuzdan bağımsız olarak en çok kullanılan geliştirici aracıdır. İyi bir metin düzenleyicisi; gerçek zamanlı kod denetimi, söz dizimi vurgulama ve otomatik biçimlendirme ile daha iyi kod yazmanıza yardımcı olabilir.

### Neden Microsoft Word kullanamıyorum?

Microsoft Word ve Libre-Office Writer gibi zengin metin düzenleyicileri bir makale yazmak için harikadır ancak onları güzel biçimlendirilmiş belgeler oluşturmada iyi yapan özellikler, kod yazmak için uygun kılmamaktadır. Bu zengin metin düzenleyicileriyle oluşturulan bir metin belgesi, dosyaya gömülü metinden daha fazlasına yer verir. Bu dosyalar ayrıca metnin ekranda nasıl görüntüleneceğine dair bilgiler ve belgeye gömülü grafiklerin nasıl görüntüleneceğine dair veriler içerir. Buna karşılık, VSCode ve Sublime gibi yalın metin düzenleyicileri dosyaya herhangi bir ek bilgi kaydetmez. Sadece metni kaydetmek, Ruby'nin yorumlayıcısı gibi diğer programların dosyayı kod olarak okuyup çalıştırmasını sağlar.

### Kod Editörleri

Kod editörlerini özelleşmiş web geliştirme araçları olarak düşünebilirsiniz. Son derece özelleştirilebilirlerdir ve hayatınızı kolaylaştıracak birçok özellik sunarlar. Programınızın neden çalışmadığını anlamak için 2 saat harcadıktan sonra süslü parantezi kapamayı atladığınızı fark etmekten daha kötü bir şey yoktur. Eklentiler, söz dizimi vurgulama, parantez ve süslü parantezlerin otomatik olarak kapatılması ve linting (oto-düzeltme), bir kod editör kullanmanın faydalarından sadece birkaçıdır. Seçebileceğiniz birçok kod editörü var ancak biz Visual Studio Code ile başlamanızı öneririz.

**Visual Studio Code** ya da yaygın olarak kullanılan adıyla VSCode, mükemmel bir ücretsiz kod editörüdür. Olağanüstü eklenti desteğine ve harika bir Git entegrasyonuna sahiptir. VSCode, Odin'in öğrencileri ve moderatörleri arasında en popüler kod editörüdür. Bu nedenle toplulukta destek bulmak kolaydır.

Hangi editörü kullanacağınız genellikle bir tercih meselesidir ancak bu kursun amaçları doğrultusunda VSCode kullandığınızı varsayacağız. Çünkü ücretsizdir, kullanımı kolaydır ve her işletim sisteminde hemen hemen aynı şekilde çalışır. Müfredat için VSCode dışında farklı bir editör kullanıyorsanız yardım alamayacağınızı unutmayın.

Bir hatırlatma olarak, eğer bir **sanal makine** kullanıyorsanız, VSCode'u **sanal makinenize(VM)** kurmalısınız. Ana sisteminize de (mesela ana işletim sisteminiz Windows'a) yükleyebilirsiniz ancak bu kritik aracın sanal makinenizde yüklü olduğundan emin olunuz.

### VSCode Kurulumu

İşletim sisteminizi seçin:

<details markdown="block">
<summary class="dropDown-header">Linux</summary>

#### 1. Adım: VSCode'u İndirme

   - **Terminali** açın
   - En son **VSCode** `.deb` paketini indirmek için aşağıdaki komutu çalıştırın

~~~bash
wget -O code-latest.deb 'https://code.visualstudio.com/sha/download?build=stable&os=linux-deb-x64'
~~~

#### 2. Adım: VSCode'u Yükleme

   - **VSCode** `.deb` paketini yüklemek için aşağıdaki komutu çalıştırın

~~~bash
sudo apt install ./code-latest.deb
~~~

   - İstenirse, şifrenizi girin

   _(__not__: `N: Download is performed unsandboxed (...)` ile başlayan bir uyarı görebilirsiniz. Bu konuda endişelenmenize gerek yok. [Daha fazla bilgi için bu reddit gönderisini okuyun.](https://www.reddit.com/r/linux4noobs/comments/ux6cwx/comment/i9x2twx/))_

#### 3. Adım: Kurulum dosyasını silme

~~~bash
rm code-latest.deb
~~~

#### 4. Adım: VSCode'u Kullanma
   
VSCode'u iki şekilde başlatabilirsiniz,

   - Uygulamalar menüsünden **Visual Studio Code** öğesine tıklayın
   - **Ya da** terminalden `code` komutunu çalıştırın

~~~bash
code
~~~

</details>

<details markdown="block">
<summary class="dropDown-header">MacOS</summary>

#### 1. Adım: VSCode'u İndirme

   - En son VSCode kurulum .zip dosyasını otomatik olarak indirmek için [bu bağlantıya](https://code.visualstudio.com/sha/download?build=stable&os=darwin-universal) tıklayın.

#### 2. Adım: VSCode'u Yükleme

   - **İndirilenler** klasörünü açın
   - **VSCode-darwin-universal.zip** adlı dosyaya çift tıklayın
   - **Visual Studio Code.app** simgesini **Uygulamalar** klasörü simgesine sürükleyin

#### 3. Adım: Kurulum dosyasını silme

   - **Finder'ı** açın
   - **İndirilenler** klasörüne gidin
   - **VSCode-darwin-universal.zip** adlı dosyayı çöp sepetine taşıyın

#### 4. Adım: VSCode'u Kullanma

   - **Uygulamalar** klasörüne gidin
   - **Visual Studio Code'a** çift tıklayın

</details>

### Ödev

<div class="lesson-content__panel" markdown="1">

  1. VSCode'a aşina olmanız zamandan tasarruf etmenizi ve daha üretken olmanızı sağlayacaktır. Bu [Yeni Başlayanlar için VSCode Eğitimi](https://youtu.be/ORrELERGIHs?t=103) videosunu izleyerek, VSCode'un sunduğu tüm özellikler hakkında bir fikir edinebilirsiniz. Videoyla birlikte kod yazmanıza gerek yok, sadece VSCode'un video boyunca nasıl kullanıldığını izleyin.
</div>

### Ek Kaynaklar

Bu alanda ilgili içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

* [VSCode docs](https://code.visualstudio.com/docs), VSCode ile ilgili sorularınız için başvurabileceğiniz harika bir yerdir.
* VSCode kısayolları üzerine olan bu küçük ve kullanışlı [linux kısayolları](https://go.microsoft.com/fwlink/?linkid=832144) ve [macOS kısayolları](https://go.microsoft.com/fwlink/?linkid=832143) PDF'leri, VSCode deneyiminizi daha sorunsuz ve daha verimli hale getirmenize yardımcı olacak harika kaynaklardır.

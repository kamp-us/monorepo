### Giriş

Git, dosyalarınız ve dizinleriniz için **müthiş bir kaydetme düğmesi** gibidir. Git, resmi adıyla bir sürüm kontrol sistemidir.

<span id="text-editor-and-git"></span>Bir metin düzenleyicide yapılan _kaydetme_ işlemi, bir belgedeki tüm sözcükleri tek bir dosya olarak kaydeder. Kopyalarını oluşturmadığınız sürece `makale.doc` gibi, dosyanın yalnızca tek bir kaydı verilir (ve birden fazla kopya yapmayı hatırlamak ve takip etmek zordur):

`makale-taslak1.doc`, `makale-taslak2.doc`, `makale-sonversiyon.doc`

Fakat Git'teki bir _kaydetme işlemi_, dosya ve klasörlerdeki farklılıkları kaydeder VE **her kaydetme işleminin geçmiş kaydını** tutar. Bu çığır açıcı özellik, bir geliştirici olarak projenizin nasıl büyüdüğünü gözden geçirmenize ve geçmişteki dosya durumlarına kolayca bakmanıza veya geri yüklemenize olanak tanır. Bir ağa bağlandıktan sonra Git, projenizi GitHub'a veya Bitbucket, Beanstalk veya GitLab gibi diğer alternatiflere yüklemenize olanak tanır. Bu, projenizi başkalarıyla paylaşmanızı ve işbirliği yapmanızı kolaylaştırır.

Müfredatımız dahilinde **yalnızca** GitHub'ı desteklediğimizi ve alternatiflerin sorunlarını gidermeye yardımcı olmayacağımızı lütfen unutmayın.

<span id="git-local"></span>Git _yerel_ makinenizde çalışırken,<span id="github-remote"></span> GitHub tüm kodlama projeleriniz için web üzerinde uzak bir depolama tesisidir. Bu, Git'i öğrenerek portföyünüzü GitHub'da sergileyebileceğiniz anlamına gelir! Bu gerçekten önemli çünkü neredeyse tüm yazılım geliştirme şirketleri Git kullanmayı modern web geliştiricileri için temel bir beceri olarak görüyor. Bir GitHub portföyüne sahip olmak, gelecekteki potansiyel işverenlere neler yapabileceğinize dair kanıt sağlayacaktır.

Bu derste Git'in tarihçesini, ne olduğunu ve ne işe yaradığını kısaca inceleyeceğiz.

Bir sonraki derste, Git'i kullanmak için temel iş akışının üzerinden geçeceğiz, bu Git'i daha da iyi anlamanızı sağlayacak ve Git'in neden bu kadar yararlı olduğunu gösterecektir.

Son olarak, Git ile gelecekteki projeleriniz için şablon görevi görecek bir proje kuracaksınız.

Şimdiyse, Git'in ne olduğunu ve neden bu kadar güçlü olduğunu öğrenelim!

### Derse genel bakış

Bu bölüm, bu derste öğreneceğiniz konuların genel bir özetini içerir.

- Git ve GitHub'ın ne olduğunu ve ikisi arasındaki farkları açıklayın.
- Git ile bir metin editörü arasındaki farkları, neyi kaydettiklerini ve neyin kaydını tuttuklarının farklarını açıklayın.
- Git'in bireysel bir geliştirici ve geliştiricilerden oluşan bir ekip için neden yararlı olduğunu açıklayın.

### Ödev

<div class="lesson-content__panel" markdown="1">

  1. Yerel, merkezi ve dağıtılmış sürüm kontrol sistemleri arasındaki farkları öğrenmek için [bu ingilizce kitapta sürüm kontrolü hakkındaki](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)  Bölüm 1.1 ila 1.4'ü okuyun.
  1. Git'in ne olduğu ve hem bireysel hem de geliştiricilerden oluşan bir ekibin iş akışını nasıl iyileştirebileceği hakkındaki [bu ingilizce videoyu izleyin](https://www.youtube.com/watch?v=2ReR1YJrNOM).
  1. Git ve GitHub tarihini öğrenmek için [bu ingilizce videoyu izleyin](https://www.youtube.com/watch?v=1h9_cB9mPT8&t=13s) ve ikisinin arasındaki farkı bildiğinizden emin olun. Git, komut satırında kullanılan bir teknoloji iken GitHub ziyaret edebileceğiniz bir [web sitesidir](https://github.com).
  1. Git'i henüz yüklemediyseniz, [Git Kurulumu dersini](kamp.us/odin/temel_bilgiler/git_kurmak) ziyaret edin.
  1. Tüm derslerin saklandığı The Odin Project'in kendi [GitHub reposuna](https://github.com/TheOdinProject/curriculum) bir göz atın. Oradayken, tüm [katkıda bulunanlarımıza](https://github.com/TheOdinProject/curriculum/graphs/contributors) bakın ve Git'in tüm işbirlikçilerin çabalarını nasıl kaydettiğini ve GitHub'un bunu nasıl görselleştirdiğine dikkat edin.
</div>

### Bilgi kontrolü

Bu bölüm, dersi anlayıp anlamadığınızı kontrol etmeniz için sorular içermektedir. Bir soruyu yanıtlamakta zorlanıyorsanız, soruya tıklayın ve yönlendirdiği materyali gözden geçirin.

- <a class="knowledge-check-link" href="#giriş"> Git ne tür bir program </a>
- <a class="knowledge-check-link" href="#text-editor-and-git">Git ile bir metin editörü arasında kaydettikleri ve kayıt tuttukları açısından ne gibi farklar vardır? </a>
- <a class="knowledge-check-link" href="#git-local"> Git yerel düzeyde mi yoksa uzak düzeyde mi çalışır ? </a>
- <a class="knowledge-check-link" href="#github-remote">Github yerel düzeyde mi yoksa uzak düzeyde mi çalışır ? </a>
- <a class="knowledge-check-link" href="https://www.youtube.com/watch?v=2ReR1YJrNOM">Git geliştiriciler için neden önemlidir ?</a>
- <a class="knowledge-check-link" href="https://youtu.be/1h9_cB9mPT8?t=162">Git ve GitHub neden geliştirici ekipleri için kullanışlıdır ?</a>

### Ekstra kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

- [What is Git and GitHub? adlı ingilizce makale](https://content.red-badger.com/resources/what-is-git-and-github)
- [What is version control? adlı ingilizce makale](https://www.atlassian.com/git/tutorials/what-is-version-control)
- [What is Git? adlı ingilizce makale](https://www.atlassian.com/git/tutorials/what-is-git)
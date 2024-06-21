---
title: "Remote'larla (Uzak Depolarla) Çalışmak"
---

### Giriş

Şimdiye kadar, müfredatın çeşitli projeleri üzerinde çalışırken kendi GitHub reponuzdan pull veya push işlemi yaptınız, remote repo'larla (uzak depolarla) çalıştınız. Bu bölümde, daha önce henüz karşılaşmamış veya kullanmamış olabileceğiniz biraz daha gelişmiş konuları ele alacağız.

### Derse genel bakış

Bu bölüm, bu derste öğreneceğiniz konuların genel bir özetini içerir.

- Geçmişi (commit history) değiştirmek için remote'ları kullanma.
- Geçmişi değiştirme işlemlerinin tehlikeleri.
- Geçmiş değiştirme işlemlerinin en iyi uygulamaları.

#### git push -\-force

Diyelim ki artık bir projede tek başınıza değil, bir başkasıyla çalışıyorsunuz. Yapılan değişikliklerle bir branch'i bir remote repo'ya göndermek istiyorsunuz. Git, değişikliklerinizi yalnızca local branch'i bu remote repo'daki en son commit'lerle güncellediyseniz gönderebilmenizi sağlar.

Eğer local branch'inizi güncellemediyseniz ve bir conflict (çakışma) oluşturacak şekilde bir commit'i `git push` etmeye çalışıyorsanız, hata mesajı alırsınız. Bu aslında harika bir şey! Bu, birlikte çalıştığınız kişiler tarafından oluşturulan ve felaketle sonuçlanabilecek commit'lerin üzerine yazmanızı önleyen bir güvenlik mekanizmasıdır. Hatayı almanızın nedeni, geçmişinizin güncel olmamasıdır.

Kısa bir sorgu gerçekleştirebilir ve `git push --force` komutunu bulabilirsiniz. Bu komut, remote repo'nun üzerine kendi local history'nizi yazar. Peki bunu başkalarıyla çalışırken kullanırsak ne olur? Hadi kendimizle çalışırken ne olacağını görelim. Terminalinize aşağıdaki komutları yazın ve interactive rebase tool belirdiğinde `Create fourth file` için commit'inizi kaldırın:

```bash
$ git push origin main
$ git rebase -i --root
$ git push --force
$ git log
```

Hmm, bu ilginç.  ` fourth file` 'ı local sistemimizde göremiyoruz. Orada olup olmadığını görmek için GitHub repomuzu kontrol edelim.

Olamaz, onu az önce yok ettik! Bu senaryoda, işbirliği (collaborating) yaptığınız kişilerin çalışmalarını potansiyel olarak yok edebilirsiniz! `git push --force` **çok tehlikeli bir komuttur ve başkalarıyla işbirliği yaparken dikkatli kullanılmalıdır**. Bunun yerine, local history'nizi `fetch`, `merge` ile güncelleyerek, ardından da tekrar push'lamayı deneyerek güncel olmayan geçmiş hatanızı düzeltebilirsiniz.

Farklı bir senaryo düşünelim:

```bash
$ touch test4.md
$ git add test4.md && git commit -m "Create fifth file"
$ git push origin main
$ git log
```

Commit mesajımıza baktığımızda _oops_, bir hata yaptığımızı fark ederiz. Bu commit'i geri almak istiyoruz ve bir kez daha push'lamaya zorlamanın cazibesine kapılıyoruz. Ama durun! Unutmayın, bu **çok tehlikeli bir komuttur**. Eğer kullanmayı düşünürseniz, her zaman uygun olup olmadığını ve bunun yerine daha güvenli bir komut kullanıp kullanamayacağınızı kontrol ediniz. Eğer başkalarıyla işbirliği yapıyorsak ve yeni yaptığımız bir commit'i _geri almak_ istiyorsak, bunun yerine `git revert` komutunu kullanabiliriz!

```bash
git revert HEAD
git push origin main
```

HEAD ile çalıştığımız zamanı hatırlıyor musunuz, yani yeniden düzenleme yaparken görüntülediğimiz mevcut commit'i? Bunun yapacağı şey, değişiklikleri HEAD'e geri döndürmektir! Daha sonra yeni commit'imizi üzerinde çalıştığımız branch'e (normalde çalışmamız büyük olasılıkla bir feature-branch üzerinde olacak olsa da bu örnekte main branch'e) göndeririz.

Şimdi `git push --force`un çeşitli tehlikelerini öğrendiğimize göre, muhtemelen neden var olduğunu ve ne zaman kullanılacağını merak ediyorsunuzdur. Geliştiricilerin `git push --force`u kullandığı çok yaygın bir senaryo, pull request'leri güncellemektir. Ortaklaşa çalışma ayrı bir derste daha ayrıntılı olarak ele alınmaktadır, ancak bu bölümden çıkarılacak sonuç, `--force` seçeneğinin yalnızca uygun olduğundan emin olduğunuzda kullanılması gerektiğidir. Hassas bilgilerin yanlışlıkla bir repoya yüklenmesi ve bu bilgilerin tüm oluşumlarını kaldırmak istemeniz gibi daha az yaygın senaryolar da vardır.

<span id='force-with-lease'>Bazı şirketlerde varsayılan seçenek olan `git push --force-with-lease`</span>, komutundan özellikle bahsetmek gerekir. Bunun nedeni bir hata emniyeti olmasıdır! Push etmeye çalıştığınız branch'in güncellenip güncellenmediğini kontrol eder ve eğer güncellenmişse size bir hata gönderir. Bu size, daha önce de belirtildiği gibi, işi `fetch` etme ve local reponuzu güncellemek için bir fırsat verir.

### Tehlikeler ve en iyi uygulamalar (best practices)

Bugüne kadar ele aldığımız tehlikeleri gözden geçirelim. Biliyorum, biliyorum, korkutucu şeyler - ama dikkatli olmalıyız yoksa iş arkadaşlarımızı bizden nefret eder hale getirebilir! Bu derse geri dönüp baktığınızda bir ortak nokta göreceksiniz. `amend`, `rebase`, `reset`, `push --force`  gibi komutlar, başkalarıyla işbirliği yaparken özellikle tehlikelidir. <span id='dangers'>Bu komutlar, iş arkadaşlarınızın oluşturduğu çalışmaları yok edebilir.</span> Bu nedenle bunu akılda tutun. Commit history'i yeniden yazmaya çalışırken, kullandığınız belirli komutların tehlikelerini her zaman kontrol edin ve ele aldığımız komutlar için bu en iyi uygulamaları izleyin:

<span id='best-practices'></span>

1. Eğer bir ekip projesinde çalışıyorsanız, geçmişi yeniden yazmanın güvenli olduğundan emin olun ve diğerlerinin bunu yaptığınızı bilmesini sağlayın.
2. Mümkünse, bu komutları sadece tek başınıza çalıştığınız dallarda kullanmayı tercih edin.
3. Bir şeyi zorlamak için `-f` flag'i kullanmak sizi korkutmalı ve bunu kullanmanız için gerçekten iyi bir nedeniniz olmalı.
4. Her işlemden sonra push yapmayın, yayınlanan geçmişi değiştirmekten mümkün olduğunca kaçınılmalıdır.
5. Ele aldığımız belirli komutlarla ilgili olarak:
    1. `git amend` için, remote repo'lara push'lanan commit'leri asla değiştirmeyin.
    2. `git rebase` için, başkalarının üzerinde çalışabileceği bir repoyu asla yeniden düzenlemeyin.
    3. `git reset` için, remote repo'lara push'lanan commit'leri asla sıfırlamayın.
    4. `git push --force` için, sadece uygun olduğunda kullanın, dikkatli kullanın ve tercihen öntanımlı olarak `git push --force-with-lease` kullanın.

### Ödev

<div class="lesson-content__panel" markdown="1">

1. Okuyabilirsiniz [GitHub's documentation on merge conflicts](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts)

    - Bunlardan biriyle karşılaşmanız an meselesi (eğer henüz karşılaşmadıysanız)! Merge conflicts (birleştirme çakışmaları) korkutucu görünse de aslında çok basittir. Bu kaynağa zaman ayırın ve belgelerin merge conflicts çözmeyi önerdiği iki farklı yolu incelediğinizden emin olun - GitHub'ın kendisinde ve komut satırınızda. Şu anda buna ihtiyacınız olmasa da, bu belgenin kaynağını aklınızın bir köşesinde tutmak, sonunda bir merge conflicts ile karşılaştığınızda ve çözümü nerede bulacağınızdan emin olmadığınızda çok değerli olacaktır.

2.  Okuyunuz [think-like-a-git](http://think-like-a-git.net/) \* Bu kaynağa da zaman ayırın, çok iyi yazılmış ve Git anlayışınızı sağlamlaştırmada çok yardımcı olacaktır.
</div>

### Bilgi ölçme

Bu bölüm, bu dersi kendi başınıza anlayıp anlamadığınızı kontrol etmeniz için sorular içermektedir. Bir soruyu yanıtlamakta zorlanıyorsanız, soruya tıklayın ve bağlantı verdiği materyali gözden geçirin.

- <a class='knowledge-check-link' href='#force-with-lease'>Geçmiş değişikliklerini remote bir repoya göndermenin güvenli yolu nedir?</a>
- <a class='knowledge-check-link' href='#dangers'>Geçmişi değiştiren operasyonların tehlikeleri nelerdir?</a>
- <a class='knowledge-check-link' href='#best-practices'>Geçmişi değiştiren operasyonların en iyi uygulamaları nelerdir?</a>

### Ek kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

- Git ile çalışma bilginizi derinleştirmek için interaktif bir yol arıyorsanız, bu oyuna göz atın, [Learn Git Branching](https://learngitbranching.js.org/)

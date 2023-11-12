### Giriş

Bu ders iyi commit mesajlarının önemini, nasıl yazılacağını, ne zaman commit edileceğini ve iyi commit geçmişine sahip olmanın neden bu kadar önemli olduğunu açıklayacaktır!

### Derse genel bakış

Bu bölüm, bu derste öğreneceğiniz konuların genel bir özetini içerir.

- Anlamlı bir commit mesajı nasıl yazılır
- Anlamlı commit mesajları neden önemlidir
- Ne zaman commit yapmalı

### Commit mesajları kendi derslerini hak edecek kadar önemli mi?

Evet! Size bunun nedenlerini hızlıca sıralayayım:

- İş başvurusu yaptığınızda, işverenler GitHub'daki projelerinize bakacak ve commit geçmişinizi inceleyeceklerdir. Başlangıç ​​seviyesi bir geliştirici olarak iyi commitlerinizin olması öne çıkmanıza yardımcı olacaktır.

- İyi bir commit mesajı geçmişine sahip olmak, sizin (veya kodunuz üzerinde çalışan diğer geliştiricilerin) hangi değişikliklerin neden yapıldığını hızlı bir şekilde görmenizi sağlayacaktır. Bu, kodda düzeltilmesi gereken bir hata bulunduğunda kullanışlıdır!

- İyi bir commit mesajı geçmişine sahip olmak, bir süre uzak kaldıktan sonra üzerinde çalıştığınız bir projeye geri döndüğünüzde de yardımcı olacaktır. Kodu ilk yazarken düşünce sürecinizi ve yaptığınız değişiklikleri muhtemelen hatırlamayacaksınız.

### Kötü ve iyi commitler

Konu commit yazmak olduğunda, bunları nasıl etkili bir şekilde yazacağınızı bilmek çok önemlidir. İşte kötü bir commit mesajı örneği:

```
fix a bug
```

Ne yaptığınızı açıklasa da, mesaj çok belirsizdir ve bu da ekibinizdeki diğer geliştiricilerin kafasının karışmasına neden olur. İyi bir commit mesajı, yaptığınız değişikliklerin arkasındaki **nedeni** açıklar. Başka bir deyişle, bir commit mesajı yaptığınız değişikliklerin hangi sorunu çözdüğünü ve nasıl çözdüğünü açıklar.

Etkili commitler iki ayrı bölümden oluşur: bir konu başlığı ve bir gövde:

#### Konu başlığı

Projede yaptığınız değişikliğin kısa bir özeti. **Not:** GitHub, commit başlıkları için 72 karakter sınırına sahiptir, bu nedenle commit başlığınızı bu sınırlar içinde tutmanızı öneririz.

```
Kod tabanında yaptığım değişiklik.
```

#### Gövde

Ne yaptığınıza dair kısa ama net bir açıklama.

```
Commitinizin hangi sorunu nasıl çözdüğünü açıklayın.
```

Artık iyi bir commit mesajı oluşturmanın sırrını öğrendiğimize göre, daha önceki commit mesajını düzeltmeye çalışalım:

```git
Şirket logosuna eksik bağlantıyı ve alternatif metni ekleyin.

Ekran okuyucular, bu bilgi olmadan engelli kullanıcılara görüntüleri okumayacaktır
```

Ahh, bu daha iyi! :) Şimdi, geliştiriciler bu commit mesajını daha iyi anlayabilirler çünkü bu commit mesajı aşağıdakileri sağlar:

- Kodunuzun eylemini belirten bir başlık sağlar (örneğin, "Şirket logosuna eksik bağlantı ve alternatif metin ekleme")
- Commitin neden yapılması gerektiğine dair kısa ama net bir açıklama sağlayan bir gövde içerir (örneğin, "Ekran okuyucular, bu bilgi olmadan görüntüleri engelli kullanıcılara okumayacaktır")
- Konuyu gövdeden yeni/boş bir satırla ayırır. Bu, takip etmenizi şiddetle tavsiye ettiğimiz bir en iyi uygulamadır. Diğer geliştiricilerin commit mesajlarını okumasını kolaylaştırır.

### Ne zaman commit yapılmalıdır

Bir commiti düşünmenin iyi bir yolu, kodunuzun yapıldığı andaki "anlık görüntüsü" gibidir. Kodunuzun o noktaya kadar olan versiyonu, geri dönmeniz veya tekrar bakmanız için kaydedilecektir.

Kod yazarken, kodda anlamlı bir değişiklik yaptığınızda her seferinde değişiklikleri commitlemek en iyi uygulama olarak kabul edilir. Bu, ilerlemenizin bir zaman çizelgesini oluşturacak ve bitmiş kodunuzun bir anda ortaya çıkmadığını gösterecektir.

Başka bir deyişle, üzerinde çalıştığınız bir kod parçasının istediğiniz gibi çalışmasını sağladığınızda, bir yazım hatasını düzelttiğinizde veya bir hatayı giderdiğinizde bir commit yapın.Deneyim kazandıkça, hangi değişikliklerin commit edilmesi gerektiği konusunda daha iyi bir anlayış geliştireceksiniz!

Bir projede çalışırken, SONUNDA bir şeyi tam olarak düzgün hale getirdiğiniz bir zaman gelecek (bu, değişikliklerinizi commitlemek iyi bir zaman olacaktır) ve ardından belki 30 saniye ile birkaç gün sonra bozulacaktır. Neyi değiştirdiğiniz hakkında hiçbir fikriniz yok, her şey aynı _görünüyor_ ve o satırı düzenlediğinizi hatırlamıyorsunuz, ama ne yazık ki artık istediğiniz gibi çalışmıyor. Commit geçmişinizi geriye doğru kontrol edebilecek ya da kodunuzu ilk başta o parçayı çalışır hale getirdiğinizde yaptığınız son commite geri dönebileceksiniz veya kodunuzun o zaman neye benzediğini görmek için geri gidebileceksiniz.

### Ödev

<div class="lesson-content__panel" markdown="1">

1.  Bu makale, [How to Write a Git Commit Message](https://cbea.ms/git-commit), iyi commit mesajlarının nasıl yazılacağına dair tüm ana temelleri kapsamaktadır. Makalenin tamamı harika ve bilgilendirici ancak asıl önemli kısmı “The seven rules of a great commit message.”

</div>

### İpuçları ve hatırlanması gerekenler:

- VSCode'u metin düzenleyiciniz olarak kullanmak (bunu Git Temelleri bölümünde ayarlamış olmalısınız), çok satırlı commit mesajlarını kolayca oluşturmanıza, her satırın karakter uzunluğunu kolayca görmenize ve yazımınızın doğru olduğundan emin olmak için [VSCode spell check extensions](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) kullanmanıza olanak tanır.
- Aktif bir dil kullanın: "Kart üreticiyi düzelt"
- "Kaydedildi" veya "güncellendi" gibi belirsiz commit mesajlarından kaçının
- Değişikliklerinizi erken ve sık sık commitleyin!

### Bilgi ölçme

Bu bölüm, bu dersi kendi başınıza anlayıp anlamadığınızı kontrol etmeniz için sorular içermektedir. Bir soruyu yanıtlamakta zorlanıyorsanız, soruya tıklayın ve verilen bağlantıdaki materyali gözden geçirin.

- <a class="knowledge-check-link" href="https://cbea.ms/git-commit/#intro">What are two benefits of having well-written commit messages and a good commit history?</a>
- <a class="knowledge-check-link" href="https://cbea.ms/git-commit/#limit-50">How many characters should the subject line of your commit message be?</a>

### Ek kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

- Yüksek bilgi içeren commit mesajlarını formüle etmenin bir yolu da bir şablonu takip etmektir. [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), keşfedebileceğiniz birçok commit mesajı şablonundan biridir.

- Conventional Commits (Geleneksel Commitler) hakkındaki bu harika eğitim videosunu keşfedin ➔ [Tam Video Bağlantısı](https://www.youtube.com/watch?v=OJqUWvmf4gg).. Videoda, Yarn (bir paket yöneticisi) ve sürüm oluşturma dahil olmak üzere en iyi commit mesajı uygulamaları gösterilmektedir. Yarn ve sürüm oluşturma bilgileri Temeller için henüz gerekli olmayabilir, ancak şimdilik bu konuda endişelenmenize gerek yok. Bu nedenle, commit mesajlarınızı ve geliştirme iş akışınızı keşfetmekten ve geliştirmekten çekinmeyin.

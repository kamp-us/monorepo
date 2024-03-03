### Giriş

Tarayıcınızda oynayabileceğiniz bir Taş Kağıt Makas oyunu yapıyoruz!

### Ödex

<div class="lesson-content__panel" markdown="1">
1. HTML, CSS ve Javascript dosyaları ile projenizi kurun ve Git deposunu hazırlayın.
2. Oyun tahtasını bir Gameboard nesnesi içinde bir dizi olarak saklayacaksınız, bu yüzden önce buradan başlayın! Oyuncularınız da nesneler içinde saklanacak ve muhtemelen oyunun akışını kontrol eden bir nesneye ihtiyacınız olacak.
   1. Buradaki ana hedefiniz mümkün olduğunca az global kod kullanmaktır. Bir şeyin sadece bir örneğine ihtiyacınız varsa (örneğin oyun tahtası, displayController vb.) o zaman fabrikayı bir IIFE'nin (modül deseni) içine alın ve bu şekilde ek örnekler oluşturulamaz.
   2. Bu projede, her bir mantık parçasının nerede bulunması gerektiği konusunda dikkatlice düşünün. Her küçük işlev parçası, oyun, oyuncu veya oyun tahtası nesnelerine sığabilmelidir. Onları "logical" (mantıklı) yerlere koymaya özen gösterin. Burada biraz zaman harcamak, ileride işinizi çok daha kolaylaştırabilir!
   3. Eğer bir sorun yaşıyorsanız, [Building a house from the inside out](https://www.ayweb.dev/blog/building-a-house-from-the-inside-out) bu projeye nasıl yaklaşacağınızı ve kodunuzu nasıl organize ve yapılandıracağınızı anlamak için oldukça uygun bir örneği ortaya koyan harika bir makaledir.
3. Önce konsolda çalışan bir oyun elde etmeye odaklanın. Oyunun ne zaman bittiğini kontrol eden mantığı dahil edin! Tüm kazanan 3'lüleri (3-in-a-rows) ve beraberlikleri kontrol etmelisiniz. Oyununuz çalışıncaya kadar DOM ve HTML/CSS'i düşünmekten kaçının.
4. Çalışan bir konsol oyununuz olduğunda, ekrandaki/DOM mantığını yönetecek bir nesne oluşturun. Oyun tahtası dizisinin içeriğini web sayfasına render eden bir işlev yazın (şimdilik, sadece oyun tahtası dizisini "X" ve "O" larla doldurarak ne olduğunu görebilirsiniz).
5. Oyuncuların uygun DOM öğeleriyle etkileşime geçerek (örneğin, oyuncuların işaretlerini koymak için tahta karesine tıklamasına izin vererek) tahtadaki belirli bir yere işaret eklemelerine izin veren fonksiyonları yazın. Oyuncuların zaten dolu olan noktalara oynamasını engelleyen mantığı unutmayın!
6. Arayüzü temizleyin, oyuncuların isimlerini girmelerine izin vermek için bir düğme ekleyin, oyunu başlatma/yeniden başlatma düğmesi ekleyin ve oyun sonunda sonuçları gösteren bir görüntü öğesi ekleyin!
</div>
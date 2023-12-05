### Giriş

Başardınız! Bu noktada JavaScript'in temellerini _gerçekten_ sağlam bir şekilde kavramış olmalısınız. Tabii ki öğrenilecek daha çok şey var ancak şu an oldukça fazla şey oluşturabiliyor olmalısınız. Son projemiz, şimdiye kadar öğrendiklerinizi bir araya getirecek: JavaScript, HTML ve CSS kullanarak bir ekran üzerinde hesap makinesi yapacaksınız.

Her zamanki gibi bu proje de sizin için kolay olmayacak unsurlar var ancak kursu şimdiye kadar takip ettiyseniz kesinlikle bitirmek için ihtiyacınız olan her şeye sahipsiniz. Size çeşitli adımları nasıl uygulayacağınızı göstereceğiz ancak yine de bunu nasıl uygulayacağınız size kalmış!

### Uyarı

<div class="lesson-note" markdown="1">

Bu hesap makinesi projesine başlamadan önce bir uyarıda bulunmamız gerekiyor. JavaScript'te karmaşık matematiksel ifadeleri nasıl değerlendireceğinizi araştırırken, muhtemelen cezbedici [`eval()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) fonksiyonuyla karşılaşacaksınız. Ancak bu fonksiyon çok tehlikeli olabilir ve [asla kullanılmamalıdır](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_eval!)! Bu projenin bir parçası olarak ifadeleri hesaplayacak kendi fonksiyonlarınızı oluşturmanız gerekecektir. Aynı `eval()` ile benzer şekilde bu proje için de ifadelerin nasıl hesaplanacağını araştırırken, bir dizeyi değerlendiren bir `new Function()` döndürmenizi öneren çözümlerle karşılaşabilirsiniz. Aynı `eval()` gibi, bu da [güvenli olmayan verilerin değerlendirilmesindeki potansiyel tehlikeler nedeniyle](https://stackoverflow.com/questions/4599857/are-eval-and-new-function-the-same-thing) kullanılmamalıdır. Ayrıca, tüm işi sizin için yapan çözümlerin nesi eğlenceli? Haydi başlayalım!

</div>

### Ödev

<div class="lesson-content__panel" markdown="1">
Erken ve sık sık commit yapmayı unutmayın! "Commit Message" dersine [buradan ulaşabilirsiniz](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/commit-messages)!

İşte bazı kullanım durumları (projenizin sahip olması gereken özellikler):

1.  Hesap makineniz, genellikle basit hesap makinelerinde bulabileceğiniz tüm temel matematik operatörleri için fonksiyonlar içereceği için aşağıdaki işlemler için fonksiyonlar oluşturarak ve bunları tarayıcınızın konsolunda test ederek başlayın.
    *   toplama
    *   çıkarma
    *   çarpma
    *   bölme
2.  Bir hesap makinesi işlemi: bir sayı, bir operatör ve başka bir sayıdan oluşur. Örneğin, 3 + 5. Bir hesap makinesi işleminin her bir parçası için üç değişken oluşturun. İlk sayı, operatör ve ikinci sayı için bir değişken oluşturun. Bu değişkenleri daha sonra ekranınızı güncellemek için kullanacaksınız.
3.  Parametre olarak bir operatör ve 2 sayı alan `operate` adında bir fonksiyon oluşturun. Yukarıda daha önceden oluşturduğunuz toplama, çıkarma, çarpma, bölme işlemlerini bu iki sayı üzerinde kullansın.
4.  Basit bir HTML hesap makinesi oluşturun. Her rakam ve işlem için bir buton olmalı.
    *  JS ile bağlantı kurmaya şimdilik takılmayın.
    *  Hesap makinesi için bir ekran da bulunmalı. Düzenli görünmesi için bazı örnek sayılarla doldurun.
    *  Bir "sil" butonu ekleyin.
5.  Sayı butonlarına tıkladığınızda ekranda görüntülenen fonksiyonları oluşturun. Bir sonraki adımda kullanmak için 'ekran değerini' bir yerde bir değişkende saklamalısınız.
6.  Hesap makinesini çalıştırın! Bir kullanıcı bir operatöre bastığında hesap makinesine girilen ilk sayıyı saklamanız ve ayrıca hangi işlemin seçildiğini kaydetmeniz ve ardından kullanıcı "=" tuşuna bastığında bunlar üzerinde `operate()` fonksiyonunu çalıştırmanız gerekir.
    *  Ekranda görüntülenebilen koda zaten sahip olmalısınız, bu yüzden `operate()` çağrıldığında, ekranda işlemin ‘çözümünü’ güncelleyin.
    *  Bu proje için en zor kısım budur. Tüm değerleri nasıl saklayacağınızı ve onlarla `operate` fonksiyonunu nasıl çağıracağınızı bulmanız gerekir. Mantığını anlamak biraz zaman alırsa üzülmeyin.
7.  Dikkat edilmesi gerekenler: kodunuzda ortaya çıkarsa bu hatalara dikkat edin ve düzeltin:
    *  Kullanıcılar birkaç işlemi bir araya getirebilmeli ve her sayı çifti bir seferde değerlendirilerek doğru yanıtı alabilmelidir. Örneğin, `12 + 7 - 5 * 3 =` işlemi `42` sonucunu vermelidir. Aradığımız davranışa bir örnek [öğrenci çözümü](https://mrbuddh4.github.io/calculator/) olabilir.
    *  **Hesap makineniz aynı anda tek bir sayı çiftinden fazlasını değerlendirmemelidir.** Örnek: bir sayı butonuna (`12`) ardından bir operatör butonuna (`+`) ikinci bir sayı butonuna (`7`) ve son olarak ikinci bir operatör butonuna (`-`) basıyorsunuz. Hesap makineniz şunları yapmalıdır: ilk olarak, ilk sayı çiftini (`12 + 7`) değerlendirmeli, ikinci olarak bu hesaplamanın sonucunu (`19`) görüntülemeli ve son olarak bu sonucu(`19`) bir sonraki operatörle (`-`) birlikte yeni hesaplamanızdaki ilk sayı olarak kullanmalıdır.
    *  Ekranı taşırmamaları için uzun ondalıklı cevapları yuvarlamalısınız.
    *  Tüm sayıları veya bir operatörü girmeden önce `=` butonuna basmak sorunlara neden olabilir!
    *  "sil" butonu mevcut tüm verileri silmelidir... kullanıcının "sil" butonuna bastıktan sonra gerçekten yeni bir başlangıç yaptığından emin olun
    *  Kullanıcı bir sayıyı 0'a bölmeye çalışırsa alaycı bir hata mesajı görüntüleyin... ve hesap makinenizi çökertmesine izin vermeyin!

#### Bonus ödevler

*   Kullanıcılar gerekli matematiği yaparlarsa ondalıklı sayılar alabilirler ancak henüz ondalıklı sayıları yazamazlar. Bir `.` butonu ekleyin ve kullanıcıların ondalıklı sayı girmesine izin verin! Ancak birden fazla yazmalarına izin vermediğinizden emin olun: `12.3.56.5.` Bu sayılar üzerinde matematik işlemleri yapmak zordur. \(ekranda zaten bir tane varsa ondalık butonunu devre dışı bırakın\)
*   Güzel görünsün! Bu, CSS becerilerinizi pratik yapmak için harika bir projedir. En azından işlemleri tuş takımı butonlarından farklı bir renk yapın.
*   “Geri al” tuşu ekleyin, böylece kullanıcı yanlış sayıya tıklarsa geri alabilir.
*   Klavye desteği ekleyin! (`/`) gibi tuşlar size sorun çıkartabilir. Bu sorunu çözmek için [bu dökümantasyonu](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) okuyun.
</div>
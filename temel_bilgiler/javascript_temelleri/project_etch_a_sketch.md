---
title: 'Çizim Tahtası'
---

### Giriş

Bu projede, portfolyonuza koyabileceğiniz ve DOM manipülasyonu becerilerinizi geliştirecek oldukça iyi bir oyuncak oluşturacaksınız. Bir eskiz defteri ve manyetik çizim tahtasının tarayıcı versiyonunu inşa edeceksiniz.

Bu proje sizin için kolay _olmamalı_. Doğru JavaScript metodlarını ve kullanılacak CSS kodlarını bulabilmek için bolca Google'ı kullanacaksınız. Aslında, amaç da bu! Daha önce öğrendiğiniz araçlarla bu projeyi _yapabilirsiniz_ ve eğer ihtiyacınız olduğunu düşünüyorsanız daha değinmediğimiz bir çok konuyu internetten öğrenebileceğiniz çokça kaynak var. Size ilk adımlarda rehberlik edeceğiz fakat bunları uygulamak size kalmış.

Eğer bir yerde takılıp ilerleyemediyseniz, sohbet odasına uğrayın. Sizi yönlendirecek biri çıkacaktır. ```

### Ödev

<div class="lesson-content__panel" markdown="1">
Sık sık ve erkenden commit etmeyi unutmayın! Commit Mesajları dersini buradan hatırlayabilirsiniz](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/commit-messages)!

1.  Bu projeye ait bir Git reposu kurmak için [Odin'in Tarifleri projesinin üstündeki talimatları izleyin](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/recipes#setting-up-your-projects-github-repository).
2.  16x16 kare div'lerden oluşan grid bir web sayfası oluşturun.
    *   JavaScript kullanarak div'leri oluşturun. HTML dosyanızda kopyala yapıştır yaparak bunları elle oluşturmaya çalışmayın!
    *   Grid karelerinizi başka bir "kapsayıcı" div'in içine koymanız iyi olur \(böylece doğrudan HTML'nize eklenebilir\).
    *   Div'lerin bir grid olarak \(her satırda yalnızca bir tane olması yerine\)  görünmesini sağlamalısınız. İsmine rağmen, temeller kursundan sonra Grid öğretileceğinden, bunun için CSS Grid'i araştırmak / kullanmak cazip gelmesin. Bu, özellikle flexbox için daha fazla pratik yapmak için bir fırsat!
    *   Karelerin boyutuna etki edebildikleri için border'lara (kenar çizgilerine) ve margin'lere (dış kenar boşluklarına) dikkat edin!
    *   "Aman Tanrım, neden grid oluşturamıyorum ???"
        *   CSS stil sayfanızı bağladınız mı?
        *   Tarayıcınızın geliştirici araçlarını açın.
        *   JavaScript konsolunda herhangi bir hata olup olmadığını kontrol edin.
        *   Öğelerin gerçekten görünüp görünmediğini, belki de bir şekilde gizlenip gizlenmediğini anlamak için "öğeler" bölmenizi kontrol edin.
        *    Gerçekten yüklenip yüklenmediğini görmek için JavaScript'inize `console.log` ifadeleri ekleyin.
3.  Fareniz üzerlerinden geçtiğinde grid div'lerinin renk değiştirmesi ve grid'inizde kalem gibi \(pikselleştirilmiş\) bir iz bırakması için bir "hover" efekti ayarlayın.
    *   İpucu: "Hovering", fareniz bir div'e girdiğinde gerçekleşen ve fareniz div'den ayrıldığında biten şeydir. Başlangıç noktası olarak bu olaylardan herhangi biri için olay dinleyicileri ayarlayabilirsiniz.
    *   Aşağıdakiler de dahil olmak üzere div'lerin rengini değiştirmenin birden çok yolu vardır:
        *   div'e yeni bir sınıf eklemek.
        *   JavaScript kullanarak div'in arka plan rengini değiştirmek.
4.  Ekranın üst kısmına bir düğme ekleyin. Kullanıcıya yeni grid için kare sayısını soran bir açılır pencere oluştursun. Kare sayısı girildikten sonra mevcut grid kaldırılmalı ve _önceki ile aynı büyüklükte_ \(örn. 960 piksel genişliğinde\) yeni bir grid yani eskiz defteri oluşturulmalıdır. **İpucu**: Kullanıcı girdisini maksimum 100 olarak sınırlayın. Daha fazla sayıda kare, daha fazla bilgisayar kaynağının kullanılmasına neden olarak istenmeyen gecikmelere, donmalara veya çökmelere neden olabilir.
    *   HTML'deki `button` etiketini ve tıklandığında bir JavaScript fonksiyonunun çalışmasını nasıl sağlayabileceğinizi araştırın.
    *   Ayrıca `prompt (diyalog kutusu)`na da bakın.
    *   Örneğin diyaloğa "64" girebilmeniz ve kullanılan toplam piksel miktarını değiştirmeden yepyeni bir 64x64 grid'inin oluşturulabilmesi gerekir.
5.  Projenizi GitHub'a aktarın!

#### Bonus ödevler
Farenizle bir dizi değişiklik yaparak bir karenin davranışını değiştirin.

1. Siyahtan beyaza basit bir renk değişikliği yerine her etkileşim, karenin RGB (Kırmızı Yeşil Mavi) değerini rastgele değiştirmelidir. 
2. Ek olarak, her etkileşimin kareye %10 daha fazla siyah veya renk eklediği aşamalı bir karartma efekti uygulayın. Amaç, yalnızca on etkileşimden sonra tamamen siyah bir kare elde etmektir.

Bu meydan okumalardan birini veya her ikisini birden yapmayı seçebilirsiniz, bu size kalmış.
</div>
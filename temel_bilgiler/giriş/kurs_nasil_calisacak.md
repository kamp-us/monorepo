### Introduction

Odin Projesi, sizi sıfırdan full stack bir geliştiriciye taşıyacak en iyi bilgi kaynaklarını sağlamaya adanmış açık kaynaklı bir topluluktur. Daha fazla bilgiyi Odin Projesi'nin [hakkında sayfası](https://www.theodinproject.com/about)nda bulabilirsiniz.

Bu ünitede internetin nasıl çalıştığını öğreneceğiz, bunun yanında bilgisayar ve web programlamanın temelleri hakkında düşünmeye başlayacağız.

Aşağıdaki bölümlerin ve derslerin her biri gerekli temel bilgileri temsil etmektedir. Kendiniz bir web geliştiricisi olma niyetiniz olmasa bile, bu materyal, internet üzerinde içerik oluşturma ve sunmanın hareketli parçaları hakkında yararlı bir anlayış kazanmanıza yardımcı olacaktır.

İnternete ve kendi bilgisayarınıza aşina olmakla başlayacağız. Daha sonra bir geliştirme ortamı oluşturmaya ve Git ile GitHub hakkında bilgi edinmeye çalışacağız. Ardından, arka uç teknolojilerinin temel kavramlarını kapsayan kısa bir girişle arka uca adım atmadan önce HTML, CSS ve Javascript gibi ön uç teknolojilerin temellerini gözden geçireceğiz.

Bu ünitenin sonunda, yalnızca web'in nasıl çalıştığını anlamakla kalmayacaksınız, aynı zamanda kendi web uygulamalarınızı oluşturmak için kullanacağınız tüm teknolojileri tanımlayıp birbirinden ayırabileceksiniz. Komut satırından rahatça çalışırken basit bir web sayfası oluşturabilecek, ona stil verebilecek ve küçük etkileşim öğeleri ekleyebileceksiniz.

Ne olduğu ve neden yararlı olduğu (ve neden öğrenmeniz gerektiği!) hakkında bir bağlam bilmeden doğrudan sunucu tarafı programlamaya dalmak saçma olurdu diye düşünüyoruz.

### Nasıl çalışır

Bu müfredat, belirli bir konuyu öğrenmek için internetteki en iyi içeriği bir araya getirerek çalışır. Her derste ilk önce konuyu tanıtacağız ve sizi başkaları tarafından hazırlanan dış kaynaklara yönlendirmeden önce kullanışlı bir bağlam sağlamaya çalışacağız.

Çoğu ders, devam etmeden önce cevaplamanız gereken soruları içerecektir. Bazı dersler sizden alıştırmaları tamamlamanız isteyecektir. Bunun dışında, gerçekten bir şeyler inşa ederek anlayışınızı geliştirmenize yardımcı olmak için müfredat boyunca çeşitli projeler sunuyoruz.

Odin Projesini veya programlamayı, okuldaki bir ders olarak düşünmemeye çalışın. Bir sınava girip sonra geçmeniz ya da kalmanız için her şeyi aynı anda öğreneceğiniz bir materyal değil. Bunu bir kartopu gibi düşünebilirsiniz. Siz kendiniz bir kartopusunuz. Karla dolu bir tepeden aşağı yuvarlanıyorsunuz; ne kadar yuvarlanırsanız üzerinize o kadar çok kar yapışır. Elbette üzerinizden kar da düşecek ve bazı şeyleri sık sık unutacaksınız, ancak bu sadece sürecin bir parçası. Bir projeye geldiğinizde hiçbir şeyi aklınızda tutmadığınızı veya ezberlemediğinizi düşünüyorsanız korkmayın. TBu doğaldır ve herkesin başına gelir. Yardım için Google'a ve Odin Topluluğu'na güvenerek sorunlarınızı tek tek çözmeye başladığınızda bilgiler geri gelecektir.

### Dil hakkında bir not

Odin Projesi, dünyanın her yerinden nasıl geliştirici olunacağını öğrenmeyi arzulayan insanların ilgisini çekiyor. Lütfen bu müfredatın İngilizce olarak yazıldığını ve sizin için tercüme edemeyen veya etmesi beklenmeyen, İngilizce konuşan kişiler tarafından korunduğunu unutmayın. Bir programcıya dönüştükçe, içine girdiğiniz dünyanın İngilizceye sıkı sıkıya bağlı olduğunu göreceksiniz. Bu, programlama dilinizin sözdiziminin, onu nasıl kullanacağınızı öğreten belgelerin ve topluluktaki insanların çoğunluğunun sizinle İngilizce iletişim kurmayı beklediği anlamına gelir.

İngilizce konuşamıyorsanız veya İngilizce sizin için birincil dil değilse, bu gerçek sizin cesaretinizi kırmak için değil, sizi bu gerçekliğe hazırlamak içindir.

Bu hazırlığın bir başka parçası olarak, hemen anlamadığınız konu ve terimlere ekstra zaman ayırmanızı *şiddetle* öneriyoruz. Ayrıca, bu konuları kendi ana dilinizde öğreten ek kaynaklar aramanızı da öneririz, böylece bunları daha iyi anlayabilirsiniz.

Buna ek olarak müfredatımızın yanı sıra kendi dilinizde bir çeviri sözlüğü kullanmayı da düşünebilirsiniz böylece  ilerledikçe bu kelimelere kolayca referans verebilirsiniz. Dünya çapında çok çeşitli diller konuşulduğu için bunlarla ilgili herhangi bir önerimiz yok; bunlardan birini bulmak belki de arama yaparak yararlı araçları çevrimiçi olarak nasıl bulacağınızı öğrenmede iyi bir ilk adım olabilir. Bu, geliştirici olmayı öğrenme sürecinizde ilerledikçe kullanacağınız ve geliştireceğiniz bir beceridir.

### Sırada ne var

Bu kursu tamamladığınızda, web programlamanın yapı taşları konusunda kendinizi rahat hissetmeli, ancak daha derine inmek için can atmalısınız. Her ne kadar bu kurstaki ana konuların her birini derinlemesine incelemek için oldukça fazla zaman harcıyor olsak da, aslında bu sadece bir sonraki adımın (ve bununla yapabileceğiniz tüm havalı şeylerin) bir kısmı.

Bu kursun son dersi size Full Stack JavaScript ve Full Stack Rails yolu arasında seçim yapma fırsatı verecektir; her ikisi de bu kursta oluşturulan temeli alıp materyalin uygulamalı anlayışına dönüştürmek için tasarlanmıştır. Her yol, bu ham yapı taşlarını alıp bunları son derece işlevsel bir beceri seti haline getirmeye odaklanacaktır.

Odin Projesi profesyoneller tarafından sürdürülmektedir. Mevcut en iyi kaynaklardan bazılarını seçtik ve bunların nasıl inceleneceğine dair bir rehber hazırladık. İyi bir kaynak yoksa kendi kaynaklarımızı yazarız. Bununla birlikte, müfredattaki **her şeyin** kasıtlı olarak dahil edildiğini ve başarılı bir programcı olmanız için hayati önem taşıdığını bilin.

Müfredatta ilerledikçe, her bölüm kendisinden önce gelen her şeyin üzerine inşa edilir, bu nedenle bazı şeyleri atlamak bilginizde anlaşılmayan alanlar yaratacaktır ve bu da sorunları çözme ve elinizdeki görevi anlama yeteneğinizi etkilemeye başlar.

Açıkça belirtilmediği sürece isteğe bağlı olarak kabul edilen tek şey ek kaynaklardır. Daha iyi bir anlayış elde etmek için bir konuya daha derinlemesine dalmak istediğinizi veya ihtiyaç duyduğunuzu hissetmeniz durumunda bu kaynaklar buradadır.

**HİÇBİR ŞEYİ ATLAMAYIN!** 

### Ek kaynaklar

Bu bölümde ilgili içeriğe yönelik faydalı bağlantılar bulunmaktadır. Bu tür ek kaynaklar programı tamamlamak için gerekli değildir, bu yüzden tamamlayıcı olarak düşünebilirsiniz.
 
- Görünüşe göre bu derste henüz ek kaynak yok. Müfredatımıza katkıda bulunarak bu bölümü genişletmemize yardımcı olabilirsiniz.
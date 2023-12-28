---
title: 'Konumlandırma'
---

### Giriş

Şimdiye kadar margin (dış kenar boşluğu), padding (iç kenar boşluğu) ve flexbox gibi öğeleri kullanarak öğeleri ekran etrafında hareket ettirme konusunda epey pratik yaptınız. Bu tekniklerin tümü CSS'nin varsayılan "konumlandırma modu" tekniğine dayanmaktadır. Bu varsayılan konumlandırma modu sezgiseldir ve neredeyse tüm düzenleme ihtiyaçlarınız için kullanmaya devam edeceksiniz. Ancak elinizdeki diğer yöntemler bazı durumlarda çok yararlı olabilir.

### Öğrenme çıktıları

 - Mutlak konumlandırmayı nasıl kullanacağınızı öğreneceksiniz.
 - Sabit konumlandırmayı nasıl kullanacağınızı öğreneceksiniz.
 - Yapışkan konumlandırmayı nasıl kullanacağınızı öğreneceksiniz.
 - Her bir özellik arasındaki farkı ve bunları nasıl birleştireceğinizi öğreneceksiniz.

### Statik ve göreli konumlandırma

Alıştığınız varsayılan konumlandırma modu ``position: static``'tir. Statik ve göreli arasındaki fark oldukça basittir. Static her öğenin varsayılan konumudur ve ``top``, ``right``, ``bottom`` ve ``left`` özellikleri öğenin konumunu etkilemez. Göreli ise statik ile hemen hemen aynıdır, ancak  ``top``, ``right...(etc.)`` özellikleri öğeyi belgenin akışı içindeki normal konumuna göre kaydırır.

### Mutlak konumlandırma

``position: absolute`` bir şeyi diğer öğeleri etkilemeden ekrandaki belirli bir noktaya yerleştirmenizi sağlar. Daha açık bir ifadeyle, bir öğe üzerinde mutlak konumlandırma kullanmak, o öğeyi normal belge akışından çıkarırken, bir ata öğeye göre konumlandırır. Basit bir şekilde ifade etmek gerekirse: belgenin normal akışından çıkarılan öğeler diğer öğeleri etkilemez ve diğer öğelerden de etkilenmez. Mutlak konumlandırmayı kullanmak,  ``top``, ``right``, ``bottom``, ve ``left`` özelliklerini kullanarak öğeleri ekranda herhangi bir yere konumlandırmanıza olanak tanır. Bu özellik, diğer öğelerin hiçbirini rahatsız etmeden bir şeyi ekranda tam bir noktaya konumlandırmak istediğinizde gerçekten kullanışlıdır. Mutlak konumlandırma için birkaç iyi kullanım durumu vardır:

- kipler
- üzerinde bir başlık bulunan resim
- diğer öğelerin üstündeki simgeler

Aşağıdaki örnekte, bir resim üzerinde metin görüntülemek için mutlak konumlandırma kullanıyoruz.

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="css,result" data-slug-hash="poWyWeJ" data-editable="true" data-user="TheOdinProjectExamples" style={{"height":"300px","boxSizing":"border-box","display":"flex","alignItems":"center","justifyContent":"center","border":"2px solid","margin":"1em 0","padding":"1em"}}>
 <span>TheOdinProject(<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
     tarafından (<a href="https://codepen.io">CodePen'de</a>) hazırlanan <a 
     href="https://codepen.io/TheOdinProjectExamples/pen/poWyWeJ">Absolute Position | CSS Positioning</a>  adlı ingilizce örneğe bakınız.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Uyarı: Mutlak konumlandırmanın çok özel kullanım durumları vardır ve mümkünse flexbox veya grid kullanımına öncelik verilmelidir. Mutlak konumlandırma, tüm sayfa düzenlerini yapmak için kullanılmamalıdır.

### Sabit konumlandırma

Sabit öğeler de belgenin normal akışından çıkarılır ve ``viewport``'a göre konumlandırılır. Konumlandırmak için temel olarak ``top``, ``right``, ``bottom`` ve ``left`` özelliklerini kullanırsınız ve kullanıcı kaydırdıkça orada kalacaktır. Bu özellikle gezinme çubukları ve kayan sohbet düğmeleri gibi şeyler için kullanışlıdır.

### Yapışkan konumlandırma

Yapışkan öğeler, siz onları kaydırana kadar normal öğeler gibi davranır, daha sonra sabit öğeler gibi davranmaya başlarlar. Ayrıca belgenin normal akışından da çıkarılmazlar. Kulağa kafa karıştırıcı gelebilir, ancak [bu ingilizce codepen](https://codepen.io/theanam/pen/MPLBYy) örneği sizin için bazı şeyleri açıklığa kavuşturabilir. Bölüm başlıkları gibi şeyler için kullanışlıdır. Bir mağaza sayfasında kaydırma yaparken hâlâ hangi kategoriyi incelediğinizi görebilmeyi hatırlıyor musunuz? İşte böyle yapılır!

### Ödev

<div class="lesson-content__panel" markdown="1">

1. [Bu](https://www.youtube.com/watch?v=jx5jmI0UlXU)  ingilizce Youtube videosu hızlı bir tempodadır ancak farklı konumlandırma davranışlarının iyi bir görsel temsilini sunuyor. Hadi izleyelim.
2. [Bu ingilizce MDN makalesi](https://developer.mozilla.org/en-US/docs/Web/CSS/position) konumlandırma ile ilgili tüm kavramsal ayrıntıları kapsar.
3. [Bu ingilizce CSS Tricks](https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/) sayfası size konu hakkında farklı bir fikir verecektir. Bunu siz de okumalısınız.
4. Son olarak, [bu ingilizce makale](https://www.kevinpowell.co/article/positition-fixed-vs-sticky/) sabit ve yapışkan konumlandırma arasındaki farkı tartışıyor, farkı daha iyi anlamak için harika bir okuma.
</div>

### Bilgi ölçme

Bu bölüm, bu dersi anladığınızı kontrol etmeniz için sorular içermektedir. Aşağıdaki soruları kendi kendinize yanıtlamakta zorlanıyorsanız, yanıtı bulmak için yukarıdaki materyali gözden geçirin.

- [Statik ve göreceli konumlandırma arasındaki fark nedir?](#static-ve-göreli-konumlandırma)
- [Mutlak konumlandırma ne işe yarar?](#mutlak-konumlandırma)
- [Sabit ve yapışkan konumlandırma arasındaki fark nedir? ilgili ingilizce makale için tıklayın.](https://www.kevinpowell.co/article/positition-fixed-vs-sticky/)


### Ek kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

- [Understand the CSS Position Property With Practical Examples](https://www.makeuseof.com/css-position-property-practical-examples/) adlı ingilizce makale, öğeleri konumlandırmak için bazı farklı CSS yöntemleri sunmaktadır.

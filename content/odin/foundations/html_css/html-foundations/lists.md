---
title: 'Listeler'
---

### Giriş

İster IMDB'nin en iyi 250 filmi ister FBI'ın en çok arananları olsun, listeler web'de her yerdedir ve web sayfalarınızda eninde sonunda bir listeye ihtiyacı olacaktır.

Neyse ki, HTML ile birkaç farklı türde liste oluşturabiliriz.

### Derse genel bakış

Bu bölüm, bu derste öğreneceğiniz konulara genel bir bakış içermektedir.

- Sırasız (unordered) liste nasıl oluşturulur?
- Sıralı (ordered) liste nasıl oluşturulur?

### Sırasız listeler

Herhangi bir sırada satın alınabilecek öğelerden oluşan bir alışveriş listesi gibi, sıranın önemli olmadığı bir öğe listesine sahip olmak istiyorsanız, sırasız liste kullanabilirsiniz.

Sırasız listeler `<ul>` öğesi kullanılarak oluşturulur,  <span id="li"></span>liste içindeki her öğe `<li>` öğesi kullanılarak oluşturulur.

Sırasız bir listedeki her liste öğesi bir madde işaretiyle başlar:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="powjajd" data-user="TheOdinProjectExamples" style={{"height":"300px","boxSizing":"border-box","display":"flex","alignItems":"center","justifyContent":"center","border":"2px solid","margin":"1em 0","padding":"1em"}}>
  <span> 
  <a href="https://codepen.io">CodePen</a>'de
  TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) tarafından hazırlanan <a href="https://codepen.io/TheOdinProjectExamples/pen/powjajd">html-sırasız-listesi</a>'ni inceleyebilirsiniz.
  </span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Sıralı listeler

Bunun dışında, bir yemek tarifi için adım adım talimatlar veya en sevdiğiniz 10 TV programı gibi sıralamanın *önemli* olduğu öğelerden oluşan bir liste oluşturmak istiyorsanız, sıralı (ordered) liste kullanabilirsiniz.

Sıralı listeler `<ol>` öğesi kullanılarak oluşturulur. İçlerindeki her bir öğe yine `<li>` öğesi kullanılarak oluşturulur. Ancak, sıralı bir listedeki her liste öğesi bunun yerine bir sayıyla başlar:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="yLXYvYp" data-user="TheOdinProjectExamples" style={{"height":"300px","boxSizing":"border-box","display":"flex","alignItems":"center","justifyContent":"center","border":"2px solid","margin":"1em 0","padding":"1em"}}>
  <span>
  <a href="https://codepen.io">CodePen</a>'de
 TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>) tarafından hazırlanan <a href="https://codepen.io/TheOdinProjectExamples/pen/yLXYvYp">html-sıralı-listesi</a>'ni inceleyebilirsiniz.
</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Ödev

<div class="lesson-content__panel" markdown="1">
Listeleri kullanarak biraz pratik yapmak için yeni bir HTML belgesi oluşturun ve aşağıdaki listeleri oluşturun:

1.  En sevdiğiniz yiyeceklerden oluşan sırasız bir alışveriş listesi
1.  Bugün yapmanız gereken işlerin sıralı bir listesi
1.  Bir gün ziyaret etmek istediğiniz yerlerin sırasız bir listesi
1.  Tüm zamanların en sevdiğiniz 5 video oyunu veya filminin sıralı bir listesi

</div>

### Bilgi ölçme

Bu bölüm, bu dersi kendi kendinize anlayıp anlamadığınızı kontrol etmeniz için sorular içermektedir. Bir soruyu yanıtlamakta zorlanıyorsanız, soruya tıklayın ve bağlantılı olduğu materyali gözden geçirin.

- [Sırasız bir liste oluşturmak için hangi HTML öğesi kullanılır?](#sırasız-listeler)
- [Sıralı bir liste oluşturmak için hangi HTML öğesi kullanılır?](#sıralı-listeler)
- [Hem sırasız hem de sıralı listelerde liste öğeleri oluşturmak için hangi HTML öğesi kullanılır?](#li)

### Ek kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

- [Sırasız liste öğesine ilişkin ingilizce MDN makaleleri](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
- [Sıralı liste öğesine ilişkin ingilizce MDN makaleleri](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)
- [Shay Howe'un ingilizce HTML listeleri eğitimi](https://learn.shayhowe.com/html-css/creating-lists/)

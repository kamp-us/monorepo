### Giriş

Emmet, VS Code içinde inşaa edilmiş bir eklentidir. HTML ve CSS'i daha efektif yazmaya yarayan Emmet, içinde birçok akıllı kısayollar bulunur. Şimdiye kadar halihazırda birçok HTML ve CSS yazdınız ve VS Code'u kullanıyorsanız Emmet'le bir şekilde karşılaşmış olma ihtimaliniz yüksektir.

### Öğrenme Çıktıları

Bu dersin sonunda, bunları biliyor olacaksınız:

-   Emmet'in en yararlı bazı kısayollarını kullan
-	VS Code'da kendinize özel tuş bağlantıları kurmayı öğren

### Emmet

Emmet, HTML ve CSS ile çalışan kişiler için çok kullanışlı bir eklentidir. Neyse ki Emmet'in o kadar büyük bir öğrenme eğrisi yok ve eğer ki halihazırda HTML ve CSS yazmayı biliyorsanız, Emmet'in kısayollarını kavramakta herhangi bir sorun yaşamayacaksınız.

Emmet ile standard bir HTML metni oluşturarak başlayalım. VS Code'da boş bir html dosyası açın ve `!` yazın. Bu Emmet'in şu şekilde önerilerini tetiklemeli:
![Triggering Emmet](https://cdn.statically.io/gh/TheOdinProject/curriculum/1953c1f219a8b321e7ecef9ebcb92834f50ffb9f/html_css/intermediate_html/emmet/imgs/00.png)

<kbd>Enter</kbd> tuşuna basmak aşağıdaki metni oluşturmalıdır:

![Generating boilerplate HTML](https://cdn.statically.io/gh/TheOdinProject/curriculum/1953c1f219a8b321e7ecef9ebcb92834f50ffb9f/html_css/intermediate_html/emmet/imgs/01.png)

Emmet'in birçok kısaltmasından birini kullandık. Kontrol edebileceğiniz birçok yararlı Emmet kısaltması vardır, bunlar: [Wrap with Abbreviation](https://docs.emmet.io/actions/wrap-with-abbreviation/) ve [Remove Tag](https://docs.emmet.io/actions/remove-tag/). İlerlemeden önce mutlaka bunlara göz gezdiriniz.

Bu ikisinin ne kadar kullanışlı olduğunu göz önünde bulundurarak onlar için VS Code kısayolları ayarlayacağız.
Klavye kısayolları penceresini açmaya başlamak için, alt sol köşede bulunan dişli simgesine tıklayarak klavye kısayollarını seçin veya <kbd>Cmd</kbd> + <kbd>K</kbd> tuşlarına basıp ardından <kbd>Cmd</kbd> + <kbd>S</kbd> tuşlarına basarak açabilirsiniz.
![Setting up VS code shortcuts](https://cdn.statically.io/gh/TheOdinProject/curriculum/1953c1f219a8b321e7ecef9ebcb92834f50ffb9f/html_css/intermediate_html/emmet/imgs/02.png)

Klavye kısayolları penceresine girdikten sonra, `Emmet:<action>` şeklinde arama yaparak tüm Emmet eylemlerine erişebilmelisiniz. Bizim durumumuzda ise `Emmet:Wrap With Abbreviation` olarak arama yapabilirsiniz.

![Emmet actions](https://cdn.statically.io/gh/TheOdinProject/curriculum/1953c1f219a8b321e7ecef9ebcb92834f50ffb9f/html_css/intermediate_html/emmet/imgs/03.png)

Şimdi, artı işaretine tıklayarak istediğiniz belirli eylem için bir kısayol ekleyebilirsiniz. Bu için uygun tuş kombinasyonunu girmeniz yeterlidir. 
Aynı işlemi `Remove Tag` için yapmak istiyorsanız, `Emmet:Remove tag` şeklinde arama yaparak aynı adımları uygulayabilirsiniz.

### Ödev

<div class="lesson-content__panel" markdown="1">

1.  [This](https://www.youtube.com/watch?v=V8vizNQKtx0) , Emmet için iyi bir videodur. Devam edin ve `11:37`'e kadar izleyiniz çünkü henüz kapsamadığımız bazı içerikleri gösteriyor. Zamanla o konuya da geleceğiz.
2.  [Emmet cheat sheet](https://docs.emmet.io/cheat-sheet/) 'ye bir göz atın. Onu ezberlemeniz gerekmiyor, ancak farklı kullanım şekilleriyle tanışmanız iyi olacaktır.
3.  [Emmet documentation](https://docs.emmet.io/). 'ni inceleyin. Yine, her şeyi ezberlemeniz gerekmiyor, ancak farklı olanaklarla oynamak iyi olacaktır.

</div>

### Bilgi ölçme

Bu bölüm, bu dersi kendi kendinize anlayıp anlamadığınızı kontrol etmeniz için sorular içermektedir. Bir soruyu yanıtlamakta zorlanıyorsanız, soruya tıklayın ve bağlantılı olduğu materyali gözden geçirin.

-   [Why should you use Emmet?](#emmet)
-   [What are some useful Emmet abbreviations?](#emmet)
-   [What syntax would you use to create this element `<p class="text"></p>`?](https://docs.emmet.io/cheat-sheet/)
-   [What syntax expands to an element with a child element inside of it? For example: `<div><p></p></div>`](https://docs.emmet.io/cheat-sheet/)
-   [What syntax would you use to create three elements that have the same class name?](https://docs.emmet.io/cheat-sheet/)

### Ek kaynaklar

Bu alanda içerikle alakalı faydalı linkler bulunmaktadır. Zorunlu değildir, ek olarak düşünülmelidir.

- [Emmet Keybindings](https://marketplace.visualstudio.com/items?itemName=agutierrezr.emmet-keybindings) tarafından [Andrés Gutiérrez](https://agutierrezr.github.io/), Visual Studio Code için bir Emmet tuş bağlamaları setidir. Hangi tuşa ne atanacağını bilmiyorsanız, bu önceden tanımlanmış bir tuş bağlamaları grubu olarak kullanılabilir.

- [Emmet Live](https://marketplace.visualstudio.com/items?itemName=ysemeniuk.emmet-live) tarafından [Yurii Semeniuk](https://github.com/semeniuk), Visual Studio Code için başka bir uzantıdır. Emmet kısaltmalarını düzenlerken sürekli olarak karşılık gelen HTML yapısını oluşturabilir. İstenen sonuç için bu uzantıyı çağırmadan önce rastgele bir metin parçası seçmeyi deneyin.
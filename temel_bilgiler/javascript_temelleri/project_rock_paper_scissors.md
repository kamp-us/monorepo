### Giriş

İlkokul klasiklerinden olan "taş kağıt makas" oyununun basit bir uygulamasını yapacağız. Bu oyunu bilmiyorsanız, [Wikipedia makalesine](https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors) veya [bu](https://www.wikihow.com/Play-Rock,-Paper,-Scissors) adım adım talimata bakabilirsiniz. Şimdilik sadece tarayıcı konsolunda oyunu oynayacağız, ancak __daha sonra bu projeye tekrar dönecek ve butonlar ve metinlerle bir Grafiksel Kullanıcı Arayüzü ekleyeceğiz,__ bu nedenle kodu GitHub'ta saklamayı unutmayın! Öğrenci çözümlerinde GUI(GKA)'ye sahip 'Canlı Önizleme' bağlantılarını fark edebilirsiniz - bu daha sonraki bir derste geliyor. Oraya ulaştığınızda geri gelip bağlantınızı eklemeyi unutmayın!

### Başlamadan önce pratik alıştırmalar

1. Bir sayfaya JavaScript eklemenin üç yolunu tespit edin.
2. Deneyin! JavaScript'de `console.log("Hello World");` yazın ve tarayıcının konsolunda görünüp görünmediğini kontrol edin.

Son olarak, bu sizin sıfırdan oluşturduğunuz ilk JavaScript programı olduğundan, problem çözme konusuna ilişkin önceki dersi unutmayın. Herhangi bir kod yazmadan önce çözümünüzü planlayın ve oluştururken her parçayı test ederek çalışıp çalışmadığını kontrol edin ve sonra diğerine geçin!

### Ödev

<div class="lesson-content__panel" markdown="1">
Erken ve sık sık commit atmayı unutmayın! [Commit Mesajı dersine buradan](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/commit-messages) bakabilirsiniz!

1. Projeniz için yeni bir Git deposu oluşturun.
2. Bir boş HTML belgesi oluşturun ve bir script etiketi oluşturun (İpucu: harici bir .js dosyasını kullanmak en iyi yöntemdir). Bu oyun sadece konsoldan oynanacak, bu yüzden başka bir şey hakkında endişelenmeyin.
3. Oyununuz bilgisayara karşı oynanacak, bu yüzden rastgele 'Taş', 'Kağıt' veya 'Makas' döndürecek "getComputerChoice" adlı bir fonksiyonla başlayın. Bu fonksiyonu oyunda bilgisayarın oynaması için kullanacağız. *İpucu: bir sonraki adıma geçmeden önce bu özelliğin beklenen çıktıyı döndürdüğünden emin olmak için konsolu kullanın!*
4. Taş Kağıt Makas'ın tek bir turunu oynayan bir fonksiyon yazın. Fonksiyon, iki parametre almalıdır - "playerSelection" ve "computerSelection" - ve ardından turun kazananını belirten bir dize döndürmelidir: `"Kaybettin! Kağıt, Taşı yener"` gibi.
    * Fonksiyonunuzun playerSelection parametresini büyük-küçük harf duyarsız hale getirin (kullanıcılar 'taş', 'TAŞ', 'TaŞ' veya başka herhangi bir varyasyonu girebilirler).
    * Turu yeniden oynayarak beraberlikleri hesaba katın.

5. **Önemli not:** Bu fonksiyon çağrısının sonuçlarını daha sonra kullanmak istiyorsanız `console.log()` etmek yerine `return` etmelisiniz, öyleyse hadi sonuçları görmek için console.log'u kullanarak bu fonksiyonu test edelim:
   
   ```javascript
   function playRound(playerSelection, computerSelection) {
     // your code here!
   }

   const playerSelection = "taş";
   const computerSelection = getComputerChoice();
   console.log(playRound(playerSelection, computerSelection));
   ```

6. game() adlı yeni bir fonksiyon yazın. Bu fonksiyon _içinde_ önceki fonksiyonu kullanarak skor tutan ve sonunda bir kazanan veya kaybeden rapor eden en iyi beşli(best-of-five) oyun oynayın.
    * Fonksiyon çağrılarını tekrarlamak için "döngü" kullanmayı henüz öğrenmediniz... Başka bir yerden döngüler hakkında bilgi sahibiyseniz (veya daha fazla öğrenmek istiyorsanız), kullanmaktan çekinmeyin. Aksi takdirde, endişelenmeyin! Sadece `playRound` fonksiyonunuzu 5 kez arka arkaya çağırın. Döngüler sonraki derslerde ele alınacaktır.
    * Bu noktada, her turun sonuçlarını ve sonunda kazananı görüntülemek için `console.log()` kullanıyor olmalısınız.
    * Kullanıcıdan girdi almak için `prompt()` kullanın. [Gerekirse buradaki dokümanları okuyun.](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
    * İhtiyaç duyarsanız, önceki fonksiyonlarınızı yeniden çalıştırabilirsiniz. Özellikle, dönüş değerini daha kullanışlı bir şey için değiştirmek isteyebilirsiniz.
    * Yararlı olacağını düşünüyorsanız daha fazla "yardımcı" fonksiyon oluşturmaktan çekinmeyin.

</div>
<div class="lesson-note" markdown="1">
Bunun gibi etkileşimli projeler yaparken, daha fazla özellik eklemek, etkileşimi, kullanıcı deneyimini, web sitenizin tasarımını ve stilini vb. geliştirmek isteyebilirsiniz.

Bunu yapmamanızı ve bu çabayı portföy projeleriniz için saklamanızı öneririz.

Öğrenme bilinci ve portföy hakkında daha fazla bilgi için [Becoming a TOP Success Story](https://dev.to/theodinproject/becoming-a-top-success-story-mindset-3dp2) adlı ingilizce Odin bloğunun [Part 5](https://dev.to/theodinproject/learning-code-f56) ve [Part 7](https://dev.to/theodinproject/strategically-building-your-portfolio-1km4) bölümlerini okuyun.
</div>
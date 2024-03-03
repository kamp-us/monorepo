### Giriş

Önceki dersteki 'Book' örneğini gelişirelim ve onu küçük bir Kütüphane uygulamasına dönüştürelim.

### Ödev

<div class="lesson-content__panel" markdown="1">

1. Eğer henüz yapmadıysanız, proje dosyalarınızı temel HTML/CSS ve JS dosyalarıyla oluşturun.
2. Tüm kitap nesneleriniz bir dizide saklanacak,bu yüzden betiğe (constructor değil) kullanıcının girdilerini alıp yeni kitap nesnelerini bir diziye kaydedecek bir fonksiyon ekleyin. Kodunuz şuna benzer olmalı:

   ```javascript
   const myLibrary = [];

   function Book() {
     // the constructor...
   }

   function addBookToLibrary() {
     // do stuff here
   }
   ```

3. Diziyi döngü ile gezip her kitabı sayfada gösteren bir fonksiyon yazın. Bunları bir tür tablo içinde gösterebilirsiniz veya her biri kendi "card"ında gösterebilirsiniz. Dizine -şimdilik- kendi elimile birkaç kitabı eklemek, gösterim açısından yardımcı olabilir.
4. Bir tane "NEW BOOK" düğmesi ekleyin; bu düğme, kullanıcıların yeni kitap için detayları girmelerine izin veren bir form açmalıdır; yazar, başlık, sayfa sayısı, kitabın okunup okunmadığı ve istediğiniz diğer bilgiler içerebilir. Örneğin, bir formun kenar çubuğunda gösterilmesini isteyebilir veya `<dialog>` etiketini kullanarak [dialogs and modals](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) keşfetmek isteyebilirsiniz. Bunun nasıl yapılacağı size kalmış ancak büyük olasılıkla formunuzu gönderdiğinizde beklediğiniz gibi çalışmadığını göreceksiniz. Bu, `submit` girdisinin varsayılan olarak verileri bir sunucuya göndermeye çalışmasından kaynaklanır. Eğer hesap makinesi ödevinin bonus bölünü yaptıysanız, `event.preventDefault();` yöntemini hatırlayabilirsiniz. Bu sorunu nasıl çözebileceğinizi öğrenmek için [event.preventDefault documentation](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) belgesine göz atın!
5. Kütüphaneden kitabı kaldırmak için her kitabın kendisine bir düğme ekleyin.
   1. DOM öğelerinizi kütüphane dizisi içindeki ilgili kitap nesneleri ile ilişkilendirmeniz gerekecek. Bunun için kolay bir çözüm, onlara kütüphane dizisinin indeksine karşılık gelen bir veri özniteliği (index) vermektir.

6. Her kitabın görüntüsüne, `read` durumunu değiştirmek için bir düğme ekleyin.
   1. Bu işlemi kolaylaştırmak için `Book` prototip örneğinizde bir kitabın `read` durumunu değiştiren bir işlev oluşturmalısınız.


NOT: Şu anda herhangi bir depolama türü eklemek zorunda değilsiniz. Bu projeye daha sonra kursun ilerleyen aşamalarında geri dönme seçeneğiniz olacak.
</div>

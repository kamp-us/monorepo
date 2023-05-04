# Türkçe Odin Projesi

### NASIL KATKI SAĞLAYABİLİRİM? 
İngilizce ve Türkçe dil yeterliğiniz iyiyse yardımınıza ihtiyacımız var! <br/> <br/>
	1. _Issue_ kısmında çevrilmeyi bekleyen metinlerden birini seçin. <br/>
	2. _Issue_ altına çeviriyi üstlendiğinizi belirten bir yorumda bulunun. <br/>
	3. Bu repoyu bilgisayarınıza klonlayın. <br/>
	4. Çeviriye başlamadan önce aşağıda yer alan çeviri rehberimizi okuduğunuza emin olun.<br/> 
	5. Çeviriyi tamamladıktan sonra son halini kontrol edin ve gerekli düzenlemeleri yapın. <br/>
	6. Bitmiş çeviriyi _commit_ edip _pull request_ olarak gönderin veya _issue_ altına yoruma iliştirerek yollayın. <br/>
	7. Editör çevirinizi kontrol etsin ve yayına hazırlasın. <br/>
	8. Tebrikler! Bu maceraya atılacak olanlara önemli bir destekte bulundunuz. Artık adınız katkı sağlayanlar listesinde! <br/>
	


> **ChatGPT çevirileri kabul ediliyor mu?**
> 	 - Dikkatlice kontrol edip gerekli düzeltmeleri yapmanız kaydıyla makine çevirisini de kabul ediyoruz!


---

# ÇEVİRİ REHBERİ


>**_Referans olarak kullanılabilecek sözlükler_**
>+ [TDK Türkçe Sözlük](https://sozluk.gov.tr) <br> _(örn. black kelimesi için siyahın eş anlamlısını (kara) arıyorsanız buraya bakabilirsiniz. )_
>+ [Tureng - İngilizce-Türkçe Kelime Sözlüğü](https://tureng.com) <br> _(örn. variable kelimesinin Türkçe karşılığını arıyorsanız ilk sonuçlara veya "bilgisayar" kategorisindeki sonuçlara bakabilirsiniz.)_


>_İstisna olduğunu düşündüğünüz, Türkçe karşılığından şüphe duyduğunuz veya çevrilip çevrilmemesi gerektiğinden emin olamadığınız sözcük ve ifadeler için_ **referans listesi: **[Türkçe Odin Projesi-Sözcük Referans Listesi](https://docs.google.com/spreadsheets/d/1zJPo19TCgb4aYEMrX-wP_n3_OWEY9CzSTVj633fOBZs/edit?usp=sharing)


### DİKKAT EDİLMESİ GEREKENLER

+ **İngilizce metindeki paragraf düzenlemesi olduğu gibi korunmalıdır.**

+ **İngilizce metindeki markdown etiketleri olduğu gibi korunmalıdır.** <br> _(örn. ####, **, ``` )_

+ **Anlamayı zorlaştırabileceği için devrik cümlelerden olabildiğince kaçınılmalıdır.**

- **İngilizcedeki _you_ zamirini "siz" olarak çeviriniz.**

+ **Deyim ve özdeyiş gibi kültürel ifadeler, Türkçede aynı anlamı sağlayan eşdeğerleriyle değiştirilmelidir.** <br> _(örn. "It's raining cats and dogs" --> :x: "Kedi ve köpek yağıyor" :heavy_check_mark: "Bardaktan boşanırcasına yağmur yağıyor")_

+ **Türkçe noktalama işaretleri esas alınmalıdır. Kaynak metinde görülen noktalama işaretleri yanıltıcı olabilir.** <br>**Sık yapılan bir hata --> ~~Edat ve bağlaçtan önce veya sonra virgül kullanmak.~~** <br> _(örn. ...söz vermişti ~~**fakat,**~~ tutmadı.)_

+ **Bir sözcüğün karşılığını sözlüklerde bulamadıysanız [Türkçe Odin Projesi-Sözcük Referans Listesi](https://docs.google.com/spreadsheets/d/1zJPo19TCgb4aYEMrX-wP_n3_OWEY9CzSTVj633fOBZs/edit?usp=sharing)ne bakınız. Aradığınızı yine bulamadıysanız, İngilizce sözcüğün sonuna "türkçe" ifadesini ekleyerek Google araması yapınız.** <br>_(örn. object relational mapping türkçe)_ <br>**Google aramasından da sonuç alamazsanız editörlere danışınız.** 


### ÇEVRİLMEYECEKLER LİSTESİ

+ **HTML etiketlerini, olaylarını, JS metotlarını vb. özellikleri çevirmeyiniz.** <br> _(örn. <button.>, onClick, .map(), preventDefault )_ 

+ **Terminal komutlarını çevirmeyiniz.** <br> _(örn. npm install, git push)_

+ **Browser/web API isimlerini çevirmeyiniz.** <br> _(örn. localStorage)_      

+ **Sayfa sonlarında verilen dış linkleri çevirmeyiniz.** <br> _(örn. [Go deep into Javascript events with this video](https://www.youtube.com/watch?v=8aGhZQkoFbQ))_

+ **Web geliştirme dünyasında birçok ürün ve bunlara dair terim bulunmaktadır. Çeviride anlamı koruyabilmek için bunların çevrilmemesine dikkat edilmelidir. Gerektiği yerde orijinal haliyle, çevrilmeden verilmelidir.**<br>_(örn. webpack, react, CRUD)_    ***Referans için: [Türkçe Odin Projesi-Sözcük Referans Listesi](https://docs.google.com/spreadsheets/d/1zJPo19TCgb4aYEMrX-wP_n3_OWEY9CzSTVj633fOBZs/edit?usp=sharing)

+ **Bir istisna olarak yazılım/bilgisayar terimi olan kısaltmalar, mümkün olduğunca orijinal halinde verilmeye çalışılmalıdır. Kısaltmanın Türkçe bir karşılığı varsa İngilizcesinin yanına parantez içinde yazılmalıdır.** <br> _(örn. USA(ABD) )_      ***Referans için: [Türkçe Odin Projesi-Sözcük Referans Listesi](https://docs.google.com/spreadsheets/d/1zJPo19TCgb4aYEMrX-wP_n3_OWEY9CzSTVj633fOBZs/edit?usp=sharing)

---

### Maintainer/Editör Takımı

- [ ] [Umut Berkay Soydan](https://github.com/ubsoydan) <br/>
- [ ] [Can Şirin](https://github.com/cansirin)

---

## Katkı Sağlayanlar
- @kullanıcıadı

---
Lisans için license.md dosyasına bakınız.

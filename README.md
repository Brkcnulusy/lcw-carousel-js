# LC Waikiki Carousel

LC Waikiki api ile kullunılarak kullanıcıların ürünler arasında gezebilmesini sağlayan bir carousel ile beğendiğini ürünü favorilere eklemek istediğinde kalp resmine tıklayarak favorilere eklediği bir geliştirmedir.

## Ana Özellikler

--*-- **Carousel**: Ürünler arasında sayfa değiştirmeden gezebilmemizi sağlar. Sağa ve sola olarak iki yönde ürünlerimizi kaydırarak gezebiliriz.

--*-- **Favori Butonu**: Beğendiğimiz ürünleri favorilere eklemek için oluşturulmuş bir buton örneğidir. Resimlerden oluşur Ve tıklandığında içi boş olan kalp resmi yerine dolu olan ile değişir.

--*-- **Local Storage**: Projede local storage vardır. Bu size şöyle bir avantaj sağlar, favori butonuna bastığınız ürünün id'si local storda tutularak sayfa yenilendiğinde yada sayfadan çıkıldığında ve sonrasında tekrar sayfayaya girildiğinde favorile ekli bir şekilde gelecektir.

--*-- **Modüler Yapı**: Proje, modüler bir yapıya sahip olduğu için, geliştiriciler ihtiyaçlarına göre yeni özellikler ekleyebilir veya mevcut özellikleri çıkarabilir.


## Kurulum

--1. .Projeyi Kopyalayın
İlk olarak, projeyi yerel bilgisayarınıza kopyalamk için GitHub'dan klonlayın:
```bash
git clone git@github.com:Brkcnulusy/lcw-carousel-js.git
cd lcw-carousel-js
```
--2. .Bağımlılıkları Yükleyin
Herhangi bir Bağlılığı bulunmamaktır. Projece vanilya.js ile yazılmıştır.

--3. .Uygulamayı Çalıştırın
Eğer Live Server uzantısı yüklü ise html dosyasına sağ tıklayıp ilk seçenek olan Live Server ile Açın seçeneğine tıklayıp açabilirsiniz.
Live Server uzantısına sahip değilseniz terminale npm run dev yazarak ve Tarayıcınızda http://localhost:3000 adresine giderek uygulamayı kullanmaya başlayabilirsiniz.

### Kullanım
Http isteklerini kullanmak için request.js adlı dosyamız bulunmaktadır ve içinde http methodları bulunmakradır. Bu methodları kullanmak için:
import { get, post, put, delete } from "./request.js"; yazarak ulaşabilirsiniz ve projede çağırabilirsiniz.

Projede kullandığımız resimler ise assets için images klasöründe tutulmaktadır ordan kullanabilir yada eklemek istediğiniz resim varsa o dosyaya ekleyebilirsiniz.


# Project Link
[Room-Page](https://brkcnulusy.github.io/lcw-carousel-js/)
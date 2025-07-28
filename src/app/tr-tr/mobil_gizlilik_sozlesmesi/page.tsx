import React from 'react'

function page() {
    return (
        <div className="min-h-screen bg-[#F6F9FC] flex items-center justify-center p-6 mb-5">
            <div className="bg-white max-w-4xl w-full p-8 rounded-2xl shadow-md mt-16">
                <div className="flex items-center gap-4 mb-6">
                </div>
                <div className="text-gray-600 text-lg space-y-4 ">
                    <h1 className='text-2xl bold'>Gizlilik Politikası</h1>
                        <p className='text-sm'>Bu İnternet sitesini kullanarak kişisel verilerinizin işlenmesini kabul etmiş olursunuz.
                         Güvenliğiniz bizim için önemli. Bu sebeple, bizimle paylaşacağınız kişisel verileriniz hassasiyetle korunmaktadır.
                        </p>
                    <h2 className='text-xl bold'>Veri Sorumlusu</h2>
                         <p className='text-sm'>Biz, Pasistan, veri sorumlusu olarak, bu gizlilik ve kişisel verilerin korunması 
                            politikası ile ziyaret etmekte olduğunuz İnternet sitesi kapsamında hangi kişisel verilerinizin hangi amaçlarla 
                            işleneceği, işlenen verilerin kimlerle ve hangi sebeplerle paylaşılabileceği, veri işleme yöntemimiz ve hukuki 
                            sebepleri ile; işlenen verilerinize ilişkin haklarınızın neler olduğu hususunda siz kullanıcılarımızı aydınlatmayı 
                            amaçlıyoruz.
                        </p>
                    <h2 className='text-xl bold'>Toplanan Kişisel Veriler</h2>
                    <p className='text-sm'>Bu İnternet sitesi tarafından toplanan kişisel verileriniz: </p>
                        <ul className="list-disc pl-5">
                            <li className='text-sm'>E-posta adresi</li>
                            <li className='text-sm'>Ad ve soyad</li>
                            <li className='text-sm'>TC Kimlik Numarası</li>
                            <li className='text-sm'>KBS Kullanıcı adı ve şifresi</li>
                            <li className='text-sm'>Telefon numarası</li>
                        </ul>

    <h2 className='text-xl bold'>Kullanılan Servisler</h2>
    <h3 className='text-xl bold'>Altyapı servisleri</h3>
        <ul className="list-disc pl-5">
            <li className='text-sm'>
                <strong>Turhost</strong>: Turhost, altyapı ve barındırma hizmetleri için kullanılmaktadır. Verileriniz Linode veri 
                merkezlerinde saklanabilir.
            </li>
        </ul>
    <h3 className='text-xl bold'>Ödeme sistemleri</h3>
        <ul className="list-disc pl-5">
            <li className='text-sm'>
                <strong>Iyzico</strong>: Iyzico, online ödeme işlemleri için kullanılan bir ödeme altyapısıdır.
            </li>
        </ul>
    <h2 className='text-xl bold'>Verilerin İşlenme Amaçları</h2>
        <p className='text-sm'>Kişisel verileriniz, bu İnternet sitesi tarafından amacına uygun hizmet sunulabilmesi,
            yasal yükümlülüklerin yerine getirilmesi, hizmet kalitesinin artırılması, iletişim, güvenlik ve gerektiğinde yasal merciler ile bilgi 
            paylaşılabilmesi amaçları ile işlenmektedir. Kişisel verileriniz, bu sayılan amaçlar dışında kullanılmayacaktır.</p>
    <h2 className='text-xl bold'>Verilerin Aktarılması</h2>
        <p className='text-sm'>Bu İnternet sitesi tarafından toplanan kişisel verileriniz, yasal zorunluluklar haricinde, açık rızanız olmadan üçüncü kişiler ile 
            paylaşılmaz. Ancak hizmet sağlayıcılarımız, iş ortaklarımız ve yasal merciler ile, hizmetin sağlanması ve yasal yükümlülüklerin yerine
            getirilmesi amaçlarıyla gerekli olduğu ölçüde paylaşılabilir.</p>
    <h2 className='text-xl bold'>Çerez Kullanımı</h2>
        <p className='text-sm'>Bu İnternet sitesi çerez kullanmaktadır. 
            Çerezler, bir İnternet sayfası ziyaret edildiğinde kullanıcılara ilişkin birtakım bilgilerin kullanıcıların terminal cihazlarında 
            depolanmasına izin veren düşük boyutlu zengin metin biçimli text formatlarıdır. Çerezler, bir İnternet sitesini ilk ziyaretiniz 
            sırasında tarayıcınız aracılığıyla cihazınıza depolanabilir ve aynı siteyi aynı cihazla tekrar ziyaret ettiğinizde, tarayıcınız 
            cihazınızda site adına kayıtlı bir çerez olup olmadığını kontrol eder. Eğer kayıt var ise, kaydın içindeki veriyi ziyaret etmekte
            olduğunuz İnternet sitesine iletir. Bu sayede İnternet sitesi, sizin daha önceki ziyaretinizi tespit eder ve size iletilecek içeriği
            ona göre belirler.</p>
    <h2 className='text-xl bold'>Yasal Haklarınız</h2>
    <h3 className='text-2xl bold'>KVKK Kapsamında Haklarınız</h3>
        <p className='text-sm'>6698 sayılı KVKK madde 11 uyarınca herkes,
            veri sorumlusuna başvurarak kendisiyle ilgili aşağıda yer alan taleplerde bulunma hakkına sahiptir:</p>
            <ol className="list-disc pl-5">
                <li className='text-sm'>Kişisel verilerinin işlenip işlenmediğini öğrenme.</li>
                <li className='text-sm'>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme.</li>
                <li className='text-sm'>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme.</li>
                <li className='text-sm'>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme.</li>
                <li className='text-sm'>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme.</li>
                <li className='text-sm'>KVKK madde 7 ile öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme.</li>
                <li className='text-sm'>Düzeltme, silme ve yok edilme talepleri neticesinde yapılan işlemlerin, kişisel verilerin 
                aktarıldığı üçüncü kişilere bildirilmesini isteme.</li>
                <li className='text-sm'>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin
                kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme.</li>
                <li className='text-sm'>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde 
                zararın giderilmesini talep etme.
                </li>
            </ol>
        <h2 className='text-xl bold'>İletişim</h2>
            <p className='text-sm'>Kişisel verilerinizle ilgili haklarınızı kullanmak veya Gizlilik Politika'mız hakkında daha fazla bilgi
            almak için admin@pasistan.com adresinden bizimle iletişime geçebilirsiniz.
            </p>
        <h2 className='text-xl bold'>Onay ve Yürürlük</h2>
            <p className='text-sm'>İnternet sitemiz ile kişisel verilerinizi
            paylaşmak, tamamen sizin tercihinizdir. İnternet sitemizi kullanmaya devam ettiğiniz takdirde, bu Gizlilik
            Politikası'nı kabul ettiğiniz varsayılacaktır. Bu politika, <strong>14 Temmuz 2025</strong> tarihinde yürürlüğe girmiş
            olup, gerektiğinde güncellenir.
            </p>
            </div>
            </div>
        </div>
    )
}

export default page
